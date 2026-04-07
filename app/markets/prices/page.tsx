import type { Metadata } from 'next'
import Link from 'next/link'
import PriceWidget from '../../../components/PriceWidget'
import SchemaMarkup from '../../../components/SchemaMarkup'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/markets/prices/' },
  title: 'Live Commodity Prices — Iron Ore, Copper, Gold, Nickel | OreTrade',
  description: 'Live commodity prices for iron ore, copper, gold, silver, platinum, palladium, aluminium and nickel. Real-time reference pricing from global futures markets.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Markets', item: 'https://www.oretrade.com/markets/' },
    { '@type': 'ListItem', position: 3, name: 'Live Prices', item: 'https://www.oretrade.com/markets/prices/' },
  ],
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Live Commodity Prices — Ores and Metals',
  description: 'Real-time reference prices for key mined commodities including iron ore, copper, gold, silver, platinum, palladium, aluminium and nickel, sourced from major futures exchanges.',
  url: 'https://www.oretrade.com/markets/prices/',
  creator: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  keywords: ['iron ore price', 'copper price', 'gold price', 'nickel price', 'live commodity prices', 'metals prices', 'aluminium price', 'platinum price'],
  variableMeasured: ['commodity price', 'daily change', 'percentage change'],
  measurementTechnique: 'Sourced from CME, COMEX, NYMEX and TSI futures settlement data via financial data providers.',
}

const MARKETS = [
  { href: '/markets/iron-ore', icon: '🏔️', name: 'Iron Ore', note: '62% Fe CFR China benchmark' },
  { href: '/markets/copper', icon: '🔩', name: 'Copper', note: 'COMEX Grade A futures' },
  { href: '/markets/gold', icon: '✨', name: 'Gold', note: 'COMEX spot + futures' },
  { href: '/markets/nickel', icon: '⚙️', name: 'Nickel', note: 'LME Grade A reference' },
  { href: '/markets/rare-earths/prices', icon: '⚛️', name: 'Rare Earth Prices', note: 'Dy, Tb, NdPr, Sm, Y — OTC reference' },
  { href: '/markets/critical-minerals', icon: '⚡', name: 'Critical Minerals', note: 'Lithium, cobalt, graphite' },
  { href: '/markets/base-metals', icon: '🔧', name: 'Base Metals', note: 'Aluminium, zinc, lead, tin' },
]

export default function PricesPage() {
  return (
    <>
      <SchemaMarkup schemas={[breadcrumbSchema, datasetSchema]} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">Live Commodity Prices</p>
          <h1>Real-Time <span>Ore &amp; Metals</span> Prices</h1>
          <p>Reference prices for the commodities traded on OreTrade, updated every minute from global futures markets. Iron ore, copper, gold, silver, platinum, palladium, aluminium and more.</p>
        </div>
      </div>

      <section className="content-section dark">
        <div className="content-inner">
          <PriceWidget />
        </div>
      </section>

      <section className="content-section cream">
        <div className="content-inner">
          <h2>How Commodity Prices Work</h2>
          <p>The prices shown above are sourced from major futures exchanges — COMEX (CME Group) for gold, silver, copper and palladium; NYMEX for platinum; CME for aluminium; and TSI/CME for iron ore 62% Fe CFR China. These are futures settlement or last-trade prices, typically 15 to 20 minutes delayed.</p>
          <p>In physical commodity trading, the final transacted price is almost never exactly the exchange price. It is calculated as: <strong>Exchange Benchmark + Premium/Discount ± Quality Adjustments ± Freight</strong>. A high-grade iron ore cargo from Australia trades at a premium to the 62% Fe benchmark; a copper concentrate cargo trades at a discount (the TCRC deduction) from the LME cathode price. OreTrade shows each cargo's full pricing formula on-platform.</p>

          <h3>Why Prices Move</h3>
          <p>Commodity prices are driven by supply and demand fundamentals — mine output, smelter capacity, end-use industry activity — as well as macro factors including the US dollar index, interest rates, geopolitical risk, and energy costs. Gold and silver are particularly sensitive to real interest rates and safe-haven demand. Copper and nickel are closely tied to Chinese industrial activity and the global energy transition. Iron ore prices are dominated by Chinese steel production policy.</p>

          <div className="prices-meta-grid">
            <div className="prices-meta-card">
              <h4>Precious Metals</h4>
              <p>Gold, silver, platinum and palladium are priced in troy ounces (31.1g). Benchmark is the LBMA London Fix for gold and silver; LPPM for PGMs. Physical bars trade at a premium to spot reflecting fabrication, storage, and insurance costs.</p>
            </div>
            <div className="prices-meta-card">
              <h4>Base Metals</h4>
              <p>Copper, aluminium, nickel, zinc, lead and tin are priced per metric tonne. The LME (London Metal Exchange) is the primary global benchmark. Copper also trades on COMEX. Prices reflect 3-month forward contracts unless stated otherwise.</p>
            </div>
            <div className="prices-meta-card">
              <h4>Iron Ore</h4>
              <p>The global iron ore benchmark is the TSI 62% Fe fines CFR China price, published by S&amp;P Global Platts. Cargoes trade at premiums or discounts based on iron content, alumina/silica/phosphorus levels, moisture, and form (fines vs lump vs pellets).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>Explore OreTrade Markets</h2>
          <p style={{ marginBottom: '8px' }}>Each market on OreTrade offers full specification documentation, verified counterparties, and transparent pricing from mine to buyer.</p>
          <div className="market-link-grid">
            {MARKETS.map((m) => (
              <Link key={m.href} href={m.href} className="market-link-card">
                <div className="mlc-icon">{m.icon}</div>
                <h3>{m.name}</h3>
                <p>{m.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Trade at the Right Price</h2>
        <p>OreTrade gives every participant access to the same transparent pricing. Join the waitlist for early access.</p>
        <a href="/#contact" className="btn-primary">Join the Waitlist</a>
      </div>
    </>
  )
}
