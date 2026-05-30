import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import MentorsSection from "@/components/sections/MentorsSection"

export default function MentorsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-24">
      <Navbar />

      <div className="flex-1">
        <MentorsSection />
      </div>

      <Footer />
    </main>
  )
}
