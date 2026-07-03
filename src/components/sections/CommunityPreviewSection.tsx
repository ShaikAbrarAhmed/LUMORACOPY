"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Users, Shield, MessageSquare, Compass, ArrowRight } from "lucide-react"

export default function CommunityPreviewSection() {
  const cultures = [
    { title: "Builder-First", desc: "We celebrate action, commits, and public deployments over mere credentials." },
    { title: "Collaborative", desc: "Form alliance squads and work alongside other beginners on similar builds." },
    { title: "Supportive", desc: "No silly questions. Get peer reviews, bug solutions, and constructive design audits." },
    { title: "Growth-Oriented", desc: "Dedicated weekly standups and building rhythm designed to maintain momentum." },
  ]

  return (
    <section className="relative py-24 bg-muted/20 border-t border-border/40">
      
      {/* Background Soft Glows */}
      <div className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-3 block">
              COLLABORATIVE SQUADS
            </span>
            <h2 className="text-3xl md:text-4xl font-fancy font-light text-headings tracking-tight leading-tight">
              You Are Not Building Alone.
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              Coding in isolation is hard. We bring beginners, creators, and experienced mentors together inside a supportive space built for joint progress.
            </p>
          </div>
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group cursor-pointer"
          >
            Explore Community Culture
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Culture Values */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {cultures.map((culture, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-white/40 border border-border/30 shadow-xs flex flex-col gap-3 group hover:border-primary/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-headings">{culture.title}</h4>
                  <p className="text-[11px] text-muted-foreground font-light leading-relaxed mt-1">{culture.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Visual Interactive Hub Preview */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white/60 backdrop-blur-xl border border-border/50 rounded-3xl p-6 md:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.015)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-secondary/5 blur-[50px] rounded-full pointer-events-none" />

              <div className="flex items-center gap-4 mb-8 text-left border-b border-border/40 pb-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-headings">The Lumora Hub</h3>
                  <p className="text-[10px] text-muted-foreground">300+ active student builders connected daily</p>
                </div>
              </div>

              {/* Mock Discord UI elements */}
              <div className="space-y-3 font-mono text-[10px] text-left text-slate-500">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-white/5 shadow-md text-slate-300">
                  <span className="text-primary font-bold">#showcase</span>
                  <div className="flex-1 space-y-1">
                    <span className="font-bold text-white text-[11px]">abrar_builds:</span>
                    <p className="font-light">Just deployed my first portfolio website on Vercel! Check out the custom styling: <span className="text-primary underline">https://abrar.dev</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-border/40">
                  <MessageSquare className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <span className="font-bold text-headings text-[11px]">Weekly Builder of the Week</span>
                    <p className="text-muted-foreground font-light">Congratulations to @sneha_codes for participating consistently in sprints and completing two landing pages!</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-emerald-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>WhatsApp Layer</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded">Active Syncs</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}
