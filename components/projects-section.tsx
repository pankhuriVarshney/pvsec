"use client"

import { useState } from "react"
import { Folder, Network, Shield, Search, Database, AlertTriangle, Sword } from "lucide-react"

const projects = [
  {
    id: "traceprobe",
    name: "TraceProbe - IPDR Logs Mapper",
    status: "Completed",
    description: "Web-based investigative tool for mapping A-Party to B-Party relationships in IPDR logs.",
    longDescription:
      "Built a Kafka-based pipeline to ingest and normalize large-scale log files. Integrated Elasticsearch and Kibana for fast querying and intuitive dashboards with geo-mapped IPs, top services, and threat indicators.",
    icon: Network,
    tech: ["Python", "Kafka", "Elasticsearch", "Kibana", "AbuseIPDB"],
    color: "text-primary",
    featured: true,
  },
  {
    id: "red-team-toolkit",
    name: "Red Team Toolkit",
    status: "Completed",
    description:
      "Modular red team operations toolkit with integrated payload generators and privilege escalation scripts.",
    longDescription:
      "Built at DeepCytes. Includes enumeration modules, automated reporting, custom exploits, multi-platform payloads, and stealth execution modes for real-world offensive simulation.",
    icon: Sword,
    tech: ["Python", "Rust", "Metasploit", "Custom Exploits"],
    color: "text-destructive",
    featured: true,
  },
  {
    id: "exploits-db",
    name: "Exploits Database Platform",
    status: "Completed",
    description: "Structured exploits repository indexing 0-day and known CVEs across major tech stacks.",
    longDescription:
      "Built at DeepCytes. Implements tagging, severity scoring, PoC integration, and version-based filtering. Backend designed for rapid threat intelligence queries.",
    icon: Database,
    tech: ["Python", "PostgreSQL", "FastAPI", "CVE/NVD"],
    color: "text-neon-amber",
  },
  {
    id: "malware-detection",
    name: "AI Malware Detection System",
    status: "Completed",
    description: "AI-based malware scanner using static code analysis, dynamic execution, and memory forensics.",
    longDescription:
      "Utilizes LLaMA 3 models for analysis. Supports PE and APK formats, auto-fetches threat intel, detects obfuscation and polymorphic behavior using heuristic and AI models.",
    icon: Shield,
    tech: ["Python", "LLaMA 3", "Sandbox", "Syscall Tracing"],
    color: "text-accent",
    featured: true,
  },
  {
    id: "fraud-detection",
    name: "Real-Time Fraud Detection System",
    status: "Completed",
    description: "Scalable fraud detection using distilled transformer models and Zero Trust architecture.",
    longDescription:
      "Supports real-time transaction monitoring, MFA, rate limiting, and least-privilege enforcement. Includes AI-driven behavior prediction to detect anomalies and prevent fraud.",
    icon: AlertTriangle,
    tech: ["Transformers", "Zero Trust", "Real-time Analytics"],
    color: "text-neon-amber",
  },
  {
    id: "osint-platform",
    name: "Automated OSINT Platform",
    status: "Completed",
    description: "AI-integrated OSINT automation tool for surface and dark web intelligence gathering.",
    longDescription:
      "Built at DeepCytes. Features entity extraction, timeline mapping, geolocation, and an interactive chatbot for footprinting, target profiling, and data correlation.",
    icon: Search,
    tech: ["Python", "AI/ML", "OSINT Frameworks", "Dark Web APIs"],
    color: "text-primary",
  },
]

const statusColors: Record<string, string> = {
  Completed: "bg-neon-green/20 text-neon-green border-neon-green/30",
  "In Progress": "bg-primary/20 text-primary border-primary/30",
}

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="projects" className="relative py-24 px-4 bg-card/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-primary tracking-widest uppercase font-mono">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Projects</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Production-grade security tools built during my internship and personal research
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.id}
                className={`group relative bg-card/50 backdrop-blur-sm border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 ${
                  project.featured ? "border-primary/20" : "border-border"
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 text-xs bg-accent/20 text-accent rounded border border-accent/30">
                    Featured
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/20">
                  <div className="flex items-center gap-3">
                    <Folder className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-mono text-muted-foreground">{project.id}</span>
                  </div>
                  <span className={`px-2 py-0.5 text-xs rounded border ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-secondary rounded-lg">
                      <Icon className={`w-5 h-5 ${project.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs bg-secondary text-muted-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
