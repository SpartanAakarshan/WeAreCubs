export type BuiltPoint = {
  title: string
  description: string
}
import { Anton } from "next/font/google"

const anton = Anton({ weight: "400", subsets: ["latin"] })

const points: BuiltPoint[] = [
  { title: "Multi Sports League", description: "Because India plays more than just one game." },
  { title: "Multi City League", description: "Because talent doesn’t stop at metro borders." },
  { title: "Structured Tournaments", description: "That actually start on time (no kidding)." },
  { title: "Live Broadcast", description: "Every match deserves its moment in the spotlight." },
  { title: "Stats & Analytics", description: "Numbers don’t lie — they reveal legends in the making." },
  { title: "Pathway To Elite", description: "Because college shouldn’t be the finish line." },
  { title: "Community Building", description: "Team spirit doesn’t end with the final whistle." },
  { title: "Gender Inclusive", description: "It’s 2025. Equality isn’t a feature — it’s standard." },
  {title: "Content & Storytelling", description: "The games end — but the stories live on."}
]

export function BuiltDifferentSection() {
  return (
    <section className="py-20 md:py-32 bg-black" id="built-different">
      <div className="w-screen">
        <div className="max-w-6xl mx-auto space-y-12 px-4">
          <div className="text-center space-y-2">
            <h2 className={`${anton.className} text-4xl md:text-6xl font-black text-balance text-white uppercase`}>
              BUILT <span className="text-primary">DIFFERENT</span>
            </h2>
            <p className="text-white/70">What Makes CUBS, CUBS?</p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {points.map((item, idx) => (
              <div key={idx} className="group">
                <div className="bg-black text-white rounded-lg p-4 sm:p-8 h-full border-2 sm:border-4 border-white/20 hover:border-primary transition-all hover:scale-[1.02] overflow-hidden">
                  <h3 className="text-sm sm:text-xl md:text-2xl font-black text-center leading-tight break-keep tracking-tight">{item.title}</h3>
                  <div className="mt-2 block lg:hidden">
                    <p className="text-xs sm:text-sm md:text-base text-white/70 text-center leading-relaxed break-normal">{item.description}</p>
                  </div>
                  <div className="overflow-hidden max-h-0 opacity-0 translate-y-2 hidden lg:block group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out mt-3">
                    <p className="text-white/70 text-center text-lg break-normal">{item.description}</p>
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


