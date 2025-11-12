export function SeasonTeaserSection() {
  return (
    <section className="py-12 md:py-16 bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="space-y-1.5">
            <p className="text-primary text-lg md:text-xl font-bold tracking-wider uppercase">Coming Soon</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-balance text-white">SEASON 1</h2>
          </div>

          {/* <p className="text-xl md:text-2xl font-bold text-white/90 text-balance">
            Because India plays more than just one game.
          </p> */}

          <div className="pt-3">
            <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-black text-lg">
              <a href="https://www.instagram.com/cubs.india?igsh=a214NjZkdG8wZm9j&utm_source=qr" target="_blank" rel="noopener noreferrer">
                Stay Tuned
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
