'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'HIGHLIGHTS', href: '#highlights' },
  { label: 'CONTACT', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 right-0 z-50 px-8 md:px-16 lg:px-24 py-5 flex gap-8 transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#52525b] hover:text-[#2dd4bf] transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
