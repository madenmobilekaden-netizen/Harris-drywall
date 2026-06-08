'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'You Fill Out the Form',
    desc: 'Tell us about your business. Takes 2 minutes. We handle everything else from there.',
  },
  {
    number: '02',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'We Build Your Site',
    desc: 'Custom design, built fast. You approve before it goes live. No surprises.',
  },
  {
    number: '03',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
    title: 'You Go Live',
    desc: 'Your site is live within 3 days. Guaranteed or your money back. Period.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-dm text-apex-red font-semibold text-sm uppercase tracking-widest">
            The Process
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl text-apex-black mt-2">
            From Zero to Live in 3 Days
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Step number */}
              <div className="font-bebas text-[80px] leading-none text-apex-red/10 group-hover:text-apex-red/20 transition-colors duration-300 absolute top-4 right-6">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-apex-red/10 flex items-center justify-center text-apex-red mb-6">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="font-bebas text-2xl text-apex-black mb-3">{step.title}</h3>
              <p className="font-dm text-gray-600 leading-relaxed">{step.desc}</p>

              {/* Connector arrow (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-apex-red rounded-full items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
