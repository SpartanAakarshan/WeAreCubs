"use client"

import { Button } from "@/components/ui/button"

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/cubs-football.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto relative z-10 px-4 pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl space-y-8  drop-shado  w-[0_4px_16px_rgba(0,0,0,0.6)]">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            What is <span className="text-primary">CUBS</span>?
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
          CUBS was born from a simple, stubborn idea — that Indian students deserve a real sporting platform, not just a dusty field and a one-day tournament. In a nation overflowing with talent, too many athletes are forced to choose between grades and games. CUBS changes that story.

We’re building an organized, inclusive, and data-driven ecosystem that gives students the platform, visibility, and support they deserve.
At CUBS, we don’t just talk about college sports — we’re making it India’s next big movement.
          </p>
          <div className="pt-4">
            {/* <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-6 py-6">
              Explore Our Vision
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}


