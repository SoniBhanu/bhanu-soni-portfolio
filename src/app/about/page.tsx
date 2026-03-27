'use client'

import { motion } from 'framer-motion'
import { FiCode, FiUsers, FiAward, FiClock, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker } from 'react-icons/si'

export default function AboutPage() {
  const stats = [
    { icon: FiCode, value: "3+", label: "Years Experience" },
    { icon: FiAward, value: "Top 20%", label: "Academic Achievement" },
    { icon: FiUsers, value: "40+", label: "Projects Delivered" }
  ]

  const skills = [
    { name: "React", icon: FaReact, level: 90, color: "text-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, level: 85, color: "text-gray-900 dark:text-white" },
    { name: "TypeScript", icon: SiTypescript, level: 85, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "text-cyan-500" },
    { name: "Node.js", icon: FaNodeJs, level: 80, color: "text-green-600" },
    { name: "Python", icon: FaPython, level: 75, color: "text-yellow-500" },
    { name: "MongoDB", icon: SiMongodb, level: 80, color: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, level: 75, color: "text-blue-500" },
    { name: "Docker", icon: SiDocker, level: 70, color: "text-blue-400" }
  ]

  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of enterprise web applications, mentoring junior developers, and architecting scalable solutions."
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      description: "Built responsive web applications, collaborated with designers, and optimized performance for client websites."
    },
    {
      year: "2021 - 2022",
      title: "Junior Developer",
      company: "StartUp Hub",
      description: "Started my journey in web development, learning modern frameworks and building real-world applications."
    }
  ]

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me, my journey, and the skills I bring to the table
          </p>
        </motion.div>

        {/* Introduction Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-300 rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-primary-300 rounded-full flex items-center justify-center mb-6">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">Bhanu Soni</h2>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  Frontend Developer based in India
                </p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
                    <FiGithub size={20} />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
                    <FiLinkedin size={20} />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
                    <FiTwitter size={20} />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors">
                    <FiMail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Who Am I?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am a passionate Frontend Developer with a solid foundation in React.js, Next.js, WordPress, and JavaScript. With around 3 years of hands-on experience, I specialize in creating responsive, user-friendly websites and web applications that elevate user experience and drive business growth. I am adept at collaborating with cross-functional teams to deliver high-quality products and continuously stay updated with industry trends to ensure I'm always learning and adapting to new technologies. I am always excited to take on new challenges and leverage my skills to solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I hold a Bachelor's degree in Computer Science from JK Lakshmipat University, 
              where I graduated in the top 20% of my class. I'm constantly learning and 
              staying updated with the latest technologies.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <stat.icon className="w-8 h-8 mx-auto text-primary-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-gray-600 dark:text-gray-400">Technologies I work with</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-primary-600 rounded-full h-2"
                  />
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <p className="text-gray-600 dark:text-gray-400">My professional journey</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-600"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg ml-8 md:ml-0">
                    <div className="text-primary-600 font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{item.company}</p>
                    <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}