"use client"

import { useRef } from "react"

const problems = [
  "One sports fest a year…",
  "Half the players show up for free T-shirts.",
  "No structure.",
  "No visibility.",
  "No pathway.",
  "Just a fest that ends on Day 2.",
]

export function ProblemSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-black text-balance">
            Let's be honest — college sports in India needs a <span className="text-primary">serious upgrade.</span>
          </h2>

          <div className="relative overflow-hidden py-8">
            <div ref={scrollRef} className="flex gap-6 animate-scroll">
              {[...problems, ...problems].map((problem, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 h-48 bg-secondary rounded-lg p-8 flex items-center justify-center border-4 border-primary/20"
                >
                  <p className="text-2xl font-bold text-secondary-foreground text-center">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-8">
            <p className="text-3xl md:text-5xl font-black">That's where we come in.</p>
            <p className="text-2xl md:text-4xl font-black text-primary">
              CUBS is here to change that — once and for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
