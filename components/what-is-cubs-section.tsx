import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function WhatIsCubsSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden border-4 border-primary">
            <img src="/college-athletes-competing-sports-action.jpg" alt="CUBS in action" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-balance">
              What is <span className="text-primary">CUBS?</span>
            </h2>

            <p className="text-xl md:text-2xl leading-relaxed text-secondary-foreground/90">
              <strong>CUBS</strong> (College & Universities Building Sports) is India's first multi-sport, multi-city
              collegiate league built on competition, community, and data.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-secondary-foreground/80">
              We give student-athletes the platform they deserve, empower colleges to build legacy, and create a new
              future for Indian sports — one campus at a time.
            </p>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-6 py-6">
              <Link href="/about">Read More About Our Vision <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
