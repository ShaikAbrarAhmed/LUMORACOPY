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

  const sizeClasses = {
    sm: "w-8.5 h-8.5",
    md: "w-9.5 h-9.5 md:w-12 md:h-12",
    lg: "w-14 h-14 md:w-[72px] md:h-[72px]",
    xl: "w-20 h-20 md:w-[100px] md:h-[100px]",
    "2xl": "w-28 h-28 md:w-[140px] md:h-[140px]",
    "3xl": "w-40 h-40 md:w-[200px] md:h-[200px]",
  }

  // Primary variant renders the original transparent PNG logo2.png (Symbol + Wordmark + Tagline)
  if (variant === "primary") {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden shrink-0 ${
          flat
            ? "bg-transparent border-none shadow-none p-0"
            : "rounded-xl bg-[#0F172A] border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,32,0.08)] p-1.5"
        } ${sizeClasses[size]} ${className}`}
      >
        <Image
          src="/logo2.png"
          alt="Lumora Logo"
          fill
          priority
          unoptimized
          className="object-contain p-1 transition-transform duration-300"
        />
      </div>
    )
  }

  // Icon and Dark variants render the CSS-cropped version of the original brand logo logo2.png
  // to ensure 100% visual fidelity to the brand symbol, colors, and gradients
  if (variant === "icon" || variant === "dark") {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden shrink-0 transition-all duration-300 ${
          variant === "icon" && !flat
            ? "rounded-xl bg-[#070A13] border border-white/10 shadow-[0_4px_20px_rgba(129,140,248,0.15)] shadow-indigo-500/10"
            : variant === "dark" && !flat
            ? "rounded-xl bg-[#070A13] border border-white/5 shadow-2xl"
            : "bg-transparent border-none shadow-none"
        } ${sizeClasses[size]} ${className}`}
      >
        {/* Soft indigo ambient glow for App Icon & Dark variants */}
        {!flat && (
          <div className="absolute inset-0 rounded-xl bg-primary/5 blur-[2px] pointer-events-none opacity-50" />
        )}
        
        {/* Cropped brand symbol from logo2.png */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/logo2.png"
            alt="Lumora Symbol"
            className="absolute transition-transform duration-300 max-w-none max-h-none"
            style={{
              width: "193%",
              height: "auto",
              left: "-47%",
              top: "-38%",
              clipPath: "inset(0% 0% 20% 0%)",
            }}
          />
        </div>
      </div>
    )
  }

  // Monochrome variant renders a clean vector SVG that inherits parent text color (currentColor)
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 transition-all duration-300 ${
        flat
          ? "bg-transparent border-none shadow-none p-0"
          : "rounded-xl bg-[#070A13] border border-white/10 shadow-[0_4px_20px_rgba(129,140,248,0.15)] p-1.5"
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