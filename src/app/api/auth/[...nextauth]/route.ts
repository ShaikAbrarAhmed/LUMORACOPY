import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getFirestoreDb } from "@/lib/firebaseAdmin";
import * as crypto from "crypto";
import bcrypt from "bcryptjs";
import { RateLimiter } from "@/lib/rate-limit";

const loginLimiter = new RateLimiter({
  limit: 5,
  route: "/api/auth/signin",
});

console.log("GOOGLE_CLIENT_ID:", !!process.env.GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET:", !!process.env.GOOGLE_CLIENT_SECRET);
console.log("NEXTAUTH_SECRET:", !!process.env.NEXTAUTH_SECRET);
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        try {
          const db = getFirestoreDb();
          if (!db) {
            console.warn("Firestore db not available; using NextAuth local test fallback.");
            if (credentials.email === "test@example.com" && credentials.password === "password") {
              return { id: "test-user", name: "Test User", email: "test@example.com" };
            }
            return null;
          }

          const snapshot = await db.collection("users").where("email", "==", credentials.email).get();
          if (snapshot.empty) return null;

          const userDoc = snapshot.docs[0];
          const user = userDoc.data();

          // 1. Try to verify password using bcrypt
          let isMatch = await bcrypt.compare(credentials.password, user.password);
          
          if (!isMatch) {
            // 2. Fallback check: try SHA-256 for legacy users
            const sha256Hash = crypto.createHash("sha256").update(credentials.password).digest("hex");
            if (user.password === sha256Hash) {
              isMatch = true;
              
              // 3. Lazy upgrade legacy hash to bcrypt in the background
              try {
                const newBcryptHash = await bcrypt.hash(credentials.password, 12);
                await db.collection("users").doc(userDoc.id).update({
                  password: newBcryptHash
                });
                console.log(`Successfully migrated legacy password for ${user.email} to bcrypt.`);
              } catch (upgradeError) {
                console.error("Failed to upgrade legacy password:", upgradeError);
              }
            }
          }

          if (isMatch) {
            return {
              id: userDoc.id,
              name: user.name,
              email: user.email,
            };
          }
        } catch (error) {
          console.error("Error in NextAuth credentials authorize:", error);
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production" ? `__Secure-next-auth.session-token` : `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});

async function authHandler(req: Request, context: { params: Promise<{ nextauth: string[] }> }) {
  if (req.method === "POST") {
    const url = new URL(req.url);
    if (
      url.pathname.includes("/signin") ||
      url.pathname.includes("/callback/credentials")
    ) {
      const limitResult = await loginLimiter.check(req);
      if (!limitResult.success && limitResult.response) {
        return limitResult.response;
      }
    }
  }
  return handler(req, context);
}

export { authHandler as GET, authHandler as POST };
