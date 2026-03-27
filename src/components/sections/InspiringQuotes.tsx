'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageSquare, FiStar } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'

const quotes = [
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    role: "Software Architect"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    role: "Programming Legend"
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    role: "Author"
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    role: "Software Engineer"
  }
]

export default function InspiringQuotes() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-primary-400 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <FaQuoteLeft className="w-12 h-12 mx-auto mb-6 opacity-50" />
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl md:text-3xl font-light mb-4">
              "{quotes[current].text}"
            </p>
            <p className="text-lg font-semibold mb-1">{quotes[current].author}</p>
            <p className="text-sm opacity-75">{quotes[current].role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 rounded-full transition-all ${
                current === index ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}