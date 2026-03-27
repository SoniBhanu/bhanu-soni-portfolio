'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'

const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "Real-time data visualization with machine learning insights",
    image: "📊",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    features: ["Real-time predictions", "Interactive dashboards", "Custom reports"]
  },
  {
    id: 2,
    title: "E-Commerce Ecosystem",
    description: "Complete e-commerce solution with AI recommendations",
    image: "🛍️",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    features: ["Smart recommendations", "One-click checkout", "Inventory management"]
  },
  {
    id: 3,
    title: "Social Media Analytics",
    description: "Track and analyze social media performance",
    image: "📈",
    tech: ["React", "Express", "PostgreSQL", "Chart.js"],
    features: ["Engagement metrics", "Audience insights", "Competitor analysis"]
  }
]

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Innovative solutions that solve real-world problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-300 flex items-center justify-center text-7xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = featuredProjects.find(p => p.id === selectedProject)
                if (!project) return null
                return (
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                      >
                        <FiX size={24} />
                      </button>
                    </div>
                    <div className="text-6xl mb-4 text-center py-8 bg-gradient-to-br from-primary-500 to-primary-300 rounded-xl">
                      {project.image}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400">{feature}</li>
                      ))}
                    </ul>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg">
                        <FiGithub /> View Code
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg">
                        <FiExternalLink /> Live Demo
                      </button>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}