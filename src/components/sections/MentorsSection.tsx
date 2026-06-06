"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react"

/* ─── Mentor Grid Data ──────────────────────────────────────── */
const mentors = [
  {
    name: "Abrar Ahmed",
    role: "Senior Fullstack Mentor & Founder",
    image: "/team/abrar.png",
    quote: "Build first, perfect later.",
    tags: ["Engineering", "Startups", "Fullstack"],
    linkedin: "https://linkedin.com"
  },
  {
    name: "Ashwini",
    role: "Frontend Architect",
    image: "/team/Ashwini2.jpeg",
    quote: "Learn by creating.",
    tags: ["UI/UX", "Engineering", "Frontend"],
    linkedin: "https://linkedin.com"
  },
  {
    name: "Yuvaraj",
    role: "Backend Engineer",
    image: "/team/Yuvi.jpeg",
    quote: "Great products solve real problems.",
    tags: ["Engineering", "Backend", "Databases"],
    linkedin: "https://linkedin.com"
  },
  {
    name: "Mounika",
    role: "Fullstack Engineer",
    image: "/team/Mouni2.jpeg",
    quote: "Clean code is simple code.",
    tags: ["Engineering", "Fullstack", "Serverless"],
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sruthi",
    role: "UI/UX Mentor",
    image: "/team/Sruthi.jpeg",
    quote: "Design for real user needs.",
    tags: ["UI/UX", "Product", "Design Systems"],
    linkedin: "https://linkedin.com"
  },
  {
    name: "Rajitha & Jasmeet",
    role: "Project Coordinators",
    image: "/team/Raji2.jpeg",
    quote: "Momentum beats perfection.",
    tags: ["Product", "Leadership", "Workflows"],
    linkedin: "https://linkedin.com"
  }
]

/* ─── Why They Mentor Data ───────────────────────────────────── */
const beliefs = [
  {
    title: "Give Back",
    description: "We understand the confusion and lack of support tier-3 students face. We mentor to open doors that were previously closed.",
    icon: HeartHandshake,
    color: "text-primary",
    bg: "bg-primary/5"
  },
  {
    title: "Accelerate Growth",
    description: "Learning alone is slow. Mentorship compresses years of painful trial-and-error into weeks of focused execution.",
    icon: Compass,
    color: "text-amber-500",
    bg: "bg-amber-500/5"
  },
  {
    title: "Build Confidence",
    description: "Having an experienced builder approve your PR and say 'this is production-ready' builds deep, lasting self-trust.",
    icon: ShieldCheck,
    color: "text-secondary",
    bg: "bg-secondary/5"
  }
]

export default function MentorsSection() {
  return (
    <section id="mentors" className="relative py-20 md:py-28 overflow-hidden bg-transparent">
      
      {/* Background soft ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          {/* <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Mentor Ecosystem
          </motion.span> */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-headings leading-tight"
          >
            Learn From Builders, Not Just Teachers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light"
          >
            Get direct guidance from engineers and designers who build daily, review PRs, and help you navigate the same journey you're on today.
          </motion.p>
        </div>

        {/* ================= PART 1: Mentor Grid ================= */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="group relative rounded-2xl border border-border/30 bg-card/25 backdrop-blur-xs p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-primary/20"
              >
                {/* LinkedIn Icon (Absolute top-right corner) */}
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-5 right-5 text-slate-400 hover:text-primary transition-colors duration-250 p-1 shrink-0 z-20"
                  aria-label={`${mentor.name}'s LinkedIn Profile`}
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <div className="space-y-4">
                  {/* Avatar Layout Header */}
                  <div className="flex items-center gap-4 text-left">
                    {/* Compact circular avatar */}
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-border/40 shrink-0 bg-muted">
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-headings tracking-tight">
                        {mentor.name}
                      </h4>
                      <p className="text-[11px] text-muted-foreground font-light mt-0.5 leading-tight max-w-[170px]">
                        {mentor.role}
                      </p>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[9px] font-semibold text-primary bg-primary/5 border border-primary/10 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Mentor Quote */}
                  <p className="text-[11px] italic text-muted-foreground/90 font-light pl-2.5 border-l border-primary/30 text-left leading-relaxed">
                    &ldquo;{mentor.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= PART 2: Core Philosophy ================= */}
        <div className="pt-10 border-t border-border/40">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10 text-center select-none">
            Our Mentorship Pillars
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beliefs.map((belief, i) => {
              const Icon = belief.icon
              return (
                <motion.div
                  key={belief.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-border/30 bg-card/25 backdrop-blur-xs p-5 space-y-3 shadow-xs text-left"
                >
                  <div className={`w-9 h-9 rounded-xl ${belief.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4.5 h-4.5 ${belief.color}`} />
                  </div>
                  
                  <h4 className="text-sm font-bold text-headings tracking-tight">
                    {belief.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-[11px] leading-relaxed font-light">
                    {belief.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>

    </section>
  )
}