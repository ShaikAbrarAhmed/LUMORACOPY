import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as crypto from "crypto";
import * as admin from "firebase-admin";
import { getFirestoreDb } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, password } = data;

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Hash the password with SHA-256 (safe, built-in, no external dependencies required)
    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

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
        const adminEmail = (process.env.ADMIN_EMAIL || "admin@example.com").trim();
        await resend.emails.send({
          from: "Lumora Ecosystem <onboarding@resend.dev>",
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
