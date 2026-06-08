'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    initials: 'MT',
    color: '#FF2D2D',
    stars: 5,
    quote: 'Site was live in 2 days. Already getting calls from it. Best $799 I\'ve spent on my business.',
    name: 'Mike T.',
    company: 'MT Contracting',
  },
  {
    initials: 'SK',
    color: '#CC0000',
    stars: 5,
    quote: 'I didn\'t think a real website was possible at this price. Completely blown away by how professional it looks.',
    name: 'Sarah K.',
    company: 'SK Boutique',
  },
  {
    initials: 'DM',
    color: '#FF2D2D',
    stars: 5,
    quote: 'They built my entire site while I was on a job site. Checked my phone and it was live. Unreal.',
    name: 'Derek M.',
    company: 'Lakeview Landscaping',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-apex-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-dm text-apex-red font-semibold text-sm uppercase tracking-widest">
            Client Stories
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl text-apex-black mt-2">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(255,45,45,0.18)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <svg key={idx} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-dm text-apex-black leading-relaxed mb-8 text-base">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bebas text-white text-lg flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-dm font-bold text-apex-black text-sm">{t.name}</div>
                  <div className="font-dm text-gray-400 text-xs mt-0.5">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
