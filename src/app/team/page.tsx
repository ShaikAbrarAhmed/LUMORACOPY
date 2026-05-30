import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import TeamSection from "@/components/sections/TeamSection"
export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-24">
      <Navbar />

      <div className="flex-1">
        <TeamSection />
      </div>

      <Footer />
    </main>
  )
}
