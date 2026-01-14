"use client"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return <span className={`relative inline-block ${className}`}>{text}</span>
}
