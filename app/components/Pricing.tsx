'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  'Custom design built for your business',
  'Mobile-ready on all devices',
  'SEO basics included',
  'Contact form + click-to-call',
  'Live in 3 days guaranteed',
  '100% money back if we miss the deadline',
  '1 round of revisions included',
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-dm text-apex-red font-semibold text-sm uppercase tracking-widest">
            Simple & Transparent
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl text-apex-black mt-2">
            One Price. Everything Included.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div
            className="bg-white rounded-2xl p-10 text-center"
            style={{
              border: '2px solid #FF2D2D',
              boxShadow: '0 8px 40px rgba(255,45,45,0.18), 0 2px 8px rgba(255,45,45,0.1)',
            }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-apex-red/10 mb-6">
              <span className="font-dm text-apex-red text-sm font-semibold tracking-wide">
                One-Time Flat Rate
              </span>
            </div>

            {/* Price */}
            <div className="font-bebas text-[100px] leading-none text-apex-black mb-2">
              $799
            </div>
            <p className="font-dm text-gray-400 text-sm mb-8">No monthly fees. No hidden costs. Ever.</p>

            {/* Divider */}
            <div className="h-px bg-gray-100 mb-8" />

            {/* Features */}
            <ul className="space-y-4 mb-10 text-left">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-apex-red/10 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-apex-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-dm text-apex-black text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="block w-full py-4 bg-apex-red hover:bg-apex-red-dark text-white font-dm font-bold text-base rounded transition-all duration-200 text-center shadow-lg shadow-apex-red/30 hover:shadow-apex-red/50 hover:-translate-y-0.5"
            >
              Claim Your Spot
            </a>

            <p className="font-dm text-xs text-gray-400 mt-4">
              Only a few spots available each month.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
