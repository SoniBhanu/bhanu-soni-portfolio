'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import GlowingText from '@/components/ui/GlowingText'
import AnimatedCube from '@/components/ui/AnimatedCube'

export default function HeroEnhanced() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/bhanusoni', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/bhanu-soni', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaEnvelope, href: 'mailto:bhanusoni7640@gmail.com', label: 'Email', color: 'hover:text-red-500' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Cube Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <AnimatedCube />
      </div>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-primary-500/20 animate-gradient" />
      </div>

      <div className="text-center px-4 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-600 to-primary-400 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm{' '}
          <GlowingText text="Bhanu Soni" className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent" />
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto"
        >
          <span className="inline-block animate-bounce">✨</span> Full Stack Developer{' '}
          <span className="inline-block animate-bounce delay-100">🚀</span>
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Specialized in React.js, Next.js, and modern web technologies. 
          Building exceptional digital experiences with 3+ years of industry experience.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-4 justify-center mb-12"
        >
          <Button href="/projects" size="lg">
            View My Work
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Me
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-6 justify-center mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all ${social.color}`}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="text-gray-400 dark:text-gray-600" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}