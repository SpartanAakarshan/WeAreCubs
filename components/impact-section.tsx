"use client"

import { useState } from "react"
import { GraduationCap, Building2, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Anton } from "next/font/google"
const anton = Anton({ weight: "400", subsets: ["latin"] })

const impacts = [
  {
    id: "students",
    icon: GraduationCap,
    title: "For Students",  
    items: [ "Practical Application of Theoretical Knowledge",
      "Skill Development",
      "Better Internship & Career Opportunities",
      "Improved Physical Fitness",
      "Fosters Teamwork & Leadership",
      "Scholarship & Financial Aid Opportunities",
      "Scouting & Exposure for Athletes",
      "Talent Identification for Non-Athletes", "Strengthened Campus Identity & Belonging"],
  },
  {
    id: "colleges",
    icon: Building2,
    title: "For Colleges",
    items: ["Enriched Campus Culture",
    "New Revenue Opportunities",
    "Elevated Institutional Reputation",
    "Stronger Industry & Alumni Engagement",
    "Holistic Student Development",
    "Increased Student Enrollment",
    "Athlete Development & Sports Excellence",
    "Establishing a Lasting Sports Legacy",
    "Strengthening Community & College Identity"],
  },
  {
    id: "india",
    icon: Flag,
    title: "For India",
    items: ["Upskilling Coaches & Sports Professionals",
    "Stronger Community Ties",
    "Inspiring Grassroots Sports Participation",
    "Revitalizing India’s Sports Culture",
    "Generating Employment in the Sports Industry",
    "Promoting a Healthier Population",
    "Driving Economic Growth",
    // "Creating a Pathway for Future Athletes",
    "Developing World-Class Sports Infrastructure",
    "Positioning India as a Competitive Sporting Nation"],
  },
]

export function ImpactSection() {
  const [activeTab, setActiveTab] = useState("students")

  const activeImpact = impacts.find((i) => i.id === activeTab) || impacts[0]
  const Icon = activeImpact.icon

  return (
    <section className="py-14 md:py-32 bg-black" id="impact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className={`${anton.className} text-3xl sm:text-4xl md:text-6xl font-black text-balance text-white uppercase`}>
              The <span className="text-primary">Impact</span>
            </h2>
            {/* <p className={`${anton.className} text-base sm:text-lg md:text-2xl text-white/70 uppercase`}>RESULTS THAT MATTER</p> */}
          </div>

          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 md:gap-4 overflow-x-auto pb-2">
            {impacts.map((impact) => {
              const TabIcon = impact.icon
              return (
                <Button
                  key={impact.id}
                  onClick={() => setActiveTab(impact.id)}
                  variant={activeTab === impact.id ? "default" : "outline"}
                  size="lg"
                  className={`whitespace-nowrap text-sm sm:text-lg px-4 sm:px-6 py-4 sm:py-6 font-semibold sm:font-bold ${
                    activeTab === impact.id
                      ? "bg-primary text-primary-foreground"
                      : "border-2 border-white/20 text-white hover:border-primary bg-transparent"
                  }`}
                >
                  <TabIcon className="w-5 h-5 mr-2" />
                  {impact.title}
                </Button>
              )
            })}
          </div>

          <div className="bg-black text-white rounded-lg p-6 sm:p-10 md:p-12 border-2 sm:border-4 border-primary">
            <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-8">
              {/* <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div> */}
              {/* <h3 className="text-3xl md:text-4xl font-black text-white">{activeImpact.title}</h3> */}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {activeImpact.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-black text-white rounded-lg p-3 sm:p-4 md:p-6 text-center font-semibold sm:font-bold text-xs sm:text-base md:text-lg border border-white/20 hover:border-primary transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-6 md:pt-8">
            <p className={`${anton.className} text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 text-white uppercase`}>
              When campuses grow, <span className="text-primary">the nation wins.</span>
            </p>
            {/* <Button
              variant="outline"
              className="border-2 border-primary text-white hover:bg-primary hover:text-primary-foreground font-bold bg-transparent"
            >
              See the Full Impact →
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
