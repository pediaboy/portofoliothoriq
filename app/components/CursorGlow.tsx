'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return
    const move = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div ref={glowRef} className="cursor-glow hidden lg:block" />
}
