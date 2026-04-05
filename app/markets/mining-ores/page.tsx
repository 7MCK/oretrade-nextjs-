import type { Metadata } from 'next'

import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bulk Mining Ores Marketplace — Iron Ore, Bauxite, Chromite 2026',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/markets/mining-ores/' },
  about: { '@type': 'Thing', name: 'Mining', sameAs: 'https://en.wikipedia.org/wiki/Mining' },
  keywords: ['bulk ore marketplace','buy iron ore','bauxite supplier','chromite trading','manganese ore marketplace','bulk ore trading platform'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is bulk ore trading?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bulk ore trading involves the buying and selling of raw or lightly processed mining materials in large volumes, typically 50,000 to 250,000 metric tonnes per cargo on Capesize or Panamax vessels. Iron ore, bauxite, chromite, and manganese are the primary bulk ores traded globally. Grade verification via independent assay, moisture management, and vessel chartering are key elements of every transaction.' },
    },
    {
      '@type': 'Question',
      name: 'What ores does OreTrade cover?',
      acceptedAnswer: { '@type': 'Answer', text: 'OreTrade covers iron ore (fines, lump, pellets), bauxite (for alumina and aluminium production), chromite (for ferrochrome and stainless steel), manganese ore (for steel alloys and batteries), phosphate rock, and titanium minerals. Each listing includes full grade specification, moisture content, mine of origin, and independent assay documentation.' },
    },
    {
      '@type': 'Question',
      name: 'How is bulk ore quality verified?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bulk ore quality is verified by independent inspection companies at both the loading port and discharge port. Sampling follows internationally recognised standards (ASTM, ISO, CIMPC). Analysis covers iron content (for iron ore), alumina and silica (for bauxite), Cr2O3 (for chromite), and other grade parameters. OreTrade requires third party assay on all listings.' },
    }
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bulk Mining Ores Marketplace',
  description: 'B2B marketplace for bulk mining ores including iron ore, bauxite, chromite and manganese. Large lot transactions with verified producers and full origin documentation.',
  provider: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  serviceType: 'B2B Commodity Marketplace',
  areaServed: ['GB', 'EU', 'AU', 'CA', 'ZA', 'US', 'JP', 'KR'],
  url: 'https://www.oretrade.com/markets/mining-ores/',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.oretrade.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'Mining Ores', item: 'https://www.oretrade.com/markets/mining-ores/' }
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/mining-ores/' },
  title: 'Mining Ore Buyers & Sellers | Bulk Ore Marketplace , OreTrade',
  description: 'Buy and sell bulk mining ores on OreTrade , iron ore, bauxite, chromite, manganese and more. Large-lot transactions with verified producers and full origin documentation.',
}

export default function MiningOresPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, serviceSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon">Launching 2026</div>
          <p className="section-label">Mining Ores Market</p>
          <h1>Bulk Mining Ores<br /><span>Marketplace</span></h1>
          <p>Iron ore, bauxite, chromite, manganese and more , traded at scale with verified producers, full grading documentation, and secure settlement for large-lot transactions.</p>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
        </div>
      </div>

      <section className="content-section cream">
        <div className="content-inner">
          <h2>Bulk Ore Trading</h2>
          <p>Mining ores are the raw, unprocessed or lightly processed materials extracted directly from mining operations and traded in bulk , typically in cargoes of 50,000 to 250,000 metric tonnes on Capesize or Panamax vessels. This is the foundation of the global metals supply chain: the point at which raw earth becomes tradeable commodity.</p>
          <p>Bulk ore trading is characterised by large transaction sizes, significant logistics complexity, and high documentation requirements. Grade verification (via independent assay at loading and discharge ports), moisture content management, and vessel chartering all need to be coordinated for every transaction. OreTrade brings the counterparty verification, documentation infrastructure, and settlement tools needed to make these transactions efficient and safe.</p>

          <h3>Iron Ore</h3>
          <p>The largest bulk ore market by volume. Over 2.5 billion tonnes traded annually, primarily from Australia and Brazil to China. Traded in fines, lump, and pellet form across grades from 57% to 67% Fe. See our dedicated iron ore market page for full details.</p>

          <h3>Bauxite</h3>
          <p>The primary aluminium ore, traded primarily from Guinea (which holds 25% of world reserves), Australia, Jamaica, and Indonesia. Typically contains 40 to 60% Al₂O₃. Major buyers are alumina refineries in China, which processes over 70% of global seaborne bauxite supply.</p>

          <h3>Chromite</h3>
          <p>The only commercially viable ore of chromium, essential for stainless steel and superalloys. South Africa holds 75% of world chromite reserves. Chromite ore typically contains 42 to 48% Cr₂O₃ and is traded in bulk to ferrochrome producers globally.</p>

          <h3>Manganese Ore</h3>
          <p>Essential for steel production (used as a deoxidiser and in manganese steel alloys) and increasingly as a battery cathode material (LMF chemistry). Major producers include South Africa, Australia, Gabon, and Ghana. Typically traded in 38 to 48% Mn grade ranges.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Bulk Ore Specifications</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Ore</th><th>Typical Grade</th><th>Cargo Size</th><th>Key Origins</th></tr>
            </thead>
            <tbody>
              <tr><td>Iron Ore (Fines)</td><td>57%  to  67% Fe</td><td>50,000  to  200,000 DMT</td><td>Australia, Brazil, South Africa</td></tr>
              <tr><td>Bauxite</td><td>40%  to  60% Al₂O₃</td><td>30,000  to  100,000 DMT</td><td>Guinea, Australia, Jamaica</td></tr>
              <tr><td>Chromite</td><td>42%  to  48% Cr₂O₃</td><td>20,000  to  60,000 DMT</td><td>South Africa, Kazakhstan, India</td></tr>
              <tr><td>Manganese Ore</td><td>38%  to  48% Mn</td><td>30,000  to  80,000 DMT</td><td>South Africa, Australia, Gabon</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Why Trade Bulk Ores on OreTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">🏭</div>
              <h3>Large-Lot Capable</h3>
              <p>OreTrade is built for Capesize and Panamax-scale transactions , with the documentation infrastructure and settlement tools to match.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🧪</div>
              <h3>Independent Assay</h3>
              <p>Every listing is backed by an assay certificate from an accredited independent laboratory , with grade, moisture, and deleterious element disclosure.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">📍</div>
              <h3>Origin Verified</h3>
              <p>Mining licence, GPS coordinates, and operator details verified before any listing goes live. Know exactly where your ore comes from.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Trade Bulk Ores on OreTrade</h2>
        <p>OreTrade launches in 2026. Join the waitlist for early access.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
