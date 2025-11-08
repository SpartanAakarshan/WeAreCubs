import { Zap, Trophy, Rocket } from "lucide-react"
import { Anton } from "next/font/google"

const anton = Anton({ weight: "400", subsets: ["latin"] })

const pillars = [
  {
    // icon: Zap,
    title: "Engage",
    description: "Partnering with colleges to foster sporting culture.",
  },
  {
    // icon: Trophy,
    title: "Empower",
    description: "Organising structured competitions with visibility & analytics.",
  },
  {
    // icon: Rocket,
    title: "Elevate",
    description: "Building talent pathways and career opportunities.",
  },
]

export function ApproachSection() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className={`${anton.className} text-4xl md:text-6xl font-black text-balance text-white uppercase`}>
              We're not just hosting tournaments. <span className="text-primary">We're building an ecosystem.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              // const Icon = pillar.icon
              return (
                <div key={index} className="relative group">
                  <div className="bg-black text-white rounded-lg p-8 space-y-4 h-full border-4 border-white/20">
                    {/* <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div> */}
                    <h3 className="text-3xl font-black text-white text-center">{pillar.title}</h3>
                    <p className="text-lg leading-relaxed text-white/70 text-center">{pillar.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
