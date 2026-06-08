'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-bebas text-2xl md:text-3xl text-apex-red tracking-widest">
            APEX OUTREACH
          </a>

          {/* Nav Links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {['Work', 'How It Works', 'Pricing', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-dm text-sm font-medium text-apex-black hover:text-apex-red transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-apex-red hover:bg-apex-red-dark text-white font-dm font-semibold text-sm rounded transition-colors duration-200"
          >
            Get My Website
          </a>

          {/* Mobile menu button */}
          <a
            href="#contact"
            className="md:hidden inline-flex items-center px-4 py-2 bg-apex-red hover:bg-apex-red-dark text-white font-dm font-semibold text-sm rounded transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
