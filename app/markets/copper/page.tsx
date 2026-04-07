import type { Metadata } from 'next'

import SchemaMarkup from '../../../components/SchemaMarkup'
import PriceWidget from '../../../components/PriceWidget'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Copper Concentrate Marketplace',
  description: 'B2B marketplace for copper concentrate and cathode. Verified producers from Chile, Peru, DRC and Canada. Full TCRC transparency and chain of custody documentation.',
  provider: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  serviceType: 'B2B Commodity Marketplace',
  areaServed: ['GB', 'EU', 'AU', 'CA', 'ZA', 'US', 'JP', 'KR'],
  url: 'https://www.oretrade.com/markets/copper/',
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/copper/' },
  title: 'Copper Ore Marketplace | Sell Copper Concentrate , OreTrade',
  description: 'Buy and sell copper concentrate and copper ore on OreTrade. Verified producers from Chile, Peru and DRC. Full assay certification and traceability.',
}

export default function CopperPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon">Launching 2026</div>
          <p className="section-label">Copper Market</p>
          <h1>Copper Ore &amp; Concentrate<br /><span>Marketplace</span></h1>
          <p>Trade copper concentrate and copper ore with verified producers across Chile, Peru and the DRC. Full assay documentation, TCRC transparency, and secure settlement on every transaction.</p>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Live Copper Price</h2>
          <p style={{ marginBottom: '24px' }}>COMEX High Grade Copper futures price (USD per lb), updated every minute.</p>
          <PriceWidget filter={['copper']} compact />
          <p style={{ marginTop: '16px', fontSize: '13px', color: '#5a4030', fontFamily: 'Arial, sans-serif' }}>
            For the full metals dashboard, see our{' '}
            <a href="/markets/prices/" style={{ color: 'var(--amber)' }}>live prices page</a>.
          </p>
        </div>
      </section>

      <section className="content-section cream">
        <div className="content-inner">
          <h2>The Copper Market</h2>
          <p>Copper is the metal of electrification. Its unmatched electrical conductivity makes it indispensable in power grids, electric vehicles, renewable energy infrastructure, electronics, and industrial machinery. As the global economy decarbonises, copper demand is projected to nearly double by 2035 , while supply is increasingly constrained by ore grade decline, permitting delays, and geopolitical risk.</p>
          <p>The global copper supply chain starts with mining. Copper ore is extracted and processed into copper concentrate , a powder containing typically 20 to 40% copper along with gold, silver, and other by-products. This concentrate is then sold to smelters, which process it into blister copper (98 to 99% Cu), which is further refined into cathode copper (99.99% Cu) , the exchange-tradeable form settled on the LME and COMEX.</p>
          <p>Chile is the world&apos;s largest copper producer, accounting for around 27% of global mine output, followed by the Democratic Republic of Congo (11%), Peru (10%), China (8%), and the US (6%). Major mining operations include Escondida (BHP), Collahuasi (Glencore/Anglo American), Kamoa-Kakula (Ivanhoe Mines), and Cerro Verde (Freeport-McMoRan).</p>

          <h3>Treatment and Refining Charges (TCRC)</h3>
          <p>When a miner sells copper concentrate to a smelter, the price is not simply the spot price of copper. The smelter deducts Treatment Charges (TC, expressed in $/dry metric tonne of concentrate) and Refining Charges (RC, expressed in cents/lb of payable copper) to cover processing costs. TCRC levels are negotiated annually in benchmark deals between major miners and smelters. Understanding TCRC is essential for any participant in the copper concentrate market , and OreTrade&apos;s platform provides full TCRC transparency on all concentrate listings.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Copper Specifications at a Glance</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Specification</th><th>Details</th></tr>
            </thead>
            <tbody>
              <tr><td>Product Forms</td><td>Copper Concentrate, Blister Copper, Copper Cathode (Grade A), Copper Ore</td></tr>
              <tr><td>Concentrate Grade Range</td><td>20%  to  40% Cu (typical commercial grade)</td></tr>
              <tr><td>Trading Unit</td><td>Dry Metric Tonne (DMT) for concentrate; Metric Tonne for refined</td></tr>
              <tr><td>Typical Cargo Size</td><td>10,000  to  80,000 DMT (concentrate); 1,000  to  25,000 MT (cathode)</td></tr>
              <tr><td>Major Origins</td><td>Chile, Peru, DRC, Zambia, Australia, Mexico</td></tr>
              <tr><td>Benchmark</td><td>LME Grade A Copper (cash and 3-month)</td></tr>
              <tr><td>Settlement</td><td>CIF, CFR, FOB, CIP</td></tr>
              <tr><td>Pricing Period</td><td>Quotational period around B/L date (typically M+1 or M+2)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Why Trade Copper on OreTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">✅</div>
              <h3>Verified Producers</h3>
              <p>Every copper listing is backed by mining licence verification, accredited assay certification and full counterparty KYC before it appears on the platform.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>TCRC Transparency</h3>
              <p>Full treatment and refining charge disclosure on every concentrate listing , no hidden deductions, no ambiguity.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🌱</div>
              <h3>ESG Compliance</h3>
              <p>Each cargo carries a Digital Product Passport with conflict-free status, chain of custody, and ESG disclosures ready for your sustainability reporting.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Ready to Trade Copper?</h2>
        <p>OreTrade launches in 2026. Join the waitlist for early access.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
