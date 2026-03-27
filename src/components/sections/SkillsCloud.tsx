'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skillsCloud = [
  { name: "Java", level: 85, color: "bg-red-600" },
  { name: "Python", level: 80, color: "bg-yellow-500" },
  { name: "JavaScript", level: 88, color: "bg-yellow-500" },
  { name: "React.js", level: 92, color: "bg-blue-500" },
  { name: "Next.js", level: 88, color: "bg-gray-800" },
  { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
  { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
  { name: "WordPress", level: 85, color: "bg-blue-600" },
  { name: "WooCommerce", level: 80, color: "bg-purple-500" },
  { name: "Shopify", level: 78, color: "bg-green-600" },
  { name: "Git/GitHub", level: 85, color: "bg-orange-600" },
  { name: "PHP", level: 75, color: "bg-purple-600" }
]

export default function SkillsCloud() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Hover over any skill to see my proficiency level
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skillsCloud.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.1, y: -5 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative"
            >
              <div
                className={`px-6 py-3 rounded-full text-white font-semibold shadow-lg cursor-pointer transition-all ${skill.color} hover:shadow-xl`}
              >
                {skill.name}
              </div>
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg whitespace-nowrap"
                >
                  Proficiency: {skill.level}%
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}