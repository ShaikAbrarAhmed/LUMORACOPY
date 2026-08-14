import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as admin from "firebase-admin";
import { getFirestoreDb } from "@/lib/firebaseAdmin";
import { CohortSubmitSchema } from "@/lib/schemas/cohort";
import { RateLimiter } from "@/lib/rate-limit";
import { programs } from "@/data/programs";

const submitFormLimiter = new RateLimiter({
  limit: 10,
  route: "/api/submit-form",
});

export async function POST(req: Request) {
  try {
    // Rate limit check
    const limitResult = await submitFormLimiter.check(req);
    if (!limitResult.success && limitResult.response) {
      return limitResult.response;
    }

    const data = await req.json();

    // Zod validation boundary
    const validationResult = CohortSubmitSchema.safeParse(data);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Validation Error", details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const { 
      name, email, college, phone, message,
      year, status, paymentPlan, programSlug 
    } = validationResult.data;

    // Validate program on the server
    const program = programSlug ? programs[programSlug] : undefined;
    if (!program) {
      return NextResponse.json(
        { error: "Invalid or missing program" },
        { status: 400 }
      );
    }

    const cohort = program.title;
    const programDuration = program.duration;
    const programFee = program.fee;

    // 1. Save to Firebase Firestore
    const db = getFirestoreDb();
    if (!db) {
      console.error("Firestore db is not available.");
      return NextResponse.json(
        { error: "Database configuration error: Firestore DB not available" },
        { status: 500 }
      );
    }

    try {
      await db.collection("cohort_applications").add({
        name,
        email,
        cohort,
        college,
        phone,
        message,
        year: year || null,
        status: status || null,
        paymentPlan: paymentPlan || null,
        programSlug: programSlug || null,
        programDuration: programDuration || null,
        programFee: programFee || null,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    } catch (dbError: unknown) {
      console.error("Error saving to Firestore:", dbError);
      const err = dbError as Error;
      return NextResponse.json(
        { error: `Database write failed: ${err.message || String(dbError)}` },
        { status: 500 }
      );
    }

    // 2. Send Email via Resend
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        const adminEmail = (process.env.ADMIN_EMAIL || "support@lumoraspace.in").trim().toLowerCase();
        console.log("ADMIN_EMAIL =", adminEmail);
        const { error } = await resend.emails.send({
          from: "LumoraSpace <support@lumoraspace.in>",
          to: [adminEmail],
          subject: `New Cohort Application: ${name} for ${cohort}`,
          html: `
            <h2>New Cohort Application Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>College/University:</strong> ${college || "N/A"}</p>
            <p><strong>Current Year:</strong> ${year || "N/A"}</p>
            <p><strong>Current Status:</strong> ${status || "N/A"}</p>
            <p><strong>Cohort/Program:</strong> ${cohort}</p>
            <p><strong>Program Slug:</strong> ${programSlug || "N/A"}</p>
            <p><strong>Program Duration:</strong> ${programDuration || "N/A"}</p>
            <p><strong>Program Fee:</strong> ${programFee || "N/A"}</p>
            <p><strong>Selected Payment Plan:</strong> ${paymentPlan || "N/A"}</p>
            <p><strong>Message/Interest:</strong></p>
            <p>${message || "None provided"}</p>
          `,
        });

        if (error) {
          console.error("Resend API returned an error:", error);
          return NextResponse.json(
            { error: `Email dispatch failed: ${error.message || error}` },
            { status: 500 }
          );
        }
      } catch (emailError: unknown) {
        console.error("Error sending email:", emailError);
        const err = emailError as Error;
        return NextResponse.json(
          { error: `Email dispatch failed: ${err.message || String(emailError)}` },
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
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}