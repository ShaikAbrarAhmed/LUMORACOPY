"use client"

import { motion } from "framer-motion"
const particles = [
  { size: 2, top: "8%", left: "12%" },
  { size: 3, top: "18%", left: "75%" },
  { size: 2, top: "28%", left: "30%" },
  { size: 4, top: "40%", left: "85%" },
  { size: 3, top: "55%", left: "15%" },
  { size: 2, top: "68%", left: "60%" },
  { size: 4, top: "80%", left: "35%" },
  { size: 3, top: "90%", left: "82%" },
  { size: 2, top: "12%", left: "50%" },
  { size: 4, top: "72%", left: "90%" },
  { size: 3, top: "48%", left: "70%" },
  { size: 2, top: "35%", left: "5%" },
  { size: 4, top: "60%", left: "45%" },
  { size: 3, top: "22%", left: "90%" },
  { size: 2, top: "95%", left: "55%" },
  { size: 4, top: "15%", left: "25%" },
  { size: 3, top: "75%", left: "5%" },
  { size: 2, top: "88%", left: "25%" },
  { size: 4, top: "30%", left: "60%" },
  { size: 3, top: "65%", left: "78%" },
  { size: 2, top: "45%", left: "92%" },
  { size: 3, top: "58%", left: "8%" },
  { size: 4, top: "5%", left: "65%" },
  { size: 2, top: "25%", left: "42%" },
  { size: 3, top: "85%", left: "15%" },
  { size: 4, top: "52%", left: "28%" },
  { size: 2, top: "14%", left: "88%" },
  { size: 3, top: "78%", left: "48%" },
  { size: 4, top: "33%", left: "73%" },
  { size: 2, top: "62%", left: "95%" },
  { size: 3, top: "7%", left: "35%" },
  { size: 2, top: "97%", left: "68%" },
  { size: 4, top: "42%", left: "18%" },
  { size: 3, top: "70%", left: "55%" },
  { size: 2, top: "20%", left: "10%" },
]
export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7FBFF]">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Left Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-sky-200/30 blur-[140px] rounded-full" />

        {/* Right Glow */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-sky-100/40 blur-[180px] rounded-full" />

        {/* Vertical Beam */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] h-full bg-sky-100/20 blur-[120px]" />

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
          border border-sky-200/40
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
          border border-sky-100/50
          rounded-full
          -translate-x-1/2 -translate-y-1/2
        "
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* ================= PARTICLES ================= */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {particles.map((particle, i) => (
    <motion.div
      key={i}
      animate={{
        y: [0, -20, 0],
        opacity: [0.15, 0.5, 0.15],
      }}
      transition={{
        duration: 5 + i,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute rounded-full bg-sky-300/40"
      style={{
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        top: particle.top,
        left: particle.left,
      }}
    />
  ))}
</div>

      {/* ================= HERO CONTENT ================= */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center text-center">

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
          className="relative w-[260px] h-[260px] mb-10 flex items-center justify-center"
        >

          {/* Outer Glow */}
          <div className="absolute inset-0 bg-sky-300/20 blur-[100px] rounded-full" />

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
              bg-gradient-to-br from-white to-sky-100
              border border-white/80
              shadow-[0_30px_80px_rgba(56,189,248,0.18)]
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
                border border-sky-200/60
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-sky-400 rounded-full shadow-[0_0_25px_rgba(56,189,248,0.5)]" />
            </motion.div>

            {/* Core */}
            <div className="relative flex items-center justify-center">

              <div className="absolute w-20 h-20 bg-sky-300/20 rounded-full blur-2xl" />

              <div className="w-8 h-8 rounded-full bg-sky-500 shadow-[0_0_35px_rgba(56,189,248,0.6)]" />

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
              bg-white/80 backdrop-blur-xl
              border border-white
              rounded-2xl
              px-4 py-3
              shadow-lg
            "
          >
            <p className="text-xs text-[#64748B]">
              🚀 Built first project
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
              bg-white/80 backdrop-blur-xl
              border border-white
              rounded-2xl
              px-4 py-3
              shadow-lg
            "
          >
            <p className="text-xs text-[#64748B]">
              💙 Mentor guidance
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
              bg-sky-200/30
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
              text-sky-500
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
                text-[#0F172A]
              "
            >
              FROM CONFUSED
              <br />
              TO CONFIDENT.
            </motion.h1>

          </motion.div>

          {/* Learn Build Grow */}
          <motion.div
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
              flex flex-wrap justify-center items-center
              gap-4 mt-10
              text-sm md:text-base
              font-medium
              text-[#0F172A]
            "
          >
            <span>Learn</span>

            <span className="text-sky-300">•</span>

            <span>Build</span>

            <span className="text-sky-300">•</span>

            <span>Grow</span>

            <span className="text-sky-300">•</span>

            <span>Belong</span>
          </motion.div>

          {/* Description */}
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
              delay: 0.9,
              duration: 0.8,
            }}
            className="
              relative z-10
              mt-8 max-w-2xl
              text-[#64748B]
              text-base md:text-lg
              leading-relaxed
            "
          >
            A beginner-first tech ecosystem helping students become
            confident builders through mentorship, projects,
            and community-driven growth.
          </motion.p>

        </div>
      </div>
    </section>
  )
}