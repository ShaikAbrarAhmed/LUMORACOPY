import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import FeaturesSection from "@/components/sections/FeaturesSection"
import MentorsSection from "@/components/sections/MentorsSection"
import CohortSection from "@/components/sections/CohortSection"
import CommunitySection from "@/components/sections/CommunitySection"
import { WaitlistSection } from "@/components/sections/WaitlistSection"

export default function CohortsPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF]">

      <Navbar />

      <div className="flex-1">

        <FeaturesSection />

        <MentorsSection />

        <CohortSection />

        <CommunitySection />

        <WaitlistSection />

      </div>

      <Footer />

    </main>
  )
}