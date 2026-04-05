import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../../components/SchemaMarkup'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/rare-earths/dysprosium/' },
  title: 'Dysprosium Oxide — Prices, Suppliers and Trading | OreTrade',
  description: 'Buy dysprosium oxide from verified suppliers outside China. Dy prices up 100%+ in 2026 following export controls. Full traceability, conflict free certification, outside China supply.',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dysprosium Oxide — Prices, Suppliers and Trading 2026',
  description: 'Buy dysprosium oxide from verified suppliers outside China. Dy prices up 100%+ in 2026 following export controls. Full traceability and conflict free certification on every cargo.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-04',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/markets/rare-earths/dysprosium/' },
  about: { '@type': 'Thing', name: 'Dysprosium', sameAs: 'https://en.wikipedia.org/wiki/Dysprosium' },
  keywords: ['dysprosium price', 'dysprosium oxide supplier', 'buy dysprosium outside China', 'Dy2O3 price 2026', 'heavy rare earth supplier', 'ex-China dysprosium'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is dysprosium used for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dysprosium is used as an additive in neodymium-iron-boron (NdFeB) permanent magnets, significantly improving thermal stability and resistance to demagnetisation at elevated temperatures. It is essential in electric vehicle drivetrains, wind turbine generators, and defence and aerospace systems. Global EV and wind energy growth has driven demand up sharply, with IEA projecting a 7x increase by 2040.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the current dysprosium oxide price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dysprosium oxide (Dy2O3, 99.5% purity) traded at approximately $189/kg outside China as of April 2026, more than doubling from roughly $90/kg in early 2025. Dysprosium is under China export controls (Announcement 18, April 2025), which have sharply restricted Western supply and driven prices higher. See OreTrade\'s live Dy price data for current reference.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy dysprosium oxide outside China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verified outside China dysprosium suppliers include Lynas Rare Earths (Australia/Malaysia), Arafura Resources (Australia), Vital Metals (Canada), and LKAB (Sweden). OreTrade\'s marketplace connects buyers with these and other verified outside China producers, with every cargo carrying a Digital Product Passport confirming mine of origin, assay certification, and conflict free status.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is dysprosium under export controls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "China issued Announcement 18 in April 2025, placing dysprosium, terbium, samarium and yttrium under export licensing controls. China produces over 90% of global dysprosium supply. The controls reflect China's use of critical mineral supply chains as a geopolitical tool, particularly in response to US and EU trade restrictions on Chinese technology exports.",
      },
    },
    {
      '@type': 'Question',
      name: 'What purity grades of dysprosium oxide are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dysprosium oxide (Dy2O3) is commercially traded in 99.0%, 99.5%, and 99.9% purity grades. Magnet-grade applications typically require 99.5% minimum. Higher purities command a price premium and are used in precision defence and aerospace applications. All OreTrade Dy listings include third party assay certification.',
      },
    },
  ],
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Dysprosium Oxide Spot Price — Reference Data 2026',
  description: 'Reference price data for dysprosium oxide (Dy2O3, min. 99.5% purity) in USD/kg. Ex-China market. Updated monthly by OreTrade from industrial market data.',
  url: 'https://www.oretrade.com/markets/rare-earths/dysprosium/',
  provider: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  variableMeasured: 'USD per kilogram',
  temporalCoverage: '2025/..',
  keywords: ['dysprosium price', 'Dy2O3 price', 'rare earth prices', 'dysprosium oxide cost'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.oretrade.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'Rare Earths', item: 'https://www.oretrade.com/markets/rare-earths/' },
    { '@type': 'ListItem', position: 4, name: 'Dysprosium', item: 'https://www.oretrade.com/markets/rare-earths/dysprosium/' },
  ],
}

export default function DysprosiumPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, datasetSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon" style={{ background: '#ef4444', color: 'white' }}>Export Controlled</div>
          <p className="section-label">Dysprosium Market</p>
          <h1>Dysprosium Oxide<br /><span>Prices, Suppliers and Trading</span></h1>
          <p>Dysprosium is under China export controls since April 2025. Prices have risen over 100% year to date in 2026. OreTrade connects buyers with verified outside China dysprosium suppliers with full traceability documentation.</p>
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
              <tr><td>Current Price (outside China)</td><td style={{ color: '#4ade80' }}>~$189/kg (Dy oxide, 99.5%)</td></tr>
              <tr><td>Year to Date Change</td><td style={{ color: '#4ade80' }}>+100%+</td></tr>
              <tr><td>Export Control Status</td><td style={{ color: '#f87171' }}>Controlled — China Announcement 18 (April 2025)</td></tr>
              <tr><td>Key Applications</td><td>NdFeB magnet heat resistance additive, EV motors, wind turbines, defence</td></tr>
              <tr><td>Major Outside China Sources</td><td>Australia (Lynas, Arafura), Canada (Vital Metals), Sweden (LKAB)</td></tr>
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
          <p>Beyond clean energy, dysprosium is critical for defence applications. NdFeB magnets containing dysprosium are used in guided missile actuators, radar systems, submarine sonar, fighter jet components, and a wide range of precision guided munitions. The US Department of Defense has designated dysprosium a critical material and is actively funding domestic production through investments in MP Materials, Lynas USA, and Energy Fuels.</p>

          <h3>Impact of China Export Controls</h3>
          <p>China&apos;s Announcement 18 (April 2025) placed dysprosium, terbium, samarium and yttrium under export licensing controls — effectively requiring Chinese producers to obtain government approval before exporting these elements. In practice, approvals have been limited, resulting in a sharp reduction in Chinese Dy exports to Western markets and a corresponding price surge. The outside China price for dysprosium oxide has more than doubled since the controls were announced.</p>
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
              <h3>Verified outside China Suppliers</h3>
              <p>All dysprosium suppliers on OreTrade are KYC verified with mine of origin documentation. Source from Australia, Canada, Sweden and other non-Chinese producers with confidence.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>Full Traceability</h3>
              <p>Every Dy cargo carries a Digital Product Passport with assay certification (99.0%, 99.5% or 99.9% Dy oxide), chain of custody, and OECD conflict free verification. EU Battery Regulation compliant.</p>
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

      {/* FAQ SECTION — mirrors FAQPage schema for AI extraction */}
      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Dysprosium — Frequently Asked Questions</h2>

          <h3>What is dysprosium used for?</h3>
          <p>Dysprosium is used as an additive in neodymium-iron-boron (NdFeB) permanent magnets, significantly improving thermal stability and resistance to demagnetisation at elevated temperatures. It is essential in electric vehicle drivetrains, wind turbine generators, and defence and aerospace systems. Global EV and wind energy growth has driven demand up sharply, with the IEA projecting a 7x increase by 2040.</p>

          <h3>What is the current dysprosium oxide price?</h3>
          <p>Dysprosium oxide (Dy2O3, 99.5% purity) traded at approximately $189/kg outside China as of April 2026, more than doubling from roughly $90/kg in early 2025. Dysprosium is under China export controls (Announcement 18, April 2025), which have sharply restricted Western supply and driven prices higher. See OreTrade&apos;s live Dy price data for current reference.</p>

          <h3>Where can I buy dysprosium oxide outside China?</h3>
          <p>Verified outside China dysprosium suppliers include Lynas Rare Earths (Australia/Malaysia), Arafura Resources (Australia), Vital Metals (Canada), and LKAB (Sweden). OreTrade&apos;s marketplace connects buyers with these and other verified outside China producers, with every cargo carrying a Digital Product Passport confirming mine of origin, assay certification, and conflict free status.</p>

          <h3>Why is dysprosium under export controls?</h3>
          <p>China issued Announcement 18 in April 2025, placing dysprosium, terbium, samarium and yttrium under export licensing controls. China produces over 90% of global dysprosium supply. The controls reflect China&apos;s use of critical mineral supply chains as a geopolitical tool, particularly in response to US and EU trade restrictions on Chinese technology exports.</p>

          <h3>What purity grades of dysprosium oxide are available?</h3>
          <p>Dysprosium oxide (Dy2O3) is commercially traded in 99.0%, 99.5%, and 99.9% purity grades. Magnet grade applications typically require 99.5% minimum. Higher purities command a price premium and are used in precision defence and aerospace applications. All OreTrade Dy listings include third party assay certification.</p>
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
        <h2>Find Dysprosium Supply Outside China</h2>
        <p>Join the OreTrade waitlist for early access to verified dysprosium listings.</p>
        <a href="/#contact" className="btn-primary">Request Supply</a>
      </div>
    </>
  )
}
