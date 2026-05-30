"use client"

import { motion } from "framer-motion"
import { Map, BookOpen, Users, Compass, Code, BrainCircuit } from "lucide-react"

const problems = [
  {
    icon: Map,
    title: "Roadmap Confusion",
    description: "Endless paths, no clear direction on where to start or what to learn next."
  },
  {
    icon: BookOpen,
    title: "Tutorial Hell",
    description: "Watching hundreds of videos without ever building something on your own."
  },
  {
    icon: BrainCircuit,
    title: "Fear of Coding",
    description: "Intimidated by complex syntax and feeling like you aren't 'smart enough'."
  },
  {
    icon: Compass,
    title: "Lack of Mentorship",
    description: "Getting stuck on simple bugs for days with no one to ask for help."
  },
  {
    icon: Code,
    title: "No Practical Exposure",
    description: "Knowing the theory but failing to apply it to real-world projects."
  },
  {
    icon: Users,
    title: "Inconsistency",
    description: "Starting strong but losing motivation because you're learning alone."
  }
]

export function ProblemSection() {
  return (
    <section className="py-24 bg-background relative border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-medium tracking-tight mb-4 text-foreground">
            The Beginner's Struggle
          </h2>
          <p className="text-muted-foreground font-light">
            Learning to code is harder than it should be. We've all been there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <problem.icon className="h-5 w-5 text-foreground mb-4 opacity-80" strokeWidth={1.5} />
              <h3 className="text-base font-medium mb-2 text-foreground">{problem.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
