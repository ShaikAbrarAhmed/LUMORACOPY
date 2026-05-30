import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import FeaturesSection from "@/components/sections/FeaturesSection"
import { ShowcaseSection } from "@/components/sections/ShowcaseSection"

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-24">
      <Navbar />

      <div className="flex-1">
        <FeaturesSection />
        <ShowcaseSection />
      </div>

      <Footer />
    </main>
  )
}
