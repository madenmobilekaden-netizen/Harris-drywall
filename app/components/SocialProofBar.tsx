'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '50+', label: 'Sites Launched' },
  { value: '3-Day', label: 'Average Turnaround' },
  { value: '100%', label: 'Money-Back Guarantee' },
]

export default function SocialProofBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="border-t-4 border-apex-red bg-apex-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center justify-center text-center sm:px-8"
            >
              <span className="font-bebas text-5xl md:text-6xl text-apex-red tracking-wide">
                {stat.value}
              </span>
              <span className="font-dm text-white/70 text-sm mt-1 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
