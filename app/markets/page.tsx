import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/' },
  title: 'Ore & Metals Markets , Global Commodity Trading Platform',
  description: 'Browse OreTrade markets for iron ore, copper, gold, nickel, critical minerals, base metals and mining ores. Verified listings, full traceability, ethical sourcing.',
}

const MARKETS = [
  { href: '/markets/iron-ore', icon: '🏔️', title: 'Iron Ore', desc: 'The backbone of global steel production. Trade fines, lump and pellets from verified producers in Australia, Brazil and South Africa.' },
  { href: '/markets/copper', icon: '🔩', title: 'Copper', desc: 'The metal of electrification. Source copper concentrate and refined grades from Chile, Peru and the DRC with full assay certification.' },
  { href: '/markets/gold', icon: '✨', title: 'Gold & Precious Metals', desc: 'Gold, silver, platinum and palladium from LBMA-aligned supply chains. Fully documented provenance and conflict-free certification.' },
  { href: '/markets/nickel', icon: '⚙️', title: 'Nickel', desc: 'Battery-grade and industrial nickel from laterite and sulphide deposits. Indonesia, Philippines and key global origins.' },
  { href: '/markets/critical-minerals', icon: '⚡', title: 'Critical Minerals', desc: 'Lithium, cobalt, rare earths, graphite and manganese. The materials powering the energy transition , traced from mine to market.' },
  { href: '/markets/base-metals', icon: '🔧', title: 'Base Metals', desc: 'Copper, aluminium, zinc, lead, tin and nickel. LME-referenced pricing, verified counterparties, secure settlement.' },
  { href: '/markets/mining-ores', icon: '⛏️', title: 'Mining Ores', desc: 'Bulk ore for direct shipment , iron ore, bauxite, chromite, manganese. Large-lot transactions with full origin documentation.' },
]

export default function MarketsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">Markets</p>
          <h1>The Global Ore &amp; <span>Metals Marketplace</span></h1>
          <p>Every market on OreTrade connects verified producers with qualified buyers. Full traceability, secure settlement, and transparent pricing across all commodity categories.</p>
          <div className="badge-soon">Launching 2026</div>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <div className="features-grid">
            {MARKETS.map(m => (
              <Link key={m.href} href={m.href} style={{ textDecoration: 'none' }}>
                <div className="feature-card" style={{ cursor: 'pointer', height: '100%' }}>
                  <div className="feature-icon">{m.icon}</div>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                  <p style={{ color: 'var(--amber)', fontFamily: 'Arial, sans-serif', fontSize: '13px', marginTop: '16px', margin: '16px 0 0' }}>Explore market →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Trade Smarter, Trade Ethically</h2>
        <p>Join the waitlist to be first on the platform when OreTrade launches.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
