import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as admin from "firebase-admin";
import { getFirestoreDb } from "@/lib/firebaseAdmin";
import { RateLimiter } from "@/lib/rate-limit";

const waitlistLimiter = new RateLimiter({
  limit: 10,
  route: "/api/waitlist",
});

export async function POST(req: Request) {
  try {
    // Rate limit check
    const limitResult = await waitlistLimiter.check(req);
    if (!limitResult.success && limitResult.response) {
      return limitResult.response;
    }

    const data = await req.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    const db = getFirestoreDb();
    if (!db) {
      console.error("Firestore db is not available.");
      return NextResponse.json(
        { error: "Database configuration error: Firestore DB not available" },
        { status: 500 }
      );
    }

    try {
      await db.collection("waitlist").add({
        email,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    } catch (dbError: any) {
      console.error("Error saving to Firestore:", dbError);
      return NextResponse.json(
        { error: `Database write failed: ${dbError.message || dbError}` },
        { status: 500 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        const adminEmail = (process.env.ADMIN_EMAIL || "support.lumoraspace@gmail.com").trim().toLowerCase();
        const { error } = await resend.emails.send({
          from: "Lumora Waitlist <onboarding@resend.dev>",
          to: [adminEmail],
          subject: `New Waitlist Signup: ${email}`,
          html: `<p>A new user joined the waitlist: <strong>${email}</strong></p>`,
        });

        if (error) {
          console.error("Resend Error:", error);
          return NextResponse.json(
            { error: `Email dispatch failed: ${error.message || error}` },
            { status: 500 }
          );
        }
      } catch (emailError: any) {
        console.error("Error sending email:", emailError);
        return NextResponse.json(
          { error: `Email dispatch failed: ${emailError.message || emailError}` },
          { status: 500 }
        );
      }
    } else {
      console.warn("RESEND_API_KEY is not defined. Email dispatch skipped.");
      return NextResponse.json(
        { error: "Email configuration error: RESEND_API_KEY not defined" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
