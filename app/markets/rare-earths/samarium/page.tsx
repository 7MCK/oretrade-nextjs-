import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Samarium — Prices, Suppliers and SmCo Magnet Supply 2026',
  description: 'Samarium supply and price guide. SmCo magnets for aerospace, defence and extreme temperature applications. Under China export controls since April 2025. Source verified samarium on OreTrade.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/markets/rare-earths/samarium/' },
  about: { '@type': 'Thing', name: 'Samarium', sameAs: 'https://en.wikipedia.org/wiki/Samarium' },
  keywords: ['samarium price', 'samarium oxide supplier', 'SmCo magnet supply', 'samarium cobalt magnet', 'buy samarium outside China', 'Sm2O3 price 2026'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is samarium used for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Samarium is used primarily in samarium-cobalt (SmCo) permanent magnets, which can operate at temperatures up to 300°C and in radiation-heavy environments — making them the preferred magnet type for aerospace, defence, oil and gas, and space applications where NdFeB magnets would fail. SmCo magnets are found in satellite attitude control systems, missile guidance, jet engine sensors, and deep sea drilling equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the current samarium oxide price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Samarium oxide (Sm2O3, 99.9% purity) traded at approximately $4.50/kg as of early 2026 in outside China markets, though premiums for documented outside China supply are significant following export controls. Samarium was placed under Chinese export licensing controls in Announcement 18 (April 2025), restricting Western supply.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between SmCo and NdFeB magnets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SmCo (samarium-cobalt) magnets operate at much higher temperatures than NdFeB (neodymium-iron-boron) magnets — up to 300°C vs approximately 80-150°C — and are more resistant to corrosion and radiation. However, SmCo magnets are significantly more expensive. NdFeB is preferred for cost sensitive applications like EV motors; SmCo is preferred for harsh-environment aerospace and defence use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is samarium under China export controls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "China's Announcement 18 (April 2025) placed samarium, along with dysprosium, terbium and yttrium, under export licensing controls. China produces over 85% of global samarium supply. The controls target elements critical to Western defence and aerospace capabilities, where SmCo magnets are used in systems with no short term NdFeB substitution.",
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
    { '@type': 'ListItem', position: 4, name: 'Samarium', item: 'https://www.oretrade.com/markets/rare-earths/samarium/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/rare-earths/samarium/' },
  title: 'Samarium — Prices, SmCo Magnet Supply and Trading | OreTrade',
  description: 'Samarium supply and price guide for 2026. SmCo magnets for aerospace, defence and extreme temperature use. Under China export controls. Source verified samarium on OreTrade.',
}

export default function SamariumPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="badge-soon" style={{ background: '#ef4444', color: 'white' }}>Export Controlled</div>
          <p className="section-label">Samarium Market</p>
          <h1>Samarium<br /><span>SmCo Magnets, Prices and Supply</span></h1>
          <p>Samarium is the key ingredient in samarium-cobalt (SmCo) permanent magnets — the only magnet type that operates reliably above 150°C, making it essential for aerospace, defence, and oil and gas applications. Under China export controls since April 2025.</p>
          <a href="/#contact" className="btn-primary">Request Supply</a>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Samarium Price Overview — 2026</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Indicator</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Sm2O3 Reference Price</td><td style={{ color: '#4ade80' }}>~$4.50/kg (99.9% purity, outside China premium applies)</td></tr>
              <tr><td>Export Control Status</td><td style={{ color: '#f87171' }}>Controlled — China Announcement 18 (April 2025)</td></tr>
              <tr><td>Key Applications</td><td>SmCo permanent magnets, aerospace, defence, deep sea equipment, satellite systems</td></tr>
              <tr><td>China Market Share</td><td>Over 85% of global production</td></tr>
              <tr><td>Major Outside China Sources</td><td>Australia (Lynas — trace), USA (Energy Fuels), Canada (early stage)</td></tr>
              <tr><td>Typical Purity</td><td>99.9% Sm2O3 for magnet applications</td></tr>
              <tr><td>Units</td><td>Kilograms, metric tonnes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>What Is Samarium Used For?</h2>
          <p>Samarium&apos;s primary commercial use is in samarium-cobalt (SmCo) permanent magnets — a distinct magnet technology from the more common NdFeB magnets used in EVs and wind turbines. SmCo magnets are chosen specifically for applications where temperature, corrosion resistance, or radiation tolerance is critical.</p>
          <p>SmCo magnets can operate continuously at temperatures up to 300°C, compared to approximately 80 to 150°C for standard NdFeB magnets. They are also highly resistant to corrosion and do not require protective coatings. These properties make SmCo magnets the preferred choice for jet engine sensors, missile guidance systems, satellite attitude control actuators, deep sea drilling equipment, and nuclear and space applications.</p>
          <p>The defence sector is particularly dependent on SmCo. The US Department of Defense has specifically flagged samarium as a critical material for national security, with SmCo magnets used in precision guided munitions, radar systems, sonar, and avionics components throughout the US and allied military supply chains.</p>

          <h3>Impact of China Export Controls on Samarium</h3>
          <p>China&apos;s Announcement 18 (April 2025) placed samarium alongside dysprosium, terbium and yttrium under export licensing controls. For a material already produced almost entirely in China and consumed primarily in Western defence and aerospace programmes, the controls represent a significant supply chain risk. outside China samarium supply is extremely limited at commercial scale, making OreTrade&apos;s verified sourcing network especially valuable for procurement teams in affected industries.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Frequently Asked Questions</h2>

          <h3>What is samarium used for?</h3>
          <p>Samarium is used primarily in samarium-cobalt (SmCo) permanent magnets, which operate at temperatures up to 300°C — making them the preferred magnet type for aerospace, defence, oil and gas, and space applications. SmCo magnets are found in satellite attitude control systems, missile guidance, jet engine sensors, and deep sea drilling equipment.</p>

          <h3>What is the current samarium oxide price?</h3>
          <p>Samarium oxide (Sm2O3, 99.9% purity) traded at approximately $4.50/kg as of early 2026 in outside China markets. outside China premiums are significant following Announcement 18 export controls. Samarium was placed under Chinese export licensing controls in April 2025, restricting Western supply access.</p>

          <h3>What is the difference between SmCo and NdFeB magnets?</h3>
          <p>SmCo magnets operate at much higher temperatures than NdFeB magnets — up to 300°C vs approximately 80 to 150°C — and are more resistant to corrosion and radiation. NdFeB is preferred for cost sensitive applications like EV motors; SmCo is preferred for harsh environment aerospace and defence use where temperature and reliability are critical.</p>

          <h3>Why is samarium under China export controls?</h3>
          <p>China&apos;s Announcement 18 (April 2025) placed samarium, along with dysprosium, terbium and yttrium, under export licensing controls. China produces over 85% of global samarium supply. The controls target elements critical to Western defence and aerospace supply chains where SmCo magnets have no short term NdFeB substitution.</p>
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
        <h2>Source Samarium Outside China</h2>
        <p>Join the OreTrade waitlist for early access to verified samarium and SmCo material listings.</p>
        <a href="/#contact" className="btn-primary">Request Supply</a>
      </div>
    </>
  )
}
