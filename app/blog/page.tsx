import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'OreTrade Insights | Mining, Metals and Rare Earth Market Analysis',
  description: 'Market analysis, regulatory updates and industry intelligence from OreTrade. China rare earth export controls, shortage analysis, and supply chain insights.',
}

const POSTS = [
  {
    href: '/blog/china-rare-earth-export-controls',
    label: 'Market Analysis',
    title: "China Rare Earth Export Controls 2025 to 2026 — What Buyers Need to Know",
    desc: "China's Announcement 18 placed dysprosium, terbium, samarium and yttrium under export controls. Prices have doubled. Here is what happened and where to find alternative supply.",
    urgent: true,
  },
  {
    href: '/blog/rare-earth-shortage-2026',
    label: 'Market Analysis',
    title: 'Rare Earth Shortage 2026 — Where to Find Supply Outside China',
    desc: 'The most severe rare earth supply shortage in a decade. What is driving it, why it is different from previous episodes, and which verified non-Chinese sources exist.',
    urgent: true,
  },
]

const GUIDES = [
  { href: '/guides/iron-ore', icon: '🏔️', title: 'What Is Iron Ore?', subtitle: 'Complete Buyer and Seller Guide' },
  { href: '/guides/copper', icon: '🔩', title: 'Copper Concentrate Grades Explained', subtitle: 'Mining, Processing and Trading' },
  { href: '/guides/gold', icon: '✨', title: 'How Is Gold Traded?', subtitle: 'From Mine to Market' },
  { href: '/guides/lithium', icon: '⚡', title: 'Lithium Mining Explained', subtitle: 'From Brine to Battery' },
]

export default function BlogPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">OreTrade Insights</p>
          <h1>Mining, Metals and<br /><span>Rare Earth Market Analysis</span></h1>
          <p>Market intelligence, regulatory analysis, and supply chain insights from the OreTrade team. Updated as markets move.</p>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Latest Analysis</h2>
          <div className="features-grid" style={{ marginTop: '32px' }}>
            {POSTS.map(p => (
              <Link key={p.href} href={p.href} style={{ textDecoration: 'none' }}>
                <div className="feature-card" style={{ cursor: 'pointer', height: '100%' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--amber)', fontFamily: 'Arial, sans-serif' }}>{p.label}</span>
                    {p.urgent && <span style={{ background: '#ef4444', color: 'white', fontSize: '10px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '1px', padding: '2px 8px', borderRadius: '2px' }}>URGENT</span>}
                  </div>
                  <h3>{p.title}</h3>
                  <p style={{ marginTop: '8px' }}>{p.desc}</p>
                  <p style={{ color: 'var(--amber)', fontFamily: 'Arial, sans-serif', fontSize: '13px', marginTop: '16px', margin: '16px 0 0' }}>Read more →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Commodity Guides</h2>
          <div className="features-grid" style={{ marginTop: '32px' }}>
            {GUIDES.map(g => (
              <Link key={g.href} href={g.href} style={{ textDecoration: 'none' }}>
                <div className="feature-card" style={{ cursor: 'pointer', height: '100%' }}>
                  <div className="feature-icon">{g.icon}</div>
                  <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--amber)', fontFamily: 'Arial, sans-serif', marginBottom: '8px' }}>{g.subtitle}</p>
                  <h3>{g.title}</h3>
                  <p style={{ color: 'var(--amber)', fontFamily: 'Arial, sans-serif', fontSize: '13px', marginTop: '16px', margin: '16px 0 0' }}>Read guide →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Get Notified When We Launch</h2>
        <p>Join the OreTrade waitlist and be first to access the platform when we go live in 2026.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
