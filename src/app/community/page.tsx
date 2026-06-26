import { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

import CommunitySection from "@/components/sections/CommunitySection"

export const metadata: Metadata = {
  title: "Builder Community",
  description: "Join the Lumora student developer and designer community. Collaborate on hackathons, pair program on sprints, and gain feedback from peer builders.",
  alternates: {
    canonical: "/community",
  },
  openGraph: {
    type: "website",
    url: "https://lumora.space/community",
    title: "Builder Community | Lumora Space",
    description: "Join the Lumora student developer and designer community. Collaborate on hackathons, pair program on sprints, and gain feedback from peer builders.",
    images: [
      {
        url: "/logo4.png",
        width: 1200,
        height: 630,
        alt: "Lumora Builder Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Builder Community | Lumora Space",
    description: "Join the Lumora student developer and designer community. Collaborate on hackathons, pair program on sprints, and gain feedback from peer builders.",
    images: ["/logo4.png"],
  },
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#050505] relative overflow-hidden flex flex-col justify-between">
      <Navbar />

      {/* Subtle silver atmospheric lighting at the top header */}
      <div 
        className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0" 
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.03), transparent 70%)"
        }}
      />

      <div className="flex-1 relative z-10">
        <CommunitySection />
      </div>

      <Footer />
    </main>
  )
}