"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Users, Compass, Code2, Trophy, Calendar,
  GitPullRequest, MessageSquare, Target, Sparkles
} from "lucide-react"
import { useMembership } from "@/components/auth/MembershipContext"
import { CommunityCardSkeleton, CommunityActivitySkeleton } from "@/components/ui/Skeleton"

/* ─── Ecosystem Network Visualizer ───────────────────────────── */
function EcosystemNetwork() {
  const nodes = [
    { name: "Students", icon: Users, color: "text-primary", border: "border-primary/20", bg: "bg-primary/5", x: "77.5%", y: "40%", dx: 310, dy: 160 },
    { name: "Mentors", icon: Compass, color: "text-secondary", border: "border-secondary/20", bg: "bg-secondary/5", x: "20%", y: "30%", dx: 80, dy: 120 },
    { name: "Projects", icon: Code2, color: "text-accent", border: "border-accent/20", bg: "bg-accent/5", x: "70%", y: "75%", dx: 280, dy: 300 },
    { name: "Hackathons", icon: Trophy, color: "text-amber-500", border: "border-amber-500/20", bg: "bg-amber-500/5", x: "17.5%", y: "65%", dx: 70, dy: 260 },
    { name: "Events", icon: Calendar, color: "text-primary", border: "border-primary/20", bg: "bg-primary/5", x: "45%", y: "16.25%", dx: 180, dy: 65 },
    { name: "Collaborations", icon: GitPullRequest, color: "text-success", border: "border-success/20", bg: "bg-success/5", x: "52.5%", y: "85%", dx: 210, dy: 340 },
  ]

  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center bg-transparent">

      {/* Background SVG connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
        {/* Draw connections from center (200,200) to each node */}
        {nodes.map((node, i) => (
          <motion.line
            key={`center-${i}`}
            x1="200"
            y1="200"
            x2={node.dx}
            y2={node.dy}
            stroke="currentColor"
            className={node.color}
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}

        {/* Web connections between nodes */}
        <line x1="310" y1="160" x2="280" y2="300" stroke="currentColor" className="text-border" strokeWidth="1" opacity="0.25" />
        <line x1="80" y1="120" x2="70" y2="260" stroke="currentColor" className="text-border" strokeWidth="1" opacity="0.25" />
        <line x1="180" y1="70" x2="310" y2="160" stroke="currentColor" className="text-border" strokeWidth="1" opacity="0.25" />
        <line x1="180" y1="70" x2="80" y2="120" stroke="currentColor" className="text-border" strokeWidth="1" opacity="0.25" />
        <line x1="70" y1="260" x2="210" y2="340" stroke="currentColor" className="text-border" strokeWidth="1" opacity="0.25" />
        <line x1="280" y1="300" x2="210" y2="340" stroke="currentColor" className="text-border" strokeWidth="1" opacity="0.25" />
      </svg>

      {/* Central Hub Node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-20 h-20 rounded-full bg-card border border-primary/20 flex items-center justify-center shadow-md shadow-primary/5"
        >
          {/* Inner pulse */}
          <div className="absolute inset-0 rounded-full bg-primary/5 animate-ping opacity-75" />
          <span className="font-heading font-bold text-xs tracking-wider text-primary uppercase">Ecosystem</span>
        </motion.div>
      </div>

      {/* Outer Nodes */}
      {nodes.map((node, idx) => {
        const Icon = node.icon
        return (
          <motion.div
            key={node.name}
            style={{
              left: node.x,
              top: node.y,
              transform: "translate(-50%, -50%)"
            }}
            animate={{
              y: [0, -6 - (idx % 3), 0],
              x: [0, 4 + (idx % 2), 0]
            }}
            transition={{
              duration: 5 + idx,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.06 }}
            className={`absolute z-20 flex items-center gap-1.5 px-3 py-1.5 bg-card border ${node.border} rounded-full shadow-sm cursor-default select-none`}
          >
            <div className={`w-5 h-5 rounded-full ${node.bg} flex items-center justify-center`}>
              <Icon className={`w-3 h-3 ${node.color}`} />
            </div>
            <span className="text-[11px] font-semibold text-foreground">{node.name}</span>
          </motion.div>
        )
      })}
    </div>
  )
}

/* ─── Community Feature Cards Data ───────────────────────────── */
const communityFeatures = [
  {
    title: "Daily Discussions",
    description: "Engage in topics on architecture, languages, and technical concepts.",
    icon: MessageSquare,
    color: "text-primary",
    bg: "bg-primary/5"
  },
  {
    title: "Project Showcases",
    description: "Share what you ship, ask for critiques, and inspect peer codebases.",
    icon: Code2,
    color: "text-accent",
    bg: "bg-accent/5"
  },
  {
    title: "Hackathons & Challenges",
    description: "Team up in time-boxed sprint hackathons to test and scale designs.",
    icon: Trophy,
    color: "text-amber-500",
    bg: "bg-amber-500/5"
  },
  {
    title: "Accountability Groups",
    description: "Participate in small groups to maintain building consistency.",
    icon: Target,
    color: "text-secondary",
    bg: "bg-secondary/5"
  },
  {
    title: "Peer Learning",
    description: "Join co-working voice channels and participate in code reviews.",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/5"
  },
  {
    title: "Networking & Mentorship",
    description: "Make connections with technical leaders and software founders.",
    icon: Sparkles,
    color: "text-success",
    bg: "bg-success/5"
  }
]

/* ─── Main Section Component ─────────────────────────────────── */
export default function CommunitySection() {
  const { requireMembership } = useMembership()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="community" className="relative py-24 md:py-36 overflow-hidden bg-transparent">

      {/* Background radial elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/4 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/3 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">

          {/* ================= LEFT COLUMN: Network Visual ================= */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[360px]">
            {isLoading ? (
              <CommunityActivitySkeleton />
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <EcosystemNetwork />
              </motion.div>
            )}
          </div>

          {/* ================= RIGHT COLUMN: Content & Features ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-headings leading-tight">
                Learn Together. Build Together. Grow Together.
              </h2>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                The best opportunities often come from the people around you. Lumora brings students, mentors, builders, and dreamers together in one collaborative ecosystem designed for mutual growth.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    requireMembership("join_community", () => {
                      alert("Welcome! You have successfully joined the Lumora Community ecosystem.")
                    })
                  }}
                  className="w-full sm:w-auto btn-primary px-6 py-3 text-xs"
                >
                  Join Community
                </button>
              </div>
            </motion.div>

            {/* Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-10">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <CommunityCardSkeleton key={i} />
                ))
              ) : (
                communityFeatures.map((feat, i) => {
                  const Icon = feat.icon
                  return (
                    <motion.div
                      key={feat.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="p-4 bg-card/45 backdrop-blur-sm border border-border/40 hover:border-primary/20 rounded-2xl flex gap-3 transition-colors duration-200"
                    >
                      <div className={`w-8 h-8 rounded-xl ${feat.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-4 h-4 ${feat.color}`} />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-headings mb-1">
                          {feat.title}
                        </h4>
                        <p className="text-[11px] text-muted-foreground leading-relaxed font-light">
                          {feat.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })
              )}
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}