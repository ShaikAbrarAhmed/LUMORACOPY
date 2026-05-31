"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

/* ─────────────────────── DATA ─────────────────────── */




const founder = {
  name: "Shaik Abrar Ahmed",
  role: "Founder",
  tagline: "Building the ecosystem I wish existed when I started.",
  initial: "A",
  image: "/team/abrar.png",
  linkedin: "https://www.linkedin.com/in/shaikabrarahmed/",
  github: "https://github.com/ShaikAbrarAhmed",
}

const coFounders = [
  {
    name: "Mounika",
    role: "Co-Founder",
    focus: "Growth & Community",
    initial: "M",
    image: "/team/Mouni2.jpeg",
    linkedin: "http://bit.ly/3RvbgIi",
  },
  {
    name: "Ashwini",
    role: "Co-Founder",
    focus: "Product & Technology",
    initial: "A",
    image: "/team/Ashwini2.jpeg",
    linkedin: "https://www.linkedin.com/in/ashwini-ravirala",
    github: "https://github.com/ashwini2134",
  },
]

const coreTeam = [
  { name: "Yuvi", role: "Content & Brand Lead", initial: "Y", image: "/team/Yuvi.jpeg", linkedin: "https://www.linkedin.com/in/yuvaraj-dudukuru/", github: "https://github.com/yuvaraj-dudukuru" },
  { name: "Rajitha", role: "Founding Member & Innovation Lead", initial: "R", image: "/team/Raji2.jpeg" },
  { name: "Sruthi", role: "Design Lead", initial: "S", image: "/team/Sruthi.jpeg", linkedin: "https://www.linkedin.com/in/sruthi-kakarla" },
  { name: "Jassi", role: "Community Lead", initial: "J", image: "/team/Jasmeetg.jpeg", linkedin: "https://www.linkedin.com/in/sardar-jasmeeth-singh-raj" },
]

const values = [
  { label: "Build in Public"},
  { label: "Community First"},
  { label: "Learn by Doing"},
  { label: "Growth Mindset"},
  { label: "Hackathon Culture"},
  { label: "Students First"},
]

/* ─────────────────────── ANIMATION VARIANTS ─────────────────────── */

const fadeUp: any = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: "easeOut" },
  }),
}

const scaleIn: any = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

/* ─────────────────────── SOCIAL ICON BUTTONS ─────────────────────── */

function SocialButtons({
  linkedin,
  twitter,
  github
}: {
  linkedin?: string
  twitter?: string
  github?: string
}) {
  if (!linkedin && !twitter && !github) return null;

  const linkClass = `
    w-9 h-9 rounded-xl
    bg-white/70 border border-sky-100
    flex items-center justify-center
    text-sky-500 text-xs font-semibold
    hover:bg-sky-50 hover:border-sky-200
    hover:scale-110
    transition-all duration-200
  `

  return (
    <div className="flex items-center justify-center gap-3 mt-1">
      {github && (
        <a
          href={github.startsWith('http') ? github : `https://${github}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={linkClass}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
      )}
      {twitter && (
        <a
          href={twitter.startsWith('http') ? twitter : `https://${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X / Twitter"
          className={linkClass}
        >
          𝕏
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin.startsWith('http') ? linkedin : `https://${linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={linkClass}
        >
          in
        </a>
      )}
    </div>
  )
}



/* ─────────────────────── AVATAR ─────────────────────── */

function Avatar({
  initial,
  image,
  size = "md",
  name,
}: {
  initial: string
  image: string
  name: string
  size?: "sm" | "md" | "lg"
}) {
  const [imgError, setImgError] = useState(false)

  const pxMap = { sm: 100, md: 120, lg: 160 }
  const sizeMap = {
    sm: "w-24 h-24 text-xl",
    md: "w-28 h-28 text-2xl",
    lg: "w-40 h-40 text-4xl",
  }

  return (
    <div
      className={`
        relative mx-auto rounded-full
        border-2 border-white
        shadow-[0_8px_32px_rgba(125,211,252,0.22)]
        flex items-center justify-center
        overflow-hidden
        transition-transform duration-300
        group-hover:scale-105
        ${sizeMap[size]}
      `}
    >
      {/* Gradient ring overlay */}
      <div
        className="absolute inset-0 rounded-full z-10 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Real photo */}
      {!imgError ? (
        <Image
          src={image}
          alt={name}
          width={pxMap[size]}
          height={pxMap[size]}
          className="object-cover w-full h-full rounded-full"
          style={{ objectPosition: "center 15%" }}
          onError={() => setImgError(true)}
        />
      ) : (
        /* Letter fallback */
        <div
          className="w-full h-full rounded-full flex items-center justify-center font-bold"
          style={{
            background:
              "linear-gradient(135deg, #e0f2fe 0%, #f8faff 50%, #ede9fe 100%)",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #0ea5e9, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {initial}
          </span>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────── CARD BASE ─────────────────────── */

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`
        rounded-3xl border border-sky-100/80
        bg-white/75 backdrop-blur-xl
        shadow-[0_4px_24px_rgba(125,211,252,0.08)]
        hover:border-sky-200
        hover:shadow-[0_20px_80px_rgba(125,211,252,0.14)]
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  )
}

/* ─────────────────────── SECTION LABEL ─────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-5">
      <div className="h-px w-10 bg-gradient-to-r from-transparent to-sky-300/60" />
      <span className="text-sky-500 uppercase tracking-[0.2em] text-xs font-semibold">
        {children}
      </span>
      <div className="h-px w-10 bg-gradient-to-l from-transparent to-sky-300/60" />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden py-32 bg-[#F7FBFF]"
    >

      {/* ═══════════ BACKGROUND ═══════════ */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Glow blobs */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-100/35 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-violet-100/30 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-indigo-50/30 blur-[100px] rounded-full" />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -22, 0],
              opacity: [0.15, 0.55, 0.15],
            }}
            transition={{
              duration: 5 + (i % 8),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i * 0.3) % 5,
            }}
            className="absolute rounded-full"
            style={{
              width: `${(i % 4) + 2}px`,
              height: `${(i % 4) + 2}px`,
              top: `${(i * 13 + 7) % 100}%`,
              left: `${(i * 17 + 11) % 100}%`,
              background:
                i % 3 === 0
                  ? "rgba(125,211,252,0.45)"
                  : i % 3 === 1
                    ? "rgba(167,139,250,0.35)"
                    : "rgba(99,179,237,0.4)",
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 space-y-28">

        {/* ═══════════ 1. HERO ═══════════ */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.08] text-[#0F172A]">
            Meet the Builders{" "}
            <span className="block">
              Behind{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Lumorous Space
              </span>
            </span>
          </h1>

          <p className="mt-7 text-[#64748B] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A team of students and builders who understand how overwhelming
            the beginning can feel creating the ecosystem we once wished
            existed.
          </p>
        </motion.div>

        {/* ═══════════ 2. FOUNDER SPOTLIGHT ═══════════ */}

        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <SectionLabel>Founder</SectionLabel>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={scaleIn}
            whileHover={{ y: -8 }}
            className="group max-w-xl mx-auto"
          >
            <GlassCard className="relative overflow-hidden p-10 text-center">

              {/* Subtle gradient top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
                style={{
                  background:
                    "linear-gradient(90deg, #38bdf8 0%, #818cf8 50%, #a78bfa 100%)",
                }}
              />

              {/* Inner glow */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 h-24 bg-sky-100/40 blur-[50px] rounded-full pointer-events-none" />

              {/* Founder badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-sky-500/10 to-violet-500/10 border border-sky-200/60 mb-7">
                <span
                  className="text-xs font-semibold"
                  style={{
                    background: "linear-gradient(90deg, #0ea5e9, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Founder
                </span>
              </div>

              <Avatar initial={founder.initial} image={founder.image} name={founder.name} size="lg" />

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#0F172A]">
                {founder.name}
              </h2>

              {/* Tagline */}
              <p className="mt-4 text-[#475569] text-base leading-relaxed italic max-w-sm mx-auto">
                "{founder.tagline}"
              </p>

              <div className="w-16 h-px mx-auto my-6 bg-gradient-to-r from-sky-200 to-violet-200" />

              <SocialButtons linkedin={founder.linkedin} github={founder.github} />
            </GlassCard>
          </motion.div>
        </div>

        {/* ═══════════ 3. CO-FOUNDERS ═══════════ */}

        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <SectionLabel>Co-Founders</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#0F172A]">
              The People Who Made It Real
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {coFounders.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8 }}
                className="group"
              >
                <GlassCard className="relative overflow-hidden p-8 text-center h-full">
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #38bdf8 0%, #818cf8 100%)",
                    }}
                  />

                  {/* Co-founder badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 mb-6">
                    <span className="text-xs font-semibold text-sky-500 uppercase tracking-wider">
                      {member.role}
                    </span>
                  </div>

                  <Avatar initial={member.initial} image={member.image} name={member.name} size="md" />

                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#0F172A]">
                    {member.name}
                  </h3>

                  <p className="mt-1.5 text-sm font-medium text-violet-500">
                    {member.focus}
                  </p>

                  <div className="w-10 h-px mx-auto my-5 bg-gradient-to-r from-sky-200 to-violet-200" />

                  <SocialButtons linkedin={member.linkedin} github={member.github} />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════ 4. CORE TEAM ═══════════ */}

        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <SectionLabel>Core Team</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#0F172A]">
              The Ones Keeping Things Moving
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8 }}
                className="group"
              >
                <GlassCard className="p-7 text-center h-full">

                  <Avatar initial={member.initial} image={member.image} name={member.name} size="sm" />

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-[#0F172A]">
                    {member.name}
                  </h3>

                  <p className="mt-1.5 text-sm text-[#64748B]">{member.role}</p>

                  <div className="w-10 h-px mx-auto my-5 bg-sky-100" />

                  <SocialButtons linkedin={member.linkedin} github={member.github} />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════ 5. TEAM VALUES ═══════════ */}

        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#0F172A]">
              Our Values
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.06, y: -3 }}
                className="
                  inline-flex items-center gap-2.5
                  px-5 py-3 rounded-2xl
                  bg-white/80 backdrop-blur-md
                  border border-sky-100
                  shadow-[0_2px_12px_rgba(125,211,252,0.08)]
                  hover:border-sky-200
                  hover:shadow-[0_8px_32px_rgba(125,211,252,0.14)]
                  transition-all duration-200
                  cursor-default select-none
                "
              >
                
                <span className="text-sm font-semibold text-[#1E293B]">
                  {value.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ═══════════ 6. MISSION ═══════════ */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={scaleIn}
        >
          <div
            className="
              relative overflow-hidden rounded-[2rem]
              border border-sky-100/80
              bg-white/70 backdrop-blur-2xl
              p-12 md:p-16 text-center
              shadow-[0_8px_60px_rgba(125,211,252,0.10)]
            "
          >
            {/* Background gradient mesh */}
            <div
              className="absolute inset-0 rounded-[2rem] opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, #bae6fd 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, #ddd6fe 0%, transparent 55%)",
              }}
            />

            {/* Top accent bar */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] rounded-b-full"
              style={{
                background:
                  "linear-gradient(90deg, #38bdf8 0%, #818cf8 50%, #a78bfa 100%)",
              }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50/80 border border-sky-100 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-violet-600 text-xs font-semibold uppercase tracking-[0.2em]">
                  Our Mission
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-tight text-[#0F172A] max-w-3xl mx-auto">
                We're not building another{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #0ea5e9, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  EdTech company.
                </span>
              </h2>

              <p className="mt-6 text-xl md:text-2xl text-[#475569] font-medium leading-snug max-w-2xl mx-auto">
                We're building the ecosystem we wish existed when we started.
              </p>

              {/* Decorative dots row */}
              <div className="flex items-center justify-center gap-2 mt-10">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: i === 2 ? "10px" : "6px",
                      height: i === 2 ? "10px" : "6px",
                      background:
                        i === 2
                          ? "linear-gradient(135deg, #38bdf8, #818cf8)"
                          : i % 2 === 0
                            ? "#bae6fd"
                            : "#ddd6fe",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}