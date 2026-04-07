import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/blog/' },
  title: 'OreTrade Insights | Mining, Metals and Rare Earth Market Analysis',
  description: 'Market analysis, regulatory updates and industry intelligence from OreTrade. China rare earth export controls, shortage analysis, and supply chain insights.',
}

const POSTS = [
  {
    href: '/blog/iron-ore-price-2026',
    label: 'Market Analysis',
    title: 'Iron Ore Price 2026 — Analysis, Outlook and Key Drivers',
    desc: 'Iron ore has traded between $90 and $120 per tonne this year. What is driving the range, what the China steel picture looks like, and where the price goes from here.',
    urgent: false,
  },
  {
    href: '/blog/eu-critical-raw-materials-act',
    label: 'Regulation',
    title: 'EU Critical Raw Materials Act — What It Means for Miners, Buyers and Supply Chains',
    desc: 'The CRMA sets binding 2030 targets for domestic extraction, processing and supply chain diversification. Most European industry is not currently close to meeting them. Here is what the law actually requires.',
    urgent: false,
  },
  {
    href: '/blog/us-tariffs-metals-2025',
    label: 'Market Analysis',
    title: 'US Tariffs and the Metals Market — What Happened and What Comes Next',
    desc: 'How US tariff policy in 2025 reshaped global metals trade flows, drove copper premiums to historic highs, and accelerated the push for supply chain independence. What buyers need to understand.',
    urgent: false,
  },
  {
    href: '/blog/critical-minerals-race',
    label: 'Market Analysis',
    title: 'The Critical Minerals Race — Why Every Major Economy Is Scrambling for the Same Materials',
    desc: 'Lithium, cobalt, nickel, rare earths, graphite. The energy transition runs on a specific set of materials, and competition for them is intensifying. Where the race stands in 2026.',
    urgent: false,
  },
  {
    href: '/blog/china-rare-earth-export-controls',
    label: 'Market Analysis',
    title: 'China Rare Earth Export Controls 2025 to 2026 — What Buyers Need to Know',
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
