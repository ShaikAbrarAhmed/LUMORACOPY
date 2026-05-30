import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import HeroSection from "@/components/sections/HeroSection"
import StorySection from "@/components/sections/StorySection"

import { IntroScreen } from "@/components/IntroScreen"

export default function Home() {
  return (
    <>
      <IntroScreen />

      <main className="flex min-h-screen flex-col bg-background">
        <Navbar />

        <div className="flex-1">
          <HeroSection />
          <StorySection />
        </div>

        <Footer />
      </main>
    </>
  )
}