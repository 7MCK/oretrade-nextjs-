import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Yttrium — Prices, Suppliers and Trading 2026',
  description: 'Yttrium supply and price guide. Used in LED phosphors, jet engine thermal barrier coatings and laser materials. Under China export controls since April 2025. Source verified yttrium on OreTrade.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/markets/rare-earths/yttrium/' },
  about: { '@type': 'Thing', name: 'Yttrium', sameAs: 'https://en.wikipedia.org/wiki/Yttrium' },
  keywords: ['yttrium price', 'yttrium oxide supplier', 'Y2O3 price 2026', 'buy yttrium outside China', 'yttrium LED phosphor', 'yttrium thermal coating'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is yttrium used for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yttrium is used in LED and fluorescent lamp phosphors (as yttrium europium oxide for red phosphors), yttria-stabilised zirconia (YSZ) thermal barrier coatings for jet engine turbine blades, yttrium iron garnet (YIG) for radar and microwave devices, and yttrium aluminium garnet (YAG) for industrial and medical lasers. It is also used in superconductors and as an alloy additive.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the current yttrium oxide price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yttrium oxide (Y2O3, 99.9% purity) traded at approximately $3.80/kg as of early 2026 in reference markets. However, outside China premiums are rising following Announcement 18 export controls introduced in April 2025. Yttrium is classified as a critical material by the EU Critical Raw Materials Act and the US government.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is yttrium critical for jet engines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yttria-stabilised zirconia (YSZ) is the industry-standard thermal barrier coating applied to jet engine turbine blades. This ceramic coating insulates the metal blades from combustion temperatures that exceed the melting point of the underlying alloy, enabling higher operating temperatures and greater fuel efficiency. Without yttrium-based coatings, modern high-efficiency jet engines and gas turbines cannot function safely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is yttrium under China export controls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "China's Announcement 18 (April 2025) placed yttrium under export licensing controls alongside dysprosium, terbium and samarium. China accounts for over 80% of global yttrium supply. The export controls restrict availability of yttrium for Western aerospace, electronics and defence manufacturers, who have limited alternative sources at commercial scale.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.oretrade.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'Rare Earths', item: 'https://www.oretrade.com/markets/rare-earths/' },
    { '@type': 'ListItem', position: 4, name: 'Yttrium', item: 'https://www.oretrade.com/markets/rare-earths/yttrium/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/rare-earths/yttrium/' },
  title: 'Yttrium Oxide — Prices, Suppliers and Trading | OreTrade',
  description: 'Yttrium supply and price guide for 2026. Critical for LED phosphors, jet engine thermal coatings and lasers. Under China export controls. Source verified yttrium on OreTrade.',
}

export default function YttriumPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon" style={{ background: '#ef4444', color: 'white' }}>Export Controlled</div>
          <p className="section-label">Yttrium Market</p>
          <h1>Yttrium<br /><span>Prices, Suppliers and Trading</span></h1>
          <p>Yttrium is essential for LED phosphors, jet engine thermal barrier coatings, industrial lasers, and radar systems. China controls over 80% of global supply and placed yttrium under export licensing controls in April 2025.</p>
          <a href="/#contact" className="btn-primary">Request Supply</a>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Yttrium Price Overview — 2026</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Indicator</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Y2O3 Reference Price</td><td style={{ color: '#4ade80' }}>~$3.80/kg (99.9% purity, outside China premium applies)</td></tr>
              <tr><td>Export Control Status</td><td style={{ color: '#f87171' }}>Controlled — China Announcement 18 (April 2025)</td></tr>
              <tr><td>Key Applications</td><td>LED and fluorescent phosphors, jet engine thermal coatings (YSZ), YAG lasers, radar (YIG), superconductors</td></tr>
              <tr><td>China Market Share</td><td>Over 80% of global production</td></tr>
              <tr><td>Critical Material Status</td><td>EU Critical Raw Materials Act, US DoD critical material list</td></tr>
              <tr><td>Typical Purity</td><td>99.9% Y2O3 for most applications</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>What Is Yttrium Used For?</h2>
          <p>Yttrium&apos;s most significant commercial application is in yttria-stabilised zirconia (YSZ) — the standard thermal barrier coating applied to turbine blades in jet engines and gas turbines. YSZ coatings insulate metal blades from combustion temperatures that exceed the melting point of the underlying superalloy, enabling higher operating temperatures, greater fuel efficiency, and longer component life. Every major commercial aircraft engine and industrial gas turbine uses YSZ coatings.</p>
          <p>In electronics, yttrium is a key ingredient in LED and fluorescent lamp phosphors. Yttrium europium oxide (Y2O3:Eu) produces the red emission in many white LED systems. As global LED lighting continues to displace incandescent and fluorescent technologies, yttrium demand in this sector remains substantial.</p>
          <p>Yttrium aluminium garnet (YAG) is the host material for neodymium-doped YAG lasers (Nd:YAG) — widely used in industrial cutting, welding, marking and medical procedures. Yttrium iron garnet (YIG) is used in microwave and radar devices. Yttrium is also an additive in high temperature superconductors and structural ceramics.</p>

          <h3>Yttrium and China Export Controls</h3>
          <p>Yttrium was included in China&apos;s Announcement 18 (April 2025) alongside dysprosium, terbium and samarium. While yttrium is less well known than the magnet rare earths, its role in jet engine coatings and defence radar systems makes it strategically significant. Western aerospace manufacturers face growing uncertainty over yttrium supply for YSZ coating programmes.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Frequently Asked Questions</h2>

          <h3>What is yttrium used for?</h3>
          <p>Yttrium is used in LED and fluorescent phosphors, yttria-stabilised zirconia (YSZ) thermal barrier coatings for jet engine turbine blades, yttrium aluminium garnet (YAG) for industrial and medical lasers, and yttrium iron garnet (YIG) for radar and microwave devices. It is also used in high temperature superconductors and structural ceramics.</p>

          <h3>What is the current yttrium oxide price?</h3>
          <p>Yttrium oxide (Y2O3, 99.9% purity) traded at approximately $3.80/kg as of early 2026 in reference markets. outside China premiums are rising following Announcement 18 export controls introduced in April 2025. Yttrium is classified as a critical material by both the EU Critical Raw Materials Act and the US government.</p>

          <h3>Why is yttrium critical for jet engines?</h3>
          <p>Yttria-stabilised zirconia (YSZ) is the industry standard thermal barrier coating applied to jet engine turbine blades, insulating them from combustion temperatures that exceed the melting point of the underlying alloy. Without yttrium based coatings, modern high efficiency jet engines and gas turbines cannot function safely at their designed operating temperatures.</p>

          <h3>Why is yttrium under China export controls?</h3>
          <p>China&apos;s Announcement 18 (April 2025) placed yttrium under export licensing controls alongside dysprosium, terbium and samarium. China accounts for over 80% of global yttrium supply. The controls restrict availability for Western aerospace, electronics and defence manufacturers who have limited commercial scale alternatives.</p>
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
        <h2>Source Yttrium Outside China</h2>
        <p>Join the OreTrade waitlist for early access to verified yttrium oxide listings.</p>
        <a href="/#contact" className="btn-primary">Request Supply</a>
      </div>
    </>
  )
}
