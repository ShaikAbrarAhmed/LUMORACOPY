import { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import FeaturesSection from "@/components/sections/FeaturesSection"
import { ShowcaseSection } from "@/components/sections/ShowcaseSection"

export const metadata: Metadata = {
  title: "Ecosystem Features",
  description: "Explore features of Lumora&apos;s student growth ecosystem: structured roadmaps (Direction), peer check-ins (Accountability), and co-working sprints.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    type: "website",
    url: "https://lumora.space/features",
    title: "Ecosystem Features | Lumora Space",
    description: "Explore features of Lumora&apos;s student growth ecosystem: structured roadmaps (Direction), peer check-ins (Accountability), and co-working sprints.",
    images: [
      {
        url: "/logo4.png",
        width: 1200,
        height: 630,
        alt: "Lumora Features",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosystem Features | Lumora Space",
    description: "Explore features of Lumora&apos;s student growth ecosystem: structured roadmaps (Direction), peer check-ins (Accountability), and co-working sprints.",
    images: ["/logo4.png"],
  },
};

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background relative overflow-hidden">
      <h1 className="sr-only">Lumora Ecosystem Features – Direction, Community & Accountability</h1>
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
