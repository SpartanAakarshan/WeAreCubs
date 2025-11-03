import { Footer } from "@/components/footer"
import { Mail, MessageSquare, Phone, ArrowRight, Instagram, Linkedin, Youtube, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/about-us-cover-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container mx-auto relative z-10 px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-black text-white">Contact Us</h1>
          <p className="text-white/80 mt-3 max-w-2xl">
            Have questions or opportunities? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Primary contact card */}
            <div className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/60">Email</p>
                    <p className="text-xl font-bold">contact@cubs.in</p>
                  </div>
                </div>
                <p className="text-white/80">
                  Reach out to the CUBS team — we typically respond within 2–3 business days.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:contact@cubs.in" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md font-bold hover:bg-primary/90">
                    Write to us <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="/about" className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-md font-semibold hover:border-primary">
                    Know more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="pt-4 grid grid-cols-3 gap-4">
                  <div className="rounded-lg border border-white/10 p-4 text-center">
                    <p className="text-2xl font-black">24h</p>
                    <p className="text-xs text-white/60">Avg. reply</p>
                  </div>
                  <div className="rounded-lg border border-white/10 p-4 text-center">
                    <p className="text-2xl font-black">5+</p>
                    <p className="text-xs text-white/60">Cities</p>
                  </div>
                  <div className="rounded-lg border border-white/10 p-4 text-center">
                    <p className="text-2xl font-black">100+</p>
                    <p className="text-xs text-white/60">Colleges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary: social + other */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/5 to-white/[0.03] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-black">Let’s talk partnerships</h2>
                </div>
                <p className="text-white/80 mb-5">Brands, venues, federations — build with us.</p>
                <div className="flex gap-3 flex-wrap">
                  <a href="https://forms.gle/ERnZcC2yohc8D59n9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-md font-semibold hover:border-primary">
                    Partnership form <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="tel:+0000000000" className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-md font-semibold hover:border-primary">
                    <Phone className="w-4 h-4" /> +00 000 000 000
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/5 to-white/[0.03] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-black">Where we are</h2>
                </div>
                <p className="text-white/80">Operating across multiple Indian cities; HQ coming soon.</p>
                <div className="mt-5 flex gap-3">
                  <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5 text-primary-foreground" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5 text-primary-foreground" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                    <Youtube className="w-5 h-5 text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


