import { NextResponse } from "next/server";
import { Resend } from "resend";
import bcrypt from "bcryptjs";
import * as admin from "firebase-admin";
import { getFirestoreDb } from "@/lib/firebaseAdmin";
import { SignupSchema } from "@/lib/schemas/auth";
import { RateLimiter } from "@/lib/rate-limit";

const signupLimiter = new RateLimiter({
  limit: 5,
  route: "/api/signup",
});

export async function POST(req: Request) {
  try {
    // Rate limit check
    const limitResult = await signupLimiter.check(req);
    if (!limitResult.success && limitResult.response) {
      return limitResult.response;
    }

    const data = await req.json();
    
    // 1. Zod input validation (Strict)
    const validationResult = SignupSchema.safeParse(data);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Validation Error", details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, password } = validationResult.data;

    // 2. Hash the password securely with bcryptjs (Salt factor 12)
    const hashedPassword = await bcrypt.hash(password, 12);

    const db = getFirestoreDb();
    if (db) {
      try {
        // Check if user already exists in Firestore
        const userSnapshot = await db.collection("users").where("email", "==", email).get();
        if (!userSnapshot.empty) {
          return NextResponse.json({ error: "An account with this email already exists" }, { status: 400 });
        }

        // Add user to database
        await db.collection("users").add({
          name,
          email,
          password: hashedPassword,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });
      } catch (dbError) {
        console.error("Error saving user to Firestore:", dbError);
      }
    } else {
      console.warn("Firestore db is not available; skipping database write.");
    }

    // Send a notification via Resend if API key is defined
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        const adminEmail = (process.env.ADMIN_EMAIL || "support@lumoraspace.in").trim();
        await resend.emails.send({
          from: "LumoraSpace <support@lumoraspace.in>",
          to: [adminEmail],
          subject: `New Ecosystem Account Created: ${name}`,
          html: `
            <h2>New Ecosystem Account</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p>Welcome them to the ecosystem!</p>
          `,
        });
      } catch (emailError) {
        console.error("Error sending signup alert email:", emailError);
      }
    }

    return NextResponse.json({ success: true, user: { name, email } }, { status: 200 });
  } catch (error) {
    console.error("Signup API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
