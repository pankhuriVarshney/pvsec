"use client"

import { MDXRemote } from "next-mdx-remote/rsc"

interface BlogContentProps {
  content: string
  components: any
}

export function BlogContent({ content, components }: BlogContentProps) {
  return (
    <>
      <div className="blog-content">
        <MDXRemote source={content} components={components} />
      </div>
      
      {/* Add global styles for blog content */}
      <style jsx global>{`
        .blog-content {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        .blog-content p {
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: hsl(var(--muted-foreground));
          font-size: 1.125rem;
        }
        
        .blog-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: hsl(var(--primary));
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }
        
        .blog-content h2 {
          font-size: 2rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid hsl(var(--border) / 0.5);
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: hsl(var(--accent));
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .blog-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .blog-content ul, .blog-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .blog-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
          font-size: 1.125rem;
        }
        
        .blog-content blockquote {
          border-left: 4px solid hsl(var(--primary));
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: hsl(var(--muted-foreground));
          background: hsl(var(--secondary) / 0.3);
          border-radius: 0 0.5rem 0.5rem 0;
          font-size: 1.125rem;
        }
        
        .blog-content code {
          font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
          font-size: 0.9em;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          background: hsl(var(--secondary));
          color: hsl(var(--accent));
        }
        
        .blog-content pre {
          background: hsl(var(--secondary) / 0.5);
          border: 1px solid hsl(var(--border));
          border-radius: 0.5rem;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        .blog-content pre code {
          background: transparent;
          padding: 0;
          color: inherit;
          font-size: 0.9rem;
        }
        
        .blog-content a {
          color: hsl(var(--primary));
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 2px;
          transition: color 0.2s;
        }
        
        .blog-content a:hover {
          color: hsl(var(--primary) / 0.8);
        }
        
        .blog-content img {
          display: block;
          max-width: 100%;
          height: auto;
          margin: 2rem auto;
          border-radius: 0.75rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          border: 1px solid hsl(var(--border));
        }
        
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
        }
        
        .blog-content th, .blog-content td {
          border: 1px solid hsl(var(--border));
          padding: 0.75rem;
          text-align: left;
        }
        
        .blog-content th {
          background: hsl(var(--secondary));
          font-weight: 600;
          color: hsl(var(--foreground));
        }
        
        .blog-content hr {
          border: none;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            hsl(var(--border)),
            transparent
          );
          margin: 3rem 0;
        }
        
        .blog-content > *:first-child {
          margin-top: 0;
        }
        
        .blog-content > *:last-child {
          margin-bottom: 0;
        }
        
        /* Custom styles for diagram text */
        .blog-content .diagram-text {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
        }
        
        .blog-content .diagram-text span {
          background: hsl(var(--secondary));
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-family: 'SF Mono', monospace;
          font-size: 0.875rem;
          border: 1px solid hsl(var(--border));
        }
        
        /* Style for centered content */
        .blog-content .center {
          text-align: center;
          margin: 2rem auto;
        }
        
        /* Style for highlighted text */
        .blog-content .highlight {
          background: linear-gradient(120deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2));
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-weight: 500;
        }
      `}</style>
    </>
  )
}