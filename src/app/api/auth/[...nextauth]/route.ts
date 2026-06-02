import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getFirestoreDb } from "@/lib/firebaseAdmin";
import * as crypto from "crypto";

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

          const hashedPassword = crypto.createHash("sha256").update(credentials.password).digest("hex");
          if (user.password === hashedPassword) {
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
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
