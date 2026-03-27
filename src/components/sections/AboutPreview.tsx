'use client'

import { motion } from 'framer-motion'
import { FiCode, FiUsers, FiAward } from 'react-icons/fi'

export default function AboutPreview() {
  

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am a passionate Frontend Developer with a solid foundation in React.js, Next.js, WordPress, and JavaScript. With around 3 years of hands-on experience, I specialize in creating responsive, user-friendly websites and web applications that elevate user experience and drive business growth. I am adept at collaborating with cross-functional teams to deliver high-quality products and continuously stay updated with industry trends to ensure I'm always learning and adapting to new technologies. I am always excited to take on new challenges and leverage my skills to solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My journey in web development started in 2023, and since then I've worked with 
              companies like StegPearl Technologies, Climbax Entertainment, and currently at 
              DHawks. I love creating elegant solutions that solve real-world problems.
            </p>
            
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Learn More About Me
            </a>
          </motion.div>
          
          {/* Right Side - Image/Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-300 rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-primary-300 rounded-full flex items-center justify-center mb-4">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Bhanu Soni</h3>
                <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                <div className="flex justify-center gap-3 mt-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}