"use client"

import Link from "next/link"
import { Logo } from "@/components/Logo"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group inline-flex">
              <Logo size="md" className="transition-transform duration-300 group-hover:scale-105" />
              <span className="font-heading font-bold text-xl tracking-tight text-foreground">Lumora</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              The futuristic beginner-first tech ecosystem. Build real tech skills through mentorship, projects, accountability, and community-driven growth.
            </p>
            <div className="flex items-center gap-5 mt-8">
              <Link href="https://discord.gg/xWVsJWv8N" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5-1 8.5-1 12 0"/><path d="M7 16.5c3 1 8 1 11 0"/></svg>
              </Link>
              <Link href="https://chat.whatsapp.com/GgKs2Hnh8Os1XOL0pYPZMN" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </Link>
              <Link href="https://www.instagram.com/lumorous.space?igsh=Y3Rxa2poOWk2cXNk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-medium mb-6 text-foreground">Ecosystem</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/mentors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mentors</Link>
              </li>
              <li>
                <Link href="/cohorts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cohorts</Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-medium mb-6 text-foreground">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
              </li>
              <li>
                <a href="mailto:Support.lumoraspace@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Lumora. All rights reserved.
            </p>
            <button 
              onClick={() => {
                window.scrollTo(0, 0);
                window.dispatchEvent(new Event("replay-intro"));
              }}
              className="text-xs font-mono text-muted-foreground/50 hover:text-foreground transition-colors uppercase tracking-wider"
            >
              Replay Intro
            </button>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built for the future of tech.
          </p>
        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden z-0 flex flex-col items-center justify-end h-full">
        <div className="font-heading font-black tracking-tighter text-foreground/4 leading-none text-[clamp(5rem,20vw,20rem)] translate-y-[25%] select-none pointer-events-none text-center">
          LUMORA
        </div>
        <div className="font-heading font-bold tracking-[0.4em] text-foreground/2 text-[clamp(0.6rem,1.8vw,1.2rem)] translate-y-[15%] select-none pointer-events-none text-center uppercase pb-6 mt-3">
          LEARN • BUILD • GROW • BELONG
        </div>
      </div>
    </footer>
  )
}
