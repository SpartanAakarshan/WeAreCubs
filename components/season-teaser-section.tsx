export function SeasonTeaserSection() {
  return (
    <section className="py-32 md:py-40 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-primary text-xl md:text-2xl font-bold tracking-wider uppercase">Coming Soon</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-balance">SEASON 1</h2>
          </div>

          <p className="text-2xl md:text-4xl font-bold text-secondary-foreground/90 text-balance">
            Because India plays more than just one game.
          </p>

          <div className="pt-8">
            <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-black text-xl">
              Stay Tuned →
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
