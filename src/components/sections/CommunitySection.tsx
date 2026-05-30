"use client"

import { motion } from "framer-motion"
import { MessageSquare, Zap, Target } from "lucide-react"
import Image from "next/image"

const chatMessages = [
  { sender: "Abrar", time: "Just now", text: "Beginners deserve clarity, not confusion 🚀", align: "left", avatar: "/team/Abrar.png", initial: "A" },
  { sender: "Ashwini", time: "2m ago", text: "Let’s build the kind of community we never had while learning 💙", align: "right", avatar: "/team/Ashwini2.jpeg", initial: "A" },
  { sender: "Yuvaraj", time: "5m ago", text: "Imagine how many students we can help stay consistent ✨", align: "left", avatar: "/team/Yuvi.jpeg", initial: "Y" },
  { sender: "Mounika", time: "Today", text: "No more learning alone. That’s the goal 🌱", align: "right", avatar: "/team/Mouni2.jpeg", initial: "M" },
  { sender: "Rajitha & Jasmeet", time: "Team Chat", text: "Lumora is for every student who feels lost but still wants to grow 💫", align: "left", avatar: "/team/Raji2.jpeg", initial: "R&J" },
  { sender: "Sruthi", time: "Today", text: "We’re creating a space where beginners finally feel seen ✨", align: "right", avatar: "/team/Sruthi.jpeg", initial: "S" },
]

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative overflow-hidden py-32 bg-[#F7FBFF]"
    >

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-100/40 blur-[120px] rounded-full" />

        {/* Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-sky-300/40 blur-[1px]"
            style={{
              width: `${(i % 4) + 2}px`,
              height: `${(i % 4) + 2}px`,
              top: `${(i * 13) % 100}%`,
              left: `${(i * 17) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="text-sky-500 uppercase tracking-[0.3em] text-xs font-semibold">
              OUR STORY
            </span>

            <h2 className="mt-5 text-5xl md:text-6xl font-semibold tracking-[-0.06em] leading-[1] text-[#0F172A]">
              We built the guidance
              <br />
              we once needed.
            </h2>

            <div className="mt-10 space-y-8">

              <p className="text-xl leading-relaxed text-[#64748B]">
                Most of us came from Tier-2 and Tier-3 colleges
                where learning tech often felt confusing,
                isolating, and directionless.
              </p>

              <p className="text-xl leading-relaxed text-[#64748B]">
                There were endless tutorials but very little
                clarity, mentorship, or practical exposure.
              </p>

              <p className="text-xl leading-relaxed text-[#64748B]">
                So we started Lumora — a beginner-first ecosystem
                designed to help students learn practical skills,
                build real projects, stay consistent, and grow
                with a supportive community beside them.
              </p>

            </div>

            {/* Points */}

            <ul className="mt-16 space-y-10">

              {[
                {
                  icon: MessageSquare,
                  title: "Learn Together",
                  desc: "Connect with students facing the same struggles and journey as you.",
                },

                {
                  icon: Zap,
                  title: "Get Real Guidance",
                  desc: "Receive mentorship and support instead of learning alone.",
                },

                {
                  icon: Target,
                  title: "Stay Consistent",
                  desc: "Build confidence through accountability and growth.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-5">

                  <div
                    className="
                      w-14 h-14 rounded-2xl
                      bg-white border border-sky-100
                      flex items-center justify-center
                      shrink-0 shadow-sm
                    "
                  >
                    <item.icon
                      className="h-6 w-6 text-sky-500"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>

                    <h4 className="font-semibold text-lg text-[#0F172A] mb-2">
                      {item.title}
                    </h4>

                    <p className="text-[#64748B] leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </li>
              ))}
            </ul>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >

            <div
              className="
                rounded-[40px]
                border border-sky-100
                p-8
                shadow-[0_20px_80px_rgba(125,211,252,0.10)]
                relative bg-white/80 backdrop-blur-2xl
                overflow-hidden
              "
            >

              {/* Pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#0ea5e9_1px,transparent_1px)] [background-size:24px_24px]" />

              {/* Glow */}
              <div className="absolute top-10 right-10 w-40 h-40 bg-sky-100/40 blur-[80px] rounded-full" />

              {/* Chats */}
              <div className="relative z-10 flex flex-col gap-5">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 100 }}
                    className={`flex w-full ${msg.align === "right" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-end gap-3 max-w-[90%] ${msg.align === "right" ? "flex-row-reverse" : "flex-row"}`}>
                      
                      {/* Avatar Mini */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-sky-200 overflow-hidden shadow-sm relative bg-sky-50 flex items-center justify-center text-[10px] font-bold text-sky-500">
                        {msg.avatar ? (
                          <Image src={msg.avatar} alt={msg.sender} fill className="object-cover" />
                        ) : (
                          msg.initial
                        )}
                      </div>

                      {/* Message Bubble */}
                      <div className={`flex flex-col ${msg.align === "right" ? "items-end" : "items-start"}`}>
                        <div className="flex items-baseline gap-2 mb-1 px-1">
                          <span className="text-xs font-semibold text-slate-700">{msg.sender}</span>
                          <span className="text-[10px] text-slate-400">{msg.time}</span>
                        </div>
                        
                        <div className={`
                          px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-[0_4px_20px_rgba(15,23,42,0.04)] relative
                          ${msg.align === "left" 
                            ? "bg-white border border-sky-100 text-slate-700 rounded-bl-none" 
                            : "bg-gradient-to-br from-sky-500 to-violet-500 text-white border border-sky-400/20 rounded-br-none"
                          }
                        `}>
                          {msg.text}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ))}

                {/* Status */}
                <div className="pt-4 flex items-center justify-end gap-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-[#64748B] text-sm font-medium">
                    Team Lumora Building Live
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}