"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

// Blog data - you can easily add new blogs here
const blogPosts: Record<
  string,
  {
    title: string
    date: string
    readTime: string
    tags: string[]
    content: string
  }
> = {
  "network-security-fundamentals": {
    title: "Understanding Network Security Fundamentals",
    date: "Dec 2024",
    readTime: "12 min read",
    tags: ["Networking", "Security", "Protocols"],
    content: `
      <h2>Introduction</h2>
      <p>Network security is the foundation of any robust cybersecurity strategy. In this comprehensive guide, we'll explore the fundamental concepts that every security professional should understand.</p>
      
      <h2>Network Protocols & Vulnerabilities</h2>
      <p>Understanding how data flows across networks is crucial. We'll cover TCP/IP, UDP, ICMP, and how attackers exploit these protocols.</p>
      
      <h3>Key Concepts:</h3>
      <ul>
        <li>OSI Model and its implications for security</li>
        <li>Common network attack vectors</li>
        <li>Packet analysis techniques</li>
        <li>Network segmentation best practices</li>
      </ul>
      
      <h2>Practical Applications</h2>
      <p>Using tools like Wireshark and tcpdump to understand network traffic patterns and identify anomalies in real-world scenarios.</p>
      
      <h2>Conclusion</h2>
      <p>Network security fundamentals are the building blocks of advanced security implementations. Master these concepts and you'll be well-equipped to tackle complex security challenges.</p>
    `,
  },
  "cryptography-symmetric-asymmetric": {
    title: "Cryptography Deep Dive: Symmetric vs Asymmetric",
    date: "Nov 2024",
    readTime: "15 min read",
    tags: ["Cryptography", "Encryption", "Security"],
    content: `
      <h2>The Science Behind Encryption</h2>
      <p>Cryptography is the art of secure communication. Whether you're protecting sensitive data or ensuring authentication, understanding encryption is essential.</p>
      
      <h2>Symmetric Encryption</h2>
      <p>Symmetric encryption uses a single key for both encryption and decryption. Common algorithms include AES, DES, and 3DES.</p>
      
      <h3>Advantages:</h3>
      <ul>
        <li>Fast and efficient</li>
        <li>Suitable for large data volumes</li>
        <li>Low computational overhead</li>
      </ul>
      
      <h2>Asymmetric Encryption</h2>
      <p>Asymmetric encryption uses a pair of keys - public and private. RSA and ECC are widely used for secure key exchange and digital signatures.</p>
      
      <h3>Use Cases:</h3>
      <ul>
        <li>Public key infrastructure</li>
        <li>Digital signatures</li>
        <li>Secure key exchange</li>
        <li>SSL/TLS certificates</li>
      </ul>
      
      <h2>Practical Implementation</h2>
      <p>Learn how to implement cryptographic solutions securely in modern applications and avoid common pitfalls.</p>
    `,
  },
  "penetration-testing-methodology": {
    title: "Penetration Testing Methodology & Tools",
    date: "Oct 2024",
    readTime: "18 min read",
    tags: ["Pentesting", "Tools", "Hacking"],
    content: `
      <h2>What is Penetration Testing?</h2>
      <p>Penetration testing is an authorized security assessment where you simulate real-world attacks to identify vulnerabilities before malicious actors do.</p>
      
      <h2>Phases of a Penetration Test</h2>
      <h3>1. Reconnaissance</h3>
      <p>Gather information about the target without triggering alerts. Use passive techniques to map the attack surface.</p>
      
      <h3>2. Scanning</h3>
      <p>Identify open ports, services, and potential entry points using tools like Nmap and Nessus.</p>
      
      <h3>3. Enumeration</h3>
      <p>Extract detailed information about systems, users, and configurations.</p>
      
      <h3>4. Exploitation</h3>
      <p>Attempt to compromise systems using discovered vulnerabilities with tools like Metasploit.</p>
      
      <h3>5. Post-Exploitation</h3>
      <p>Maintain access, escalate privileges, and document findings for the report.</p>
      
      <h2>Essential Tools</h2>
      <ul>
        <li><strong>Nmap:</strong> Network mapping and port scanning</li>
        <li><strong>Burp Suite:</strong> Web application testing</li>
        <li><strong>Metasploit:</strong> Exploitation framework</li>
        <li><strong>Wireshark:</strong> Network analysis</li>
      </ul>
      
      <h2>Ethical Considerations</h2>
      <p>Always ensure you have written authorization. Unauthorized penetration testing is illegal.</p>
    `,
  },
  "incident-response-detection-recovery": {
    title: "Incident Response: From Detection to Recovery",
    date: "Sep 2024",
    readTime: "14 min read",
    tags: ["Incident Response", "Detection", "Recovery"],
    content: `
      <h2>Understanding Security Incidents</h2>
      <p>A security incident is any event that could compromise the confidentiality, integrity, or availability of your systems or data.</p>
      
      <h2>The Incident Response Lifecycle</h2>
      <h3>1. Preparation</h3>
      <p>Establish an IR team, create playbooks, and implement monitoring solutions like SIEM systems.</p>
      
      <h3>2. Detection & Analysis</h3>
      <p>Identify suspicious activities through logs, alerts, and user reports. Classify the incident severity.</p>
      
      <h3>3. Containment</h3>
      <p>Short-term: Isolate affected systems. Long-term: Implement fixes to prevent reinfection.</p>
      
      <h3>4. Eradication</h3>
      <p>Remove the attacker's presence and close all entry points they exploited.</p>
      
      <h3>5. Recovery</h3>
      <p>Restore systems from clean backups and monitor for signs of reinfection.</p>
      
      <h3>6. Post-Incident Activities</h3>
      <p>Conduct a thorough review, document lessons learned, and update security controls.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Maintain detailed logs of all IR activities</li>
        <li>Communicate transparently with stakeholders</li>
        <li>Preserve evidence for legal/forensic purposes</li>
        <li>Continuously improve IR capabilities</li>
      </ul>
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogPosts[params.slug]

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4">
          <Link
            href="/#blogs"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ChevronLeft size={20} />
            <span className="font-mono text-sm">Back to blogs</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Title and metadata */}
        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{blog.title}</h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-border/50">
            <div className="flex gap-6 text-sm text-muted-foreground font-mono">
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-secondary rounded text-primary border border-border hover:border-primary/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Blog content */}
          <div className="prose prose-invert max-w-none">
            <style jsx>{`
              :global(.prose) {
                --tw-prose-body: var(--color-foreground);
                --tw-prose-headings: var(--color-foreground);
                --tw-prose-links: var(--color-primary);
                --tw-prose-code: var(--color-accent);
                --tw-prose-pre-bg: var(--color-secondary);
              }

              :global(.prose h2) {
                margin-top: 2rem;
                margin-bottom: 1rem;
                font-size: 1.875rem;
                font-weight: 700;
                color: var(--color-primary);
              }

              :global(.prose h3) {
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                font-size: 1.25rem;
                font-weight: 600;
                color: var(--color-accent);
              }

              :global(.prose p) {
                margin-bottom: 1rem;
                line-height: 1.75;
                color: var(--color-muted-foreground);
              }

              :global(.prose ul) {
                margin-bottom: 1rem;
                padding-left: 2rem;
              }

              :global(.prose li) {
                margin-bottom: 0.5rem;
                color: var(--color-muted-foreground);
              }

              :global(.prose li::marker) {
                color: var(--color-primary);
              }

              :global(.prose strong) {
                color: var(--color-foreground);
                font-weight: 600;
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

          {/* CTA at end */}
          <div className="mt-16 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-2">Interested in more?</h3>
            <p className="text-muted-foreground mb-4">Check out my other security research and technical articles</p>
            <Link
              href="/#blogs"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-mono text-sm"
            >
              View All Articles
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
