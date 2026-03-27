'use client'

import { motion } from 'framer-motion'

interface GlowingTextProps {
  text: string
  className?: string
}

export default function GlowingText({ text, className = '' }: GlowingTextProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      animate={{
        textShadow: [
          "0 0 0px rgba(59,130,246,0)",
          "0 0 20px rgba(59,130,246,0.5)",
          "0 0 0px rgba(59,130,246,0)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
      }}
    >
      {text}
    </motion.div>
  )
}