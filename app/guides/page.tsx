import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commodity Trading Guides | Metals & Mining Education , OreTrade',
  description: 'Free guides to commodity trading, mining ores, metals markets, and ethical sourcing. Learn about iron ore, copper, gold, lithium and more from the OreTrade team.',
}

const GUIDES = [
  { href: '/guides/iron-ore', icon: '🏔️', title: 'What Is Iron Ore?', subtitle: 'Complete Buyer and Seller Guide', desc: 'How iron ore is formed, graded and traded. From the Pilbara to the blast furnace , the definitive guide for buyers and sellers.' },
  { href: '/guides/copper', icon: '🔩', title: 'Copper Concentrate Grades Explained', subtitle: 'Mining, Processing & Trading', desc: 'What copper concentrate is, how grades are calculated, what TCRC means, and how to read an assay certificate.' },
  { href: '/guides/gold', icon: '✨', title: 'How Is Gold Traded?', subtitle: 'From Mine to Market', desc: 'Spot, futures, LBMA, and physical , a complete guide to the mechanics of gold trading for buyers, sellers and investors.' },
  { href: '/guides/lithium', icon: '⚡', title: 'Lithium Mining Explained', subtitle: 'From Brine to Battery', desc: 'How lithium is extracted from brine and hard rock, processed into carbonate and hydroxide, and graded for battery use.' },
]

export default function GuidesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">OreTrade Guides</p>
          <h1>Learn the <span>Commodity Markets</span></h1>
          <p>Free, in-depth guides to mining ores, metals markets, and ethical commodity trading. Written for buyers, sellers, traders, and anyone who wants to understand how the global minerals trade really works.</p>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <div className="features-grid">
            {GUIDES.map(g => (
              <Link key={g.href} href={g.href} style={{ textDecoration: 'none' }}>
                <div className="feature-card" style={{ cursor: 'pointer', height: '100%' }}>
                  <div className="feature-icon">{g.icon}</div>
                  <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--amber)', fontFamily: 'Arial, sans-serif', marginBottom: '8px' }}>{g.subtitle}</p>
                  <h3>{g.title}</h3>
                  <p style={{ marginTop: '8px' }}>{g.desc}</p>
                  <p style={{ color: 'var(--amber)', fontFamily: 'Arial, sans-serif', fontSize: '13px', marginTop: '16px', margin: '16px 0 0' }}>Read guide →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Ready to Trade?</h2>
        <p>Join the OreTrade waitlist to get early access when we launch in 2026.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
