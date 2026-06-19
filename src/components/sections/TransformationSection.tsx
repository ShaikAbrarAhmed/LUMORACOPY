"use client"

import { motion } from "framer-motion"
import { Compass, Target, Zap, Sparkles, Code2, ArrowDown } from "lucide-react"

export default function TransformationSection() {
  const steps = [
    { label: "Lost", icon: Compass, desc: "Roadmap overload & tutorial hell" },
    { label: "Direction", icon: Target, desc: "Single, actionable build milestones" },
    { label: "Consistency", icon: Zap, desc: "Daily co-working standup habits" },
    { label: "Confidence", icon: Sparkles, desc: "Shipping verified proofs of concept" },
    { label: "Builder", icon: Code2, desc: "Deploying production-ready creations" },
  ]

  // SVG Line Animation Variants
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  }

  return (
    <section 
      className="relative py-16 md:py-20 px-6 overflow-hidden border-t border-white/5"
      style={{
        background: "linear-gradient(180deg, #0A0A0A, #111111, #0A0A0A)"
      }}
    >
      
      {/* Background Soft Ambient Grids and Glows */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4 block">
            TRANSFORMATION FRAMEWORK
          </span>
          <h2 className="text-3xl md:text-5xl font-fancy font-light text-headings tracking-tight leading-tight">
            The Path Of Transformation
          </h2>
        </div>

        {/* ================= SVG PATH & ROADMAP GRAPH ================= */}
        <div className="relative max-w-4xl mx-auto mb-12">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute top-[28px] left-[6%] right-[6%] h-[1.5px] hidden md:block overflow-hidden pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <motion.line
                x1="0" y1="0" x2="100%" y2="0"
                stroke="url(#path-glow-grad)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="path-glow-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
                  <stop offset="50%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--primary)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
            {steps.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center w-full md:w-1/5 text-center group"
              >
                {/* Node Sphere */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center border border-white/5 bg-card/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md group-hover:border-primary/25 group-hover:shadow-[0_0_15px_rgba(217,217,217,0.15)] transition-all duration-300 relative">
                  {/* Glowing core for Active State */}
                  {i > 0 && (
                    <div className="absolute inset-0 rounded-full bg-primary/2 blur-md group-hover:bg-primary/5 transition-colors" />
                  )}
                  <node.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h4 className="mt-4 font-bold text-sm text-headings tracking-tight">{node.label}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-[130px] font-light">
                  {node.desc}
                </p>

                {/* Mobile connector down arrow */}
                {i < steps.length - 1 && (
                  <div className="md:hidden mt-4 text-muted-foreground/20">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= EMOTIONAL CALLOUT TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-xl mx-auto space-y-4 pt-10 border-t border-white/5"
        >
          {/* Subtle Quote Indicator */}
          <div className="text-3xl font-heading font-black text-primary/20 leading-none select-none">“</div>
          
          <p className="text-xl md:text-2xl font-heading font-medium tracking-tight text-headings leading-relaxed">
            Not another tutorial.
            <br />
            Not another course.
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            A structured path toward becoming a builder.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
