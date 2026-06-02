"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Compass, HeartHandshake, ShieldCheck, Globe, Link2 } from "lucide-react"

/* ─── Mentor Grid Data ──────────────────────────────────────── */
const mentors = [
  {
    name: "Abrar Ahmed",
    role: "Senior Fullstack Mentor & Founder",
    image: "/team/abrar.png",
    tags: ["Next.js", "Prisma", "Database Design", "DevOps"],
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "Ashwini",
    role: "Frontend Architect",
    image: "/team/Ashwini2.jpeg",
    tags: ["React", "Framer Motion", "TailwindCSS"],
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "Yuvaraj",
    role: "Backend Engineer",
    image: "/team/Yuvi.jpeg",
    tags: ["Node.js", "Postgres", "Redis", "GraphQL"],
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "Mounika",
    role: "Fullstack Engineer",
    image: "/team/Mouni2.jpeg",
    tags: ["Next.js", "Auth", "Firebase", "Serverless"],
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "Sruthi",
    role: "UI/UX Mentor",
    image: "/team/Sruthi.jpeg",
    tags: ["Figma", "User Research", "Visual Systems"],
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "Rajitha & Jasmeet",
    role: "Project Coordinators",
    image: "/team/Raji2.jpeg",
    tags: ["Scrum", "Product Management", "Git Workflows"],
    socials: { linkedin: "#", github: "#" }
  }
]

/* ─── Why They Mentor Data ───────────────────────────────────── */
const beliefs = [
  {
    title: "Give Back",
    description: "We came from the same tier colleges. We understand the confusion, the lack of support, and the struggle to get noticed. We mentor to open the doors that were closed to us.",
    icon: HeartHandshake,
    color: "text-primary",
    bg: "bg-primary/5"
  },
  {
    title: "Accelerate Growth",
    description: "Learning alone is slow. Mentorship compresses years of painful trial-and-error into weeks of focused, high-speed execution.",
    icon: Compass,
    color: "text-accent",
    bg: "bg-accent/5"
  },
  {
    title: "Build Confidence",
    description: "Having an experienced engineer approve your PR and say 'this is production-grade' builds a level of self-trust no tutorial can replicate.",
    icon: ShieldCheck,
    color: "text-secondary",
    bg: "bg-secondary/5"
  }
]

/* ─── Main Section Component ─────────────────────────────────── */
export default function MentorsSection() {
  return (
    <section id="mentors" className="relative py-24 md:py-36 overflow-hidden bg-background">
      
      {/* Background soft lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-3.5 py-1 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider bg-primary/5 border border-primary/10 mb-4">
            Mentorship
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-foreground">
            Learn From Builders,<br />Not Just Teachers.
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            Get guidance from mentors who have built products, won hackathons, landed internships, and navigated the same journey you&apos;re on today.
          </p>
        </div>

        {/* ================= PART 1: Mentor Grid ================= */}
        <div className="mb-24">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-6">
            The Mentor Ecosystem
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-border/50 bg-card/45 backdrop-blur-sm p-6 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 group"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-muted border border-border mb-5">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <h4 className="text-lg font-semibold text-foreground">{mentor.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{mentor.role}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {mentor.tags.map(t => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-[9px] font-semibold text-secondary bg-secondary/5 border border-secondary/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/30">
                  <a href={mentor.socials.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Link2 className="w-3.5 h-3.5" />
                  </a>
                  <a href={mentor.socials.github} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= PART 3: Why They Mentor ================= */}
        <div>
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-6 text-center">
            Our Core Philosophy
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beliefs.map((belief, i) => {
              const Icon = belief.icon
              return (
                <motion.div
                  key={belief.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-3xl border border-border/50 bg-card/45 backdrop-blur-sm p-6 space-y-4 shadow-sm"
                >
                  <div className={`w-10 h-10 rounded-2xl ${belief.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${belief.color}`} />
                  </div>
                  
                  <h4 className="text-base font-semibold text-foreground">{belief.title}</h4>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed font-light">
                    {belief.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>

    </section>
  )
}