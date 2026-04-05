import type { Metadata } from 'next'

import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Base Metals Trading Platform — Copper, Aluminium, Zinc 2026',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/markets/base-metals/' },
  about: { '@type': 'Thing', name: 'Base metal', sameAs: 'https://en.wikipedia.org/wiki/Base_metal' },
  keywords: ['base metals trading platform','buy copper concentrate','aluminium ingot supplier','zinc concentrate marketplace','LME metals trading'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are base metals?',
      acceptedAnswer: { '@type': 'Answer', text: 'Base metals are industrial metals traded on the London Metal Exchange: copper, aluminium, zinc, lead, nickel, and tin. They are distinct from precious metals in that they are used primarily as industrial inputs rather than stores of value. Base metals underpin construction, transportation, packaging, electronics, and energy infrastructure globally.' },
    },
    {
      '@type': 'Question',
      name: 'How are base metals priced?',
      acceptedAnswer: { '@type': 'Answer', text: 'Base metals are priced in US dollars per metric tonne on the London Metal Exchange (LME), which provides a global benchmark and physical delivery mechanism. Both cash (spot) and three month forward contracts are actively traded. Physical premiums or discounts apply depending on product form, delivery location, and regional supply and demand conditions.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between concentrate and refined metal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Metal concentrate is the product of crushing and flotation processing of ore, containing 20 to 40% of the target metal along with impurities. Refined metal (cathode, ingot, billet) is produced after smelting and electrolytic refining and is 99.9%+ pure. Concentrate is traded between miners and smelters; refined metal is traded between smelters and industrial end users.' },
    }
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Base Metals Marketplace',
  description: 'B2B marketplace for copper, aluminium, zinc, lead, nickel and tin. LME referenced pricing, verified counterparties, full traceability on every transaction.',
  provider: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  serviceType: 'B2B Commodity Marketplace',
  areaServed: ['GB', 'EU', 'AU', 'CA', 'ZA', 'US', 'JP', 'KR'],
  url: 'https://www.oretrade.com/markets/base-metals/',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.oretrade.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'Base Metals', item: 'https://www.oretrade.com/markets/base-metals/' }
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/base-metals/' },
  title: 'Base Metals Trading Platform | Copper, Aluminium, Zinc , OreTrade',
  description: 'Trade base metals on OreTrade , copper, aluminium, zinc, lead, nickel and tin. LME referenced pricing, verified counterparties, full traceability.',
}

export default function BaseMetalsPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, serviceSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon">Launching 2026</div>
          <p className="section-label">Base Metals Market</p>
          <h1>Base Metals<br /><span>Trading Platform</span></h1>
          <p>Copper, aluminium, zinc, lead, nickel and tin , traded with verified counterparties, LME referenced pricing, and full chain of custody documentation on every transaction.</p>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
        </div>
      </div>

      <section className="content-section cream">
        <div className="content-inner">
          <h2>The Base Metals Market</h2>
          <p>Base metals are the industrial workhorses of the global economy. Copper, aluminium, zinc, lead, nickel, and tin underpin construction, transportation, packaging, electronics, and the entire energy infrastructure. Collectively, they represent hundreds of millions of tonnes of annual production and trillions of dollars in annual trade.</p>
          <p>Unlike precious metals or bulk commodities, base metals are primarily traded through the London Metal Exchange (LME), which provides a global price benchmark and physical delivery mechanism for all six primary base metals. Prices are quoted in US dollars per metric tonne, with both cash (spot) and three-month forward contracts actively traded.</p>
          <p>OreTrade&apos;s base metals market focuses on the physical supply chain , connecting producers of concentrates, refined metals, and alloys with industrial buyers who need verified supply with full documentation. Whether you&apos;re sourcing copper cathode, aluminium ingot, or zinc concentrate, OreTrade provides the transparency and structure that modern procurement demands.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Base Metals Overview</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Metal</th><th>LME Contract</th><th>Key Uses</th><th>Top Producers</th></tr>
            </thead>
            <tbody>
              <tr><td>Copper</td><td>Grade A Cathode ($/t)</td><td>Electrical, construction, EV</td><td>Chile, DRC, Peru, China</td></tr>
              <tr><td>Aluminium</td><td>Primary Aluminium ($/t)</td><td>Packaging, transport, construction</td><td>China, India, Russia, Canada</td></tr>
              <tr><td>Zinc</td><td>SHG Zinc ($/t)</td><td>Galvanising, brass, batteries</td><td>China, Australia, Peru, India</td></tr>
              <tr><td>Lead</td><td>99.97% Lead ($/t)</td><td>Batteries, radiation shielding</td><td>China, Australia, USA, Peru</td></tr>
              <tr><td>Nickel</td><td>Primary Nickel ($/t)</td><td>Stainless steel, batteries</td><td>Indonesia, Philippines, Russia</td></tr>
              <tr><td>Tin</td><td>99.85% Tin ($/t)</td><td>Solder, tinplate, chemicals</td><td>China, Indonesia, Myanmar</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Why Trade Base Metals on OreTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">📊</div>
              <h3>LME-Referenced Pricing</h3>
              <p>All base metal listings are priced with reference to LME benchmarks , with clear premium or discount disclosure and transparent quotational periods.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">✅</div>
              <h3>Verified Counterparties</h3>
              <p>Full KYC on buyers and sellers before any transaction. Trade with confidence, not blind trust.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>Full Traceability</h3>
              <p>Digital Product Passports on every cargo , mine of origin, assay, chain of custody, and ESG disclosures , available at the point of trade.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Trade Base Metals on OreTrade</h2>
        <p>OreTrade launches in 2026. Join the waitlist for early access.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
