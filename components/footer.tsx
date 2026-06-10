import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Refactored CTA Card */}
          <div className="p-8 sm:p-12 rounded-lg border border-primary/20 bg-primary/5/30 backdrop-blur-xs relative overflow-hidden group">
            {/* Glowing corner indicator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/15 transition-all duration-500" />

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                AVAILABILITY: OPEN_FOR_COLLABORATION
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  Still building. <span className="text-primary">Still shipping.</span>
                </h2>
                <p className="text-muted-foreground text-base max-w-2xl leading-relaxed font-mono">
                  {"> "}Software engineering student building reliable, problem-driven applications. Ready to collaborate and solve real-world problems.
                </p>
              </div>

              {/* Action Buttons Dashboard */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://github.com/Pankajmonde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-md bg-card border border-border hover:border-primary hover:text-primary transition-all duration-200 font-mono text-sm shadow-xs"
                >
                  <Github className="w-4.5 h-4.5" />
                  <span>github_profile</span>
                </a>
                <a
                  href="http://www.linkedin.com/in/mrpankaj07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-md bg-card border border-border hover:border-secondary hover:text-secondary transition-all duration-200 font-mono text-sm shadow-xs"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                  <span>linkedin_connection</span>
                </a>
                <a
                  href="mailto:pankajmonde96@gmail.com"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-md bg-card border border-border hover:border-accent hover:text-accent transition-all duration-200 font-mono text-sm shadow-xs"
                >
                  <Mail className="w-4.5 h-4.5" />
                  <span>direct_email</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1jlmGhgT6OSIFmTj3Nlat_lIvUX7B7L1B/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 font-mono text-sm font-bold shadow-sm"
                >
                  <Download className="w-4.5 h-4.5" />
                  <span>download_resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* System info */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-muted-foreground">
              <div>© 2026 Pankaj Monde</div>
              <div>VERSION: 2026.01</div>
              <div>STATUS: ACTIVE</div>
              <div>LOCATION: IN</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
