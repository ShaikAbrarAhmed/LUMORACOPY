"use client"

import Link from "next/link"
import { Logo } from "@/components/Logo"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-8 lg:px-8 relative z-10">
        
        {/* Compact CTA Strip */}
        {/* <div className="border-b border-border/40 pb-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-heading font-bold text-base md:text-lg text-headings">
              Ready to Build With Lumora?
            </h3>
            <p className="text-xs text-muted-foreground font-light">
              Join our next builder cohort and translate your ideas into production-grade software.
            </p>
          </div>
          <Link 
            href="/create-account"
            className="btn-primary py-2.5 px-6 text-xs font-semibold rounded-full shadow-sm shadow-primary/20 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 shrink-0"
          >
            Join Lumora
          </Link>
        </div> */}

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          
          {/* Column 1: Brand Info */}
          <div className="text-left space-y-4">
            <Link href="/" className="flex items-center group inline-flex">
              <Logo
                variant="primary"
                size="sm"
                className="transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs font-light">
              The futuristic tech ecosystem for builders. Master real-world software engineering through project-first cohorts and elite mentorship.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-1">
              <Link href="https://discord.gg/xWVsJWv8N" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="Discord">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.075 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
                </svg>
              </Link>
              <Link href="https://chat.whatsapp.com/GgKs2Hnh8Os1XOL0pYPZMN" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/lumorous.space?igsh=Y3Rxa2poOWk2cXNk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Ecosystem */}
          <div className="text-left">
            <h4 className="text-xs font-bold text-headings uppercase tracking-wider mb-3 select-none">
              Ecosystem
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-xs text-slate-400 hover:text-primary transition-colors font-light">Features</Link>
              </li>
              <li>
                <Link href="/mentors" className="text-xs text-slate-400 hover:text-primary transition-colors font-light">Mentors</Link>
              </li>
              <li>
                <Link href="/cohorts" className="text-xs text-slate-400 hover:text-primary transition-colors font-light">Cohorts</Link>
              </li>
              <li>
                <Link href="/community" className="text-xs text-slate-400 hover:text-primary transition-colors font-light">Community</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Community channels */}
          <div className="text-left">
            <h4 className="text-xs font-bold text-headings uppercase tracking-wider mb-3 select-none">
              Community
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://discord.gg/xWVsJWv8N" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-primary transition-colors font-light">Discord</Link>
              </li>
              <li>
                <Link href="https://chat.whatsapp.com/GgKs2Hnh8Os1XOL0pYPZMN" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-primary transition-colors font-light">WhatsApp</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/lumorous.space?igsh=Y3Rxa2poOWk2cXNk" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-primary transition-colors font-light">Instagram</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal / Support */}
          <div className="text-left">
            <h4 className="text-xs font-bold text-headings uppercase tracking-wider mb-3 select-none">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-xs text-slate-400 hover:text-primary transition-colors font-light">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-slate-400 hover:text-primary transition-colors font-light">Terms of Service</Link>
              </li>
              <li>
                <a href="mailto:Support.lumoraspace@gmail.com" className="text-xs text-slate-400 hover:text-primary transition-colors font-light">Contact</a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Footer Bottom copyright block */}
        <div className="mt-10 pt-5 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 font-light">
            &copy; {new Date().getFullYear()} Lumora. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-400 font-light">
            Built for the future of tech.
          </p>
        </div>

      </div>

      {/* Reduced visual dominancy watermark (approx 70% smaller and moved out of flow) */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden z-0 flex flex-col items-center justify-end h-full">
        <div className="font-heading font-black tracking-tighter text-foreground/[0.005] leading-none text-[clamp(2rem,7vw,6rem)] translate-y-[15%] select-none pointer-events-none text-center">
          LUMORA
        </div>
        <div className="font-heading font-bold tracking-[0.4em] text-foreground/[0.003] text-[clamp(0.4rem,1vw,0.8rem)] translate-y-[5%] select-none pointer-events-none text-center uppercase pb-3 mt-1">
          LEARN • BUILD • GROW • BELONG
        </div>
      </div>
    </footer>
  )
}
