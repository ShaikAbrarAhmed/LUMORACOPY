import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { IntroScreen } from "@/components/IntroScreen"

import HeroSection from "@/components/sections/HeroSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { CTASection } from "@/components/sections/CTASection"

export default function Home() {
  return (
    <>
      <IntroScreen />

      <main className="flex min-h-screen flex-col bg-background">
        <Navbar />

        <div className="flex-1">
          {/* 1. Hero */}
          <HeroSection />

          {/* 2. The Problem */}
          <ProblemSection />

          {/* 3. Call to Action */}
          <CTASection />
        </div>

        <Footer />
      </main>
    </>
  )
}