"use client"

import { User, MapPin, Briefcase,  Award, Calendar } from "lucide-react"
import dynamic from "next/dynamic"

const GraduationCap = dynamic(
  () => import("lucide-react").then(m => m.GraduationCap),
  { ssr: false }
)
const timeline = [
  {
    year: "2025",
    title: "Red Team Intern",
    company: "DeepCytes Cyber Labs (UK)",
    description: "Completed internship: VAPT, Red Team Toolkit development, AI-powered OSINT platform",
    highlight: true,
  },
  {
    year: "2023-Present",
    title: "Co-Head Ethical Hacking Wing",
    company: "Cyber Blockchain Club",
    description: "CTF challenges, security workshops, mentorship",
  },
  {
    year: "2024",
    title: "Co-Head Game Development",
    company: "Google DSC",
    description: "Workshops on Unity, Godot, software engineering",
  },
  {
    year: "2023-2027",
    title: "B.Tech Computer Science",
    company: "SIT Pune",
    description: "CGPA 8.97, Merit Scholarship holder",
  },
]

const highlights = [
  { label: "IEEE Published", value: "Research Author" },
  { label: "Hackathon Wins", value: "2x Runner-up" },
  { label: "Security Tools", value: "6+ Built" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-primary tracking-widest uppercase font-mono">Profile</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8">
              {/* Avatar placeholder */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="relative w-28 h-28 rounded-xl overflow-hidden border-2 border-primary/30 bg-secondary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User className="w-12 h-12 text-primary/60" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground">Pankhuri Varshney</h3>
                  <p className="text-primary">Cybersecurity Professional</p>
                  <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Pune, India</span>
                  </div>
                </div>
              </div>

              {/* Bio - updated to be more impactful */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                Security professional with real-world experience from DeepCytes Cyber Labs, specializing in VAPT and red
                team operations. Built production-grade security tools and published research on quantum computing at
                IEEE. Seeking to bring my hands-on expertise to a forward-thinking security team.
              </p>

              <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-primary/5 rounded-lg border border-primary/20">
                {highlights.map((h) => (
                  <div key={h.label} className="text-center">
                    <p className="text-xs text-muted-foreground">{h.label}</p>
                    <p className="text-sm font-semibold text-primary">{h.value}</p>
                  </div>
                ))}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Experience</p>
                    <p className="text-sm font-medium text-foreground">1+ Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Education</p>
                    <p className="text-sm font-medium text-foreground">B.Tech CSE</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg border border-accent/20">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Certification</p>
                    <p className="text-sm font-medium text-foreground">eJPT Certified</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <Calendar className="w-5 h-5 text-neon-amber" />
                  <div>
                    <p className="text-xs text-muted-foreground">Graduating</p>
                    <p className="text-sm font-medium text-foreground">May 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-primary font-mono">$</span>
              timeline --reverse
            </h3>

            <div className="relative pl-6 border-l border-border">
              {timeline.map((item, i) => (
                <div key={i} className="relative mb-6 last:mb-0 group">
                  {/* Timeline dot - highlight completed internship */}
                  <div
                    className={`absolute -left-[9px] w-3 h-3 rounded-full border-2 transition-colors ${
                      item.highlight ? "bg-accent border-accent" : "bg-card border-primary group-hover:bg-primary"
                    }`}
                  />

                  {/* Content */}
                  <div
                    className={`p-4 rounded-lg border transition-colors ml-4 ${
                      item.highlight
                        ? "bg-accent/10 border-accent/30"
                        : "bg-card/30 border-border hover:border-primary/30"
                    }`}
                  >
                    <span className={`text-xs font-mono ${item.highlight ? "text-accent" : "text-primary"}`}>
                      {item.year}
                    </span>
                    <h4 className="font-semibold text-foreground mt-1">{item.title}</h4>
                    <p className={`text-sm ${item.highlight ? "text-accent/80" : "text-primary/80"}`}>{item.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
