'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
}

export default function ParallaxSection({ children, speed = 0.05 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 100, damping: 30 })
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const moveX = (clientX - centerX) * speed
      const moveY = (clientY - centerY) * speed
      x.set(moveX)
      y.set(moveY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [speed, x, y])

  return (
    <motion.div
      ref={ref}
      style={{
        translateX: springX,
        translateY: springY,
      }}
    >
      {children}
    </motion.div>
  )
}