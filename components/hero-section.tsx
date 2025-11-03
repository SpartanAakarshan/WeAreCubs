"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
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
            <Button size="lg" asChild className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              <Link href="https://forms.gle/h3DM7LRpgo8epzMA6" target="_blank" rel="noopener noreferrer">🎓 Join as a College</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-2 border-primary text-white hover:bg-primary hover:text-primary-foreground font-bold bg-transparent">
              <Link href="https://forms.gle/ERnZcC2yohc8D59n9" target="_blank" rel="noopener noreferrer">🤝 Partner with Us</Link>
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
      "/new/1-5.webp",
      "/new/4d196e21-811f-46b8-8049-f09714463623_rw_1920.jpg",
      "/new/basketball-1485410_1280.jpg",
      "/new/football-pitch-320100_1280.jpg",
      "/new/istockphoto-467634080-612x612.jpg",
      "/new/istockphoto-860880772-612x612.jpg",
      "/new/man-7135324_1280.jpg",
      "/new/man-7813108_1280.jpg",
      "/new/pexels-expressivestanley-3148452.jpeg",
      "/new/pexels-gonchifacello-1432039.jpeg",
      "/new/pexels-vladvictoria-2202685.jpeg",
      "/new/R2yLQWoSakuek40mREcw8607XWe6eoqH1TXS2GHz.webp",
      "/new/sky-1284256_1280.jpg",
      "/new/soccer-1457988_1280.jpg",
      "/new/table-tennis-1208377_1280.jpg",
      "/new/tennis-614183_1280.jpg",
      "/new/volleyball-520093_1280.jpg",
      "/new/woman-5605529_1280.jpg",
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
