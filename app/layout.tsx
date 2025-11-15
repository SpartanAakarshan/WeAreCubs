import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" })

export const metadata: Metadata = {
  title: "CUBS - Transforming College Sports in India",
  description:
    "India's first structured multi-sport ecosystem for colleges — where athletes compete, colleges grow, and sports culture thrives.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
