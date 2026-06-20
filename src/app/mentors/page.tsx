import { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import MentorsSection from "@/components/sections/MentorsSection"

export const metadata: Metadata = {
  title: "Industry Mentors",
  description: "Get guided by tech industry experts, engineering leads, and product managers. Receive practical code audits, system critiques, and structured career support.",
  alternates: {
    canonical: "/mentors",
  },
};

export default function MentorsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <div className="flex-1">
        <MentorsSection />
      </div>

      <Footer />
    </main>
  )
}
