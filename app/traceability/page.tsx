import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Product Passport for Minerals & Metals | OreTrade Traceability',
  description: "OreTrade's Digital Product Passport gives every tonne of ore a permanent, auditable record from mine to market. OECD compliant. Conflict-free verified. ESG disclosed.",
}

export default function TraceabilityPage() {
  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon">Digital Product Passport</div>
          <h1>Every Tonne Has a Story.<br /><span>OreTrade Tells It.</span></h1>
          <p>As supply chain due diligence becomes mandatory worldwide, OreTrade&apos;s Digital Product Passport gives buyers instant, verifiable proof of ethical sourcing at the point of trade.</p>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
        </div>
      </div>

      {/* WHAT IS A DPP */}
      <section className="content-section cream">
        <div className="content-inner">
          <h2 id="what-is-dpp">What is a Digital Product Passport?</h2>
          <p>A Digital Product Passport (DPP) is a permanent digital record attached to a physical commodity that contains verified, structured information about its origin, composition, ownership history, and regulatory compliance status. Think of it as a commodity&apos;s birth certificate, health record, and chain of custody log , all in one tamper-proof document.</p>
          <p>In the traditional minerals and metals trade, due diligence is a paper-intensive, slow and often unreliable process. Buyers receive stacks of certificates , assay reports, certificates of origin, bills of lading , that may have been forged, outdated, or incomplete. Verifying a cargo&apos;s provenance could take weeks and still leave buyers exposed to compliance risk.</p>
          <p>The OreTrade Digital Product Passport solves this by creating a structured, verified digital record at the point of production and updating it at each transfer of custody. By the time a cargo reaches the buyer, the full history is already verified, auditable, and accessible in seconds.</p>
          <p>For minerals and metals specifically, this matters for several critical reasons. Conflict minerals , those sourced from mines financing armed conflict , remain a persistent problem in regions like the DRC, CAR, and parts of West Africa. ESG reporting requirements now demand that companies disclose their supply chain emissions, water usage, and social impacts down to the extraction level. Regulatory frameworks including the EU Battery Regulation, the EU Critical Raw Materials Act, and the US Dodd-Frank Act are progressively mandating documented proof of ethical sourcing. A Digital Product Passport transforms compliance from a documentation burden into a competitive advantage , and OreTrade&apos;s platform makes it available at the point of trade.</p>
        </div>
      </section>

      {/* WHAT IT CONTAINS */}
      <section className="content-section dark">
        <div className="content-inner">
          <h2 id="what-it-contains">What the OreTrade Product Passport Contains</h2>
          <p style={{ color: '#a89080', fontFamily: 'Arial, sans-serif', fontSize: '16px', lineHeight: 1.7 }}>Every OreTrade Passport carries six verified data categories, each confirmed against source documentation before the record is issued.</p>
          <div className="info-grid">
            {[
              { icon: '📍', title: 'Mine of Origin', desc: 'GPS coordinates of the extraction site, mining licence number, country of origin, region, and operator details. Verified against government licensing registries.' },
              { icon: '🧪', title: 'Assay Certification', desc: 'Full chemical composition including grade, moisture content, deleterious elements, and physical characteristics. Certified by SGS, Intertek, Bureau Veritas, or equivalent accredited laboratory.' },
              { icon: '🕊️', title: 'Conflict-Free Status', desc: 'Compliance with the OECD Due Diligence Guidance for Responsible Mineral Supply Chains. Cross-referenced against LBMA, RMI, and iTSCi databases where applicable.' },
              { icon: '🔗', title: 'Chain of Custody ID', desc: 'A unique OreTrade Trade ID that logs every custody transfer , from mine to processor to trader to shipper to buyer. Every handover is timestamped and signed.' },
              { icon: '🌱', title: 'ESG Disclosures', desc: 'GRI 303 (water), GRI 305 (emissions), and GRI 306 (waste) compliant disclosures. Includes carbon intensity per tonne, water usage per tonne, and community impact statements where available.' },
              { icon: '🔐', title: 'Immutable Record', desc: 'The completed Passport is cryptographically signed and stored as a tamper-proof audit trail. Available on demand to buyers, regulators, auditors, and ESG reporting teams.' },
            ].map(c => (
              <div key={c.title} className="info-card">
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGULATORY */}
      <section className="content-section" style={{ background: 'var(--brown)', padding: '60px 40px' }}>
        <div className="content-inner">
          <h2 id="regulatory" style={{ color: 'var(--cream)' }}>The Regulatory Case for Traceability</h2>
          <p style={{ color: '#e8c898' }}>Traceability is no longer a voluntary ESG commitment. It is becoming mandatory. Here is the regulatory landscape driving demand for Digital Product Passports in minerals and metals:</p>

          <h3 style={{ color: 'var(--cream)', marginTop: '32px' }}>EU Battery Regulation (2023)</h3>
          <p style={{ color: '#e8c898' }}>Effective from 2024 with phased requirements through 2027, the EU Battery Regulation mandates that batteries placed on the EU market must carry a Digital Battery Passport. This passport must document the carbon footprint, recycled content, and supply chain due diligence for lithium, cobalt, nickel, and natural graphite , all the way to the mine of origin. For anyone supplying these materials into EU battery supply chains, traceability is now a market access requirement, not an option.</p>

          <h3 style={{ color: 'var(--cream)', marginTop: '32px' }}>EU Critical Raw Materials Act</h3>
          <p style={{ color: '#e8c898' }}>The EU&apos;s Critical Raw Materials Act (2024) designates 34 strategic and critical raw materials , including lithium, cobalt, rare earths, manganese, and tungsten , and sets binding targets for domestic processing and supply chain diversification. It also introduces supply chain risk assessments and transparency requirements for companies that depend on these materials.</p>

          <h3 style={{ color: 'var(--cream)', marginTop: '32px' }}>OECD Due Diligence Guidance</h3>
          <p style={{ color: '#e8c898' }}>The OECD Due Diligence Guidance for Responsible Mineral Supply Chains is the global framework for conflict minerals compliance. It applies to tin, tantalum, tungsten, and gold (3TG) and is increasingly adopted for cobalt and other high-risk minerals. Compliance requires documented supply chain mapping, risk assessment, and third-party audits , exactly what OreTrade&apos;s Passport provides by default.</p>

          <h3 style={{ color: 'var(--cream)', marginTop: '32px' }}>US Dodd-Frank Act, Section 1502</h3>
          <p style={{ color: '#e8c898' }}>Section 1502 requires SEC-reporting companies to disclose whether their products contain conflict minerals from the DRC or adjoining countries, and to conduct supply chain due diligence if they do. This has driven demand for documented, auditable sourcing records across global supply chains , and that demand flows directly to mineral producers and traders.</p>

          <h3 style={{ color: 'var(--cream)', marginTop: '32px' }}>Corporate ESG Reporting</h3>
          <p style={{ color: '#e8c898' }}>The EU&apos;s Corporate Sustainability Reporting Directive (CSRD) and the forthcoming global ISSB standards are making supply chain emissions and due diligence disclosures mandatory for large companies across Europe and beyond. Industrial buyers sourcing minerals and metals now need supplier-level ESG data to complete their own reporting , making OreTrade&apos;s built-in disclosures a direct commercial advantage for verified sellers.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="content-section dark2">
        <div className="content-inner">
          <h2 id="how-it-works">How the OreTrade Product Passport Works</h2>
          <div className="steps-3">
            <div className="step-3">
              <div className="step-num">1</div>
              <h3>Producer Registration</h3>
              <p>The mining operator registers on OreTrade and uploads their documentation: mining licence, assay certificate from an accredited laboratory, ESG disclosures, and conflict-free certification. Our compliance team verifies each document against source data before the Passport is issued.</p>
            </div>
            <div className="step-3">
              <div className="step-num">2</div>
              <h3>Passport Issuance</h3>
              <p>Once verified, OreTrade issues a unique Passport ID and creates the digital record. The Passport is cryptographically signed and linked to the cargo. It is visible to the buyer at the point of trade , before any commercial commitment is made.</p>
            </div>
            <div className="step-3">
              <div className="step-num">3</div>
              <h3>Custody Tracking</h3>
              <p>The Passport travels with the cargo. At each transfer of custody , processor, logistics provider, trader, terminal , the transfer is logged with a timestamp and digital signature. The buyer receives a complete, unbroken custody record at point of delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE PASSPORT */}
      <section className="content-section dark">
        <div className="content-inner">
          <h2>Sample Product Passport</h2>
          <div style={{ maxWidth: '560px' }}>
            <div className="passport-card">
              <h4>Digital Product Passport , Sample Record</h4>
              <div className="passport-field">
                <span className="field-label">Mine of Origin</span>
                <span className="field-value">Katanga Province, DRC <span className="field-verified">✓ Verified</span></span>
              </div>
              <div className="passport-field">
                <span className="field-label">Assay Certification</span>
                <span className="field-value">63.4% Fe SGS Certificate <span className="field-verified">✓ Verified</span></span>
              </div>
              <div className="passport-field">
                <span className="field-label">Conflict Free Status</span>
                <span className="field-value">OECD Due Diligence Compliant <span className="field-verified">✓ Verified</span></span>
              </div>
              <div className="passport-field">
                <span className="field-label">Chain of Custody ID</span>
                <span className="field-value">OT-2026-04811-KAT</span>
              </div>
              <div className="passport-field">
                <span className="field-label">ESG Disclosure</span>
                <span className="field-value">GRI 303, 305, 306 Compliant <span className="field-verified">✓ Filed</span></span>
              </div>
              <div className="passport-field">
                <span className="field-label">Immutable Record</span>
                <span className="field-value">Blockchain Hash: 0x4f8a...c21d</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="content-section dark2">
        <div className="content-inner">
          <h2 id="who-benefits">Who Benefits</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">🏭</div>
              <h3>Buyers</h3>
              <p>Instant due diligence at the point of trade. No more chasing documents across time zones. Full ESG compliance data ready for your own reporting. Reduce regulatory risk and procurement overhead in a single step.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">⛏️</div>
              <h3>Producers</h3>
              <p>Command a premium for verified, ethical supply. Access a growing pool of ESG-conscious buyers who actively require documented provenance. Differentiate your operation in a commodity market where trust is the scarcest resource.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">⚖️</div>
              <h3>Regulators & Auditors</h3>
              <p>Instant access to a complete, tamper-proof audit trail. No document requests, no delays, no paper chasing. OreTrade Passports are designed to meet the evidentiary standards required by OECD, EU, and SEC compliance frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <h2>Be First to Trade with Full Traceability</h2>
        <p>OreTrade is launching in 2026. Join the waitlist to get early access.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
