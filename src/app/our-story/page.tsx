import { Metadata } from "next";
import OurStoryPage from "./OurStoryClient";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Why we built Lumora. Discover how we are helping ambitious students escape the tutorial loop and transition from roadmap confusion to builder confidence.",
  alternates: {
    canonical: "/our-story",
  },
};

export default function Page() {
  return <OurStoryPage />;
}
