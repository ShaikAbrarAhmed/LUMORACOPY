import { Metadata } from "next";
import CreateAccountPage from "./CreateAccountClient";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Join the LumoraSpace student growth ecosystem. Create an account to access structured developer cohorts, build portfolios, and get direct mentorship.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/create-account",
  },
  openGraph: {
    type: "website",
    url: "https://lumora.space/create-account",
    title: "Create Account | LumoraSpace Space",
    description: "Join the LumoraSpace student growth ecosystem. Create an account to access structured developer cohorts, build portfolios, and get direct mentorship.",
    images: [
      {
        url: "/logo4.png",
        width: 1200,
        height: 630,
        alt: "LumoraSpace Create Account",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Account | LumoraSpace Space",
    description: "Join the LumoraSpace student growth ecosystem. Create an account to access structured developer cohorts, build portfolios, and get direct mentorship.",
    images: ["/logo4.png"],
  },
};

export default function Page() {
  return <CreateAccountPage />;
}
