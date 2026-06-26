import { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { IntroScreen } from "@/components/IntroScreen"

import HeroSection from "@/components/sections/HeroSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import WhyLumoraSection from "@/components/sections/WhyLumoraSection"
import TransformationSection from "@/components/sections/TransformationSection"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Lumora – Student Growth Ecosystem for Ambitious Builders",
  description: "Transition from confusion to confidence. Lumora is a premium student growth ecosystem built for ambitious student builders to learn, build, and grow.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://lumora.space",
    title: "Lumora – Student Growth Ecosystem for Ambitious Builders",
    description: "Transition from confusion to confidence. Lumora is a premium student growth ecosystem built for ambitious student builders to learn, build, and grow.",
    images: [
      {
        url: "/logo4.png",
        width: 1200,
        height: 630,
        alt: "Lumora – Student Growth Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumora – Student Growth Ecosystem for Ambitious Builders",
    description: "Transition from confusion to confidence. Lumora is a premium student growth ecosystem built for ambitious student builders to learn, build, and grow.",
    images: ["/logo4.png"],
  },
};

export default function Home() {
  return (
    <>
      <IntroScreen />

      <main className="flex min-h-screen flex-col bg-background">
        <Navbar />

        <div className="flex-1">
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. The Problem */}
          <ProblemSection />

          {/* 3. Why Lumora */}
          <WhyLumoraSection />

          {/* 4. Transformation path */}
          <TransformationSection />

          {/* 5. Call to Action */}
          <CTASection />
        </div>

        <Footer />
      </main>
    </>
  )
}