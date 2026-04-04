import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dysprosium Oxide — Prices, Suppliers and Trading | OreTrade',
  description: 'Buy dysprosium oxide from verified suppliers outside China. Dy prices up 100%+ in 2026 following export controls. Full traceability, conflict-free certification, ex-China supply.',
}

export default function DysprosiumPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon" style={{ background: '#ef4444', color: 'white' }}>Export Controlled</div>
          <p className="section-label">Dysprosium Market</p>
          <h1>Dysprosium Oxide<br /><span>Prices, Suppliers and Trading</span></h1>
          <p>Dysprosium is under China export controls since April 2025. Prices have risen over 100% year to date in 2026. OreTrade connects buyers with verified ex-China dysprosium suppliers with full traceability documentation.</p>
          <a href="/#contact" className="btn-primary">Request Supply</a>
        </div>
      </div>

      {/* PRICE PANEL */}
      <section className="content-section dark">
        <div className="content-inner">
          <h2>Dysprosium Price Overview — 2026</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Indicator</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Current Price (ex-China)</td><td style={{ color: '#4ade80' }}>~$189/kg (Dy oxide, 99.5%)</td></tr>
              <tr><td>Year to Date Change</td><td style={{ color: '#4ade80' }}>+100%+</td></tr>
              <tr><td>Export Control Status</td><td style={{ color: '#f87171' }}>Controlled — China Announcement 18 (April 2025)</td></tr>
              <tr><td>Key Applications</td><td>NdFeB magnet heat resistance additive, EV motors, wind turbines, defence</td></tr>
              <tr><td>Major Non-China Sources</td><td>Australia (Lynas, Arafura), Canada (Vital Metals), Sweden (LKAB)</td></tr>
              <tr><td>Typical Purity</td><td>99.0%, 99.5%, 99.9% Dy oxide</td></tr>
              <tr><td>Units</td><td>Kilograms, metric tonnes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* WHAT IS DYSPROSIUM */}
      <section className="content-section dark2">
        <div className="content-inner">
          <h2>What Is Dysprosium Used For?</h2>
          <p>Dysprosium is a heavy rare earth element (HREE) with atomic number 66. Its primary commercial use is as an additive in neodymium iron boron (NdFeB) permanent magnets — the most powerful type of permanent magnet and the foundational technology behind electric vehicle motors, wind turbine generators, and an increasingly wide range of defence and industrial applications.</p>
          <p>The critical role of dysprosium in NdFeB magnets is not as a primary ingredient but as a performance enhancer. Adding 2 to 4% dysprosium to a NdFeB magnet significantly increases its coercivity — its resistance to demagnetisation at elevated temperatures. Without dysprosium, NdFeB magnets lose their magnetic properties above approximately 80 degrees Celsius, making them unsuitable for EV motors and wind turbines, which regularly operate at higher temperatures under load.</p>
          <p>As the global fleet of electric vehicles grows and offshore wind capacity expands rapidly, demand for dysprosium has surged. The International Energy Agency projects that dysprosium demand for clean energy applications alone could increase 7x by 2040 under a net zero scenario. At the same time, China, which produces over 90% of global dysprosium supply, introduced export controls in April 2025 — creating a severe supply crunch for manufacturers outside China.</p>

          <h3>Dysprosium in Defence</h3>
          <p>Beyond clean energy, dysprosium is critical for defence applications. NdFeB magnets containing dysprosium are used in guided missile actuators, radar systems, submarine sonar, fighter jet components, and a wide range of precision-guided munitions. The US Department of Defense has designated dysprosium a critical material and is actively funding domestic production through investments in MP Materials, Lynas USA, and Energy Fuels.</p>

          <h3>Impact of China Export Controls</h3>
          <p>China&apos;s Announcement 18 (April 2025) placed dysprosium, terbium, samarium and yttrium under export licensing controls — effectively requiring Chinese producers to obtain government approval before exporting these elements. In practice, approvals have been limited, resulting in a sharp reduction in Chinese Dy exports to Western markets and a corresponding price surge. The ex-China price for dysprosium oxide has more than doubled since the controls were announced.</p>
          <p>For manufacturers in the EU, US, Japan and South Korea who depend on dysprosium for magnet production, the controls have accelerated the urgent search for verified, documented supply from alternative sources. OreTrade is built to serve exactly this need.</p>
        </div>
      </section>

      {/* WHY ORETRADE */}
      <section className="content-section dark">
        <div className="content-inner">
          <h2>Source Dysprosium on OreTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">✅</div>
              <h3>Verified Ex-China Suppliers</h3>
              <p>All dysprosium suppliers on OreTrade are KYC verified with mine of origin documentation. Source from Australia, Canada, Sweden and other non-Chinese producers with confidence.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>Full Traceability</h3>
              <p>Every Dy cargo carries a Digital Product Passport with assay certification (99.0%, 99.5% or 99.9% Dy oxide), chain of custody, and OECD conflict-free verification. EU Battery Regulation compliant.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">📋</div>
              <h3>Export Control Documentation</h3>
              <p>OreTrade provides full documentation support for dysprosium procurement, helping buyers satisfy EU, US and Japanese due diligence requirements for controlled rare earth materials.</p>
            </div>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/guides/dysprosium" className="btn-primary">Dysprosium Buyer Guide</Link>
            <Link href="/markets/rare-earths" className="btn-secondary">All Rare Earth Markets</Link>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Find Dysprosium Supply Outside China</h2>
        <p>Join the OreTrade waitlist for early access to verified dysprosium listings.</p>
        <a href="/#contact" className="btn-primary">Request Supply</a>
      </div>
    </>
  )
}
