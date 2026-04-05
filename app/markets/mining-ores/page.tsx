import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/mining-ores/' },
  title: 'Mining Ore Buyers & Sellers | Bulk Ore Marketplace , OreTrade',
  description: 'Buy and sell bulk mining ores on OreTrade , iron ore, bauxite, chromite, manganese and more. Large-lot transactions with verified producers and full origin documentation.',
}

export default function MiningOresPage() {
  return (
    <>
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
