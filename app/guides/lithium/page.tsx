import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lithium Mining Explained — From Brine to Battery 2026',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/guides/lithium/' },
  about: { '@type': 'Thing', name: 'Lithium', sameAs: 'https://en.wikipedia.org/wiki/Lithium' },
  keywords: ['lithium mining guide', 'lithium carbonate vs hydroxide', 'lithium brine vs spodumene', 'lithium price 2026', 'buy lithium carbonate', 'battery grade lithium'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between lithium carbonate and lithium hydroxide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lithium carbonate (Li2CO3) and lithium hydroxide (LiOH) are the two primary battery-grade lithium products. Lithium carbonate is used in LFP (lithium iron phosphate) batteries common in lower-cost EVs and energy storage. Lithium hydroxide is required for NMC and NCA batteries used in higher-energy-density EV applications. Hydroxide commands a price premium. Both require 99.5%+ purity for battery use.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between brine and hard rock lithium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brine lithium is extracted by pumping lithium-rich underground brine into evaporation ponds, primarily in Chile, Argentina and Bolivia (the Lithium Triangle). It is lower cost to produce but slow — 12-18 months per cycle. Hard rock lithium (primarily spodumene, mined in Australia) is faster to produce and has a smaller environmental footprint per tonne, but higher operating costs. Australia is the world\'s largest lithium producer by volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the current lithium price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lithium carbonate (battery grade, 99.5% min, CIF China) traded at approximately $10,000-$14,000 per metric tonne in early 2026, well below the peak of over $80,000/tonne seen in late 2022. Prices collapsed due to oversupply from Australian spodumene projects and reduced Chinese EV demand growth. Lithium hydroxide monohydrate traded at a premium over carbonate, typically $1,000-$3,000/tonne higher.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who are the major lithium producing countries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Australia is the world's largest lithium producer by volume, mining spodumene hard rock primarily at Pilgangoora, Greenbushes and Wodgina. Chile is the second largest, extracting from Atacama brine. China is third and also dominates lithium refining and processing globally. Argentina, Zimbabwe and Portugal are growing producers. The 'Lithium Triangle' of Chile, Argentina and Bolivia holds over 50% of global lithium reserves.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.oretrade.com/guides/' },
    { '@type': 'ListItem', position: 3, name: 'Lithium Guide', item: 'https://www.oretrade.com/guides/lithium/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/guides/lithium/' },
  title: 'Lithium Mining Process Explained | From Brine to Battery , OreTrade',
  description: 'How lithium is mined from brine and hard rock, processed into carbonate and hydroxide, graded for battery use, and traded globally. Complete guide to lithium supply chains.',
}

export default function LithiumGuide() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">OreTrade Guide</p>
          <h1>Lithium Mining Explained:<br /><span>From Brine to Battery</span></h1>
          <p>Lithium is the foundational material of the energy transition. This guide explains how it is extracted, processed, graded, and traded , from the salt flats of Chile to the battery cell factories of Asia and Europe.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <div className="toc">
            <h4>Contents</h4>
            <ol>
              <li><a href="#why-lithium">Why lithium matters</a></li>
              <li><a href="#brine">Brine extraction (the Lithium Triangle)</a></li>
              <li><a href="#hard-rock">Hard rock mining (spodumene)</a></li>
              <li><a href="#processing">Processing: carbonate vs hydroxide</a></li>
              <li><a href="#battery-grade">Battery-grade lithium specifications</a></li>
              <li><a href="#producers">Major producing countries</a></li>
              <li><a href="#demand">Demand drivers and market outlook</a></li>
              <li><a href="#trading">How lithium is traded</a></li>
            </ol>
          </div>

          <h2 id="why-lithium">Why Lithium Matters</h2>
          <p>Lithium is the lightest metal and the lightest solid element. Its unique electrochemical properties make it the ideal anode and electrolyte material for rechargeable batteries , and rechargeable batteries are the enabling technology of the electric vehicle revolution, grid-scale energy storage, and the broader decarbonisation of the global economy.</p>
          <p>Without lithium, there are no lithium-ion batteries. Without lithium-ion batteries, there are no affordable electric vehicles at scale, no viable grid storage for intermittent renewable energy, and no path to net zero by 2050. This is why lithium has been designated a critical mineral by the EU, US, UK, Australia, and Canada , and why demand projections show 5 to 10x growth by 2030 from 2023 levels.</p>
          <p>Yet the lithium supply chain is highly concentrated, technically complex, and in many cases poorly understood by the buyers who depend on it. This guide explains how lithium actually gets from the ground to a battery cell.</p>

          <h2 id="brine">Brine Extraction: The Lithium Triangle</h2>
          <p>Approximately 60% of the world&apos;s known lithium resources exist in underground brine deposits , lithium-rich salt water found beneath salt flats (known as salares) in the Andes mountains of South America. The three countries that host the majority of these deposits , Chile, Argentina, and Bolivia , are collectively known as the &quot;Lithium Triangle.&quot;</p>
          <p>The brine extraction process begins by pumping lithium-bearing brine from underground aquifers to the surface, where it is channelled into a series of large evaporation ponds. Over a period of 12 to 24 months, solar evaporation concentrates the lithium content from typically 0.15 to 0.20% Li to 6% Li or more, while potassium, magnesium, and other salts are progressively removed.</p>
          <p>The concentrated lithium brine is then processed at a chemical plant to remove remaining impurities and convert it into lithium carbonate (Li₂CO₃) or lithium hydroxide (LiOH). Brine extraction is relatively low-cost , production costs of $3,000 to 5,000 per tonne of LCE (lithium carbonate equivalent) are typical for the best operations , but it is highly water-intensive and subject to permitting challenges.</p>
          <p><strong>Atacama, Chile</strong>: The Atacama salt flat hosts the world&apos;s largest and highest-grade lithium brine deposit. SQM and Albemarle operate here under concession agreements with the Chilean state (CORFO). The Atacama produces roughly 35 to 40% of global lithium supply.</p>
          <p><strong>Argentina (Salta, Jujuy, Catamarca)</strong>: Argentina is rapidly expanding its lithium brine production, with multiple new projects under development including Livent&apos;s Fenix operation, Allkem&apos;s Olaroz, and dozens of projects in the pipeline. Argentina offers more permissive regulations than Chile, attracting significant foreign investment.</p>

          <h2 id="hard-rock">Hard Rock Mining: Spodumene</h2>
          <p>Hard rock lithium mining accounts for approximately 40% of current global lithium production and is growing rapidly, primarily in Australia. The primary lithium-bearing mineral in hard rock deposits is spodumene , a lithium aluminium pyroxene mineral containing 3 to 7% Li₂O when pure.</p>
          <p>Australia&apos;s Pilbara region hosts the world&apos;s largest hard rock lithium operations, centred on the Greenbushes mine in Western Australia (operated by Talison Lithium, owned by Albemarle and Tianqi Lithium). Other significant Australian operations include Pilgangoora (Pilbara Minerals), Mount Holland (Covalent Lithium), and Kathleen Valley (Liontown Resources).</p>
          <p>The hard rock mining process is conventional: drill, blast, crush, and beneficiate. Spodumene ore containing 1.5 to 2.5% Li is crushed and processed through dense medium separation and flotation to produce spodumene concentrate , typically 5.5 to 6.0% Li₂O , which is the primary traded product from hard rock operations.</p>
          <p>Spodumene concentrate is then converted to lithium chemicals at a downstream processing facility. This conversion is the most technically challenging and capital-intensive step in the hard rock supply chain , requiring either a sulphate-roast acid leach process or a pressurised alkaline process to convert the spodumene into lithium carbonate or hydroxide.</p>

          <h2 id="processing">Processing: Carbonate vs Hydroxide</h2>
          <p>The two primary commercial lithium chemicals are <strong>lithium carbonate (Li₂CO₃)</strong> and <strong>lithium hydroxide monohydrate (LiOH·H₂O)</strong>. Both are white powder products that serve as the feedstock for lithium battery cathode materials, but they are not interchangeable , different battery chemistries require different forms.</p>
          <p><strong>Lithium carbonate</strong> is the traditional, more established product and is still widely used in LFP (lithium iron phosphate) battery cathode production , the dominant chemistry in stationary storage and increasingly in entry-level EVs. It is also easier to produce from brine and was historically the primary traded form of lithium chemicals. Lithium carbonate prices are typically quoted in USD/tonne.</p>
          <p><strong>Lithium hydroxide</strong> is required for the production of NMC (nickel manganese cobalt) and NCA (nickel cobalt aluminium) cathode materials , the high-energy-density chemistries used in premium EVs and consumer electronics. The shift toward higher-nickel NMC chemistries (NMC 811, NMC 90+) is increasing the market share of lithium hydroxide relative to carbonate. Hydroxide commands a modest premium over carbonate.</p>

          <h2 id="battery-grade">Battery-Grade Lithium Specifications</h2>
          <p>Not all lithium carbonate or hydroxide is suitable for battery production. Battery-grade lithium must meet strict purity specifications , typically 99.5% minimum purity for Li₂CO₃ and 56.5% minimum LiOH content for monohydrate. But beyond headline purity, trace impurities are the critical quality parameter.</p>
          <p>Battery manufacturers set strict limits on impurities including calcium (Ca), magnesium (Mg), sodium (Na), potassium (K), sulfate (SO₄), chloride (Cl), iron (Fe), and heavy metals. Exceeding any impurity threshold can compromise battery performance, cycle life, or safety. The most stringent requirements come from NMC battery producers, who may specify impurity limits in the parts-per-million range.</p>
          <p>Technical-grade lithium (lower purity, used in ceramics, glass, and lubricant greases) typically trades at a significant discount to battery grade. The premium for verified, documented battery-grade material from a known supplier with a clean supply chain can be substantial , and is one of the reasons OreTrade&apos;s Digital Product Passport is particularly valuable in the lithium market.</p>

          <h2 id="producers">Major Producing Countries</h2>
          <p><strong>Australia</strong> is currently the world&apos;s largest lithium producer by volume, producing approximately 86,000 tonnes of LCE in 2023, primarily as spodumene concentrate. Greenbushes (Talison) is by far the largest single mine.</p>
          <p><strong>Chile</strong> is the second-largest producer at approximately 44,000 tonnes LCE, with all production coming from brine operations in the Atacama salt flat. In 2023, Chile announced a policy of nationalising new lithium projects through state company CODELCO, creating some investment uncertainty.</p>
          <p><strong>China</strong> is a significant producer (approximately 34,000 tonnes LCE from lepidolite and spodumene deposits in Jiangxi and Sichuan provinces) and the world&apos;s dominant processor , converting the majority of global spodumene concentrate into lithium chemicals. Chinese processing capacity and cost advantages have shaped the global lithium market.</p>
          <p><strong>Argentina</strong> is growing rapidly from a low base and is projected to become a top-three producer by 2027, driven by multiple new brine projects.</p>

          <h2 id="demand">Demand Drivers and Market Outlook</h2>
          <p>Lithium demand is almost entirely driven by batteries , approximately 85% of lithium end-use. The remaining 15% is used in ceramics and glass (primarily for coefficient of thermal expansion control), lubricating greases (lithium stearate), pharmaceuticals (lithium carbonate as a mood stabiliser), and aluminium alloys.</p>
          <p>Battery demand is in turn driven overwhelmingly by electric vehicles. Global EV sales exceeded 14 million units in 2023 and are projected to reach 45 to 50 million by 2030. Each EV requires 5 to 10 kg of lithium carbonate equivalent (LCE) depending on battery chemistry and size. Grid-scale energy storage is an additional and growing demand driver, projected to represent 20 to 30% of battery demand by 2030.</p>
          <p>The lithium market has been characterised by extreme price volatility. Prices surged from below $10,000/tonne LCE in 2020 to over $80,000/tonne in late 2022, driven by demand shock and supply chain disruption , then collapsed back to below $15,000/tonne in 2024 as new supply came online faster than demand grew. This volatility creates challenges and opportunities for both producers and buyers , and underscores the importance of transparent, documented pricing in every transaction.</p>

          <h2 id="trading">How Lithium is Traded</h2>
          <p>Unlike base metals, lithium does not trade on an exchange. There is no LME lithium contract (though the CME and COMEX have introduced lithium hydroxide futures with limited liquidity). The vast majority of lithium is traded through bilateral long-term contracts between producers and battery manufacturers or cathode producers , often 3 to 5 year agreements with pricing linked to spot indices published by Fastmarkets, Benchmark Mineral Intelligence, or Shanghai Metals Market.</p>
          <p>Spot market transactions occur for surplus material, shorter-term needs, and smaller buyers who cannot access long-term contracts with the major producers. This spot market is relatively illiquid and relationship-dependent , exactly the kind of friction that OreTrade&apos;s platform is designed to eliminate.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source Lithium on OreTrade</h2>
        <p>Join the OreTrade waitlist for early access to verified lithium and critical mineral supply.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets/critical-minerals" className="btn-secondary">View Critical Minerals Market</Link>
        </div>
      </div>
    </>
  )
}
