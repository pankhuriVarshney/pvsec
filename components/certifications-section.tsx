"use client"

import { Award, Trophy, Medal, CheckCircle, FileText, Shield, Star } from "lucide-react"
import dynamic from "next/dynamic"

const GraduationCap = dynamic(
  () => import("lucide-react").then(m => m.GraduationCap),
  { ssr: false }
)
const certifications = [
  {
    name: "eLearnSecurity Junior Penetration Tester (eJPT)",
    issuer: "INE Security",
    year: "2025",
    icon: Shield,
    verified: true,
    highlight: true,
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    icon: Shield,
    verified: true,
  },
  {
    name: "Introduction to Networking",
    issuer: "Cisco Networking Academy",
    year: "2024",
    icon: Shield,
    verified: true,
  },
]

const achievements = [
  {
    title: "National CyberShield Hackathon 2025",
    platform: "National Level",
    description: "Participant in national cybersecurity competition",
    icon: Trophy,
    color: "text-neon-amber",
  },
  {
    title: "Digital Forensics Hackathon",
    platform: "CyberSecured India",
    description: "2nd Position - September 2023",
    icon: Medal,
    color: "text-accent",
    highlight: true,
  },
  {
    title: "Blockchain Hackathon",
    platform: "India Blockchain Alliance",
    description: "2nd Position - September 2023",
    icon: Medal,
    color: "text-accent",
    highlight: true,
  },
  {
    title: "NPIIPC-AICTE Pentathon 2025",
    platform: "AICTE",
    description: "Rank 500 out of 3500 participants",
    icon: Award,
    color: "text-primary",
  },
  {
    title: "Merit Scholarship - 1st Rank",
    platform: "SIT Pune CSE Department",
    description: "July 2023 - April 2025",
    icon: GraduationCap,
    color: "text-neon-amber",
    highlight: true,
  },
  {
    title: "IEEE Publication",
    platform: "ADICS 2024 Conference",
    description: "Quantum Computing research paper",
    icon: FileText,
    color: "text-primary",
    highlight: true,
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-primary tracking-widest uppercase font-mono">Credentials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Certifications & Achievements</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => {
                const Icon = cert.icon
                return (
                  <div
                    key={cert.name}
                    className={`group flex items-center gap-4 p-4 backdrop-blur-sm border rounded-xl transition-colors ${
                      cert.highlight
                        ? "bg-primary/10 border-primary/30 hover:border-primary/50"
                        : "bg-card/50 border-border hover:border-primary/30"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-lg transition-colors ${
                        cert.highlight ? "bg-primary/20" : "bg-secondary group-hover:bg-primary/10"
                      }`}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-foreground">{cert.name}</h4>
                        {cert.verified && <CheckCircle className="w-4 h-4 text-neon-green" />}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-neon-amber" />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, i) => {
                const Icon = achievement.icon
                return (
                  <div
                    key={achievement.title}
                    className={`group flex items-center gap-4 p-4 backdrop-blur-sm border rounded-xl transition-colors ${
                      achievement.highlight
                        ? "bg-accent/5 border-accent/20 hover:border-accent/40"
                        : "bg-card/50 border-border hover:border-accent/30"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-lg transition-colors ${
                        achievement.highlight ? "bg-accent/10" : "bg-secondary group-hover:bg-accent/10"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-foreground">{achievement.title}</h4>
                        {achievement.highlight && <Star className="w-3 h-3 text-neon-amber fill-neon-amber" />}
                      </div>
                      <p className={`text-sm ${achievement.color}`}>{achievement.platform}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{achievement.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
