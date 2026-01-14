"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Lock, Eye, Zap, Heart, Target } from "lucide-react"

const manifestoItems = [
  {
    icon: Shield,
    title: "Defend the Digital Realm",
    oath: "I pledge to protect systems, data, and people from those who seek to exploit them. Every vulnerability I find is an opportunity to strengthen, not destroy.",
    color: "text-primary",
  },
  {
    icon: Lock,
    title: "Ethical Above All",
    oath: "I will never use my skills for malicious purposes. Knowledge of breaking systems comes with the responsibility to make them unbreakable.",
    color: "text-accent",
  },
  {
    icon: Eye,
    title: "Stay Curious, Stay Humble",
    oath: "The threat landscape evolves daily. I commit to continuous learning, knowing that yesterday's defenses may be tomorrow's vulnerabilities.",
    color: "text-violet-400",
  },
  {
    icon: Zap,
    title: "Think Like an Attacker",
    oath: "To defend effectively, I must understand offense. I embrace red team thinking not to harm, but to anticipate and neutralize threats before they materialize.",
    color: "text-amber-400",
  },
  {
    icon: Heart,
    title: "Protect the Unprotected",
    oath: "Not everyone understands cyber risks. I will advocate for security awareness and help those who cannot protect themselves in the digital world.",
    color: "text-rose-400",
  },
  {
    icon: Target,
    title: "Precision & Purpose",
    oath: "Every action I take in security has consequences. I will be deliberate, documented, and purposeful—never reckless with the trust placed in me.",
    color: "text-emerald-400",
  },
]

export function ManifestoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="manifesto" ref={sectionRef} className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">// MY MANIFESTO</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="gradient-text">Security Oath</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide every action I take in cybersecurity. They define not just what I do, but who I am as
            a security professional.
          </p>
        </div>

        {/* Personal Statement */}
        <div className="relative mb-16 p-6 md:p-8 bg-card/50 border border-border rounded-xl">
          <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono rounded">
            personal_statement.txt
          </div>
          <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed italic">
            "I believe cybersecurity is not just a profession—it's a calling. In a world where digital threats can
            disrupt lives, destroy businesses, and destabilize nations, I choose to stand on the side of defense. My
            mission is simple:
            <span className="text-primary font-semibold not-italic">
              {" "}
              make the digital world safer, one vulnerability at a time.
            </span>
            "
          </blockquote>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">PV</span>
            </div>
            <div>
              <p className="font-medium text-foreground">Pankhuri Varshney</p>
              <p className="text-sm text-muted-foreground">Offensive Security Specialist</p>
            </div>
          </div>
        </div>

        {/* Oath Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {manifestoItems.map((item, index) => (
            <div
              key={item.title}
              className={`group p-5 bg-card/30 border border-border rounded-xl hover:border-primary/50 hover:bg-card/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-2.5 rounded-lg bg-secondary/50 ${item.color} group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.oath}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary">&gt;</span> "The best defense is understanding the offense."
          </p>
        </div>
      </div>
    </section>
  )
}
