"use client"

import { useEffect } from "react"

export function ScrollReveal() {
  useEffect(() => {
    // Inject CSS styles for reveal animations
    const style = document.createElement("style")
    style.textContent = `
      .reveal {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.7s cubic-bezier(0.215, 0.61, 0.355, 1), 
                    transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
        will-change: transform, opacity;
      }
      .reveal.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `
    document.head.appendChild(style)

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -8% 0px", // Trigger when element is slightly inside viewport
      threshold: 0.05,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          const index = parseInt(target.dataset.revealIndex || "0", 10)
          
          setTimeout(() => {
            target.classList.add("visible")
          }, index * 90) // Staggered delays
          
          observer.unobserve(target)
        }
      })
    }, observerOptions)

    const setupObservers = () => {
      // Elements that should trigger a scroll reveal animation
      const selectors = [
        "main > section",
        "h2",
        ".bg-card",
        "li",
        ".relative.pl-8.border-l-2", // Timeline items
        "footer > div > div"
      ]
      
      const elements = document.querySelectorAll(selectors.join(", "))
      
      elements.forEach((el) => {
        if (!el.classList.contains("reveal") && !el.classList.contains("visible")) {
          el.classList.add("reveal")
          
          // Auto-calculate stagger index if it is a child of a grid or list container
          const parent = el.parentElement
          if (parent && (parent.classList.contains("grid") || parent.tagName === "UL" || parent.tagName === "OL" || parent.classList.contains("space-y-8"))) {
            const siblings = Array.from(parent.children)
            const siblingIndex = siblings.indexOf(el)
            if (siblingIndex !== -1) {
              ;(el as HTMLElement).dataset.revealIndex = String(siblingIndex)
            }
          }
          
          observer.observe(el)
        }
      })
    }

    setupObservers()

    // MutationObserver to ensure newly rendered/hydrated nodes also get reveal bindings
    const mutationObserver = new MutationObserver(() => {
      setupObservers()
    })
    
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      style.remove()
    }
  }, [])

  return null
}
