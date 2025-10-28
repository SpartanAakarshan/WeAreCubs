"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useMemo, useState } from "react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end bg-secondary text-secondary-foreground overflow-hidden">
      {/* Dynamic background slideshow */}
      <HeroBackgroundSlideshow />

      <div className="container mx-auto relative z-10 px-4 pb-16 md:pb-24">
        <div className="max-w-5xl space-y-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black tracking-tight leading-[0.95] text-balance text-white">
            Transforming College Sports. <span className="text-primary">Empowering Campuses.</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl text-pretty leading-relaxed">
            India's first structured multi-sport ecosystem for colleges — where athletes compete, colleges grow, and
            sports culture thrives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center pt-6">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            >
              🎓 Join as a College
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-white hover:bg-primary hover:text-primary-foreground font-bold bg-transparent"
            >
              🤝 Partner with Us
            </Button>
          </div>

          <div className="pt-4">
            <Button variant="ghost" className="text-secondary-foreground/60 hover:text-secondary-foreground">
              ▶ Watch Intro Video <span className="ml-2 text-xs">(COMING SOON)</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroBackgroundSlideshow() {
  const images = useMemo(
    () => [
      "/herosection.png",
      "/herosection-2.png",
      "/herosection-3.png",
      "/herosection-4.png",
      "/herosection-5.png",
    ],
    [],
  )

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      {/* Dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
    </div>
  )
}
