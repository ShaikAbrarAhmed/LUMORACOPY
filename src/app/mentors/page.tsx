import { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import MentorsSection from "@/components/sections/MentorsSection"

export const metadata: Metadata = {
  title: "Industry Mentors",
  description: "Get guided by tech industry experts, engineering leads, and product managers. Receive practical code audits, system critiques, and structured career advice.",
  alternates: {
    canonical: "/mentors",
  },
  openGraph: {
    type: "website",
    url: "https://lumora.space/mentors",
    title: "Industry Mentors | LumoraSpace Space",
    description: "Get guided by tech industry experts, engineering leads, and product managers. Receive practical code audits, system critiques, and structured career advice.",
    images: [
      {
        url: "/logo4.png",
        width: 1200,
        height: 630,
        alt: "LumoraSpace Mentors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Mentors | LumoraSpace Space",
    description: "Get guided by tech industry experts, engineering leads, and product managers. Receive practical code audits, system critiques, and structured career advice.",
    images: ["/logo4.png"],
  },
};

export default function MentorsPage() {
  const mentorsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "LumoraSpace Industry Mentors",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Person",
          "name": "Gokul",
          "jobTitle": "Project Manager & Mentor",
          "url": "https://lumora.space/mentors",
          "sameAs": "https://www.linkedin.com/in/gokul-dev1/",
          "worksFor": {
            "@type": "Organization",
            "name": "Cirakas Consultancy"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Person",
          "name": "Purva Kabra",
          "jobTitle": "Product Manager & Mentor",
          "url": "https://lumora.space/mentors",
          "sameAs": "https://www.linkedin.com/in/purva-kabra-pk",
          "worksFor": {
            "@type": "Organization",
            "name": "LumberFi"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Person",
          "name": "Sanskrity Singh",
          "jobTitle": "Marketing Specialist & Mentor",
          "url": "https://lumora.space/mentors",
          "sameAs": "https://www.linkedin.com/in/sanskritysingh",
          "worksFor": {
            "@type": "Organization",
            "name": "BOT Consulting"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mentorsSchema) }}
      />
      <main className="flex min-h-screen flex-col bg-background">
        <Navbar />

        <div className="flex-1">
          <MentorsSection />
        </div>

        <Footer />
      </main>
    </>
  )
}
