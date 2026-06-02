import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import FeaturesSection from "@/components/sections/FeaturesSection"
import { ShowcaseSection } from "@/components/sections/ShowcaseSection"

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-24 relative overflow-hidden">
      <Navbar />

      {/* Decorative page-level ambient gradients (Indigo & Gold together) */}
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-accent/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="flex-1 relative z-10">
        <FeaturesSection />
        <ShowcaseSection />
      </div>

      <Footer />
    </main>
  )
}
