'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export default function TiltCard({ children, className = '', glowColor = 'primary' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * 15
    const rotateY = ((x - centerX) / centerX) * 15
    
    setRotate({ x: -rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const glowColors = {
    primary: 'rgba(59,130,246,0.3)',
    purple: 'rgba(147,51,234,0.3)',
    green: 'rgba(34,197,94,0.3)',
    orange: 'rgba(249,115,22,0.3)'
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`transform-gpu transition-all duration-300 ${className}`}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: isHovered ? `0 25px 50px -12px ${glowColors[glowColor as keyof typeof glowColors]}` : 'none'
      }}
    >
      {children}
    </motion.div>
  )
}