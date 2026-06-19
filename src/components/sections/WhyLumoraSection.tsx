"use client"

import { motion } from "framer-motion"
import { Compass, Users, Flame, UserCheck, Rocket } from "lucide-react"

export default function WhyLumoraSection() {
  const pillars = [
    {
      title: "Direction",
      desc: "Know what to focus on next. Avoid tutorial traps and follow a clear, outcomes-driven build path.",
      icon: Compass,
      glow: "rgba(217, 217, 217, 0.15)",
    },
    {
      title: "Community",
      desc: "Build alongside ambitious students. Share milestones, critique code, and grow within a collaborative ecosystem.",
      icon: Users,
      glow: "rgba(245, 245, 245, 0.15)",
    },
    {
      title: "Accountability",
      desc: "Stay consistent through challenges and support. Built-in co-working sessions keep you focused and shipping.",
      icon: Flame,
      glow: "rgba(217, 217, 217, 0.15)",
    },
    {
      title: "Mentorship",
      desc: "Learn from people who've already walked the path. Get direct code audits and system reviews from industry vets.",
      icon: UserCheck,
      glow: "rgba(245, 245, 245, 0.15)",
    },
    {
      title: "Opportunities",
      desc: "Apply your learnings in internal hackathons, group projects, and waitlisted future builder programs.",
      icon: Rocket,
      glow: "rgba(217, 217, 217, 0.2)",
    },
  ]

  return (
    <section id="features" className="relative py-16 md:py-20 px-6 overflow-hidden bg-[#050505] text-white">
      
      {/* Background Soft Glows */}
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4 block">
            THE PLATFORM DIFFERENCE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-fancy font-light text-headings tracking-tight leading-tight">
            A Different Way To Grow.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
            We are not a course platform or a resource repository. We are a builder-first ecosystem designed to help you move from theory to execution.
          </p>
        </div>

        {/* ================= PILLARS CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-12">
          {pillars.slice(0, 3).map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -2 }}
                className="p-6 bg-[#111214]/40 border border-white/10 rounded-2xl flex flex-col justify-between group space-y-6 hover:bg-[#111214] hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-semibold text-primary tracking-[0.2em] uppercase">
                    0{idx + 1} // {pillar.title}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-light min-h-[60px] text-left">
                  {pillar.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* ================= HIGHLIGHT SPOTLIGHT BOTTOM ROW (Opportunities & Mentorship) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-stretch">
          
          {/* Mentorship (5 cols) - Supporting Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -2 }}
            className="lg:col-span-5 p-6 bg-[#111214]/40 border border-white/10 rounded-2xl flex flex-col justify-between group space-y-6 hover:bg-[#111214] hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] font-semibold text-primary tracking-[0.2em] uppercase">
                04 // Mentorship
              </span>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed font-light text-left">
              Learn from people who've already walked the path. Get direct code audits and system reviews from industry vets.
            </p>
          </motion.div>

          {/* Opportunities Highlight Panel (7 cols) - Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -2 }}
            className="lg:col-span-7 relative overflow-hidden rounded-2xl bg-gradient-to-tr from-primary/[0.02] via-card/10 to-transparent border border-primary/20 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-primary/40 transition-all duration-300"
          >
            {/* Subtle mesh glow inside spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none" />
            
            <div className="space-y-4 max-w-md relative z-10 text-left">
              <span className="text-[10px] font-semibold text-primary tracking-[0.2em] uppercase">
                05 // Opportunities
              </span>
              <h3 className="text-2xl font-bold text-headings tracking-tight group-hover:text-primary transition-colors">
                Opportunities
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Apply your learnings in internal hackathons, group projects, and waitlisted future builder programs.
              </p>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0 relative z-10">
              <Rocket className="w-5 h-5" />
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  )
}
