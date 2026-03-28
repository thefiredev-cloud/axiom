import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Axiom — Your Personal Hedge Fund',
  description: 'Superintelligent trading analysis — congressional trades, dark pool flow, options signals, all in one system.',
  openGraph: {
    title: 'Axiom — Your Personal Hedge Fund',
    description: 'Superintelligent trading analysis — congressional trades, dark pool flow, options signals, all in one system.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-bg-base text-white`}>
        {children}
      </body>
    </html>
  )
}
