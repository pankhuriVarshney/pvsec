"use client"

import { useState, useEffect } from "react"
import { MatrixRain } from "./matrix-rain"
import { Navbar } from "./navbar"
import { LoadingSplash } from "./loading-splash"
import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { ManifestoSection } from "./manifesto-section"
import { SkillsSection } from "./skills-section"
import { ExperienceSection } from "./experience-section"
import { ProjectsSection } from "./projects-section"
import BlogsSection from "./blogs-section" // Server Component
import { CertificationsSection } from "./certifications-section"
import { ContactSection } from "./contact-section"
import { Footer } from "./footer"

export default function HomeClientWrapper() {
  const [splashComplete, setSplashComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSplashComplete(true), 4000)
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

        {/* Server Component */}
        <BlogsSection />

        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
