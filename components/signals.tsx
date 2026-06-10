import { Award, Trophy, ShieldCheck } from "lucide-react"

export function Signals() {
  const credentials = [
    {
      id: "SIG_001",
      title: "Python Professional Certification",
      issuer: "OpenEDG Python Institute",
      date: "Issued May 2025",
      credId: "ID: PCAP-31-03",
      skills: ["Object-Oriented Programming (OOP)", "Advanced Data Structures", "File I/O & Exception Handling", "Control Flows & Algorithms"],
      icon: Award,
    },
    {
      id: "SIG_002",
      title: "Career Essentials in Software Dev",
      issuer: "Microsoft / LinkedIn",
      date: "Issued Oct 2025",
      credId: "ID: LI-MSFT-8812",
      skills: ["Agile Development Workflows", "Chrome DevTools Debugging", "Core Software Architecture", "Version Control Best Practices"],
      icon: Award,
    },
    {
      id: "SIG_003",
      title: " Hackathon Partcipation",
      issuer: "Various Technology Forums",
      date: "Participation 2025",
      credId: "ID: HACK-AI-2025",
      skills: ["Ai Project building", "Claude", "Rapid Prototype Deployment", "System Orchestration"],
      icon: Trophy,
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold font-mono mb-2">
              <span className="text-muted-foreground">//</span> SIGNALS
            </h2>
            <p className="text-muted-foreground font-mono text-sm">credentials.json</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((credential) => {
              const Icon = credential.icon
              return (
                <div 
                  key={credential.id} 
                  className="p-6 bg-card border border-border hover:border-accent/50 hover:bg-muted/5 transition-all duration-300 rounded-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-accent/10 border border-accent/20 p-2.5 rounded-lg flex items-center justify-center text-accent">
                        <Icon className="w-10 h-10" />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground/60">{credential.id}</span>
                    </div>

                    <h3 className="text-lg font-bold mb-1 leading-snug text-foreground">{credential.title}</h3>
                    <p className="text-xs font-mono text-accent mb-4">{credential.issuer}</p>

                    <div className="space-y-1 py-3 border-t border-b border-border mb-4 text-[11px] font-mono text-muted-foreground">
                      <div className="flex justify-between">
                        <span>DATE:</span>
                        <span className="text-foreground">{credential.date.toUpperCase()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CREDENTIAL:</span>
                        <span className="text-foreground">{credential.credId}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="text-[10px] font-mono text-muted-foreground/60">ACQUIRED_CAPABILITIES:</div>
                      <ul className="space-y-1.5">
                        {credential.skills.map((skill, index) => (
                          <li key={index} className="flex gap-2 text-xs text-muted-foreground leading-normal">
                            <span className="text-accent mt-0.5">▸</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/mrpankaj07/details/certifications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 py-2 px-4 border border-accent/20 hover:border-accent hover:bg-accent/5 text-xs font-mono text-accent rounded transition-all duration-200"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    VERIFY_CREDENTIAL
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
