import { Anton } from "next/font/google"
const anton = Anton({ weight: "400", subsets: ["latin"] })

const reasons = [
  {
    title: "Growing Youth Demographic",
    stats: ["365Mn+ Millennials", "390Mn+ Gen Z", "300Mn+ Gen A"],
  },
  {
    title: "Large Student Base –",
    stats: ["40Mn+ students", "56K+ institutions"],
  },
  {
    title: "Future Pipeline",
    stats: ["92Mn+ students (2035)"],
  },
  {
    title: "Expanding Sports Market",
    stats: ["$52Bn industry projected to reach $130Bn by 2030"],
  },
  {
    title: "Sponsorship & Media Growth",
    stats: ["$2Bn+ in sports sponsorships & media spends"],
  },
  {
    title: "Gen Z Consumer Power",
    stats: ["$860Bn in spending today, expected to hit $2Tn by 2035"],
  },
]

export function WhyIndiaSection() {
  return (
    <section className="py-20 md:py-32 bg-black" id="why-india">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-6 text-center">
            <div className="inline-block text-left md:text-center">
              <h2 className={`${anton.className} text-4xl md:text-6xl font-black text-balance text-white uppercase`}>
                WHY INDIA NEEDS <span className="text-primary">CUBS</span>
              </h2>
            </div>
            {/* <h2 className="text-4xl md:text-6xl font-black text-balance text-white">
            Why <span className="text-primary">India</span> needs CUBS?
            </h2> */}
                 {/* <p className="text-2xl md:text-2xl font-black text-balance text-white">
            Why <span className="text-primary">India</span> needs CUBS?College Sports Matter <span className="text-primary">Now More Than Ever</span>
            </p> */}
            <p className="text-white/70 uppercase">
            COLLEGE SPORTS MATTERS NOW MORE THAN EVER
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
            {reasons.map((reason, index) => {
              return (
                <div key={index} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                    <ul className="space-y-1">
                      {reason.stats.map((stat, statIndex) => (
                        <li key={statIndex} className="text-white/70 leading-relaxed font-medium">
                          {stat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* <div className="text-center pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6"
            >
              🔥 Join the Movement
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  )
}
