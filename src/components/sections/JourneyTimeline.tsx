'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  FiAward, FiCode, FiUsers, FiTrendingUp, FiStar, 
  FiHeart, FiBriefcase, FiBookOpen, FiCpu, FiCloud,
  FiShoppingCart
} from 'react-icons/fi'
import { FaRocket, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'

const journeyMilestones = [
  {
    year: "2019-2023",
    title: "Education Foundation",
    subtitle: "Bachelor's in Computer Science",
    description: "Graduated from JK Lakshmipat University with 7.19 CGPA, ranking in the top 20% of my class. Participated in hackathons and built a strong foundation in programming.",
    icon: FaGraduationCap,
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/50",
    achievements: [
      "🎓 Bachelor's in Computer Science - 7.19 CGPA",
      "🏆 Top 20% academic achievement",
      "💻 Participated in Hackathon",
      "📚 Mastered Java, Python, JavaScript"
    ],
    image: "🎓",
    stats: { value: "Top 20%", label: "Academic Rank" }
  },
  {
    year: "Jan 2023 - Dec 2023",
    title: "Software Engineer",
    subtitle: "Climbax Entertainment Pvt. Ltd.",
    description: "Built and maintained web applications using React.js, Tailwind CSS, and JavaScript. Developed Learning Management System (LMS) and Coworking Space Management App.",
    icon: FaLaptopCode,
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/50",
    achievements: [
      "📚 Built LMS for course creation & management",
      "🏢 Coworking Space Management App",
      "⚡ Reduced load times by optimizing performance",
      "🎨 Improved UI/UX for better engagement"
    ],
    image: "🚀",
    stats: { value: "8+", label: "Major Projects" }
  },
  {
    year: "June 2024 - May 2025",
    title: "Frontend Developer",
    subtitle: "StegPearl Technologies Pvt. Ltd.",
    description: "Engineered React.js applications for centralized management of multiple websites. Designed interbilling portal and customized WordPress themes.",
    icon: FiBriefcase,
    color: "from-orange-500 to-red-500",
    glow: "shadow-orange-500/50",
    achievements: [
      "🏢 Centralized management platform",
      "💳 Interbilling portal with intuitive UI",
      "🎨 Custom WordPress themes & plugins",
      "🔧 Resolved critical frontend issues"
    ],
    image: "⚡",
    stats: { value: "10+", label: "Projects Delivered" }
  },
  {
    year: "May 2025 - Present",
    title: "Frontend Developer",
    subtitle: "DHawks",
    description: "Developing and customizing websites on Shopify and WordPress. Creating custom plugins, integrating payment gateways, and managing end-to-end projects.",
    icon: FiShoppingCart,
    color: "from-green-500 to-emerald-500",
    glow: "shadow-green-500/50",
    achievements: [
      "🛍️ Shopify & WordPress Development",
      "🔌 Custom plugin development",
      "💳 Payment gateway integration",
      "🤝 Direct client collaboration"
    ],
    image: "🌟",
    stats: { value: "Live", label: "Projects" }
  }
]

const achievementsStats = [
  { icon: FiAward, value: "3+", label: "Years Experience",  color: "text-yellow-500", delay: 0 },
  { icon: FiCode, value: "40+", label: "Projects Delivered", color: "text-blue-500", delay: 0.1 },
  { icon: FiUsers, value: "Top 20%", label: "Academic Achievement", color: "text-green-500", delay: 0.2 },
  { icon: FiHeart, value: "100%", label: "Satisfaction Rate", color: "text-red-500", delay: 0.3 }
]

export default function JourneyTimelineEnhanced() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white text-sm font-semibold">
              My Journey
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent">
            Evolution of Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A transformative journey of growth, innovation, and impact
          </p>
        </motion.div>

        {/* Stats Row with 3D Flip Effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {achievementsStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.5, delay: stat.delay }}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              className="perspective-1000"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all transform-gpu">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, delay: stat.delay + 0.5, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block"
                >
                  <stat.icon className={`w-12 h-12 mx-auto mb-3 ${stat.color}`} />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", delay: stat.delay + 0.3 }}
                  className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500 rounded-full"
          />

          {journeyMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-20 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              onMouseEnter={() => setHoveredMilestone(index)}
              onMouseLeave={() => setHoveredMilestone(null)}
            >
              {/* Timeline Node with Pulse Effect */}
              <motion.div
                animate={{
                  scale: hoveredMilestone === index ? [1, 1.2, 1] : 1,
                  boxShadow: hoveredMilestone === index ? "0 0 30px rgba(59,130,246,0.5)" : "0 0 0px rgba(59,130,246,0)"
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 flex items-center justify-center z-20 shadow-xl"
              >
                <motion.div
                  animate={{ rotate: hoveredMilestone === index ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <milestone.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="absolute inset-0 rounded-full bg-primary-500/30"
                />
              </motion.div>

              {/* Content Card */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl ml-12 md:ml-0 transition-all duration-300 ${
                    hoveredMilestone === index ? `shadow-2xl ${milestone.glow}` : ''
                  }`}
                >
                  {/* Card Header with Gradient */}
                  <div className={`bg-gradient-to-r ${milestone.color} p-4 text-white`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm font-semibold opacity-90">{milestone.subtitle}</span>
                        <h3 className="text-2xl font-bold">{milestone.title}</h3>
                      </div>
                      <div className="text-4xl">{milestone.image}</div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary-500/20 to-primary-400/20 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
                      {milestone.year}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Achievement Badges */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {milestone.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-primary-500">▹</span>
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Stats Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-400 flex items-center justify-center">
                            <FaRocket className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-medium">Impact</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-primary-600">{milestone.stats.value}</span>
                          <span className="text-sm text-gray-500 ml-1">{milestone.stats.label}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-primary-500/10 rounded-3xl p-12 backdrop-blur-sm border border-primary-500/20"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🚀
            </motion.div>
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              The Journey Continues
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Excited about the future! Planning to explore more in AI/ML, Cloud Architecture, 
              and contribute to open-source communities. Always learning, always growing!
            </p>
            <motion.div
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Add custom styles for 3D effects */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}