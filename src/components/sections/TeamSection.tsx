"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Sparkles, Compass, Users, TrendingUp } from "lucide-react"

// --- Custom Social Media Icons (Prevents Lucide brand icon issues) ---
const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

// --- Custom Skeletons for Team Profiles ---
const ProfileSkeleton = () => (
  <div className="space-y-4 animate-pulse">
    <div className="aspect-[4/5] bg-white/5 rounded-2xl w-full" />
    <div className="h-6 bg-white/5 rounded w-1/3" />
    <div className="h-4 bg-white/5 rounded w-1/4" />
    <div className="h-4 bg-white/5 rounded w-2/3" />
  </div>
)

interface TeamMember {
  name: string
  role: string
  image: string
  statement?: string
  contribution?: string
  position?: string
  linkedin?: string
  portfolio?: string
}

export default function TeamSection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  const foundingTeam: TeamMember[] = [
    {
      name: "Shaik Abrar Ahmed",
      role: "Founder",
      image: "/team/abrar.png",
      statement: "Building the ecosystem I wish I had as a student.",
      position: "top center",
      linkedin: "https://www.linkedin.com/in/shaikabrarahmed/"
    },
    {
      name: "Mounika",
      role: "Co-Founder",
      image: "/team/Mouni2.jpeg",
      statement: "Making sure no builder has to work in isolation.",
      position: "top center",
      linkedin: "https://www.linkedin.com/in/surakarapu-mounika-62b84a2a4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      name: "Ashwini",
      role: "Co-Founder",
      image: "/team/Ashwini2.jpeg",
      statement: "Bridging the gap between theory and execution.",
      position: "top center",
      linkedin: "https://www.linkedin.com/in/ashwini-ravirala-133058377/"
    }
  ]

  const coreTeam: TeamMember[] = [

    {
      name: "Yuvraj",
      role: "Internal Operations",
      image: "/team/Yuvi.jpeg",
      contribution: "Building systems that turn ideas into execution.",
      position: "top center",
      linkedin: "https://www.linkedin.com/in/yuvaraj-dudukuru/"
    },
    {
      name: "Sruthi",
      role: "Design & Experience",
      image: "/team/Sruthi.jpeg",
      contribution: "Crafting experiences that feel as good as they function.",
      position: "top center",
      linkedin: "https://www.linkedin.com/in/sruthi-kakarla-380b2235b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },

    {
      name: "Rajitha",
      role: "Growth & Partnerships",
      image: "/team/Raji2.jpeg",
      contribution: "Connecting people, ideas, and possibilities.",
      position: "top center",
      linkedin: "https://www.linkedin.com/in/rajitha-reddemoni-a24a8533a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },

    {
      name: "Jassi",
      role: "Content Lead",
      image: "/team/Jasmeetg.jpeg",
      contribution: "Turning stories into movements.",
      position: "top center",
      linkedin: "https://www.linkedin.com/in/sardar-jasmeeth-singh-raj/"
    }

  ]

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden selection:bg-white/10">

      {/* Soft background glow (Subtle white pearl light) */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[145px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 px-6 max-w-7xl mx-auto z-10">
        <div className="max-w-4xl">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-4 block">
            The Team
          </span>
          <h1 className="text-5xl md:text-7xl font-fancy font-light tracking-tight text-white leading-[1.08] mb-8">
            The People Behind Lumora
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
            Built by students. Driven by purpose.
            <br />
            We're building the support system we wish existed when we started.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: WHY WE STARTED ================= */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            {/* <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase block mb-3">
              Thesis
            </span> */}
            <h2 className="text-3xl md:text-4xl font-fancy font-light text-white tracking-tight">
              Why Lumora Exists
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-slate-300 font-light text-lg md:text-xl leading-relaxed max-w-3xl">
            <p>
              Too many students have talent. What many lack is direction.
            </p>

            <p>
              Lumora was created to help students find clarity, confidence, mentorship, and a community where growth feels possible.
            </p>
            <p className="text-white font-medium">
              We believe learning should not feel lonely.
            </p>
            <p className="text-white font-medium">
              And growth should not depend on luck.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: FOUNDING TEAM ================= */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <div className="mb-16">
          {/* <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">
            Founders
          </span> */}
          <h2 className="text-3xl md:text-5xl font-fancy font-light text-white tracking-tight">
            Founding Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, idx) => <ProfileSkeleton key={idx} />)
          ) : (
            foundingTeam.map((founder, idx) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col space-y-5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Card Frame */}
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-[#111214] border border-white/10 shadow-xl transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: founder.position }}
                  />
                </div>

                {/* Details */}
                <div className="space-y-3 text-left">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-heading font-semibold text-white">{founder.name}</h3>
                    <span className="text-xs text-white/60 font-medium uppercase tracking-[0.1em] mt-1.5">
                      {founder.role}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-white/80 font-light italic leading-relaxed">
                    "{founder.statement}"
                  </p>

                  {/* Action Buttons */}
                  {(founder.linkedin || founder.portfolio) && (
                    <div className="flex items-center gap-2 pt-1">
                      {founder.linkedin && (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1 text-xs rounded-full border border-white/10 bg-transparent text-white/70 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-medium"
                        >
                          LinkedIn
                        </a>
                      )}
                      {founder.portfolio && (
                        <a
                          href={founder.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1 text-xs rounded-full border border-white/10 bg-transparent text-white/70 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-medium"
                        >
                          Portfolio
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* ================= SECTION 4: CORE TEAM ================= */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <div className="mb-16">
          {/* <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">
            Builders
          </span> */}
          <h2 className="text-3xl md:text-5xl font-fancy font-light text-white tracking-tight">
            Core Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, idx) => <ProfileSkeleton key={idx} />)
          ) : (
            coreTeam.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group flex flex-col space-y-4 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-[#111214] border border-white/10 shadow-lg transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.04)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: member.position }}
                  />
                </div>

                {/* Details */}
                <div className="space-y-2 text-left">
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-white">{member.name}</h4>
                    <span className="text-[10px] text-white/60 font-medium uppercase tracking-[0.1em] block mt-1">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs text-white/80 font-light italic leading-relaxed">
                    "{member.contribution}"
                  </p>

                  {/* Action Buttons */}
                  {(member.linkedin || member.portfolio) && (
                    <div className="flex items-center gap-2 pt-1">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-0.5 text-[10px] rounded-full border border-white/10 bg-transparent text-white/70 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-medium"
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.portfolio && (
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-0.5 text-[10px] rounded-full border border-white/10 bg-transparent text-white/70 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-medium"
                        >
                          Portfolio
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* ================= SECTION 5: WHAT WE'RE BUILDING ================= */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10 bg-white/[0.01]">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase mb-3 block">
            Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-fancy font-light text-white tracking-tight">
            Building Something Bigger Than Ourselves
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          {[
            {
              title: "Direction",
              desc: "Helping students navigate their journey with clarity.",
              icon: Compass
            },
            {
              title: "Community",
              desc: "Creating spaces where learners grow together.",
              icon: Users
            },
            {
              title: "Growth",
              desc: "Encouraging progress through action and consistency.",
              icon: TrendingUp
            },
            {
              title: "Confidence",
              desc: "Helping students believe in their ability to build.",
              icon: Sparkles
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 md:p-8 rounded-[20px] bg-[#111214] border border-white/5 flex flex-col justify-between h-[200px] hover:border-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="space-y-1.5 text-left">
                  <h3 className="text-lg font-heading font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs md:text-sm text-slate-400 font-light leading-normal">{pillar.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ================= SECTION 6: ENDING ================= */}
      <section className="py-20 md:py-28 px-6 max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <p className="text-3xl md:text-5xl font-fancy font-light tracking-normal text-white leading-tight">
            Talent exists everywhere.
            <br />
            <span className="text-slate-400 italic">
              Guidance doesn't.
            </span>
          </p>
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mt-4 block">
            ~ Team Lumora
          </p>
        </motion.div>
      </section>

    </div>
  )
}