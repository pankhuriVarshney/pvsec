"use client"

import { useState, useEffect } from "react"
import { MatrixRain } from "@/components/matrix-rain"
import { Navbar } from "@/components/navbar"
import { LoadingSplash } from "@/components/loading-splash"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogsSection } from "@/components/blogs-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [splashComplete, setSplashComplete] = useState(false)

  useEffect(() => {
    // Splash screen duration
    const timer = setTimeout(() => {
      setSplashComplete(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Loading Splash Screen */}
      <LoadingSplash />

      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Scanlines Overlay */}
      <div className="fixed inset-0 pointer-events-none scanlines opacity-20 z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div className="relative z-20">
        <HeroSection />
        <AboutSection />
        <ManifestoSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
