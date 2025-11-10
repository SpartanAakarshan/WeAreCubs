import { HeroSection } from "@/components/hero-section"
// import { ProblemSection } from "@/components/problem-section"
import { WhatIsCubsSection } from "@/components/what-is-cubs-section"
import { WhyIndiaSection } from "@/components/why-india-section"
import { ApproachSection } from "@/components/approach-section"
import { ImpactSection } from "@/components/impact-section"
import { SeasonTeaserSection } from "@/components/season-teaser-section"
// import { SocialProofSection } from "@/components/social-proof-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { Footer } from "@/components/footer"
import { BuiltDifferentSection } from "@/components/built-different-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <Divider />
      {/* <ProblemSection /> */}
      <WhatIsCubsSection />
      <Divider />
      <BuiltDifferentSection />
      <Divider />
      <ImpactSection />
    
      <Divider />
      <WhyIndiaSection />

      <Divider />
      <SeasonTeaserSection />
      <Divider />
      <ApproachSection />
      {/* <SocialProofSection /> */}
      <Divider />
      <GetInvolvedSection />
      <Divider />
      <Footer />
    </main>
  )
}

function Divider() {
  return <div className="border-t w-full" style={{ borderColor: "#ffa739" }} />
}
