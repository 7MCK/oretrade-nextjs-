import type { Metadata } from 'next'
import Link from 'next/link'

import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Iron Ore — Complete Buyer and Seller Guide 2026',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/guides/iron-ore/' },
  about: { '@type': 'Thing', name: 'Iron ore', sameAs: 'https://en.wikipedia.org/wiki/Iron_ore' },
  keywords: ['iron ore buyer guide', 'iron ore price', 'buy iron ore online', 'iron ore grades', 'iron ore fines lump pellets', 'iron ore trading'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the main grades of iron ore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Iron ore is traded in three main product forms: fines (under 6.3mm, most common), lump ore (6.3-30mm, commands a premium), and pellets (9-16mm spheres, highest premium). Iron ore is also graded by Fe content — standard export ore is 58-62% Fe, with high-grade ore at 65%+ Fe attracting premiums of several dollars per tonne.' },
    },
    {
      '@type': 'Question',
      name: 'What is the iron ore price per tonne?',
      acceptedAnswer: { '@type': 'Answer', text: 'Iron ore (62% Fe CFR Qingdao) has historically traded between $80 and $130 per dry metric tonne, with volatility tied to Chinese steel demand. Premium high-grade (65% Fe) and lump ore commands a price premium. OreTrade provides reference pricing for buyers and sellers on its iron ore market page.' },
    },
    {
      '@type': 'Question',
      name: 'Who are the major iron ore producers?',
      acceptedAnswer: { '@type': 'Answer', text: 'The three largest producers globally are BHP and Rio Tinto (Australia, Pilbara region) and Vale (Brazil, Carajas). Together they account for approximately 60% of global seaborne supply. Other significant producers include Fortescue Metals (Australia), Anglo American, and ArcelorMittal Mines (Canada).' },
    },
    {
      '@type': 'Question',
      name: 'How is iron ore traded internationally?',
      acceptedAnswer: { '@type': 'Answer', text: 'Iron ore is primarily traded on long-term supply contracts between miners and steel mills, with a significant spot market priced against benchmark indices including SGX TSI and Platts IODEX. Typical delivery terms are CFR to Chinese and Asian ports. OreTrade enables direct B2B trading with full documentation on every cargo.' },
    }
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.oretrade.com/guides/' },
    { '@type': 'ListItem', position: 3, name: 'Iron Ore Guide', item: 'https://www.oretrade.com/guides/iron-ore/' }
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/guides/iron-ore/' },
  title: 'What Is Iron Ore? Complete Buyer and Seller Guide , OreTrade',
  description: 'Everything you need to know about iron ore: grades, product forms, pricing mechanisms, major producers, and how to buy and sell iron ore internationally.',
}

export default function IronOreGuide() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">OreTrade Guide</p>
          <h1>What Is Iron Ore?<br /><span>Complete Buyer and Seller Guide</span></h1>
          <p>Iron ore is the raw material that makes the modern world possible. This guide covers everything from its geological formation to how it is graded, shipped, and priced on global markets.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <div className="toc">
            <h4>Contents</h4>
            <ol>
              <li><a href="#what-is-iron-ore">What is iron ore?</a></li>
              <li><a href="#formation">How iron ore is formed</a></li>
              <li><a href="#grades">Iron ore grades and quality</a></li>
              <li><a href="#product-forms">Product forms: fines, lump, pellets</a></li>
              <li><a href="#producers">Major producing countries</a></li>
              <li><a href="#pricing">How iron ore is priced</a></li>
              <li><a href="#steelmaking">Iron ore in steelmaking</a></li>
              <li><a href="#trading">How to buy and sell iron ore</a></li>
            </ol>
          </div>

          <h2 id="what-is-iron-ore">What is Iron Ore?</h2>
          <p>Iron ore is a rock or mineral from which metallic iron can be economically extracted. It is the primary raw material used in the production of steel , and steel, in turn, is the backbone of global infrastructure. From the reinforcement bars in concrete buildings and bridges, to the body panels of cars, to the hull of a ship, steel is everywhere. And all of it starts with iron ore.</p>
          <p>Iron ore is mined on every continent, but commercially viable deposits are concentrated in a relatively small number of countries. The quality of iron ore varies enormously depending on its geological origin , from high-grade magnetite deposits containing 65 to 70% iron to low-grade ores requiring significant beneficiation before they can be used in steelmaking.</p>

          <h2 id="formation">How Iron Ore is Formed</h2>
          <p>The vast majority of the world&apos;s high-grade iron ore deposits were formed around 1.8 to 2.5 billion years ago during what geologists call the &quot;Banded Iron Formation&quot; period. At this time, the Earth&apos;s oceans contained dissolved iron, and as oxygen began to accumulate in the atmosphere (produced by early photosynthetic bacteria), it reacted with the dissolved iron to form iron oxides that precipitated to the seafloor in distinctive banded layers.</p>
          <p>Over billions of years, these formations were compressed, heated, uplifted, and in many cases further concentrated by weathering and oxidation , producing the massive iron ore deposits found today in Australia&apos;s Pilbara region, Brazil&apos;s Iron Quadrangle, and the Mesabi Range of the United States.</p>
          <p>The two most commercially important iron oxide minerals are haematite (Fe₂O₃ , typically 65 to 70% Fe in pure form) and magnetite (Fe₃O₄ , typically 72% Fe in pure form). Haematite deposits tend to be higher grade and require less processing, while magnetite ore is often lower grade but can be concentrated into high-quality pellet feed.</p>

          <h2 id="grades">Iron Ore Grades and Quality</h2>
          <p>The grade of iron ore , the percentage of iron it contains , is the primary determinant of its value. But grade is not the only quality parameter that matters. Other key factors include:</p>
          <p><strong>Iron content (Fe%)</strong>: The core quality metric. Benchmark grade for pricing purposes is 62% Fe. High-grade ore (65%+) commands a significant premium; low-grade ore (below 58%) trades at a steep discount.</p>
          <p><strong>Alumina (Al₂O₃)</strong>: Higher alumina increases slag volume in blast furnaces and reduces productivity. Ore with high alumina content is penalised in price.</p>
          <p><strong>Silica (SiO₂)</strong>: Similarly penalised. High silica ore requires more coke and limestone to produce a tonne of pig iron.</p>
          <p><strong>Phosphorus (P)</strong>: Even small amounts of phosphorus significantly weaken steel. Very low phosphorus levels are essential for most steel grades.</p>
          <p><strong>Moisture (%)</strong>: Ore is traded on a dry metric tonne (DMT) basis. Moisture content affects the as-received weight and must be measured at loading and discharge.</p>
          <p><strong>Lump/fines ratio</strong>: Coarser lump ore commands a premium over fines because it can be charged directly into a blast furnace without agglomeration.</p>

          <h2 id="product-forms">Product Forms: Fines, Lump, and Pellets</h2>
          <p><strong>Iron ore fines</strong> are particles less than 6.3mm in size and are the most commonly traded form, accounting for roughly 70% of seaborne iron ore trade. Because fines cannot be directly charged into a blast furnace (they would block the airflow), they must first be agglomerated , either by sintering at the steel mill or by purchasing pellets.</p>
          <p><strong>Lump ore</strong> consists of coarser particles, typically 6.3 to 31.5mm, that can be charged directly into a blast furnace. Lump ore commands a premium , typically $10 to $30/t over fines , because it reduces sintering costs at the mill. Australia&apos;s Pilbara mines are the dominant source of high-quality lump ore.</p>
          <p><strong>Pellets</strong> are small, spherical balls of processed iron ore (typically 8 to 16mm) produced by milling ore fines, mixing with binders, and heat-hardening in a kiln. They offer excellent blast furnace performance but come at a significant cost premium over fines. Pellets are also the preferred feed for Direct Reduction (DR) steelmaking , the dominant process for producing electric arc furnace (EAF) grade steel.</p>

          <h2 id="producers">Major Producing Countries</h2>
          <p><strong>Australia</strong> is the world&apos;s largest iron ore exporter, producing around 900 million tonnes per year , approximately 53% of global seaborne supply. The Pilbara region of Western Australia is home to the world&apos;s most productive iron ore operations, run primarily by BHP (Mount Newman, Yandi, Jimblebar, Wheelarra), Rio Tinto (Pilbara blend, Robe Valley), and Fortescue (Cloudbreak, Christmas Creek).</p>
          <p><strong>Brazil</strong> is the second-largest exporter at approximately 370 million tonnes per year. Vale is the dominant producer, with major operations in Minas Gerais (Carajás , one of the highest-grade deposits in the world at 66% Fe) and the Northern System.</p>
          <p><strong>South Africa</strong> exports around 70 to 80 million tonnes per year from operations in the Northern Cape (Kumba Iron Ore / Sishen, Kolomela) and the Eastern Limb.</p>
          <p>Other significant producers include India, Ukraine (though exports have been severely disrupted since 2022), Canada, and Sweden (high-grade magnetite concentrate for pellet production).</p>

          <h2 id="pricing">How Iron Ore is Priced</h2>
          <p>Iron ore is primarily priced using published price indices rather than exchange-traded futures (though SGX iron ore futures are actively used for hedging). The dominant benchmark is the <strong>Platts IODEX 62% Fe CFR North China price</strong>, published daily by S&amp;P Global Platts. Fastmarkets MB publishes competing indices that are also widely used.</p>
          <p>Actual transaction prices are set as a premium or discount to the benchmark, reflecting grade, product form, origin, and market conditions. A 65% Fe lump cargo from the Pilbara might trade at a 30 to 40% premium to the 62% Fe fines benchmark; a 58% Fe Indian fines cargo might trade at a 20 to 25% discount.</p>
          <p>Transactions are typically settled on a <strong>quotational period basis</strong> , the price is the average of the relevant index over a defined period, typically the month of shipment or bill of lading date. Both CFR (seller pays freight) and FOB (buyer pays freight) basis are used, depending on the counterparties.</p>

          <h2 id="steelmaking">Iron Ore in Steelmaking</h2>
          <p>Iron ore is converted to steel through two primary processes. The <strong>Blast Furnace-Basic Oxygen Furnace (BF-BOF)</strong> route , which accounts for roughly 70% of global steel production , charges iron ore (as sinter or pellets), coke, and limestone into a blast furnace to produce liquid pig iron, which is then converted to steel in a basic oxygen furnace. This route is highly efficient at scale but is a major emitter of CO₂.</p>
          <p>The <strong>Electric Arc Furnace (EAF)</strong> route uses electricity to melt scrap steel or Direct Reduced Iron (DRI) , which is produced by reducing iron ore pellets with natural gas or hydrogen without melting them. EAF steel has a much lower carbon footprint and is increasingly favoured as the industry decarbonises. This is creating growing demand for high-grade pellet feed (65%+ Fe, low impurities) suitable for direct reduction.</p>

          <h2 id="trading">How to Buy and Sell Iron Ore on OreTrade</h2>
          <p>OreTrade is building the first fully verified, digital iron ore marketplace , connecting producers with buyers through a platform that handles listing, verification, negotiation, documentation, and settlement in one place.</p>
          <p>Producers list their cargo with full specification: grade, product form, moisture content, assay certificate, mine of origin, and available tonnage. Buyers browse verified listings with confidence that the documentation is real and the counterparty has been KYC-verified. When a deal is agreed, OreTrade&apos;s platform manages the payment terms and documentation , including the Digital Product Passport that travels with the cargo.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Ready to Trade Iron Ore?</h2>
        <p>Join the OreTrade waitlist for early access to the verified iron ore marketplace.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets/iron-ore" className="btn-secondary">View Iron Ore Market</Link>
        </div>
      </div>
    </>
  )
}
