export type BuiltPoint = {
  title: string
  description: string
}

const points: BuiltPoint[] = [
  { title: "Multi Sports League", description: "Because India plays more than just one game." },
  { title: "Multi City League", description: "Talent doesn’t stop at metro borders." },
  { title: "Structured Tournaments", description: "That actually start on time (no kidding)." },
  { title: "Live Broadcast", description: "Every match deserves its moment in the spotlight." },
  { title: "Stats & Analytics", description: "Numbers don’t lie — they reveal legends in the making." },
  { title: "Pathway To Elite", description: "Because college shouldn’t be the finish line." },
  { title: "Community Building", description: "Team spirit doesn’t end with the final whistle." },
  { title: "Gender Inclusive", description: "It’s 2025. Equality isn’t a feature — it’s standard." },
]

export function BuiltDifferentSection() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-6xl font-black text-balance text-white">Built Different</h2>
            {/* <p className="text-white/70">The pillars that set CUBS apart</p> */}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((item, idx) => (
              <div key={idx} className="group">
                <div className="bg-black text-white rounded-lg p-8 h-full border-4 border-white/20 hover:border-primary transition-all hover:scale-[1.02]">
                  <h3 className="text-2xl font-black text-center">{item.title}</h3>
                  <div className="overflow-hidden max-h-0 opacity-0 translate-y-2 group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out mt-3">
                    <p className="text-white/70 text-center">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


