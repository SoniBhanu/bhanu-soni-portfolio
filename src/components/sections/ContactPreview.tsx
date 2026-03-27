'use client'

import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function ContactPreview() {
  const contactMethods = [
    { icon: FiMail, label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
    { icon: FiGithub, label: "GitHub", value: "@yourusername", href: "https://github.com/yourusername" },
    { icon: FiLinkedin, label: "LinkedIn", value: "/in/yourusername", href: "https://linkedin.com/in/yourusername" },
    { icon: FiTwitter, label: "Twitter", value: "@yourusername", href: "https://twitter.com/yourusername" }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-950/30">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <method.icon className="w-8 h-8 mx-auto text-primary-600 mb-3" />
              <h3 className="font-semibold mb-1">{method.label}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{method.value}</p>
            </a>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}