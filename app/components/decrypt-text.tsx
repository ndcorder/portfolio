'use client'

import { useEffect, useState } from 'react'

const GLYPHS = '!@#$%^&*()_+-=[]{}|;:<>?/~0123456789'

interface DecryptTextProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export function DecryptText({
  text,
  delay = 0,
  speed = 35,
  className = '',
}: DecryptTextProps) {
  const [display, setDisplay] = useState(() => text.replace(/[^ ]/g, '\u00A0'))
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!started) return

    let frame = 0

    const interval = setInterval(() => {
      frame++
      const resolved = Math.floor(frame / 3)

      if (resolved >= text.length) {
        setDisplay(text)
        clearInterval(interval)
        return
      }

      let result = ''
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          result += ' '
        } else if (i < resolved) {
          result += text[i]
        } else if (i < resolved + 4) {
          result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        } else {
          result += '\u00A0'
        }
      }
      setDisplay(result)
    }, speed)

    return () => clearInterval(interval)
  }, [started, text, speed])

  return <span className={className}>{display}</span>
}
