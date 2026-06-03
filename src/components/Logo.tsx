import React from "react"
import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
}

export function Logo({
  className = "",
  size = "md",
}: LogoProps) {

  const sizeClasses = {
    sm: "w-8.5 h-8.5",
    md: "w-9.5 h-9.5 md:w-12 md:h-12", // Responsive logo
    lg: "w-14 h-14 md:w-[72px] md:h-[72px]",
    xl: "w-20 h-20 md:w-[100px] md:h-[100px]",
    "2xl": "w-28 h-28 md:w-[140px] md:h-[140px]",
    "3xl": "w-40 h-40 md:w-[200px] md:h-[200px]",
  }

  return (
    <div
      className={`relative flex items-center justify-center rounded-xl overflow-hidden bg-[#1E293B] border border-slate-200/50 shadow-[0_4px_20px_rgba(11,16,32,0.08)] shrink-0 p-1.5 ${sizeClasses[size]} ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Lumora Logo"
        fill
        priority
        unoptimized
        className="object-contain p-1 transition-transform duration-300"
      />
    </div>
  )
}