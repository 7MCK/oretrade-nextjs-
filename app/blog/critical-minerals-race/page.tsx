import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Critical Minerals Race — Why Every Major Economy Is Scrambling for the Same Materials',
  description: 'Lithium, cobalt, nickel, rare earths and graphite are the materials the energy transition runs on. Every major economy wants them. Most of the supply is in places that complicate that.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-07',
  dateModified: '2026-04-07',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/blog/critical-minerals-race/' },
  about: { '@type': 'Thing', name: 'Critical minerals', sameAs: 'https://en.wikipedia.org/wiki/Critical_mineral_raw_materials' },
  keywords: ['critical minerals 2026', 'lithium cobalt supply chain', 'rare earth supply shortage', 'critical minerals race', 'energy transition materials', 'battery minerals supply chain', 'critical minerals investment'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are critical minerals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Critical minerals are natural resources that are essential to modern technology and economic activity, where supply is at risk of disruption due to geographic concentration, geopolitical factors, or limited production capacity. The EU, US and most developed economies maintain official lists of critical raw materials including lithium, cobalt, nickel, graphite, rare earth elements, and others essential to clean energy, defence and digital technology.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is China dominant in critical mineral supply chains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "China dominates critical mineral supply chains for two reasons: geological endowment (China has large deposits of rare earths, graphite and other materials) and decades of deliberate investment in processing capacity. China processes roughly 60% of the world's lithium, 65% of cobalt, 70% of graphite, and over 85% of rare earths. This processing dominance exists even for minerals mined elsewhere — ore extracted in the DRC, Australia or Chile often travels to China for refining before being sold back to Western manufacturers.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the critical minerals shortage risk for electric vehicles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each EV battery pack requires approximately 8 kg of lithium, 13 kg of cobalt (for NMC chemistry), 35 kg of nickel, and 50 kg of graphite. Scaling EV production to replace the global fleet of combustion vehicles would require multiples of current critical mineral production capacity. The IEA estimates that nickel demand for EVs alone could increase 14 times by 2040 under a net zero scenario, while cobalt demand could increase 21 times. Neither growth rate is currently supported by committed mining investment.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.oretrade.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'The Critical Minerals Race', item: 'https://www.oretrade.com/blog/critical-minerals-race/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/blog/critical-minerals-race/' },
  title: 'The Critical Minerals Race — Lithium, Cobalt, Nickel and Rare Earths in 2026 | OreTrade',
  description: 'Every major economy is competing for the same critical minerals to power the energy transition and defence industries. This is where the race stands in 2026 and what it means for buyers.',
}

export default function CriticalMineralsRacePage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">Market Analysis · April 2026</p>
          <h1>The Critical Minerals Race<br /><span>Why Every Major Economy Is Scrambling for the Same Materials</span></h1>
          <p>The energy transition has a materials problem. Solar panels, wind turbines, EV batteries, and the electronics they connect to all depend on a specific set of metals and minerals. Most of that supply sits in a small number of countries, and the competition to secure it is intensifying.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <div className="toc">
            <h4>Contents</h4>
            <ol>
              <li><a href="#what-are-critical-minerals">What makes a mineral critical</a></li>
              <li><a href="#the-materials">The materials that matter most</a></li>
              <li><a href="#china-dominance">The China dominance problem</a></li>
              <li><a href="#who-is-racing">Who is racing and what are they doing</a></li>
              <li><a href="#africa">Africa and the supply question</a></li>
              <li><a href="#what-buyers-need">What buyers actually need right now</a></li>
            </ol>
          </div>

          <h2 id="what-are-critical-minerals">What Makes a Mineral Critical</h2>
          <p>The label "critical mineral" gets used loosely, but it has a specific meaning. A mineral is considered critical when two conditions are met: it is economically significant, meaning it is essential to modern industry or technology, and its supply is at risk, meaning production or processing is concentrated enough that disruption is a realistic possibility rather than a theoretical one.</p>
          <p>Governments maintain official critical minerals lists. The EU Critical Raw Materials Act identifies 34 critical raw materials and 17 strategic ones. The US Geological Survey list runs to 50 minerals. Both lists include lithium, cobalt, nickel, graphite, rare earth elements, and a range of less prominent materials including manganese, titanium and gallium. The lists differ slightly in emphasis but converge on the same core set of energy transition and defence materials.</p>
          <p>The reason so much attention has fallen on these materials in recent years is not that they are newly discovered or newly important. It is that the scale of demand projected under any credible net zero scenario is so much larger than current production that a genuine supply gap is forming. Mine development takes 10 to 17 years from discovery to first production. Investment decisions being made today will determine whether supply in 2035 and 2040 can meet demand. The evidence right now suggests it cannot, without significant additional investment that has not yet been committed.</p>

          <h2 id="the-materials">The Materials That Matter Most</h2>
          <p><strong>Lithium</strong> is the lightest metal and the active material in almost every EV battery chemistry currently in commercial production. Global lithium production is concentrated in the "Lithium Triangle" — Chile, Argentina and Bolivia — which holds more than half the world's known reserves in brine deposits, and in hard rock deposits in Australia. China processes the majority of lithium into battery grade material regardless of where the ore is mined. Lithium prices collapsed sharply in 2023 and 2024 after a supply glut, but most analysts expect the medium term demand trajectory to reassert itself as EV adoption scales.</p>
          <p><strong>Cobalt</strong> is the element that makes lithium ion batteries thermally stable and long lasting. The problem with cobalt is geography: roughly 70% of global production comes from the Democratic Republic of Congo, a country with persistent political instability, documented artisanal mining operations with serious human rights concerns, and significant Chinese investment in the mining sector. EV manufacturers have been actively engineering cobalt out of battery chemistries (LFP batteries use no cobalt at all), but NMC and NCA chemistries still depend on it for performance.</p>
          <p><strong>Nickel</strong> is in the interesting position of being both a well established industrial metal (stainless steel) and an emerging critical material (EV battery cathodes). Indonesia dominates global nickel production, accounting for over 50% of supply and growing. Chinese investment in Indonesian nickel processing has created significant capacity for battery grade nickel sulphate. The challenge for Western buyers is that much of the accessible, affordable nickel supply has Chinese ownership or processing dependency built into it.</p>
          <p><strong>Graphite</strong> is used in the anode of almost every lithium ion battery. China produces roughly 80% of the world's natural graphite and has a dominant position in synthetic graphite as well. Unlike many other critical minerals, graphite is not particularly rare — there are large deposits globally. The concentration of supply in China is a product of cost and historical investment rather than geology. But changing that takes time and capital that Western investors have not committed at sufficient scale.</p>
          <p><strong>Rare earth elements</strong> are the thread running through defence, clean energy and advanced electronics. Neodymium and praseodymium power the permanent magnets in EV motors and wind turbines. Dysprosium and terbium make those magnets work at high temperatures. Europium and terbium give your screen its colours. Yttrium and cerium appear in catalysts, ceramics and coatings. China controls roughly 85% of processing capacity for the full rare earth supply chain. The export controls imposed in April 2025 on dysprosium, terbium, samarium and yttrium have made the risk of this concentration concrete rather than theoretical.</p>

          <h2 id="china-dominance">The China Dominance Problem</h2>
          <p>The most important thing to understand about critical mineral supply chains is that China's dominance is not primarily about where these minerals are in the ground. It is about where they are processed. The DRC has cobalt. Australia has lithium and rare earths. Chile has copper and lithium. Indonesia has nickel. But in each case, significant portions of the ore travel to China for refining, separation and processing into the intermediate or finished materials that manufacturers actually need.</p>
          <p>This processing dominance took decades to build. China's government identified critical minerals as a strategic priority in the 1980s and invested consistently in the industrial capacity to process them. Rare earth processing is complex, expensive and environmentally demanding. China absorbed the costs. Western countries largely did not, because cheap Chinese processed materials made domestic investment uneconomic. The result is the dependency that Western governments are now scrambling to reverse.</p>
          <p>Reversing it is genuinely hard. Processing facilities take years to build and require specialised knowledge. The workforce with experience in rare earth separation or lithium hydroxide refining is concentrated in China. Environmental permitting for processing facilities involving acids and radioactive byproducts is slow in Western jurisdictions. The capital costs are high relative to the current price of many critical minerals, which have been depressed by Chinese overproduction designed to keep competitors uneconomic.</p>
          <p>None of this means it cannot be done. It means it takes longer and costs more than the urgency of the supply situation suggests it should. The gap between the speed at which demand is growing and the speed at which non-Chinese supply capacity can come online is the defining tension in the critical minerals market right now.</p>

          <h2 id="who-is-racing">Who Is Racing and What Are They Doing</h2>
          <p>The response to the critical minerals challenge has not been passive. Governments and companies are investing at a scale not seen since the Cold War era mobilisation of strategic materials.</p>
          <p>The US Inflation Reduction Act of 2022 was the largest single policy intervention, providing billions in tax credits and grants for domestic critical mineral mining, processing and battery manufacturing. The law explicitly links EV tax credits to domestic content requirements for battery materials, creating a commercial incentive for supply chains to shift away from China. The DoD has separately committed hundreds of millions to rare earth processing projects through contracts with Lynas, MP Materials and Energy Fuels.</p>
          <p>The EU Critical Raw Materials Act, passed in 2024, sets binding targets: by 2030, the EU must extract 10% of its critical raw material needs domestically, process 40% domestically, and ensure that no more than 65% of any single critical material comes from one third country. These are ambitious targets that the EU is not currently close to meeting, but the legal framework creates commercial certainty for investment that was previously lacking.</p>
          <p>Australia has positioned itself as the natural partner for Western supply chain diversification. Lynas Rare Earths, the only significant rare earth producer outside China, is Australian. Pilbara Minerals, Albemarle and Allkem (now Arcadium Lithium) are building lithium production capacity in Western Australia at scale. The Australian government has signed critical minerals agreements with the US, UK, Japan, South Korea and the EU, creating a web of supply chain partnerships intended to channel Australian production towards allied country manufacturers.</p>
          <p>Japan and South Korea, both highly import dependent for critical minerals, have been pursuing bilateral deals aggressively. Japan's JOGMEC (Japan Oil, Gas and Metals National Corporation) has invested in projects across Africa, Australia and Central Asia. South Korean battery manufacturers LGES, Samsung SDI and SK Innovation have signed long term supply agreements with miners in Australia, Chile and Canada.</p>

          <h2 id="africa">Africa and the Supply Question</h2>
          <p>No discussion of critical minerals is complete without addressing Africa, which holds an extraordinary share of the world's mineral resources. The DRC has roughly half the world's cobalt reserves and significant deposits of lithium, coltan and other materials. South Africa dominates platinum group metals. Zimbabwe has large lithium deposits. Namibia, Tanzania and other countries are developing rare earth projects. Morocco has the world's largest phosphate reserves.</p>
          <p>The challenge with African supply is not geology. It is governance, infrastructure, processing capacity and investment environment. Projects that take five years to permit and build in Australia can take fifteen years in parts of Africa. Political risk is real, not hypothetical, in several key mining jurisdictions. And Chinese investment, which has been flowing into African mining for decades, means that much African production is already committed to Chinese supply chains or processed through Chinese facilities.</p>
          <p>Western governments are trying to compete, but they are starting late and with fewer established relationships. The US African Growth Initiative, EU Global Gateway and UK partnerships with African mining nations all represent genuine efforts to redirect some African mineral production towards non-Chinese supply chains. Whether they succeed depends heavily on whether they can offer African governments something compelling in return for supply commitments — financing, infrastructure, technology transfer, processing investment.</p>
          <p>The honest answer is that African supply will be part of the solution to Western critical mineral needs, but not quickly enough to solve the immediate supply gap. The most accessible incremental supply in the near term is in Australia, Canada and friendly jurisdictions in Latin America.</p>

          <h2 id="what-buyers-need">What Buyers Actually Need Right Now</h2>
          <p>For procurement teams and supply chain managers at manufacturers who depend on critical minerals, the strategic picture is clear. The operational reality is more complicated.</p>
          <p>The materials you need are available. Lithium is not running out. Cobalt is mined every day. Nickel production has never been higher. Rare earths exist in deposits on every inhabited continent. The problem is getting them from the ground to your facility in a form you can use, at a price you can plan around, from a source you can document and defend to your board, your customers and your regulators.</p>
          <p>That last requirement is increasingly demanding. EU Battery Regulation compliance requires documented supply chains back to the mine. US content requirements for tax credits require origin documentation. ESG reporting frameworks require disclosure of where your materials come from and how they were extracted. The era of buying commodity at spot from whoever was cheapest with no questions asked is over.</p>
          <p>What buyers need is not just supply. It is verified supply, with documented provenance, that can survive regulatory scrutiny and support the claims being made to end customers about ethical sourcing and supply chain integrity. That is a much higher bar than the market has historically been asked to meet. It is also, increasingly, the price of entry to markets that matter.</p>
          <p>OreTrade's platform is designed around this reality. Every listing carries verified mine of origin documentation, assay certification, and a Digital Product Passport that provides the chain of custody record buyers now need. In a market where provenance has become a commercial asset rather than an administrative formality, that matters.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source Critical Minerals with Full Provenance Documentation</h2>
        <p>OreTrade connects qualified buyers with verified producers of lithium, cobalt, nickel, rare earths and other critical materials. Join the waitlist for early access.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets/critical-minerals" className="btn-secondary">Critical Minerals Markets</Link>
        </div>
      </div>
    </>
  )
}
