"use client"

import { motion } from "framer-motion"
import {
  Compass,
  Users,
  Rocket,
  Flame,
  Activity,
  Sparkles,
  Trophy,
  ArrowRight
} from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-36 overflow-hidden bg-transparent">
      
      {/* Background glow elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-primary/[0.015] rounded-full blur-[130px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
            {/* <span className="inline-block px-3.5 py-1.5 rounded-full text-primary text-[10px] font-bold uppercase tracking-[0.25em] mb-4 bg-primary/5 border border-primary/10 select-none">
              Lumora Features
            </span> */}
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.08] text-headings">
            Everything We Wish We Had <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              When We Started.
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
            Growth shouldn't feel confusing, lonely, or directionless.
          </p>
        </div>

        {/* ================= BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Find Direction (Col Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative rounded-[32px] border border-slate-200/50 bg-white/40 shadow-sm backdrop-blur-md p-8 md:p-10 flex flex-col justify-between overflow-hidden group hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(91,95,239,0.04)] transition-all duration-300 min-h-[380px]"
          >
            {/* Visual background decoration */}
            <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-primary/5 blur-[50px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10 space-y-4 max-w-md">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-mono font-bold text-primary uppercase tracking-wider">
                Ecosystem Core
              </div>
              <h3 className="text-2xl font-bold text-headings flex items-center gap-2.5">
                <Compass className="w-6 h-6 text-primary" />
                Find Direction
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Clear guidance when everything feels overwhelming. Follow custom learning roadmaps mapped directly to buildable outcomes, eliminating tutorial paralysis.
              </p>
            </div>

            {/* Inner Interactive Visual Indicator */}
            <div className="relative z-10 mt-8 w-full bg-white/80 border border-slate-200/40 rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-3">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Workspace Map</span>
              <div className="flex flex-wrap items-center gap-2">
                {["HTML/CSS Core", "React Components", "Node.js API", "Prisma Database", "Production Deploy"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-[#F7F8FF] border border-slate-200/50 px-3 py-2 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{step}</span>
                    {i < 4 && <ArrowRight className="w-3.5 h-3.5 text-slate-300 ml-1" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Community (Col Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-[32px] border border-slate-200/50 bg-white/40 shadow-sm backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden group hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(79,70,229,0.04)] transition-all duration-300 min-h-[380px]"
          >
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-primary/5 blur-[45px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/15 text-[9px] font-mono font-bold text-primary uppercase tracking-wider">
                Belonging
              </div>
              <h3 className="text-xl font-bold text-headings flex items-center gap-2.5">
                <Users className="w-5.5 h-5.5 text-primary" />
                Community
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Learn alongside people on the same journey. Co-work in dedicated slots, coordinate code sync reviews, and share milestones with fellow active builders.
              </p>
            </div>

            <div className="relative z-10 mt-6 p-4 rounded-2xl bg-white/70 border border-slate-200/40 space-y-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(idx => (
                  <div key={idx} className="w-7 h-7 rounded-full bg-gradient-to-tr from-primary/60 to-primary border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
                    {String.fromCharCode(64 + idx)}
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-medium text-slate-500 block">4 cohort peers building right now</span>
            </div>
          </motion.div>

          {/* Card 3: Opportunities (Col Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-[32px] border border-slate-200/50 bg-white/40 shadow-sm backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden group hover:border-[#F59E0B]/20 hover:shadow-[0_20px_50px_rgba(245,158,11,0.04)] transition-all duration-300 min-h-[380px]"
          >
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#F59E0B]/5 blur-[45px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/15 text-[9px] font-mono font-bold text-[#F59E0B] uppercase tracking-wider">
                Experiences
              </div>
              <h3 className="text-xl font-bold text-headings flex items-center gap-2.5">
                <Rocket className="w-5.5 h-5.5 text-[#F59E0B]" />
                Opportunities
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Discover events, internal ecosystem hackathons, and real-world project experience to apply your learnings and get noticed.
              </p>
            </div>

            <div className="relative z-10 mt-6 p-4 rounded-2xl bg-[#F59E0B]/5 border border-[#F59E0B]/15 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-[#F59E0B] shrink-0" />
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Hackathon Active</span>
                <span className="text-xs font-semibold text-slate-800">Sprint #2: Real SaaS MVP</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Accountability (Col Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-[32px] border border-slate-200/50 bg-white/40 shadow-sm backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden group hover:border-[#EF4444]/20 hover:shadow-[0_20px_50px_rgba(239,68,68,0.04)] transition-all duration-300 min-h-[380px]"
          >
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#EF4444]/3 blur-[45px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/15 text-[9px] font-mono font-bold text-[#EF4444] uppercase tracking-wider">
                Consistency
              </div>
              <h3 className="text-xl font-bold text-headings flex items-center gap-2.5">
                <Flame className="w-5.5 h-5.5 text-[#EF4444]" />
                Accountability
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Stay consistent and maintain momentum. Track progress daily and set peer checks that make quitting difficult.
              </p>
            </div>

            <div className="relative z-10 mt-6 p-4 rounded-2xl bg-white/70 border border-slate-200/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#EF4444]" />
                <span className="text-xs font-semibold text-slate-700">Streak Record</span>
              </div>
              <span className="text-xs font-bold text-slate-900 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">30 Days</span>
            </div>
          </motion.div>

          {/* Card 5: Growth (Col Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-[32px] border border-slate-200/50 bg-white/40 shadow-sm backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden group hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(79,70,229,0.04)] transition-all duration-300 min-h-[380px]"
          >
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-primary/5 blur-[45px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/15 text-[9px] font-mono font-bold text-primary uppercase tracking-wider">
                Progression
              </div>
              <h3 className="text-xl font-bold text-headings flex items-center gap-2.5">
                <Activity className="w-5.5 h-5.5 text-primary" />
                Growth
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Focus on progress, not perfection. Measure skill improvements by shipping features, tracking code outputs, and building real expertise.
              </p>
            </div>

            <div className="relative z-10 mt-6 p-4 rounded-2xl bg-white/70 border border-slate-200/40 space-y-2">
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold">
                <span>Code Mastery</span>
                <span>80%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "80%" }} />
              </div>
            </div>
          </motion.div>

          {/* Card 6: Confidence (Col Span 3 - Spotlight) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 relative rounded-[32px] border border-slate-200/50 bg-gradient-to-tr from-white/40 via-background/30 to-primary/5 shadow-sm backdrop-blur-md p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center group hover:border-primary/30 hover:shadow-[0_24px_64px_rgba(79,70,229,0.06)] transition-all duration-300 min-h-[380px]"
          >
            {/* Spotlight blur */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(79,70,229,0.04),transparent_60%)] pointer-events-none" />

            <div className="md:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/15 text-[9px] font-mono font-bold text-primary uppercase tracking-wider">
                Action
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-headings tracking-tight">
                Confidence <br />
                <span className="text-primary font-bold">Build belief through action.</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Confidence isn't something you learn—it's something you build. By designing, coding, testing, and deploying actual working systems, you gain concrete proofs of concept that end self-doubt loops.
              </p>
            </div>

            {/* Inner Terminal visual */}
            <div className="md:col-span-6 w-full bg-[#0F172A] border border-white/10 rounded-2xl p-5 shadow-lg relative overflow-hidden font-mono text-xs text-slate-400">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="space-y-1.5">
                <div className="flex gap-2"><span className="text-primary/90">$</span> <span>npm run deploy</span></div>
                <div className="text-slate-500 pl-4">&gt; building client production package...</div>
                <div className="text-emerald-400 pl-4">✓ build complete. bundles optimized.</div>
                <div className="text-slate-500 pl-4">&gt; deploying bundle to vercel CDN network...</div>
                <div className="text-primary pl-4 font-semibold">✓ Deployed successfully to https://lumora.space</div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
