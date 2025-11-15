import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Anton } from "next/font/google"

const anton = Anton({ weight: "400", subsets: ["latin"] })

export function WhatIsCubsSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="relative rounded-lg overflow-hidden border-4 border-primary w-32 h-40 sm:w-40 sm:h-24 md:w-52 md:h-32 lg:w-auto lg:h-100">
              <img
                src="/U-cubs.svg"
                alt="CUBS overview"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className={`${anton.className} text-4xl md:text-6xl font-black text-balance text-white uppercase`}>
              OUR<span className="text-primary"> STORY</span>
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-white/90"> CUBS was born from a simple, stubborn idea — that Indian students deserve a real sporting platform, not just a dusty field and a one-day tournament. In a nation overflowing with talent, too many athletes are forced to choose between grades and games. CUBS changes that story. </p>

             <p className="text-lg md:text-xl leading-relaxed text-white/80">
             We’re building an organized, inclusive, and data-driven ecosystem that gives students the platform, visibility, and support they deserve. At CUBS, we don’t just talk about college sports — we’re making it India’s next big movement.
            </p>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-6 py-6">
              <Link href="/about">Know More <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
