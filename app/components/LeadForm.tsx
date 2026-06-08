'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function LeadForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    bestTime: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-dm text-apex-red font-semibold text-sm uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl text-apex-black mt-2">
            Let&rsquo;s Build Your Website
          </h2>
          <p className="font-dm text-gray-500 mt-4 max-w-md mx-auto">
            Fill out the form below and we&rsquo;ll call you within the hour.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[560px] mx-auto"
        >
          <div
            className="bg-white rounded-2xl p-8 md:p-10"
            style={{
              borderTop: '4px solid #FF2D2D',
              boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-apex-red/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-apex-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bebas text-3xl text-apex-black mb-3">We got it!</h3>
                <p className="font-dm text-gray-600 text-base">
                  Expect a call from us within the hour.
                </p>
                <div className="mt-6 p-4 rounded-xl bg-apex-gray">
                  <p className="font-dm text-sm text-gray-500">
                    ✓ Money-back guarantee if we miss your 3-day deadline.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-dm text-sm font-semibold text-apex-black mb-2">
                      Full Name <span className="text-apex-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg font-dm text-sm text-apex-black placeholder-gray-300 focus:outline-none focus:border-apex-red transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-dm text-sm font-semibold text-apex-black mb-2">
                      Phone Number <span className="text-apex-red">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(314) 555-0000"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg font-dm text-sm text-apex-black placeholder-gray-300 focus:outline-none focus:border-apex-red transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-dm text-sm font-semibold text-apex-black mb-2">
                    Email Address <span className="text-apex-red">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@yourbusiness.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-dm text-sm text-apex-black placeholder-gray-300 focus:outline-none focus:border-apex-red transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block font-dm text-sm font-semibold text-apex-black mb-2">
                    Business Type <span className="text-apex-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessType"
                    required
                    value={form.businessType}
                    onChange={handleChange}
                    placeholder="e.g. Roofing, Restaurant, Salon..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-dm text-sm text-apex-black placeholder-gray-300 focus:outline-none focus:border-apex-red transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block font-dm text-sm font-semibold text-apex-black mb-2">
                    Best Time to Call <span className="text-apex-red">*</span>
                  </label>
                  <select
                    name="bestTime"
                    required
                    value={form.bestTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg font-dm text-sm text-apex-black focus:outline-none focus:border-apex-red transition-colors duration-200 bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a time window...</option>
                    <option value="morning">Morning 8am–12pm</option>
                    <option value="afternoon">Afternoon 12pm–5pm</option>
                    <option value="evening">Evening 5pm–8pm</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-apex-red hover:bg-apex-red-dark text-white font-dm font-bold text-base rounded-lg transition-all duration-200 shadow-lg shadow-apex-red/30 hover:shadow-apex-red/50 hover:-translate-y-0.5"
                  >
                    Get My Website — $799
                  </button>
                  <p className="font-dm text-xs text-gray-400 text-center mt-4">
                    Money-back guarantee if we miss your 3-day deadline.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
