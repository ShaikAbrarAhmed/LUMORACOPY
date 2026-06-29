"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Logo } from "@/components/Logo"
import { useRouter, usePathname } from "next/navigation"
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

interface JoinLumoraButtonProps {
  className?: string;
  children: React.ReactNode;
}

function JoinLumoraButton({ className, children }: JoinLumoraButtonProps) {
  return (
    <Link href="/create-account" className={className}>
      {children}
    </Link>
  )
}

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full border-b ${
        isScrolled
          ? "bg-[#050505]/75 backdrop-blur-xl border-white/[0.06] py-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
          : "bg-transparent border-transparent py-7"
      }`}
    >
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 flex items-center justify-between">
        <div className="flex-1 flex items-center justify-start min-w-[280px]">
          <Link
  href="/"
  className="flex items-center gap-4 group select-none"
>



  <Logo
    variant="icon"
    size="lg"
    flat
  />

  <span
    className="
      font-heading
      font-semibold
      text-[14px]
      sm:text-[16px]
      md:text-[18px]
      tracking-[0.3em]
      text-white
      uppercase
    "
  >
    LUMORA
  </span>
</Link>
        </div>

        {/* Centered navigation links (Desktop only) */}
        <nav className="hidden lg:flex items-center justify-center gap-9">
          {[
            { label: "HOME", href: "/" },
            { label: "FEATURES", href: "/features" },
            { label: "COMMUNITY", href: "/community" },
            { label: "PROGRAMS", href: "/cohorts" },
            { label: "MENTORS", href: "/mentors" },
            { label: "TEAM", href: "/team" },
          ].map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-[10px] font-semibold font-heading tracking-[0.2em] text-[#A8A8A8] hover:text-white transition-colors duration-200 uppercase py-1 select-none"
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex-1 flex items-center justify-end gap-4">
          {status === "loading" ? (
            <div className="hidden lg:block w-20 h-7 bg-muted animate-pulse rounded-full" />
          ) : session && session.user ? (
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 max-w-[150px] overflow-hidden">
                {session.user.image && (
                  <img
                    src={session.user.image}
                    alt="Profile Avatar"
                    className="w-6 h-6 rounded-full border border-border flex-shrink-0"
                  />
                )}
                <span className="text-[10px] font-semibold font-heading tracking-wider text-white truncate">
                  {session.user.name}
                </span>
              </div>
              <button
                onClick={() => signOut()}
                className="text-[10px] font-bold font-heading tracking-wider text-red-400 hover:text-red-500 transition-colors cursor-pointer"
              >
                LOG OUT
              </button>
            </div>
          ) : (
            <>
              <JoinLumoraButton
                className="hidden lg:inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 px-5 py-1.8 text-[10px] font-bold font-heading text-white hover:bg-white/5 hover:border-white/35 transition-all duration-200 select-none active:translate-y-px"
              >
                <span>Join Lumora</span>
                <span className="text-[12px] mt-[-1px]">→</span>
              </JoinLumoraButton>
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
                className="absolute top-[calc(100%+12px)] right-0 w-[260px] md:w-[280px] bg-card/90 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.5)] p-3 flex flex-col gap-1.5 z-50 origin-top-right"
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

                  {/* Mentors */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/mentors"
                      className="w-full text-left px-3.5 py-2.5 rounded-xl text-[14px] font-semibold text-foreground hover:bg-muted hover:text-primary transition-all flex items-center justify-between group"
                    >
                      <span>Mentors</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">→</span>
                    </Link>
                  </motion.div>

                  {/* Team */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/team"
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
                      <JoinLumoraButton
                        className="group w-full py-2.5 px-4 bg-primary hover:bg-primary/95 text-[#050505] text-xs font-bold rounded-xl transition-all shadow-sm shadow-primary/20 hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span className="relative flex h-2 w-2">
                          <motion.span
                            className="absolute inset-0 rounded-full bg-secondary/80"
                            animate={{
                              scale: [1, 2.5],
                              opacity: [0.8, 0],
                            }}
                            transition={{
                              duration: 2.2,
                              ease: "easeOut",
                              repeat: Infinity,
                              repeatDelay: 0.6,
                            }}
                          />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary shadow-[0_0_8px_rgba(129,140,248,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_14px_rgba(129,140,248,0.9)] transition-all duration-300" />
                        </span>
                        <span>Join Lumora →</span>
                      </JoinLumoraButton>
                    </motion.div>
                  )}
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
    </header>
  )
}
