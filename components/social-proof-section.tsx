import { Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialProofSection() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-balance text-white">
              See the <span className="text-primary">Action</span>
            </h2>
          </div>

          {/* Social media grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-lg overflow-hidden border-4 border-white/20 hover:border-primary transition-colors"
              >
                <img
                  src={`/college-sports-action-moment-.jpg?height=400&width=400&query=college sports action moment ${item}`}
                  alt={`Sports moment ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-white hover:bg-primary hover:text-primary-foreground font-bold bg-transparent"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow on Instagram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-white hover:bg-primary hover:text-primary-foreground font-bold bg-transparent"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-white hover:bg-primary hover:text-primary-foreground font-bold bg-transparent"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Watch on YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
