"use client"

import React from "react"
import { motion } from "framer-motion"

export default function SvgSilkRibbons() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
      {/* 1. Deep background atmospheric glow matching the new palette */}
      <div 
        className="absolute inset-0 w-full h-full opacity-60"
        style={{
          background: "radial-gradient(circle at 50% 85%, rgba(217, 220, 225, 0.035), transparent 60%)"
        }}
      />

      <svg 
        viewBox="0 0 1440 700" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute inset-x-0 bottom-0 w-full h-[80%] md:h-[65%] object-cover pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradients tailored to Graphite + Silver visual identity */}
          <linearGradient id="ribbon-grad-1" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#D9DCE1" stopOpacity="0" />
            <stop offset="30%" stopColor="#D9DCE1" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#F5F5F5" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#D9DCE1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D9DCE1" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="ribbon-grad-2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#D9DCE1" stopOpacity="0" />
            <stop offset="25%" stopColor="#D9DCE1" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#F5F5F5" stopOpacity="0.65" />
            <stop offset="80%" stopColor="#D9DCE1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D9DCE1" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ribbon-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5F5F5" stopOpacity="0" />
            <stop offset="40%" stopColor="#F5F5F5" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#D9DCE1" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#D9DCE1" stopOpacity="0" />
          </linearGradient>

          {/* Precise Gaussian Blur Filters for varying translucency and depth */}
          <filter id="blur-large" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="38" />
          </filter>
          <filter id="blur-medium" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <filter id="blur-sharp" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        
        {/* Layer 1: Large soft ribbon - 12% Opacity for broad ambient flow */}
        <motion.g
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            scaleY: [1, 1.02, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 0.12 }}
          filter="url(#blur-large)"
        >
          <path
            d="M-100,520 C200,560 450,680 800,610 C1100,540 1300,380 1600,340 L1600,500 C1300,530 1100,670 800,690 C450,710 200,630 -100,590 Z"
            fill="url(#ribbon-grad-1)"
          />
        </motion.g>

        {/* Layer 2: Medium ribbon - 18% Opacity for defined silk folds */}
        <motion.g
          animate={{
            y: [0, -10, 0],
            x: [0, -10, 0],
            skewX: [0, 0.5, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 0.18 }}
          filter="url(#blur-medium)"
        >
          <path
            d="M-50,460 C250,520 550,540 800,450 C1050,360 1300,430 1550,500 L1550,590 C1300,520 1050,450 800,540 C550,630 250,610 -50,540 Z"
            fill="url(#ribbon-grad-2)"
          />
        </motion.g>

        {/* Layer 3: Bright highlight ribbon - 30% Opacity for catching moonlight shimmer */}
        <motion.g
          animate={{
            y: [0, -7, 0],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 0.30 }}
          filter="url(#blur-sharp)"
        >
          <path
            d="M-50,580 C250,600 500,540 750,610 C1000,680 1250,530 1550,460 L1550,480 C1250,550 1000,700 750,630 C500,560 250,620 -50,600 Z"
            fill="url(#ribbon-grad-3)"
          />
        </motion.g>

        {/* Layer 4: Fine, sharp light strand for premium luxury edge reflection - 20% Opacity */}
        <motion.g
          animate={{
            y: [0, -5, 0],
            x: [0, -3, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 0.20 }}
        >
          <path
            d="M-50,582 C250,602 500,542 750,612 C1000,682 1250,542 1550,462"
            stroke="url(#ribbon-grad-3)"
            strokeWidth="2.0"
            fill="none"
            filter="url(#blur-sharp)"
          />
        </motion.g>
      </svg>
    </div>
  )
}
