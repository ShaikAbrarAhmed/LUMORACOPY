"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-28 relative bg-background flex justify-center items-center overflow-hidden">
      {/* Background glow behind CTA panel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-white/40 border border-[#E5E7EB]/60 p-12 md:p-16 text-center shadow-[0_12px_40px_rgba(11,16,32,0.02)] backdrop-blur-xl"
        >
          {/* Subtle inside ambient glows */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/3 blur-[60px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary/5 blur-[60px] rounded-full" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-headings mb-6"
            >
              Build With People Who Get It.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-light leading-relaxed"
            >
              Join a community built for beginners who want clarity, confidence, and real growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <Link
                href="/cohorts"
                className="w-full sm:w-auto btn-primary group inline-flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
