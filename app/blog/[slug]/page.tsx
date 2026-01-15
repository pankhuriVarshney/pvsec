// import { notFound } from "next/navigation"
// import Link from "next/link"
// import { ChevronLeft } from "lucide-react"
// import { getBlogBySlug } from "@/lib/blog"
// import { MDXRemote } from "next-mdx-remote/rsc"

// // Blog data - you can easily add new blogs here


// export default async function BlogPost(
//   { params }: { params: Promise<{ slug: string }> }
// ) {
//   const { slug } = await params
//   const blog = getBlogBySlug(slug)

//   if (!blog) {
//     notFound()
//   }

//   return (
//     <main className="min-h-screen bg-background">
//       {/* Header */}
//       <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
//         <div className="max-w-4xl mx-auto px-4 md:px-8 py-4">
//           <Link
//             href="/#blogs"
//             className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
//           >
//             <ChevronLeft size={20} />
//             <span className="font-mono text-sm">Back to blogs</span>
//           </Link>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
//         {/* Title and metadata */}
//         <article>
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{blog.title}</h1>

//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-border/50">
//             <div className="flex gap-6 text-sm text-muted-foreground font-mono">
//               <span>{blog.date}</span>
//               <span>•</span>
//               <span>{blog.readTime}</span>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {blog.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="px-3 py-1 text-xs font-mono bg-secondary rounded text-primary border border-border hover:border-primary/50 transition-colors"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Blog content */}
//           <div className="prose prose-invert max-w-none">
//             {/* <style jsx>{`
//               :global(.prose) {
//                 --tw-prose-body: var(--color-foreground);
//                 --tw-prose-headings: var(--color-foreground);
//                 --tw-prose-links: var(--color-primary);
//                 --tw-prose-code: var(--color-accent);
//                 --tw-prose-pre-bg: var(--color-secondary);
//               }

//               :global(.prose h2) {
//                 margin-top: 2rem;
//                 margin-bottom: 1rem;
//                 font-size: 1.875rem;
//                 font-weight: 700;
//                 color: var(--color-primary);
//               }

//               :global(.prose h3) {
//                 margin-top: 1.5rem;
//                 margin-bottom: 0.75rem;
//                 font-size: 1.25rem;
//                 font-weight: 600;
//                 color: var(--color-accent);
//               }

//               :global(.prose p) {
//                 margin-bottom: 1rem;
//                 line-height: 1.75;
//                 color: var(--color-muted-foreground);
//               }

//               :global(.prose ul) {
//                 margin-bottom: 1rem;
//                 padding-left: 2rem;
//               }

//               :global(.prose li) {
//                 margin-bottom: 0.5rem;
//                 color: var(--color-muted-foreground);
//               }

//               :global(.prose li::marker) {
//                 color: var(--color-primary);
//               }

//               :global(.prose strong) {
//                 color: var(--color-foreground);
//                 font-weight: 600;
//               }
//             `}</style> */}
//            <MDXRemote source={blog.content} />

//           </div>

//           {/* CTA at end */}
//           <div className="mt-16 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
//             <h3 className="text-lg font-semibold text-foreground mb-2">Interested in more?</h3>
//             <p className="text-muted-foreground mb-4">Check out my other security research and technical articles</p>
//             <Link
//               href="/#blogs"
//               className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-mono text-sm"
//             >
//               View All Articles
//             </Link>
//           </div>
//         </article>
//       </div>
//     </main>
//   )
// }"use client"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_PATH = path.join(process.cwd(), "content", "blog")

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const files = fs.readdirSync(BLOG_PATH)
  return files.map((filename) => ({
    slug: filename.replace(/\.(mdx|md)$/, ""),
  }))
}

// Custom components for MDX with enhanced styling
const mdxComponents = {
  // Style images to be centered and responsive
  img: (props: any) => (
    <div className="my-12 flex justify-center">
      <div className="relative max-w-3xl w-full">
        <img
          {...props}
          className="mx-auto rounded-xl border-2 border-border shadow-2xl max-w-full h-auto"
          style={{ maxHeight: "600px" }}
          alt={props.alt || "Blog image"}
        />
        {props.alt && (
          <p className="text-center text-sm text-muted-foreground mt-3 italic">
            {props.alt}
          </p>
        )}
      </div>
    </div>
  ),
  // Style headings
  h1: (props: any) => (
    <h1 
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-12 mb-8 leading-tight tracking-tight" 
      {...props} 
    />
  ),
  h2: (props: any) => (
    <h2 
      className="text-3xl md:text-4xl font-bold text-foreground mt-12 mb-6 pb-3 border-b-2 border-primary/30" 
      {...props} 
    />
  ),
  h3: (props: any) => (
    <h3 
      className="text-2xl md:text-3xl font-semibold text-accent mt-10 mb-4" 
      {...props} 
    />
  ),
  h4: (props: any) => (
    <h4 
      className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3" 
      {...props} 
    />
  ),
  // Style paragraphs
  p: (props: any) => (
    <p 
      className="text-lg text-muted-foreground leading-relaxed mb-8 tracking-wide" 
      {...props} 
    />
  ),
  // Style lists
  ul: (props: any) => (
    <ul 
      className="list-disc pl-8 text-muted-foreground mb-8 space-y-4" 
      {...props} 
    />
  ),
  ol: (props: any) => (
    <ol 
      className="list-decimal pl-8 text-muted-foreground mb-8 space-y-4" 
      {...props} 
    />
  ),
  li: (props: any) => (
    <li 
      className="leading-relaxed text-lg pl-2" 
      {...props} 
    />
  ),
  // Style blockquotes
  blockquote: (props: any) => (
    <blockquote 
      className="border-l-4 border-primary pl-6 py-4 my-8 italic bg-gradient-to-r from-primary/10 to-transparent rounded-r-lg text-lg" 
      {...props} 
    />
  ),
  // Style inline code
  code: (props: any) => (
    <code 
      className="bg-secondary text-accent px-2 py-1 rounded-lg font-mono text-sm border border-border" 
      {...props} 
    />
  ),
  // Style code blocks
  pre: (props: any) => (
    <div className="my-8">
      <pre 
        className="bg-secondary/80 p-6 rounded-xl overflow-x-auto border-2 border-border shadow-lg" 
        {...props} 
      />
    </div>
  ),
  // Style horizontal rule
  hr: (props: any) => (
    <hr 
      className="my-12 border-t-2 border-dashed border-border/50" 
      {...props} 
    />
  ),
  // Style strong/bold text
  strong: (props: any) => (
    <strong 
      className="font-bold text-foreground" 
      {...props} 
    />
  ),
  // Style em/italic text
  em: (props: any) => (
    <em 
      className="italic text-primary/90" 
      {...props} 
    />
  ),
  // Style links
  a: (props: any) => (
    <a 
      className="text-primary hover:text-accent underline decoration-primary/30 hover:decoration-accent transition-all duration-300 font-medium" 
      {...props} 
    />
  ),
  // Style tables
  table: (props: any) => (
    <div className="my-8 overflow-x-auto rounded-xl border-2 border-border">
      <table 
        className="min-w-full divide-y divide-border" 
        {...props} 
      />
    </div>
  ),
  th: (props: any) => (
    <th 
      className="px-6 py-3 bg-secondary text-left text-sm font-semibold text-foreground uppercase tracking-wider" 
      {...props} 
    />
  ),
  td: (props: any) => (
    <td 
      className="px-6 py-4 text-sm text-muted-foreground border-t border-border" 
      {...props} 
    />
  ),
}

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`)
  
  // Check if .mdx exists, if not try .md
  const actualFilePath = fs.existsSync(filePath) 
    ? filePath 
    : path.join(BLOG_PATH, `${slug}.md`)
  
  if (!fs.existsSync(actualFilePath)) {
    notFound()
  }

  const source = fs.readFileSync(actualFilePath, "utf-8")
  const { data, content } = matter(source)

  const blog = {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString().split('T')[0],
    readTime: data.readTime || "5 min read",
    tags: Array.isArray(data.tags) ? data.tags : [],
    content,
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="border-b-2 border-border/30 bg-gradient-to-b from-card/80 to-background backdrop-blur-lg sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4">
          <Link
            href="/#blogs"
            className="inline-flex items-center gap-3 text-primary hover:text-accent transition-colors duration-300 group"
          >
            <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="font-mono text-sm font-medium">Back to blogs</span>
          </Link>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <article className="space-y-12">
          {/* Title Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                {blog.title}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
            
            {/* Metadata */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b-2 border-border/40">
              <div className="flex items-center gap-6 text-base font-mono">
                <div className="flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-medium">{blog.date}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-accent font-semibold">{blog.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-mono bg-gradient-to-r from-secondary/50 to-secondary border-2 border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 rounded-full text-primary font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="blog-content">
            <MDXRemote 
              source={blog.content} 
              components={mdxComponents}
            />
          </div>

          {/* CTA at end */}
          <div className="mt-20 p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20 backdrop-blur-sm shadow-2xl">
            <div className="text-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-foreground">
                  Dive Deeper Into Cybersecurity
                </h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Explore more in-depth articles on penetration testing, security research, and emerging threats.
                </p>
              </div>
              <Link
                href="/#blogs"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 font-mono text-sm font-semibold"
              >
                <ChevronLeft size={18} className="rotate-180" />
                Explore All Articles
                <ChevronLeft size={18} className="-rotate-180" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}