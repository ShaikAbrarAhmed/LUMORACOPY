import { Metadata } from "next";
import CohortsPage from "./CohortsClient";

export const metadata: Metadata = {
  title: "Cohort-Based Builder Programs",
  description: "Transition from confusion to confidence. Join our guided engineering cohorts, access elite mentors, stay accountable, and ship production-ready MVPs with a peer group.",
  alternates: {
    canonical: "/cohorts",
  },
};

export default function Page() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lumora.space";
  
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Lumora Builder Programs",
    "description": "Mentorship-led, project-first developer cohorts designed for ambitious students.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "EducationalOccupationalProgram",
          "name": "Web Builder Cohort",
          "description": "Build strong web development and frontend architecture foundations through practical team projects and elite mentorship.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Lumora",
            "url": appUrl
          },
          "programPrerequisites": "Basic understanding of HTML, CSS, and programming logic.",
          "educationalCredentialAwarded": "Production-grade portfolio project deployment",
          "offers": {
            "@type": "Offer",
            "category": "Membership",
            "availability": "https://schema.org/LimitedAvailability"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "EducationalOccupationalProgram",
          "name": "Python Builder Cohort",
          "description": "Learn programming fundamentals, algorithms, and practical scripting systems through hands-on milestones.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Lumora",
            "url": appUrl
          },
          "programPrerequisites": "None",
          "educationalCredentialAwarded": "Completed open-source Python utility suite",
          "offers": {
            "@type": "Offer",
            "category": "Membership",
            "availability": "https://schema.org/LimitedAvailability"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <CohortsPage />
    </>
  );
}
