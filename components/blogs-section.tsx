"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import type { Blog } from "@/lib/blog"

// Update the Blog interface to include description
interface BlogWithDescription extends Blog {
  description: string
}

export default function BlogsSection() {
  const [blogs, setBlogs] = useState<BlogWithDescription[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blogs")
        const data = await response.json()
        
        if (response.ok) {
          setBlogs(data.blogs || [])
        } else {
          setError(data.error || "Failed to load blogs")
        }
      } catch (err) {
        setError("Failed to fetch blogs")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading) {
    return (
      <section id="blogs" className="py-20 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-primary">Tech</span> <span className="text-foreground">Blogs</span>
            </h2>
            <p className="text-muted-foreground">
              Loading articles about cybersecurity, penetration testing, and security research...
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 animate-pulse h-[180px]">
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-800 rounded w-1/2 mb-6"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-gray-700 rounded w-16"></div>
                  <div className="h-6 bg-gray-700 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="blogs" className="py-20 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-500">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-primary text-white rounded"
          >
            Retry
          </button>
        </div>
      </section>
    )
  }

  if (blogs.length === 0) {
    return (
      <section id="blogs" className="py-20 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
        </div>
      </section>
    )
  }

  return (
    <section id="blogs" className="py-20 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">Tech</span>{" "}
            <span className="text-foreground">Blogs</span>
          </h2>
          <p className="text-muted-foreground">
            In-depth articles about cybersecurity, penetration testing, and security research
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog.slug} className="group relative">
              <Link href={`/blog/${blog.slug}`}>
                <div className="relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer overflow-hidden h-full min-h-[200px]">
                  
                  {/* Main content - visible by default */}
                  <div className="relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-mono bg-secondary rounded text-primary border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs font-mono bg-secondary/50 rounded text-muted-foreground border border-border">
                          +{blog.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Description overlay - appears on hover */}
                  <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-card/95 backdrop-blur-sm flex flex-col justify-center">
                    <div className="text-left">
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                        About this article
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-5 leading-relaxed">
                        {blog.description || "No description available"}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-primary font-mono group-hover:translate-x-1 transition-transform duration-300">
                        <span>Read full article</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}