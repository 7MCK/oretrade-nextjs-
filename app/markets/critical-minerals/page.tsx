import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/critical-minerals/' },
  title: 'Critical Minerals Broker | Lithium, Cobalt, Rare Earths , OreTrade',
  description: 'Source lithium, cobalt, rare earths and graphite from verified suppliers on OreTrade. The critical minerals marketplace for the energy transition.',
}

export default function CriticalMineralsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon">Launching 2026</div>
          <p className="section-label">Critical Minerals Market</p>
          <h1>Lithium, Cobalt &amp;<br /><span>Critical Minerals</span></h1>
          <p>The materials powering the energy transition , sourced from verified producers with full traceability, conflict-free certification, and ESG compliance built in.</p>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
        </div>
      </div>

      <section className="content-section cream">
        <div className="content-inner">
          <h2>What Are Critical Minerals?</h2>
          <p>Critical minerals are raw materials that are economically and strategically essential, with supply chains that are geographically concentrated and therefore exposed to disruption risk. They are the building blocks of the clean energy economy , essential for electric vehicle batteries, wind turbines, solar panels, defence systems, and advanced electronics.</p>
          <p>The EU designates 34 critical raw materials, including lithium, cobalt, nickel, manganese, graphite, rare earth elements, platinum group metals, tungsten, and titanium. The US, UK, Canada, and Australia publish similar lists. For companies in battery manufacturing, automotive, aerospace, and clean energy, securing transparent, verified supply of these materials is a strategic imperative , not just a procurement task.</p>

          <h3>Lithium</h3>
          <p>Lithium is the cornerstone of rechargeable battery technology. It is extracted either from brine deposits (concentrated lithium-rich waters in salt flats, primarily in Chile, Argentina, and Bolivia , the &quot;Lithium Triangle&quot;) or from hard-rock spodumene deposits (primarily in Australia, with significant production in China and Portugal). It is processed into lithium carbonate (Li₂CO₃) or lithium hydroxide (LiOH), with battery-grade material requiring minimum 99.5% purity. Demand is projected to grow 5 to 10x by 2030 driven by EV adoption.</p>

          <h3>Cobalt</h3>
          <p>Cobalt is critical for NMC and NCA battery cathode chemistries. Over 70% of the world&apos;s cobalt supply comes from the Democratic Republic of Congo , a concentration that creates significant supply chain risk and drives intense demand for verified, conflict-free sourcing. OreTrade&apos;s OECD-aligned Digital Product Passport is specifically designed for cobalt , providing the chain of custody documentation that EU Battery Regulation and OECD due diligence requirements demand.</p>

          <h3>Rare Earth Elements</h3>
          <p>The rare earth elements (REEs) , a group of 17 metals including neodymium, praseodymium, dysprosium, and terbium , are essential for permanent magnets used in EV motors and wind turbines. China controls over 60% of global rare earth production and over 85% of processing capacity, making supply chain diversification one of the most urgent geopolitical imperatives in the critical minerals space.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Critical Minerals at a Glance</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Mineral</th><th>Key Forms Traded</th><th>Primary Uses</th><th>Top Producers</th></tr>
            </thead>
            <tbody>
              <tr><td>Lithium</td><td>Spodumene, Li₂CO₃, LiOH</td><td>EV batteries, grid storage</td><td>Australia, Chile, China, Argentina</td></tr>
              <tr><td>Cobalt</td><td>Ore, hydroxide, sulphate, refined</td><td>NMC/NCA batteries, superalloys</td><td>DRC (70%+), Australia, Philippines</td></tr>
              <tr><td>Graphite</td><td>Natural flake, spherical, synthetic</td><td>Battery anodes</td><td>China (65%), Mozambique, Madagascar</td></tr>
              <tr><td>Manganese</td><td>Ore, alloy, electrolytic</td><td>Steel, battery cathodes (LMF)</td><td>South Africa, Australia, Gabon</td></tr>
              <tr><td>Rare Earth Elements</td><td>Mixed REE concentrate, separated oxides</td><td>Permanent magnets, electronics</td><td>China, Australia, USA, Myanmar</td></tr>
              <tr><td>Tungsten</td><td>Scheelite, APT, powder</td><td>Tooling, defence, electronics</td><td>China, Russia, Vietnam</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Why Source Critical Minerals on OreTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">🕊️</div>
              <h3>Conflict-Free Verified</h3>
              <p>Cobalt and other high-risk minerals are sourced only from OECD-compliant supply chains. Every cargo carries documented conflict-free certification.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">⚡</div>
              <h3>Battery Regulation Ready</h3>
              <p>OreTrade&apos;s Digital Product Passport is aligned with EU Battery Regulation requirements , providing the supply chain documentation your compliance team needs.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🌍</div>
              <h3>Diversified Origins</h3>
              <p>Access verified suppliers across Australia, Chile, Mozambique, Canada, and beyond , reducing concentration risk and building resilient supply chains.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Secure Your Critical Mineral Supply Chain</h2>
        <p>OreTrade launches in 2026. Join the waitlist for early access to verified, traceable critical mineral supply.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
