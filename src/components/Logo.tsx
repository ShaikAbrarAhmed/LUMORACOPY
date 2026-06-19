import React from "react"
import Image from "next/image"

export interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  variant?: "primary" | "icon" | "monochrome" | "dark"
  flat?: boolean
}

export function Logo({
  className = "",
  size = "md",
  variant = "primary",
  flat = false,
}: LogoProps) {

  // Square size classes for Icon, Dark, and Monochrome variants (approx 1:1 aspect ratio)
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14 md:w-[60px] md:h-[60px]",
    xl: "w-20 h-20 md:w-[80px] md:h-[80px]",
    "2xl": "w-28 h-28 md:w-[120px] md:h-[120px]",
    "3xl": "w-40 h-40 md:w-[160px] md:h-[160px]",
  }

  // Primary variant renders the full brand lockup image (logo4.png)
  if (variant === "primary") {
    // Sizing mapping for the 3:2 aspect ratio logo4.png (North Star symbol + LUMORA wordmark)
    // Scale increased by 50% for stronger brand visibility:
    // sm: height 48px, width 72px (desktop: 60px height, 90px width)
    const primaryClasses = {
      sm: "h-[40px] w-[60px]",
      md: "h-[48px] w-[72px]",
      lg: "h-[56px] w-[84px] sm:h-[64px] sm:w-[96px] md:h-[72px] md:w-[108px]", // Refined responsive lg: 40-50% scale increase (32px mobile / 38px tablet / 44px desktop)
      xl: "h-[80px] w-[120px]",
      "2xl": "h-[120px] w-[180px]",
      "3xl": "h-[160px] w-[240px]",
    }

    const sizeClass = primaryClasses[size] || primaryClasses.md;
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden shrink-0 ${sizeClass} ${
          flat
            ? "bg-transparent border-none shadow-none p-0"
            : "rounded-xl bg-card border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] p-1.5"
        } ${className}`}
      >
        <Image
          src="/logo4.png"
          alt="Lumora Logo"
          fill
          priority
          unoptimized
          className="object-contain transition-transform duration-300"
        />
      </div>
    )
  }

  // Icon and Dark variants render only the North Star symbol by cropping the left portion of logo4.png
  if (variant === "icon" || variant === "dark") {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden shrink-0 transition-all duration-300 ${
          variant === "icon" && !flat
            ? "rounded-xl bg-background border border-white/10 shadow-[0_4px_20px_rgba(217,217,217,0.15)] shadow-primary/10"
            : variant === "dark" && !flat
            ? "rounded-xl bg-background border border-white/5 shadow-2xl"
            : "bg-transparent border-none shadow-none"
        } ${sizeClasses[size]} ${className}`}
      >
        {/* Soft ambient glow for Icon & Dark variants */}
        {!flat && (
          <div className="absolute inset-0 rounded-xl bg-primary/5 blur-[2px] pointer-events-none opacity-50" />
        )}
        
        {/* Crop the North Star symbol from logo4.png (it's a 3:2 layout with symbol on the left) */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/logo4.png"
            alt="Lumora Symbol"
            fill
            priority
            unoptimized
            className="object-cover object-left"
          />
        </div>
      </div>
    )
  }

  // Monochrome variant renders a clean vector SVG symbol that inherits parent text color (currentColor)
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 transition-all duration-300 ${
        flat
          ? "bg-transparent border-none shadow-none p-0"
          : "rounded-xl bg-background border border-white/10 shadow-[0_4px_20px_rgba(217,217,217,0.15)] p-1.5"
      } ${sizeClasses[size]} ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full object-contain"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="50"
          cy="54"
          rx="34"
          ry="11"
          transform="rotate(-20 50 54)"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M43,62 C53,62 67,67 73,65 C74,64 74,62 73,61 C63,55 52,50 43,62 Z"
          fill="currentColor"
        />
        <path
          d="M46,18 C39,30 29,45 29,58 C29,70 38,76 46,76 C52,76 58,72 58,62 C58,52 49,30 46,18 Z"
          fill="currentColor"
        />
        <circle cx="78" cy="41" r="3.5" fill="currentColor" />
      </svg>
    </div>
  )
}