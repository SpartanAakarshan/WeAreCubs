import { AboutHero } from "@/components/about-hero"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-12 md:space-y-16">
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-black tracking-tight">Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To establish a thriving collegiate sports ecosystem that serves as the backbone of Indian athletics,
              empowering student-athletes with the skills, opportunities, and exposure needed to succeed nationally and
              internationally. Our vision is to ignite a movement that transforms India into a global sporting powerhouse,
              with college sports at its core.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-black tracking-tight">Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To transform Indian sports culture by building a thriving college sports ecosystem through structured
              competitions, talent development, and community engagement—seamlessly integrating digital innovation with
              on-ground action.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-black tracking-tight">Objectives</h2>
            <ul className="space-y-6">
              <li>
                <div className="flex gap-4">
                  <span className="mt-2 inline-block h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase text-black">
                      Broaden Student Participation in Sports
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Encourage both athletes and non-athletes from diverse academic backgrounds to engage in sports-related
                      activities.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <span className="mt-2 inline-block h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase text-black">
                      Promote Inclusive &amp; Equitable Sports Participation
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Ensure equal opportunities for men and women while fostering an accessible and diverse sports culture.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <span className="mt-2 inline-block h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase text-black">
                      Create Pathways for Amateur Athletes to Go Pro
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Provide structured opportunities for student-athletes to develop their skills and transition into
                      professional sports careers.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <span className="mt-2 inline-block h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase text-black">
                      Elevate &amp; Sustain College Sports Programs
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Improve the structure, quality, and competitiveness of college sports while establishing long-term growth
                      models for sustainability.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <span className="mt-2 inline-block h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase text-black">
                      Boost Fan Culture &amp; Community Engagement
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Strengthen spectator engagement, build a dedicated fanbase, and leverage alumni networks to enhance
                      long-term support.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <span className="mt-2 inline-block h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase text-black">
                      Enhance Monetization &amp; Sponsorship Opportunities
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Enable colleges to generate revenue through sponsorships, merchandising, ticketing, and other commercial
                      avenues while attracting corporate partnerships.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <span className="mt-2 inline-block h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary" />
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase text-black">
                      Develop a Thriving Sports Ecosystem
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Foster holistic growth by strengthening coaching, infrastructure, and industry partnerships to position
                      India as a competitive sporting nation.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


