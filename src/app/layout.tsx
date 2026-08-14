import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AuthSessionProvider from "@/components/auth/AuthSessionProvider";
// import WaterBubbleBg from "@/components/WaterBubbleBg";
// import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-fancy",
  weight: ["300", "400", "500", "600", "700"],
});

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lumora.space";

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "LumoraSpace – Student Growth Ecosystem for Ambitious Builders",
    template: "%s | LumoraSpace Space",
  },
  description: "Transition from confusion to confidence. Build production-grade software, access elite engineering mentors, maintain accountability, and grow alongside an ambitious peer community.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appUrl,
    siteName: "LumoraSpace",
    title: "LumoraSpace – Student Growth Ecosystem",
    description: "Build real tech skills through mentorship, project-first sprints, accountability, and community-driven growth.",
    images: [
      {
        url: "/logo4.png",
        width: 1200,
        height: 630,
        alt: "LumoraSpace – Student Growth Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LumoraSpace – Student Growth Ecosystem",
    description: "Build real tech skills through mentorship, project-first sprints, accountability, and community-driven growth.",
    images: ["/logo4.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${appUrl}/#organization`,
    "name": "LumoraSpace",
    "url": appUrl,
    "logo": `${appUrl}/logo.png`,
    "description": "Premium student growth ecosystem helping ambitious builders learn by shipping production-grade software with active peer support and elite industry mentorship.",
    "sameAs": [
      "https://discord.gg/xWVsJWv8N",
      "https://chat.whatsapp.com/GgKs2Hnh8Os1XOL0pYPZMN",
      "https://www.instagram.com/lumora.spacee"
    ]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${cormorantGaramond.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground relative`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* <CustomCursor /> */}
        {/* <WaterBubbleBg /> */}
        <div className="relative z-10">
          <AuthSessionProvider>
            {children}
          </AuthSessionProvider>
        </div>
      </body>
    </html>
  );
}
