import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About OreTrade',
  description: 'OreTrade is the world\'s first traceable ore and metals marketplace, founded in London in 2026. We connect miners, traders and refiners globally with a Digital Product Passport on every cargo.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/about/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.oretrade.com/about/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/about/' },
  title: 'About OreTrade — The World\'s First Traceable Ore Marketplace',
  description: 'OreTrade is a B2B ore and metals marketplace founded in London in 2026. We issue a Digital Product Passport on every cargo, connecting miners, traders and refiners globally with full traceability.',
}

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">About OreTrade</p>
          <h1>The World&apos;s First<br /><span>Traceable Ore Marketplace</span></h1>
          <p>OreTrade connects miners, traders, brokers and refiners across every ore type, base metal, rare earth element and precious commodity. From mine to market, ethically.</p>
          <a href="/#contact" className="btn-primary">Get in Touch</a>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>What OreTrade Does</h2>
          <p>OreTrade is a B2B marketplace for physical commodity trading. We cover iron ore, copper, gold, nickel, lithium, cobalt, rare earth elements, and 40+ other ore types and base metals. Every trade on OreTrade comes with a Digital Product Passport: a verifiable digital record containing mine of origin, third party assay certification, conflict free status, full chain of custody, and ESG disclosures.</p>
          <p>This is not a financial exchange. OreTrade facilitates physical B2B commodity trading between industrial counterparties: mining companies, trading houses, brokers, refiners, and industrial buyers. All counterparties are KYC and KYB verified before their first trade. Settlement is escrow backed with full audit trail on every transaction.</p>

          <div className="info-grid" style={{ marginTop: '40px' }}>
            <div className="info-card">
              <div className="card-icon">🌍</div>
              <h3>40+ Commodity Types</h3>
              <p>Iron ore, copper, gold, nickel, lithium, cobalt, rare earths and more. One platform for the full mining supply chain.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>Digital Product Passport</h3>
              <p>Mine of origin. Assay certification. Conflict free status. Chain of custody. ESG disclosures. On every cargo, every time.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">✅</div>
              <h3>Verified Counterparties</h3>
              <p>Every buyer and seller on OreTrade is KYC and KYB verified. Trust scores, trade history, OECD due diligence compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>The Problem We Solve</h2>
          <p>The global mining and metals market is worth over $8 trillion annually. Most of it still trades offline, through relationships, phone calls, and PDFs. Provenance documentation is inconsistent, counterparty verification is manual and slow, and supply chain transparency is almost entirely absent.</p>
          <p>At the same time, the regulatory environment is changing fast. The EU Battery Regulation requires documented due diligence on critical mineral supply chains. The OECD Due Diligence Guidelines mandate responsible sourcing from conflict affected regions. The US Inflation Reduction Act ties EV tax credits to documented supply chain origins. Companies that cannot prove where their minerals come from will face regulatory, commercial, and reputational consequences.</p>
          <p>OreTrade solves this by building the documentation infrastructure and trading platform that the next decade of commodity trade requires. Our Digital Product Passport travels with every cargo, giving buyers instant, verifiable proof of ethical sourcing at the point of trade.</p>

          <h2 style={{ marginTop: '48px' }}>The Rare Earth Crisis</h2>
          <p>OreTrade launched in 2026 against the backdrop of the most significant rare earth supply disruption in decades. China&apos;s Announcement 18 (April 2025) placed dysprosium, terbium, samarium and yttrium under export licensing controls, restricting supply to Western manufacturers and causing prices to double in under twelve months.</p>
          <p>These four elements are inside every electric vehicle motor, wind turbine generator, and a range of defence and aerospace systems built outside China. There is no short term substitute. OreTrade&apos;s rare earth marketplace connects buyers with verified producers in Australia, Canada, Sweden and the United States, with every cargo carrying a Digital Product Passport confirming mine origin and conflict free status.</p>
          <p>Read our analysis: <Link href="/blog/china-rare-earth-export-controls">China Rare Earth Export Controls 2025 to 2026</Link> and <Link href="/blog/rare-earth-shortage-2026">Rare Earth Shortage 2026</Link>.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>About the Platform</h2>
          <p>OreTrade is a pre-launch marketplace accepting waitlist registrations. The platform is headquartered in London, United Kingdom, and operates globally across 180+ countries. Target markets include the UK, EU, Australia, South Africa, Canada, USA, Japan, and South Korea.</p>
          <p>OreTrade is built by the team behind WasteTrade.com, a proven B2B circular economy marketplace connecting waste suppliers, recyclers, and manufacturers. We bring the same approach to the mining and metals supply chain: rigorous counterparty verification, structured documentation, and transparent pricing.</p>

          <h2 style={{ marginTop: '48px' }}>Contact</h2>
          <p>General enquiries: <a href="mailto:hello@oretrade.com">hello@oretrade.com</a></p>
          <p>Investor enquiries: <a href="mailto:investors@oretrade.com">investors@oretrade.com</a></p>
          <p>Supply chain enquiries: <a href="mailto:hello@oretrade.com">hello@oretrade.com</a></p>
          <p>Website: <a href="https://www.oretrade.com">www.oretrade.com</a></p>

          <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/markets/rare-earths" className="btn-primary">Rare Earth Markets</Link>
            <Link href="/traceability" className="btn-secondary">Digital Product Passport</Link>
            <Link href="/guides" className="btn-secondary">Commodity Guides</Link>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Join the OreTrade Waitlist</h2>
        <p>Be among the first to access the world&apos;s first traceable ore and metals marketplace.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
