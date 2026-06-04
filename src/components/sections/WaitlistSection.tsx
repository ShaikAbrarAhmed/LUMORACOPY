"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useMembership } from "@/components/auth/MembershipContext"

export function WaitlistSection() {
  const { requireMembership } = useMembership()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    requireMembership("join_waitlist", async () => {
      setStatus("submitting")
      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        })
        
        if (!res.ok) throw new Error("Failed to join")
        
        setStatus("success")
        setEmail("")
      } catch (err) {
        console.error(err)
        setStatus("idle")
        alert("Something went wrong. Please try again.")
      }
    }, { email })
  }

  return (
    <section className="py-32 relative bg-background flex justify-center items-center overflow-hidden">
      {/* Subtle background glow just for the final CTA */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white/[0.04] via-background to-background pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6 text-headings">
          Ready to build your future?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 font-light max-w-xl mx-auto">
          Join the waitlist for Cohort 1. We'll notify you when applications officially open. No spam, ever.
        </p>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500"
          >
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">You're on the list. We'll be in touch soon.</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 h-12 px-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/30 transition-colors"
            />
            <Button
              type="submit"
              disabled={status === "submitting"}
              className="h-12 px-8 rounded-lg bg-foreground text-background hover:bg-foreground/90 font-medium transition-all"
            >
              {status === "submitting" ? "Joining..." : "Join Waitlist"}
              {!status && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        )}
        
        <p className="mt-6 text-xs text-muted-foreground font-light">
          By joining, you agree to our Terms of Service and Privacy Policy.
        </p>
      </motion.div>
    </section>
  )
}
