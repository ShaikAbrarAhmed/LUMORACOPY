"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

// --- Custom SVGs & Icon Components (Prevents Lucide Turbopack Cache Issues) ---
const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

const CompassIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const UsersIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const RocketIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const SproutIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
)

const cycleSteps = [
  { step: "01", title: "Opening YouTube", desc: "Searching for tutorials, getting hit with millions of search results." },
  { step: "02", title: "Saving Roadmaps", desc: "Bookmarking exhaustive path guides that span years of study." },
  { step: "03", title: "Watching Videos", desc: "Following tutorials passively, typing along, feeling productive." },
  { step: "04", title: "Starting Projects", desc: "Opening a blank screen, trying to code, and freezing completely." },
  { step: "05", title: "Quitting Projects", desc: "Hitting compile errors, feeling isolated, losing motivation." },
  { step: "06", title: "Starting Again", desc: "Taking a break, resolving to try once more, returning to step one." },
]

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 select-none overflow-x-hidden pt-24">
      <Navbar />

      {/* Decorative ambient gradients (Deep Indigo dominant) */}
      <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-primary/4 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-primary/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-24 pb-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <span className="text-xs font-semibold text-primary tracking-[0.3em] uppercase block mb-2">
            OUR STORY
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-headings leading-[1.1] max-w-4xl mx-auto">
            Why is learning technology <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              so lonely?
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed max-w-2xl mx-auto pt-4">
            We built Lumora not because we had all the answers. <br />
            <span className="text-foreground font-medium">But because we were asking the same questions.</span>
          </p>
        </motion.div>
      </section>

      {/* ================= SECTION 2: THE BEGINNING (THE CYCLE) ================= */}
      <section className="py-24 px-6 border-t border-border/40 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase block">
              THE CYCLE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-headings leading-[1.2]">
              It Started With Confusion.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Most students begin their learning path exactly the same way. We fall into a loop of information overload and artificial progress, hoping it leads to competence.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-8 relative pl-6 border-l border-[#E5E7EB]/40">
              {cycleSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative group"
                >
                  {/* Dot on the line */}
                  <div className="absolute -left-[31px] top-2 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors duration-300" />
                  
                  <div className="flex gap-4 items-start">
                    <span className="text-3xl font-mono font-light text-primary/30 tracking-tight select-none">
                      {step.step}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-headings">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-12 pb-6 text-center max-w-2xl mx-auto"
            >
              <p className="font-fancy text-2xl md:text-3xl italic text-foreground leading-relaxed">
                "We know that feeling. The silent belief that everyone else knows something you don't. But the problem was never talent. It was direction."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE REAL PROBLEM ================= */}
      <section className="py-28 px-6 bg-muted/40 border-y border-border/40 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-headings">
              The Problem Was <br className="hidden md:inline" />
              Never <span className="text-destructive line-through decoration-wavy decoration-2">Talent</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-6">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 bg-white border border-border/70 rounded-[28px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
            >
              <h3 className="text-xl font-bold text-muted-foreground">What We Are Told:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-base text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-xs font-bold">✕</span>
                  Struggling because of lack of intelligence.
                </li>
                <li className="flex items-center gap-3 text-base text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-xs font-bold">✕</span>
                  Struggling because of lack of ambition.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 bg-white border border-primary/20 rounded-[28px] p-8 shadow-[0_8px_30px_rgba(79,70,229,0.04)]"
            >
              <h3 className="text-xl font-bold text-primary">The Reality We Found:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-base text-foreground font-medium">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">✓</span>
                  They are struggling because they lack direction.
                </li>
                <li className="flex items-center gap-3 text-base text-foreground font-medium">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">✓</span>
                  Too many resources. Too many opinions. Too many paths. Not enough clarity.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: THE REALIZATION ================= */}
      <section className="py-28 px-6 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-headings leading-[1.1]">
              No One Should <br />
              Have To Figure It <br />
              Out Alone.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              The more we spoke to students, the more we realized something: everyone was facing the same battle.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-[20px] bg-white border border-border/70 shadow-[0_4px_12px_rgba(0,0,0,0.01)] items-center">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-base text-muted-foreground">Learning alone.</span>
              </div>
              <div className="flex gap-4 p-5 rounded-[20px] bg-white border border-border/70 shadow-[0_4px_12px_rgba(0,0,0,0.01)] items-center">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-base text-muted-foreground">Building alone.</span>
              </div>
              <div className="flex gap-4 p-5 rounded-[20px] bg-white border border-border/70 shadow-[0_4px_12px_rgba(0,0,0,0.01)] items-center">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-base text-muted-foreground">Growing alone.</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary/5 border border-primary/10 rounded-[24px] p-6 text-center"
            >
              <p className="text-base text-foreground font-medium leading-relaxed">
                The issue wasn't access to information. <br />
                The issue was the absence of <span className="text-primary font-bold">guidance</span>, <span className="text-primary/80 font-bold">community</span>, and <span className="text-accent font-bold">accountability</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: WHY LUMORA EXISTS (MANIFESTO) ================= */}
      <section className="py-32 px-6 bg-gradient-to-b from-background to-white border-t border-border/40 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase block">
              OUR MANIFESTO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-headings">
              More Than A Platform.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12 text-2xl md:text-3xl text-muted-foreground font-fancy leading-relaxed text-left border-l-4 border-primary pl-8 md:pl-12 max-w-3xl mx-auto my-16"
          >
            <p className="hover:text-foreground transition-colors duration-300">
              Lumora wasn't created to become another EdTech company.
            </p>
            <p className="hover:text-foreground transition-colors duration-300">
              It wasn't created to sell courses.
            </p>
            <p className="text-foreground font-semibold text-3xl md:text-4xl leading-tight">
              It was created to give students something many of us never had.
            </p>
            <div className="py-4">
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold font-heading tracking-tight block">
                Direction. Confidence. Belonging.
              </span>
            </div>
            <p className="text-xl md:text-2xl font-sans not-italic text-muted-foreground hover:text-foreground transition-colors duration-300">
              A place where growth doesn't have to happen alone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 6: WHAT WE'RE BUILDING (4 PILLARS) ================= */}
      <section className="py-28 px-6 bg-muted/30 border-y border-border/40 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-headings">
              The Future We Believe In.
            </h2>
            <p className="text-base text-muted-foreground">
              We are shifting focus away from dry certificates towards real personal and technical transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Pillar 1: Clarity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <CompassIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-headings flex items-center gap-2">
                Clarity
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Helping students know where to begin, stripping away the noise to expose real learning paths.
              </p>
            </motion.div>

            {/* Pillar 2: Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <UsersIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-headings flex items-center gap-2">
                Community
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Growing alongside people on the same journey, sharing milestones and debugging errors together.
              </p>
            </motion.div>

            {/* Pillar 3: Confidence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                <RocketIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-headings flex items-center gap-2">
                Confidence
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Building belief through action. Designing, coding, and shipping actual functional software.
              </p>
            </motion.div>

            {/* Pillar 4: Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <SproutIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-headings flex items-center gap-2">
                Growth
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Creating long-term transformation, cultivating a mindset ready for real professional challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: FINAL STATEMENT & CTAS ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto mb-20 relative z-10">
        <div className="relative overflow-hidden bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 rounded-[32px] p-8 md:p-20 border border-border/60 text-center">
          <div className="absolute top-[40px] left-1/2 -translate-x-1/2 text-8xl font-fancy font-bold tracking-tight text-primary/5 pointer-events-none select-none">
            “
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-8 max-w-3xl mx-auto"
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold text-primary tracking-widest uppercase block">
                JOIN THE MISSION
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-headings leading-tight">
                We're Still Early. <br />
                But The Mission Is Clear.
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-primary font-fancy italic leading-relaxed max-w-2xl mx-auto">
              "No student should have to navigate their journey alone."
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/cohorts"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary/95 transition-all duration-200 shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 text-sm group"
              >
                Join The Journey
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/team"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-white text-foreground font-semibold rounded-2xl hover:bg-muted transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                Meet The Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
