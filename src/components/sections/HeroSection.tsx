"use client"

import { motion } from "framer-motion"
import Link from "next/link"


import { useSession } from "next-auth/react"

export default function HeroSection() {
  const { data: session } = useSession()
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const target = document.getElementById("problem")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.45,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  const letterContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center py-24 select-none">
      
      {/* 1. Deep Atmospheric Background Glows (Extremely subtle to keep the background graphite-black) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 25%, rgba(255, 255, 255, 0.015), transparent 45%)"
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 6% 50%, rgba(255, 255, 255, 0.008), transparent 30%)"
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 94% 50%, rgba(255, 255, 255, 0.008), transparent 30%)"
        }}
      />

      {/* 2. Midground: Cinematic Text & CTA Content (z-10 layer) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={childVariants}
            className="flex flex-col items-center mb-10"
          >
            <span className="text-[10px] font-semibold text-[#A8A8A8] tracking-[0.35em] font-heading uppercase">
              FROM CONFUSED TO CONFIDENT
            </span>
            <div className="w-24 h-px bg-white/20 mt-4" />
          </motion.div>

          <motion.h1
            variants={letterContainerVariants}
            className="text-[12vw] sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem] font-fancy font-light tracking-[0.02em] leading-[0.9] text-white my-8 select-text drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] whitespace-nowrap"
          >
            {"LumoraSpace".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span className="sr-only"> – The Student Growth Ecosystem for Ambitious Builders</span>
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="mt-10 text-2xl md:text-3.5xl font-fancy font-light tracking-tight text-white/95 leading-[1.35] drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]"
          >
            Talent exists everywhere.
            <br />
            <span className="italic">{"Guidance doesn't."}</span>
          </motion.p>

          <motion.p
            variants={childVariants}
            className="max-w-[480px] text-muted-foreground text-xs md:text-sm leading-relaxed font-light font-sans select-text opacity-70 tracking-wide"
          >
            Helping students grow through mentorship, projects, hackathons, Structured Courses and community.
          </motion.p>

          <motion.div
            variants={childVariants}
            className="mt-12 flex flex-row gap-5 items-center justify-center"
          >
            {!session && (
              <Link
                href="/create-account"
                className="h-11 px-8 rounded-full bg-white text-black font-semibold text-xs tracking-wide transition-all hover:bg-white/95 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-1.5 active:translate-y-px"
              >
                <span>Join LumoraSpace</span>
                <span className="text-[14px]">→</span>
              </Link>
            )}

            <button
              onClick={handleExploreClick}
              className="h-11 px-8 rounded-full border border-white/12 bg-white/[0.01] text-white font-semibold text-xs tracking-wide transition-all hover:bg-white/5 hover:border-white/25 backdrop-blur-md flex items-center justify-center active:translate-y-px"
            >
              Explore The Vision
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Background Silk Flow Video (z-0 layer behind text) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#050505]">
        <video
          src="/silk_flow_bg.mp4"
          poster="/silk_flow_bg.png"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        />
      </div>

    </section>
  )
}