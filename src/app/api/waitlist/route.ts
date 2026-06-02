import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as admin from "firebase-admin";
import { getFirestoreDb } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    const db = getFirestoreDb();
    if (db) {
      try {
        await db.collection("waitlist").add({
          email,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });
      } catch (dbError) {
        console.error("Error saving to Firestore:", dbError);
      }
    } else {
      console.warn("Firestore db is not available; skipping database write.");
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        const adminEmail = (process.env.ADMIN_EMAIL || "admin@example.com").trim();
        const { error } = await resend.emails.send({
          from: "Lumora Waitlist <onboarding@resend.dev>",
          to: [adminEmail],
          subject: `New Waitlist Signup: ${email}`,
          html: `<p>A new user joined the waitlist: <strong>${email}</strong></p>`,
        });

        if (error) {
          console.error("Resend Error:", error);
        }
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }
    } else {
      console.warn("RESEND_API_KEY is not defined. Email dispatch skipped.");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
