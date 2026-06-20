import { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import TeamSection from "@/components/sections/TeamSection"

export const metadata: Metadata = {
  title: "The Team",
  description: "Meet the minds building the Lumora student growth ecosystem. Built by students, driven by purpose to support the next generation of builders.",
  alternates: {
    canonical: "/team",
  },
};

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex-1">
        <TeamSection />
      </div>

      <Footer />
    </main>
  )
}
