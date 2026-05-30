"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Logo } from "@/components/Logo"
import { Menu, X } from "lucide-react"
import SignInButton from "@/components/auth/SignInButton"

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Mentors", href: "/mentors" },
  { name: "Team", href: "/team" },
  { name: "Community", href: "/community" },
  { name: "Cohorts", href: "/cohorts" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-2xl flex items-center justify-between px-6 ${
        isScrolled || isOpen
          ? "bg-background/90 backdrop-blur-xl border border-border shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-2"
          : "bg-transparent border border-transparent py-4"
      }`}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
          <Logo size="md" />
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">Lumora</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <SignInButton />
        <Link href="/cohorts" className="group hidden sm:inline-flex items-center justify-center rounded-xl px-6 py-2 text-sm font-medium bg-primary text-primary-foreground border border-transparent shadow-[0_0_15px_-5px_rgba(14,165,233,0.4)] hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.6)] hover:bg-primary/90 transition-all duration-300">
          Join Waitlist
        </Link>

        {/* Hamburger Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-2 ml-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+10px)] right-0 w-64 bg-background border border-border rounded-2xl shadow-xl overflow-hidden flex flex-col p-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-xl transition-colors flex items-center justify-between group"
              >
                {link.name}
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary">→</span>
              </Link>
            ))}
            
            <div className="mt-2 pt-2 border-t border-border flex flex-col gap-2 sm:hidden">
              <SignInButton />
              <Link href="/cohorts" onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground border border-transparent hover:bg-primary/90 transition-all duration-300">
                Join Waitlist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
