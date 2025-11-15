import { Button } from "@/components/ui/button"
import { GraduationCap, Handshake } from "lucide-react"

export function GetInvolvedSection() {
  return (
    <section className="relative py-12 md:py-28 bg-black text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/cubs')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-balance text-white">
              Let's Build the Future of College Sports — <span className="text-primary">Together.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-black/80 backdrop-blur-sm text-white rounded-2xl p-10 space-y-6 border-4 border-white/20 hover:border-primary transition-all text-center">
              <h3 className="text-3xl md:text-4xl font-black">Colleges, Universities, Brands & Partners</h3>
              <p className="text-lg md:text-xl leading-relaxed text-white/80">
                Join the CUBS movement to compete, create legacy, and power India's next big sports revolution. Whether
                you're a campus shaping culture or a brand enabling opportunity, let's build this ecosystem together.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScLBoFTLTMNGLOhjSCE56JASRZ3S_JONjzsfukB5OZ3a3inQA/viewform?usp=dialog"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-4 rounded-md font-bold hover:bg-primary/90" target="_blank" rel="noopener noreferrer"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
