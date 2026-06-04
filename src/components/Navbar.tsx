"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Logo } from "@/components/Logo"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

// --- Custom Animated Path Component for Dynamic Hamburger -> X Icon ---
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
)

export function Navbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { data: session, status } = useSession()
  
  const navWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navWrapperRef.current && !navWrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Framer Motion Dropdown Variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: -10,
    },
    show: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 380,
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.05
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      y: -10,
      transition: { 
        duration: 0.15,
        staggerChildren: 0.03,
        staggerDirection: -1
      } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 10 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 200,
        damping: 18
      }
    },
    exit: { 
      opacity: 0, 
      x: 5,
      transition: { 
        duration: 0.1 
      } 
    }
  }

  return (
    <header
      className={`fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[92%] max-w-5xl rounded-full flex items-center justify-between pl-4 md:pl-6 pr-2.5 md:pr-3 py-2 md:py-2.5 bg-white/75 backdrop-blur-xl border border-border/70 ${
        isScrolled
          ? "shadow-[0_12px_40px_rgba(15,23,42,0.08)] border-border bg-white/85"
          : "shadow-[0_8px_32px_rgba(15,23,42,0.03)]"
      }`}
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
          <Logo size="md" className="transition-transform duration-300 group-hover:scale-105" />
          <span className="font-heading font-semibold text-lg tracking-tight text-foreground transition-colors group-hover:text-primary">
            Lumora
          </span>
        </Link>
      </div>

      {/* Centered navigation links (Desktop only) */}
      <nav className="hidden lg:flex items-center gap-8">
        <Link
          href="/features"
          className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Features
        </Link>
        <Link
          href="/community"
          className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Community
        </Link>
        <Link
          href="/cohorts"
          className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Cohorts
        </Link>
        <Link
          href="/team"
          className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Team
        </Link>
        <a
          href="mailto:Support.lumoraspace@gmail.com"
          className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Contact
        </a>
      </nav>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {status === "loading" ? (
          <div className="hidden lg:block w-20 h-8 bg-muted animate-pulse rounded-full" />
        ) : session && session.user ? (
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 max-w-[150px] overflow-hidden">
              {session.user.image && (
                <img
                  src={session.user.image}
                  alt="Profile Avatar"
                  className="w-7 h-7 rounded-full border border-border flex-shrink-0"
                />
              )}
              <span className="text-xs font-semibold text-foreground truncate">
                {session.user.name}
              </span>
            </div>
            <button
              onClick={() => signOut()}
              className="text-xs font-semibold text-red-500 hover:text-red-600 transition-colors cursor-pointer"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <Link
              href="/create-account"
              className="hidden lg:inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-200 shadow-sm shadow-primary/25 hover:shadow-md hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Join Lumora
            </Link>
          </>
        )}

        {/* Dynamic Hamburger Menu Toggle with Anchored Floating Dropdown */}
        <div ref={navWrapperRef} className="relative flex items-center lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:p-2.5 rounded-full hover:bg-muted text-foreground transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg width="18" height="18" viewBox="0 0 23 23">
              <Path
                animate={isOpen ? { d: "M 3 16.5 L 17 2.5" } : { d: "M 2 4.5 L 20 4.5" }}
                transition={{ duration: 0.3 }}
              />
              <Path
                d="M 2 11.5 L 20 11.5"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <Path
                animate={isOpen ? { d: "M 3 2.5 L 17 16.5" } : { d: "M 2 18.5 L 20 18.5" }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>

          {/* ================= FLOATING GLASSMORPHISM DROPDOWN PANEL ================= */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute top-[calc(100%+12px)] right-0 w-[260px] md:w-[280px] bg-white/90 backdrop-blur-xl border border-border/70 rounded-2xl shadow-[0_16px_48px_rgba(15,23,42,0.1)] p-3 flex flex-col gap-1.5 z-50 origin-top-right"
              >
                
                {/* --- Primary Navigation --- */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-bold text-slate-400 tracking-widest px-3 py-1.5 uppercase select-none block">
                    Primary Navigation
                  </span>

                  {/* Features */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/features"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl text-[14px] font-semibold text-foreground hover:bg-muted hover:text-primary transition-all flex items-center justify-between group"
                    >
                      <span>Features</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">→</span>
                    </Link>
                  </motion.div>

                  {/* Community */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/community"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl text-[14px] font-semibold text-foreground hover:bg-muted hover:text-primary transition-all flex items-center justify-between group"
                    >
                      <span>Community</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">→</span>
                    </Link>
                  </motion.div>

                  {/* Cohorts */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/cohorts"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl text-[14px] font-semibold text-foreground hover:bg-muted hover:text-primary transition-all flex items-center justify-between group"
                    >
                      <span>Cohorts</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">→</span>
                    </Link>
                  </motion.div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border/50 my-1" />

                {/* --- Secondary Navigation --- */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-bold text-slate-400 tracking-widest px-3 py-1.5 uppercase select-none block">
                    Secondary Navigation
                  </span>

                  {/* Team */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/team"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl text-[14px] font-semibold text-foreground hover:bg-muted hover:text-primary transition-all flex items-center justify-between group"
                    >
                      <span>Team</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">→</span>
                    </Link>
                  </motion.div>

                  {/* Contact */}
                  <motion.div variants={itemVariants}>
                    <a
                      href="mailto:Support.lumoraspace@gmail.com"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl text-[14px] font-semibold text-foreground hover:bg-muted hover:text-primary transition-all flex items-center justify-between group"
                    >
                      <span>Contact</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">→</span>
                    </a>
                  </motion.div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border/50 my-1" />

                {/* --- Actions --- */}
                <div className="flex flex-col gap-1.5 mt-1">
                  <span className="text-[9px] font-bold text-slate-400 tracking-widest px-3 py-0.5 uppercase select-none block">
                    Actions
                  </span>

                  {/* Login state */}
                  {status === "loading" ? (
                    <motion.div variants={itemVariants} className="px-1">
                      <div className="h-8 bg-slate-200 animate-pulse rounded-lg" />
                    </motion.div>
                  ) : session && session.user ? (
                    <motion.div variants={itemVariants} className="px-1">
                      <div className="flex items-center justify-between gap-3 p-2 bg-muted border border-border/40 rounded-xl">
                        <div className="flex items-center gap-2 overflow-hidden">
                          {session.user.image && (
                            <img
                              src={session.user.image}
                              alt="Profile Avatar"
                              className="w-7 h-7 rounded-full border border-border flex-shrink-0"
                            />
                          )}
                          <span className="text-xs font-semibold text-foreground truncate">
                            {session.user.name}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            signOut()
                            setIsOpen(false)
                          }}
                          className="text-[10px] font-bold text-red-500 hover:text-red-600 transition-colors flex-shrink-0 cursor-pointer"
                        >
                          Log Out
                        </button>
                      </div>
                    </motion.div>
                  ) : null}

                  {!session && (
                    <motion.div variants={itemVariants} className="px-1">
                      <Link
                        href="/create-account"
                        onClick={() => setIsOpen(false)}
                        className="w-full py-2.5 px-4 bg-primary hover:bg-primary/95 text-white text-xs font-bold rounded-xl transition-all shadow-sm shadow-primary/20 hover:shadow-md text-center block cursor-pointer"
                      >
                        Join Lumora →
                      </Link>
                    </motion.div>
                  )}
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
