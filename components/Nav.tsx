'use client'
import Link from 'next/link'
import { useState } from 'react'
import { OreTradeLogoSVG } from './Logo'
import WaitlistModal from './WaitlistModal'

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <nav className="main-nav">
        <Link href="/" className="logo">
          <OreTradeLogoSVG size={48} />
          <div className="logo-text">
            <span className="logo-name">OreTrade</span>
            <span className="logo-tagline">From Mine to Market</span>
          </div>
        </Link>
        <ul>
          <li><Link href="/#features">Features</Link></li>
          <li><Link href="/markets">Markets</Link></li>
          <li><Link href="/traceability">Traceability</Link></li>
          <li><Link href="/guides">Guides</Link></li>
          <li><Link href="/#investors">Investors</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          <li><a href="#" className="nav-cta" onClick={(e) => { e.preventDefault(); setModalOpen(true) }}>Join Waitlist</a></li>
        </ul>
      </nav>
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
