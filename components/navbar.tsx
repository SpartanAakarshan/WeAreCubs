"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 100 // Approximate height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const handleScrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      // If not on homepage, navigate to homepage with hash
      router.push(`/#${sectionId}`)
      setMobileOpen(false)
      return
    }

    // If on homepage, scroll directly
    scrollToSection(sectionId)
    setMobileOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY <= 10)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // If we're on homepage and there's a hash, scroll to it
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.slice(1) // Remove the #
      setTimeout(() => {
        scrollToSection(hash)
      }, 100)
    }
  }, [pathname])

  return (
    <>
      {/* Fixed top bar over hero */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <div className={`${atTop ? "bg-transparent backdrop-blur-0" : "backdrop-blur-sm bg-black/40"} transition-colors duration-300`}>
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/new-cubs-logo.svg" alt="CUBS" className="h-20 w-auto" />
            </a>
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => handleScrollToSection("why-india")}
                className="text-white/90 hover:text-white font-medium cursor-pointer"
                type="button"
              >
                Why
              </button>
              <button
                onClick={() => handleScrollToSection("impact")}
                className="text-white/90 hover:text-white font-medium cursor-pointer"
                type="button"
              >
                Impact
              </button>
              <a href="/about" className="text-white/90 hover:text-white font-medium">About</a>
              <a href="/contact" className="text-white/90 hover:text-white font-medium">Contact</a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScLBoFTLTMNGLOhjSCE56JASRZ3S_JONjzsfukB5OZ3a3inQA/viewform?usp=dialog"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold hover:bg-primary/90"
              >
                Know More
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
              <button
                onClick={() => handleScrollToSection("why-india")}
                className="text-white text-2xl font-semibold text-left cursor-pointer"
                type="button"
              >
                Why
              </button>
              <button
                onClick={() => handleScrollToSection("impact")}
                className="text-white text-2xl font-semibold text-left cursor-pointer"
                type="button"
              >
                Impact
              </button>
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
                href="https://docs.google.com/forms/d/e/1FAIpQLScLBoFTLTMNGLOhjSCE56JASRZ3S_JONjzsfukB5OZ3a3inQA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
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


