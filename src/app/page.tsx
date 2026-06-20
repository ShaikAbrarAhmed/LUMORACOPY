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
  description: "Transition from confusion to confidence. Lumora is a premium student growth ecosystem built for ambitious student builders, offering cohort-based builder programs, active peer accountability networks, and elite engineering mentorship.",
  alternates: {
    canonical: "/",
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