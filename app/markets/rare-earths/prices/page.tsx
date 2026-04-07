import type { Metadata } from 'next'
import Link from 'next/link'
import ReePriceWidget from '../../../../components/ReePriceWidget'
import SchemaMarkup from '../../../../components/SchemaMarkup'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/rare-earths/prices/' },
  title: 'Rare Earth Element Prices 2026 — Dysprosium, Terbium, NdPr, Samarium | OreTrade',
  description: 'Rare earth element reference prices for 2026: dysprosium oxide, terbium oxide, NdPr oxide, neodymium, samarium, yttrium. OTC market prices updated from Fastmarkets and Metal Pages.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.oretrade.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'Rare Earths', item: 'https://www.oretrade.com/markets/rare-earths/' },
    { '@type': 'ListItem', position: 4, name: 'Prices', item: 'https://www.oretrade.com/markets/rare-earths/prices/' },
  ],
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Rare Earth Element Reference Prices 2026',
  description: 'OTC reference prices for dysprosium oxide, terbium oxide, NdPr mixed oxide, neodymium oxide, samarium oxide and yttrium oxide. Sources: Fastmarkets, Metal Pages, industrial market data. Updated monthly.',
  url: 'https://www.oretrade.com/markets/rare-earths/prices/',
  creator: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  keywords: ['dysprosium price', 'terbium price', 'NdPr price', 'neodymium price', 'samarium price', 'yttrium price', 'rare earth prices 2026', 'REE prices'],
  variableMeasured: ['OTC reference price', 'USD per kg', 'year to date change'],
  measurementTechnique: 'OTC market reference prices sourced from Fastmarkets, Metal Pages, and industrial market data providers. Rare earths are not exchange-traded.',
  temporalCoverage: '2026/..',
  license: 'https://www.oretrade.com/terms',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why are rare earth prices not listed on exchanges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rare earth elements are traded over the counter (OTC) rather than on centralised exchanges like the LME or COMEX. This is because production is highly concentrated (primarily in China), volumes are relatively small, and products vary significantly in purity and form. Prices are typically set through bilateral negotiations between producers, traders, and buyers, with reference prices published by specialist data providers such as Fastmarkets and Metal Pages.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which rare earths are currently under China export controls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of April 2025, China placed dysprosium, terbium, samarium and yttrium under export licensing controls via Announcement 18. These four heavy rare earth elements are the most critical for defence, EV motor, and clean energy applications. China produces over 90% of global supply of each. The controls have significantly reduced Chinese exports to Western markets and driven prices higher.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most expensive rare earth element?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Terbium is the most expensive commonly traded rare earth element, at approximately $840 per kilogram for terbium oxide (Tb4O7, 99.9% purity) as of April 2026. Terbium has very limited global production of around 700 to 800 tonnes per year, almost entirely from China, and is under Chinese export controls since April 2025.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is NdPr and why is it important?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NdPr oxide is a mixed oxide of neodymium and praseodymium (approximately 75% Nd, 25% Pr) used as the primary feedstock for neodymium-iron-boron (NdFeB) permanent magnets — the most powerful type of permanent magnet. NdFeB magnets are the foundational technology in EV motors, wind turbine generators, industrial robots, and defence systems. NdPr is the benchmark pricing product in the rare earth market, traded at approximately $144 per kilogram as of early 2026.',
      },
    },
  ],
}

const ELEMENTS = [
  { href: '/markets/rare-earths/dysprosium', symbol: 'Dy', name: 'Dysprosium', price: '~$189/kg', controlled: true },
  { href: '/markets/rare-earths/terbium', symbol: 'Tb', name: 'Terbium', price: '~$840/kg', controlled: true },
  { href: '/markets/rare-earths/ndpr', symbol: 'NdPr', name: 'NdPr Oxide', price: '~$144/kg', controlled: false },
  { href: '/markets/rare-earths/neodymium', symbol: 'Nd', name: 'Neodymium', price: '~$149/kg', controlled: false },
  { href: '/markets/rare-earths/samarium', symbol: 'Sm', name: 'Samarium', price: '~$4.50/kg', controlled: true },
  { href: '/markets/rare-earths/yttrium', symbol: 'Y', name: 'Yttrium', price: '~$3.80/kg', controlled: true },
]

export default function ReePricesPage() {
  return (
    <>
      <SchemaMarkup schemas={[breadcrumbSchema, datasetSchema, faqSchema]} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">Rare Earth Prices</p>
          <h1>Rare Earth Element<br /><span>Reference Prices 2026</span></h1>
          <p>OTC reference prices for dysprosium, terbium, NdPr, neodymium, samarium and yttrium — sourced from Fastmarkets and Metal Pages. Rare earths are not exchange-traded; prices reflect OTC market conditions and vary by purity, volume and origin.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
            <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', color: '#f87171', fontSize: '12px', fontFamily: 'Arial, sans-serif', padding: '6px 14px', borderRadius: '3px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
              ⚠ Dy, Tb, Sm, Y — China export controls in force
            </div>
          </div>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <ReePriceWidget />
        </div>
      </section>

      <section className="content-section cream">
        <div className="content-inner">
          <h2>How Rare Earth Prices Work</h2>
          <p>Unlike base metals such as copper or aluminium, rare earth elements are not traded on centralised commodity exchanges. There is no LME price for dysprosium, no COMEX settlement for neodymium. Rare earths trade over the counter (OTC) — bilaterally, between producers, traders and buyers, with prices set through negotiation.</p>
          <p>Reference prices are published by specialist data providers including Fastmarkets (formerly Metal Bulletin) and Metal Pages. These are indicative prices compiled from market surveys and transaction reports — not the binding settlement prices you see on exchange-traded commodities. Actual transaction prices vary depending on purity grade, lot size, origin, payment terms, and whether the buyer can accept Chinese supply.</p>
          <p>The OTC nature of the rare earth market is one reason why supply chain transparency is so difficult to achieve — and why OreTrade&apos;s verified, documented approach adds particular value for buyers who need to demonstrate compliance with due diligence requirements.</p>

          <h3>The Impact of China Export Controls</h3>
          <p>In April 2025, China placed dysprosium, terbium, samarium and yttrium under export licensing controls (Announcement 18). The practical effect has been a sharp reduction in Chinese exports to Western buyers, with licences issued slowly and selectively. The result is a two-tier market: Chinese domestic prices (lower) and outside China prices (significantly higher), particularly for dysprosium and terbium where Chinese production dominates globally.</p>
          <p>For any buyer who cannot or will not source from China — due to geopolitical risk, regulatory compliance, ESG requirements, or supply chain resilience — the relevant price is the outside China OTC price, which reflects genuine scarcity in non-Chinese supply.</p>

          <div className="prices-meta-grid">
            <div className="prices-meta-card">
              <h4>Heavy Rare Earths (HREE)</h4>
              <p>Dysprosium, terbium, holmium, erbium, thulium, ytterbium and lutetium. Low natural abundance, concentrated in ion adsorption clay deposits in southern China. Critical for high temperature magnets and defence.</p>
            </div>
            <div className="prices-meta-card">
              <h4>Light Rare Earths (LREE)</h4>
              <p>Cerium, lanthanum, praseodymium, neodymium, samarium and europium. More abundant, associated with carbonatite and bastnäsite deposits (Bayan Obo, Mountain Pass, Mount Weld). The NdPr pair drives magnet market value.</p>
            </div>
            <div className="prices-meta-card">
              <h4>Price Units</h4>
              <p>Rare earths are priced in USD per kilogram of oxide (e.g. Dy₂O₃, Tb₄O₇, Nd₂O₃) at a stated minimum purity. Commercial grade is typically 99.5% or 99.9%. Metals and alloys trade at a premium to oxides.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Individual Element Markets</h2>
          <p style={{ marginBottom: '24px' }}>Explore detailed price data, supply context, and trading information for each rare earth element on OreTrade.</p>
          <div className="market-link-grid">
            {ELEMENTS.map((el) => (
              <Link key={el.href} href={el.href} className="market-link-card">
                <div className="mlc-icon" style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--amber)', fontFamily: 'Arial, sans-serif' }}>{el.symbol}</div>
                <h3>{el.name}</h3>
                <p>{el.price}</p>
                {el.controlled && (
                  <p style={{ color: '#f87171', fontSize: '11px', marginTop: '4px' }}>⚠ Export controlled</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section dark">
        <div className="content-inner">
          <h2>Frequently Asked Questions</h2>

          <h3>Why are rare earth prices not listed on exchanges?</h3>
          <p>Rare earth elements are traded over the counter (OTC) rather than on centralised exchanges like the LME or COMEX. Production is highly concentrated, volumes are relatively small, and products vary significantly in purity and form. Prices are set through bilateral negotiations, with reference prices published by Fastmarkets and Metal Pages.</p>

          <h3>Which rare earths are currently under China export controls?</h3>
          <p>As of April 2025, China placed dysprosium, terbium, samarium and yttrium under export licensing controls via Announcement 18. These four elements are the most critical for defence, EV motor, and clean energy applications. The controls have significantly reduced Chinese exports to Western markets and driven outside China prices higher.</p>

          <h3>What is the most expensive rare earth element?</h3>
          <p>Terbium is the most expensive commonly traded rare earth element, at approximately $840 per kilogram for Tb₄O₇ (99.9% purity) as of April 2026. Terbium has very limited global production of around 700 to 800 tonnes per year, almost entirely from China, and is now under export controls.</p>

          <h3>What is NdPr and why is it important?</h3>
          <p>NdPr oxide is a mixed oxide of neodymium and praseodymium used as the primary feedstock for NdFeB permanent magnets — the foundational technology in EV motors, wind turbine generators, and defence systems. NdPr is the benchmark pricing product in the rare earth market, at approximately $144 per kilogram as of early 2026.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source Rare Earths with Full Traceability</h2>
        <p>OreTrade connects buyers with verified outside China rare earth producers. Every cargo carries a Digital Product Passport.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
        <span style={{ display: 'inline-block', width: '16px' }} />
        <a href="/blog/china-rare-earth-export-controls" className="btn-secondary">Read the Export Controls Analysis</a>
      </div>
    </>
  )
}
