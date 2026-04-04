import type { Metadata } from 'next'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: { default: 'OreTrade , Global Ore Trading Platform | From Mine to Market', template: '%s | OreTrade' },
  description: 'OreTrade is the global marketplace for mining ores, base metals, precious metals and critical minerals. Verified counterparties, full traceability, ethical sourcing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
