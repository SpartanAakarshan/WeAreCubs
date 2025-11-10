"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Anton } from "next/font/google"

const anton = Anton({ weight: "400", subsets: ["latin"] })

const heroContent = [
  {
    title: "Transforming College Sports.",
    titleHighlight: "Empowering Campuses.",
    description: "India's first structured multi-sport ecosystem for colleges — where athletes compete, colleges grow, and sports culture thrives.",
  },
  {
    title: "Building the Ecosystem.",
    titleHighlight: "Uniting Campuses Nationwide.",
    description: "CUBS brings colleges together through sport — creating a connected, scalable system where competition fuels community and growth.",
  },
  {
    title: "Beyond Competition.",
    titleHighlight: "Fostering Sports Culture.",
    description: "More than a league — CUBS inspires participation, pride, and purpose, turning every campus into a hub of sporting energy.",
  },
  {
    title: "Structuring College Sports.",
    titleHighlight: "Shaping Futures.",
    description: "CUBS provides a platform for student-athletes to keep competing, growing, and leading — where passion meets purpose through organized sport.",
  },
  {
    title: "Divided by Campuses.",
    titleHighlight: "United by CUBS.",
    description: "CUBS bridges the gaps between universities — creating one national stage where students compete, connect, and celebrate the true spirit of sport.",
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const currentContent = heroContent[currentIndex]

  return (
    <section className="relative min-h-screen flex items-center md:items-end bg-secondary text-secondary-foreground overflow-hidden">
      {/* Video background */}
      <HeroVideoBackground />

      <div className="container mx-auto relative z-10 px-4 pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-5xl flex flex-col gap-6 md:gap-8 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] min-h-[70vh] md:min-h-0">
          <div className="flex-1 space-y-6">
            <div className="relative min-h-[60px] sm:min-h-[160px] md:min-h-[200px] lg:min-h-[140px]">
              <h1
                key={currentIndex}
                className={`${anton.className} absolute inset-0 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] tracking-tight leading-[0.95] text-balance text-white uppercase animate-fade-in`}
              >
                {currentContent.title}{" "}
                <span className="text-primary">{currentContent.titleHighlight}</span>
              </h1>
            </div>

            <div className="relative min-h-[120px] sm:min-h-[90px] md:min-h-[110px]">
              <p
                key={`desc-${currentIndex}`}
                className="absolute inset-0 text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl text-pretty leading-relaxed animate-fade-in"
              >
                {currentContent.description}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-6 pt-4 sm:pt-6 mt-8 sm:mt-0 md:mt-0">
            <Button
              size="lg"
              asChild
              className="flex-1 min-w-[180px] text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScLBoFTLTMNGLOhjSCE56JASRZ3S_JONjzsfukB5OZ3a3inQA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎓 Join as a College
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="flex-1 min-w-[180px] text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 border-primary text-white hover:bg-primary hover:text-primary-foreground font-bold bg-transparent"
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScLBoFTLTMNGLOhjSCE56JASRZ3S_JONjzsfukB5OZ3a3inQA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                🤝 Partner with Us
              </Link>
            </Button>
          </div>

          {/* <div className="pt-2 sm:pt-4">
            <Button variant="ghost" className="w-full sm:w-auto text-secondary-foreground/60 hover:text-secondary-foreground">
              ▶ Watch Intro Video <span className="ml-2 text-xs">(COMING SOON)</span>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked, but browser will handle it
      })
    }
  }, [])
  
  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/cubs-video.mp4" type="video/mp4" />
      </video>
      {/* Dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
    </div>
  )
}
