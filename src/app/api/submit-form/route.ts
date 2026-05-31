import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as admin from "firebase-admin";



// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Replace escaped newlines in private key
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
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await req.json();
    const { name, email, cohort, college, phone, message } = data;

    if (!name || !email || !cohort) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Save to Firebase Firestore
    try {
      await db.collection("cohort_applications").add({
        name,
        email,
        cohort,
        college,
        phone,
        message,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    } catch (dbError) {
      console.error("Error saving to Firestore:", dbError);
      // We can continue to send the email even if DB fails, or we can throw.
      // throw new Error("Failed to save to database");
    }

    // 2. Send Email via Resend
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com"; // Set this in .env.local
    
    try {
      const { data, error } = await resend.emails.send({
        from: "Lumora Cohorts <onboarding@resend.dev>", // Resend default for testing
        to: [adminEmail],
        subject: `New Cohort Application: ${name} for ${cohort}`,
        html: `
          <h2>New Cohort Application Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>College:</strong> ${college}</p>
          <p><strong>Cohort:</strong> ${cohort}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error("Resend API returned an error:", error);
        throw new Error(error.message);
      }
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
