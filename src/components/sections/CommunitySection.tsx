"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { useMembership } from "@/components/auth/MembershipContext"
import { useSession } from "next-auth/react"
import useEmblaCarousel from "embla-carousel-react"
import { 
  Sparkles, 
  Compass, 
  Users, 
  Target, 
  Rocket, 
  ArrowRight, 
  Smile, 
  Activity, 
  Zap, 
  Code2, 
  MessageSquare
} from "lucide-react"

// --- Custom Social Media Icons (Prevents Lucide Turbopack Cache Issues) ---
const WhatsAppIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.002-2.632-1.023-5.106-2.887-6.974-1.864-1.868-4.339-2.898-6.973-2.9-5.442 0-9.87 4.413-9.873 9.847-.001 1.777.472 3.511 1.37 5.048L1.762 21.6l5.885-1.546zm11.233-6.52c-.29-.145-1.716-.847-1.982-.944-.266-.097-.46-.145-.654.145-.194.29-.753.944-.923 1.138-.17.194-.34.218-.63.073-.29-.145-1.226-.452-2.336-1.442-.864-.77-1.448-1.72-1.618-2.012-.17-.29-.018-.447.127-.591.13-.13.29-.34.436-.51.145-.17.194-.29.29-.485.097-.194.048-.364-.024-.51-.073-.145-.654-1.576-.896-2.158-.236-.569-.475-.491-.654-.5-.17-.008-.364-.01-.558-.01-.194 0-.51.073-.777.364-.266.29-1.02 1.02-1.02 2.487s1.07 2.915 1.216 3.109c.145.194 2.105 3.213 5.099 4.505.713.308 1.27.491 1.704.629.716.228 1.368.196 1.884.119.574-.085 1.716-.701 1.958-1.378.242-.676.242-1.258.17-1.378-.073-.12-.266-.194-.558-.34z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const DiscordIcon = () => (
  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.075 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
  </svg>
)

export default function CommunitySection() {
  const router = useRouter()
  const { requireMembership } = useMembership()
  const { data: session } = useSession()
  const [activeIndex, setActiveIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false
  })

  const pillars = [
    {
      title: "Build Together",
      tag: "Action",
      icon: Code2,
      shortDesc: "Collaborate on real repositories.",
      richDesc: "Move past isolated coding. Team up with other builders to write clean codebases, manage pull requests, and deploy functional applications to public URLs.",
      cta: "View Projects",
      link: "/cohorts/join"
    },
    {
      title: "Accountability Circles",
      tag: "Habits",
      icon: Target,
      shortDesc: "Daily check-ins for consistency.",
      richDesc: "Beat tutorial paralysis. Check in with your dedicated circle to share daily progress, unblock technical issues, and stay on track every week.",
      cta: "Explore Cohorts",
      link: "/cohorts/join"
    },
    {
      title: "Mentor Sessions",
      tag: "Guidance",
      icon: Compass,
      shortDesc: "Feedback from industry veterans.",
      richDesc: "Get your code, design, and architecture audited by active software engineers who understand how high-performing production systems are built.",
      cta: "Meet Mentors",
      link: "/mentors"
    },
    {
      title: "Hackathons",
      tag: "Sprints",
      icon: Zap,
      shortDesc: "Assemble squads to build rapidly.",
      richDesc: "Participate in regular ecosystem sprints. Form a team, design an MVP under constraint, and showcase your finished project to the community.",
      cta: "Join Sprints",
      link: "/cohorts/join"
    },
    {
      title: "Networking",
      tag: "Ecosystem",
      icon: Users,
      shortDesc: "High-signal social circles.",
      richDesc: "Connect with university students, self-taught builders, and professional engineers. Share job postings, tech stacks, and career milestones.",
      cta: "Join Discord",
      link: "https://discord.gg/lumora"
    },
    {
      title: "Weekly Challenges",
      tag: "Skills",
      icon: Sparkles,
      shortDesc: "Bite-sized coding exercises.",
      richDesc: "Test your skills with weekly puzzles ranging from performance optimization to frontend UI replicas. Compete with peers and share solutions.",
      cta: "See Challenges",
      link: "https://discord.gg/lumora"
    },
    {
      title: "Project Reviews",
      tag: "Feedback",
      icon: MessageSquare,
      shortDesc: "Constructive feedback on your apps.",
      richDesc: "Submit your live project links and repositories for detailed peer reviews. Get constructive roasting on code quality, UI layout, and user flows.",
      cta: "Request Review",
      link: "https://discord.gg/lumora"
    },
    {
      title: "Community Events",
      tag: "Events",
      icon: Rocket,
      shortDesc: "Live demos and workshop nights.",
      richDesc: "Join our weekly interactive streams featuring guest speakers, product demos, interactive pair programming, and casual hangout sessions.",
      cta: "View Calendar",
      link: "https://discord.gg/lumora"
    }
  ]

  // Track active slide index
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    // Initial call
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  const scrollToIndex = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index)
    }
  }

  const handleCardClick = (index: number) => {
    if (!emblaApi) return
    if ((emblaApi as unknown as { clickAllowed: () => boolean }).clickAllowed ? (emblaApi as unknown as { clickAllowed: () => boolean }).clickAllowed() : true) {
      emblaApi.scrollTo(index)
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden">
      
      {/* Background Soft Glows (Pearl white) */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-white/[0.01] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-white/[0.01] blur-[120px] rounded-full pointer-events-none" />

      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 px-6 w-full flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Label Tag */}
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            <Sparkles className="w-3.5 h-3.5 text-slate-400" />
            LUMORASPACE COMMUNITY
          </div> */}

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-fancy font-light tracking-tight text-white leading-[1.08] mb-6">
            A Living Ecosystem
            <br />
            <span className="text-slate-400">
              Of Builders
            </span>
          </h1>

          {/* Subheadline */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base font-medium text-slate-400 uppercase tracking-widest mb-8">
            <span>Learn </span>
            <span>Build </span>
            <span>Launch </span>
            <span>Grow</span>
          </div>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            LumoraSpace is where students find direction, builders find momentum, and ambitious people grow alongside others on the same journey.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("platforms")}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all duration-300 shadow-md hover:-translate-y-0.5 text-center text-sm cursor-pointer"
            >
              Join The Community
            </button>
            <button
              onClick={() => scrollToSection("ecosystem")}
              className="w-full sm:w-auto px-8 py-4 bg-background border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 text-center text-sm flex items-center justify-center gap-2 group cursor-pointer"
            >
              Explore The Ecosystem
              <ArrowRight className="w-4 h-4 text-slate-400 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 2: WHY COMMUNITY EXISTS ================= */}
      <section className="py-16 md:py-24 px-6 w-full border-t border-white/5 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase block">
            Manifesto
          </span> */}
          
          <h2 className="text-4xl md:text-6xl font-fancy font-light tracking-tight text-white leading-[1.15] max-w-4xl mx-auto">
            Most Students Don&apos;t Quit Because They&apos;re Incapable.
            <br />
            <span className="text-slate-400">
              They Quit Because They&apos;re Building Alone.
            </span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 pt-6 text-slate-300 text-lg md:text-xl font-light">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span>No accountability</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span>No feedback</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span>No builders around them</span>
            </div>
          </div>

          {/* <p className="text-xl md:text-2xl font-heading font-medium text-white max-w-xl mx-auto pt-6 border-t border-white/5">
            LumoraSpace exists to change that.
          </p> */}
        </motion.div>
      </section>

      {/* ================= SECTION 3: THE COMMUNITY PILLARS ================= */}
      <section id="ecosystem" className="py-16 md:py-24 border-t border-white/5 relative z-10 overflow-hidden w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 px-6">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">
            Ecosystem Pillars
          </span>
          <h2 className="text-3xl md:text-5xl font-fancy font-light text-white tracking-tight">
            How We Build Together
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            LumoraSpace is structured around action, feedback, and consistency. Discover the pillars that shape our community ecosystem.
          </p>
        </div>

        {/* Snapping Card Carousel Container */}
        <div className="relative w-full overflow-hidden" ref={emblaRef}>
          
          {/* Scrollable Container */}
          <div className="flex gap-6 py-10 w-full">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              const isActive = idx === activeIndex

              return (
                <div
                  key={pillar.title}
                  onClick={() => handleCardClick(idx)}
                  className="shrink-0 w-[300px] md:w-[400px] cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0.6, borderColor: "rgba(255, 255, 255, 0.06)" }}
                    animate={{
                      scale: isActive ? 1.03 : 0.95,
                      borderColor: isActive ? "rgba(99, 102, 241, 0.35)" : "rgba(255, 255, 255, 0.06)",
                      opacity: isActive ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`min-h-[360px] md:min-h-[400px] p-8 md:p-10 rounded-[28px] bg-[#111214] border flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
                      isActive 
                        ? "shadow-[0_0_50px_rgba(99,102,241,0.15)]" 
                        : "hover:border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                    }`}
                  >
                    {/* Indigo Glow Accent Layer */}
                    <div 
                      className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`} 
                    />

                    {/* Header: Tag & Icon */}
                    <div className="flex justify-between items-center relative z-10">
                      <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                        {pillar.tag}
                      </span>
                      <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors`}>
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="space-y-3 mt-6 text-left relative z-10 flex-grow flex flex-col justify-end">
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-white leading-tight">
                        {pillar.title}
                      </h3>

                      <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                        {pillar.shortDesc}
                      </p>

                      {/* Expanding Rich Details (Active State) */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs md:text-sm text-slate-350 font-light leading-relaxed mt-3 pt-3 border-t border-white/5">
                              {pillar.richDesc}
                            </p>


                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* Dots Indicator Controls */}
          <div className="flex justify-center items-center gap-2.5 mt-6">
            {pillars.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-350 ${
                  idx === activeIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to pillar ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: THE BUILDER JOURNEY ================= */}
      <section className="py-16 md:py-20 px-6 w-full border-t border-white/5 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Timeline</span>
          <h2 className="text-3xl md:text-5xl font-fancy font-light text-white tracking-tight mb-6">
            Growth Happens Together
          </h2>
        </div>

        {/* Premium Asymmetric Card Grid Layout */}
        <div className="grid grid-cols-12 gap-6 w-full lg:px-12 xl:px-20 mx-auto">
          {/* Row 1: Join & Connect */}
          {/* Card 1: Join */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.2)", boxShadow: "0 0 30px rgba(255, 255, 255, 0.04)" }}
            className="col-span-12 md:col-span-6 rounded-[28px] bg-[#111214] border border-white/10 p-8 md:p-10 flex flex-col justify-between min-h-[220px] transition-all duration-300 group text-left"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">01</span>
              <h3 className="text-2xl font-heading font-bold text-white transition-colors">
                Join
              </h3>
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                Enter the ecosystem and connect with ambitious peers who share your drive.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.2)", boxShadow: "0 0 30px rgba(255, 255, 255, 0.04)" }}
            className="col-span-12 md:col-span-6 rounded-[28px] bg-[#111214] border border-white/10 p-8 md:p-10 flex flex-col justify-between min-h-[220px] transition-all duration-300 group text-left"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">02</span>
              <h3 className="text-2xl font-heading font-bold text-white transition-colors">
                Connect
              </h3>
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                Find your squad, interact with industry mentors, and align on goals.
              </p>
            </div>
          </motion.div>

          {/* Row 2: Build & Collaborate */}
          {/* Card 3: Build (smaller card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.2)", boxShadow: "0 0 30px rgba(255, 255, 255, 0.04)" }}
            className="col-span-12 md:col-span-5 rounded-[28px] bg-[#111214] border border-white/10 p-8 md:p-10 flex flex-col justify-between min-h-[240px] transition-all duration-300 group text-left"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">03</span>
              <h3 className="text-2xl font-heading font-bold text-white transition-colors">
                Build
              </h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Learn through hands-on technical challenges and practical execution.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Collaborate (larger card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.2)", boxShadow: "0 0 30px rgba(255, 255, 255, 0.04)" }}
            className="col-span-12 md:col-span-7 rounded-[28px] bg-[#111214] border border-white/10 p-8 md:p-10 flex flex-col justify-between min-h-[240px] transition-all duration-300 group text-left"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">04</span>
              <h3 className="text-2xl font-heading font-bold text-white transition-colors">
                Collaborate
              </h3>
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                Share reviews, review pull requests, and assemble team sprint cohorts.
              </p>
            </div>
          </motion.div>

          {/* Row 3: Launch (full-width hero card) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.3)", boxShadow: "0 0 40px rgba(255, 255, 255, 0.06)" }}
            className="col-span-12 rounded-[28px] bg-gradient-to-r from-[#111214] via-[#151619] to-[#111214] border border-white/10 p-8 md:p-12 transition-all duration-300 group relative overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-white/[0.02] blur-[80px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">05</span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
                  Launch
                </h3>
                <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed">
                  Deploy production codebases to the real world and showcase your growth.
                </p>
              </div>
              
              <div className="flex-shrink-0 flex items-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Destination
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 5: WHY BUILDERS STAY ================= */}
      <section className="py-16 md:py-20 px-6 w-full border-t border-white/5 relative z-10 bg-white/[0.01]">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Retention</span>
          <h2 className="text-3xl md:text-5xl font-fancy font-light text-white tracking-tight mb-4">
            Why Builders Stay
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            People join for opportunities. They stay because of momentum.
          </p>
        </div>

        {/* 5 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full lg:px-12 xl:px-20 mx-auto">
          {[
            { title: "Direction", desc: "Find clarity and eliminate roadmap noise with focused guidance.", icon: Compass },
            { title: "Accountability", desc: "Stay consistent through regular check-ins and peer expectations.", icon: Activity },
            { title: "Feedback", desc: "Accelerate with direct code reviews and design critiques.", icon: MessageSquare },
            { title: "Momentum", desc: "Build habits that keep you shipping daily.", icon: Zap },
            { title: "Belonging", desc: "Find a squad of ambitious learners who share your goals.", icon: Smile }
          ].map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-[20px] bg-[#111214] border border-white/5 flex flex-col justify-between h-[220px] hover:border-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="space-y-1.5 text-left">
                  <h3 className="text-base font-heading font-bold text-white">{benefit.title}</h3>
                  <p className="text-xs text-slate-400 font-light leading-normal">{benefit.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ================= SECTION 6: WHERE BUILDERS CONNECT ================= */}
      <section id="platforms" className="py-16 md:py-20 px-6 w-full border-t border-white/5 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">Platforms</span>
          <h2 className="text-3xl md:text-5xl font-fancy font-light text-white tracking-tight mb-4">
            Where Builders Connect
          </h2>
        </div>

        {/* Side-by-Side Platform Cards (Discord dominates WhatsApp & Instagram) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full lg:px-12 xl:px-20 mx-auto items-stretch">
          
          {/* Discord Card (Dominates, spans 7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 md:p-12 rounded-[28px] bg-[#111214] border border-white/20 shadow-[0_20px_50px_rgba(255,255,255,0.01)] relative overflow-hidden flex flex-col justify-between min-h-[380px]"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/[0.01] blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center">
                  <DiscordIcon />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                    Primary Platform
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mt-1">Discord</h3>
                </div>
              </div>

              <p className="text-slate-300 font-light leading-relaxed text-base md:text-lg">
                The home base for builders. Collaborate with peers, participate in discussions, join challenges, receive feedback, and stay connected with the ecosystem.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 relative z-10 flex flex-wrap gap-3">
              <span className="text-xs text-slate-400 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                Technical Discussions
              </span>
              <span className="text-xs text-slate-400 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                Peer Reviews
              </span>
              <a
                href="https://discord.gg/lumora"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-6 py-2.5 bg-white text-black text-xs font-semibold rounded-full hover:bg-slate-200 transition-all flex items-center gap-1.5 group cursor-pointer"
              >
                Launch Home Base
                <ArrowRight className="w-3.5 h-3.5 text-black transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* WhatsApp & Instagram Column (spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Instagram Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-8 rounded-[24px] bg-[#111214]/60 border border-white/5 flex flex-col justify-between flex-1 group hover:border-white/15 transition-all duration-300 text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                    <InstagramIcon />
                  </div>
                  <div>
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Platform</span>
                    <h4 className="text-lg font-heading font-bold text-white">Instagram</h4>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                  Follow ecosystem updates, mentor spotlights, achievements, events, and builder journeys.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                <a
                  href="https://www.instagram.com/lumora.spacee?utm_source=qr&igsh=Y3Rxa2poOWk2cXNk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 font-semibold group cursor-pointer"
                >
                  Follow Stories
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 md:p-8 rounded-[24px] bg-[#111214]/60 border border-white/5 flex flex-col justify-between flex-1 group hover:border-white/15 transition-all duration-300 text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Platform</span>
                    <h4 className="text-lg font-heading font-bold text-white">WhatsApp</h4>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                  Receive important updates, reminders, and community announcements.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                <a
                  href="https://chat.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 font-semibold group cursor-pointer"
                >
                  Join Alerts Channel
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 7: FINAL MANIFESTO ================= */}
      <section className="py-20 md:py-28 px-6 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12 max-w-4xl mx-auto"
        >
          {/* <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase block">
            Movement
          </span> */}

          <h2 className="text-5xl md:text-7xl font-fancy font-light tracking-tight text-white leading-[1.08]">
            More Than A Community.
            <br />
            <span className="text-slate-400 italic">
              A Movement Of Builders.
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Growth becomes easier when you&apos;re surrounded by people moving in the same direction.
          </p>

          {/* Action CTA */}
          {!session && (
            <div className="pt-6">
              <button
                onClick={() => {
                  requireMembership("join_community", () => {
                    router.push("/cohorts/join")
                  })
                }}
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                Join LumoraSpace
              </button>
            </div>
          )}
        </motion.div>
      </section>

    </div>
  )
}