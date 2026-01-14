import { Terminal, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-bold">
              <span className="text-primary">PV</span>
              <span className="text-muted-foreground">_</span>
              <span className="text-accent">SEC</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <span className="font-mono">&copy; {new Date().getFullYear()}</span>
            <span>Pankhuri Varshney. Built with</span>
            <Heart className="w-4 h-4 text-accent" />
            <span>and security in mind.</span>
          </p>

          {/* Easter Egg Hint */}
          <p className="text-xs text-muted-foreground/50 font-mono hidden md:block">// Try the terminal commands</p>
        </div>
      </div>
    </footer>
  )
}
