import { Zap, Trophy, Rocket } from "lucide-react"

const pillars = [
  {
    icon: Zap,
    title: "Engage",
    description: "Partnering with colleges to foster sporting culture.",
  },
  {
    icon: Trophy,
    title: "Empower",
    description: "Organising structured competitions with visibility & analytics.",
  },
  {
    icon: Rocket,
    title: "Elevate",
    description: "Building talent pathways and career opportunities.",
  },
]

export function ApproachSection() {
  return (
    <section className="mx-auto px-4 py-3 flex items-center justify-between bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-balance">
              We're not just hosting tournaments. <span className="text-primary">We're building an ecosystem.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div key={index} className="relative group">
                  <div className="bg-background text-foreground rounded-lg p-8 space-y-6 h-full border-4 border-primary/20 hover:border-primary transition-all hover:scale-105">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-black">{pillar.title}</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">{pillar.description}</p>
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
