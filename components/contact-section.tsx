"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setStatus("sending")

  try {
    const res = await fetch("https://formspree.io/f/mreebbwy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formState),
    })

    if (!res.ok) throw new Error("Failed")

    setStatus("success")
    setFormState({ name: "", email: "", message: "" })
  } catch (err) {
    setStatus("error")
  }

  setTimeout(() => setStatus("idle"), 3000)
}


  const socials = [
  {
    name: "GitHub",
    icon: Github,
    handle: "github.com/pankhuriVarshney",
    href: "https://github.com/pankhuriVarshney",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    handle: "linkedin.com/in/pankhurivarshney",
    href: "https://www.linkedin.com/in/pankhurivarshney/",
  },
  {
    name: "Email",
    icon: Mail,
    handle: "pankhu.var@gmail.com",
    href: "mailto:pankhu.var@gmail.com",
  },
]


  return (
    <section id="contact" className="relative py-24 px-4 bg-card/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-primary tracking-widest uppercase font-mono">Connect</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Interested in collaborating on security projects or have an opportunity? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form - cleaner */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === "idle" && (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
                {status === "sending" && <span>Sending...</span>}
                {status === "success" && (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Sent
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    Failed to Send
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Links - cleaner */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-5">Connect With Me</h3>

            <div className="space-y-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-colors"
                  >
                    <div className="p-2.5 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Status */}
            <div className="mt-8 p-4 bg-secondary/20 border border-border rounded-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-primary font-medium">Open to Opportunities</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Graduating May 2027. Looking for security internships and research opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
