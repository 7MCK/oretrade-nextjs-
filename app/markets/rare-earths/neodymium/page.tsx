import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Neodymium Oxide — Prices, Suppliers and Trading 2026',
  description: 'Neodymium oxide price, supply sources, and trading guide. NdPr oxide at approximately $149/kg. Source verified neodymium outside China on OreTrade.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/markets/rare-earths/neodymium/' },
  about: { '@type': 'Thing', name: 'Neodymium', sameAs: 'https://en.wikipedia.org/wiki/Neodymium' },
  keywords: ['neodymium price', 'neodymium oxide supplier', 'NdPr price 2026', 'buy neodymium outside China', 'NdFeB magnet materials', 'neodymium oxide cost'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is neodymium used for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neodymium is the primary ingredient in neodymium-iron-boron (NdFeB) permanent magnets — the strongest type of permanent magnet available commercially. NdFeB magnets are essential in electric vehicle drive motors, wind turbine generators, hard disk drives, MRI machines, industrial motors, and consumer electronics. Demand is rising sharply with EV adoption globally.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the current neodymium oxide price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neodymium oxide (Nd2O3, min. 99.5% purity) traded at approximately $149/kg as of early 2026. Neodymium is typically traded as NdPr oxide (neodymium-praseodymium mixed oxide) for magnet applications, which traded at approximately $144/kg. Prices are influenced by EV production volumes, Chinese export policy, and Western rare earth processing capacity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is NdPr oxide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NdPr oxide (Nd2Pr2O3) is a mixed oxide of neodymium and praseodymium, typically in a ratio of approximately 75% Nd to 25% Pr. It is the standard commercial form used in NdFeB magnet production because it is more cost effective to process as a mixed product than to separate individual oxides. NdPr oxide is the most commercially important rare earth product by volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I source neodymium oxide outside China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The primary outside China neodymium source is Lynas Rare Earths, which mines at Mount Weld in Australia and processes in Malaysia — the only commercial scale NdPr separation facility outside China. Additional sources include Energy Fuels (Utah, USA) and early-stage projects in Canada, Greenland and Africa. OreTrade lists verified non-Chinese NdPr suppliers with full product documentation.',
      },
    },
  ],
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Neodymium Oxide and NdPr Oxide Price — Reference Data 2026',
  description: 'Reference price data for neodymium oxide (Nd2O3) and NdPr mixed oxide in USD/kg. Ex-China market. Updated monthly by OreTrade.',
  url: 'https://www.oretrade.com/markets/rare-earths/neodymium/',
  provider: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  variableMeasured: 'USD per kilogram',
  keywords: ['neodymium price', 'NdPr price', 'neodymium oxide cost', 'NdFeB materials price'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.oretrade.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'Rare Earths', item: 'https://www.oretrade.com/markets/rare-earths/' },
    { '@type': 'ListItem', position: 4, name: 'Neodymium', item: 'https://www.oretrade.com/markets/rare-earths/neodymium/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/rare-earths/neodymium/' },
  title: 'Neodymium Oxide and NdPr — Prices, Suppliers and Trading | OreTrade',
  description: 'Neodymium oxide and NdPr price data, supply sources, and trading guide for 2026. Nd2O3 at ~$149/kg. Source verified neodymium outside China on OreTrade.',
}

export default function NeodymiumPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, datasetSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">Neodymium Market</p>
          <h1>Neodymium Oxide and NdPr<br /><span>Prices, Suppliers and Trading</span></h1>
          <p>Neodymium is the core ingredient in NdFeB permanent magnets — the technology powering electric vehicles, wind turbines and clean energy systems worldwide. Source verified neodymium oxide and NdPr from non-Chinese producers on OreTrade.</p>
          <a href="/#contact" className="btn-primary">Request Supply</a>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Neodymium Price Overview — 2026</h2>
          <table className="specs-table">
            <thead>
              <tr><th>Indicator</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>Nd2O3 Price (outside China)</td><td style={{ color: '#4ade80' }}>~$149/kg (99.5% purity)</td></tr>
              <tr><td>NdPr Oxide Price</td><td style={{ color: '#4ade80' }}>~$144/kg (commercial magnet grade)</td></tr>
              <tr><td>Export Control Status</td><td>Not currently controlled (Nd not in Announcement 18)</td></tr>
              <tr><td>Key Applications</td><td>NdFeB permanent magnets, EV motors, wind turbines, HDDs, MRI</td></tr>
              <tr><td>Major Outside China Sources</td><td>Australia (Lynas), USA (Energy Fuels, MP Materials)</td></tr>
              <tr><td>Typical Purity</td><td>99.5% Nd2O3, NdPr mixed oxide (~75% Nd, 25% Pr)</td></tr>
              <tr><td>Units</td><td>Kilograms, metric tonnes (min. order typically 1 MT)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>What Is Neodymium Used For?</h2>
          <p>Neodymium is the primary ingredient in neodymium-iron-boron (NdFeB) permanent magnets — the strongest commercially available permanent magnets and the foundational material behind the global clean energy transition. A typical NdFeB magnet is approximately 30% neodymium by weight.</p>
          <p>NdFeB magnets containing neodymium are found in every electric vehicle drive motor, direct drive offshore wind turbine generator, hard disk drive, MRI scanner, and an increasingly broad range of industrial servo motors, pumps and robotics. The IEA projects that demand for neodymium in clean energy applications alone could increase 3 to 5 times by 2040 under net zero scenarios.</p>
          <p>Unlike dysprosium and terbium, neodymium is not currently subject to China export controls under Announcement 18. However, China still processes approximately 85 to 90% of global rare earth supply including neodymium, and Western supply chains remain vulnerable to future policy changes. The urgency to diversify supply is high across automotive, wind and defence sectors.</p>

          <h3>What is NdPr Oxide?</h3>
          <p>In commercial practice, neodymium is most commonly traded as NdPr oxide — a mixed oxide of neodymium and praseodymium in a ratio of approximately 75% Nd to 25% Pr. This mixed form is more cost effective to produce than separated neodymium oxide, and is fully suitable for standard NdFeB magnet production. The NdPr price typically tracks closely to the blended value of the two constituent oxides.</p>

          <h3>Outside China Neodymium Supply</h3>
          <p>The most significant outside China neodymium source is Lynas Rare Earths, which mines rare earth ore at Mount Weld in Western Australia — one of the highest grade rare earth deposits in the world — and processes it at its facility in Kuantan, Malaysia. Lynas is the only commercial scale producer of separated NdPr oxide outside China, producing approximately 6,000 tonnes per year of NdPr. MP Materials in the United States and Energy Fuels in Utah are building out domestic US separation capacity with government support.</p>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Source Neodymium on OreTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">✅</div>
              <h3>Verified Non-Chinese Supply</h3>
              <p>Source Nd2O3 and NdPr oxide from verified Australian, US and Canadian producers. Every supplier on OreTrade is KYC verified with mine of origin documentation.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>Digital Product Passport</h3>
              <p>Every neodymium cargo carries a Digital Product Passport with assay certification, chain of custody, conflict free status and EU Battery Regulation compliance documentation.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">📦</div>
              <h3>Flexible Volumes</h3>
              <p>Source from 1 metric tonne upwards. OreTrade connects buyers directly with producers and processors, removing broker layers and improving price transparency.</p>
            </div>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/markets/rare-earths" className="btn-secondary">All Rare Earth Markets</Link>
            <Link href="/traceability" className="btn-secondary">Product Passport</Link>
          </div>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Neodymium — Frequently Asked Questions</h2>

          <h3>What is neodymium used for?</h3>
          <p>Neodymium is the primary ingredient in neodymium-iron-boron (NdFeB) permanent magnets — the strongest type of permanent magnet available commercially. NdFeB magnets are essential in electric vehicle drive motors, wind turbine generators, hard disk drives, MRI machines, industrial motors, and consumer electronics. Demand is rising sharply with EV adoption globally.</p>

          <h3>What is the current neodymium oxide price?</h3>
          <p>Neodymium oxide (Nd2O3, min. 99.5% purity) traded at approximately $149/kg as of early 2026. Neodymium is typically traded as NdPr oxide for magnet applications, which traded at approximately $144/kg. Prices are influenced by EV production volumes, Chinese export policy, and Western rare earth processing capacity.</p>

          <h3>What is NdPr oxide?</h3>
          <p>NdPr oxide is a mixed oxide of neodymium and praseodymium, typically around 75% Nd to 25% Pr. It is the standard commercial form used in NdFeB magnet production because it is more cost effective to process as a mixed product than to separate individual oxides. NdPr oxide is the most commercially important rare earth product by volume.</p>

          <h3>Where can I source neodymium oxide outside China?</h3>
          <p>The primary outside China neodymium source is Lynas Rare Earths, which mines at Mount Weld in Australia and processes in Malaysia — the only commercial scale NdPr separation facility outside China. Additional sources include Energy Fuels (Utah, USA) and early stage projects in Canada and Greenland. OreTrade lists verified non-Chinese NdPr suppliers with full product documentation.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source Neodymium and NdPr Outside China</h2>
        <p>Join the OreTrade waitlist for early access to verified neodymium listings.</p>
        <a href="/#contact" className="btn-primary">Request Supply</a>
      </div>
    </>
  )
}
