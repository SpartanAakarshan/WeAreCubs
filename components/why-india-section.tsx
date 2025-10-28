import { TrendingUp, Users, DollarSign, Compass, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: TrendingUp,
    title: "Rapidly growing youth population",
    description: "India's demographic dividend",
  },
  {
    icon: Users,
    title: "Untapped 40M+ student base",
    description: "Massive potential waiting to be unlocked",
  },
  {
    icon: DollarSign,
    title: "Rising sports investments",
    description: "Growing sponsorships and funding",
  },
  {
    icon: Compass,
    title: "Lack of structured system",
    description: "No organized college-level framework",
  },
  {
    icon: Video,
    title: "Booming digital sports content",
    description: "Media and streaming revolution",
  },
]

export function WhyIndiaSection() {
  return (
    <section className="container mx-auto px-4 py-3 flex items-center justify-between bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-balance">
              Why College Sports Matter <span className="text-primary">Now More Than Ever</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="bg-card border-2 border-border rounded-lg p-8 space-y-4 hover:border-primary transition-colors"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
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
