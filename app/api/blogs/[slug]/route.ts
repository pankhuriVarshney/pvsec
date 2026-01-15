import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_PATH = path.join(process.cwd(), "content", "blog")

interface Blog {
  slug: string
  title: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params
  
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      )
    }

    const source = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(source)

    const blog: Blog = {
      slug,
      title: data.title,
      date: data.date,
      readTime: data.readTime,
      tags: data.tags,
      content,
    }

    return NextResponse.json({ blog })
  } catch (error) {
    console.error("Error reading blog:", error)
    return NextResponse.json(
      { error: "Failed to load blog post" },
      { status: 500 }
    )
  }
}