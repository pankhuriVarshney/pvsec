"use client"

import { useEffect, useState, useRef } from "react"

interface StatProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const isDecimal = value % 1 !== 0
  const decimalPlaces = isDecimal ? 2 : 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1500
          const steps = 50
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-primary">
      {prefix}
      {count.toFixed(decimalPlaces)}
      {suffix}
    </span>
  )
}

export function StatsCounter({ stats }: { stats: StatProps[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="relative p-5 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-center group hover:border-primary/40 transition-colors"
        >
          <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          <p className="mt-2 text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
