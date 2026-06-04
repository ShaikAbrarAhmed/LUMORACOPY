"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useMembership } from "@/components/auth/MembershipContext"
import { FounderSpotlightSkeleton, CoFounderSkeleton, TeamCardSkeleton } from "@/components/ui/Skeleton"

// --- Custom Inline SVGs & Icon Components (Prevents Lucide Turbopack Cache Issues) ---
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

const beliefPills = [
  { text: "Build In Public"},
  { text: "Community First"},
  { text: "Learn By Doing"},
  { text: "Growth Mindset"},
  { text: "Students First" }
]

const coreTeam = [

    {
    name: "Yuvi",
    role: "Content & Brand Lead",
    image: "/team/Yuvi.jpeg",
    desc: "Writing high-clarity stories that drive movement."
  },
 

   {
    name: "Rajitha",
    role: "Founding Member & Innovation Lead",
    image: "/team/Raji2.jpeg",
    desc: "Directing tech experiments and hackathons."
  },

  {
    name: "Jassi",
    role: "Community Lead",
    image: "/team/Jasmeetg.jpeg",
    desc: "Empowering builder dialogues and sync workshops."
  },

  {
    name: "Sruthi",
    role: "Design Lead",
    image: "/team/Sruthi.jpeg",
    desc: "Crafting beautiful layouts and visual systems."
  }

  
]

export default function TeamSection() {
  const router = useRouter()
  const { requireMembership } = useMembership()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="team-section" className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-background">
      
      {/* Background Soft Glows (Mostly neutral with very subtle gold accent) */}
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-accent/[0.015] rounded-full blur-[145px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl mb-8 md:mb-20 lg:mb-24 text-center lg:text-left">
          <span className="text-xs font-semibold text-primary tracking-widest uppercase mb-3 block">
            THE SYSTEM ARCHITECTS
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-headings tracking-tight leading-[1.08] mb-6">
            Meet the Builders <br />
            Behind Lumorous.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
            We are a small team of students, developers, and mentors building the ecosystem we wish we had when we started.
          </p>
        </div>

        {/* ================= PART 1: FOUNDER SPOTLIGHT (2X SIZE) ================= */}
        <div className="mb-8 md:mb-24 relative">
          
          {/* Soft Glow behind Founder Spotlight Card (Warm & subtle) */}
          <div className="absolute inset-[-30px] bg-accent/[0.03] rounded-[50px] blur-3xl pointer-events-none" />

          {isLoading ? (
            <FounderSpotlightSkeleton />
          ) : (
            <motion.div
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative p-[1.5px] rounded-[32px] bg-gradient-to-br from-border via-border to-accent/35 shadow-[0_24px_64px_rgba(15,23,42,0.04)] transition-all duration-300"
            >
              {/* Inner Content Card (Responsive Layout) */}
              <div className="bg-background rounded-[31px] p-4 sm:p-8 lg:p-14">
              
              {/* Mobile/Tablet Layout (lg:hidden) - High Density Horizontal Header */}
              <div className="lg:hidden flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  {/* Portrait Photo Frame */}
                  <div className="relative aspect-[4/5] w-20 md:w-28 rounded-xl overflow-hidden bg-slate-50 border border-slate-200/50 shadow-xs flex-shrink-0">
                    <Image
                      src="/team/abrar.png"
                      alt="Abrar, Founder & CEO of Lumora"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "top center" }}
                      priority
                    />
                  </div>

                  {/* Header Details */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/15 text-[8px] font-mono font-semibold text-primary uppercase tracking-wider">
                      SYSTEM ARCHITECT
                    </div>
                    <h3 className="text-2xl font-heading font-black text-headings mt-1 mb-0.5 tracking-tight">
                      Abrar
                    </h3>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">
                      Founder & Mentor
                    </p>
                    
                    {/* Social Connects */}
                    <div className="flex items-center gap-2">
                      <a
                        href="https://linkedin.com/in/shaik-abrar-ahmed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-all cursor-pointer bg-background"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://github.com/shaikabrarahmed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-all cursor-pointer bg-background"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Condensed bio & quote */}
                <div className="space-y-2 mt-1">
                  <p className="text-sm font-heading font-medium tracking-tight text-foreground leading-relaxed italic">
                    “I want to build a platform that turns confusion into action. The ultimate validation is when students ship production-ready code.”
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">
                    Designs core architecture and curricula, focusing on beginner-first technical clarity and building confidence through real projects.
                  </p>
                </div>
              </div>

              {/* Desktop Layout (hidden lg:grid) */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Portrait Photo Frame (Left Column, Aspect Ratio 4:5) */}
                <div className="lg:col-span-5 relative aspect-[4/5] lg:w-full lg:max-w-[340px] rounded-[24px] overflow-hidden bg-slate-50 border border-slate-200/50 shadow-md">
                  <Image
                    src="/team/abrar.png"
                    alt="Abrar, Founder & CEO of Lumora"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    style={{ objectPosition: "top center" }}
                    priority
                  />
                </div>

                {/* Bio & Details (Right Column) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="flex flex-row items-center justify-between gap-4 mb-6">
                    <div>
                      {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/15 text-[9px] font-mono font-semibold text-primary uppercase tracking-wider mb-3">
                        SYSTEM ARCHITECT & INSTRUCTOR
                      </div> */}
                      <h3 className="text-5xl font-heading font-black text-headings mt-2 mb-1 tracking-tight">
                        Shaik Abrar Ahmed
                      </h3>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">
                        Founder 
                      </p>
                    </div>
                  </div>

                  <p className="text-2.5xl font-heading font-medium tracking-tight text-foreground leading-relaxed  pr-4">
                    "I know what it's like to feel lost. Too many tutorials, too many opinions, and no idea what to do next. That's why we're building Lumora. If students stop overthinking, start building, and ship projects they're genuinely proud of, that's the biggest validation we could ever ask for."
                  </p>

                  {/* Social Connects */}
                  <div className="flex items-center justify start gap-4">
                    <a
                      href="https://linkedin.com/in/shaik-abrar-ahmed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-pointer bg-background"
                    >
                      <LinkedinIcon className="w-4.5 h-4.5" />
                    </a>
                    <a
                      href="https://github.com/shaikabrarahmed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all cursor-pointer bg-background"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                  {/* <p className="text-sm text-muted-foreground leading-relaxed max-w-xl font-light mt-4 mb-6">
                    Abrar designs the platform's core architecture and coordinates the primary curricula. His philosophy centers on beginner-first technical clarity, active GitHub pull requests, and building confidence through real projects.
                  </p> */}


                  
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </div>

        {/* ================= PART 2: CO-FOUNDERS / PARTNERS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-24">
          {isLoading ? (
            <>
              <CoFounderSkeleton />
              <CoFounderSkeleton />
            </>
          ) : (
            <>
              {/* Mounika Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-[24px] md:rounded-[28px] border border-slate-200/50 bg-background/65 shadow-[0_8px_30px_rgba(11,16,32,0.02)] backdrop-blur-md hover:bg-background hover:border-primary/20 hover:shadow-[0_16px_40px_rgba(11,16,32,0.04)] transition-all duration-300 overflow-hidden flex flex-row gap-4 p-4 sm:p-6 md:p-8 items-start h-full"
              >
            <div className="relative aspect-[4/5] w-20 sm:w-32 rounded-xl md:rounded-2xl overflow-hidden bg-white border border-[#E5E7EB]/80 flex-shrink-0 shadow-xs">
              <Image
                src="/team/Mouni2.jpeg"
                alt="Mounika, Head of Community & Growth"
                fill
                className="object-cover"
                style={{ objectPosition: "top center" }}
              />
            </div>
            <div className="flex-1 text-left">
              <div className="mb-2">
                <h4 className="text-lg sm:text-xl font-heading font-black text-headings tracking-tight">Mounika</h4>
                <p className="text-[10px] text-primary font-bold uppercase tracking-wider mt-1">
                  Co-Founder & Operations
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Coordinates onboarding, student operations, and co-working sprints, ensuring every builder has accountability.
              </p>
              <div className="flex items-center justify-start gap-3 mt-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-slate-200/70 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all cursor-pointer bg-background">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Ashwini Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="relative rounded-[24px] md:rounded-[28px] border border-slate-200/50 bg-background/65 shadow-[0_8px_30px_rgba(11,16,32,0.02)] backdrop-blur-md hover:bg-background hover:border-primary/20 hover:shadow-[0_16px_40px_rgba(11,16,32,0.04)] transition-all duration-300 overflow-hidden flex flex-row gap-4 p-4 sm:p-6 md:p-8 items-start h-full"
          >
            <div className="relative aspect-[4/5] w-20 sm:w-32 rounded-xl md:rounded-2xl overflow-hidden bg-white border border-[#E5E7EB]/80 flex-shrink-0 shadow-xs">
              <Image
                src="/team/Ashwini2.jpeg"
                alt="Ashwini, Lead Coordinator"
                fill
                className="object-cover"
                style={{ objectPosition: "top center" }}
              />
            </div>
            <div className="flex-1 text-left">
              <div className="mb-2">
                <h4 className="text-lg sm:text-xl font-heading font-black text-headings tracking-tight">Ashwini</h4>
                <p className="text-[10px] text-primary font-bold uppercase tracking-wider mt-1">
                  Lead Coordinator 
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Designs learning resources and manages support desks to bridge the gap between tutorials and building.
              </p>
              <div className="flex items-center justify-start gap-3 mt-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-slate-200/70 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all cursor-pointer bg-background">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
          </>
          )}
        </div>

        {/* ================= PART 3: EXTENDED TEAM GRID ================= */}
        <div className="mb-8 md:mb-28">
          <h4 className="text-xs font-bold text-muted-foreground tracking-wider mb-6 md:mb-8 text-center lg:text-left uppercase">
            Ecosystem Leads & Support Members
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => <TeamCardSkeleton key={i} />)
            ) : (
              coreTeam.map((member) => (
                <div key={member.name} className="bg-background border border-border/80 hover:border-slate-300 shadow-[0_4px_20px_rgba(11,16,32,0.01)] hover:shadow-[0_10px_30px_rgba(11,16,32,0.03)] rounded-[20px] md:rounded-[24px] p-4 md:p-5 flex flex-row sm:flex-col items-start sm:items-stretch justify-start gap-4 sm:space-y-4 transition-all duration-300 bg-background/70 backdrop-blur-xs">
                  {/* Photo Frame */}
                  <div className="relative w-20 sm:w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-50 border border-slate-200/50 flex-shrink-0 shadow-xs">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      className="object-cover"
                      style={{ objectPosition: "top center" }}
                    />
                  </div>
                  <div className="flex-1 sm:flex-none">
                    <div>
                      <h5 className="font-bold text-headings text-sm leading-tight">
                        {member.name}
                      </h5>
                      <p className="text-[9px] text-primary font-bold tracking-wider uppercase mt-1">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed font-light mt-2 sm:mt-0">
                      {member.desc}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ================= PART 4: STATS / MILESTONES ================= */}
        {/* <div className="mb-8 md:mb-24 border-t border-border/40 pt-8 md:pt-16 flex flex-col items-center">
          <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mb-6 block">
            OUR SCALE & TRUST
          </span>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="px-5 py-2.5 bg-muted border border-border/80 rounded-full text-xs font-semibold text-foreground shadow-xs flex items-center gap-2 cursor-default select-none">
              <span>1000+ active learners</span>
            </div>
            <div className="px-5 py-2.5 bg-muted border border-border/80 rounded-full text-xs font-semibold text-foreground shadow-xs flex items-center gap-2 cursor-default select-none">
              <span>500+ projects shipped</span>
            </div>
            <div className="px-5 py-2.5 bg-muted border border-border/80 rounded-full text-xs font-semibold text-foreground shadow-xs flex items-center gap-2 cursor-default select-none">
              <span>Growth Mindset First</span>
            </div>
          </div>
        </div> */}

        {/* ================= PART 5: CULTURE / PRINCIPLES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center border-t border-border/40 pt-8 md:pt-16 mb-8 md:mb-24">
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Culture</span>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-headings mt-3 mb-4">
              Building for a <br />
              New Kind of Education.
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              We value shipping over memorization, clarity over complexity, and community support over competitive comparisons. We grow together.
            </p>
          </div>
          <div className="lg:col-span-7 bg-muted border border-border/60 rounded-3xl p-6 md:p-8 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lumorous is shaped by its active student body. Every coordinator, review facilitator, and workshop lead started as a beginner on our platform.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We operate under the simple mandate: <b>Build openly, help immediately, and never stop learning.</b>
            </p>
          </div>
        </div>

        {/* ================= PART 6: FINAL INVITATION CTA ================= */}
        {/* <div className="relative border-t border-border/40 pt-8 md:pt-20 text-center max-w-3xl mx-auto">
          <div className="relative z-10 space-y-6">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              GET INVOLVED
            </span>
            <h3 className="text-3xl font-heading font-bold text-foreground">
              Help Us Build the Future.
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Whether you want to apply as a student developer, guide cohorts as a technical mentor, or support code reviews, we'd love to have you.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                href="/cohorts"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-2xl hover:bg-foreground/90 transition-all duration-200 shadow-md shadow-black/10 hover:shadow-lg hover:-translate-y-0.5 text-sm group cursor-pointer border-none"
              >
                Join the Ecosystem
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  )
}