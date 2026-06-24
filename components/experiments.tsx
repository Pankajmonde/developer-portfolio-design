import { ExternalLink, Github, GitBranch } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  highlights: string[]
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}

export function Experiments() {
  const projects: Project[] = [
    {
      id: "EXP_001",
      title: "CardioAI",
      description: "Full-stack machine learning web application analyzing heart sound recordings (Phonocardiogram/PCG signals) to screen for cardiovascular pathological abnormalities.",
      highlights: [
        "Multi-domain feature fusion engine extracting 40 spectral, GLCM texture, and statistical acoustic dimensions",
        "ANOVA-based feature selection utilizing F-statistic ranking to select top predictive biomarkers",
        "Multi-Kernel Support Vector Machine (SVM) ensemble classifier achieving 98.2% benchmark accuracy",
        "Interactive clinical dashboard featuring real-time audio visualization using WaveSurfer.js",
        "Explainable AI (XAI) biomarkers mapped on interactive radar charts using Chart.js",
        "Secure SQLite database logging for patient histories with html2canvas and jsPDF export reporting",
      ],
      tags: ["Machine Learning", "Python", "Flask", "SVM Classifier", "Signal Processing", "SQLite", "WaveSurfer.js"],
      githubUrl: "https://github.com/Pankajmonde/cardiovascular-disease-classfication",
    },
    {
      id: "EXP_002",
      title: "GeminiStream",
      description: "Real-Time AI Writing Assistant & Chat Platform.",
      highlights: [
        "Built a full-stack real-time chat application integrating Stream Chat SDK for instant messaging, user presence tracking, and custom indicator events",
        "Implemented an agentic AI assistant using the Google Gen AI SDK (Gemini) to act as a collaborative writing coach inside chat channels",
        "Integrated live web search grounding via Tavily API, enabling the AI agent to dynamically query external sources and synthesize up-to-date responses",
        "Architected backend agent lifecycle management with Node.js/Express, incorporating token generation (JWT) and automatic session cleanup for inactive agents",
      ],
      tags: ["React", "Node.js", "TypeScript", "Gemini API", "Stream Chat SDK", "Express", "Tavily API"],
      demoUrl: "https://realtimechatassistant-e6x1m1ejp-pankajmondes-projects.vercel.app/",
      githubUrl: "https://github.com/Pankajmonde/ai-chat",
    },
    {
      id: "EXP_003",
      title: "Doctor Appointment Management System",
      description: "Full-stack transactional system with workflow-based architecture.",
      highlights: [
        "Patient and doctor modules",
        "Appointment scheduling and tracking",
        "Secure backend using PHP and MySQL",
        "Real-world CRUD operations",
      ],
      tags: ["PHP", "MySQL", "Full-stack", "Web App"],
      githubUrl: "https://github.com/yourusername/doctor-appointment",
    },
  ]

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold font-mono mb-2">
              <span className="text-muted-foreground">//</span> SYSTEMS_BUILT
            </h2>
            <p className="text-muted-foreground font-mono text-sm">experiments/</p>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 sm:p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-accent">{project.id}</span>
                      <GitBranch className="w-4 h-4 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-base">{project.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono text-muted-foreground/80 mb-3">ARCHITECTURE_DECISIONS:</div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex gap-3 text-sm leading-relaxed">
                        <span className="text-secondary mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2.5 mb-6">
                  {project.tags.map((tag, tagIndex) => {
                    const colorSchemes = [
                      "bg-primary/5 text-primary border-primary/25 hover:bg-primary/10 hover:border-primary/45",
                      "bg-secondary/5 text-secondary border-secondary/25 hover:bg-secondary/10 hover:border-secondary/45",
                      "bg-accent/5 text-accent border-accent/25 hover:bg-accent/10 hover:border-accent/45",
                    ]
                    const scheme = colorSchemes[tagIndex % colorSchemes.length]
                    return (
                      <span
                        key={tag}
                        className={`px-3 py-1.5 text-xs font-mono border rounded transition-all duration-200 ${scheme}`}
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>

                {(project.demoUrl || project.githubUrl) && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        VIEW_PROJECT
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border font-mono text-sm hover:bg-muted hover:border-primary/50 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        GITHUB
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
