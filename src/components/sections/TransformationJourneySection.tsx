"use client"

import { motion } from "framer-motion"
import { Compass, Target, Zap, Sparkles, Code2, ArrowRight, X, Check } from "lucide-react"

export default function TransformationJourneySection() {
  const journeySteps = [
    {
      label: "Lost",
      icon: Compass,
      desc: "Stuck in tutorial overload & roadmap confusion.",
      color: "text-red-500",
      bgColor: "bg-red-500/5 border-red-500/10",
      glowColor: "rgba(239, 68, 68, 0.15)",
    },
    {
      label: "Direction",
      icon: Target,
      desc: "Find structured guidance on what to build next.",
      color: "text-primary",
      bgColor: "bg-primary/5 border-primary/10",
      glowColor: "rgba(79, 70, 229, 0.15)",
    },
    {
      label: "Consistency",
      icon: Zap,
      desc: "Daily habit tracking with co-working support.",
      color: "text-amber-500",
      bgColor: "bg-amber-500/5 border-amber-500/10",
      glowColor: "rgba(245, 158, 11, 0.15)",
    },
    {
      label: "Confidence",
      icon: Sparkles,
      desc: "Concrete proofs of concept shipped to end self-doubt.",
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/5 border-indigo-400/10",
      glowColor: "rgba(129, 140, 248, 0.15)",
    },
    {
      label: "Builder",
      icon: Code2,
      desc: "Deploying production-ready projects publicly.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/5 border-emerald-500/10",
      glowColor: "rgba(16, 185, 129, 0.15)",
    },
  ]

  const comparisons = {
    before: {
      title: "Today: Consuming",
      subtitle: "The Tutorial Trap",
      icon: X,
      iconColor: "text-red-500",
      bgColor: "bg-red-500/5",
      points: [
        { title: "Copy-Paste Cycles", desc: "Watching code videos but freezing when starting an empty file." },
        { title: "Infinite Roadmaps", desc: "Endless options and opinions leading to total analysis paralysis." },
        { title: "Learning in Isolation", desc: "No core feedback loop or support group to review code or designs." },
        { title: "Inconsistent Rhythm", desc: "Starting strong on weekends and losing momentum by Monday." },
      ],
    },
    after: {
      title: "Tomorrow: Building",
      subtitle: "The Builder Ecosystem",
      icon: Check,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-500/5",
      points: [
        { title: "Action-First Habits", desc: "Starting with layout logic and creating real working prototypes." },
        { title: "Focused Milestones", desc: "Single, actionable objectives with zero noise or confusion." },
        { title: "Collaborative Squads", desc: "Peer checks, PR discussions, and sharing milestone reviews." },
        { title: "Predictable Consistency", desc: "A steady daily building habit supported by accountability partners." },
      ],
    },
  }

  return (
    <section id="journey" className="relative py-24 md:py-32 overflow-hidden bg-background border-t border-border/40">
      
      {/* Background Soft Glows */}
      <div className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[165px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-3 block">
            TRANSFORMATION JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-fancy font-light text-headings tracking-tight leading-tight">
            Stop Consuming. Start Building.
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            The difference isn&apos;t what tutorial you buy. It is how you transition from an anxious consumer to an active creator. Here is your path.
          </p>
        </div>

        {/* ================= JOURNEY FLOW NODES ================= */}
        <div className="relative bg-white/30 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-[0_12px_40px_rgba(11,16,32,0.01)] mb-20">
          
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-border/80 hidden md:block" />

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
            {journeySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center w-full md:w-1/5 group relative"
              >
                {/* Visual Icon Node */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border ${step.bgColor} shadow-sm group-hover:scale-105 transition-all duration-300 relative`}
                  style={{
                    boxShadow: `0 0 20px ${step.glowColor}`,
                  }}
                >
                  <step.icon className={`w-5 h-5 ${step.color} transition-colors`} />
                </div>

                <h4 className="mt-4 font-semibold text-sm text-headings">{step.label}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-normal max-w-[140px] font-light">
                  {step.desc}
                </p>

                {/* Mobile connector arrow */}
                {idx < journeySteps.length - 1 && (
                  <div className="md:hidden mt-4 text-muted-foreground/30">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= SIDE BY SIDE COMPARISON ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Before: Traditional Trap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl bg-slate-50/40 border border-border/50 shadow-[0_8px_30px_rgba(0,0,0,0.01)] backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{comparisons.before.subtitle}</span>
                  <h3 className="text-xl font-bold text-headings mt-1">{comparisons.before.title}</h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center text-red-500 shadow-sm">
                  <comparisons.before.icon className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-4">
                {comparisons.before.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/40 border border-border/30">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-xs text-headings">{point.title}</h5>
                      <p className="text-[11px] text-muted-foreground mt-0.5 font-light leading-normal">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/40 text-[10px] text-muted-foreground/80 font-light italic">
              Results in tutorial paralysis, self-doubt, and eventual burnout.
            </div>
          </motion.div>

          {/* After: Tomorrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 md:p-10 rounded-3xl bg-white/60 border border-primary/20 shadow-[0_12px_40px_rgba(79,70,229,0.02)] backdrop-blur-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-primary/5 blur-[60px] rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{comparisons.after.subtitle}</span>
                  <h3 className="text-xl font-bold text-headings mt-1">{comparisons.after.title}</h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shadow-sm">
                  <comparisons.after.icon className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-4">
                {comparisons.after.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-border/60 shadow-[0_4px_12px_rgba(79,70,229,0.01)]">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-xs text-headings">{point.title}</h5>
                      <p className="text-[11px] text-muted-foreground mt-0.5 font-light leading-normal">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-primary/10 text-[10px] text-primary font-medium">
              Designed to build real-world competency and product autonomy.
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
