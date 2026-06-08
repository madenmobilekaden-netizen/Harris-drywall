'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Red geometric shape - upper right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] bg-apex-red opacity-[0.07]"
          style={{ transform: 'rotate(20deg)', borderRadius: '30px' }}
        />
        <div
          className="absolute top-[40px] right-[60px] w-[200px] h-[200px] bg-apex-red opacity-[0.12]"
          style={{ transform: 'rotate(35deg)', borderRadius: '16px' }}
        />
        <div
          className="absolute top-[-20px] right-[180px] w-[120px] h-[120px] bg-apex-red opacity-[0.15]"
          style={{ transform: 'rotate(50deg)', borderRadius: '12px' }}
        />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="dot-1 absolute top-[15%] left-[8%] w-3 h-3 rounded-full bg-apex-red opacity-40" />
        <div className="dot-2 absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-apex-red opacity-30" />
        <div className="dot-3 absolute top-[60%] left-[5%] w-4 h-4 rounded-full bg-apex-red opacity-20" />
        <div className="dot-4 absolute top-[75%] left-[15%] w-2 h-2 rounded-full bg-apex-red opacity-35" />
        <div className="dot-5 absolute top-[20%] right-[30%] w-3 h-3 rounded-full bg-apex-red opacity-25" />
        <div className="dot-6 absolute top-[50%] right-[15%] w-2 h-2 rounded-full bg-apex-red opacity-20" />
        <div className="dot-7 absolute top-[80%] right-[25%] w-4 h-4 rounded-full bg-apex-red opacity-15" />
        <div className="dot-8 absolute top-[40%] left-[45%] w-2 h-2 rounded-full bg-apex-red opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-apex-red/30 bg-apex-red/5"
          >
            <span className="w-2 h-2 rounded-full bg-apex-red animate-pulse" />
            <span className="font-dm text-sm font-medium text-apex-red">$799 Flat Rate · No Hidden Fees</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bebas text-[72px] sm:text-[88px] lg:text-[100px] leading-[0.92] text-apex-black mb-6"
          >
            Your Business Deserves A Website That Actually{' '}
            <span className="text-apex-red">Works.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-dm text-lg sm:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
          >
            We build professional websites for small businesses in 3 days flat.{' '}
            <strong className="text-apex-black">$799.</strong> Money back if we miss the deadline.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-apex-red hover:bg-apex-red-dark text-white font-dm font-bold text-base rounded transition-all duration-200 shadow-lg shadow-apex-red/30 hover:shadow-apex-red/50 hover:-translate-y-0.5"
            >
              Get My Website — $799
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-apex-black text-apex-black hover:bg-apex-black hover:text-white font-dm font-bold text-base rounded transition-all duration-200 hover:-translate-y-0.5"
            >
              See Our Work
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500 font-dm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-apex-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No contracts
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-apex-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Money-back guarantee
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-apex-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              50+ sites launched
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
