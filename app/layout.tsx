import type { Metadata } from 'next'
import { Martian_Mono, Outfit } from 'next/font/google'
import './globals.css'

const mono = Martian_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const sans = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nicolas Corder — CISO & Principal Engineer',
  description:
    'CISO and Principal Engineer at Redrock Software Corporation. Building secure systems at scale.',
  openGraph: {
    title: 'Nicolas Corder — CISO & Principal Engineer',
    description: 'Building secure systems at scale.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
