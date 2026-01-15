import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ExtensionCleanup } from "@/components/extension-cleanup"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Pankhuri Varshney | Cybersecurity & AI Enthusiast",
  description: "CSE Major | Aspiring Red Team Analyst | Ethical Hacker | Security Researcher",
  keywords: ["cybersecurity", "penetration testing", "ethical hacker", "red team", "VAPT", "AI security"],
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <ExtensionCleanup />
      </body>
    </html>
  )
}