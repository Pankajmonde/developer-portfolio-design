"use client"

import { useState, useEffect } from "react"

export function Header() {
  const [activeSection, setActiveSection] = useState("about")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const sectionIds = ["about", "projects", "skills", "experience", "contact"]
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-[0.5px] border-white/8 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-12 py-5">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-base font-semibold tracking-[0.04em] text-foreground">
            <span className="text-primary font-normal">&gt;</span>
            <span>portfolio</span>
          </div>

          <ul className="flex items-center gap-[36px]">
            {[
              { id: "about", label: "ABOUT" },
              { id: "projects", label: "PROJECTS" },
              { id: "skills", label: "SKILLS" },
              { id: "experience", label: "EXPERIENCE" },
              { id: "contact", label: "CONTACT" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-mono text-[13px] tracking-[0.12em] transition-colors duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? "text-primary font-bold"
                      : "text-muted-foreground/75 hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
