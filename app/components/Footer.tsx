export default function Footer() {
  const navLinks = ['Work', 'How It Works', 'Pricing', 'Contact']

  return (
    <footer className="bg-apex-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Logo + tagline */}
          <div>
            <a href="#" className="font-bebas text-2xl text-apex-red tracking-widest block mb-2">
              APEX OUTREACH
            </a>
            <p className="font-dm text-white/50 text-sm">Your Website. 3 Days. Guaranteed.</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6 justify-center md:justify-end">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-dm text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-dm text-white/40 text-sm">
            &copy; 2025 Apex Outreach. All rights reserved.
          </p>
          <p className="font-dm text-white/40 text-sm">
            Professional websites for small businesses.
          </p>
        </div>
      </div>
    </footer>
  )
}
