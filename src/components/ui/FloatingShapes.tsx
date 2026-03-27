'use client'

import { motion } from 'framer-motion'

export default function FloatingShapes() {
  const shapes = [
    { size: "w-64 h-64", color: "bg-primary-500/5", left: "10%", top: "20%", duration: 20, delay: 0 },
    { size: "w-96 h-96", color: "bg-blue-500/5", right: "5%", top: "60%", duration: 25, delay: 2 },
    { size: "w-48 h-48", color: "bg-purple-500/5", left: "80%", top: "10%", duration: 18, delay: 1 },
    { size: "w-80 h-80", color: "bg-cyan-500/5", left: "15%", bottom: "10%", duration: 22, delay: 3 },
    { size: "w-56 h-56", color: "bg-pink-500/5", right: "20%", top: "40%", duration: 24, delay: 1.5 }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, -50, 0, 50, 0],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}