'use client'

import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaPython 
} from 'react-icons/fa'
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb 
} from 'react-icons/si'
import AnimatedSkillBar from '@/components/ui/AnimatedSkillBar'

const skills = [
  { name: 'React', icon: FaReact, level: 90, color: 'text-blue-500' },
  { name: 'Next.js', icon: SiNextdotjs, level: 85, color: 'text-gray-900 dark:text-white' },
  { name: 'TypeScript', icon: SiTypescript, level: 85, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: 'text-cyan-500' },
  { name: 'Node.js', icon: FaNodeJs, level: 80, color: 'text-green-600' },
  { name: 'Python', icon: FaPython, level: 75, color: 'text-yellow-500' },
  { name: 'MongoDB', icon: SiMongodb, level: 80, color: 'text-green-500' },
  { name: 'Docker', icon: FaDocker, level: 70, color: 'text-blue-400' },
]

export default function SkillsEnhanced() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <AnimatedSkillBar {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}