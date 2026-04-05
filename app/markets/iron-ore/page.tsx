import type { Metadata } from 'next'

import SchemaMarkup from '../../../components/SchemaMarkup'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Iron Ore Marketplace',
  description: 'B2B marketplace for iron ore fines, lump and pellets. Verified producers from Australia, Brazil and South Africa. Full traceability and chain of custody on every cargo.',
  provider: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  serviceType: 'B2B Commodity Marketplace',
  areaServed: ['GB', 'EU', 'AU', 'CA', 'ZA', 'US', 'JP', 'KR'],
  url: 'https://www.oretrade.com/markets/iron-ore/',
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/iron-ore/' },
  title: 'Buy Iron Ore Online | Iron Ore Marketplace , OreTrade',
  description: 'Buy and sell iron ore on OreTrade , the verified global iron ore marketplace. Fines, lump and pellets from Australia, Brazil and South Africa. Full traceability.',
}

export default function IronOrePage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon">Launching 2026</div>
          <p className="section-label">Iron Ore Market</p>
          <h1>Buy and Sell <span>Iron Ore</span> on OreTrade</h1>
          <p>Connect with verified iron ore producers and buyers worldwide. Fines, lump and pellets across all grades , with full origin documentation, assay certification and secure settlement.</p>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
        </div>
      </div>

      <section className="content-section cream">
        <div className="content-inner">
          <h2>The Iron Ore Market</h2>
          <p>Iron ore is the primary raw material for global steel production, and steel is the foundation of modern infrastructure , from buildings and bridges to vehicles and machinery. With over 2.5 billion tonnes traded internationally each year, iron ore is one of the highest-volume commodities in the world.</p>
          <p>The vast majority of global iron ore supply comes from three countries: Australia (which accounts for around 53% of global seaborne exports), Brazil (roughly 20%, primarily from Vale&apos;s operations in Minas Gerais and Pará), and South Africa (a growing exporter of both fines and lump). China is by far the world&apos;s largest importer, consuming over 70% of seaborne iron ore to feed its massive steel industry.</p>
          <p>Iron ore is typically traded in three physical forms: fines (particles under 6.3mm, the most common form), lump (coarser material that can be charged directly into a blast furnace), and pellets (processed and balled material used in direct reduction steelmaking). Each has its own price premium or discount relative to the benchmark grade.</p>

          <h3>How Iron Ore is Priced</h3>
          <p>The benchmark for iron ore pricing is the 62% Fe CFR China price, published by Platts (S&amp;P Global) and Fastmarkets MB. Cargoes trade at premiums or discounts to this benchmark based on grade, form, and origin. A high-grade 65% Fe cargo from the Pilbara commands a significant premium over a 57% Fe cargo from a lower-grade deposit. Alumina, silica, phosphorus and moisture content all affect the final realised price.</p>
          <p>Transactions are typically settled on CFR (Cost and Freight) or FOB (Free on Board) basis, with cargo sizes ranging from 50,000 to 200,000 dry metric tonnes (DMT) for Capesize shipments. Pricing periods are commonly based on the monthly average of the relevant index, or agreed quotational periods around bill of lading date.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Iron Ore Specifications at a Glance</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Specification</th><th>Details</th></tr>
            </thead>
            <tbody>
              <tr><td>Standard Grades</td><td>57% Fe, 60% Fe, 62% Fe, 65% Fe (benchmark), 67% Fe</td></tr>
              <tr><td>Product Forms</td><td>Fines, Lump, Pellets, Concentrate, DSO</td></tr>
              <tr><td>Trading Unit</td><td>Dry Metric Tonne (DMT)</td></tr>
              <tr><td>Typical Cargo Size</td><td>50,000  to  200,000 DMT</td></tr>
              <tr><td>Major Origins</td><td>Australia (Pilbara, SA), Brazil (Minas Gerais, Pará), South Africa, India, Ukraine</td></tr>
              <tr><td>Benchmark</td><td>Platts IODEX 62% Fe CFR China</td></tr>
              <tr><td>Settlement</td><td>CFR, FOB, CIF</td></tr>
              <tr><td>Assay Standard</td><td>SGS, Intertek, Bureau Veritas (ISO 9001)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Why Trade Iron Ore on OreTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">✅</div>
              <h3>Verified Listings</h3>
              <p>Every iron ore listing on OreTrade is backed by verified documentation , mining licence, assay certificate, and producer KYC , before it goes live.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>Full Traceability</h3>
              <p>Each cargo carries an OreTrade Digital Product Passport with mine of origin, full assay, conflict-free status and chain of custody ID.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔒</div>
              <h3>Secure Settlement</h3>
              <p>Structured payment terms including letters of credit, escrow and wire transfer , with full digital documentation handled on-platform.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Ready to Trade Iron Ore?</h2>
        <p>OreTrade launches in 2026. Join the waitlist for early access.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
