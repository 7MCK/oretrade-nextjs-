import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'EU Critical Raw Materials Act — What It Means for Miners, Buyers and Supply Chains',
  description: 'The EU Critical Raw Materials Act sets binding 2030 targets for domestic extraction, processing and supply chain diversification. What it requires, who it affects, and what the deadlines mean in practice.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-07',
  dateModified: '2026-04-07',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/blog/eu-critical-raw-materials-act/' },
  about: { '@type': 'Thing', name: 'Critical minerals', sameAs: 'https://en.wikipedia.org/wiki/Critical_mineral_raw_materials' },
  keywords: ['EU Critical Raw Materials Act', 'CRMA 2024', 'critical minerals EU', 'strategic raw materials Europe', 'battery regulation supply chain', 'EU mining regulation', 'critical raw materials list'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the EU Critical Raw Materials Act?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EU Critical Raw Materials Act (CRMA), adopted in 2024, establishes a legal framework to secure Europe\'s supply of critical and strategic raw materials. It identifies 34 critical raw materials and 17 strategic ones, sets binding domestic benchmarks (10% extraction, 40% processing, 15% recycling of annual EU consumption by 2030), and limits reliance on any single third country to 65% for strategic materials. It applies to companies operating in the EU and to supply chains serving the EU market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which materials are on the EU strategic raw materials list?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 17 strategic raw materials under the CRMA include lithium, cobalt, nickel, manganese, graphite, silicon metal, rare earth elements for magnets (neodymium, praseodymium, dysprosium, terbium, gadolinium, samarium), boron, arsenic, titanium, tungsten and copper. These are designated strategic because they are critical to clean energy and defence and face the highest supply concentration risk, primarily from China.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the EU Critical Raw Materials Act apply to non-EU companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The CRMA directly regulates companies operating within the EU or placing products on the EU market. Non-EU mining companies are not directly bound by the regulation, but EU supply chain participants are now legally required to conduct due diligence back to the mine. This effectively extends CRMA requirements through the supply chain to non-EU suppliers who want to serve European customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the penalties for non-compliance with the CRMA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non-compliant supply chains risk losing access to EU markets. The EU Battery Regulation includes enforcement mechanisms and companies that cannot demonstrate compliant sourcing for strategic minerals may face product withdrawal from EU markets, fines from national competent authorities, and exclusion from EU procurement contracts.',
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
    { '@type': 'ListItem', position: 3, name: 'EU Critical Raw Materials Act', item: 'https://www.oretrade.com/blog/eu-critical-raw-materials-act/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/blog/eu-critical-raw-materials-act/' },
  title: 'EU Critical Raw Materials Act — What It Means for Miners and Buyers | OreTrade',
  description: 'The EU Critical Raw Materials Act sets binding targets for domestic extraction, processing and supply chain diversification. What it requires, who it affects, and what the deadlines mean in practice.',
}

export default function EuCrmaPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">Market Analysis · April 2026</p>
          <h1>EU Critical Raw Materials Act<br /><span>What It Means for Miners, Buyers and Supply Chains</span></h1>
          <p>The EU passed the Critical Raw Materials Act in 2024 and set binding targets that most European industry is not currently close to meeting. Here is what the law actually requires, which supply chains it reshapes, and what it means if you are buying or selling into the European market.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <div className="toc">
            <h4>Contents</h4>
            <ol>
              <li><a href="#what-crma-does">What the CRMA actually does</a></li>
              <li><a href="#strategic-materials">The 17 strategic materials</a></li>
              <li><a href="#2030-benchmarks">The 2030 benchmarks explained</a></li>
              <li><a href="#concentration-cap">The 65% concentration cap</a></li>
              <li><a href="#supply-chains">What it means for supply chains</a></li>
              <li><a href="#oretrade">How OreTrade fits in</a></li>
            </ol>
          </div>

          <h2 id="what-crma-does">What the CRMA Actually Does</h2>
          <p>The Critical Raw Materials Act is fundamentally a supply security law. The EU looked at its dependency on Chinese processing for rare earths, lithium and graphite, its dependency on DRC cobalt, and its near-total reliance on third countries for almost every material needed to build solar panels, wind turbines and electric vehicles, and decided to do something about it. The CRMA is the legislative response.</p>
          <p>The law works on several levels simultaneously. It creates a permitting fast track for strategic mineral projects in EU member states, requiring national authorities to complete environmental assessments and grant permits for strategic projects within 27 months. By comparison, mining permits in some EU countries have historically taken 10 to 15 years. The fast track does not override environmental standards, but it does create a legal obligation on member states to prioritise these projects and to apply streamlined procedures.</p>
          <p>It establishes a monitoring and early warning system, requiring the European Commission to track supply chain vulnerabilities and issue alerts when a member state or sector faces a material supply risk. This creates the institutional infrastructure for coordinated EU responses to supply disruptions. When China restricted rare earth exports in 2025, the EU had no equivalent coordinated response mechanism. The CRMA creates one going forward.</p>
          <p>It also mandates supply chain risk assessments for large companies in sectors that depend on strategic raw materials, including battery manufacturers, EV producers, wind turbine makers, heat pump manufacturers, and others. These companies must assess their supply chain exposure to strategic materials and report on their diversification strategies. The assessments are shared with national governments and can trigger collective action if a strategic vulnerability is identified.</p>
          <p>The CRMA does not set prices, create state purchasing entities, or directly intervene in commodity markets. It is a framework law that creates obligations, processes, incentives and targets. The hard work of actually diversifying supply chains falls to industry, with the law providing both the legal pressure to act and some of the tools to do it.</p>

          <h2 id="strategic-materials">The 17 Strategic Materials</h2>
          <p>The CRMA distinguishes between critical raw materials (34 in total) and strategic raw materials (17). The distinction matters. Critical materials are those where supply risk and economic importance are both high. Strategic materials are the subset where both criteria are met to an extreme degree, and where the clean energy and defence applications are most concentrated.</p>
          <p>The 17 strategic materials are: lithium, cobalt, nickel, manganese, graphite, silicon metal, boron, arsenic, titanium, tungsten, copper, and six rare earth elements critical for magnets, specifically neodymium, praseodymium, dysprosium, terbium, gadolinium and samarium. These are the materials that power NdFeB permanent magnets (essential for EV motors, wind turbines, industrial robots and defence systems), lithium-ion batteries, and the processing technologies of the energy transition.</p>
          <p>The common thread across the strategic list is China. China produces or processes the dominant share of every material on the strategic list. For rare earths, China controls over 85% of global processing capacity. For graphite, over 80%. For cobalt processing, around 65%. For lithium refining, around 60%. The strategic list is, in practical terms, a map of European dependencies on Chinese supply chains.</p>
          <p>The inclusion of copper is notable. Copper is a massive, mature global commodity market. But the EU is a net copper importer, and the electrification buildout is projected to roughly double European copper demand by 2035. Including copper on the strategic list signals that even well-established commodity markets are not immune from the supply security logic driving the CRMA. For copper miners and suppliers, it opens the door to EU strategic project designation and the permitting advantages that come with it.</p>
          <p>For rare earth elements, the CRMA arrived against a backdrop of deteriorating supply conditions. China&apos;s Announcement 18 export controls in April 2025 placed dysprosium, terbium, samarium and yttrium under export licensing requirements less than a year after the CRMA&apos;s adoption. The law&apos;s framers anticipated exactly this type of geopolitical disruption, and the CRMA&apos;s strategic project mechanism was designed in part to accelerate projects like LKAB&apos;s Kiruna rare earth deposit and Aclaris&apos; Swedish separation facility, which could provide EU-sourced heavy rare earth supply in the 2030s.</p>

          <h2 id="2030-benchmarks">The 2030 Benchmarks Explained</h2>
          <p>The CRMA sets three binding benchmarks for the EU&apos;s domestic position in strategic raw materials by 2030. It is worth being precise about what these benchmarks actually mean and how far the EU currently is from meeting them.</p>
          <p>The 10% extraction benchmark requires that at least 10% of the EU&apos;s annual consumption of each strategic raw material is extracted within the EU. For most materials, the EU is well below this. European rare earth extraction is essentially zero (LKAB&apos;s Kiruna project will not be in production until the early 2030s). European lithium extraction is in early development stages in Portugal, the Czech Republic and Germany, but production volumes are a fraction of what would be needed to reach 10% of consumption. Cobalt, nickel, graphite: all similar stories.</p>
          <p>The 40% processing benchmark requires that at least 40% of the EU&apos;s annual consumption is processed within the EU. This is more achievable in the near term because processing capacity can be built faster than mines can be developed, and because some processing capacity already exists in Europe. Finland&apos;s Harjavalta refinery (Norilsk Nickel) processes nickel. Germany has rare earth separation capacity. Portugal has some lithium processing. But scaling these to 40% of EU consumption requires massive additional investment.</p>
          <p>The 15% recycling benchmark requires that at least 15% of annual EU consumption of strategic materials is met from recycled sources. This is the benchmark where Europe has the most realistic near-term pathway. End-of-life EV batteries, wind turbine magnets and electronics contain significant quantities of lithium, cobalt, nickel and rare earths. The EU Battery Regulation is creating the regulatory framework for battery collection and recycling. Several European recyclers are scaling up capacity. But the volumes of end-of-life material available in 2030 will still be limited, and 15% is ambitious.</p>
          <p>The honest assessment is that the EU will not meet all three benchmarks for all 17 strategic materials by 2030. The Commission and most independent analysts acknowledge this. The benchmarks are targets that set direction and create investment incentives rather than hard floors. What matters is the trajectory: whether the right projects are being funded, whether permitting is genuinely accelerating, and whether European industry is treating supply chain diversification as a strategic priority rather than a regulatory compliance exercise.</p>

          <h2 id="concentration-cap">The 65% Concentration Cap</h2>
          <p>One of the most significant provisions in the CRMA is the limit on third-country concentration. The law states that by 2030, no more than 65% of the EU&apos;s annual consumption of any strategic raw material should come from a single third country. This is a direct response to the China dependency problem, though the law is drafted in country-neutral terms.</p>
          <p>Currently, China exceeds 65% of EU supply for multiple strategic materials by a very wide margin. For rare earth processing, China is closer to 90%. For graphite, around 80%. The 65% cap is not a ban on Chinese supply. It is a legal benchmark that requires diversification to reach a level where no single country can use supply concentration as geopolitical leverage without the EU being able to respond.</p>
          <p>Achieving the 65% cap requires a combination of domestic production growth (covered by the extraction and processing benchmarks), third country diversification through strategic partnerships with Australia, Canada, the US, Japan, South Korea, and African producers, and demand reduction through material efficiency and substitution in some applications. The EU has signed critical minerals agreements with several partner countries to structure this diversification, providing financing, technology transfer and market access commitments in exchange for preferential supply terms.</p>
          <p>For suppliers outside China, the 65% cap creates a structural demand signal. EU buyers are increasingly required not just to prefer non-Chinese supply, but to demonstrate to their own compliance functions and to regulators that their sourcing mix does not exceed the concentration threshold. Certified, documented non-Chinese supply commands a premium in this environment. Suppliers who can prove origin and meet EU traceability standards are in a better commercial position than equivalent suppliers who cannot.</p>

          <h2 id="supply-chains">What It Means for Supply Chains</h2>
          <p>For procurement teams at European manufacturers who use strategic raw materials, the CRMA has moved supply chain diversification from a best practice to a legal obligation. Companies in sectors covered by the large company risk assessment requirement (generally companies with over 250 employees and turnover above 50 million euros in affected sectors) must now formally assess their exposure and report on their diversification plans. This is not just a paper exercise. Boards and audit committees are asking about it. Institutional investors are asking about it. Customers are asking about it.</p>
          <p>The practical effect is that the old procurement approach of buying from whoever was cheapest without detailed origin verification is increasingly untenable. Even if a European manufacturer technically complies with the CRMA today, the direction of travel is clear. Tighter requirements, more specific disclosure obligations, and more demanding customers are coming. Companies that start building diversified, documented supply chains now will be in a much stronger position than those who wait until compliance is mandatory.</p>
          <p>For mining companies and producers outside the EU, the CRMA represents a significant commercial opportunity, provided you can meet the documentation standards that EU buyers now need. A lithium producer in Portugal or a rare earth project in Greenland with EU strategic project status has real competitive advantages. But so does a lithium producer in Australia or a cobalt supplier in Canada who can demonstrate OECD-compliant due diligence, mine of origin certification, and ESG disclosures that satisfy EU Battery Regulation requirements. The market signal is not just &quot;don&apos;t be Chinese.&quot; It is &quot;prove where you are from and how you operate.&quot;</p>
          <p>The interaction between the CRMA and the EU Battery Regulation is particularly important. The Battery Regulation, which came fully into force in 2024, requires battery manufacturers to conduct due diligence on cobalt, lithium, nickel, natural graphite and copper sourced for EU market batteries, covering supply chain mapping to the mine level, risk assessment, and third-party audit. This requirement reaches upstream through battery makers to cell producers to precursor chemical makers to miners. For anyone in this chain, the documentation burden is real and increasing.</p>

          <h2 id="oretrade">How OreTrade Fits In</h2>
          <p>Every element of the CRMA and Battery Regulation compliance framework points in the same direction: buyers need documented, verified supply chains from mine to delivery, and they need that documentation to be reliable, auditable and available on demand. This is exactly what OreTrade&apos;s platform is built to provide.</p>
          <p>The Digital Product Passport on every OreTrade cargo contains the mine of origin documentation, accredited assay certification, conflict-free verification aligned with OECD due diligence guidance, and ESG disclosures covering carbon intensity, water use and community impact. For European buyers working through their CRMA compliance obligations, this is not a nice-to-have feature. It is the foundational record they need to demonstrate that their sourcing meets regulatory requirements.</p>
          <p>For producers outside China who are trying to access the premium that European supply chain diversification is creating, OreTrade provides the marketplace infrastructure to connect with qualified European buyers and to present their documentation in the standardised format that procurement compliance teams can work with. The regulatory pressure is creating demand for exactly the kind of verified, traceable supply that OreTrade is built to facilitate.</p>
          <p>The CRMA is still in its early implementation phase. The fast-track permitting procedures are being transposed into national law. The large company risk assessment guidance is being finalised. The strategic project pipeline is being developed. But the direction is set, the legal framework is in place, and the commercial consequences are already visible in procurement requirements and buyer conversations happening right now. The time to build the supply chain documentation infrastructure is before it is mandatory, not after.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source CRMA-Compliant Materials on OreTrade</h2>
        <p>OreTrade provides the supply chain documentation European buyers need to demonstrate CRMA compliance. Every cargo carries a Digital Product Passport covering mine of origin, assay certification, conflict-free status and ESG disclosures. Join the waitlist.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets" className="btn-secondary">Explore Markets</Link>
        </div>
      </div>
    </>
  )
}
