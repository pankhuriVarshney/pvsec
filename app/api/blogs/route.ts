import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_PATH = path.join(process.cwd(), "content", "blog")

export interface Blog {
  slug: string
  title: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

export async function GET() {
  try {
    // Check if directory exists
    if (!fs.existsSync(BLOG_PATH)) {
      return NextResponse.json({ 
        blogs: [],
        message: "Blog directory doesn't exist. Create content/blog/ folder."
      })
    }

    const files = fs.readdirSync(BLOG_PATH)
    
    // Filter for .mdx and .md files only
    const blogFiles = files.filter(file => 
      file.endsWith('.mdx') || file.endsWith('.md')
    )
    
    if (blogFiles.length === 0) {
      return NextResponse.json({ 
        blogs: [],
        message: "No blog posts found. Add .mdx files to content/blog/"
      })
    }

    const blogs = blogFiles.map((filename) => {
      try {
        const slug = filename.replace(/\.(mdx|md)$/, "")
        const filePath = path.join(BLOG_PATH, filename)
        const source = fs.readFileSync(filePath, "utf-8")
        
        // Parse frontmatter with error handling
        let data: any = {}
        let content = ""
        
        try {
          const parsed = matter(source)
          data = parsed.data
          content = parsed.content
        } catch (parseError) {
          console.error(`Error parsing frontmatter in ${filename}:`, parseError)
          // Use defaults if parsing fails
          data = { title: `Error in ${filename}` }
          content = `# Error parsing this post\n\nPlease check the frontmatter format.`
        }

        // In the blog mapping section:
return {
  slug,
  title: data.title || "Untitled",
  description: data.description || "",  // Add this line
  date: data.date || new Date().toISOString().split('T')[0],
  readTime: data.readTime || "5 min read",
  tags: Array.isArray(data.tags) ? data.tags : [],
  content,
} as Blog
      } catch (fileError) {
        console.error(`Error processing file ${filename}:`, fileError)
        return {
          slug: filename.replace(/\.(mdx|md)$/, ""),
          title: `Error: ${filename}`,
          date: new Date().toISOString().split('T')[0],
          readTime: "1 min read",
          tags: ["error"],
          content: `# Error processing this file\n\nPlease check the file format.`,
        } as Blog
      }
    }).filter(Blog => Blog !== null) // Remove any null entries

    return NextResponse.json({ blogs })
  } catch (error) {
    console.error("Error reading blogs:", error)
    return NextResponse.json(
      { 
        error: "Failed to load blogs",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}