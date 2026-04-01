'use client'

import { useState } from 'react'

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-[#18181b] text-[#52525b] hover:text-[#2dd4bf] hover:border-[#2dd4bf]/30 transition-all duration-300 cursor-pointer"
    >
      {copied ? '✓ COPIED' : 'COPY'}
    </button>
  )
}
