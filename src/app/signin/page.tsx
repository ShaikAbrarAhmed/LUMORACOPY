import { Metadata } from "next";
import SignInPage from "./SignInClient";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Access your Lumora account to collaborate with student builders, participate in developer cohorts, and connect with engineering mentors.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/signin",
  },
  openGraph: {
    type: "website",
    url: "https://lumora.space/signin",
    title: "Sign In | Lumora Space",
    description: "Access your Lumora account to collaborate with student builders, participate in developer cohorts, and connect with engineering mentors.",
    images: [
      {
        url: "/logo4.png",
        width: 1200,
        height: 630,
        alt: "Lumora Sign In",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign In | Lumora Space",
    description: "Access your Lumora account to collaborate with student builders, participate in developer cohorts, and connect with engineering mentors.",
    images: ["/logo4.png"],
  },
};

export default function Page() {
  return <SignInPage />;
}
