"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, Sparkles, Compass, Activity, ArrowRight } from "lucide-react"

export default function ProgramsPreviewSection() {
  const programs = [
    {
      title: "Web Builder Program",
      status: "Launching Soon",
      desc: "Build a portfolio website and two client-style projects while mastering HTML, CSS, and JS. Set up your GitHub and LinkedIn.",
      icon: Code2,
      outcome: "Graduate as a Web Builder",
      color: "text-primary border-primary/20",
    },
    {
      title: "AI Builder Program",
      status: "Future Initiative",
      desc: "Integrate LLMs, construct custom agent pipelines, and configure smart interactive systems.",
      icon: Sparkles,
      outcome: "Build intelligent systems",
      color: "text-indigo-400 border-indigo-400/10",
    },
    {
      title: "UI/UX Builder Program",
      status: "Future Initiative",
      desc: "Master layout guidelines, typographic rules, spacing systems, and custom visual design systems.",
      icon: Compass,
      outcome: "Create premium designs",
      color: "text-amber-500 border-amber-500/10",
    },
    {
      title: "Hackathons & Innovation",
      status: "Future Initiative",
      desc: "Collaborate in team-based design sprints and timed coding challenges to deploy MVPs quickly.",
      icon: Activity,
      outcome: "Win ecosystem challenges",
      color: "text-emerald-500 border-emerald-500/10",
    },
  ]

  return (
    <section className="relative py-24 bg-transparent border-t border-border/40">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-secondary/3 blur-[120px] rounded-full" />
      </div>

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-3 block">
              ECOSYSTEM INITIATIVES
            </span>
            <h2 className="text-3xl md:text-4xl font-fancy font-light text-headings tracking-tight leading-tight">
              Future Builder Programs
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              We design structured cohorts that turn syntax learners into autonomous, shipping developers. No passive video grids here.
            </p>
          </div>
          <Link
            href="/cohorts"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group cursor-pointer"
          >
            See Program Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ================= INITIATIVE CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`p-6 rounded-3xl bg-white/40 border border-border/50 shadow-xs backdrop-blur-md flex flex-col justify-between hover:bg-white/80 transition-all duration-300 relative group`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-border flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    item.status === "Launching Soon" ? "bg-primary/5 text-primary border border-primary/10" : "bg-slate-100 text-slate-500"
                  }`}>
                    {item.status}
                  </span>
                </div>
                
                <h3 className="text-sm font-semibold text-headings mb-3">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">{item.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/40 text-[9px] text-primary uppercase tracking-wider font-semibold">
                Outcome: {item.outcome}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
