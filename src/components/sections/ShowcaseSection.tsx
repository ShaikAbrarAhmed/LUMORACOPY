"use client"

import { motion } from "framer-motion"

export function ShowcaseSection() {
  return (
    <section className="py-16 md:py-20 px-6 relative overflow-hidden bg-transparent border-t border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-left mb-12 space-y-3">
          <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase block">
            DASHBOARD WORKSPACE
          </span>
          <h2 className="text-3xl md:text-5xl font-fancy font-light tracking-tight text-headings">
            Built for Action.
          </h2>
          <p className="text-muted-foreground font-light text-base md:text-lg max-w-xl">
            A next-generation dashboard that keeps you engaged and accountable.
          </p>
        </div>

        <div className="relative mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-t-3xl border-t border-x border-white/5 bg-[#0a0a0a]/50 p-2 md:p-4 shadow-[0_24px_70px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div className="rounded-lg overflow-hidden bg-card border border-border relative min-h-[360px] md:min-h-0 md:aspect-[16/10] flex flex-col">
              {/* Header / Nav area */}
              <div className="h-12 border-b border-border flex items-center px-4 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                </div>
                <div className="h-6 w-48 bg-background rounded-md border border-border flex items-center px-2">
                   <div className="w-3 h-3 rounded-sm bg-border" />
                </div>
              </div>
              
              {/* Layout body */}
              <div className="flex flex-1 p-4 gap-4">
                {/* Sidebar */}
                <div className="w-48 hidden md:flex flex-col gap-2 border-r border-border pr-4">
                  <div className="h-6 w-full bg-secondary rounded flex items-center px-2 gap-2">
                    <div className="w-3 h-3 rounded-sm bg-border" />
                    <div className="h-2 w-16 bg-border rounded-sm" />
                  </div>
                  <div className="h-6 w-full rounded flex items-center px-2 gap-2">
                    <div className="w-3 h-3 rounded-sm bg-border" />
                    <div className="h-2 w-20 bg-border rounded-sm" />
                  </div>
                  <div className="h-6 w-full rounded flex items-center px-2 gap-2">
                    <div className="w-3 h-3 rounded-sm bg-border" />
                    <div className="h-2 w-12 bg-border rounded-sm" />
                  </div>
                </div>
                
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* Top stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-20 rounded bg-background border border-border p-3 flex flex-col justify-between">
                        <div className="h-2 w-12 bg-border rounded-sm" />
                        <div className="h-5 w-16 bg-foreground/80 rounded-sm" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Large visual area */}
                  <div className="flex-1 rounded bg-background border border-border p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-3 w-24 bg-border rounded-sm" />
                      <div className="h-6 w-20 bg-secondary rounded border border-border" />
                    </div>
                    {/* Simulated Code/Terminal area */}
                    <div className="flex-1 bg-card rounded border border-border p-4 font-mono text-[10px] text-muted-foreground/50 space-y-2">
                      <div className="flex gap-2"><span className="text-primary/70">import</span> <span>{'{'} createClient {'}'}</span> <span className="text-primary/70">from</span> <span>'@lumora/client'</span></div>
                      <div className="h-2" />
                      <div className="flex gap-2"><span className="text-primary/70">const</span> <span>lumora</span> = <span>createClient()</span></div>
                      <div className="h-2" />
                      <div className="flex gap-2"><span className="text-primary/70">await</span> <span>lumora.progress.update({'{'} completed: true {'}'})</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
