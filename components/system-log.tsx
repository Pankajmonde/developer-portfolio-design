export function SystemLog() {
  const logs = [
    {
      label: "BACKGROUND",
      content: "BE Computer Engineering student with diploma foundation.",
    },
    {
      label: "APPROACH",
      content: "Learning by building, not just coursework.",
    },
    {
      label: "FOCUS_AREAS",
      content: "MERN-stack, Java , Python , AI.",
    },
  ]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold font-mono mb-2">
              <span className="text-muted-foreground">//</span> SYSTEM_LOG
            </h2>
            <p className="text-muted-foreground font-mono text-sm">manifesto.txt</p>
          </div>

          <div className="space-y-6 font-mono text-sm sm:text-base">
            {logs.map((log, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-8 p-4 sm:p-6 bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="text-primary font-bold tracking-wider">{log.label}:</div>
                <div className="text-foreground">{log.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
