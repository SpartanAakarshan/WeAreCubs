"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY <= 10)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Fixed top bar over hero */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <div className={`${atTop ? "bg-transparent backdrop-blur-0" : "backdrop-blur-sm bg-black/40"} transition-colors duration-300`}>
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo-cubs.jpg" alt="CUBS" className="h-20 w-auto" />
            </a>
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="/about" className="text-white/90 hover:text-white font-medium">About</a>
              <a href="/contact" className="text-white/90 hover:text-white font-medium">Contact</a>
              <a
                href="/join"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold hover:bg-primary/90"
              >
                Join Now
              </a>
            </nav>
            {/* Mobile hamburger */}
            <button
              aria-label="Open menu"
              className="md:hidden text-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black">
          <div className="container mx-auto h-full px-4 py-4 flex flex-col">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-3">
                <img src="/placeholder-logo.png" alt="CUBS" className="h-10 w-auto" />
              </a>
              <button
                aria-label="Close menu"
                className="text-white"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            <div className="mt-12 flex-1 flex flex-col gap-6">
              <a
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-semibold"
              >
                About
              </a>
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-semibold"
              >
                Contact
              </a>
              <a
                href="/join"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-3 rounded-md font-bold w-max"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


