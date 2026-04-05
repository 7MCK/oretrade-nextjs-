import type { Metadata } from 'next'

import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Gold, Silver and Precious Metals — Trading Platform 2026',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/markets/gold/' },
  about: { '@type': 'Thing', name: 'Gold', sameAs: 'https://en.wikipedia.org/wiki/Gold' },
  keywords: ['gold trading platform','buy gold dore','silver marketplace','platinum supplier','conflict free gold','LBMA gold'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is gold dore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Gold dore is an unrefined alloy of gold and silver produced at mine sites, typically 60 to 90% gold with silver and trace impurities. Dore bars are the primary product form for artisanal and junior gold miners, shipped to refineries for processing into LBMA certified Good Delivery bars at 99.5% minimum purity. OreTrade facilitates B2B dore trading with full provenance documentation.' },
    },
    {
      '@type': 'Question',
      name: 'What is the gold price per troy ounce?',
      acceptedAnswer: { '@type': 'Answer', text: 'Gold traded above $3,000 per troy ounce in early 2026, near historically elevated levels driven by central bank buying, geopolitical uncertainty, and safe haven demand. OreTrade provides reference pricing on its gold market page. Physical gold trades at a premium or discount to spot depending on product form, purity, and delivery location.' },
    },
    {
      '@type': 'Question',
      name: 'What documentation is required to trade gold internationally?',
      acceptedAnswer: { '@type': 'Answer', text: 'International gold trading requires mine of origin certificate, third party assay report, export licence, Kimberley Process certification for artisanal production in conflict affected regions, chain of custody documentation, and LBMA responsible sourcing compliance. OreTrades Digital Product Passport covers all required documentation fields on every transaction.' },
    },
    {
      '@type': 'Question',
      name: 'Who are the major gold producing countries?',
      acceptedAnswer: { '@type': 'Answer', text: 'China is the worlds largest gold producer at approximately 370 tonnes per year, followed by Russia, Australia, Canada, and Ghana. South Africa, once dominant, has declined significantly. The top five producers account for roughly 45% of global mine output. Australia and Canada are the largest LBMA aligned producers outside Asia and Russia.' },
    }
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Precious Metals Marketplace',
  description: 'B2B marketplace for gold dore, silver, platinum and palladium. LBMA aligned sourcing with conflict free certification and full chain of custody on every transaction.',
  provider: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  serviceType: 'B2B Commodity Marketplace',
  areaServed: ['GB', 'EU', 'AU', 'CA', 'ZA', 'US', 'JP', 'KR'],
  url: 'https://www.oretrade.com/markets/gold/',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.oretrade.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'Gold', item: 'https://www.oretrade.com/markets/gold/' }
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/gold/' },
  title: 'Precious Metals Trading Platform | Gold, Silver, Platinum , OreTrade',
  description: 'Trade gold, silver, platinum and palladium on OreTrade. LBMA aligned supply chains, full provenance documentation, and conflict free certification on every transaction.',
}

export default function GoldPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, serviceSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon">Launching 2026</div>
          <p className="section-label">Precious Metals Market</p>
          <h1>Gold, Silver &amp; <span>Precious Metals</span></h1>
          <p>Trade gold, silver, platinum and palladium with verified counterparties. LBMA aligned sourcing, full provenance documentation, conflict free certification.</p>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
        </div>
      </div>

      <section className="content-section cream">
        <div className="content-inner">
          <h2>The Precious Metals Market</h2>
          <p>Gold, silver, platinum, and palladium occupy a unique position in global commodity markets , simultaneously industrial inputs, financial assets, and stores of value. The precious metals complex is worth over $10 trillion in above ground stock (gold alone accounts for roughly $13 trillion), yet the physical supply chain remains opaque, fragmented, and heavily reliant on relationships and trust.</p>
          <p>OreTrade&apos;s precious metals market brings structured, documented trading to physical precious metals at the mine and doré level , connecting verified producers with refiners, traders, and industrial buyers who need documented, conflict free supply.</p>
          <p>Gold is the most traded precious metal by value. The world produces roughly 3,600 tonnes per year, with China, Russia, Australia, Canada, and Ghana as leading producers. The LBMA (London Bullion Market Association) sets the international standard for good delivery bars (minimum 99.5% purity for gold), and the London fix , conducted twice daily , establishes the global benchmark price.</p>

          <h3>Purity and Product Forms</h3>
          <p>Gold trades in multiple forms: doré (unrefined bullion direct from the mine, typically 70 to 90% gold), good delivery bars (400 troy oz, minimum 99.5% fineness), kilobars (32.15 troy oz, 99.9% fineness), and grain/granule form. Silver, platinum, and palladium similarly trade across multiple purities and physical forms. OreTrade lists the full specification on every cargo, verified by accredited assayers.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Precious Metals Specifications</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Metal</th><th>Trading Unit</th><th>Good Delivery Standard</th><th>Key Origins</th></tr>
            </thead>
            <tbody>
              <tr><td>Gold</td><td>Troy ounce (t oz)</td><td>LBMA 99.5% min (400 oz bars)</td><td>China, Russia, Australia, Canada, Ghana</td></tr>
              <tr><td>Silver</td><td>Troy ounce (t oz)</td><td>LBMA 99.9% min (1,000 oz bars)</td><td>Mexico, Peru, China, Russia, Poland</td></tr>
              <tr><td>Platinum</td><td>Troy ounce (t oz)</td><td>LPPM 99.95% min</td><td>South Africa (72%), Russia, Zimbabwe</td></tr>
              <tr><td>Palladium</td><td>Troy ounce (t oz)</td><td>LPPM 99.95% min</td><td>Russia (40%), South Africa, Canada</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Why Trade Precious Metals on OreTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">🕊️</div>
              <h3>Conflict-Free Certified</h3>
              <p>All precious metals listings carry conflict free certification aligned with OECD Due Diligence standards and LBMA&apos;s Responsible Gold Guidance.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🧪</div>
              <h3>Accredited Assay</h3>
              <p>Every cargo is backed by an assay certificate from a LBMA approved assayer , SGS, Intertek, Bureau Veritas, or equivalent.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔐</div>
              <h3>Immutable Provenance</h3>
              <p>Mine of origin documented and verified. Full chain of custody from extraction to refinery to delivery , available on demand.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Trade Precious Metals with Confidence</h2>
        <p>OreTrade launches in 2026. Join the waitlist for early access.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
