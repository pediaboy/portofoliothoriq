import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thirafi Thariq Al Idris — Web Developer & Trader',
  description: 'Portfolio profesional Thirafi Thariq Al Idris. Web Developer sejak 2018, Trader Saham & Crypto sejak 2021.',
  keywords: ['web developer', 'trader', 'portofolio', 'thirafi thariq', 'AI', 'fintech'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#020818" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
