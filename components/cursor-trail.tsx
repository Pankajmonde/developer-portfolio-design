"use client"

import { useEffect } from "react"

export function CursorTrail() {
  useEffect(() => {
    // ── Config ─────────────────────────────────────────────────────────────────
    const CONFIG = {
      spawnDelay: 75,       // ms between token spawns (lower = more tokens)
      tokenLifetime: 1400,  // ms before a token fades out
      ringLag: 0.12,        // 0–1, lower = more lag on the ring
      dotColor: "#22c55e",
      ringColor: "rgba(34, 197, 94, 0.5)",
    }

    // ── Token pool ──────────────────────────────────────────────────────────────
    const TOKENS = [
      // keywords
      { t: "const", c: "#c084fc" },
      { t: "let", c: "#c084fc" },
      { t: "async", c: "#c084fc" },
      { t: "await", c: "#c084fc" },
      { t: "return", c: "#c084fc" },
      { t: "if ()", c: "#c084fc" },
      { t: "for ()", c: "#c084fc" },
      { t: "switch", c: "#c084fc" },
      { t: "class", c: "#c084fc" },
      // functions / React
      { t: "function", c: "#60a5fa" },
      { t: "=>", c: "#60a5fa" },
      { t: "useEffect", c: "#60a5fa" },
      { t: "useState", c: "#60a5fa" },
      { t: "fetch()", c: "#60a5fa" },
      { t: "render()", c: "#60a5fa" },
      { t: "useRef", c: "#60a5fa" },
      { t: "useCallback", c: "#60a5fa" },
      // values / literals
      { t: "true", c: "#f97316" },
      { t: "null", c: "#f97316" },
      { t: "undefined", c: "#f97316" },
      { t: "{}", c: "#f97316" },
      { t: "[]", c: "#f97316" },
      { t: "0", c: "#f97316" },
      // strings
      { t: '"Hello"', c: "#86efac" },
      { t: "`${name}`", c: "#86efac" },
      { t: '"world"', c: "#86efac" },
      { t: "'dev'", c: "#86efac" },
      // comments
      { t: "// todo", c: "#6b7280" },
      { t: "// fix me", c: "#6b7280" },
      { t: "/* ... */", c: "#6b7280" },
      // imports/exports
      { t: "import", c: "#38bdf8" },
      { t: "export", c: "#38bdf8" },
      { t: "default", c: "#38bdf8" },
      // array/promise methods
      { t: ".map()", c: "#fde68a" },
      { t: ".filter()", c: "#fde68a" },
      { t: ".reduce()", c: "#fde68a" },
      { t: ".then()", c: "#fde68a" },
      { t: ".catch()", c: "#fde68a" },
      { t: "Promise", c: "#fde68a" },
      // JSX
      { t: "<div>", c: "#f9a8d4" },
      { t: "</>", c: "#f9a8d4" },
      { t: "<App />", c: "#f9a8d4" },
      { t: "className=", c: "#f9a8d4" },
    ]

    // ── State ───────────────────────────────────────────────────────────────────
    let mouseX = -200
    let mouseY = -200
    let ringX = -200
    let ringY = -200
    let lastSpawn = 0
    let rafId: number

    // ── Create cursor elements ──────────────────────────────────────────────────
    const dot = document.createElement("div")
    dot.id = "cursor-dot"

    const ring = document.createElement("div")
    ring.id = "cursor-ring"

    document.body.appendChild(dot)
    document.body.appendChild(ring)

    // ── Inject styles ───────────────────────────────────────────────────────────
    const style = document.createElement("style")
    style.textContent = `
      /* Hide original cursor globally */
      html, body, a, button, [role="button"], input, select, textarea {
        cursor: none !important;
      }

      #cursor-dot {
        position: fixed;
        top: 0; left: 0;
        width: 8px; height: 8px;
        border-radius: 50%;
        background: ${CONFIG.dotColor};
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 99999;
        transition: opacity 0.2s;
      }

      #cursor-ring {
        position: fixed;
        top: 0; left: 0;
        width: 30px; height: 30px;
        border-radius: 50%;
        border: 1.5px solid ${CONFIG.ringColor};
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 99998;
        transition: opacity 0.2s, transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
      }

      /* Hover states managed via class */
      #cursor-ring.cursor-hover {
        transform: translate(-50%, -50%) scale(1.6);
        border-color: ${CONFIG.dotColor};
        background: rgba(34, 197, 94, 0.08);
      }

      .code-token {
        position: fixed;
        font-family: 'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace;
        font-size: 11px;
        pointer-events: none;
        white-space: nowrap;
        transform: translate(-50%, -50%);
        animation: token-fade ${CONFIG.tokenLifetime}ms ease-out forwards;
        z-index: 99990;
        user-select: none;
      }

      @keyframes token-fade {
        0%   { opacity: 0.85; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0;    transform: translate(-50%, calc(-50% - 38px)) scale(0.8); }
      }
    `
    document.head.appendChild(style)

    // ── Spawn a token ───────────────────────────────────────────────────────────
    function spawnToken(x: number, y: number) {
      const tk = TOKENS[Math.floor(Math.random() * TOKENS.length)]
      const el = document.createElement("span")
      el.className = "code-token"
      el.textContent = tk.t
      el.style.color = tk.c
      el.style.left = (x + (Math.random() - 0.5) * 52) + "px"
      el.style.top = (y + (Math.random() - 0.5) * 28) + "px"
      el.style.fontSize = (10 + Math.random() * 3).toFixed(1) + "px"
      document.body.appendChild(el)
      setTimeout(() => el.remove(), CONFIG.tokenLifetime)
    }

    // ── Mouse events ──────────────────────────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      const now = Date.now()
      if (now - lastSpawn >= CONFIG.spawnDelay) {
        spawnToken(mouseX, mouseY)
        lastSpawn = now
      }
    }

    const handleMouseLeave = () => {
      dot.style.opacity = "0"
      ring.style.opacity = "0"
    }

    const handleMouseEnter = () => {
      dot.style.opacity = "1"
      ring.style.opacity = "1"
    }

    // Scale ring on interactive element hovers (works dynamically for nested elements)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target && (target.closest("a") || target.closest("button") || target.getAttribute("role") === "button" || target.tagName === "INPUT" || target.tagName === "SELECT")) {
        ring.classList.add("cursor-hover")
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target && (target.closest("a") || target.closest("button") || target.getAttribute("role") === "button" || target.tagName === "INPUT" || target.tagName === "SELECT")) {
        ring.classList.remove("cursor-hover")
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    // ── Animation loop — smooth ring lag ───────────────────────────────────────
    function loop() {
      ringX += (mouseX - ringX) * CONFIG.ringLag
      ringY += (mouseY - ringY) * CONFIG.ringLag

      dot.style.left = mouseX + "px"
      dot.style.top = mouseY + "px"
      ring.style.left = ringX + "px"
      ring.style.top = ringY + "px"

      rafId = requestAnimationFrame(loop)
    }
    loop()

    // ── Cleanup ────────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
      dot.remove()
      ring.remove()
      style.remove()

      // Remove any leftover code tokens
      const remainingTokens = document.querySelectorAll(".code-token")
      remainingTokens.forEach((token) => token.remove())
    }
  }, [])

  return null
}
