import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import CommunitySection from "@/components/sections/CommunitySection"

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Decorative page-level ambient gradients (Gold dominant / Warmth) */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-secondary/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-secondary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex-1 relative z-10">
        <CommunitySection />
      </div>

      <Footer />
    </main>
  )
}