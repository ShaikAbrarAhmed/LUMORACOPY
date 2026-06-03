"use client"

import { motion } from "framer-motion"

import {
  Calendar,
  Users,
  Clock,
} from "lucide-react"

export default function CohortSection() {
  return (
    <section
      id="cohorts"
      className="relative overflow-hidden py-24 bg-background border-t border-border"
    >

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Soft Glow */}
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/15 blur-[120px] rounded-full" />

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-primary/20 blur-[1px]"
            style={{
              width: `${(i % 4) + 2}px`,
              height: `${(i % 4) + 2}px`,
              top: `${(i * 13) % 100}%`,
              left: `${(i * 17) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-tight text-headings">
              A focused learning journey built for serious growth.
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-foreground leading-relaxed">
              Lumora cohorts are intentionally small so every student gets
              proper guidance, mentorship, accountability, and real support.
            </p>

            <p className="mt-6 text-lg text-foreground leading-relaxed">
              This isn’t another overcrowded learning community filled with
              noise and endless tutorials.

              It’s a structured ecosystem designed to help beginners stay
              consistent, build practical skills, and grow confidently.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">

              {/* Card */}
              <div
                className="
                  rounded-3xl border border-border
                  bg-white/80 backdrop-blur-xl
                  p-6 shadow-sm
                "
              >
                <Users className="h-5 w-5 text-primary mb-4" />

                <p className="text-3xl font-semibold text-headings">
                  Small
                </p>

                <p className="mt-2 text-sm text-foreground">
                  Focused learning groups
                </p>
              </div>

              {/* Card */}
              <div
                className="
                  rounded-3xl border border-border
                  bg-white/80 backdrop-blur-xl
                  p-6 shadow-sm
                "
              >
                <Clock className="h-5 w-5 text-primary mb-4" />

                <p className="text-3xl font-semibold text-headings">
                  Weekly
                </p>

                <p className="mt-2 text-sm text-foreground">
                  Mentorship & accountability
                </p>
              </div>

              {/* Card */}
              <div
                className="
                  rounded-3xl border border-border
                  bg-white/80 backdrop-blur-xl
                  p-6 shadow-sm
                "
              >
                <Calendar className="h-5 w-5 text-primary mb-4" />

                <p className="text-3xl font-semibold text-headings">
                  Real
                </p>

                <p className="mt-2 text-sm text-foreground">
                  Projects & practical growth
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT CARD ================= */}

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
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              rounded-3xl border border-border
              bg-white/80 backdrop-blur-xl
              p-8 lg:p-10
              shadow-[0_20px_80px_rgba(140,192,235,0.12)]
            "
          >

            {/* Small Label */}
            <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">
              Join Lumora
            </span>

            {/* Heading */}
            <h3 className="mt-4 text-3xl font-semibold tracking-tight leading-tight text-headings">
              Ready to build your future?
            </h3>

            {/* Description */}
            <p className="mt-5 text-foreground leading-relaxed">
              Join the waitlist for Cohort 1.

              We’ll notify you when applications officially open.
              No spam, ever.
            </p>

            {/* Input */}
            <div className="mt-8">

              <div
                className="
                  flex items-center
                  rounded-2xl border border-border
                  bg-card px-5 py-4
                  shadow-sm
                "
              >

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    w-full bg-transparent outline-none
                    text-headings
                    placeholder:text-[#94A3B8]
                  "
                />

              </div>

              {/* Terms */}
              <p className="mt-4 text-xs leading-relaxed text-[#94A3B8]">
                By joining, you agree to our Terms of Service and Privacy Policy.
              </p>

            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border my-10" />

            {/* Bottom Content */}
            <div>

              <h4 className="text-2xl font-semibold tracking-tight leading-tight text-headings">
                Built for beginners who want real growth.
              </h4>

              <p className="mt-5 text-foreground leading-relaxed">
                Lumora is being built carefully from the ground up —
                focused on mentorship, consistency, practical learning,
                and a supportive beginner-first ecosystem.
              </p>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}