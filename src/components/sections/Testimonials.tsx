'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO, TechCorp",
    content: "Amazing developer! Delivered the project ahead of schedule and exceeded our expectations. The code quality is exceptional.",
    rating: 5,
    avatar: "👨💼"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    content: "One of the most talented developers I've worked with. Great communication and problem-solving skills.",
    rating: 5,
    avatar: "👩💼"
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "CTO, StartupHub",
    content: "Incredible attention to detail and technical expertise. Would definitely work with them again.",
    rating: 5,
    avatar: "👨💻"
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-950/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Don't just take my word for it - here's what others think
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="text-6xl mb-4">{testimonials[current].avatar}</div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg italic">
                "{testimonials[current].content}"
              </p>
              <h3 className="font-bold text-lg">{testimonials[current].name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:-ml-12 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:-mr-12 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                current === index ? 'w-8 bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}