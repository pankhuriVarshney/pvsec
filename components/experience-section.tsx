"use client"

import { useState } from "react"
import { Briefcase, ChevronRight } from "lucide-react"

const experiences = [
  {
    id: "deepcytes",
    title: "Red Team Intern & Developer",
    company: "DeepCytes Cyber Labs (UK)",
    period: "Feb 2025 - Aug 2025",
    location: "Remote",
    description:
      "Conducting VAPT for diverse clients, simulating real-world cyberattacks to identify critical security gaps.",
    achievements: [
      "Collaborated on Red Team Toolkit with automated exploitation modules and reporting",
      "Built Exploits Database indexing vulnerabilities across web, mobile, IoT, enterprise stacks",
      "Developed AI-powered OSINT tool for real-time intelligence from public and darknet sources",
      "Contributed to Supreme Court briefs and cybersecurity policy reports",
      "Gained hands-on experience in digital forensics and dark web monitoring",
    ],
    tech: ["VAPT", "Python", "OSINT", "Digital Forensics", "Threat Intelligence"],
  },
  {
    id: "cbc",
    title: "Co-Head Ethical Hacking Wing",
    company: "Cyber Blockchain Club",
    period: "Aug 2023 - Present",
    location: "SIT Pune",
    description: "Leading hands-on workshops and designing CTF challenges for internal and external hackathons.",
    achievements: [
      "Organized workshops on Linux, BurpSuite, Autopsy, Nessus, Splunk",
      "Designed CTF challenges simulating real-world exploitation scenarios",
      "Mentored peers through curated content and interactive sessions",
      "Fostered a strong community of ethical hackers",
    ],
    tech: ["Burp Suite", "Nessus", "Splunk", "CTF", "Linux"],
  },
  {
    id: "gdsc",
    title: "Co-Head, Game Development Track",
    company: "Google Developers' Student Club",
    period: "Jan 2024 - Dec 2024",
    location: "SIT Pune",
    description: "Led workshops on 2D/3D game development, teaching core software engineering concepts.",
    achievements: [
      "Taught game development using Pygame, Unity, and Godot",
      "Designed hands-on coding seminars with focus on clean code and modular design",
      "Mentored peers during game jams and rapid prototyping sessions",
      "Championed indie developer culture and innovation",
    ],
    tech: ["Unity", "Godot", "Pygame", "C#", "Game Design"],
  },
]

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0].id)

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-primary tracking-widest uppercase font-mono">Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Experience</h2>
        </div>

        {/* Experience Cards - cleaner design */}
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`bg-card/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
                expandedId === exp.id ? "border-primary/50" : "border-border hover:border-primary/30"
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className="w-full p-5 text-left"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-secondary rounded-lg">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-foreground font-medium">{exp.period}</p>
                      <p className="text-xs text-muted-foreground">{exp.location}</p>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-muted-foreground transition-transform ${expandedId === exp.id ? "rotate-90" : ""}`}
                    />
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedId === exp.id && (
                <div className="px-5 pb-5 border-t border-border pt-5">
                  <p className="text-muted-foreground mb-5">{exp.description}</p>

                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Contributions</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs bg-secondary text-foreground rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
