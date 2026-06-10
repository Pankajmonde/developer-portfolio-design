export function Toolchain() {
  const capabilities = [
    {
      category: "Core Languages",
      colorClass: "text-primary",
      iconColor: "text-primary",
      items: ["Python", "JavaScript", "TypeScript", "Java", "HTML5 & CSS3", "SQL", "C / C++"],
    },
    {
      category: "Frameworks & Libraries",
      colorClass: "text-secondary",
      iconColor: "text-secondary",
      items: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "PHP", "shadcn/ui", "REST APIs"],
    },
    {
      category: "Tooling & Cloud",
      colorClass: "text-accent",
      iconColor: "text-accent",
      items: ["MongoDB", "MySQL / PostgreSQL", "Git & Version Control", "GitHub & CI/CD", "VS Code & IDEs", "Vercel & Deployment", "Docker Containerization"],
    },
  ]

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold font-mono mb-2">
              <span className="text-muted-foreground">//</span> TOOLCHAIN
            </h2>
            <p className="text-muted-foreground font-mono text-sm">Technologies deployed in real projects</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.category}
                className="p-6 bg-card border border-border hover:border-primary/40 hover:bg-muted/5 transition-all duration-300 group rounded-md"
              >
                <h3 className={`text-base font-mono font-bold mb-6 tracking-wider border-b border-border pb-3 flex items-center gap-2 ${capability.colorClass}`}>
                  <span className="text-xs text-muted-foreground">&gt;</span>
                  {capability.category.toUpperCase()}
                </h3>
                <ul className="space-y-3">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm hover:text-foreground transition-colors duration-150 text-muted-foreground">
                      <span className={`${capability.iconColor} font-bold text-xs`}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
