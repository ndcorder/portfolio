'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`
        ref.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 z-0 opacity-0 md:opacity-100"
      style={{
        background:
          'radial-gradient(circle, rgba(45, 212, 191, 0.04) 0%, transparent 70%)',
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
      }}
      aria-hidden="true"
    />
  )
}
