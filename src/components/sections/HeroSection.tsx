"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function HeroSection() {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return
    e.preventDefault()
    setIsTransitioning(true)
    setTimeout(() => {
      router.push("/features")
    }, 800)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Left Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-primary/5 blur-[140px] rounded-full" />

        {/* Right Glow */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/3 blur-[180px] rounded-full" />

        {/* Vertical Beam */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] h-full bg-primary/2 blur-[120px]" />

      </div>

      {/* ================= ORBIT RINGS ================= */}

      <motion.div
        initial={{ rotateX: 70, rotateY: 15, rotateZ: 0 }}
        animate={{ rotateZ: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute left-1/2 top-1/2
          w-[80vw] max-w-[1200px]
          h-[80vw] max-h-[1200px]
          border border-primary/10
          rounded-full
          -translate-x-1/2 -translate-y-1/2
        "
        style={{ transformStyle: "preserve-3d" }}
      />

      <motion.div
        initial={{ rotateX: 65, rotateY: -30, rotateZ: 0 }}
        animate={{ rotateZ: -360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute left-1/2 top-1/2
          w-[65vw] max-w-[950px]
          h-[65vw] max-h-[950px]
          border border-primary/10
          rounded-full
          -translate-x-1/2 -translate-y-1/2
        "
        style={{ transformStyle: "preserve-3d" }}
      />



      {/* ================= HERO CONTENT ================= */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 min-h-screen flex flex-col items-center justify-start text-center pt-44 md:pt-48">

        {/* ================= FLOATING CORE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="relative w-[260px] h-[260px] mb-16 md:mb-24 flex items-center justify-center"
        >

          {/* Outer Glow */}
          <div className="absolute inset-0 bg-primary/8 blur-[100px] rounded-full" />

          {/* Main Orb */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative w-[180px] h-[180px]
              rounded-full
              bg-gradient-to-br from-white to-primary/5
              border border-border/50
              shadow-[0_20px_50px_rgba(79,70,229,0.06)]
              backdrop-blur-xl
              flex items-center justify-center
            "
          >

            {/* Inner Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute inset-3
                rounded-full
                border border-primary/15
              "
            />

            {/* Small Orbit */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)]" />
            </motion.div>

            {/* Core */}
            <div className="relative flex items-center justify-center">

              <div className="absolute w-20 h-20 bg-primary/10 rounded-full blur-2xl" />

              <div className="w-8 h-8 rounded-full bg-primary shadow-[0_0_30px_rgba(91,95,239,0.4)]" />

            </div>
          </motion.div>

          {/* Floating Card Left */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute left-[-40px] top-[30px]
              bg-card/90 backdrop-blur-xl
              border border-border
              rounded-2xl
              px-4 py-3
              shadow-[0_4px_20px_rgba(0,0,0,0.02)]
            "
          >
            <p className="text-xs text-muted-foreground">
              Built first project
            </p>
          </motion.div>

          {/* Floating Card Right */}
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute right-[-40px] bottom-[20px]
              bg-card/90 backdrop-blur-xl
              border border-border
              rounded-2xl
              px-4 py-3
              shadow-[0_4px_20px_rgba(0,0,0,0.02)]
            "
          >
            <p className="text-xs text-muted-foreground">
              Mentor guidance
            </p>
          </motion.div>

        </motion.div>

        {/* ================= TEXT CONTENT ================= */}

        <div className="relative flex flex-col items-center justify-center">

          {/* Sky Circle */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
            }}
            className="
              absolute top-[10px]
              w-[380px] h-[380px]
              rounded-full
              bg-primary/4
              blur-[90px]
              z-0
            "
          />

          {/* Small Label */}
          <motion.span
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              relative z-10
              uppercase tracking-[0.35em]
              text-[11px]
              text-primary
              font-semibold
              mb-6
            "
          >
            Beginner-First Tech Ecosystem
          </motion.span>

          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="relative z-10"
          >

            <motion.h1
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                text-5xl md:text-6xl lg:text-7xl
                font-semibold
                tracking-[-0.07em]
                leading-[1]
                text-headings
              "
            >
              FROM CONFUSED
              <br />
              TO CONFIDENT.
            </motion.h1>

          </motion.div>

          {/* Description / Subheadline */}
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
            className="
              relative z-10
              mt-8 max-w-2xl
              text-muted-foreground
              text-base md:text-lg
              leading-relaxed
            "
          >
            A beginner-first ecosystem helping students break into tech through guidance, projects, accountability, and community.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto"
          >
            <Link
              href="/cohorts"
              className="w-full sm:w-auto btn-primary"
            >
              Start Your Journey
            </Link>
            <Link
              href="/features"
              onClick={handleExploreClick}
              className="w-full sm:w-auto btn-secondary"
            >
              Explore Lumora
            </Link>
          </motion.div>

        </div>
      </div>

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, filter: "blur(20px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Outer Glow */}
              <div className="absolute w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full" />
              
              {/* Center Orbiting Ring */}
              <div className="relative w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t border-primary"
                />
                <div className="w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_20px_rgba(79,70,229,0.5)]" />
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mt-6 text-xs font-semibold tracking-[0.25em] uppercase text-primary"
              >
                Entering Lumora
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}