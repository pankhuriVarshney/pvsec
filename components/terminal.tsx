"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { TerminalIcon, Cpu, Wifi, Clock } from "lucide-react"

interface TerminalLine {
  type: "command" | "output" | "prompt" | "system"
  content: string
  color?: string
}

const commands: Record<string, string[]> = {
  whoami: [
    "┌──────────────────────────────────────────────────┐",
    "│  OPERATOR: Pankhuri Varshney                     │",
    "│  CALLSIGN: pv.sec                                │",
    "│  ROLE: Offensive Security Specialist             │",
    "│  AFFILIATION: Symbiosis Institute of Technology  │",
    "│  STATUS: Active | eJPT Certified                 │",
    "│  CLEARANCE: Red Team Operations                  │",
    "└──────────────────────────────────────────────────┘",
  ],
  "ls -la projects/": [
    "total 6 active repositories",
    "drwxr-xr-x  traceprobe-ipdr/      [Telecom Security Framework]",
    "drwxr-xr-x  red-team-toolkit/     [Custom Exploitation Tools]",
    "drwxr-xr-x  exploits-database/    [CVE Research Collection]",
    "drwxr-xr-x  malware-detection/    [ML-Powered Threat Analysis]",
    "drwxr-xr-x  fraud-detection/      [Ensemble Learning System]",
    "drwxr-xr-x  osint-platform/       [Intelligence Gathering]",
  ],
  "cat /etc/skills": [
    "# /etc/skills - Capability Matrix",
    "",
    "[OFFENSIVE_SECURITY]",
    "  ├── Penetration Testing (Web, Network, API)",
    "  ├── Vulnerability Assessment (OWASP Top 10)",
    "  ├── Red Team Operations & Social Engineering",
    "  └── Digital Forensics & Incident Response",
    "",
    "[DEVELOPMENT]",
    "  ├── Languages: Python, Rust, Java, C/C++, JS",
    "  ├── Frameworks: React, Node.js, Flask",
    "  └── Security: Custom exploit development",
    "",
    "[AI_SECURITY]",
    "  ├── ML-based Threat Detection",
    "  ├── Malware Classification Models",
    "  └── NLP for Threat Intelligence",
  ],
  "cat /etc/arsenal": [
    "# /etc/arsenal - Tools & Frameworks",
    "",
    "[RECONNAISSANCE]",
    "  Nmap, Shodan, theHarvester, Amass",
    "",
    "[EXPLOITATION]",
    "  Metasploit, Burp Suite, SQLMap, Nuclei",
    "",
    "[FORENSICS]",
    "  Autopsy, FTK Imager, Volatility, Ghidra",
    "",
    "[MONITORING]",
    "  Wireshark, Splunk, ELK Stack",
  ],
  "cat achievements.log": [
    "[2024-12-01] IEEE Paper Published - AI in Cybersecurity",
    "[2024-11-15] 1st Place - Cyber Genesis Hackathon",
    "[2024-10-20] Merit Scholarship - Academic Excellence",
    "[2024-09-10] eJPT Certification - INE Security",
    "[2024-08-05] Red Team Intern - DeepCytes Cyber Labs",
    "[2024-07-01] Cisco Cybersecurity Essentials - Completed",
  ],
  neofetch: [
    "        ╭─────────────────────────╮",
    "        │  ██████╗ ██╗   ██╗      │",
    "        │  ██╔══██╗██║   ██║      │",
    "        │  ██████╔╝██║   ██║      │",
    "        │  ██╔═══╝ ╚██╗ ██╔╝      │",
    "        │  ██║      ╚████╔╝       │",
    "        │  ╚═╝       ╚═══╝        │",
    "        ╰─────────────────────────╯",
    "",
    "  OS: Security-Focused Linux",
    "  Host: pv.sec @ Symbiosis IT",
    "  Kernel: Offensive Security v2.0",
    "  Shell: bash 5.1.16",
    "  Terminal: xterm-256color",
    "  CPU: Always Analyzing Threats",
    "  Memory: Filled with Exploits",
  ],
  help: [
    "┌─ AVAILABLE COMMANDS ─────────────────────────────┐",
    "│                                                  │",
    "│  whoami            Display operator profile      │",
    "│  ls -la projects/  List security projects        │",
    "│  cat /etc/skills   Show capability matrix        │",
    "│  cat /etc/arsenal  Display tools & frameworks    │",
    "│  cat achievements.log  View achievement log      │",
    "│  neofetch          System information            │",
    "│  clear             Clear terminal                │",
    "│                                                  │",
    "└──────────────────────────────────────────────────┘",
  ],
}

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "system",
      content: "╔══════════════════════════════════════════════════════════════╗",
      color: "text-primary/60",
    },
    {
      type: "system",
      content: "║  PV.SEC SECURE TERMINAL v2.4.1                               ║",
      color: "text-primary/60",
    },
    {
      type: "system",
      content: "║  Connection established. Type 'help' for available commands. ║",
      color: "text-primary/60",
    },
    {
      type: "system",
      content: "╚══════════════════════════════════════════════════════════════╝",
      color: "text-primary/60",
    },
    { type: "output", content: "", color: "text-muted-foreground" },
    { type: "prompt", content: "" },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString("en-US", { hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const typeOutput = async (outputs: string[]) => {
    setIsTyping(true)
    for (const output of outputs) {
      await new Promise((resolve) => setTimeout(resolve, 25))
      setLines((prev) => [
        ...prev.slice(0, -1),
        { type: "output", content: output, color: "text-foreground" },
        { type: "prompt", content: "" },
      ])
    }
    setIsTyping(false)
  }

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    setLines((prev) => [
      ...prev.slice(0, -1),
      { type: "command", content: `┌──(pv㉿sec)-[~]`, color: "text-primary" },
      { type: "command", content: `└─$ ${cmd}`, color: "text-accent" },
      { type: "prompt", content: "" },
    ])

    if (trimmedCmd === "clear") {
      setLines([{ type: "prompt", content: "" }])
      return
    }

    const output = commands[trimmedCmd]
    if (output) {
      await typeOutput(output)
    } else {
      setLines((prev) => [
        ...prev.slice(0, -1),
        { type: "output", content: `bash: ${cmd}: command not found`, color: "text-destructive" },
        { type: "output", content: `Type 'help' for available commands.`, color: "text-muted-foreground" },
        { type: "prompt", content: "" },
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isTyping) {
      handleCommand(input)
      setInput("")
    }
  }

  return (
    <div
      className="relative w-full max-w-2xl bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden shadow-2xl shadow-primary/5"
      onClick={() => inputRef.current?.focus()}
      suppressHydrationWarning
    >
      {/* Terminal header - enhanced */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/80 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
          </div>
          <div className="flex items-center gap-2 ml-2">
            <TerminalIcon className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs text-foreground font-mono font-medium">pv@sec</span>
            <span className="text-xs text-muted-foreground font-mono">: ~/security</span>
          </div>
        </div>

        {/* Status indicators */}
        <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-1">
            <Wifi className="w-3 h-3 text-green-500" />
            <span className="hidden sm:inline">secure</span>
          </div>
          <div className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-primary" />
            <span className="hidden sm:inline">active</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-accent" />
            <span>{currentTime}</span>
          </div>
        </div>
      </div>

      {/* Terminal body */}
      <div
        ref={terminalRef}
        className="p-4 h-72 overflow-y-auto font-mono text-sm bg-gradient-to-b from-background to-background/95"
      >
        {lines.map((line, i) => (
          <div key={i} className={`${line.color || ""} leading-relaxed`}>
            {line.type === "prompt" ? (
              <form onSubmit={handleSubmit} className="flex items-center">
                <span className="text-primary">┌──(</span>
                <span className="text-accent">pv㉿sec</span>
                <span className="text-primary">)-[</span>
                <span className="text-foreground">~</span>
                <span className="text-primary">]</span>
                <br />
                <span className="text-primary">└─$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-foreground"
                  disabled={isTyping}
                  autoFocus
                />
                <span className="w-2 h-4 bg-primary animate-pulse" />
              </form>
            ) : (
              <span className="whitespace-pre">{line.content}</span>
            )}
          </div>
        ))}
      </div>

      {/* Quick commands - enhanced */}
      <div className="flex flex-wrap gap-2 px-4 py-3 bg-secondary/50 border-t border-border">
        <span className="text-xs text-muted-foreground mr-1">Quick:</span>
        {["whoami", "ls -la projects/", "cat /etc/skills", "neofetch"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            disabled={isTyping}
            className="px-2.5 py-1 text-xs text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border/50 rounded transition-all disabled:opacity-50 font-mono"
            type="button"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  )
}