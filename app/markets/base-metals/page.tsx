import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base Metals Trading Platform | Copper, Aluminium, Zinc — OreTrade',
  description: 'Trade base metals on OreTrade — copper, aluminium, zinc, lead, nickel and tin. LME-referenced pricing, verified counterparties, full traceability.',
}

export default function BaseMetalsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon">Launching 2026</div>
          <p className="section-label">Base Metals Market</p>
          <h1>Base Metals<br /><span>Trading Platform</span></h1>
          <p>Copper, aluminium, zinc, lead, nickel and tin — traded with verified counterparties, LME-referenced pricing, and full chain of custody documentation on every transaction.</p>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
        </div>
      </div>

      <section className="content-section cream">
        <div className="content-inner">
          <h2>The Base Metals Market</h2>
          <p>Base metals are the industrial workhorses of the global economy. Copper, aluminium, zinc, lead, nickel, and tin underpin construction, transportation, packaging, electronics, and the entire energy infrastructure. Collectively, they represent hundreds of millions of tonnes of annual production and trillions of dollars in annual trade.</p>
          <p>Unlike precious metals or bulk commodities, base metals are primarily traded through the London Metal Exchange (LME), which provides a global price benchmark and physical delivery mechanism for all six primary base metals. Prices are quoted in US dollars per metric tonne, with both cash (spot) and three-month forward contracts actively traded.</p>
          <p>OreTrade&apos;s base metals market focuses on the physical supply chain — connecting producers of concentrates, refined metals, and alloys with industrial buyers who need verified supply with full documentation. Whether you&apos;re sourcing copper cathode, aluminium ingot, or zinc concentrate, OreTrade provides the transparency and structure that modern procurement demands.</p>
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
              <p>All base metal listings are priced with reference to LME benchmarks — with clear premium or discount disclosure and transparent quotational periods.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">✅</div>
              <h3>Verified Counterparties</h3>
              <p>Full KYC on buyers and sellers before any transaction. Trade with confidence, not blind trust.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>Full Traceability</h3>
              <p>Digital Product Passports on every cargo — mine of origin, assay, chain of custody, and ESG disclosures — available at the point of trade.</p>
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
