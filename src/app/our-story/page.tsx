import { Metadata } from "next";
import OurStoryPage from "./OurStoryClient";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Discover why we built Lumora. See how we are helping ambitious student builders escape the tutorial loop and transition from confusion to confidence.",
  alternates: {
    canonical: "/our-story",
  },
  openGraph: {
    type: "website",
    url: "https://lumora.space/our-story",
    title: "Our Story | Lumora Space",
    description: "Discover why we built Lumora. See how we are helping ambitious student builders escape the tutorial loop and transition from confusion to confidence.",
    images: [
      {
        url: "/logo4.png",
        width: 1200,
        height: 630,
        alt: "Lumora Our Story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | Lumora Space",
    description: "Discover why we built Lumora. See how we are helping ambitious student builders escape the tutorial loop and transition from confusion to confidence.",
    images: ["/logo4.png"],
  },
};

export default function Page() {
  return <OurStoryPage />;
}
