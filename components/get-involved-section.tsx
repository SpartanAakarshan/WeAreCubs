import { Button } from "@/components/ui/button"
import { GraduationCap, Handshake } from "lucide-react"

export function GetInvolvedSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-balance">
              Let's Build the Future of College Sports — <span className="text-primary">Together.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background text-foreground rounded-lg p-10 space-y-6 border-4 border-primary/20 hover:border-primary transition-all">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-black">Colleges & Universities</h3>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Join the CUBS movement. Compete. Create legacy.
              </p>
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6"
              >
                Register Your College
              </Button>
            </div>

            <div className="bg-background text-foreground rounded-lg p-10 space-y-6 border-4 border-primary/20 hover:border-primary transition-all">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <Handshake className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-black">Brands & Partners</h3>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Be part of India's next big sports revolution.
              </p>
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
