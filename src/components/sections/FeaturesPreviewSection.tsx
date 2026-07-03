"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Compass, Flame, Users, Trophy, Sparkles, ArrowRight } from "lucide-react"

export default function FeaturesPreviewSection() {
  const previews = [
    {
      title: "Direction",
      desc: "Clear roadmaps mapped to real developer outcomes, ending tutorial paralysis.",
      icon: Compass,
      color: "text-primary",
      bgColor: "bg-primary/5 border-primary/10",
    },
    {
      title: "Accountability",
      desc: "Consistent progress habits through structured co-working and peer check-ins.",
      icon: Flame,
      color: "text-red-500",
      bgColor: "bg-red-500/5 border-red-500/10",
    },
    {
      title: "Community",
      desc: "Co-work and learn side-by-side with ambitious and supportive beginners.",
      icon: Users,
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/5 border-indigo-400/10",
    },
    {
      title: "Opportunities",
      desc: "Ecosystem hackathons, collaborative code syncs, and veteran mentorship.",
      icon: Trophy,
      color: "text-amber-500",
      bgColor: "bg-amber-500/5 border-amber-500/10",
    },
    {
      title: "Confidence",
      desc: "Build proof of competency by coding, shipping, and deploying real codebases.",
      icon: Sparkles,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/5 border-emerald-500/10",
    },
  ]

  return (
    <section className="relative py-24 bg-transparent border-t border-border/40">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-primary/2 blur-[120px] rounded-full" />
      </div>

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-3 block">
              OUTCOME-FOCUSED ECOSYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl font-fancy font-light text-headings tracking-tight leading-tight">
              Designed For Practical Competency
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              We cut the fluff. Lumora is designed to give you exactly what you need to build confidence and start shipping software.
            </p>
          </div>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group cursor-pointer"
          >
            Explore All Features
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ================= PREVIEWS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {previews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-white/40 border border-border/50 shadow-[0_8px_30px_rgba(15,23,42,0.01)] backdrop-blur-md hover:bg-white/80 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(79,70,229,0.02)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-10 h-10 rounded-2xl ${item.bgColor} border flex items-center justify-center mb-6`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="text-base font-semibold text-headings mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Decorative / Custom CTA Box inside grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: previews.length * 0.05 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-primary to-secondary text-white shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/75">
                Ready to build?
              </span>
              <h3 className="text-lg font-bold mt-2 leading-snug">
                Stop consuming syntax. <br />
                Start shipping real apps.
              </h3>
            </div>
            <Link
              href="/features"
              className="mt-8 text-xs font-semibold underline underline-offset-4 hover:text-white/90 inline-flex items-center gap-1 group cursor-pointer"
            >
              See how it works
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
