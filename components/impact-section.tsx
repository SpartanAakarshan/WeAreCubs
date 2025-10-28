"use client"

import { useState } from "react"
import { GraduationCap, Building2, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"

const impacts = [
  {
    id: "students",
    icon: GraduationCap,
    title: "For Students",
    items: ["Skill growth", "Exposure", "Scholarships", "Fitness", "Leadership"],
  },
  {
    id: "colleges",
    icon: Building2,
    title: "For Colleges",
    items: ["Culture", "Reputation", "Revenue", "Enrollment", "Legacy"],
  },
  {
    id: "india",
    icon: Flag,
    title: "For India",
    items: ["Grassroots impact", "Jobs", "Infrastructure", "Sporting culture revival"],
  },
]

export function ImpactSection() {
  const [activeTab, setActiveTab] = useState("students")

  const activeImpact = impacts.find((i) => i.id === activeTab) || impacts[0]
  const Icon = activeImpact.icon

  return (
    <section className="container mx-auto px-4 py-3 flex items-center justify-between bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-balance">
              The <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">Results That Matter</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {impacts.map((impact) => {
              const TabIcon = impact.icon
              return (
                <Button
                  key={impact.id}
                  onClick={() => setActiveTab(impact.id)}
                  variant={activeTab === impact.id ? "default" : "outline"}
                  size="lg"
                  className={`text-lg px-6 py-6 font-bold ${
                    activeTab === impact.id ? "bg-primary text-primary-foreground" : "border-2 hover:border-primary"
                  }`}
                >
                  <TabIcon className="w-5 h-5 mr-2" />
                  {impact.title}
                </Button>
              )
            })}
          </div>

          <div className="bg-secondary text-secondary-foreground rounded-lg p-12 border-4 border-primary">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black">{activeImpact.title}</h3>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {activeImpact.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-background text-foreground rounded-lg p-6 text-center font-bold text-lg border-2 border-primary/20"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-2xl md:text-3xl font-black mb-6">
              When campuses grow, <span className="text-primary">the nation wins.</span>
            </p>
            <Button
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground font-bold bg-transparent"
            >
              See the Full Impact →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
