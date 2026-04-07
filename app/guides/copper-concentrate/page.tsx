import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Buy Copper Concentrate — A Complete Guide for Buyers and Smelters',
  description: 'Everything buyers and smelters need to know about purchasing copper concentrate: grades, assay interpretation, TCRC negotiation, payment terms, shipping and documentation.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-07',
  dateModified: '2026-04-07',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/guides/copper-concentrate/' },
  about: { '@type': 'Thing', name: 'Copper concentrate', sameAs: 'https://en.wikipedia.org/wiki/Copper_concentrate' },
  keywords: ['buy copper concentrate', 'copper concentrate grades', 'TCRC copper', 'copper assay', 'copper concentrate supplier', 'how to buy copper', 'copper concentrate trading'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good grade of copper concentrate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Commercial copper concentrates typically contain 20 to 30% copper by dry weight, with premium concentrates reaching 35 to 40% Cu. The copper grade is the most important pricing variable, but payability also depends on the levels of gold, silver, arsenic, bismuth, lead and other penalty elements. A high arsenic concentrate may be commercially unacceptable regardless of copper grade.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are treatment and refining charges (TCRC) in copper trading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treatment charges (TC) and refining charges (RC) are the fees a smelter deducts from the value of copper in concentrate to cover the cost of processing it into refined copper. TC is expressed in US dollars per dry metric tonne of concentrate. RC is expressed in US cents per pound of payable copper. TCRC levels are negotiated annually in benchmark deals between major miners and smelters, with spot market TCRC varying based on concentrate supply and demand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who are the largest copper concentrate producers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The largest copper concentrate producers globally are BHP (Escondida, Chile), Codelco (multiple Chilean operations), Freeport McMoRan (Grasberg, Indonesia and Morenci, US), Glencore (Collahuasi, Chile and Katanga, DRC), Antofagasta Minerals (Los Pelambres, Chile) and Ivanhoe Mines (Kamoa Kakula, DRC). Chile and Peru together account for roughly 40% of global mine output.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents are required to trade copper concentrate internationally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'International copper concentrate transactions require a commercial invoice, packing list, bill of lading, certificate of origin, quality certificate from an accredited independent surveyor (weight and assay certificates from SGS, Intertek or Bureau Veritas), and a certificate of insurance. Depending on jurisdiction, customs clearance may require additional permits. OECD due diligence documentation is required for concentrates from conflict-affected or high-risk areas.',
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
    { '@type': 'ListItem', position: 3, name: 'Copper Concentrate Buyer Guide', item: 'https://www.oretrade.com/guides/copper-concentrate/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/guides/copper-concentrate/' },
  title: 'How to Buy Copper Concentrate — Complete Buyer and Smelter Guide | OreTrade',
  description: 'Everything you need to know about buying copper concentrate: grades explained, reading an assay, TCRC negotiation, payment terms, shipping, and what documentation to require.',
}

export default function CopperConcentrateGuide() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">OreTrade Guide</p>
          <h1>How to Buy Copper Concentrate<br /><span>A Complete Guide for Buyers and Smelters</span></h1>
          <p>Copper concentrate trading has its own language. TCRC, payability, penalty elements, quotational periods. If you are new to it, this guide gives you everything you need to understand a deal, read an assay, and avoid common pitfalls.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <div className="toc">
            <h4>Contents</h4>
            <ol>
              <li><a href="#what-is-concentrate">What copper concentrate actually is</a></li>
              <li><a href="#grades">Understanding concentrate grades</a></li>
              <li><a href="#assay">Reading an assay certificate</a></li>
              <li><a href="#tcrc">TCRC explained</a></li>
              <li><a href="#payability">Payability and penalty elements</a></li>
              <li><a href="#pricing">How the final price is calculated</a></li>
              <li><a href="#shipping">Shipping and logistics</a></li>
              <li><a href="#documentation">Documentation checklist</a></li>
              <li><a href="#finding-suppliers">Finding and qualifying suppliers</a></li>
            </ol>
          </div>

          <h2 id="what-is-concentrate">What Copper Concentrate Actually Is</h2>
          <p>Mining copper ore and trading copper are not the same thing. Copper ore as it comes out of the ground typically contains 0.4 to 1.5% copper by weight. The vast majority of what you are digging up is rock. To make the ore commercially useful, it goes through a process called flotation — the crushed ore is mixed with water and reagents, and air bubbles are used to selectively float the copper sulphide minerals while the waste rock sinks. What you collect from the surface is copper concentrate.</p>
          <p>Copper concentrate is a grey or black powder containing typically 20 to 35% copper, along with significant quantities of iron, sulphur and silica, and smaller amounts of precious metals (gold and silver) and trace elements. It is not a finished product. Smelters buy concentrate, process it through a series of pyrometallurgical steps to produce blister copper (98 to 99% Cu), and then refine it to copper cathode (99.99% Cu), which is the form traded on the LME and COMEX.</p>
          <p>For buyers — which means copper smelters and, in some cases, trading houses with smelter access — purchasing concentrate means purchasing a raw material that requires significant further processing investment. The pricing of concentrate reflects this: smelters charge treatment and refining fees that compensate them for the processing cost, and the miner receives the difference.</p>

          <h2 id="grades">Understanding Concentrate Grades</h2>
          <p>Concentrate grade is expressed as the percentage of copper in the dry concentrate, written as % Cu or % TCu (total copper). When a seller quotes a "28% Cu concentrate," they mean that 280kg of every tonne of concentrate (dry weight) is copper.</p>
          <p>Grades below 20% Cu are considered low grade and attract higher TCRC or may be commercially unattractive to smelters. Grades of 20 to 30% are standard commercial concentrate. Grades above 35% are high grade and command a premium, both because they are more efficient to smelt and because the higher payable copper per tonne reduces transport costs per unit of contained metal.</p>
          <p>Grade alone does not tell you whether a concentrate is desirable. A 30% Cu concentrate with 5% arsenic may be worth less commercially than a 22% Cu concentrate with negligible arsenic, because smelters face environmental and operational penalties for processing high arsenic feed. The full assay picture matters more than the headline copper number.</p>

          <h2 id="assay">Reading an Assay Certificate</h2>
          <p>Every commercial concentrate shipment comes with an assay certificate produced by an independent, accredited laboratory. The assay is the definitive record of what you are buying. Before agreeing to purchase, you should understand how to read it.</p>
          <p>The key figures in a copper concentrate assay are:</p>
          <p><strong>Total copper (TCu):</strong> The gross copper content. This is what you start with.</p>
          <p><strong>Soluble copper (SCu):</strong> The portion of copper that dissolves easily in acid. A high ratio of SCu to TCu may indicate oxide copper minerals that are less efficiently recovered in smelting.</p>
          <p><strong>Gold (Au) and silver (Ag):</strong> Expressed in grams per dry metric tonne. These are by-products for which the buyer typically pays a portion. Gold above 5 g/DMT and silver above 100 g/DMT start to become commercially significant.</p>
          <p><strong>Moisture:</strong> Concentrate is quoted and paid on a dry weight basis. If the concentrate arrives with 10% moisture, you are paying for water as well as concentrate. The moisture level matters for transport cost, handling and storage.</p>
          <p><strong>Deleterious elements:</strong> Arsenic, bismuth, antimony, lead, zinc, fluorine, mercury. Each smelter has specific tolerance levels. Elements above those thresholds attract penalty deductions from the payable value.</p>
          <p>The assay is typically conducted by independent assayers (SGS, Intertek, Bureau Veritas or equivalent) appointed jointly by buyer and seller. Where the seller's assay and buyer's assay differ, an umpire assay from a third laboratory resolves the dispute. The result of the umpire assay is normally binding.</p>

          <h2 id="tcrc">TCRC Explained</h2>
          <p>TCRC stands for treatment charges and refining charges. It is the mechanism by which the smelter's processing cost is deducted from the gross value of the copper in the concentrate.</p>
          <p>Treatment charge (TC) is expressed in US dollars per dry metric tonne of concentrate. If TC is $80/DMT and you are selling 10,000 DMT of concentrate, you pay the smelter $800,000 in treatment charges before anything else is deducted.</p>
          <p>Refining charge (RC) is expressed in US cents per pound of payable copper. If RC is 8 cents/lb and the cargo contains 2,800 tonnes of payable copper (approximately 6.2 million pounds), you pay the smelter roughly $494,000 in refining charges.</p>
          <p>TCRC levels are set by two mechanisms. Benchmark TCRC is agreed annually in negotiations between major miners and smelters, typically in the autumn, and published widely as the market reference rate. Spot TCRC is negotiated for individual cargoes and varies based on current concentrate supply and demand. In periods of tight concentrate supply (too little ore for available smelter capacity), spot TCRC falls because smelters compete for feed. In periods of ample supply, TCRC rises as miners compete for smelter slots.</p>
          <p>For buyers new to the market, the important thing to understand is that TCRC is not a fixed number you can look up. It fluctuates. The benchmark rate gives you a starting point, but spot transactions frequently deviate from it by $10 to $20/DMT in either direction depending on market conditions.</p>

          <h2 id="payability">Payability and Penalty Elements</h2>
          <p>Not all the copper in concentrate is paid for. The fraction you are paid for is called the payable copper, and it is determined by the payability formula negotiated between buyer and seller.</p>
          <p>A typical payability formula for copper is: payable copper = (TCu% minus a deduction) multiplied by the weight. The deduction is commonly 1 unit (one percentage point), meaning a 28% Cu concentrate has 27% payable copper. This deduction represents the copper lost to slag, flue dust and other processing losses that the smelter retains.</p>
          <p>For gold and silver, payability is typically expressed as a fraction: gold at 90% payable means you are paid for 90% of the assayed gold content. The smelter keeps 10% as a processing return. For minor by-products, you may receive nothing — the smelter retains all value below a certain threshold quantity.</p>
          <p>Penalty elements work in the opposite direction. If your concentrate contains arsenic above a threshold, the smelter deducts a specified amount per percentage point of excess arsenic from the payable value. Common penalty elements and their typical thresholds:</p>
          <table className="specs-table" style={{ marginTop: '20px' }}>
            <thead>
              <tr><th>Element</th><th>Typical Free Limit</th><th>Penalty</th></tr>
            </thead>
            <tbody>
              <tr><td>Arsenic (As)</td><td>0.2% to 0.5%</td><td>$1 to $3 per 0.1% excess</td></tr>
              <tr><td>Bismuth (Bi)</td><td>0.03% to 0.06%</td><td>$1 to $2 per 0.01% excess</td></tr>
              <tr><td>Antimony (Sb)</td><td>0.05% to 0.15%</td><td>$1 to $2 per 0.01% excess</td></tr>
              <tr><td>Mercury (Hg)</td><td>1 to 5 ppm</td><td>$1 to $3 per ppm excess</td></tr>
              <tr><td>Fluorine (F)</td><td>200 to 500 ppm</td><td>$0.50 to $1 per 10 ppm excess</td></tr>
            </tbody>
          </table>
          <p style={{ marginTop: '20px' }}>These are indicative ranges. Actual penalty terms are negotiated and vary significantly by smelter and market conditions. High arsenic concentrates from some regions (parts of Peru, for instance) are effectively unsellable to certain smelters regardless of grade or TCRC, because the smelter cannot process them within environmental permit limits.</p>

          <h2 id="pricing">How the Final Price Is Calculated</h2>
          <p>Working through a simplified copper concentrate pricing calculation illustrates how all the components fit together.</p>
          <p>Assume 5,000 DMT of concentrate with 26% TCu, 5 g/t gold, 120 g/t silver, LME copper at $5.50/lb, gold at $3,000/troy oz, silver at $30/troy oz. TC is $85/DMT, RC is 8.5 cents/lb, payable copper is TCu minus 1.0 unit (25%), gold payable at 90%, silver payable at 90%.</p>
          <p>Payable copper: 5,000 DMT × 25% × 2,204.6 lb/tonne = 27,557,500 lb. At $5.50/lb: $151,566,250 gross. Minus RC: 27,557,500 lb × $0.085 = $2,342,388. Minus TC: 5,000 × $85 = $425,000. Net from copper: approximately $148.8 million.</p>
          <p>Gold credit: 5,000 DMT × 5 g/t × 90% / 31.1035 g/troy oz × $3,000 = approximately $2,170,000.</p>
          <p>Silver credit: 5,000 DMT × 120 g/t × 90% / 31.1035 × $30 = approximately $520,000.</p>
          <p>Total estimated value: approximately $151.5 million, or roughly $30,300 per DMT of concentrate.</p>
          <p>Price settlements typically use an average LME/COMEX price over a quotational period around the bill of lading date, commonly the month of shipment (M) or M+1 or M+2, allowing the settlement price to reflect market conditions close to when the material is actually processed.</p>

          <h2 id="shipping">Shipping and Logistics</h2>
          <p>Copper concentrate is typically shipped in bulk in Handysize or Supramax vessels (30,000 to 60,000 DWT), though smaller parcels may ship in containers as bagged concentrate. The concentrate must be kept dry during transit to prevent moisture gain, which increases weight and can cause cargo to liquify if moisture exceeds the transportable moisture limit (TML) — a recognised shipping hazard for fine particulate concentrates.</p>
          <p>Typical delivery terms are CIF (cost, insurance, freight) to the smelter port, or FOB at the loading port with the buyer arranging freight. CFR (cost and freight, buyer arranges insurance) is also common. For larger spot transactions, the freight market for concentrate runs from South American ports (Callao, Antofagasta, Ilo) to Asian smelter ports (Fangcheng, Yingkou, Qingdao) or European smelter ports (Hamburg, Rotterdam, Huelva).</p>
          <p>Port charges, weighing, sampling and assaying at the discharge port are typically split between buyer and seller or borne by the seller up to delivery. The joint sampling protocol — how the cargo is sampled at the port to establish the final assay — is agreed in the contract and is commercially important because the final settlement is based on it.</p>

          <h2 id="documentation">Documentation Checklist</h2>
          <p>A complete copper concentrate transaction requires:</p>
          <p><strong>Commercial invoice</strong> — issued by seller, detailing quantity, grade, price basis and total value.</p>
          <p><strong>Packing list</strong> — relevant for containerised shipments.</p>
          <p><strong>Bill of lading</strong> — issued by the carrier, serves as title document and proof of shipment.</p>
          <p><strong>Certificate of origin</strong> — confirming where the ore was mined.</p>
          <p><strong>Weight certificate</strong> — from an accredited independent weigher at the load port.</p>
          <p><strong>Sampling and assay certificate</strong> — from an accredited independent assayer (load port), covering TCu, moisture, precious metals and deleterious elements.</p>
          <p><strong>Discharge port weight and assay certificate</strong> — from an independent assayer at the smelter, used for final settlement.</p>
          <p><strong>Certificate of insurance</strong> — marine cargo insurance, typically covering 110% of CIF value.</p>
          <p><strong>OECD due diligence documentation</strong> (if required) — for concentrate from conflict-affected or high risk areas including parts of the DRC, this is mandatory for buyers in EU regulated supply chains.</p>
          <p><strong>Export and import licences</strong> — required in certain jurisdictions.</p>

          <h2 id="finding-suppliers">Finding and Qualifying Suppliers</h2>
          <p>The traditional route to finding copper concentrate is through established trading house relationships or direct producer contacts developed over years in the industry. For buyers without those relationships, the options have historically been limited. Market information is opaque, pricing is entirely bilateral, and entry without introductions is difficult.</p>
          <p>OreTrade is changing this. The platform lists copper concentrate from verified producers with full documentation requirements built in — assay certificates, origin documentation, and OECD compliance paperwork are required for every listing before it goes live. Buyers can access pricing transparency and documentation standards without needing an established trading house intermediary.</p>
          <p>When qualifying any new copper concentrate supplier, regardless of how you find them, the minimum requirements are: independent assay of any trial shipment, mine of origin verification (not just country of origin), and confirmation that the producer's operation meets applicable environmental and social governance standards for your supply chain compliance requirements. Documentation that looks complete at first glance sometimes conceals gaps that create compliance problems later. Build the verification process in from the start.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source Copper Concentrate on OreTrade</h2>
        <p>Verified producers. Full assay documentation. TCRC transparency on every listing. Join the waitlist for early access.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets/copper" className="btn-secondary">Copper Market</Link>
        </div>
      </div>
    </>
  )
}
