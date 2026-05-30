"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function IntroScreen() {
  const [show, setShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Initialization & Check Local Storage
  useEffect(() => {
    setMounted(true)
    const hasSeenIntro = localStorage.getItem("lumora-intro-seen")
    const forceIntro = sessionStorage.getItem("lumora-force-intro")
    
    if (!hasSeenIntro || forceIntro) {
      setShow(true)
      if (forceIntro) {
        sessionStorage.removeItem("lumora-force-intro")
      }
    }
  }, [])

  // Listen for replay event from Footer
  useEffect(() => {
    const handleReplay = () => setShow(true)
    window.addEventListener("replay-intro", handleReplay)
    return () => window.removeEventListener("replay-intro", handleReplay)
  }, [])

  const completeIntro = useCallback(() => {
    localStorage.setItem("lumora-intro-seen", "true")
    setShow(false)
  }, [])

  // Keyboard events to skip
  useEffect(() => {
    if (!show) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        e.preventDefault()
        completeIntro()
      }
    }
    
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [show, completeIntro])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          <video
            src="/intro.mp4"
            autoPlay
            muted
            playsInline
            onEnded={completeIntro}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-0 right-0 text-center pointer-events-none z-10"
          >
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-[0.2em] mix-blend-difference">
              Press Space or Esc to skip
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
