"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Compass, HeartHandshake, ShieldCheck, Target, ArrowRight } from "lucide-react"

export default function MentorsSection() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  }

  const pillars = [
    {
      title: "Industry Perspective",
      desc: "Understand what quality looks like in production and learn the workflows used by modern development teams.",
      icon: Compass
    },
    {
      title: "Career Guidance",
      desc: "Navigate technical choices, construct meaningful portfolios, and learn how to position yourself in the industry.",
      icon: Target
    },
    {
      title: "Practical Feedback",
      desc: "Get your code reviewed, your interface designs analyzed, and your system schemas critiqued by builders.",
      icon: ShieldCheck
    },
    {
      title: "Confidence Building",
      desc: "Receive the support and confirmation you need to escape tutorial panic and trust your own engineering execution.",
      icon: HeartHandshake
    }
  ]

  return (
    <section className="relative w-full bg-[#050505] text-white overflow-hidden pb-16 md:pb-24">
      {/* Subtle top graphite ambient lighting */}
      <div 
        className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0" 
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.015), transparent 70%)"
        }}
      />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        {/* ================= SECTION 1: HERO ================= */}
        <div className="w-full text-left pt-32 pb-16 md:pt-36 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-bold text-white/40 tracking-[0.3em] font-heading uppercase mb-6 block">
              THE MENTORSHIP ECOSYSTEM
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-fancy font-light tracking-tight text-white mb-6 leading-tight">
              Guided By People Who've Walked The Path
            </h1>
            <p className="text-[#A1A1AA] text-lg md:text-xl font-sans font-light leading-relaxed max-w-xl">
              Learn from professionals, builders, creators, and industry experts who are committed to helping students grow with confidence.<br />
            </p>
          </motion.div>
        </div>

        {/* ================= SECTION 2: FEATURED MENTORS ================= */}
        <section className="py-16 md:py-20 border-t border-white/[0.03] space-y-12 md:space-y-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-left"
          >
            <h2 className="text-2.5xl md:text-4xl font-fancy font-light tracking-tight text-white">
              Mentor Spotlights
            </h2>
          </motion.div>

          {/* MENTOR 01 — GOKUL (Left Image / Right Content) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            {/* Left Column: Image (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5"
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#111214] border border-white/5 shadow-2xl">
                <Image
                  src="/mentors/Gokul.jpeg"
                  alt="Gokul - Project Manager"
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                  priority
                />
              </div>
            </motion.div>

            {/* Right Column: Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 text-left space-y-6"
            >
              <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] font-heading uppercase block">
                MENTOR 01
              </span>

              {/* Large quote */}
              <blockquote className="text-2xl sm:text-3xl md:text-4.5xl font-fancy font-light italic leading-tight text-white">
                "Students don't need more information. <br className="hidden md:inline" />
                They need better direction."
              </blockquote>

              <div className="pt-4 border-t border-white/5 space-y-1">
                <h3 className="text-lg font-heading font-semibold text-white tracking-wide uppercase">
                  GOKUL
                </h3>
                <p className="text-xs text-[#A1A1AA] font-sans font-light">
                  Project Manager at Cirakas Consultancy
                </p>
              </div>

              {/* Quiet Expertise text list */}
              <div className="pt-4 border-t border-white/[0.03] space-y-1.5">
                <span className="text-[8px] font-bold text-white/30 tracking-widest font-heading uppercase">
                  EXPERTISE
                </span>
                <p className="text-xs text-[#A1A1AA] font-sans font-light tracking-wide leading-relaxed">
                  Leadership &nbsp;•&nbsp; Product Management &nbsp;•&nbsp; Software Development &nbsp;•&nbsp; Career Growth
                </p>
              </div>

              <div className="pt-3">
                <a
                  href="https://www.linkedin.com/in/gokul-dev1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* MENTOR 02 — PURVA KABRA (Left Content / Right Image - Stacks image on top for mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            {/* Left Column on Desktop, appears below image on Mobile */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 text-left space-y-6 order-2 md:order-1"
            >
              <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] font-heading uppercase block">
                MENTOR 02
              </span>

              {/* Large quote */}
              <blockquote className="text-2xl sm:text-3xl md:text-4.5xl font-fancy font-light italic leading-tight text-white">
                "Success isn't about having all the answers. <br className="hidden md:inline" />
                It's about asking better questions."
              </blockquote>

              <div className="pt-4 border-t border-white/5 space-y-1">
                <h3 className="text-lg font-heading font-semibold text-white tracking-wide uppercase">
                  PURVA KABRA
                </h3>
                <p className="text-xs text-[#A1A1AA] font-sans font-light">
                  Product Manager at LumberFi
                </p>
              </div>

              {/* Quiet Expertise text list */}
              <div className="pt-4 border-t border-white/[0.03] space-y-1.5">
                <span className="text-[8px] font-bold text-white/30 tracking-widest font-heading uppercase">
                  EXPERTISE
                </span>
                <p className="text-xs text-[#A1A1AA] font-sans font-light tracking-wide leading-relaxed">
                  Product Management &nbsp;•&nbsp; Design Thinking &nbsp;•&nbsp; Structured Thinking &nbsp;•&nbsp; Marketing & Sales &nbsp;•&nbsp; Operations & Processes &nbsp;•&nbsp; Founder Mindset &nbsp;•&nbsp; Career Guidance &nbsp;•&nbsp; Decision Making
                </p>
              </div>

              <div className="pt-3">
                <a
                  href="https://www.linkedin.com/in/purva-kabra-pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            {/* Right Column on Desktop, appears on top on Mobile */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 order-1 md:order-2"
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#111214] border border-white/5 shadow-2xl">
                <Image
                  src="/mentors/Purva.png"
                  alt="Purva Kabra - Product Manager"
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY MENTORSHIP MATTERS ================= */}
        <section className="py-16 md:py-20 border-t border-white/[0.03]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <span className="text-[9px] font-bold text-white/45 tracking-[0.2em] font-heading uppercase">
                WHY IT MATTERS
              </span>
              <h2 className="text-2xl md:text-3xl font-fancy font-light tracking-tight text-white mt-3">
                Guidance Over Resources
              </h2>
            </div>
            
            <div className="md:col-span-8 space-y-6 text-left">
              <p className="text-lg md:text-2xl font-fancy font-light italic leading-relaxed text-white/95">
                Information Creates Possibility. <br />
                <span className="text-white">Guidance Creates Growth.</span>
              </p>
              <p className="text-sm md:text-base text-[#A1A1AA] font-sans font-light leading-relaxed">
                The internet already contains endless resources. What many students need is perspective, support, and guidance from people who have already walked the path ahead. Facts are free, but contextual advice is what unlocks momentum.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: WHAT MENTORS BRING ================= */}
        <section className="py-16 md:py-20 border-t border-white/[0.03]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="mb-16 text-center"
          >
            <span className="text-[9px] font-bold text-white/40 tracking-[0.25em] font-heading uppercase block mb-3">
              THE IMPACT
            </span>
            <h2 className="text-2xl md:text-3xl font-fancy font-light tracking-tight text-white">
              What Mentors Bring
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className="p-6 md:p-8 bg-[#111214]/50 border border-white/5 rounded-2xl text-left flex flex-col justify-between hover:border-white/10 hover:bg-[#111214] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 animate-none">
                      <Icon className="w-4.5 h-4.5 text-white/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white font-heading tracking-wide uppercase mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] text-[#A1A1AA] leading-relaxed font-sans font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* ================= SECTION 5: BECOME A MENTOR ================= */}
        <section className="py-16 md:py-20 border-t border-white/[0.03] text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md space-y-6 flex flex-col items-center"
          >
            <span className="text-[9px] font-bold text-white/40 tracking-[0.2em] font-heading uppercase">
              JOIN THE MISSION
            </span>
            
            <h2 className="text-2xl md:text-3xl font-fancy font-light tracking-tight text-white leading-tight">
              Interested In Mentoring?
            </h2>
            
            <p className="text-xs text-[#A1A1AA] font-sans font-light leading-relaxed max-w-sm">
              Help students grow through guidance, experience, and support. Share your industry knowledge and shape the future generation of builders.
            </p>

            <a
              href="mailto:Support.lumoraspace@gmail.com?subject=Interested%20in%20Mentoring%20at%20Lumora"
              className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-[#EAEAEA] active:translate-y-px transition-all duration-300 shadow-md cursor-pointer animate-none"
            >
              <span>Apply As Mentor</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </motion.div>
        </section>

      </div>
    </section>
  )
}