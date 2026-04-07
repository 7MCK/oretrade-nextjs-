import type { Metadata } from 'next'
import Link from 'next/link'

import SchemaMarkup from '../../../components/SchemaMarkup'
import ReePriceWidget from '../../../components/ReePriceWidget'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Rare Earth Elements Marketplace',
  description: 'B2B marketplace for rare earth elements including dysprosium, terbium, neodymium, praseodymium, samarium and yttrium. Verified outside China suppliers with Digital Product Passport on every cargo.',
  provider: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  serviceType: 'B2B Commodity Marketplace',
  areaServed: ['GB', 'EU', 'AU', 'CA', 'ZA', 'US', 'JP', 'KR'],
  url: 'https://www.oretrade.com/markets/rare-earths/',
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/rare-earths/' },
  title: 'Rare Earth Marketplace | Buy and Sell Verified REE — OreTrade',
  description: 'Source rare earth elements from verified suppliers on OreTrade. Dysprosium, terbium, neodymium, NdPr, cerium, lanthanum and more. Full traceability, conflict free certified, outside China supply available.',
}

const ELEMENTS = [
  { href: '/markets/rare-earths/prices', symbol: '📈', name: 'REE Prices', price: 'All elements', change: 'stable', note: 'OTC reference price dashboard', hot: false },
  { href: '/markets/rare-earths/dysprosium', symbol: 'Dy', name: 'Dysprosium', price: '~$189/kg', change: 'up', note: 'Export controlled — outside China supply available', hot: true },
  { href: '/markets/rare-earths/terbium', symbol: 'Tb', name: 'Terbium', price: '~$840/kg', change: 'up', note: 'Export controlled — severe shortage', hot: true },
  { href: '/markets/rare-earths/ndpr', symbol: 'NdPr', name: 'Neodymium / Praseodymium', price: '~$97/kg', change: 'stable', note: 'Core magnet input — EV and wind turbine demand', hot: true },
  { href: '/markets/rare-earths/neodymium', symbol: 'Nd', name: 'Neodymium', price: '~$97/kg', change: 'stable', note: 'Highest-demand REE globally', hot: false },
  { href: '/markets/rare-earths/samarium', symbol: 'Sm', name: 'Samarium', price: 'Rising', change: 'up', note: 'Export controlled Apr 2025', hot: true },
  { href: '/markets/rare-earths/yttrium', symbol: 'Y', name: 'Yttrium', price: 'Rising', change: 'up', note: 'Export controlled Apr 2025', hot: true },
]

export default function RareEarthsPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon">Launching 2026</div>
          <p className="section-label">Rare Earths Market</p>
          <h1>Rare Earth Elements<br /><span>Marketplace</span></h1>
          <p>Source verified rare earth elements from producers outside China. Full Digital Product Passport on every cargo. Dysprosium, terbium, neodymium, NdPr, cerium, lanthanum and more — traced from mine to delivery.</p>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
        </div>
      </div>

      {/* PRICE ALERT BANNER */}
      <div style={{ background: '#7B3A10', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '16px', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#e8ddd0', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 'bold', color: 'var(--amber)' }}>Market Alert:</span>
          <span>China export controls on Dy, Tb, Sm and Y (Announcement 18, April 2025) have driven significant price increases. Dysprosium is up over 100% year to date in 2026. OreTrade connects buyers with verified outside China supply.</span>
          <Link href="/blog/china-rare-earth-export-controls" style={{ color: 'var(--amber)', textDecoration: 'none', whiteSpace: 'nowrap' }}>Read the analysis</Link>
        </div>
      </div>

      {/* REE PRICE WIDGET */}
      <section className="content-section dark">
        <div className="content-inner">
          <h2>Rare Earth Reference Prices</h2>
          <p style={{ marginBottom: '24px' }}>OTC indicative prices sourced from Fastmarkets and Metal Pages. Rare earths are not exchange-traded — see our <a href="/markets/rare-earths/prices/" style={{ color: 'var(--amber)' }}>full price guide</a> for methodology.</p>
          <ReePriceWidget noLinks />
        </div>
      </section>

      {/* ELEMENT GRID */}
      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Elements Available on OreTrade</h2>
          <div className="features-grid" style={{ marginTop: '32px' }}>
            {ELEMENTS.map(el => (
              <Link key={el.href} href={el.href} style={{ textDecoration: 'none' }}>
                <div className="feature-card" style={{ cursor: 'pointer', height: '100%', position: 'relative' }}>
                  {el.hot && (
                    <div style={{ position: 'absolute', top: '16px', right: '16px', background: '#C97A22', color: '#0F0C09', fontSize: '10px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '1px', padding: '3px 8px', borderRadius: '2px' }}>HIGH DEMAND</div>
                  )}
                  <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--amber)', fontFamily: 'Arial, sans-serif', marginBottom: '8px' }}>{el.symbol}</div>
                  <h3>{el.name}</h3>
                  <p style={{ color: el.change === 'up' ? '#4ade80' : '#a89080', fontFamily: 'Arial, sans-serif', fontSize: '14px', marginBottom: '8px' }}>
                    {el.price} {el.change === 'up' ? '▲' : ''}
                  </p>
                  <p style={{ fontSize: '13px', color: '#a89080', fontFamily: 'Arial, sans-serif', lineHeight: 1.5, margin: 0 }}>{el.note}</p>
                  <p style={{ color: 'var(--amber)', fontFamily: 'Arial, sans-serif', fontSize: '13px', marginTop: '16px', margin: '16px 0 0' }}>View market →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ORETRADE */}
      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Why Source Rare Earths on OreTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">🌍</div>
              <h3>Verified outside China Supply</h3>
              <p>Access verified rare earth producers in Australia, Canada, the US, Sweden and Africa. Every supplier is KYC verified and documentation checked before listing. Reduce your China exposure with confidence.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>Digital Product Passport</h3>
              <p>Every cargo carries an OreTrade Product Passport with mine of origin, assay certification, conflict free status and chain of custody. OECD due diligence and EU Battery Regulation compliant by design.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">⚡</div>
              <h3>Export Control Ready</h3>
              <p>With China controlling Dy, Tb, Sm and Y exports, verified alternative supply is critical. OreTrade is built specifically to serve the demand for transparent, documented non-Chinese rare earth supply chains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET CONTEXT */}
      <section className="content-section dark">
        <div className="content-inner">
          <h2>The Rare Earth Market in 2026</h2>
          <p>China produces approximately 60% of the world&apos;s rare earth elements and processes over 85% of global supply. In April 2025, China introduced Announcement 18 — export controls on dysprosium, terbium, samarium and yttrium — the four rare earths most critical for defence, EV and clean energy applications.</p>
          <p>The result has been a significant price surge, supply disruption for Western manufacturers, and an urgent search for alternative sources. Dysprosium, used as a heat resistance additive in NdFeB permanent magnets for EV motors and wind turbines, has risen over 100% year to date in 2026. Terbium, trading at approximately $840 per kilogram, is in even shorter supply.</p>
          <p>The US Department of Defense has committed $400 million to MP Materials to accelerate domestic REE production. The EU Critical Raw Materials Act designates rare earths as strategic materials and sets binding targets for European supply chain diversification by 2030. The geopolitical case for supply chain diversification has never been stronger.</p>
          <p>OreTrade connects buyers with verified producers of rare earth elements outside China, with the documentation and traceability infrastructure that modern procurement requires.</p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/blog/china-rare-earth-export-controls" className="btn-primary">China Export Controls Explained</Link>
            <Link href="/blog/rare-earth-shortage-2026" className="btn-secondary">Rare Earth Shortage 2026</Link>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source Rare Earths Outside China</h2>
        <p>Join the OreTrade waitlist for early access to verified, traceable rare earth supply.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
