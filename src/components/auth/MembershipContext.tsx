"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSession, signIn } from "next-auth/react"
import { Sparkles, Users, Rocket, TrendingUp } from "lucide-react"

interface MembershipContextType {
  requireMembership: (action: string, onApprove: () => void, data?: any) => void
  showModal: (action: string, data?: any) => void
  closeModal: () => void
}

const MembershipContext = createContext<MembershipContextType | undefined>(undefined)

export function useMembership() {
  const context = useContext(MembershipContext)
  if (!context) {
    throw new Error("useMembership must be used within a MembershipProvider")
  }
  return context
}

export function MembershipProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const [pendingAction, setPendingAction] = useState<string | null>(null)
  const [pendingData, setPendingData] = useState<any>(null)
  const [onApproveCallback, setOnApproveCallback] = useState<(() => void) | null>(null)

  // 1. Require Membership Check
  const requireMembership = (action: string, onApprove: () => void, data?: any) => {
    if (status === "authenticated") {
      onApprove()
    } else {
      setPendingAction(action)
      setPendingData(data || null)
      setOnApproveCallback(() => onApprove)
      setIsOpen(true)
    }
  }

  const showModal = (action: string, data?: any) => {
    setPendingAction(action)
    setPendingData(data || null)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setPendingAction(null)
    setPendingData(null)
    setOnApproveCallback(null)
  }

  // 2. Handle Action Triggers after Login Redirection
  useEffect(() => {
    if (status === "authenticated") {
      const storedAction = localStorage.getItem("pending_action")
      if (storedAction) {
        localStorage.removeItem("pending_action")
        const storedDataStr = localStorage.getItem("pending_action_data")
        const storedData = storedDataStr ? JSON.parse(storedDataStr) : null
        localStorage.removeItem("pending_action_data")

        // Trigger action logic:
        if (storedAction === "apply_cohort") {
          // Redirect user to join page
          window.location.href = "/cohorts/join"
        } else if (storedAction === "join_waitlist" && storedData?.email) {
          // Submit waitlist API automatically
          submitWaitlistAutomatically(storedData.email)
        } else if (storedAction === "join_community") {
          // Show successfully joined alert
          alert("Welcome! You have successfully joined the Lumora Community ecosystem.")
        }
      }
    }
  }, [status])

  const submitWaitlistAutomatically = async (email: string) => {
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        alert("Success! You've successfully joined the waitlist and registered your interest.")
      }
    } catch (err) {
      console.error("Auto-waitlist submit failed:", err)
    }
  }

  // 3. Initiate Redirection with saved state
  const handleAuthRedirect = (type: "signin" | "signup") => {
    if (pendingAction) {
      localStorage.setItem("pending_action", pendingAction)
      if (pendingData) {
        localStorage.setItem("pending_action_data", JSON.stringify(pendingData))
      }
    }
    // Redirect to the custom premium account creation / sign-in flow
    window.location.href = type === "signup" ? "/create-account" : "/signin"
  }

  return (
    <MembershipContext.Provider value={{ requireMembership, showModal, closeModal }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-[#0B1020]/20 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg bg-background/90 backdrop-blur-xl border border-border/80 rounded-[32px] p-8 md:p-10 shadow-[0_24px_64px_rgba(15,23,42,0.1)] z-10 flex flex-col"
            >
              {/* Decorative Brand Circle */}
              <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-16 h-16 rounded-3xl bg-primary flex items-center justify-center shadow-lg shadow-primary/35">
                <svg className="w-8 h-8 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V7a4 4 0 00-8 0v4c0 2.517.653 4.887 1.8 7.005L3 21l3.52-.704a11.968 11.968 0 001.764-.422M20 18.08V11a8 8 0 00-16 0v7.08M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>

              {/* Headline & Subheadline */}
              <div className="text-center mt-6 mb-8 space-y-3">
                <h3 className="text-2xl font-bold font-heading text-foreground tracking-tight">
                  Become Part Of Lumora
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto font-light">
                  Join the Lumora ecosystem to apply for future cohorts, access community opportunities, and stay updated on everything we're building.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-muted/60 border border-border/50 rounded-2xl p-6 mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-primary select-none shrink-0 mt-1" />
                  <p className="text-sm font-semibold text-foreground">
                    Early access to upcoming cohorts
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-primary select-none shrink-0 mt-1" />
                  <p className="text-sm font-semibold text-foreground">
                    Community participation
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Rocket className="w-4 h-4 text-primary select-none shrink-0 mt-1" />
                  <p className="text-sm font-semibold text-foreground">
                    Priority updates and launches
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-primary select-none shrink-0 mt-1" />
                  <p className="text-sm font-semibold text-foreground">
                    Track your growth journey
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleAuthRedirect("signup")}
                  className="w-full py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary/95 transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg text-sm"
                >
                  Create Account
                </button>
                <button
                  onClick={() => handleAuthRedirect("signin")}
                  className="w-full py-4 border border-border bg-background text-foreground hover:bg-muted font-semibold rounded-2xl transition-all duration-200 text-sm"
                >
                  Already A Member? Sign In
                </button>
                <button
                  onClick={closeModal}
                  className="w-full py-3 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mt-2"
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </MembershipContext.Provider>
  )
}
