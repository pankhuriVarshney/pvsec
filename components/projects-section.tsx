"use client"

import { useState } from "react"
import { Folder, Network, Shield, Search, Database, AlertTriangle, Sword } from "lucide-react"

const projects = [
  {
    id: "maya-honeynet",
    name: "MAYA Deception Technology",
    status: "Ongoing",
    description: "Dynamic and state-synchronized honeynet system designed to deceive and map attacker behavior.",
    longDescription:
      "An automated deception platform that lures attackers into an isolated honeynet environment while protecting real infrastructure. The system dynamically adapts to attacker behavior and records full attack chains for threat intelligence, lateral movement analysis, and post-compromise visibility.",
    icon: Shield,
    tech: ["Rust", "Go Lang","Docker", "Network Emulation", "Threat Intelligence", "SIEM"],
    color: "text-destructive",
    featured: true,
  },
  {
    id: "traceprobe",
    name: "TraceProbe – IPDR Logs Mapper",
    status: "Completed",
    description: "Web-based investigative tool for mapping A-Party to B-Party relationships in IPDR logs.",
    longDescription:
      "Built a Kafka-based pipeline to ingest and normalize large-scale IPDR log files. Integrated AbuseIPDB, bogon detection, and geolocation APIs for enrichment, with Elasticsearch and Kibana providing fast querying and geo-mapped dashboards for IPs, services, domains, sessions, and threat indicators.",
    icon: Network,
    tech: ["Python", "Kafka", "Elasticsearch", "Kibana", "AbuseIPDB", "GeoIP"],
    color: "text-primary",
    featured: true,
  },
  {
    id: "red-team-toolkit",
    name: "Red Team Toolkit (DeepCytes)",
    status: "Ongoing",
    description:
      "Modular red team operations toolkit with payload generation, privilege escalation, and automated reporting.",
    longDescription:
      "Designed for real-world offensive simulation, this toolkit includes integrated payload generators, enumeration modules, privilege escalation scripts, custom exploit support, multi-platform payloads, and stealth execution modes with automated post-engagement reporting.",
    icon: Sword,
    tech: ["Javascript", "Python", "Metasploit", "Custom Exploits"],
    color: "text-destructive",
    featured: true,
  },
  {
    id: "exploits-db",
    name: "Exploits Database Platform (DeepCytes)",
    status: "Ongoing",
    description: "Centralized exploits repository indexing 0-day and known CVEs across major technology stacks.",
    longDescription:
      "Built a structured platform to catalog vulnerabilities across web, mobile, IoT, and SCADA environments. Implements tagging, severity scoring, PoC integration, and version-based filtering, with a backend optimized for rapid threat intelligence queries and red team integration.",
    icon: Database,
    tech: ["Python", "PostgreSQL", "FastAPI", "CVE/NVD", "Exploit-DB"],
    color: "text-neon-amber",
  },
  {
    id: "malware-detection",
    name: "AI Malware Detection System",
    status: "Completed",
    description: "AI-based malware scanner using static, dynamic, and memory-level analysis.",
    longDescription:
      "An advanced malware detection platform combining static code analysis, sandboxed dynamic execution, memory forensics, and syscall tracing powered by LLaMA 3 models. Supports PE and APK files, auto-fetches threat intelligence, and detects obfuscation, packing, and polymorphic behavior using hybrid AI and heuristic models.",
    icon: Shield,
    tech: ["Java", "LLaMA 3", "Sandboxing", "Memory Forensics", "Syscall Tracing"],
    color: "text-accent",
    featured: true,
  },
  {
    id: "fraud-detection",
    name: "AI-Powered Real-Time Fraud Detection",
    status: "Completed",
    description: "Scalable fraud detection and customer behavior analytics system built on Zero Trust principles.",
    longDescription:
      "Uses distilled transformer models to analyze real-time transaction streams, enforce MFA, rate limiting, and least-privilege access. Includes AI-driven customer behavior prediction to detect anomalies, prevent fraud, reduce churn, and enable adaptive security policies based on live behavioral patterns.",
    icon: AlertTriangle,
    tech: ["Transformers", "Zero Trust", "Real-Time Analytics", "MFA", "Behavioral AI"],
    color: "text-neon-amber",
    featured: true,
  },
  {
    id: "osint-platform",
    name: "Automated OSINT Platform (DeepCytes)",
    status: "Ongoing",
    description: "AI-powered OSINT automation tool for surface and dark web intelligence gathering.",
    longDescription:
      "An end-to-end OSINT platform that extracts actionable intelligence using entity extraction, timeline mapping, and geolocation. Includes an interactive AI chatbot to assist with footprinting, target profiling, and data correlation across surface web, breach sources, and dark web APIs.",
    icon: Search,
    tech: ["Python", "AI/ML", "OSINT Frameworks", "Dark Web APIs", "NLP"],
    color: "text-primary",
  }
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
