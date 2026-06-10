import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SystemLog } from "@/components/system-log"
import { Experiments } from "@/components/experiments"
import { Toolchain } from "@/components/toolchain"
import { Timeline } from "@/components/timeline"
import { Signals } from "@/components/signals"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <SystemLog />
        <Experiments />
        <Toolchain />
        <Timeline />
        <Signals />
        <Footer />
      </div>
    </main>
  )
}
