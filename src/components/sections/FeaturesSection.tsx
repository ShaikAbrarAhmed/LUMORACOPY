"use client"

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useEffect, useRef, type ReactNode } from "react"
import {
  CheckCircle, Code2, Flame, Users, Zap,
  TerminalSquare, Video, BookOpen, AlertCircle,
  Rocket, Trophy
} from "lucide-react"

/* ─── Journey data ──────────────────────────────────────────── */
const journeySteps = [
  {
    step: "01", label: "THE CONFUSED STUDENT", title: "Stuck in tutorial hell.",
    description: "Starting from zero feels overwhelming. You watch hours of videos, but when you open a blank editor, you don't know what to do.",
    color: "#ef4444", glow: "rgba(239,68,68,0.3)", accent: "#fca5a5"
  },
  {
    step: "02", label: "MENTORSHIP", title: "Get unstuck instantly.",
    description: "Connect with mentors who have been exactly where you are. Get 1-on-1 guidance, code reviews, and a clear path forward.",
    color: "#0ea5e9", glow: "rgba(14,165,233,0.3)", accent: "#7dd3fc"
  },
  {
    step: "03", label: "REAL PROJECTS", title: "Stop watching. Start building.",
    description: "Move from theory to practice. Build real-world applications that you can actually show off on your resume.",
    color: "#6366f1", glow: "rgba(99,102,241,0.3)", accent: "#a5b4fc"
  },
  {
    step: "04", label: "COMMUNITY & ACCOUNTABILITY", title: "Grow alongside ambitious peers.",
    description: "Track your progress, build your streak, and collaborate with a community that pushes you to be your best every single day.",
    color: "#f97316", glow: "rgba(249,115,22,0.3)", accent: "#fdba74"
  },
  {
    step: "05", label: "CONSISTENT BUILDER 🚀", title: "From confused to confident.",
    description: "The result of the right ecosystem. You're no longer just learning—you're shipping, growing, and ready for your career.",
    color: "#8b5cf6", glow: "rgba(139,92,246,0.3)", accent: "#c4b5fd"
  },
  {
    step: "06", label: "CAREER SUCCESS", title: "Land your dream job.",
    description: "Nail your technical interviews with confidence. Get resume reviews, mock interviews, and referrals to top tech companies.",
    color: "#10b981", glow: "rgba(16,185,129,0.3)", accent: "#6ee7b7"
  },
]

/* ─── 3D tilt hook ──────────────────────────────────────────── */
function use3DTilt(strength = 12) {
  const ref = useRef<HTMLDivElement | null>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [strength, -strength]), { stiffness: 260, damping: 28 })
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-strength, strength]), { stiffness: 260, damping: 28 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
   const current = ref.current
    if (!current) return
    const r = current.getBoundingClientRect()
    rawX.set((e.clientX - r.left) / r.width - 0.5)
    rawY.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { rawX.set(0); rawY.set(0) }
  return { ref, rotateX, rotateY, onMove, onLeave }
}

/* ─── Card wrapper ──────────────────────────────────────────── */
function Card3D({ children, strength = 12, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const t = use3DTilt(strength)
  return (
    <motion.div
      ref={t.ref}
      onMouseMove={t.onMove}
      onMouseLeave={t.onLeave}
      style={{ rotateX: t.rotateX, rotateY: t.rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      className={`w-full h-full ${className}`}
    >
      {children}
    </motion.div>
  )
}

/* ─── Individual demo panels ────────────────────────────────── */

// Demo 1 — Confused student
function Demo1() {
  return (
    <Card3D>
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-red-50 to-red-50/50 border border-red-100 p-8 relative overflow-hidden flex flex-col justify-center"
        style={{ boxShadow: "0 40px 100px -20px rgba(239,68,68,0.18)" }}>
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-6 left-6 flex gap-1.5">
          {["bg-red-400", "bg-yellow-400", "bg-green-400"].map(c => <div key={c} className={`w-3 h-3 rounded-full ${c}`} />)}
        </motion.div>
        <div className="relative z-10">
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
            className="max-w-sm mx-auto w-full space-y-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100/60 mb-3">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <p className="text-sm text-slate-600 font-medium">Tutorial Loop</p>
            </div>
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }}
              className="space-y-3">
              <div className="p-4 bg-white/60 border border-red-100/50 rounded-2xl">
                <div className="h-3 w-full bg-red-100 rounded-lg mb-2" />
                <div className="h-3 w-2/3 bg-red-100 rounded-lg" />
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="p-4 bg-white/60 border border-red-100/50 rounded-2xl flex items-center gap-3">
                <TerminalSquare className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm text-red-600 font-mono">Error: undefined is not...</span>
              </motion.div>
              <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center gap-2 text-xs text-red-500 font-semibold pl-1">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Stuck in confusion
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      </div>
    </Card3D>
  )
}

// Demo 2 — Mentorship
function Demo2() {
  return (
    <Card3D>
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50/50 border border-sky-100 p-8 relative overflow-hidden flex flex-col items-center justify-center"
        style={{ boxShadow: "0 40px 100px -20px rgba(14,165,233,0.18)" }}>
        <div className="relative z-10 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-100/60 mb-3">
              <Users className="w-8 h-8 text-sky-600" />
            </div>
            <p className="text-sm text-slate-600 font-medium">1-on-1 Guidance</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="space-y-4">
            <div className="flex justify-end">
              <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-tr-none text-sm text-slate-600 max-w-[220px] border border-slate-200"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                How do I fix this routing bug?
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="flex items-end gap-2">
              <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.5, repeat: Infinity }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", boxShadow: "0 8px 20px rgba(14,165,233,0.4)" }}>
                M
              </motion.div>
              <div className="px-4 py-3 rounded-2xl rounded-tl-none text-white text-sm"
                style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", boxShadow: "0 12px 28px rgba(14,165,233,0.3)" }}>
                Check line 42! Let's pair-code it.
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}
              className="p-4 bg-white/70 border border-emerald-100/50 rounded-2xl flex items-start gap-3 mt-3"
              style={{ boxShadow: "0 8px 24px rgba(16,185,129,0.1)" }}>
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-emerald-700 font-medium">Problem solved! Code reviewed ✓</div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute -top-10 -right-10 w-52 h-52 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      </div>
    </Card3D>
  )
}

// Demo 3 — Projects
function Demo3() {
  return (
    <Card3D>
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-indigo-50 to-indigo-50/50 border border-indigo-100 p-8 relative overflow-hidden flex flex-col items-center justify-center"
        style={{ boxShadow: "0 40px 100px -20px rgba(99,102,241,0.18)" }}>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full max-w-sm z-10 relative">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100/60 mb-3">
              <Code2 className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-sm text-slate-600 font-medium">Real-World Project</p>
          </div>
          <div className="rounded-2xl p-6 border border-indigo-100/50 bg-white/70"
            style={{ boxShadow: "0 20px 50px rgba(99,102,241,0.15)" }}>
            <div className="flex items-center gap-3 mb-5">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">E-Commerce Platform</div>
                <div className="text-xs text-indigo-600 font-medium">React · Node.js</div>
              </div>
              <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-auto w-2.5 h-2.5 bg-emerald-400 rounded-full" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs text-slate-500 font-medium mb-2">
                <span>Progress</span><span className="text-indigo-600">85%</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div initial={{ width: "0%" }} animate={{ width: "85%" }} transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
                  className="h-full rounded-full" style={{ background: "linear-gradient(90deg,#6366f1,#8b5cf6)" }} />
              </div>
            </div>
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
              className="w-full mt-5 py-2.5 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", boxShadow: "0 8px 24px rgba(99,102,241,0.3)" }}>
              <Zap className="w-4 h-4" /> Deploy to Production
            </motion.button>
          </div>
        </motion.div>
        <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />
      </div>
    </Card3D>
  )
}

// Demo 4 — Community
function Demo4() {
  return (
    <Card3D>
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-orange-50 to-orange-50/50 border border-orange-100 p-8 relative overflow-hidden flex flex-col items-center justify-center"
        style={{ boxShadow: "0 40px 100px -20px rgba(249,115,22,0.18)" }}>
        <div className="w-full max-w-sm space-y-5 z-10 relative">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100/60 mb-3">
              <Flame className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-sm text-slate-600 font-medium">Build Your Streak</p>
          </div>
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="rounded-2xl p-5 flex items-center justify-between border border-orange-100/50 bg-white/70"
            style={{ boxShadow: "0 12px 30px rgba(249,115,22,0.1)" }}>
            <div className="flex items-center gap-4">
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.8, repeat: Infinity }}
                className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Flame className="w-6 h-6 text-orange-600" />
              </motion.div>
              <div>
                <div className="text-xs text-orange-600/70 font-bold uppercase tracking-wide">Streak</div>
                <div className="font-bold text-orange-600 text-2xl">21 Days</div>
              </div>
            </div>
            <div className="flex items-end gap-1.5 h-10">
              {[3, 5, 4, 7, 6, 8, 10].map((h, i) => (
                <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h * 4}px` }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="w-2.5 rounded-full" style={{ background: "linear-gradient(to top, #f97316, #fbbf24)" }} />
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
            className="rounded-2xl p-5 border border-slate-100/50 bg-white/70 text-center"
            style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.04)" }}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users className="w-5 h-5 text-sky-600" />
              <span className="text-sm font-semibold text-slate-900">Community Peers</span>
            </div>
            <div className="flex -space-x-2 justify-center mb-3">
              {["bg-sky-300", "bg-indigo-300", "bg-purple-300", "bg-pink-300"].map((bg, i) => (
                <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  className={`w-8 h-8 ${bg} rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white`}
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  {i + 1}
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-slate-500">Growing together</p>
          </motion.div>
        </div>
        <div className="absolute -top-14 -right-14 w-60 h-60 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      </div>
    </Card3D>
  )
}

// Demo 5 — Consistent builder
function Demo5() {
  return (
    <Card3D strength={8}>
      <div className="w-full h-full rounded-3xl relative overflow-hidden flex items-center justify-center"
        style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f172a 100%)", boxShadow: "0 40px 100px -20px rgba(139,92,246,0.45), 0 0 0 1px rgba(139,92,246,0.15)" }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,#a78bfa 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        {[120, 180, 240].map((sz, i) => (
          <motion.div key={i} animate={{ rotate: i % 2 === 0 ? 360 : -360 }} transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border"
            style={{ width: sz, height: sz, borderColor: "rgba(139,92,246,0.2)" }} />
        ))}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative z-10 text-center px-8 space-y-6">
          <motion.div animate={{ y: [0, -12, 0], rotateY: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(139,92,246,0.2)", border: "2px solid rgba(139,92,246,0.4)", boxShadow: "0 20px 60px rgba(139,92,246,0.4)" }}>
            <Rocket className="w-12 h-12 text-violet-300" />
          </motion.div>
          <div>
            <h4 className="text-3xl font-bold text-white mb-2">You are ready.</h4>
            <p className="text-violet-300/70 text-sm">Shipping code. Growing skills. Building the future.</p>
          </div>
          <div className="flex justify-center gap-3 flex-wrap">
            {["5 Projects", "200+ Hours", "Confident"].map((tag, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.15 }}
                className="px-4 py-2 rounded-full text-xs font-semibold text-violet-200"
                style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)" }}>
                ✓ {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15), transparent 70%)" }} />
      </div>
    </Card3D>
  )
}

// Demo 6 — Career success
function Demo6() {
  return (
    <Card3D>
      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-50/50 border border-emerald-100 p-8 relative overflow-hidden flex items-center justify-center"
        style={{ boxShadow: "0 40px 100px -20px rgba(16,185,129,0.2)" }}>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full max-w-xs z-10 relative text-center">
          <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity }}
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center"
            style={{ boxShadow: "0 12px 30px rgba(16,185,129,0.3)" }}>
            <Trophy className="w-8 h-8 text-emerald-600" />
          </motion.div>
          <div className="rounded-2xl p-6 border border-emerald-100/50 bg-white/70"
            style={{ background: "linear-gradient(135deg,#f0fdf4,#e0f2fe)", border: "1px solid rgba(16,185,129,0.2)", boxShadow: "0 24px 60px rgba(16,185,129,0.15)" }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}
              className="text-center mb-5">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-3">OFFER RECEIVED</div>
              <div className="font-bold text-emerald-900 text-xl mb-1">Senior Developer Role</div>
              <div className="text-sm text-emerald-700 font-semibold">Google · Mountain View</div>
            </motion.div>
            <div className="h-px bg-emerald-200/60 mb-5" />
            <div className="space-y-3">
              {["Technical interview passed ✓", "System design review passed ✓", "Mentor referral delivered ✓"].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.15 }}
                  className="flex items-center gap-3 text-sm text-emerald-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Celebration confetti */}
        {([
          ["#f472b6", "-30px", "80px", 0.2], ["#facc15", "40px", "-60px", 0.05], ["#60a5fa", "10px", "40px", 0.6],
          ["#34d399", "60px", "-20px", 0.8], ["#f97316", "-20px", "60px", 0.35],
        ] as [string, string, string, number][]).map(([col, x1, x2, delay], i) => (
          <motion.div key={i}
            animate={{ y: ["-10%", "110%"], x: [x1, x2], opacity: [0, 1, 1, 0], rotate: [0, 360] }}
            transition={{ duration: 2.2 + i * 0.25, repeat: Infinity, delay, ease: "easeIn" }}
            className="absolute top-0 w-3 h-3 rounded-full pointer-events-none"
            style={{ backgroundColor: col, left: `${18 + i * 15}%` }} />
        ))}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      </div>
    </Card3D>
  )
}

const DemoComponents = [Demo1, Demo2, Demo3, Demo4, Demo5, Demo6]

/* ─── Comparison Hero ──────────────────────────────────────── */
function ComparisonHero() {
  const lt = use3DTilt(6)
  const rt = use3DTilt(6)
  return (
    <div className="w-full max-w-5xl mx-auto mb-28 md:mb-36 rounded-[2rem] overflow-hidden"
      style={{ boxShadow: "0 60px 120px -30px rgba(14,165,233,0.12), 0 0 0 1px rgba(14,165,233,0.07)" }}>
      <div className="grid md:grid-cols-2">

        {/* Traditional */}
        <motion.div ref={lt.ref} onMouseMove={lt.onMove} onMouseLeave={lt.onLeave}
          style={{ rotateX: lt.rotateX, rotateY: lt.rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
          className="p-10 md:p-12 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 relative overflow-hidden flex flex-col items-center">
          <div className="text-center mb-8 z-10 relative">
            <h3 className="text-xl font-semibold text-slate-500">Traditional Courses</h3>
            <p className="text-sm text-slate-400 mt-1">Isolated, one-way learning.</p>
          </div>
          <div className="relative w-56 h-56 flex items-center justify-center z-10">
            <div className="w-16 h-16 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 z-20 relative"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.07)" }}>
              <Users className="w-6 h-6" />
            </div>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-slate-300 rounded-full">
              {["-top-4 left-1/2 -translate-x-1/2",
                "top-1/2 -right-4 -translate-y-1/2",
                "-bottom-4 left-1/2 -translate-x-1/2"
              ].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-9 h-9 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400`}
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
                  {i === 1 ? <BookOpen className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                </div>
              ))}
            </motion.div>
            <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }}
              className="absolute bg-white border border-slate-200 px-3 py-1.5 rounded-full text-xs text-slate-500 flex items-center gap-1.5 z-30"
              style={{ top: "38%", left: "58%", boxShadow: "0 4px 16px rgba(0,0,0,0.07)" }}>
              <AlertCircle className="w-3 h-3 text-slate-400" /> Stuck
            </motion.div>
          </div>
        </motion.div>

        {/* Ecosystem */}
        <motion.div ref={rt.ref} onMouseMove={rt.onMove} onMouseLeave={rt.onLeave}
          style={{
            rotateX: rt.rotateX, rotateY: rt.rotateY, transformStyle: "preserve-3d", perspective: 1000,
            background: "linear-gradient(135deg,#f0f9ff 0%,#eef2ff 100%)"
          }}
          className="p-10 md:p-12 relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(99,102,241,0.1),transparent 70%)" }} />
          <div className="text-center mb-8 z-10 relative">
            <h3 className="text-xl font-bold"
              style={{ background: "linear-gradient(90deg,#0ea5e9,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Our Ecosystem
            </h3>
            <p className="text-sm text-indigo-900/50 mt-1">Connected, continuous growth.</p>
          </div>
          <div className="relative w-56 h-56 flex items-center justify-center z-10">
            {[80, 110].map((r, i) => (
              <motion.div key={i} animate={{ rotate: i % 2 === 0 ? 360 : -360 }} transition={{ duration: 12 + i * 6, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border border-dashed"
                style={{ width: r * 2, height: r * 2, borderColor: i === 0 ? "rgba(14,165,233,0.2)" : "rgba(99,102,241,0.15)" }} />
            ))}
            <motion.div animate={{ boxShadow: ["0 0 0 0 rgba(14,165,233,0.4)", "0 0 0 18px rgba(14,165,233,0)", "0 0 0 0 rgba(14,165,233,0)"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-16 h-16 rounded-full flex items-center justify-center text-white z-20 relative"
              style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)" }}>
              <Users className="w-6 h-6" />
            </motion.div>
            {[
              { pos: "top-2 left-1/2 -translate-x-1/2", Icon: CheckCircle, col: "text-sky-500", border: "border-sky-200", glow: "rgba(14,165,233,0.18)" },
              { pos: "top-1/2 right-2 -translate-y-1/2", Icon: Users, col: "text-indigo-500", border: "border-indigo-200", glow: "rgba(99,102,241,0.18)" },
              { pos: "bottom-2 left-1/2 -translate-x-1/2", Icon: Code2, col: "text-sky-500", border: "border-sky-200", glow: "rgba(14,165,233,0.18)" },
              { pos: "top-1/2 left-2 -translate-y-1/2", Icon: Flame, col: "text-indigo-500", border: "border-indigo-200", glow: "rgba(99,102,241,0.18)" },
            ].map(({ pos, Icon, col, border, glow }, i) => (
              <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 + i * 0.15, type: "spring" }}
                whileHover={{ scale: 1.2 }}
                className={`absolute ${pos} w-11 h-11 bg-white ${border} border rounded-xl flex items-center justify-center ${col} z-20`}
                style={{ boxShadow: `0 8px 24px ${glow}` }}>
                <Icon className="w-5 h-5" />
              </motion.div>
            ))}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 224 224">
              {[[112, 112, 112, 24], [112, 112, 200, 112], [112, 112, 112, 200], [112, 112, 24, 112]].map(([x1, y1, x2, y2], i) => (
                <motion.line key={i} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke={i % 2 === 0 ? "#0ea5e9" : "#6366f1"} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.5" />
              ))}
            </svg>
            {[
              { cls: "top-1/4 left-1/4", col: "#38bdf8", delay: 0 },
              { cls: "bottom-1/4 right-1/4", col: "#818cf8", delay: 0.5 },
            ].map(({ cls, col, delay }, i) => (
              <motion.div key={i} animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay }}
                className={`absolute ${cls} w-3 h-3 rounded-full blur-[2px] z-10`} style={{ backgroundColor: col }} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

/* ─── Main Section ──────────────────────────────────────────── */
export default function FeaturesSection() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const els = document.querySelectorAll(".journey-step")
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            const idx = parseInt(entry.target.dataset.index ?? "0", 10)
            setActiveStep(idx)
          }
        })
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ActiveDemo = DemoComponents[activeStep]
  const step = journeySteps[activeStep]

  return (
    <section id="features" className="relative bg-[#F7FBFF] py-32 md:py-48 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-sky-100/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
          <span className="inline-block px-4 py-1.5 rounded-full text-sky-600 text-xs font-bold uppercase tracking-[0.3em] mb-6"
            style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)" }}>
            The Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-slate-900">
            From confused to{" "}
            <span style={{ background: "linear-gradient(90deg,#0ea5e9,#6366f1,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              confident.
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            We replaced the isolation of traditional courses with an ecosystem designed for real growth.
          </p>
        </motion.div>

        <ComparisonHero />

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start relative">

          {/* LEFT — scrolling text */}
          <div className="space-y-[30vh] md:space-y-[70vh] pb-[30vh] md:pb-[50vh]">
            {journeySteps.map((s, i) => {
              const D = DemoComponents[i]
              return (
                <div key={s.step} className="journey-step" data-index={i}>
                  {/* Mobile demo */}
                  <div className="md:hidden w-full h-[320px] mb-8">
                    <D />
                  </div>
                  <motion.div animate={{ opacity: activeStep === i ? 1 : 0.3, x: activeStep === i ? 0 : -10 }}
                    transition={{ duration: 0.4 }}>
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        animate={{ scale: activeStep === i ? 1 : 0.82 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold font-mono text-sm flex-shrink-0"
                        style={{
                          background: activeStep === i ? s.color : "#e2e8f0",
                          boxShadow: activeStep === i ? `0 8px 24px ${s.glow}` : "none",
                        }}>
                        {s.step}
                      </motion.div>
                      <motion.span animate={{ color: activeStep === i ? s.color : "#94a3b8" }}
                        className="uppercase tracking-[0.2em] text-xs font-bold">
                        {s.label}
                      </motion.span>
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-5">
                      {s.title}
                    </h3>
                    <p className="text-lg text-slate-500 leading-relaxed">{s.description}</p>
                    {activeStep === i && (
                      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }}
                        className="mt-8 h-0.5 rounded-full origin-left max-w-xs"
                        style={{ background: `linear-gradient(90deg,${s.color},${s.accent})` }} />
                    )}
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* RIGHT — sticky card (desktop only) */}
          <div className="hidden md:flex flex-col sticky top-[16vh] h-[68vh]">
            {/* Step dots */}
            <div className="flex items-center justify-between mb-5 px-1">
              <div className="flex gap-2 items-center">
                {journeySteps.map((_, i) => (
                  <motion.div key={i}
                    animate={{ scaleX: activeStep === i ? 2.2 : 1, backgroundColor: activeStep === i ? step.color : "#cbd5e1" }}
                    transition={{ duration: 0.3 }}
                    className="h-1 w-4 rounded-full origin-left cursor-pointer"
                    onClick={() => setActiveStep(i)} />
                ))}
              </div>
              <span className="text-xs text-slate-400 font-mono tabular-nums">{activeStep + 1} / {journeySteps.length}</span>
            </div>

            {/* Animated card swap */}
            <div className="flex-1 relative" style={{ perspective: 1400 }}>
              <AnimatePresence mode="wait">
                <motion.div key={activeStep}
                  initial={{ opacity: 0, y: 32, scale: 0.95, rotateX: -6 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: -32, scale: 0.95, rotateX: 6 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="absolute inset-0">
                  <ActiveDemo />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
