"use client"

import { motion } from "framer-motion"
import { Compass, BookOpen, Users, TrendingUp } from "lucide-react"

const problems = [
  {
    icon: Compass,
    title: "No Clear Direction",
    description: "Too many roadmaps. Too many opinions. Beginners struggle because they don't know what to learn next or how to filter high-quality information.",
    isHero: true
  },
  {
    icon: BookOpen,
    title: "Tutorial Overload",
    description: "Watching content passively without shipping code. Escaping the copy-paste loop is the first step to true builder confidence.",
    isHero: false
  },
  {
    icon: Users,
    title: "Learning Alone",
    description: "Coding in isolation with no code reviews, system critiques, or peer support squad.",
    isHero: false
  },
  {
    icon: TrendingUp,
    title: "Lack of Accountability",
    description: "Starting strong on weekends and losing daily momentum as work friction rises.",
    isHero: false
  }
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-20 px-6 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/3 blur-[150px] rounded-full" />
      </div>

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: STICKY THESIS (5 cols) ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase block">
              THE REAL PROBLEM
            </span>
            <h2 className="text-4xl md:text-5xl font-fancy font-light text-headings tracking-tight leading-tight max-w-md">
              Most Students Don&apos;t Lack Talent.
              <br />
              <span className="text-muted-foreground font-light">They lack direction.</span>
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed max-w-md">
              The internet has endless resources. But most beginners struggle because they don&apos;t know what to learn, where to start, or how to stay consistent.
            </p>
            
            <div className="pt-8 border-t border-white/5 space-y-4 max-w-md">
              <p className="text-2xl font-fancy font-light italic text-white/90 leading-relaxed">
                &ldquo;Learning alone is a design flaw.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground/60 leading-relaxed font-light">
                Traditional education platforms sell content catalogs, leaving students to navigate the complex engineering roadmap in isolation.
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CARDS STACK WITH HIERARCHY (7 cols) ================= */}
          <div className="lg:col-span-7 space-y-6">
            {problems.map((problem, i) => {
              const Icon = problem.icon
              return (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className={`group relative rounded-3xl backdrop-blur-md transition-all duration-300 ${
                    problem.isHero 
                      ? "p-8 md:p-10 bg-[#111214] border border-primary/25 shadow-[0_20px_50px_rgba(255,255,255,0.015)] hover:border-primary/45"
                      : "p-6 bg-[#111214]/40 border border-white/10 hover:bg-[#111214] hover:border-white/20 hover:shadow-2xl"
                  }`}
                >
                  {/* Glow accent inside the hero card */}
                  {problem.isHero && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-100 pointer-events-none" />
                  )}

                  <div className="relative z-10 flex flex-col md:flex-row gap-5 items-start">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      problem.isHero
                        ? "bg-primary/10 border border-primary/20 text-primary"
                        : "bg-white/5 border border-white/10 text-slate-400 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:text-primary"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-2 text-left">
                      <h3 className={`font-semibold tracking-tight transition-colors duration-300 ${
                        problem.isHero 
                          ? "text-xl text-white" 
                          : "text-lg text-headings group-hover:text-primary"
                      }`}>
                        {problem.title}
                      </h3>
                      <p className={`font-light leading-relaxed ${
                        problem.isHero 
                          ? "text-sm text-slate-300" 
                          : "text-xs md:text-sm text-slate-400"
                      }`}>
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
