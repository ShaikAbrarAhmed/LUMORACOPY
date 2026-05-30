import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as admin from "firebase-admin";

const resend = new Resend(process.env.RESEND_API_KEY);

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  } catch (error) {
    console.error("Firebase admin initialization error", error);
  }
}

const db = admin.firestore();

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    try {
      await db.collection("waitlist").add({
        email,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    } catch (dbError) {
      console.error("Error saving to Firestore:", dbError);
    }

    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
    
    try {
      const { error } = await resend.emails.send({
        from: "Lumora Waitlist <onboarding@resend.dev>",
        to: [adminEmail],
        subject: `New Waitlist Signup: ${email}`,
        html: `<p>A new user joined the waitlist: <strong>${email}</strong></p>`,
      });

      if (error) throw new Error(error.message);
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
