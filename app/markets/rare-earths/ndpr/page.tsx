import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NdPr Oxide — Neodymium Praseodymium Prices and Supply 2026',
  description: 'NdPr oxide price, supply sources and trading guide. The commercial magnet-grade rare earth at approximately $144/kg. Source verified NdPr from non-Chinese producers on OreTrade.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/markets/rare-earths/ndpr/' },
  about: [
    { '@type': 'Thing', name: 'Neodymium', sameAs: 'https://en.wikipedia.org/wiki/Neodymium' },
    { '@type': 'Thing', name: 'Praseodymium', sameAs: 'https://en.wikipedia.org/wiki/Praseodymium' },
  ],
  keywords: ['NdPr price', 'NdPr oxide supplier', 'neodymium praseodymium price 2026', 'buy NdPr outside China', 'NdFeB magnet materials price', 'NdPr oxide cost per kg'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is NdPr oxide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NdPr oxide (neodymium-praseodymium mixed oxide) is the primary commercial rare earth material used in NdFeB permanent magnet production. It is typically a mixed oxide of approximately 75% neodymium and 25% praseodymium. It is more cost effective to produce than separated neodymium oxide and is fully suitable for standard NdFeB magnet applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the NdPr oxide price in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NdPr oxide traded at approximately $144/kg in early 2026. NdPr is the benchmark pricing product for the magnet rare earth market. Prices are driven primarily by EV production volumes, Chinese export policy, and the ramp-up of Western rare earth separation capacity at Lynas (Australia/Malaysia), MP Materials (USA) and Energy Fuels (USA).',
      },
    },
    {
      '@type': 'Question',
      name: 'Who are the main outside China NdPr producers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The primary outside China NdPr producer is Lynas Rare Earths, which separates NdPr at its LAMP facility in Kuantan, Malaysia using ore from Mount Weld, Australia — producing approximately 6,000 tonnes per year of NdPr oxide. MP Materials (California, USA) is ramping up NdPr separation. Energy Fuels (Utah, USA) is building separation capacity. Arafura Resources (Australia) and others are in development.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much NdPr does an electric vehicle motor contain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical NdFeB permanent magnet for an electric vehicle traction motor contains approximately 1 to 2 kg of NdPr oxide equivalent per vehicle, depending on motor design and power output. Premium performance EVs with larger motors may use 2 to 3 kg. At $144/kg, NdPr represents approximately $150 to $430 per vehicle in material cost, making supply chain security a significant procurement concern for EV manufacturers.',
      },
    },
  ],
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'NdPr Oxide Price — Reference Data 2026',
  description: 'Reference price data for NdPr mixed oxide (neodymium-praseodymium, magnet grade) in USD/kg. Updated monthly by OreTrade from industrial market data.',
  url: 'https://www.oretrade.com/markets/rare-earths/ndpr/',
  provider: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  variableMeasured: 'USD per kilogram',
  keywords: ['NdPr price', 'neodymium praseodymium price', 'magnet rare earth price', 'NdFeB material cost'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.oretrade.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'Rare Earths', item: 'https://www.oretrade.com/markets/rare-earths/' },
    { '@type': 'ListItem', position: 4, name: 'NdPr', item: 'https://www.oretrade.com/markets/rare-earths/ndpr/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/rare-earths/ndpr/' },
  title: 'NdPr Oxide — Neodymium Praseodymium Prices and Supply | OreTrade',
  description: 'NdPr oxide price, supply and trading guide for 2026. The benchmark magnet rare earth at ~$144/kg. Source verified NdPr from non-Chinese producers on OreTrade.',
}

export default function NdPrPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, datasetSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">NdPr Oxide Market</p>
          <h1>NdPr Oxide<br /><span>Neodymium Praseodymium — Price and Supply 2026</span></h1>
          <p>NdPr oxide is the benchmark commercial material for NdFeB permanent magnet production. Approximately 1 to 2 kg goes into every electric vehicle motor. Source verified NdPr from non-Chinese producers on OreTrade with full traceability documentation.</p>
          <a href="/#contact" className="btn-primary">Request Supply</a>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>NdPr Price Overview — 2026</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Indicator</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>NdPr Oxide Price</td><td style={{ color: '#4ade80' }}>~$144/kg (magnet grade, outside China)</td></tr>
              <tr><td>Nd2O3 Separated Price</td><td style={{ color: '#4ade80' }}>~$149/kg (99.5% purity)</td></tr>
              <tr><td>Pr6O11 Separated Price</td><td style={{ color: '#4ade80' }}>~$144/kg (99.5% purity)</td></tr>
              <tr><td>Export Control Status</td><td>Not currently controlled under Announcement 18</td></tr>
              <tr><td>Key Applications</td><td>NdFeB permanent magnets, EV motors, wind turbines, hard disk drives, MRI machines</td></tr>
              <tr><td>Leading Outside China Producers</td><td>Lynas (AU/MY), MP Materials (US), Energy Fuels (US)</td></tr>
              <tr><td>Composition</td><td>~75% Nd, ~25% Pr (typical commercial ratio)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>What Is NdPr Oxide and Why Does It Matter?</h2>
          <p>NdPr oxide is the standard commercial form in which neodymium and praseodymium are traded for magnet production. Rather than separating the two elements entirely, rare earth processors produce a mixed oxide that is approximately 75% neodymium and 25% praseodymium by weight. This mixed form is less expensive to produce than fully separated individual oxides and is fully suitable for standard NdFeB magnet production.</p>
          <p>NdPr is the most commercially important rare earth product by volume. It is the primary material input for NdFeB permanent magnets, which power every electric vehicle traction motor, every direct drive offshore wind turbine, and an enormous range of industrial motors, robotics, medical devices and consumer electronics worldwide.</p>

          <h3>NdPr in Electric Vehicles</h3>
          <p>A typical NdFeB magnet for an EV motor contains approximately 1 to 2 kg of NdPr per vehicle. As global EV production scales from tens of millions of vehicles per year toward targets of 80 to 100 million vehicles per year by 2030, the implied NdPr demand is enormous — potentially 100,000 to 200,000 additional tonnes per year of NdPr demand over current levels. This is the primary driver of interest in diversifying NdPr supply away from China.</p>

          <h3>Outside China NdPr Production</h3>
          <p>Lynas Rare Earths remains the world&apos;s largest non-Chinese producer of NdPr oxide, with approximately 6,000 tonnes per year of production at its LAMP facility in Malaysia using ore from the Mount Weld deposit in Western Australia. MP Materials at Mountain Pass in California is ramping up its NdPr separation capability. Energy Fuels in Utah is processing monazite sand to produce NdPr with US government support. Combined, these sources represent a small fraction of Chinese production — highlighting the urgency of supply chain diversification.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Frequently Asked Questions</h2>

          <h3>What is NdPr oxide?</h3>
          <p>NdPr oxide (neodymium-praseodymium mixed oxide) is the primary commercial rare earth material used in NdFeB permanent magnet production. It is typically a mixed oxide of approximately 75% neodymium and 25% praseodymium, more cost effective to produce than fully separated oxides and fully suitable for standard NdFeB magnet applications.</p>

          <h3>What is the NdPr oxide price in 2026?</h3>
          <p>NdPr oxide traded at approximately $144/kg in early 2026. Prices are driven primarily by EV production volumes, Chinese export policy, and the ramp up of Western rare earth separation capacity at Lynas, MP Materials and Energy Fuels.</p>

          <h3>Who are the main outside China NdPr producers?</h3>
          <p>The primary outside China NdPr producer is Lynas Rare Earths, producing approximately 6,000 tonnes per year at its LAMP facility in Malaysia. MP Materials (California) and Energy Fuels (Utah) are building US separation capacity. Arafura Resources (Australia) and others are in development stages.</p>

          <h3>How much NdPr does an electric vehicle motor contain?</h3>
          <p>A typical NdFeB permanent magnet for an EV traction motor contains approximately 1 to 2 kg of NdPr oxide equivalent per vehicle. At $144/kg, this represents approximately $150 to $290 per vehicle in NdPr material cost, making supply chain security a significant procurement priority for EV manufacturers.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source NdPr Oxide from Verified Non-Chinese Producers</h2>
        <p>Join the OreTrade waitlist for early access to verified NdPr listings.</p>
        <a href="/#contact" className="btn-primary">Request Supply</a>
      </div>
    </>
  )
}
