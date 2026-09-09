'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface NeuralBackgroundProps {
  className?: string
  color?: string
  trailOpacity?: number
  particleCount?: number
  speed?: number
}

export default function NeuralBackground({
  className,
  color = '#26b6dd',
  trailOpacity = 0.12,
  particleCount = 420,
  speed = 0.7,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !container || !context) return

    let width = 0
    let height = 0
    let frame = 0
    let particles: Particle[] = []
    let mouse = { x: -1000, y: -1000 }

    class Particle {
      x = Math.random() * width
      y = Math.random() * height
      vx = 0
      vy = 0
      age = 0
      life = Math.random() * 180 + 100

      reset() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = 0
        this.vy = 0
        this.age = 0
        this.life = Math.random() * 180 + 100
      }

      update() {
        const angle = (Math.cos(this.x * 0.004) + Math.sin(this.y * 0.004)) * Math.PI
        this.vx += Math.cos(angle) * 0.14 * speed
        this.vy += Math.sin(angle) * 0.14 * speed

        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.hypot(dx, dy)
        if (distance < 150) {
          const force = (150 - distance) / 150
          this.vx -= dx * force * 0.035
          this.vy -= dy * force * 0.035
        }

        this.x += this.vx
        this.y += this.vy
        this.vx *= 0.95
        this.vy *= 0.95
        this.age += 1

        if (this.age > this.life) this.reset()
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
      }

      draw() {
        context.fillStyle = color
        context.globalAlpha = (1 - Math.abs(this.age / this.life - 0.5) * 2) * 0.72
        context.fillRect(this.x, this.y, 1.4, 1.4)
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = container.clientWidth
      height = container.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = Array.from({ length: particleCount }, () => new Particle())
    }

    const animate = () => {
      context.fillStyle = `rgba(7, 17, 31, ${trailOpacity})`
      context.fillRect(0, 0, width, height)
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })
      context.globalAlpha = 1
      frame = requestAnimationFrame(animate)
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse = { x: event.clientX - rect.left, y: event.clientY - rect.top }
    }
    const onPointerLeave = () => { mouse = { x: -1000, y: -1000 } }

    resize()
    animate()
    window.addEventListener('resize', resize)
    container.addEventListener('pointermove', onPointerMove)
    container.addEventListener('pointerleave', onPointerLeave)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      container.removeEventListener('pointermove', onPointerMove)
      container.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [color, particleCount, speed, trailOpacity])

  return <div ref={containerRef} aria-hidden="true" className={cn('pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background', className)}><canvas ref={canvasRef} className="block h-full w-full" /></div>
}
