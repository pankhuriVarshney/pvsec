"use client"

import { useState } from "react"
import { Shield, Sword, Code, Brain, Terminal } from "lucide-react"

const skillCategories = [
  {
    id: "offensive",
    name: "Offensive Security",
    icon: Sword,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
    skills: [
      { name: "Penetration Testing (VAPT)" },
      { name: "Web App Security (OWASP)" },
      { name: "Network Security" },
      { name: "Digital Forensics" },
    ],
  },
  {
    id: "defensive",
    name: "Defensive",
    icon: Shield,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    skills: [{ name: "OSINT" }, { name: "Cryptography" }, { name: "Steganography" }, { name: "Secure SDLC" }],
  },
  {
    id: "development",
    name: "Development",
    icon: Code,
    color: "text-neon-amber",
    bgColor: "bg-neon-amber/10",
    borderColor: "border-neon-amber/30",
    skills: [{ name: "Python" }, { name: "JavaScript/TypeScript" }, { name: "Rust" }, { name: "Java/C/C++" }],
  },
  {
    id: "ai-ml",
    name: "AI/ML",
    icon: Brain,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    skills: [
      { name: "Threat Prediction Models" },
      { name: "Malware Analysis (AI)" },
      { name: "NLP & LLMs" },
      { name: "TensorFlow/PyTorch" },
    ],
  },
]

const tools = [
  { name: "Nmap", category: "Recon", color: "text-primary" },
  { name: "Metasploit", category: "Exploit", color: "text-destructive" },
  { name: "Burp Suite", category: "Web", color: "text-neon-amber" },
  { name: "Wireshark", category: "Network", color: "text-accent" },
  { name: "Nuclei", category: "Scanner", color: "text-primary" },
  { name: "Ghidra", category: "Reverse", color: "text-destructive" },
  { name: "Splunk", category: "SIEM", color: "text-neon-amber" },
  { name: "Autopsy", category: "Forensics", color: "text-accent" },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)

  const currentCategory = skillCategories.find((c) => c.id === activeCategory)

  return (
    <section id="skills" className="relative py-24 px-4 bg-card/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-primary tracking-widest uppercase font-mono">Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Skills & Tools</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                  isActive
                    ? `${category.bgColor} ${category.borderColor} ${category.color}`
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            )
          })}
        </div>

        {/* Skills Grid with simplified display */}
        {currentCategory && (
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className={`bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:${currentCategory.borderColor} transition-colors ${currentCategory.borderColor.replace("/30", "/10")}`}
              >
                <span className={`font-medium text-foreground text-sm`}>{skill.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tools Grid with colors */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            Toolkit
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group bg-gradient-to-br from-card/50 to-card/30 border rounded-lg p-4 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                style={{
                  borderColor: `var(--color-${tool.color.split("-")[1]})20`,
                }}
              >
                <span
                  className={`text-sm font-medium ${tool.color} group-hover:opacity-100 opacity-90 transition-opacity`}
                >
                  {tool.name}
                </span>
                <p className="text-xs text-primary/60 mt-1 font-mono">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
