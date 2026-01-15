export function validateFrontmatter(source: string): { isValid: boolean; error?: string } {
  const frontmatterPattern = /^---\s*\n([\s\S]*?)\n---\s*\n/
  const match = source.match(frontmatterPattern)
  
  if (!match) {
    return { isValid: false, error: "No frontmatter found" }
  }
  
  const frontmatter = match[1]
  
  // Basic YAML validation rules
  const lines = frontmatter.split('\n')
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Skip empty lines and comments
    if (!line || line.startsWith('#')) continue
    
    // Check for proper key-value format
    if (!line.includes(':') && !line.startsWith('-')) {
      return { 
        isValid: false, 
        error: `Invalid YAML format at line ${i + 1}: "${line}"` 
      }
    }
    
    // Check for unclosed quotes
    if ((line.match(/"/g) || []).length % 2 !== 0) {
      return { 
        isValid: false, 
        error: `Unclosed quotes at line ${i + 1}: "${line}"` 
      }
    }
  }
  
  return { isValid: true }
}