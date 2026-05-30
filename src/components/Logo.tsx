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

  const sizeMap = {
    sm: 34,
    md: 48,
    lg: 72,
    xl: 100,
    "2xl": 140,
    "3xl": 200,
  }

  const dimension = sizeMap[size]

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: dimension,
        height: dimension,
      }}
    >
      <Image
        src="/logo.png"
        alt="Lumora Logo"
        fill
        priority
        unoptimized
        className="object-contain"
      />
    </div>
  )
}