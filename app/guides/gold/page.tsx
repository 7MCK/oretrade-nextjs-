import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Is Gold Traded? Complete Market Guide — OreTrade',
  description: 'How gold is traded globally — spot, futures, LBMA, physical bars, and doré. Purity grades, pricing mechanisms, major producers, and how to source physical gold.',
}

export default function GoldGuide() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">OreTrade Guide</p>
          <h1>How Is Gold Traded?<br /><span>A Complete Market Guide</span></h1>
          <p>From spot price to physical delivery — a comprehensive guide to gold trading for buyers, sellers, investors, and anyone sourcing physical gold from the mine level.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <div className="toc">
            <h4>Contents</h4>
            <ol>
              <li><a href="#overview">Gold market overview</a></li>
              <li><a href="#spot-futures">Spot vs futures markets</a></li>
              <li><a href="#lbma">The LBMA and London fix</a></li>
              <li><a href="#purity">Purity grades and product forms</a></li>
              <li><a href="#producers">Major gold producers</a></li>
              <li><a href="#central-banks">Central banks and reserves</a></li>
              <li><a href="#physical">Physical gold vs ETFs</a></li>
              <li><a href="#mine-level">Trading gold at the mine level</a></li>
            </ol>
          </div>

          <h2 id="overview">Gold Market Overview</h2>
          <p>Gold is the most globally traded commodity by value. With an above-ground stock of approximately 208,000 tonnes — worth over $13 trillion at current prices — and a daily trading volume that dwarfs most financial markets, gold occupies a unique position at the intersection of commodities, finance, and geopolitics.</p>
          <p>Unlike industrial metals, gold is not primarily consumed in production. Roughly 50% of annual supply goes to jewellery, around 25% to investment (bars, coins, ETFs), 10% to central bank purchases, and only about 10–15% to technology and industrial applications. This means gold&apos;s price is driven as much by financial sentiment, currency dynamics, and geopolitical risk as by supply and demand fundamentals.</p>
          <p>Yet at the physical supply chain level — at the mine, the refinery, and the vault — gold is a commodity like any other: mined, assayed, refined, transported, and traded. It is this physical supply chain that OreTrade is building infrastructure for.</p>

          <h2 id="spot-futures">Spot vs Futures Markets</h2>
          <p>The <strong>spot price</strong> of gold is the price for immediate delivery of a troy ounce of gold. It is the basis for most physical gold transactions and is continuously quoted by market makers in the OTC (over-the-counter) market, primarily in London. When you see a gold price quoted in the news, it is typically the spot price in US dollars per troy ounce.</p>
          <p><strong>Gold futures</strong> are exchange-traded contracts for the delivery of gold at a specified future date at a pre-agreed price. The primary gold futures exchange is COMEX in New York (part of the CME Group), where the most actively traded contract is the 100 troy ounce gold futures contract. COMEX futures provide the mechanism for price discovery, hedging, and speculation — though physical delivery under futures contracts is relatively rare.</p>
          <p>The relationship between spot and futures prices (the &quot;basis&quot;) reflects the cost of carrying gold — primarily interest rates and storage costs. In a normal market (contango), futures prices are higher than spot; in periods of extreme physical demand, futures can trade at a discount to spot (backwardation).</p>

          <h2 id="lbma">The LBMA and the London Gold Price</h2>
          <p>The London Bullion Market Association (LBMA) is the international trade association for the London precious metals market and the global standard-setter for gold and silver trading. The LBMA administers the <strong>LBMA Gold Price</strong> — an electronic auction conducted twice daily (10:30 AM and 3:00 PM London time) that produces globally recognised benchmark prices used in contracts, financial instruments, and physical settlements worldwide.</p>
          <p>The LBMA also sets the <strong>Good Delivery Standard</strong> — the specifications that gold bars must meet to be accepted for settlement in the London OTC market. Good delivery gold bars must weigh between 350 and 430 fine troy ounces (approximately 10.9–13.4 kg), be a minimum 99.5% fineness, and be produced by an accredited refiner on the LBMA Good Delivery List. These bars form the core of the physical gold trading system.</p>

          <h2 id="purity">Purity Grades and Product Forms</h2>
          <p>Gold is measured in fineness (parts per thousand) or karats. The key purity levels in commercial trading are:</p>
          <p><strong>999.9 (24 karat, &quot;four nines&quot;)</strong>: The highest commercially produced purity, used for investment bars, kilobars, and some electronics applications. This is the standard for LBMA Good Delivery bars and investment-grade coins.</p>
          <p><strong>999.0 (three nines)</strong>: Common for standard investment bars and some jewellery market applications.</p>
          <p><strong>995.0</strong>: The minimum fineness for LBMA Good Delivery bars.</p>
          <p><strong>Doré</strong>: Unrefined gold produced at the mine — typically 70–90% gold with silver and other impurities. Miners sell doré to refineries, which process it to Good Delivery standard. The doré price is typically the spot price minus the refinery&apos;s charges (treatment fee + refining charge).</p>
          <p>Physical gold also trades as grain or shot (small granules used in jewellery manufacturing and as refinery feedstock), kilobars (32.15 troy oz, 99.9% fineness, popular in Asia), and tola bars (common in South Asia, 10 tolas = 116.64g).</p>

          <h2 id="producers">Major Gold Producing Countries</h2>
          <p><strong>China</strong> is the world&apos;s largest gold producer at approximately 370 tonnes per year, though almost all production is consumed domestically.</p>
          <p><strong>Russia</strong> produces around 330 tonnes per year, though international trade in Russian gold has been significantly constrained since 2022 due to sanctions.</p>
          <p><strong>Australia</strong> produces approximately 315 tonnes per year from major operations in Western Australia (Boddington, Super Pit, Tropicana) and is a major exporter to Asian markets.</p>
          <p><strong>Canada</strong> produces around 200 tonnes per year, with operations across Ontario, Quebec, British Columbia, and the Yukon.</p>
          <p><strong>Ghana</strong> is Africa&apos;s largest gold producer at around 130 tonnes per year, with significant operations from Newmont (Ahafo, Akyem), Gold Fields (Tarkwa), and a large artisanal and small-scale mining sector.</p>

          <h2 id="central-banks">Central Banks and Gold Reserves</h2>
          <p>Central banks collectively hold approximately 35,000 tonnes of gold — around 17% of all above-ground gold. Gold reserves provide a store of value that is independent of any single currency, and central bank buying has been a significant driver of gold demand in recent years as institutions in China, India, Turkey, Poland, and other countries diversify away from US dollar assets.</p>
          <p>Central bank gold is typically held in allocated form in high-security vaults — the Bank of England and Federal Reserve Bank of New York are the world&apos;s largest custodians — and is traded between institutions in the OTC market at LBMA benchmark prices.</p>

          <h2 id="physical">Physical Gold vs Gold ETFs</h2>
          <p>For investors, physical gold and gold ETFs represent different risk-return profiles. <strong>Physical gold</strong> — bars and coins — provides direct ownership of the metal, eliminating counterparty risk. It requires secure storage and insurance but provides ultimate financial security in a crisis.</p>
          <p><strong>Gold ETFs</strong> (Exchange Traded Funds, such as SPDR Gold Shares &quot;GLD&quot; or iShares Gold Trust &quot;IAU&quot;) provide exposure to gold price movements through a financial instrument that can be bought and sold on a stock exchange. Most gold ETFs hold physical gold in allocated vaults, though the investor holds shares in the fund rather than the gold directly.</p>
          <p>The global gold ETF market holds approximately 3,000 tonnes of gold — a significant but relatively small fraction of the total above-ground stock, and subject to fund flows that can amplify price movements.</p>

          <h2 id="mine-level">Trading Gold at the Mine Level</h2>
          <p>At the mine level, gold is sold primarily as doré or as gold-in-concentrate (for operations where gold is a by-product of copper or other base metal mining). OreTrade&apos;s precious metals market is designed for this physical supply chain — connecting verified producers of doré and gold-in-concentrate with refineries, traders, and industrial buyers.</p>
          <p>Every gold listing on OreTrade carries a Digital Product Passport documenting the mine of origin, assay certificate from an LBMA-accredited assayer, conflict-free certification, and chain of custody from extraction to refinery. This is not just good practice — for many buyers, it is a regulatory requirement.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Trade Physical Gold on OreTrade</h2>
        <p>Join the OreTrade waitlist for early access to the verified precious metals marketplace.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets/gold" className="btn-secondary">View Precious Metals Market</Link>
        </div>
      </div>
    </>
  )
}
