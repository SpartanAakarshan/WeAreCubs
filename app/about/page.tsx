import { AboutHero } from "@/components/about-hero"
import { Footer } from "@/components/footer"
import { GetInvolvedSection } from "@/components/get-involved-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
          To power India’s future athletes by building a thriving collegiate sports ecosystem — one that turns passion into purpose and effort into opportunity. Our mission is simple yet ambitious: to make sports an integral part of college life through structured leagues, digital innovation, and community engagement.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine multi-city leagues, athlete development, and community engagement to build a new standard for
            collegiate sport.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
          CUBS stands apart because we don’t just organize matches — we create movements. From multi-sport and multi-city leagues to live broadcasts, analytics, and scouting opportunities, we’re shaping a new era of student sports that’s inclusive, data-driven, and career-focused Our impact goes beyond campuses — improving fitness, confidence, and leadership among students, while helping institutions build stronger reputations and lasting alumni pride. Together, we’re reviving India’s sporting spirit, one college at a time. Because when campuses play, India grows stronger.  Join the movement.
          </p>
        </div>
      </section>
      <GetInvolvedSection />
      <Footer />
    </main>
  )
}


