"use client"

import { useEffect, useRef } from "react"

export function TerminalWindow() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const lines = containerRef.current.querySelectorAll(".t-line")
    const cursor = containerRef.current.querySelector("#termCursor")

    const timers: NodeJS.Timeout[] = []

    lines.forEach((line) => {
      const delay = parseInt(line.getAttribute("data-delay") || "0", 10)
      const timer = setTimeout(() => {
        line.classList.add("visible")
      }, delay)
      timers.push(timer)
    })

    const cursorTimer = setTimeout(() => {
      if (cursor) cursor.classList.add("active")
    }, 1700)
    timers.push(cursorTimer)

    return () => {
      timers.forEach(clearTimeout)
    }
  }, [])

  return (
    <div ref={containerRef} className="terminal-window">
      {/* Title bar */}
      <div className="terminal-titlebar">
        <span className="terminal-btn terminal-btn--red"></span>
        <span className="terminal-btn terminal-btn--yellow"></span>
        <span className="terminal-btn terminal-btn--green"></span>
        <span className="terminal-filename">portfolio.js</span>
      </div>

      {/* Code body */}
      <div className="terminal-body">
        <div className="t-line" data-delay="0">
          <span className="t-ln">1</span>
          <span>
            <span className="t-kw">const</span> <span className="t-fn">dev</span> = {"{"}
          </span>
        </div>
        <div className="t-line" data-delay="150">
          <span className="t-ln">2</span>
          <span>
            &nbsp;&nbsp;<span className="t-key">name</span>: <span className="t-str">"Pankaj Monde"</span>,
          </span>
        </div>
        <div className="t-line" data-delay="300">
          <span className="t-ln">3</span>
          <span>
            &nbsp;&nbsp;<span className="t-key">role</span>: <span className="t-str">"Full Stack Developer"</span>,
          </span>
        </div>
        <div className="t-line" data-delay="450">
          <span className="t-ln">4</span>
          <span>
            &nbsp;&nbsp;<span className="t-key">stack</span>: [<span className="t-str">"MERN"</span>, <span className="t-str">"Java"</span>, <span className="t-str">"Python"</span>],
          </span>
        </div>
        <div className="t-line" data-delay="600">
          <span className="t-ln">5</span>
          <span>
            &nbsp;&nbsp;<span className="t-key">learning</span>: <span className="t-str">"Spring Boot + DevOps"</span>,
          </span>
        </div>
        <div className="t-line" data-delay="750">
          <span className="t-ln">6</span>
          <span>
            &nbsp;&nbsp;<span className="t-key">status</span>: <span className="t-open">"open_to_work"</span>,
          </span>
        </div>
        <div className="t-line" data-delay="900">
          <span className="t-ln">7</span>
          <span>
            &nbsp;&nbsp;<span className="t-key">location</span>: <span className="t-str">"Mumbai, IN"</span>,
          </span>
        </div>
        <div className="t-line" data-delay="1050">
          <span className="t-ln">8</span>
          <span>
            &nbsp;&nbsp;<span className="t-key">available</span>: <span className="t-bool">true</span>
          </span>
        </div>
        <div className="t-line" data-delay="1200">
          <span className="t-ln">9</span>
          <span>{"}"};</span>
        </div>
        <div className="t-line" data-delay="1350">
          <span className="t-ln">10</span>
          <span>&nbsp;</span>
        </div>
        <div className="t-line" data-delay="1500">
          <span className="t-ln">11</span>
          <span className="t-comment">// initialising...</span>
        </div>
        <div className="t-line" data-delay="1650">
          <span className="t-ln">12</span>
          <span>
            <span className="t-fn">init</span>(dev); <span className="t-cursor" id="termCursor"></span>
          </span>
        </div>

        {/* Status bar */}
        <div className="t-status t-line" data-delay="1900">
          <span className="t-dot"></span>
          <span className="t-status-text">SYSTEM_ACTIVE · ready to deploy</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .terminal-window {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          background: #111111;
          max-width: 460px;
          width: 100%;
          box-shadow: 0 0 50px -12px rgba(34, 197, 94, 0.15);
        }

        /* Title bar */
        .terminal-titlebar {
          background: #1a1a1a;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .terminal-btn {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }
        .terminal-btn--red    { background: #ff5f57; }
        .terminal-btn--yellow { background: #febc2e; }
        .terminal-btn--green  { background: #28c840; }

        .terminal-filename {
          margin-left: auto;
          margin-right: auto;
          font-family: 'Fira Code', 'JetBrains Mono', monospace;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.3);
          letter-spacing: 0.04em;
        }

        /* Code body */
        .terminal-body {
          padding: 22px 24px 26px;
          font-family: 'Fira Code', 'JetBrains Mono', monospace;
          font-size: 13px;
          line-height: 1.95;
          color: #e2e8f0;
        }

        .t-line {
          display: flex;
          gap: 16px;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
        .t-line.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Line numbers */
        .t-ln {
          color: rgba(255, 255, 255, 0.15);
          min-width: 16px;
          font-size: 11px;
          padding-top: 2px;
          user-select: none;
        }

        /* Syntax colors */
        .t-kw      { color: #c084fc; }   /* const, let, async   — purple  */
        .t-fn      { color: #60a5fa; }   /* function names      — blue    */
        .t-str     { color: #86efac; }   /* strings             — green   */
        .t-bool    { color: #f97316; }   /* true / false        — orange  */
        .t-key     { color: #e2e8f0; }   /* object keys         — white   */
        .t-open    { color: #22c55e; }   /* open_to_work        — bright green */
        .t-comment { color: #4b5563; }   /* comments            — gray    */

        /* Blinking cursor */
        .t-cursor {
          display: inline-block;
          width: 8px;
          height: 14px;
          background: #22c55e;
          vertical-align: middle;
          animation: t-blink 0.75s step-end infinite;
          opacity: 0;
        }
        .t-cursor.active { opacity: 1; }

        @keyframes t-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* Status bar at bottom */
        .t-status {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex !important;
          align-items: center;
          gap: 8px;
        }

        .t-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          animation: t-pulse 2s ease-in-out infinite;
        }

        @keyframes t-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }

        .t-status-text {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.28);
          letter-spacing: 0.08em;
        }
      ` }} />
    </div>
  )
}
