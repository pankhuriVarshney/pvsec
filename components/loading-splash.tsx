"use client"

import { useEffect, useState } from "react"

type Particle = {
  left: string
  top: string
  duration: string
  delay: string
  opacity: number
}

export function LoadingSplash() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [displayText, setDisplayText] = useState("")
  const [systemStatus, setSystemStatus] = useState<Array<{ label: string; status: string }>>([])
  const [showSplash, setShowSplash] = useState(true)
  const [progress, setProgress] = useState(0)

  const fullText = "Initializing neural security matrix..."
  const statusSteps = [
    { label: "Firewall", status: "ACTIVE" },
    { label: "Threat Detection", status: "ONLINE" },
    { label: "Exploit Prevention", status: "ARMED" },
    { label: "Access Control", status: "READY" },
    { label: "Biometric Auth", status: "VERIFIED" },
  ]

  /* Generate particles ONCE on mount (fixes hydration) */
  useEffect(() => {
    const generated = Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 2}s`,
      opacity: Math.random() * 0.6 + 0.2,
    }))
    setParticles(generated)
  }, [])

  /* Typewriter effect */
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1))
      }, 40)
      return () => clearTimeout(timer)
    }
  }, [displayText])

  /* System status */
  useEffect(() => {
    if (!displayText) return
    const statusTimer = setInterval(() => {
      setSystemStatus(prev => {
        if (prev.length < statusSteps.length) {
          return [...prev, statusSteps[prev.length]]
        }
        return prev
      })
    }, 300)
    return () => clearInterval(statusTimer)
  }, [displayText])

  /* Progress bar */
  useEffect(() => {
    if (!displayText) return
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100
        return prev + Math.random() * 30
      })
    }, 200)
    return () => clearInterval(progressInterval)
  }, [displayText])

  /* Close splash */
  useEffect(() => {
    if (progress >= 100 && systemStatus.length === statusSteps.length) {
      const timer = setTimeout(() => setShowSplash(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [progress, systemStatus])

  if (!showSplash) return null

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden">

      {/* Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%2200f3ff%22 width=%221%22 height=%221%22/></svg>")',
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: p.left,
              top: p.top,
              animation: `float ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Main UI */}
      <div className="relative z-10 w-full max-w-md mx-auto px-8">
        <div className="text-center mb-12">
          <div className="text-5xl font-bold">
            <span className="text-primary">pv</span>
            <span className="text-accent">.</span>
            <span className="text-foreground">sec</span>
          </div>
        </div>

        <div className="bg-secondary/30 border border-border rounded-lg p-6 mb-6 font-mono text-sm backdrop-blur-sm">
          <div className="text-muted-foreground mb-4">
            <span className="text-primary">$</span> sudo ./activate_hacker_mode
          </div>

          <div className="mb-4 min-h-6">
            <span className="text-primary">{displayText}</span>
            {displayText.length < fullText.length && <span className="animate-pulse">_</span>}
          </div>

          {systemStatus.map((item, idx) => (
            <div key={idx} className="flex justify-between text-xs">
              <span className="text-muted-foreground">[{item.label}]</span>
              <span className="text-neon-green">{item.status}</span>
            </div>
          ))}
        </div>

        <div className="h-1 bg-secondary rounded overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-accent to-neon-green"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,100% { transform: translate(0,0); opacity:.2 }
          50% { transform: translate(10px,-20px); opacity:.6 }
        }
      `}</style>
    </div>
  )
}
