import { Instagram, Linkedin, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t-4 border-primary">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/new-cubs-logo.svg" alt="CUBS" className="h-8 w-auto" />
              <h3 className="text-2xl font-black">CUBS</h3>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Building the future of college sports in India.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  OUR STORY
                </a>
              </li>
              <li>
                <a href="/#impact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cubs.india?igsh=a214NjZkdG8wZm9j&utm_source=qr"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a> */}
              {/* <a
                href="#"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Youtube className="w-5 h-5 text-primary-foreground" />
              </a> */}
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/80">
              <Mail className="w-4 h-4" />
              <span className="text-sm">Info@brahmasports.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2025 CUBS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
