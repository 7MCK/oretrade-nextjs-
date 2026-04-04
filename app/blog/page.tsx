import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'OreTrade Insights | Mining & Metals Industry Blog',
  description: 'Industry insights, market analysis, and thought leadership from the OreTrade team. Coming soon.',
}

export default function BlogPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon">Coming Soon</div>
          <p className="section-label">OreTrade Insights</p>
          <h1>Mining &amp; Metals<br /><span>Industry Blog</span></h1>
          <p>Market analysis, regulatory updates, supply chain intelligence, and thought leadership from the OreTrade team. Launching alongside the platform in 2026.</p>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>While You Wait</h2>
          <p>Our in-depth commodity trading guides are available now — covering iron ore, copper, gold, lithium, and the regulatory landscape driving the future of ethical mining.</p>
          <div className="features-grid" style={{ marginTop: '40px' }}>
            {[
              { href: '/guides/iron-ore', icon: '🏔️', title: 'What Is Iron Ore?', desc: 'Grades, product forms, pricing mechanisms, and how to trade iron ore internationally.' },
              { href: '/guides/copper', icon: '🔩', title: 'Copper Concentrate Grades', desc: 'What copper concentrate is, how TCRC works, and how the copper supply chain operates.' },
              { href: '/guides/gold', icon: '✨', title: 'How Is Gold Traded?', desc: 'Spot, futures, LBMA, doré, and the mechanics of physical gold trading.' },
              { href: '/guides/lithium', icon: '⚡', title: 'Lithium Mining Explained', desc: 'Brine vs hard rock, spodumene, battery-grade specs, and the global lithium supply chain.' },
              { href: '/traceability', icon: '🔗', title: 'Digital Product Passport', desc: 'The regulatory case for traceability — EU Battery Regulation, OECD, and what it means for your supply chain.' },
              { href: '/markets', icon: '📊', title: 'All Markets', desc: 'Browse all OreTrade markets — iron ore, copper, gold, nickel, critical minerals, base metals and more.' },
            ].map(g => (
              <Link key={g.href} href={g.href} style={{ textDecoration: 'none' }}>
                <div className="feature-card" style={{ cursor: 'pointer', height: '100%' }}>
                  <div className="feature-icon">{g.icon}</div>
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                  <p style={{ color: 'var(--amber)', fontFamily: 'Arial, sans-serif', fontSize: '13px', marginTop: '16px', margin: '16px 0 0' }}>Read more →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Get Notified When We Launch</h2>
        <p>Join the OreTrade waitlist and be first to access the platform and new content when we go live.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
