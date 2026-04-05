import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Terbium Oxide — Prices, Suppliers and Trading 2026',
  description: 'Source terbium oxide from verified suppliers outside China. Terbium at approximately $840/kg under China export controls since April 2025. Full traceability on OreTrade.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-04',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/markets/rare-earths/terbium/' },
  about: { '@type': 'Thing', name: 'Terbium', sameAs: 'https://en.wikipedia.org/wiki/Terbium' },
  keywords: ['terbium price', 'terbium oxide supplier', 'buy terbium outside China', 'Tb4O7 price 2026', 'heavy rare earth supplier', 'ex-China terbium'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is terbium used for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Terbium is used in high-performance neodymium-iron-boron (NdFeB) permanent magnets, where it improves thermal stability beyond what dysprosium alone can achieve. Key applications include premium EV motors, offshore wind turbines, military-grade permanent magnet systems, and green phosphors in LED lighting and displays. Terbium enables NdFeB magnets to operate reliably above 150°C.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the current terbium oxide price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Terbium oxide (Tb4O7, 99.5% purity) traded at approximately $840/kg outside China as of April 2026, rising from around $600/kg before China\'s export controls were introduced in April 2025. Terbium is one of the rarest and most expensive commercially traded rare earth elements, with China holding over 90% of global production.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I source terbium oxide outside China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outside China terbium sources include Lynas Rare Earths (Australia/Malaysia, which separates and processes HREE concentrate from Mount Weld), and early-stage projects from Arafura Resources (Australia) and Mkango Resources (Malawi). OreTrade connects buyers with verified outside China suppliers with full product documentation and conflict free certification.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between terbium and dysprosium in magnets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both terbium and dysprosium are added to NdFeB magnets to improve coercivity (resistance to demagnetisation at high temperatures). Terbium is roughly twice as effective per kilogram as dysprosium but costs approximately four times more. Manufacturers typically use a combination of both, or substitute between them based on relative pricing and availability.',
      },
    },
  ],
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Terbium Oxide Spot Price — Reference Data 2026',
  description: 'Reference price data for terbium oxide (Tb4O7, min. 99.5% purity) in USD/kg. Ex-China market. Updated monthly by OreTrade from industrial market data.',
  url: 'https://www.oretrade.com/markets/rare-earths/terbium/',
  provider: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  variableMeasured: 'USD per kilogram',
  keywords: ['terbium price', 'Tb4O7 price', 'rare earth prices', 'terbium oxide cost'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.oretrade.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'Rare Earths', item: 'https://www.oretrade.com/markets/rare-earths/' },
    { '@type': 'ListItem', position: 4, name: 'Terbium', item: 'https://www.oretrade.com/markets/rare-earths/terbium/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/rare-earths/terbium/' },
  title: 'Terbium Oxide — Prices, Suppliers and Trading | OreTrade',
  description: 'Source terbium oxide from verified suppliers. Terbium at ~$840/kg, under China export controls since April 2025. Verified outside China supply with full traceability on OreTrade.',
}

export default function TerbiumPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
      <SchemaMarkup schemas={[articleSchema, faqSchema, datasetSchema, breadcrumbSchema]} />
          <div className="badge-soon" style={{ background: '#ef4444', color: 'white' }}>Export Controlled</div>
          <p className="section-label">Terbium Market</p>
          <h1>Terbium Oxide<br /><span>Prices, Suppliers and Trading</span></h1>
          <p>Terbium is one of the rarest and most valuable rare earth elements, trading at approximately $840 per kilogram. Under China export controls since April 2025, verified outside China supply is critically scarce. OreTrade connects buyers with documented, traceable terbium sources.</p>
          <a href="/#contact" className="btn-primary">Request Supply</a>
        </div>
      </div>

      {/* PRICE PANEL */}
      <section className="content-section dark">
        <div className="content-inner">
          <h2>Terbium Price Overview — 2026</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Indicator</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Current Price</td><td style={{ color: '#f87171' }}>~$840/kg (Tb oxide, 99.9%)</td></tr>
              <tr><td>Price vs NdPr</td><td style={{ color: '#f87171' }}>Approximately 14x the price of NdPr oxide</td></tr>
              <tr><td>Export Control Status</td><td style={{ color: '#f87171' }}>Controlled — China Announcement 18 (April 2025)</td></tr>
              <tr><td>Key Applications</td><td>NdFeB high temperature magnets, green phosphors, LEDs, solid state devices</td></tr>
              <tr><td>Major Outside China Sources</td><td>Australia (Lynas), Canada, Sweden (LKAB), Brazil</td></tr>
              <tr><td>Typical Purity</td><td>99.9% Tb oxide (Tb4O7)</td></tr>
              <tr><td>Annual Global Production</td><td>Approximately 700 to 800 tonnes — the rarest commercially traded REE</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* WHAT IS TERBIUM */}
      <section className="content-section dark2">
        <div className="content-inner">
          <h2>What Is Terbium Used For?</h2>
          <p>Terbium is a heavy rare earth element with atomic number 65. It is produced in tiny quantities relative to other rare earths and commands a price roughly 14 times that of the neodymium-praseodymium (NdPr) basket — making it one of the most valuable rare earth elements traded commercially.</p>
          <p>The primary use of terbium is alongside dysprosium as an additive in NdFeB permanent magnets for applications requiring performance at extreme temperatures. While dysprosium is used in larger proportions, terbium provides superior coercivity improvement per kilogram added, making it the preferred additive in the most demanding high temperature applications — including advanced EV motors, aerospace actuators, and military hardware operating in extreme thermal environments.</p>
          <p>Beyond magnets, terbium is used in green phosphors for LED lighting and flat panel displays (its intense green fluorescence is irreplaceable in tri-phosphor lamps and display backlights), in solid state devices and sensors, and in magneto-optical data storage materials. The compound terbium iron garnet is used in optical isolators for fibre optic communications.</p>

          <h3>Why Terbium Is So Scarce</h3>
          <p>Unlike the more abundant light rare earths such as cerium and lanthanum, terbium is a heavy rare earth element with an extremely low crustal abundance. Global annual production is estimated at just 700 to 800 tonnes per year, almost entirely from China. The combination of very low natural abundance, concentration of production in China, and the addition of export controls in April 2025 has created a severe and sustained supply shortage for buyers outside China.</p>
          <p>The US, EU, Japan and South Korea are all actively investing in rare earth processing capacity to reduce dependence on Chinese terbium supply. The EU Critical Raw Materials Act designates terbium as a strategic material with binding domestic production targets. However, building alternative supply chains for heavy rare earths takes years — meaning the supply crunch will persist well into the 2030s.</p>

          <h3>Terbium Demand Outlook</h3>
          <p>Demand for terbium is projected to grow significantly as EV adoption accelerates globally. Each high performance EV motor requires 0.1 to 0.5 kg of terbium oxide in its magnets. With global EV sales approaching 50 million units per year by 2030, even a conservative estimate points to terbium demand growing 4 to 6 times from current levels by the end of the decade — while supply is constrained by geology, processing capacity, and geopolitical risk.</p>
        </div>
      </section>

      {/* WHY ORETRADE */}
      <section className="content-section dark">
        <div className="content-inner">
          <h2>Source Terbium on OreTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">✅</div>
              <h3>Verified Non-Chinese Sources</h3>
              <p>OreTrade lists terbium from verified producers outside China — Australia, Canada, Sweden and Brazil. Every supplier is KYC verified with mine of origin and processing documentation.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>Full Traceability</h3>
              <p>Every Tb cargo carries an OreTrade Digital Product Passport including assay certification (99.9% Tb4O7), chain of custody, conflict free verification and ESG disclosures.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">📊</div>
              <h3>Price Transparency</h3>
              <p>Terbium pricing is notoriously opaque given the thin market and Chinese supply dominance. OreTrade provides transparent, documented pricing on all listings with no hidden fees or undisclosed deductions.</p>
            </div>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/guides/terbium" className="btn-primary">Terbium Buyer Guide</Link>
            <Link href="/markets/rare-earths" className="btn-secondary">All Rare Earth Markets</Link>
          </div>
        </div>
      </section>


      <section className="content-section dark">
        <div className="content-inner">
          <h2>Further Reading</h2>
          <p>Learn more about the rare earth supply chain and China export controls:</p>
          <ul style={{ marginTop: '16px', lineHeight: '2' }}>
            <li><a href="/blog/china-rare-earth-export-controls">China Rare Earth Export Controls 2025 to 2026 — What Buyers Need to Know</a></li>
            <li><a href="/blog/rare-earth-shortage-2026">Rare Earth Shortage 2026 — Where to Find Supply Outside China</a></li>
            <li><a href="/markets/rare-earths">All Rare Earth Markets on OreTrade</a></li>
            <li><a href="/traceability">How the OreTrade Digital Product Passport Works</a></li>
          </ul>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source Terbium with Confidence</h2>
        <p>Join the OreTrade waitlist for early access to verified terbium oxide listings.</p>
        <a href="/#contact" className="btn-primary">Request Supply</a>
      </div>
    </>
  )
}
