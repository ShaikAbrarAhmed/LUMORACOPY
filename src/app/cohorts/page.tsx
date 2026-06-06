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
  Zap
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
    <main className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 overflow-x-hidden">
      <Navbar />

      {/* Ambient background glows (Indigo transitioning into Gold down the page) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top area - Indigo dominant */}
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-primary/6 blur-[140px] rounded-full" />
        
        {/* Upper-middle area - Mixed transition */}
        <div className="absolute top-[25%] right-[-10%] w-[700px] h-[700px] bg-primary/4 blur-[165px] rounded-full" />
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-secondary/4 blur-[150px] rounded-full" />
        
        {/* Lower-middle area - Gold dominant */}
        <div className="absolute top-[60%] right-[-15%] w-[700px] h-[700px] bg-secondary/5 blur-[160px] rounded-full" />
        <div className="absolute top-[75%] left-[-5%] w-[650px] h-[650px] bg-secondary/4 blur-[145px] rounded-full" />
        
        {/* Bottom area - Gold dominant warmth */}
        <div className="absolute bottom-[5%] right-[-10%] w-[700px] h-[700px] bg-secondary/6 blur-[150px] rounded-full" />
        <div className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] bg-secondary/4 blur-[130px] rounded-full" />
      </div>

      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Label Tag */}
        

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-headings leading-[1.08] mb-6">
            From Confused
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              To Confident.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Lumora exists to help students find direction, build confidence, and grow alongside a community of ambitious learners and builders.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("waitlist")}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/95 transition-all duration-300 shadow-[0_8px_30px_rgba(79,70,229,0.25)] hover:shadow-[0_8px_35px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 text-center text-sm cursor-pointer"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="w-full sm:w-auto px-8 py-4 bg-background border border-border/80 text-foreground font-semibold rounded-full hover:bg-muted transition-all duration-300 hover:-translate-y-0.5 text-center text-sm flex items-center justify-center gap-2 group cursor-pointer"
            >
              Explore The Vision
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Hero Visual Transformation Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-4xl bg-white/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-[0_12px_40px_rgba(11,16,32,0.02)]"
        >
          <div className="text-center md:text-left mb-10">
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-2">The Path of Transformation</h3>
            <p className="text-xl font-medium text-foreground">Moving step-by-step from confusion to shipping product code.</p>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 mt-6">
            {/* Connecting progress line on desktop */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-border/60 hidden md:block" />

            {/* Visual nodes representing states */}
            {[
              { label: "Lost", icon: Compass, desc: "Tutorial overload & roadmap confusion" },
              { label: "Direction", icon: Target, desc: "Structured guidance on where to start" },
              { label: "Consistency", icon: Zap, desc: "Daily building habits & rhythm" },
              { label: "Confidence", icon: Sparkles, desc: "Belief in your engineering execution" },
              { label: "Builder", icon: Code2, desc: "Shipping production-ready creations" }
            ].map((node, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center w-full md:w-1/5 text-center group">
                <div className="w-14 h-14 rounded-full flex items-center justify-center border border-border/80 bg-white shadow-xs group-hover:border-primary/30 group-hover:shadow-[0_8px_30px_rgba(79,70,229,0.05)] transition-all duration-300">
                  <node.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h4 className="mt-4 font-semibold text-sm text-headings">{node.label}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-normal max-w-[150px] font-light">
                  {node.desc}
                </p>
                {i < 4 && <div className="md:hidden mt-4 text-muted-foreground/50"><ArrowDown className="w-4 h-4" /></div>}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 2: TRANSFORMATION COMPARISON ================= */}
      <section id="journey" className="py-28 px-6 max-w-7xl mx-auto border-t border-border/40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3 block">THE DIFFERENCE</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-headings tracking-tight mb-6">
            The Difference Isn't What You Learn.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              It's Who You Become.
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Education fills your head with information. Lumora reshapes your habits, connection, and mindset.
          </p>
        </div>

        {/* Side-by-side Today / Tomorrow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* LEFT CARD: Today */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-slate-50/40 border border-border/60 shadow-[0_8px_30px_rgba(0,0,0,0.01)] backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Current State</span>
                  <h3 className="text-2xl font-bold text-headings mt-1">Today</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-destructive/5 flex items-center justify-center text-destructive">
                  <X className="w-5 h-5" />
                </div>
              </div>

              {/* Struggles listing with visual offset layout representing chaos */}
              <div className="space-y-4 pr-4">
                {[
                  { text: "Too many tutorials", desc: "Stuck in copy-paste cycles without independent execution", rotate: "-rotate-1", translate: "-translate-x-1" },
                  { text: "No clear direction", desc: "Roadmap overload and indecision on where to build", rotate: "rotate-1", translate: "translate-x-1.5" },
                  { text: "Learning alone", desc: "No core feedback loop or peer group to ask for code reviews", rotate: "-rotate-0.5", translate: "translate-x-0" },
                  { text: "Inconsistent progress", desc: "Starting strong on weekends and losing momentum by Monday", rotate: "rotate-0.5", translate: "-translate-x-1" },
                  { text: "Lack of confidence", desc: "Constant self-doubt about whether coding is right for you", rotate: "-rotate-1.5", translate: "translate-x-2" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-2xl bg-white/50 border border-border/40 shadow-[0_4px_12px_rgba(0,0,0,0.005)] flex items-start gap-3 transform ${item.rotate} ${item.translate} transition-all duration-200`}
                  >
                    <X className="w-4 h-4 text-destructive shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm text-headings">{item.text}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 font-light leading-normal">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/40 text-xs text-muted-foreground/80 font-light italic">
              Feels like running in place while resources expand around you.
            </div>
          </motion.div>

          {/* RIGHT CARD: Tomorrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-white/60 border border-primary/20 shadow-[0_12px_40px_rgba(79,70,229,0.03)] backdrop-blur-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Glowing background gradient inside the card */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/5 blur-[70px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-secondary/5 blur-[60px] rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Transformation</span>
                  <h3 className="text-2xl font-bold text-headings mt-1">Tomorrow</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                  <Check className="w-5 h-5" />
                </div>
              </div>

              {/* Outcomes listing aligned and premium */}
              <div className="space-y-4">
                {[
                  { text: "Clarity", desc: "A singular focus on your next build milestone with zero noise" },
                  { text: "Consistency", desc: "A predictable daily rhythm supported by accountability calls" },
                  { text: "Confidence", desc: "Concrete proofs of concept shipped, ending the self-doubt loops" },
                  { text: "Meaningful connections", desc: "Collaborating side-by-side with peer builders and mentors" },
                  { text: "Builder mindset", desc: "Approaching specs with systems logic instead of syntax panic" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, x: 2 }}
                    className="p-4 rounded-2xl bg-white border border-border/80 shadow-[0_4px_18px_rgba(79,70,229,0.015)] flex items-start gap-3 transition-all duration-200"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm text-headings">{item.text}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 font-light leading-normal">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-primary/10 text-xs text-primary/80 font-medium z-10">
              A structured growth path where you learn by creating.
            </div>
          </motion.div>

        </div>
      </section>


      {/* ================= SECTION 3: WHAT YOU'LL GAIN ================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto border-t border-border/40 relative z-10 bg-muted/20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3 block">OUTCOMES</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-headings tracking-tight mb-6">
            What You'll Walk Away With
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            We focus on outcomes that matter. Here is how you will transform by being part of our ecosystem.
          </p>
        </div>

        {/* 6 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Compass,
              title: "Clarity",
              desc: "Know what to focus on next. Eliminate the anxiety of infinite options."
            },
            {
              icon: ArrowRight,
              title: "Direction",
              desc: "Follow a path designed for growth. Avoid taking loops that lead nowhere."
            },
            {
              icon: Smile,
              title: "Confidence",
              desc: "Stop doubting your ability to learn. Prove to yourself that you can build."
            },
            {
              icon: Code2,
              title: "Builder Mindset",
              desc: "Think like a creator, not just a consumer. See systems as things you can shape."
            },
            {
              icon: Users,
              title: "Meaningful Connections",
              desc: "Grow alongside people on the same journey. Build contacts that push you forward."
            },
            {
              icon: Activity,
              title: "Consistency",
              desc: "Build habits that create long-term progress. Turn fits and starts into momentum."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="p-8 rounded-3xl bg-white/40 border border-border/50 shadow-[0_8px_30px_rgba(15,23,42,0.015)] backdrop-blur-md hover:bg-white/80 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-muted border border-border/60 flex items-center justify-center mb-6 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-headings mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-[14px] text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 4: THE LUMORA DIFFERENCE ================= */}
      <section className="py-28 px-6 max-w-6xl mx-auto border-t border-border/40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3 block">THE DIFFERENCE</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-headings tracking-tight mb-6">
            Not Another Course Platform.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Lumora is an ecosystem designed for active building, guidance, and personal progression.
          </p>
        </div>

        {/* Side-by-side comparison layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Traditional Learning Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-3xl bg-card border border-border/80 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-destructive/5 flex items-center justify-center text-destructive">
                  <X className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-headings">Traditional Learning</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Endless tutorials that lead to copy-paste loops",
                  "Learning in isolation with zero group feedback",
                  "No accountability mechanisms to keep you consistent",
                  "No clear direction on what path fits you best",
                  "Information overload from excessive resource dumping"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] text-muted-foreground font-light">
                    <span className="text-destructive font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-border/40 text-xs text-muted-foreground italic font-light">
              Results in tutorial hell and giving up early.
            </div>
          </motion.div>

          {/* Lumora Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-3xl bg-white/50 border border-primary/20 shadow-[0_12px_40px_rgba(79,70,229,0.03)] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden"
          >
            {/* Soft inner glow */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-primary/5 blur-[50px] rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-headings">Lumora Ecosystem</h3>
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/5 px-2.5 py-1 rounded-full border border-primary/10">
                  BUILDER-FIRST
                </span>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Guided growth centered on practical active creation",
                  "Community support system where reviews are shared",
                  "Built-in accountability partners and checks",
                  "Clear, customized direction matched to your goals",
                  "Builder-first mindset shift that unlocks confidence"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] text-foreground font-light">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-primary/10 text-xs text-primary font-medium z-10">
              Structured to build builders who design, learn, and ship.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 5: WHAT'S COMING ================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto border-t border-border/40 bg-muted/20 relative z-10">
        {isLoading ? (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <Skeleton className="h-4 w-28 mx-auto" />
              <Skeleton className="h-10 w-2/3 mx-auto" />
              <Skeleton className="h-5 w-4/5 mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <CohortCardSkeleton key={i} />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3 block">FUTURE STEPS</span>
              <h2 className="text-4xl md:text-5xl font-semibold text-headings tracking-tight mb-6">
                What We're Building
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
                We're creating experiences designed to help students grow together. These represent upcoming initiatives in our learning ecosystem.
              </p>
            </div>

            {/* 4 initiative cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Web Development",
                  desc: "Deep focus on building dynamic components, state synchronization, backend integration, and interactive designs.",
                  icon: Code2
                },
                {
                  title: "Artificial Intelligence",
                  desc: "Applying AI libraries, building agent scripts, prompting models, and configuring smart interactive platforms.",
                  icon: Sparkles
                },
                {
                  title: "UI/UX Design",
                  desc: "Mastering layout rules, typographic hierarchies, spacing methods, visual aesthetics, and component planning.",
                  icon: Compass
                },
                {
                  title: "Hackathons & Innovation",
                  desc: "Sprinting in timed challenges with teams to prototype ideas, package code, and launch platforms quickly.",
                  icon: Activity
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="p-6 rounded-3xl bg-white/40 border border-border/50 shadow-xs backdrop-blur-md flex flex-col justify-between hover:bg-white/80 transition-all duration-300 relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-border flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                      </div>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                        Launching Soon
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-headings mb-3">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-border/40 text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                    Ecosystem Initiative
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* ================= SECTION 6: FINAL CTA ================= */}
      <section id="waitlist" className="py-32 px-6 max-w-5xl mx-auto relative z-10">
        {isLoading ? (
          <CohortCtaSkeleton />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-gradient-to-tr from-primary via-secondary to-accent text-white rounded-[36px] p-10 md:p-20 shadow-[0_20px_60px_rgba(79,70,229,0.15)] flex flex-col items-center text-center"
          >
            {/* Subtle glow decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6">
                Ready To Stop Feeling Lost?
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-10 max-w-lg mx-auto font-light leading-relaxed">
                Join Lumora and be part of a community built for growth, clarity, and confidence.
              </p>

              {/* Waitlist submission form */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
                {waitlistStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4 text-white shrink-0" />
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
                      className="flex-1 h-14 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/15 focus:border-white/40 text-sm transition-all"
                    />
                    <button
                      type="submit"
                      disabled={waitlistStatus === "loading"}
                      className="h-14 px-8 bg-white text-primary hover:bg-white/95 font-semibold rounded-full text-sm transition-all duration-300 hover:shadow-lg disabled:opacity-50 cursor-pointer flex-shrink-0"
                    >
                      {waitlistStatus === "loading" ? "Joining..." : "Join The Waitlist"}
                    </button>
                  </form>
                )}
              </div>

              {waitlistStatus === "error" && (
                <p className="text-red-200 text-xs mt-3">Failed to join waitlist. Please check connection and try again.</p>
              )}

              {/* Secondary CTA */}
              <div className="mt-8">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    requireMembership("apply_cohort", () => {
                      router.push("/cohorts/join");
                    });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white underline underline-offset-4 font-semibold tracking-wide cursor-pointer bg-transparent border-none p-0"
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