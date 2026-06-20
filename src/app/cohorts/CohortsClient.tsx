"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { useRouter } from "next/navigation"
import { useMembership } from "@/components/auth/MembershipContext"
import { CohortCardSkeleton, CohortCtaSkeleton, Skeleton } from "@/components/ui/Skeleton"
import { 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Check, 
  X, 
  Activity, 
  Smile, 
  Users, 
  Code2, 
  ArrowDown,
  Target,
  Zap,
  Terminal,
  Database,
  Cpu
} from "lucide-react"

export default function CohortsPage() {
  const router = useRouter()
  const { requireMembership } = useMembership()
  const [waitlistEmail, setWaitlistEmail] = useState("")
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!waitlistEmail) return

    requireMembership("join_waitlist", async () => {
      setWaitlistStatus("loading")
      try {
        const res = await fetch("/api/submit-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: waitlistEmail,
            cohort: "Cohort Waitlist Only",
            name: "Waitlist Subscriber",
            college: "Waitlist",
            phone: "None",
            message: "Joined waitlist from Cohort Page CTA."
          }),
        })
        if (!res.ok) throw new Error("Failed to subscribe")
        setWaitlistStatus("success")
        setWaitlistEmail("")
      } catch (err) {
        console.error(err)
        setWaitlistStatus("error")
      }
    }, { email: waitlistEmail })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-white/15 overflow-x-hidden">
      <Navbar />

      {/* Ambient background glows (Subtle white/pearl luxury highlights down the page) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-white/[0.01] blur-[140px] rounded-full" />
        <div className="absolute top-[25%] right-[-10%] w-[700px] h-[700px] bg-white/[0.015] blur-[165px] rounded-full" />
        <div className="absolute top-[50%] left-[-10%] w-[600px] h-[600px] bg-white/[0.01] blur-[150px] rounded-full" />
        <div className="absolute top-[75%] right-[-15%] w-[700px] h-[700px] bg-white/[0.015] blur-[160px] rounded-full" />
        <div className="absolute bottom-[5%] left-[10%] w-[600px] h-[600px] bg-white/[0.01] blur-[140px] rounded-full" />
      </div>

      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            <Sparkles className="w-3.5 h-3.5 text-slate-400" />
            LUMORA PROGRAMS
          </div> */}

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-fancy font-light tracking-tight text-white leading-[1.08] mb-8">
            More Than A Course.
            <br />
            <span className="text-slate-400 italic">
              A Guided Builder Experience.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Most students don't need more content.
            <br className="hidden md:inline" />
            They need direction, mentorship, accountability, and a place to build.
            <br className="hidden md:inline" />
            Lumora programs are designed to help students move from confusion to confidence through structured learning, practical implementation, and community support.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("waitlist")}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all duration-300 shadow-md hover:-translate-y-0.5 text-center text-sm cursor-pointer"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => scrollToSection("transformation")}
              className="w-full sm:w-auto px-8 py-4 bg-background border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 text-center text-sm flex items-center justify-center gap-2 group cursor-pointer"
            >
              Explore The Vision
              <ArrowRight className="w-4 h-4 text-slate-400 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 2: THE PATH OF TRANSFORMATION ================= */}
      <section id="transformation" className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Journey</span>
          <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight mb-6">
            The Path Of Transformation
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
            Every Lumora cohort is designed to help students progress through these stages by learning, building, and growing alongside a community.
          </p>
        </div>

        {/* Visual Flow: Lost -> Direction -> Consistency -> Confidence -> Builder */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Desktop timeline line */}
          {/* <div className="absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] bg-white/10 hidden md:block" /> */}

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative z-10">
            {[
              {
                stage: "Lost",
                icon: Compass,
                color: "text-slate-300 border-white/10 bg-white/5 shadow-xs hover:border-white/20",
                badgeColor: "bg-white/5 text-slate-400 border-white/10",
                desc: "Tutorial overload & roadmap confusion. Stuck in copy-paste loops."
              },
              {
                stage: "Direction",
                icon: Target,
                color: "text-slate-300 border-white/10 bg-white/5 shadow-xs hover:border-white/20",
                badgeColor: "bg-white/5 text-slate-400 border-white/10",
                desc: "Structured guidance on where to start. Visualizing clear goals."
              },
              {
                stage: "Consistency",
                icon: Zap,
                color: "text-slate-300 border-white/10 bg-white/5 shadow-xs hover:border-white/20",
                badgeColor: "bg-white/5 text-slate-400 border-white/10",
                desc: "Daily building habits & shipping rhythm. Accountability is established."
              },
              {
                stage: "Confidence",
                icon: Sparkles,
                color: "text-slate-300 border-white/10 bg-white/5 shadow-xs hover:border-white/20",
                badgeColor: "bg-white/5 text-slate-400 border-white/10",
                desc: "Belief in your engineering execution. Shipping independent projects."
              },
              {
                stage: "Builder",
                icon: Code2,
                color: "text-white border-white/20 bg-white/10 shadow-xs hover:border-white/30",
                badgeColor: "bg-white/10 text-white border-white/20",
                desc: "Shipping production-ready creations. Active peer collaboration."
              }
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group relative animate-fade-in"
                >
                  {/* Node Circle */}
                  <div className={`w-20 h-20 rounded-full border flex items-center justify-center transition-all duration-500 relative z-10 ${step.color} shadow-lg hover:scale-110`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                    {/* Ring Pulse for active or final node */}
                    {i === 4 && (
                      <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-10" />
                    )}
                  </div>

                  {/* Stage Index Badge */}
                  <span className={`mt-6 text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded-full border ${step.badgeColor}`}>
                    Stage 0{i + 1}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white mt-3 mb-2">
                    {step.stage}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 font-light leading-relaxed max-w-[180px] mx-auto">
                    {step.desc}
                  </p>

                  {/* Connect arrow for mobile view */}
                  {i < 4 && (
                    <div className="md:hidden mt-6 text-slate-500">
                      <ArrowDown className="w-5 h-5 animate-bounce" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE DIFFERENCE ================= */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">The Model</span>
          <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight mb-6">
            The Difference Isn't What You Learn.
            <br />
            <span className="text-slate-400">
              It's Who You Become.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Traditional Learning Card (Muted, Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-[24px] bg-[#111214]/30 border border-white/5 shadow-2xl backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                  <X className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white">Traditional Learning</h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Endless tutorials",
                  "Learning alone",
                  "No accountability",
                  "Information overload",
                  "No clear direction"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-400 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5">
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Result</span>
              <p className="text-lg font-heading font-medium text-slate-400 italic">
                Starting often. Finishing rarely.
              </p>
            </div>
          </motion.div>

          {/* Lumora Cohorts Card (Elevated, Glowing, Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-[24px] bg-[#111214] border border-white/20 shadow-[0_20px_50px_rgba(255,255,255,0.01)] backdrop-blur-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/[0.01] blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white">Lumora Cohorts</h3>
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  BUILDER-FIRST
                </span>
              </div>

              <ul className="space-y-4">
                {[
                  "Structured learning paths",
                  "Mentorship",
                  "Accountability",
                  "Community support",
                  "Builder-first mindset"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200 font-light">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 relative z-10">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Result</span>
              <p className="text-lg font-heading font-bold text-white">
                Consistent progress and real growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 4: BUILDER PROGRAMS ================= */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Programs</span>
          <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight mb-6">
            Builder Programs
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
            We're building experiences designed to help students learn by creating, grow with guidance, and gain confidence through implementation.
          </p>
        </div>

        {/* Program Cards Stack with Hierarchy */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* HERO CARD: Web Builder (Launching First) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-[24px] bg-[#111214] border border-white/20 shadow-[0_25px_60px_rgba(255,255,255,0.01)] relative overflow-hidden group"
          >
            {/* Ambient gradients */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/[0.01] blur-[90px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column (Content) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Launching First
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
                  Web Builder
                </h3>

                <p className="text-slate-300 font-light leading-relaxed text-base md:text-lg max-w-xl">
                  Build strong web development foundations through practical learning, mentorship, and community support.
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  <span className="text-xs text-slate-400 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                    Frontend Architecture
                  </span>
                  <span className="text-xs text-slate-400 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                    Interactive JS
                  </span>
                  <span className="text-xs text-slate-400 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                    Team Projects
                  </span>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => scrollToSection("waitlist")}
                    className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                  >
                    Join Program Waitlist
                    <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right Column (Visual flow preview inside the program) */}
              <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-[20px] p-6 space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Program Milestones</h4>
                
                {[
                  { title: "Foundations & Layout", desc: "Symmetric compositions & premium styling structures." },
                  { title: "Dynamic Logic", desc: "Building state machines, API integrations & async data flows." },
                  { title: "Capstone Builder", desc: "Collaborating with a mentor to ship a production-grade app." }
                ].map((milestone, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white leading-none mb-1">{milestone.title}</h5>
                      <p className="text-xs text-slate-400 leading-normal font-light">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Supporting Cards Grid: Python, Data, AI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Python Builder",
                status: "Coming Soon",
                desc: "Learn programming fundamentals and develop problem-solving skills through structured implementation.",
                icon: Terminal,
                tagColor: "bg-white/5 text-slate-300 border-white/10"
              },
              {
                title: "Data Analyst",
                status: "Coming Soon",
                desc: "Learn how to work with data, uncover insights, and develop analytical thinking.",
                icon: Database,
                tagColor: "bg-white/5 text-slate-300 border-white/10"
              },
              {
                title: "AI Builder",
                status: "Future Cohort",
                desc: "Explore AI workflows, modern tools, and intelligent product development.",
                icon: Cpu,
                tagColor: "bg-white/5 text-slate-300 border-white/10"
              }
            ].map((program, idx) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="p-6 md:p-8 rounded-[24px] bg-[#111214]/60 border border-white/5 shadow-xl hover:bg-[#111214] hover:border-white/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${program.tagColor}`}>
                        {program.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-white mt-2">
                      {program.title}
                    </h3>

                    <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                      {program.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                      Future Release
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: WHAT EVERY PROGRAM INCLUDES ================= */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-white/5 bg-white/[0.01] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Inclusions</span>
          <h2 className="text-4xl md:text-5xl font-fancy font-light text-white tracking-tight mb-6">
            What Every Program Includes
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
            We focus on structured building blocks that drive actual growth. Here is what you get when you step inside a program.
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <CohortCardSkeleton key={i} />
              ))}
            </div>
          </div>
        ) : (
          /* 6 Feature Inclusions Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Mentorship",
                desc: (
                  <>
                    Get direct feedback on your code, system design, and career path from industry{" "}
                    <Link href="/mentors" className="text-white hover:underline">
                      mentors
                    </Link>.
                  </>
                ),
                icon: Users
              },
              {
                title: "Community Support",
                desc: (
                  <>
                    Build alongside a peer group of motivated students. Share resources, debug together, and celebrate wins in our{" "}
                    <Link href="/community" className="text-white hover:underline">
                      builder community
                    </Link>.
                  </>
                ),
                icon: Smile
              },
              {
                title: "Builder Challenges",
                desc: "Solve hands-on engineering challenges designed to push your capabilities beyond syntax.",
                icon: Target
              },
              {
                title: "Accountability",
                desc: "Stay on track with regular check-ins, progress updates, and a community that expects you to ship.",
                icon: Activity
              },
              {
                title: "Project-Based Learning",
                desc: "Stop building toy apps. Create production-ready tools that solve real problems and show your true skill.",
                icon: Code2
              },
              {
                title: "Industry Guidance",
                desc: "Learn current industry standards, workflows, tools, and practices used by high-performing teams.",
                icon: Compass
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="p-6 md:p-8 rounded-[24px] bg-[#111214] border border-white/5 shadow-xl hover:border-white/20 hover:bg-[#111214]/90 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white mb-2.5 transition-colors group-hover:text-white">
                    {feature.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        )}
      </section>

      {/* ================= SECTION 6: FINAL CTA ================= */}
      <section id="waitlist" className="py-20 md:py-28 px-6 max-w-4xl mx-auto relative z-10 text-center">
        {isLoading ? (
          <CohortCtaSkeleton />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Invitation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold uppercase tracking-[0.2em]">
              {/* <Sparkles className="w-3 h-3 text-slate-400" /> */}
              Invitation
            </div>

            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-fancy font-light tracking-tight text-white leading-[1.08]">
              Talent Exists Everywhere.
              <br />
              <span className="text-slate-400 italic">
                Guidance Doesn't.
              </span>
            </h2>

            {/* Supporting Copy */}
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                Most students don't need more information.
              </p>
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                They need direction, mentorship, accountability, and a place to build.
              </p>
            </div>

            {/* Action / Form Area (Plain typography driven, no borders/glass cards) */}
            <div className="max-w-md mx-auto pt-6">
              {waitlistStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4 shrink-0 text-white" />
                  <span>You've been added to the waitlist.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="flex-1 h-12 px-5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:bg-white/10 focus:border-white/30 text-sm transition-all"
                  />
                  <button
                    type="submit"
                    disabled={waitlistStatus === "loading"}
                    className="h-12 px-8 bg-white text-black hover:bg-slate-200 font-semibold rounded-full text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer flex-shrink-0"
                  >
                    {waitlistStatus === "loading" ? "Joining..." : "Join Waitlist"}
                  </button>
                </form>
              )}

              {waitlistStatus === "error" && (
                <p className="text-red-400 text-xs mt-3">Failed to join waitlist. Please check connection and try again.</p>
              )}

              {/* Secondary Link */}
              <div className="mt-8">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    requireMembership("apply_cohort", () => {
                      router.push("/cohorts/join");
                    });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-white underline underline-offset-4 font-semibold tracking-wide cursor-pointer bg-transparent border-none p-0 transition-colors"
                >
                  Become An Early Member
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      <Footer />
    </main>
  )
}