"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const mentors = [
  {
    name: "Alex Dev",
    role: "Frontend Specialist",
    tag: "Self-Taught Developer",
    bio: "Started with confusion, self-doubt, and endless tutorials. Today, helping beginners build confidence through practical frontend development and real-world projects.",
  },
  {
    name: "Sarah Tech",
    role: "Industry Mentor",
    tag: "Tier-3 Graduate",
    bio: "Navigated the journey from a Tier-3 college to the tech industry. Passionate about helping students break limitations and grow confidently.",
  },
  {
    name: "Omar K.",
    role: "Full Stack Mentor",
    tag: "Hackathon Winner",
    bio: "Believes learning should be practical, collaborative, and exciting. Guides students through building projects and solving real-world problems.",
  },
]

export default function MentorsSection() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section
      id="mentors"
      className="relative overflow-hidden py-20 bg-[#F7FBFF]"
    >

      {/* ================= ATMOSPHERIC BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Soft Glow */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-sky-100/40 blur-[120px] rounded-full" />

        {/* Floating Particles */}
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-sky-300/40 blur-[1px]"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <div className="max-w-3xl mb-12">

          <span className="text-sky-500 uppercase tracking-[0.25em] text-xs font-medium">
            Mentorship
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-tight text-[#0F172A]">
            The guidance we once needed.
          </h2>

          <p className="mt-6 text-[#64748B] leading-relaxed text-lg">
            Every mentor at Lumora started somewhere — confused,
            overwhelmed, and unsure of where to begin.

            Today, they’re developers, builders, and professionals helping
            beginners grow with the guidance, support, and confidence they
            once wished they had.
          </p>

        </div>

        {/* ================= MENTOR CARDS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {mentors.map((mentor, index) => {

            const isActive = active === index

            return (
              <motion.div
                layout
                key={mentor.name}
                onClick={() => setActive(isActive ? null : index)}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.3,
                }}
                className={`
                  cursor-pointer overflow-hidden rounded-3xl border
                  transition-all duration-500 backdrop-blur-xl
                  ${isActive
                    ? "bg-white border-sky-200 shadow-[0_20px_80px_rgba(125,211,252,0.15)]"
                    : "bg-white/70 border-white hover:border-sky-100"
                  }
                `}
              >

                <div className="p-8">

                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-sky-100 mb-6 flex items-center justify-center text-sky-500 font-semibold text-lg shadow-sm">
                    {mentor.name.charAt(0)}
                  </div>

                  {/* Tag */}
                  <span className="text-xs uppercase tracking-[0.25em] text-sky-500 font-medium">
                    {mentor.tag}
                  </span>

                  {/* Name */}
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0F172A]">
                    {mentor.name}
                  </h3>

                  {/* Role */}
                  <p className="mt-2 text-[#64748B]">
                    {mentor.role}
                  </p>

                  {/* Expandable Content */}
                  <AnimatePresence>

                    {isActive && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="overflow-hidden"
                      >

                        {/* Divider */}
                        <div className="w-full h-px bg-sky-100 my-6" />

                        {/* Bio */}
                        <p className="text-[#64748B] leading-relaxed">
                          {mentor.bio}
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-8">

                          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 text-sm font-medium">
                            𝕏
                          </div>

                          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 text-sm font-medium">
                            in
                          </div>

                          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 text-sm font-medium">
                            ⚡
                          </div>

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}