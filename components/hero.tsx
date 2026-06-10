import { TerminalWindow } from "@/components/terminal-window"

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 border-b border-border"
    >
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status indicator */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span data-typewriter data-tw-speed="100" className="text-sm font-mono text-muted-foreground tracking-wider">SYSTEM_ACTIVE</span>
            </div>

            <div className="space-y-4">
              <h1 data-typewriter data-tw-delay="600" data-tw-speed="75" className="text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.1]">
                Pankaj Monde
              </h1>
              <div className="h-0.5 w-32 bg-primary"></div>
            </div>

            {/* Main statement */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-balance leading-[1.4] pt-6">
              Software that works from <span className="text-primary">backend logic</span>, to{" "}
              <span className="text-secondary">user experience</span>.
            </h2>

            {/* Sub-line */}
            <div className="space-y-6 pt-4">
              <p data-typewriter data-tw-delay="1500" data-tw-speed="35" className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
                Practical development. Clean logic. Usable results.
              </p>

              {/* Identity markers */}
              <div className="flex flex-wrap gap-4 pt-4 text-xs font-mono">
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-foreground/90 transition-all duration-200 hover:bg-primary/10 hover:border-primary/45">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>MERN developer</span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-foreground/90 transition-all duration-200 hover:bg-primary/10 hover:border-primary/45">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Python, Java</span>
                </div>
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-foreground/90 transition-all duration-200 hover:bg-primary/10 hover:border-primary/45">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Real-world projects</span>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="pt-16">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-xs font-mono tracking-wider">SCROLL_TO_EXPLORE</span>
                <span className="text-lg animate-bounce">↓</span>
              </div>
            </div>
          </div>

          {/* Terminal Code Typing Animation (Hidden on mobile, beautiful on desktop) */}
          <div className="lg:col-span-5 hidden lg:block">
            <TerminalWindow />
          </div>
        </div>
      </div>
    </section>
  )
}
