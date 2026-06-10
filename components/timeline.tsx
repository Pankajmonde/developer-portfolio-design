export function Timeline() {
  const events = [
    {
      period: "2025",
      role: "Software Development Program",
      organization: "EduBridge · Capgemini · SAP",
      activities: [
        "Core Java OOP, collections, concurrency",
        "SQL, JDBC, MySQL database development",
        "Angular, TypeScript frontend applications",
        "Spring Boot APIs with JPA & Hibernate",
        "Git, Jenkins, Maven, SonarQube CI/CD",
        "Applied software design patterns",
      ],
    },
    {
      period: "2025",
      role: "Hiring Assessment Preparation Course",
      organization: "EduBridge · Capgemini · SAP",
      grade: "87% · Grade A",
      activities: [
        "Offline, classroom-based program — not an online cert",
        "Benchmarked against real industry hiring standards",
        "Strengthened aptitude, problem-solving and technical thinking",
      ],
    },
    {
      period: "2026",
      role: "Full Stack Web Development Internship",
      organization: "Webstack Academy · WSA",
      grade: "WMSI26_006",
      activities: [
        "Built full-stack applications using the MERN stack",
        "Hands-on with React.js, Node.js, Express.js, MongoDB",
        "Foundational programming with HTML, CSS, JavaScript",
        "SDLC-based project building in a real internship environment",
      ],
    },
    {
      period: "2022",
      role: "Full Stack Intern",
      organization: "OpenInterface Software Solutions",
      activities: [
        "Learned frontend fundamentals",
        "Built responsive components",
        "Worked with backend & databases under real dev workflows",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold font-mono mb-2">
              <span className="text-muted-foreground">//</span> ACTIVITY_LOG
            </h2>
            <p className="text-muted-foreground font-mono text-sm">timeline.log</p>
          </div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary">
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-0 w-2 h-2 bg-primary rounded-full" />

                {/* Content */}
                <div className="pb-8">
                  <div className="mb-2">
                    <span className="text-xs font-mono text-accent">{event.period}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold">{event.role}</h3>
                    {event.grade && (
                      <span className="px-2 py-0.5 text-xs font-mono border border-primary/30 bg-primary/5 text-primary rounded">
                        {event.grade}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4 font-mono text-sm">{event.organization}</p>
                  <ul className="space-y-2">
                    {event.activities.map((activity, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <span className="text-secondary">▸</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
