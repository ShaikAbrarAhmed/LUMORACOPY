import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import CommunitySection from "@/components/sections/CommunitySection"

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF]">

      <Navbar />

      <div className="flex-1">
        <CommunitySection />
      </div>

      <Footer />

    </main>
  )
}