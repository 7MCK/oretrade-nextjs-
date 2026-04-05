import type { Metadata } from 'next'

import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nickel Ore and Products — Prices, Suppliers and Trading 2026',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/markets/nickel/' },
  about: { '@type': 'Thing', name: 'Nickel', sameAs: 'https://en.wikipedia.org/wiki/Nickel' },
  keywords: ['nickel price','buy nickel ore','nickel sulphate supplier','battery grade nickel','NPI trading','nickel marketplace'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is nickel used for?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nickel is used primarily in stainless steel production (approximately 70% of demand) and lithium-ion battery manufacturing for electric vehicles (a rapidly growing share projected to reach 30 to 40% by 2030). Indonesia produces over 50% of global nickel supply, primarily as laterite ore processed into Nickel Pig Iron and battery grade nickel sulphate.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Class 1 and Class 2 nickel?',
      acceptedAnswer: { '@type': 'Answer', text: 'Class 1 nickel is refined nickel with minimum 99.8% purity, traded on the LME and used in alloys, plating, and battery cathodes. Class 2 nickel includes NPI, ferronickel and nickel oxide sinter, which trade at discounts to LME and are consumed primarily in stainless steel production. Battery manufacturers require Class 1 or battery grade nickel sulphate.' },
    },
    {
      '@type': 'Question',
      name: 'What is battery grade nickel sulphate?',
      acceptedAnswer: { '@type': 'Answer', text: 'Battery grade nickel sulphate (minimum 22% Ni, low impurities) is the primary nickel feedstock for NMC and NCA lithium-ion battery cathodes used in electric vehicles. It is produced via High Pressure Acid Leach (HPAL) processing of laterite ore, primarily in Indonesia. OreTrade lists battery grade nickel sulphate with full specification documentation.' },
    },
    {
      '@type': 'Question',
      name: 'What is the current nickel price?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nickel (LME Grade A) has traded between $14,000 and $22,000 per metric tonne in recent years, with prices influenced by Indonesian production policy, EV battery demand growth, and stainless steel output from China. Battery grade nickel sulphate trades at a premium to LME nickel, reflecting processing costs and purity requirements.' },
    }
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Nickel Marketplace',
  description: 'B2B marketplace for nickel ore, NPI, ferronickel, and battery grade nickel sulphate. Verified producers from Indonesia, Philippines, Canada and Australia with full traceability.',
  provider: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  serviceType: 'B2B Commodity Marketplace',
  areaServed: ['GB', 'EU', 'AU', 'CA', 'ZA', 'US', 'JP', 'KR'],
  url: 'https://www.oretrade.com/markets/nickel/',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.oretrade.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'Nickel', item: 'https://www.oretrade.com/markets/nickel/' }
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/nickel/' },
  title: 'Nickel Ore Suppliers | Nickel Trading Platform , OreTrade',
  description: 'Source nickel ore and nickel products from verified suppliers on OreTrade. Battery grade and industrial nickel from Indonesia, Philippines and key global origins.',
}

export default function NickelPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, serviceSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon">Launching 2026</div>
          <p className="section-label">Nickel Market</p>
          <h1>Nickel Ore &amp; Products<br /><span>Trading Platform</span></h1>
          <p>Connect with verified nickel suppliers across Indonesia, Philippines and global origins. Battery grade and industrial nickel with full specification documentation and traceability.</p>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
        </div>
      </div>

      <section className="content-section cream">
        <div className="content-inner">
          <h2>The Nickel Market</h2>
          <p>Nickel is at the centre of two major industrial megatrends: stainless steel production (which accounts for roughly 70% of nickel demand) and lithium-ion battery manufacturing for electric vehicles (a rapidly growing share projected to reach 30 to 40% by 2030). This dual demand profile makes nickel one of the most strategically important metals of the energy transition.</p>
          <p>Indonesia has emerged as the dominant force in global nickel supply, accounting for over 50% of world mine production, largely from laterite deposits processed into Nickel Pig Iron (NPI) and increasingly into battery grade nickel sulphate and MHP (Mixed Hydroxide Precipitate). The Philippines is the second-largest supplier of nickel ore, primarily laterite ore shipped to Chinese NPI producers.</p>
          <p>The nickel market is divided into Class 1 and Class 2 products. Class 1 nickel , refined nickel with minimum 99.8% purity , settles on the LME and is used in alloys, plating, and increasingly battery cathodes. Class 2 nickel , NPI, ferronickel, nickel oxide sinter , trades at discounts to LME and is consumed primarily in stainless steel production.</p>

          <h3>Battery-Grade Nickel</h3>
          <p>The rise of NMC (Nickel Manganese Cobalt) and NCA (Nickel Cobalt Aluminium) battery chemistries has created surging demand for battery grade nickel sulphate (minimum 22% Ni, low impurities including cobalt below 100ppm, iron below 5ppm). The processing route from laterite ore to battery grade nickel sulphate , via High Pressure Acid Leach (HPAL) or via NPI-to-matte conversion , is complex, capital intensive, and geographically concentrated in Indonesia and China.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Nickel Specifications at a Glance</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Product</th><th>Ni Content</th><th>Primary Use</th><th>Key Origins</th></tr>
            </thead>
            <tbody>
              <tr><td>Nickel Ore (laterite)</td><td>1.0%  to  2.5% Ni</td><td>NPI / ferronickel feed</td><td>Indonesia, Philippines, New Caledonia</td></tr>
              <tr><td>Nickel Ore (sulphide)</td><td>0.5%  to  3.0% Ni</td><td>Concentrate / refinery feed</td><td>Canada, Russia, Australia</td></tr>
              <tr><td>Nickel Pig Iron (NPI)</td><td>4%  to  15% Ni</td><td>Stainless steel</td><td>Indonesia, China</td></tr>
              <tr><td>Ferronickel</td><td>15%  to  40% Ni</td><td>Stainless steel</td><td>Indonesia, Philippines, New Caledonia</td></tr>
              <tr><td>Class 1 Refined Nickel</td><td>99.8%+ Ni</td><td>Alloys, batteries, plating</td><td>Russia, Canada, Australia, Norway</td></tr>
              <tr><td>Nickel Sulphate</td><td>22%+ Ni</td><td>Battery cathode (NMC/NCA)</td><td>China, Indonesia, Finland</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Why Source Nickel on OreTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">⚡</div>
              <h3>Battery-Grade Sourcing</h3>
              <p>OreTrade lists battery grade nickel sulphate and MHP with full specification sheets , enabling EV battery supply chain procurement with documented provenance.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">✅</div>
              <h3>Verified Suppliers</h3>
              <p>All nickel suppliers complete KYC verification and provide documentation aligned with OECD due diligence requirements before listing.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🌱</div>
              <h3>ESG Ready</h3>
              <p>Full ESG disclosures on every listing , carbon intensity, water usage, community impact. Ready for your sustainability and regulatory reporting.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source Nickel with Confidence</h2>
        <p>OreTrade launches in 2026. Join the waitlist for early access.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
