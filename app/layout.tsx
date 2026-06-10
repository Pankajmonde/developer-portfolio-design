import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CursorTrail } from "@/components/cursor-trail"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Typewriter } from "@/components/typewriter"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Pankaj Monde — Software Developer",
  description: "Software engineering student building reliable, problem-driven applications. Graduating 2026.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_spaceMono.variable}`}>
        <CursorTrail />
        <ScrollReveal />
        <Typewriter />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
