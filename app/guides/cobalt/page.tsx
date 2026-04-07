import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cobalt Explained — From the DRC to Your EV Battery',
  description: 'Complete guide to cobalt: where it is mined, how it gets into EV batteries, why the DRC dominates supply, what responsible sourcing requires, and how to buy cobalt compliantly.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-07',
  dateModified: '2026-04-07',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/guides/cobalt/' },
  about: { '@type': 'Thing', name: 'Cobalt', sameAs: 'https://en.wikipedia.org/wiki/Cobalt' },
  keywords: ['cobalt guide', 'cobalt mining DRC', 'cobalt battery supply chain', 'responsible cobalt sourcing', 'cobalt price 2026', 'cobalt sulphate buyer', 'artisanal cobalt mining'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is cobalt mined?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Approximately 70% of global cobalt production comes from the Democratic Republic of Congo, primarily from the Katanga copper-cobalt belt. Major industrial producers in the DRC include Glencore (Katanga Mining), CMOC and Ivanhoe Mines. Around 15 to 20% of DRC production comes from artisanal small-scale mining associated with child labour and unsafe working conditions, driving demand for responsible sourcing verification.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is cobalt used for in EV batteries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cobalt is used as a cathode material in NMC (nickel manganese cobalt) and NCA (nickel cobalt aluminium) lithium-ion batteries. It improves thermal stability, energy density and cycle life. NMC 811 uses significantly less cobalt than older NMC 111 chemistries. LFP (lithium iron phosphate) batteries contain no cobalt. Battery pack cobalt content ranges from approximately 5 kg (NMC 811) to 15 kg (NMC 532) depending on chemistry.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cobalt price in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cobalt traded in the range of $24,000 to $28,000 per metric tonne in early 2026, well below the 2022 peak above $80,000 per tonne. Lower cobalt content in newer battery chemistries and LFP adoption has reduced demand growth expectations, keeping prices subdued despite long-term demand projections remaining strong.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you source cobalt responsibly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Responsible cobalt sourcing requires OECD Due Diligence Guidance compliance, covering risk assessment, supply chain mapping to the mine level, independent third-party audit and transparent reporting. The Responsible Minerals Initiative Cobalt Standard and the Cobalt Institute CIRAF framework provide certification routes. EU Battery Regulation requires documented due diligence for cobalt in battery supply chains from February 2025.',
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
    { '@type': 'ListItem', position: 3, name: 'Cobalt Guide', item: 'https://www.oretrade.com/guides/cobalt/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/guides/cobalt/' },
  title: 'Cobalt Explained — Mining, Battery Supply Chain and Sourcing Guide | OreTrade',
  description: 'Complete guide to cobalt: where it is mined, how it gets into EV batteries, why the DRC dominates supply, what responsible sourcing requires, and how to buy cobalt compliantly.',
}

export default function CobaltGuide() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">OreTrade Guide</p>
          <h1>Cobalt Explained<br /><span>From the DRC to Your EV Battery</span></h1>
          <p>Cobalt is one of the most commercially important and ethically complicated materials in modern industry. It is indispensable in high-performance batteries, concentrated in one of the world&apos;s most difficult operating environments, and subject to some of the most demanding sourcing requirements of any commodity. This guide covers everything you need to understand it.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <div className="toc">
            <h4>Contents</h4>
            <ol>
              <li><a href="#what-is-cobalt">What cobalt is and where it is found</a></li>
              <li><a href="#drc">The DRC and the concentration problem</a></li>
              <li><a href="#asm">Artisanal mining and responsible sourcing</a></li>
              <li><a href="#batteries">How cobalt gets into batteries</a></li>
              <li><a href="#chemistry">Battery chemistry evolution and cobalt demand</a></li>
              <li><a href="#price">The cobalt price in 2026</a></li>
              <li><a href="#buying">Buying cobalt compliantly</a></li>
            </ol>
          </div>

          <h2 id="what-is-cobalt">What Cobalt Is and Where It Is Found</h2>
          <p>Cobalt is a hard, lustrous grey metal with atomic number 27. It is named from the German word for goblin — medieval miners called it kobold because the arsenic-bearing cobalt ores were thought to be cursed, releasing toxic fumes when smelted. Today it is anything but cursed commercially. Cobalt is one of the most sought after battery materials on earth, an essential input for the cathode chemistries that power most high-performance electric vehicles and portable electronics.</p>
          <p>Cobalt rarely occurs in pure deposits. Almost all of it is mined as a byproduct of copper and nickel extraction. The Katanga copper-cobalt belt in the southeastern Democratic Republic of Congo is the single most important source: the heterogenite ores found there contain copper and cobalt in unusually high concentrations, making them economically extraordinary. Outside the DRC, cobalt is found in nickel sulphide deposits in Canada, Russia and Australia, in laterite nickel deposits in the Philippines, and in seafloor manganese nodules at depths that are not yet commercially exploited.</p>
          <p>Global cobalt mine production is approximately 230,000 to 250,000 tonnes per year. The DRC accounts for roughly 70% of this, with no other country accounting for more than 5 to 7% of production. This level of geographic concentration is unusual even by the standards of critical minerals, most of which have at least some production diversity across multiple continents. For cobalt, the DRC is effectively the market.</p>
          <p>China does not produce significant quantities of cobalt ore, but it dominates the processing step. Roughly 65% of global cobalt refining capacity is in China, meaning that DRC ore frequently travels to China for processing into cobalt sulphate or cobalt metal before being sold to battery makers. For European and American manufacturers trying to reduce their China dependency, cobalt supply chains require attention at both the extraction and processing levels.</p>

          <h2 id="drc">The DRC and the Concentration Problem</h2>
          <p>The Democratic Republic of Congo is one of the richest countries on earth by mineral endowment and one of the poorest by any measure of human welfare. The Katanga region, now divided into the provinces of Haut-Katanga and Lualaba, sits on a copper-cobalt deposit of extraordinary richness: the Central African Copperbelt extends from the DRC into Zambia and contains mineral wealth that has been the source of enormous investment, enormous conflict, and enormous governance challenges over more than a century.</p>
          <p>Large scale industrial cobalt mining in the DRC is conducted by major companies including Glencore, whose Katanga Mining operation is one of the world&apos;s largest cobalt producers, CMOC (formerly Freeport-McMoRan&apos;s Tenke Fungurume, now Chinese owned), and Ivanhoe Mines, whose Kamoa-Kakula copper project produces cobalt as a byproduct. These are professionally operated mines by international standards, with environmental and social management systems, community investment programmes, and auditing frameworks. The challenge they face is operating in a country where governance is weak, infrastructure is inadequate, and the proximity of large mineral wealth to extreme poverty creates pressures that industrial operators cannot fully control.</p>
          <p>Chinese investment in DRC cobalt and copper mining has grown substantially over the past two decades. Chinese companies have acquired stakes in multiple operating mines and have invested in processing infrastructure. This means that a significant fraction of DRC cobalt production is either Chinese-owned at the mine level or processed through Chinese refining capacity. For Western manufacturers trying to demonstrate supply chain independence from China, this creates complications even when sourcing from what appears to be a non-Chinese country.</p>
          <p>The political risk in the DRC is real and ongoing. Artisanal mining areas have been the site of conflict involving armed groups. The eastern DRC remains destabilised. Regulatory frameworks governing mining royalties, export taxes and local content requirements have changed multiple times. Any supply chain that depends heavily on DRC cobalt needs both the compliance infrastructure to document responsible sourcing and the supply chain resilience to manage disruption risk.</p>

          <h2 id="asm">Artisanal Mining and Responsible Sourcing</h2>
          <p>The most discussed challenge in cobalt supply chains is artisanal and small-scale mining (ASM). In the DRC, an estimated 150,000 to 200,000 artisanal miners work in informal cobalt operations, digging by hand or with basic tools in pits and tunnels that are often unsafe. Investigations by NGOs and journalists have documented child labour in some ASM operations, dangerous working conditions, environmental damage, and inadequate compensation for miners. These findings generated intense media and NGO pressure on major technology and automotive companies in the mid-2010s, forcing a fundamental reassessment of cobalt sourcing practices across the industry.</p>
          <p>The response from industry was the creation of two major certification frameworks. The Responsible Minerals Initiative (RMI), backed by a coalition of electronics and automotive companies, developed the Responsible Cobalt Standard and the Cobalt Reporting Template, providing a structured due diligence framework and audit methodology. The Cobalt Institute developed the Cobalt Industry Responsible Assessment Framework (CIRAF), focused on industry-wide due diligence alignment. Both frameworks are based on the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.</p>
          <p>Implementing OECD-aligned due diligence for cobalt is demanding. It requires mapping your supply chain from the battery cell back through the precursor chemical maker, the cobalt refiner, and the cobalt trader or mine operator, all the way to the extraction site. For supply chains involving DRC artisanal cobalt, this means verifying that the specific sites your supply chain draws from have been assessed for child labour, safety standards, environmental practices and governance. It requires third-party audits, not self-certification. And it requires ongoing monitoring, not a one-time check.</p>
          <p>The EU Battery Regulation, which came fully into force in 2024, made this a legal requirement rather than a voluntary best practice for battery manufacturers selling into the EU market. From February 2025, battery manufacturers were required to have due diligence policies and supply chain mapping in place for cobalt (along with lithium, nickel, natural graphite and copper). The regulation&apos;s requirements will progressively tighten through the decade, with battery passport requirements kicking in for EV batteries from 2027.</p>

          <h2 id="batteries">How Cobalt Gets Into Batteries</h2>
          <p>The route from cobalt ore to EV battery cathode runs through several processing steps, each of which adds value and complexity. Understanding this chain helps explain why cobalt supply chain transparency is technically challenging even when everyone involved wants to achieve it.</p>
          <p>At the mine, cobalt is extracted as a byproduct of copper or nickel processing. In copper operations, the cobalt-bearing ore is processed through flotation and leaching to produce a cobalt-bearing solution, which is then further processed to produce cobalt hydroxide or cobalt sulphate solution. In nickel operations, the cobalt may end up in a mixed nickel-cobalt hydroxide precipitate (MHP) or separated out during the refining process.</p>
          <p>From the mine output, cobalt travels to a refinery (often in China, Finland or Belgium) where it is processed into the commercial product forms: cobalt metal (for LME trading and some industrial alloy uses), cobalt sulphate (the primary battery input), and cobalt hydroxide (an intermediate that can be further processed to sulphate). The refinery step is where traceability most commonly breaks down: a refiner may blend concentrate from multiple sources, making it difficult to trace the final product to a specific mine.</p>
          <p>From the refinery, cobalt sulphate is sold to cathode precursor manufacturers (sometimes called pCAM producers), who combine it with nickel sulphate and manganese sulphate in precise ratios to produce the mixed metal hydroxide precursor. The precursor is then calcined with a lithium compound to produce the finished cathode active material (NMC or NCA). The cathode material goes to cell manufacturers, who combine it with anode materials (usually graphite), electrolyte and separator to produce battery cells, which are assembled into modules and packs by EV manufacturers.</p>
          <p>Each handoff in this chain is a potential break in traceability. OECD-compliant due diligence requires tracing through all of them. Technology solutions using blockchain, digital product passports and supply chain management software are helping, but the human and organisational effort required remains substantial.</p>

          <h2 id="chemistry">Battery Chemistry Evolution and Cobalt Demand</h2>
          <p>One of the most significant commercial developments in the battery industry over the past decade has been the systematic reduction of cobalt content in EV battery chemistries. This happened for two reasons: cobalt is expensive, and the DRC sourcing risks created reputational problems that manufacturers wanted to manage. The result is a steady shift towards lower-cobalt and cobalt-free battery chemistries that has fundamentally changed the cobalt demand growth story.</p>
          <p>Early NMC batteries (NMC 111, with equal parts nickel, manganese and cobalt) contained roughly 15 to 20 kg of cobalt per EV battery pack. NMC 523 and NMC 622 reduced cobalt content to around 10 to 14 kg. NMC 811 (80% nickel, 10% manganese, 10% cobalt) brought it down to approximately 5 to 7 kg. NCMA (nickel cobalt manganese aluminium) chemistries used by Tesla and others have pushed further. Meanwhile, LFP (lithium iron phosphate) batteries contain zero cobalt and have taken large market share in Chinese EVs and increasingly in global markets as energy density limitations become less relevant for many use cases.</p>
          <p>The net effect is that cobalt demand per EV has fallen sharply even as EV production volumes have grown. The IEA&apos;s projections for cobalt demand growth have been revised downward multiple times. The 2022 cobalt price spike to $80,000 per tonne, driven by EV demand optimism and supply constraints, gave way to a sustained price decline as new supply came online and demand growth disappointed versus earlier forecasts.</p>
          <p>This does not mean cobalt demand is declining in absolute terms. High-nickel chemistries remain important for long-range EVs where energy density is critical. NMC cells outperform LFP in cold weather. Premium EV segments will continue to use cobalt-containing batteries for the foreseeable future. The long-run demand picture remains positive but more modest than was expected five years ago. Supply from Indonesian mixed hydroxide precipitate has grown rapidly. The result is a market that has moved from structural shortage to structural surplus in the space of two to three years.</p>

          <h2 id="price">The Cobalt Price in 2026</h2>
          <p>Cobalt is traded on the London Metal Exchange in warrant form, with cash and 3-month contracts providing the primary price reference. Physical cobalt (metal, sulphate, hydroxide) trades at negotiated premiums or discounts to LME depending on product form, purity, origin and contract terms. Cobalt sulphate and hydroxide trade on their contained cobalt value relative to LME, adjusted for processing costs and supply and demand for the specific product form.</p>
          <p>After the dramatic run-up to $80,000-plus per tonne in 2022, cobalt prices fell sharply through 2023 and into 2024. The correction was driven by a combination of factors: EV demand in China coming in below optimistic projections, Indonesian mixed hydroxide precipitate flooding the market with new supply, and the structural trend towards lower-cobalt battery chemistries reducing the intensity of cobalt demand per vehicle sold. By 2025, cobalt had retreated to around $25,000 to $30,000 per tonne, levels last seen before the EV demand wave pushed prices up in 2020 and 2021.</p>
          <p>In early 2026, cobalt traded in a range of approximately $24,000 to $28,000 per tonne. The market is broadly in surplus, with supply from the DRC and Indonesia comfortably covering current demand. The price is not expected to recover sharply without either a significant supply disruption or a reassertion of strong demand growth from high-cobalt battery chemistries that the market currently does not anticipate.</p>
          <p>The low price creates a paradox for responsible sourcing advocates. When cobalt is cheap, artisanal miners face intense economic pressure, some operations cut corners on safety and environmental compliance, and the commercial incentive for buyers to pay premiums for certified responsible supply weakens. Regulatory compliance requirements from the EU Battery Regulation are the primary force maintaining demand for certified supply in a low-price environment. Without them, the progress made in responsible sourcing standards could erode.</p>

          <h2 id="buying">Buying Cobalt Compliantly</h2>
          <p>For procurement teams buying cobalt for battery or industrial applications, the compliance landscape has changed fundamentally over the past five years. Voluntary industry standards have been joined by legal requirements. Supply chain transparency that was aspirational in 2018 is now obligatory for EU market access.</p>
          <p>The product form you buy determines the documentation requirements. Cobalt metal (LME Grade A, minimum 99.8% Co) is the most straightforward for trading purposes, with LME settlement providing price transparency. Cobalt sulphate (battery grade, 20 to 21% Co) requires battery precursor specification documentation and due diligence tracing back through the refiner and mine. Cobalt hydroxide (58 to 62% Co, intermediate product) requires similar due diligence. In all cases, an accredited assay certificate from SGS, Intertek or Bureau Veritas equivalent is standard commercial practice.</p>

          <table className="specs-table" style={{ marginTop: '20px' }}>
            <thead>
              <tr><th>Product Form</th><th>Cobalt Content</th><th>Primary Use</th><th>Key Producers</th></tr>
            </thead>
            <tbody>
              <tr><td>Cobalt metal (LME Grade A)</td><td>99.8%+ Co</td><td>Alloys, hard metals, catalysts, LME trading</td><td>Umicore, Freeport Cobalt, CMOC</td></tr>
              <tr><td>Cobalt sulphate (battery grade)</td><td>20 to 21% Co</td><td>NMC and NCA cathode precursor</td><td>Huayou Cobalt, GEM, Umicore</td></tr>
              <tr><td>Cobalt hydroxide</td><td>58 to 62% Co</td><td>Intermediate, further processed to sulphate</td><td>Glencore, CMOC, Chemaf</td></tr>
              <tr><td>Cobalt concentrate</td><td>Varies, 0.1 to 10% Co</td><td>Smelter or refinery feed, byproduct of Cu/Ni</td><td>DRC producers, Canadian nickel miners</td></tr>
              <tr><td>MHP (mixed hydroxide precipitate)</td><td>35 to 45% Ni+Co combined</td><td>Battery precursor feedstock</td><td>Indonesian HPAL producers</td></tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}>For OECD-compliant due diligence, the minimum requirements are: supply chain mapping to the extraction site, risk assessment for conflict and human rights issues (mandatory for DRC and other high-risk areas), third-party audit by an RMI-approved auditor or equivalent, and annual public reporting. For EU Battery Regulation purposes, this documentation must be maintained for at least 10 years and made available to national authorities on request.</p>
          <p>When qualifying a new cobalt supplier, request their OECD due diligence policy and their most recent supply chain audit report. For DRC-sourced cobalt, the audit should be against the RMI Cobalt Standard or equivalent, and should cover the specific extraction sites in their supply chain. Generic country-level risk assessments are not sufficient. For non-DRC origins (Canada, Australia, Finland), the due diligence requirements are lighter but chain of custody documentation is still required.</p>
          <p>OreTrade lists cobalt in multiple product forms from verified producers with full OECD-aligned documentation available on the platform. Every listing includes assay certification, mine of origin verification, and supply chain due diligence status, so buyers can access the documentation they need without a separate manual process. In a regulatory environment where the documentation burden is growing faster than the commercial teams managing it, that matters.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source Cobalt on OreTrade</h2>
        <p>Verified cobalt with full OECD due diligence documentation on every cargo. DRC and non-DRC origins available. Join the waitlist for early access.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets/critical-minerals" className="btn-secondary">Critical Minerals Market</Link>
        </div>
      </div>
    </>
  )
}
