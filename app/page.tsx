import { HeroSection } from "@/components/hero-section"
// import { ProblemSection } from "@/components/problem-section"
import { WhatIsCubsSection } from "@/components/what-is-cubs-section"
import { WhyIndiaSection } from "@/components/why-india-section"
import { ApproachSection } from "@/components/approach-section"
import { ImpactSection } from "@/components/impact-section"
import { SeasonTeaserSection } from "@/components/season-teaser-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <ProblemSection /> */}
      <WhatIsCubsSection />
      <WhyIndiaSection />
      <ApproachSection />
      <ImpactSection />
      <SeasonTeaserSection />
      <SocialProofSection />
      <GetInvolvedSection />
      <Footer />
    </main>
  )
}
