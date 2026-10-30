
"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contact", label: "CONTACT" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("about")
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (element) {
      setActiveSection(sectionId)
      setMenuOpen(false)

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    )

    navigation.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-md">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-4">

        <nav className="flex items-center justify-between">

          {/* Logo / Brand */}
          <div className="flex items-center gap-3 font-mono text-base font-semibold tracking-wide">
            <span className="text-primary font-normal">&gt;</span>
            <span>portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-9">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-mono text-xs lg:text-[13px] tracking-widest transition-colors duration-200 ${
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors p-1"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 mt-4 pt-3 pb-2">
            <ul className="flex flex-col gap-1">
              {navigation.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 text-left px-3 py-3 font-mono text-sm tracking-widest transition-colors ${
                      activeSection === item.id
                        ? "text-primary bg-white/5"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <span className="text-primary text-xs">
                      {activeSection === item.id ? ">" : " "}
                    </span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </header>
  )
}
