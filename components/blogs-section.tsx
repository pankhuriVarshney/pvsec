"use client"

import Link from "next/link"

export function BlogsSection() {
  const blogs = [
    {
      slug: "network-security-fundamentals",
      title: "Understanding Network Security Fundamentals",
      description:
        "A comprehensive guide to network protocols, packet analysis, and common vulnerabilities in network infrastructure.",
      date: "Dec 2024",
      readTime: "12 min read",
      tags: ["Networking", "Security", "Protocols"],
      color: "from-primary to-cyan-500",
    },
    {
      slug: "cryptography-symmetric-asymmetric",
      title: "Cryptography Deep Dive: Symmetric vs Asymmetric",
      description:
        "Exploring encryption algorithms, key management, and practical applications of cryptography in modern security systems.",
      date: "Nov 2024",
      readTime: "15 min read",
      tags: ["Cryptography", "Encryption", "Security"],
      color: "from-accent to-violet-500",
    },
    {
      slug: "penetration-testing-methodology",
      title: "Penetration Testing Methodology & Tools",
      description:
        "Best practices for ethical hacking, using Metasploit, Burp Suite, and writing your own security tools effectively.",
      date: "Oct 2024",
      readTime: "18 min read",
      tags: ["Pentesting", "Tools", "Hacking"],
      color: "from-neon-amber to-orange-500",
    },
    {
      slug: "incident-response-detection-recovery",
      title: "Incident Response: From Detection to Recovery",
      description:
        "Step-by-step guide to detecting security incidents, containing threats, and implementing proper incident response procedures.",
      date: "Sep 2024",
      readTime: "14 min read",
      tags: ["Incident Response", "Detection", "Recovery"],
      color: "from-neon-green to-emerald-500",
    },
  ]

  return (
    <section id="blogs" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">Tech</span>
            <span className="text-foreground"> Blogs</span>
          </h2>
          <p className="text-muted-foreground">
            In-depth articles about cybersecurity, penetration testing, and security research
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug}>
              <div className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden h-full">
                {/* Gradient accent on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${blog.color}`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex-1 pr-4">
                      {blog.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{blog.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-secondary rounded text-primary border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-border/50">
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <div className="text-primary text-sm group-hover:translate-x-1 transition-transform">→</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-mono text-sm">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}
