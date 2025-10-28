"use client"

import { Button } from "@/components/ui/button"

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/about-us-cover-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-4xl space-y-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            About <span className="text-primary">CUBS</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
          CUBS (College & Universities Building Sports) was born from a bold idea — that India’s students deserve more than one-day tournaments and dusty fields. They deserve a real platform. A stage where raw talent, passion, and teamwork are recognized, celebrated, and transformed into careers.
We’re building India’s first structured multi-sport, multi-city collegiate ecosystem — where colleges don’t just host games, they create legacies. At CUBS, competition meets community, and analytics meet ambition. We empower students with opportunities, colleges with reputation, and the nation with a sporting culture that lasts far beyond the final whistle.

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


