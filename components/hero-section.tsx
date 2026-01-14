"use client"

import { useState, useEffect } from "react"
import { Terminal } from "./terminal"
import { Typewriter } from "./typewriter"
import { StatsCounter } from "./stats-counter"
import { Shield, ChevronDown, FileDown } from "lucide-react"

export function HeroSection() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { value: 8.97, label: "CGPA" },
    { value: 1, suffix: "+", label: "Years Experience" },
    { value: 6, suffix: "+", label: "Major Projects" },
    { value: 1, label: "IEEE Publication" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Main Content */}
      <div
        className={`relative z-10 w-full max-w-5xl mx-auto transition-all duration-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
            </span>
            <span className="text-sm text-neon-green font-medium">Available for Internship & Part-Time</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight gradient-text">
            Pankhuri Varshney
          </h1>

          <div className="h-8 md:h-10">
            <Typewriter
              texts={[
                "Red Team Specialist & VAPT Expert",
                "eJPT Certified Security Professional",
                "AI & Cybersecurity Researcher",
                "Open Source Security Contributor",
              ]}
              className="text-lg md:text-xl text-primary font-mono"
            />
          </div>

          <p className="mt-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Security researcher with hands-on experience in penetration testing, red team operations, AI-driven
            threat detection and proven expertise in building production security tools.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <Shield className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-colors"
            >
              <FileDown className="w-4 h-4" />
              View Projects
            </a>
          </div>
        </div>

        {/* Terminal */}
        <div className="flex justify-center mb-16">
          <Terminal />
        </div>

        {/* Stats */}
        <StatsCounter stats={stats} />

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs tracking-wide">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
