"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const LiquidMesh = dynamic(() => import("@/components/sections/LiquidMesh"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#050505] opacity-20" />
})

export default function HeroSection() {
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const target = document.getElementById("problem")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Animation variants for slow-motion, cinematic sequential entrance
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
        ease: [0.16, 1, 0.3, 1] as const, // Luxury cubic-bezier easing (Apple / Linear style)
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
      {/* Generous whitespace and padding to allow typography to dominate the experience */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center py-12">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Label tag: Small, elegant, tracked-out in Space Grotesk */}
          <motion.div
            variants={childVariants}
            className="flex flex-col items-center mb-10"
          >
            <span className="text-[10px] font-semibold text-[#A8A8A8] tracking-[0.35em] font-heading uppercase">
              FROM CONFUSED TO CONFIDENT
            </span>
            {/* Elegant thin line indicator beneath label */}
            <div className="w-24 h-px bg-white/20 mt-4" />
          </motion.div>

          {/* Main Heading: Majestic, massive in Cormorant Garamond */}
          <motion.h1
            variants={childVariants}
            className="text-7xl sm:text-8xl md:text-[10.5rem] font-fancy font-light tracking-[0.03em] leading-[0.85] text-white my-4 select-text drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]"
          >
            LUMORA
            <span className="sr-only"> – The Student Growth Ecosystem for Ambitious Builders</span>
          </motion.h1>

          {/* Tagline: Center-aligned, elegant Cormorant Garamond */}
          <motion.p
            variants={childVariants}
            className="mt-10 text-2xl md:text-3.5xl font-fancy font-light tracking-tight text-white/95 leading-[1.35] drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]"
          >
            Talent exists everywhere.
            <br />
            <span className="italic">Guidance doesn't.</span>
          </motion.p>

          {/* Vertical Separator Line
          <motion.div
            variants={childVariants}
            className="h-14 w-px bg-white/10 my-10"
          /> */}

          {/* Supporting Copy: Clean, centered Inter copy with updated editorial text */}
          <motion.p
            variants={childVariants}
            className="max-w-[480px] text-muted-foreground text-xs md:text-sm leading-relaxed font-light font-sans select-text opacity-70 tracking-wide"
          >
            Helping students grow through mentorship, projects, hackathons, Structured Courses and community.
          </motion.p>

          {/* Action CTAs in pill shapes */}
          <motion.div
            variants={childVariants}
            className="mt-12 flex flex-row gap-5 items-center justify-center"
          >
            <Link
              href="/create-account"
              className="h-11 px-8 rounded-full bg-white text-black font-semibold text-xs tracking-wide transition-all hover:bg-white/95 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-1.5 active:translate-y-px"
            >
              <span>Join Lumora</span>
              <span className="text-[14px]">→</span>
            </Link>
            
            <button
              onClick={handleExploreClick}
              className="h-11 px-8 rounded-full border border-white/12 bg-white/[0.01] text-white font-semibold text-xs tracking-wide transition-all hover:bg-white/5 hover:border-white/25 backdrop-blur-md flex items-center justify-center active:translate-y-px"
            >
              Explore The Vision
            </button>
          </motion.div>
        </motion.div>

      </div>

      {/* 3. Static Background Silk Flow Image + WebGL Animated Mesh (z-0 layer behind text) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#050505]">
        <Image
          src="/silk_flow_bg.png"
          alt="Cinematic silk flow design representing student growth and transformation journey"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-screen"
        />
        <LiquidMesh />
      </div>

      {/* 4. Mouse Scroll Indicator at Bottom Center (z-30 layer) */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-25 z-30 pointer-events-none">
        <div className="w-5 h-8 rounded-full border border-white/20 p-1 flex justify-center">
          <motion.div 
            animate={{ 
              y: [0, 8, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.2, 
              ease: "easeInOut" 
            }}
            className="w-1 h-1.5 bg-white rounded-full"
          />
        </div>
      </div> */}

    </section>
  )
}