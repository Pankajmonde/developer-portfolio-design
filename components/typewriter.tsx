"use client"

import { useEffect } from "react"

export function Typewriter() {
  useEffect(() => {
    // Inject typewriter cursor blink styling
    const style = document.createElement("style")
    style.textContent = `
      .tw-cursor {
        display: inline-block;
        width: 2.5px;
        height: 1.1em;
        background: #22c55e;
        margin-left: 3px;
        vertical-align: middle;
        animation: tw-blink 0.75s step-end infinite;
      }
      .tw-cursor.done {
        animation-duration: 1.1s;
      }
      .tw-cursor.hidden {
        display: none;
      }
      @keyframes tw-blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
      }
    `
    document.head.appendChild(style)

    const activeTimers = new Set<NodeJS.Timeout | number>()

    function safeSetTimeout(fn: () => void, delay: number) {
      const id = setTimeout(() => {
        activeTimers.delete(id)
        fn()
      }, delay)
      activeTimers.add(id)
      return id
    }

    function typewrite(el: HTMLElement) {
      // Store original text so re-renders or reruns work correctly
      const fullText = el.dataset.twText || el.textContent?.trim() || ""
      if (!el.dataset.twText) {
        el.dataset.twText = fullText
      }
      
      const speed = parseInt(el.dataset.twSpeed || "55", 10)
      const delay = parseInt(el.dataset.twDelay || "0", 10)
      const showCursor = el.dataset.twCursor !== "false"
      const loop = el.dataset.twLoop === "true"
      const doDelete = el.dataset.twDelete === "true"

      // Clear original text so it doesn't flash before typing
      el.textContent = ""

      let cursor: HTMLSpanElement | null = null
      if (showCursor) {
        cursor = document.createElement("span")
        cursor.className = "tw-cursor"
        cursor.setAttribute("aria-hidden", "true")
        el.appendChild(cursor)
      }

      let i = 0
      let deleting = false

      function tick() {
        if (!el.isConnected) return // Element was removed from document

        if (!deleting) {
          // Typing characters
          if (cursor) {
            el.insertBefore(document.createTextNode(fullText[i]), cursor)
          } else {
            el.textContent += fullText[i]
          }
          i++

          if (i < fullText.length) {
            const jitter = Math.random() * 30 - 10
            safeSetTimeout(tick, speed + jitter)
          } else {
            if (cursor) cursor.classList.add("done")

            if (doDelete) {
              safeSetTimeout(() => {
                deleting = true
                tick()
              }, 1200)
            } else if (loop) {
              safeSetTimeout(() => {
                el.textContent = ""
                if (cursor) {
                  cursor = document.createElement("span")
                  cursor.className = "tw-cursor"
                  cursor.setAttribute("aria-hidden", "true")
                  el.appendChild(cursor)
                }
                i = 0
                tick()
              }, 2000)
            } else {
              if (cursor && !loop) {
                safeSetTimeout(() => cursor?.classList.add("hidden"), 3500)
              }
            }
          }
        } else {
          // Deleting characters
          const textNodes = Array.from(el.childNodes).filter((n) => n.nodeType === Node.TEXT_NODE)
          if (textNodes.length > 0) {
            const last = textNodes[textNodes.length - 1]
            last.textContent = last.textContent?.slice(0, -1) || ""
            if (last.textContent === "") last.remove()

            safeSetTimeout(tick, speed * 0.5)
          } else {
            deleting = false
            i = 0
            safeSetTimeout(tick, 600)
          }
        }
      }

      safeSetTimeout(tick, delay)
    }

    const runAll = () => {
      const els = document.querySelectorAll("[data-typewriter]")
      els.forEach((el) => typewrite(el as HTMLElement))
    }

    // Run slightly after mount to ensure DOM is fully resolved
    const initId = setTimeout(runAll, 100)
    activeTimers.add(initId)

    // Expose dynamic API
    ;(window as any).Typewriter = {
      run: typewrite,
      runAll: runAll,
    }

    return () => {
      style.remove()
      activeTimers.forEach((id) => clearTimeout(id))
      delete (window as any).Typewriter
    }
  }, [])

  return null
}
