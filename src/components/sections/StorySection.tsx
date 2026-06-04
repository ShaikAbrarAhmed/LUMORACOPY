"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// --- Custom Inline SVGs & Icon Components (Prevents Lucide Turbopack Cache Issues) ---
const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

const MessageIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379L12 21l3.62-3.62c1.153-.086 2.294-.213 3.423-.379 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v5.78z" />
  </svg>
)

export default function StorySection() {
  return (
    <section id="story" className="relative overflow-hidden py-32 md:py-40 bg-background border-t border-border/40">
      
      {/* Background Soft Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-accent/2 rounded-full blur-[165px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-3 block">
            OUR STORY
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-headings tracking-tight leading-[1.08] mb-6">
            We Didn't Build Lumorous <br className="hidden md:inline" />
            Because We Had All The Answers.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
            We built it because we were once confused too.
          </p>
        </div>

        {/* ================= TWO-COLUMN STORY LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
          
          {/* LEFT COLUMN: Founder Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[380px] aspect-[4/5] bg-background border border-border/60 rounded-[32px] p-4 shadow-[0_16px_48px_rgba(15,23,42,0.03)] flex flex-col justify-between group"
            >
              {/* Outer decorative light border overlay */}
              <div className="absolute inset-0 border border-gradient-to-tr from-primary/10 to-accent/10 rounded-[32px] pointer-events-none" />
              
              {/* Image Frame */}
              <div className="relative w-full flex-1 rounded-[24px] overflow-hidden bg-muted">
                <Image
                  src="/team/abrar.png"
                  alt="Abrar Ahmed, Founder of Lumora"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  priority
                />
                
                {/* Floating status tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-foreground shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Coding Next.js
                </div>
              </div>

              {/* Founder Details Footer */}
              <div className="pt-4 flex items-center justify-between px-2">
                <div>
                  <h4 className="font-bold text-headings text-sm">Abrar Ahmed</h4>
                  <p className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase mt-0.5">Founder & Mentor</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-muted border border-border/60 flex items-center justify-center text-primary">
                  <MessageIcon className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Storytelling content */}
          <div className="lg:col-span-7 space-y-6 text-muted-foreground text-base leading-relaxed font-normal">
            
            <p className="text-lg text-foreground font-semibold leading-relaxed">
              A few years ago, we were sitting exactly where you are today.
            </p>

            <p>
              We wanted to build software, create dynamic products, and participate in hackathons. But the path forward was completely blank. Coming from a Tier-3 college, we didn't have access to startup networks or industry veterans.
            </p>

            <p>
              Instead of structure, we found a flood of recommendations. We bought online courses, watched endless 40-hour playlist tutorials, and copy-pasted boilerplate code. We fell directly into <span className="text-primary font-semibold">tutorial hell</span>—feeling highly productive while watching a video, but completely freezing when opening an empty code editor.
            </p>

            <p>
              We realized that the traditional education system is built on memorizing syntax, not solving real problems. There was no step-by-step roadmap to build confidence, and no peer community to critique pull requests, discuss system designs, or build products alongside.
            </p>

            <p>
              We realized that this is why we built Lumorous.
            </p>

            <p>
              We didn’t design this platform to sell video packages or certificate grids. We created it as a collaborative, mentorship-driven ecosystem where beginners can learn the actual developer mental models, ship real-world projects, and build true engineering confidence alongside other builders.
            </p>

            {/* Optional CTA Link */}
            <div className="pt-4">
              <Link
                href="/cohorts"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group cursor-pointer"
              >
                Read Our Full Story
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>

        {/* ================= FINAL QUOTE BLOCK ================= */}
        <div className="relative border-t border-border/40 pt-20 text-center max-w-4xl mx-auto">
          
          {/* Quote Mark background */}
          <div className="absolute top-[40px] left-1/2 -translate-x-1/2 text-8xl font-fancy font-bold tracking-tight text-primary/5 pointer-events-none select-none">
            “
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 space-y-4"
          >
            <p className="text-2xl md:text-3xl font-heading font-medium tracking-tight text-foreground leading-relaxed font-fancy italic">
              “Every expert was once a beginner. <br />
              Lumorous exists to make that journey less lonely.”
            </p>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mt-4">
              — The Lumora Team
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
