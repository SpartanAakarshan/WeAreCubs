import { TrendingUp, Users, DollarSign, Compass, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: TrendingUp,
    title: "India’s youth are ready — they just need the platform.",
    // description: "India's demographic dividend",
  },
  {
    icon: Users,
    title: "Millions of students, zero structured system.",
    // description: "Massive potential waiting to be unlocked",
  },
  {
    icon: DollarSign,
    title: "The sports market is booming, but the foundation is missing.",
    // description: "Growing sponsorships and funding",
  },
  {
    icon: Compass,
    title: "Sponsors & media are looking for stories worth backing.",
    // description: "No organized college-level framework",
  },
  {
    icon: Video,
    title: "And we’re here to give them one.",
    // description: "Media and streaming revolution",
  },
]

export function WhyIndiaSection() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-balance text-white">
            Why <span className="text-primary">India</span> needs CUBS?
            </h2>
            <p className="text-2xl md:text-2xl font-black text-balance text-white">
            College Sports Matter <span className="text-primary">Now More Than Ever</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="bg-black border-2 border-white/20 rounded-lg p-8 space-y-4 hover:border-primary transition-colors w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                  {/* <p className="text-white/70 leading-relaxed">{reason.description}</p> */}
                </div>
              )
            })}
          </div>

          <div className="text-center pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6"
            >
              🔥 Join the Movement
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
