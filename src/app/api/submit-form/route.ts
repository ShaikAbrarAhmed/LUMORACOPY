import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as admin from "firebase-admin";
import { getFirestoreDb } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, cohort, college, phone, message } = data;

    if (!name || !email || !cohort) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Save to Firebase Firestore
    const db = getFirestoreDb();
    if (db) {
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
      }
    } else {
      console.warn("Firestore db is not available; skipping database write.");
    }

    // 2. Send Email via Resend
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        const adminEmail = (process.env.ADMIN_EMAIL || "admin@example.com").trim();
        console.log("ADMIN_EMAIL =", adminEmail);
        const { error } = await resend.emails.send({
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
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}