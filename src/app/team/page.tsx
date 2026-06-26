import { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import TeamSection from "@/components/sections/TeamSection"

export const metadata: Metadata = {
  title: "The Team",
  description: "Meet the minds building the Lumora student growth ecosystem. Built by students, driven by purpose to support the next generation of software builders.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    type: "website",
    url: "https://lumora.space/team",
    title: "The Team | Lumora Space",
    description: "Meet the minds building the Lumora student growth ecosystem. Built by students, driven by purpose to support the next generation of software builders.",
    images: [
      {
        url: "/logo4.png",
        width: 1200,
        height: 630,
        alt: "Lumora Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Team | Lumora Space",
    description: "Meet the minds building the Lumora student growth ecosystem. Built by students, driven by purpose to support the next generation of software builders.",
    images: ["/logo4.png"],
  },
};

export default function TeamPage() {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Lumora Founders & Leadership",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Person",
          "name": "Shaik Abrar Ahmed",
          "jobTitle": "Founder & Mentor",
          "url": "https://lumora.space/team",
          "sameAs": "https://www.linkedin.com/in/shaikabrarahmed/",
          "worksFor": {
            "@type": "EducationalOrganization",
            "name": "Lumora",
            "url": "https://lumora.space"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Person",
          "name": "Mounika",
          "jobTitle": "Co-Founder",
          "url": "https://lumora.space/team",
          "sameAs": "https://www.linkedin.com/in/surakarapu-mounika-62b84a2a4",
          "worksFor": {
            "@type": "EducationalOrganization",
            "name": "Lumora",
            "url": "https://lumora.space"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Person",
          "name": "Ashwini",
          "jobTitle": "Co-Founder",
          "url": "https://lumora.space/team",
          "sameAs": "https://www.linkedin.com/in/ashwini-ravirala-133058377/",
          "worksFor": {
            "@type": "EducationalOrganization",
            "name": "Lumora",
            "url": "https://lumora.space"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <main className="flex min-h-screen flex-col bg-background">
        <Navbar />

        <div className="flex-1">
          <TeamSection />
        </div>

        <Footer />
      </main>
    </>
  )
}
