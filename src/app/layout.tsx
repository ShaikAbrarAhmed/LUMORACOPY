import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import AuthSessionProvider from "@/components/auth/AuthSessionProvider";
import WaterBubbleBg from "@/components/WaterBubbleBg";
// import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-fancy" });

export const metadata: Metadata = {
  title: "Lumora - The Future of Tech Learning",
  description: "Build real tech skills through mentorship, projects, accountability, and community-driven growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground relative`}>
        {/* <CustomCursor /> */}
        <WaterBubbleBg />
        <div className="relative z-10">
          <AuthSessionProvider>
            {children}
          </AuthSessionProvider>
        </div>
      </body>
    </html>
  );
}
