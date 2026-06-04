"use client"

import { motion } from "framer-motion"
import { Compass, BookOpen, Users, TrendingUp } from "lucide-react"

const problems = [
  {
    icon: Compass,
    title: "No Clear Direction",
    description: "Too many roadmaps. Too many opinions."
  },
  {
    icon: BookOpen,
    title: "Tutorial Overload",
    description: "Watching content without building."
  },
  {
    icon: Users,
    title: "Learning Alone",
    description: "No support system or peer group."
  },
  {
    icon: TrendingUp,
    title: "Lack of Accountability",
    description: "Starting strong and losing momentum."
  }
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-28 bg-background relative overflow-hidden border-t border-[#E5E7EB]/40">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/3 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.25em] text-[11px] text-primary font-bold mb-4 block"
          >
            THE REAL PROBLEM
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-headings leading-[1.15] mb-6"
          >
            Most Students Don't Need More Tutorials.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              They Need Direction.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto"
          >
            The internet has endless resources.
            <br className="hidden sm:inline" />
            But most beginners struggle because they don't know what to learn, where to start, or how to stay consistent.
          </motion.p>
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-3xl bg-white/40 border border-[#E5E7EB]/50 shadow-[0_8px_30px_rgba(11,16,32,0.015)] backdrop-blur-md hover:bg-white/80 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(91,95,239,0.05)] transition-all duration-300"
            >
              {/* Glow accent inside the card on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/15 border border-[#E5E7EB]/60 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors duration-300">
                    <problem.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-headings tracking-tight group-hover:text-primary transition-colors duration-300">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-[15px] text-muted-foreground font-light leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
