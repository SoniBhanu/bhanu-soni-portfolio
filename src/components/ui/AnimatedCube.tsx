'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedCube() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let angle = 0
    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    const drawCube = () => {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const size = Math.min(canvas.width, canvas.height) * 0.3
      
      const points = [
        { x: -size, y: -size, z: -size },
        { x: size, y: -size, z: -size },
        { x: size, y: -size, z: size },
        { x: -size, y: -size, z: size },
        { x: -size, y: size, z: -size },
        { x: size, y: size, z: -size },
        { x: size, y: size, z: size },
        { x: -size, y: size, z: size }
      ]
      
      const rotated = points.map(point => {
        const cosX = Math.cos(angle)
        const sinX = Math.sin(angle)
        const cosY = Math.cos(angle * 0.7)
        const sinY = Math.sin(angle * 0.7)
        
        let y1 = point.y * cosX - point.z * sinX
        let z1 = point.y * sinX + point.z * cosX
        let x1 = point.x
        
        let x2 = x1 * cosY + z1 * sinY
        let z2 = -x1 * sinY + z1 * cosY
        
        return {
          x: centerX + x2,
          y: centerY + y1,
          z: z2
        }
      })
      
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ]
      
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.6)'
      ctx.lineWidth = 2
      
      edges.forEach(edge => {
        const p1 = rotated[edge[0]]
        const p2 = rotated[edge[1]]
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
      })
      
      rotated.forEach(point => {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)'
        ctx.beginPath()
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2)
        ctx.fill()
      })
      
      angle += 0.01
      animationFrameId = requestAnimationFrame(drawCube)
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    drawCube()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: '300px' }}
    />
  )
}