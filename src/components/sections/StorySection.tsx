"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const journeyCards = [
  {
    image: "/roadmap.png",
    title: "STRUCTURED LEARNING",
    description: "Follow a clear roadmap, not random tutorials.",
  },
  {
    image: "/projects.png",
    title: "BUILD REAL PROJECTS",
    description: "Learn by building. Not by endlessly watching.",
  },
  {
    image: "/community.png",
    title: "COMMUNITY & MENTORSHIP",
    description:
      "Grow alongside ambitious students and mentors who genuinely care.",
  },
  {
    image: "/growth.png",
    title: "CONSISTENCY WINS",
    description:
      "Small progress every day creates extraordinary results.",
  },
]

export default function StorySection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % journeyCards.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#F7FBFF] py-32">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-sky-100/40 blur-[120px] rounded-full" />

        {[
          "Am I learning the right things?",
          "How do I even start?",
          "Everyone feels ahead of me.",
          "I don't want to stay stuck.",
        ].map((text, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -12, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute text-sm
              text-sky-300/60
              font-medium
              hidden md:block
            "
            style={{
              top: `${20 + i * 18}%`,
              left: i % 2 === 0 ? "8%" : "72%",
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto px-6">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[0.3em] text-sky-500 text-xs font-semibold">
              Why We Started Lumora
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight text-[#0F172A]">
              We built the
              <br />
              guidance we
              <br />
              never had.
            </h2>

            <p className="mt-8 text-xl text-[#64748B] leading-relaxed max-w-xl">
              Most of us came from Tier-2 and Tier-3 colleges where learning tech
              often felt confusing, isolating, and directionless.
            </p>

            <p className="mt-6 text-lg text-[#64748B] max-w-xl">
              So instead of creating another course platform, we built an ecosystem
              focused on clarity, mentorship, projects, accountability, and growth.
            </p>

            <div className="mt-12 relative min-h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCardIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="
                    bg-white
                    border border-sky-100
                    rounded-[28px]
                    overflow-hidden
                    shadow-[0_20px_60px_rgba(14,165,233,0.08)]
                    absolute
                    w-full
                  "
                >
                  <div className="h-[300px] relative bg-sky-50">
                    <Image
                      src={journeyCards[activeCardIndex].image}
                      alt={journeyCards[activeCardIndex].title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#0F172A]">
                      {journeyCards[activeCardIndex].title}
                    </h3>
                    <p className="mt-3 text-[#64748B] leading-relaxed">
                      {journeyCards[activeCardIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Indicators */}
              <div className="absolute -bottom-10 left-0 right-0 flex justify-center space-x-2">
                {journeyCards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeCardIndex ? "w-6 bg-sky-500" : "w-2 bg-sky-200"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
              bg-white
              border border-sky-100
              rounded-[32px]
              p-8
              shadow-[0_30px_80px_rgba(14,165,233,0.08)]
            "
            >

              <div className="space-y-6">

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#0F172A]">
                    Lumora Ecosystem
                  </span>

                  <span className="text-xs text-green-500">
                    ● Active
                  </span>
                </div>


                <div className="bg-sky-50 rounded-2xl p-2">
                  {/* Provide the path to your video file in the src attribute below (e.g., /your-video.mp4 if placed in the public folder) */}
                  <video
                    src="/my-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-xl object-cover aspect-video bg-sky-100"
                  />
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* ================= FINAL STATEMENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="mt-48 text-center relative overflow-hidden max-w-5xl mx-auto px-6"
        >

          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="w-[450px] h-[450px] bg-sky-200/20 blur-[140px] rounded-full" />

            <div className="absolute left-0 top-0 h-full w-[220px] bg-gradient-to-r from-black/[0.04] to-transparent" />

            <div className="absolute right-0 top-0 h-full w-[220px] bg-gradient-to-l from-white to-transparent" />

          </div>

          {/* Final Text */}
          <motion.h2
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            relative z-10
            text-3xl md:text-4xl lg:text-5xl
            font-semibold
            tracking-tight
            leading-tight
            text-[#0F172A]
          "
          >
            THE RIGHT GUIDANCE
            <br />
            CAN COMPLETELY CHANGE
            <br />
            SOMEONE'S FUTURE.
          </motion.h2>

        </motion.div>

      </div>

    </section>
  )
}
