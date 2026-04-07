import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nickel Explained — From Mine to Battery to Market',
  description: 'A complete guide to nickel: how it is mined, what Class 1 and Class 2 nickel mean, how battery grade nickel sulphate is made, and how international nickel trading works.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-07',
  dateModified: '2026-04-07',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/guides/nickel/' },
  about: { '@type': 'Thing', name: 'Nickel', sameAs: 'https://en.wikipedia.org/wiki/Nickel' },
  keywords: ['nickel guide', 'nickel ore buyer guide', 'Class 1 nickel', 'Class 2 nickel', 'battery grade nickel', 'nickel sulphate', 'NPI nickel pig iron', 'nickel HPAL', 'nickel trading'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between Class 1 and Class 2 nickel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Class 1 nickel is refined nickel with a minimum purity of 99.8%, produced in forms including full plate cathode, cut cathode, pellets and powder. Class 1 nickel settles on the LME and is used in alloys, plating, and battery cathode precursors. Class 2 nickel includes nickel pig iron (NPI), ferronickel and nickel oxide sinter, which have lower nickel content and are consumed primarily in stainless steel production. Class 2 products trade at a discount to LME.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is battery grade nickel sulphate produced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Battery grade nickel sulphate (minimum 22% Ni, with low cobalt, iron and other impurities) is produced primarily via two routes. The High Pressure Acid Leach (HPAL) process treats laterite ore with sulphuric acid under high pressure and temperature to selectively extract nickel and cobalt as a mixed hydroxide precipitate (MHP), which is further processed to nickel sulphate. Alternatively, NPI produced in Indonesia can be converted to nickel matte and then to nickel sulphate. The HPAL route is cleaner and increasingly preferred for battery supply chain compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries produce the most nickel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indonesia is by far the largest nickel producer, accounting for over 50% of global mine output, primarily from laterite deposits in Sulawesi, Halmahera and Papua. The Philippines is the second largest supplier of nickel ore. Russia (Norilsk Nickel, sulphide deposits) and Australia (BHP Nickel West, Western Mining Corporation) are major producers of higher purity Class 1 nickel. Canada (Vale, Glencore) has significant sulphide nickel operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is NPI and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nickel pig iron (NPI) is an iron alloy containing 4 to 15% nickel, produced by smelting laterite ore with coke and flux in a rotary kiln electric furnace. NPI is a cheap substitute for refined nickel in stainless steel production, developed in China in the mid 2000s when nickel prices rose sharply. Indonesian production has grown dramatically since 2015, driving down stainless steel production costs and fundamentally changing global nickel market dynamics.',
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
    { '@type': 'ListItem', position: 3, name: 'Nickel Guide', item: 'https://www.oretrade.com/guides/nickel/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/guides/nickel/' },
  title: 'Nickel Explained — Mining, Processing, Battery Grade and Trading | OreTrade',
  description: 'Complete guide to nickel: laterite vs sulphide deposits, Class 1 and Class 2 products, how battery grade nickel sulphate is made, NPI explained, and how nickel is traded internationally.',
}

export default function NickelGuide() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">OreTrade Guide</p>
          <h1>Nickel Explained<br /><span>From Mine to Battery to Market</span></h1>
          <p>Nickel is living through a transformation. It has been a stainless steel metal for over a century, but the rise of the electric vehicle is turning it into a battery material as well. That shift has created one of the most complex and divided commodity markets in the world.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <div className="toc">
            <h4>Contents</h4>
            <ol>
              <li><a href="#what-is-nickel">What nickel is and where it comes from</a></li>
              <li><a href="#laterite-vs-sulphide">Laterite vs sulphide deposits</a></li>
              <li><a href="#npi">NPI and the stainless steel market</a></li>
              <li><a href="#class1-class2">Class 1 and Class 2 nickel</a></li>
              <li><a href="#battery-grade">Battery grade nickel</a></li>
              <li><a href="#indonesia">Why Indonesia changed everything</a></li>
              <li><a href="#pricing">How nickel is priced</a></li>
              <li><a href="#buying">Buying nickel ore and products</a></li>
            </ol>
          </div>

          <h2 id="what-is-nickel">What Nickel Is and Where It Comes From</h2>
          <p>Nickel is a hard, silvery white metal with atomic number 28 and excellent corrosion resistance. It has been commercially important since the late 19th century, when it was first used to strengthen steel for armour plate and pressure vessels. Today it is used primarily in stainless steel (approximately 70% of demand), but the share going into EV batteries is growing rapidly and expected to account for 30 to 40% of demand by the early 2030s.</p>
          <p>The world mines roughly 3.4 million tonnes of nickel per year, overwhelmingly from two geological types: laterite deposits and sulphide deposits. Indonesia dominates global production with over 50% market share, followed by the Philippines, Russia, Australia and Canada. These five countries account for roughly 90% of global mine output.</p>
          <p>Unlike some critical minerals, nickel is not particularly scarce in absolute terms. The Earth contains plenty of it. The constraint is processing capacity and the cost and complexity of turning different types of ore into the form that different end users actually need.</p>

          <h2 id="laterite-vs-sulphide">Laterite vs Sulphide Deposits</h2>
          <p>Nickel ore comes in two fundamentally different forms, and understanding the difference matters for anyone buying or sourcing nickel.</p>
          <p><strong>Laterite deposits</strong> are formed by the deep weathering of ultramafic rocks in tropical regions. They tend to be large, near surface deposits that are cheap to mine using open pit methods. Indonesia, the Philippines and New Caledonia are predominantly laterite producers. The downside of laterite ore is processing: the nickel is bound up with iron and water in complex mineral structures that are hard to concentrate by flotation. Traditional smelting produces NPI or ferronickel. The HPAL process can produce battery grade material but requires very high capital investment and is technically demanding to operate.</p>
          <p><strong>Sulphide deposits</strong> are found in magmatic settings — associated with ancient volcanic intrusions — predominantly in Canada, Russia, Australia and Finland. Sulphide ore typically has lower nickel grades than laterite (0.5 to 3% Ni versus 0.8 to 2.5% Ni for laterite) but is much easier to process. The sulphide minerals float readily, producing a high grade concentrate that smelters can process into Class 1 nickel at relatively low cost. Sulphide nickel is the preferred feedstock for producing high purity nickel used in alloys and batteries.</p>
          <p>The geographic split matters commercially. Most accessible sulphide deposits are in politically stable, ESG compliant jurisdictions. Most of the growth in nickel production is in Indonesia (laterite), where Chinese investment in processing infrastructure has enabled the HPAL and NPI processing capacity that now dominates global supply growth.</p>

          <h2 id="npi">NPI and the Stainless Steel Market</h2>
          <p>Nickel pig iron is one of the more consequential commodity market developments of the past two decades. In the mid 2000s, nickel prices spiked above $50,000 per tonne, creating powerful incentives for stainless steel producers to find a substitute for LME refined nickel. Chinese metallurgists developed a process to smelt low grade Indonesian and Philippine laterite ore directly in rotary kiln electric furnaces (RKEF) to produce an iron-nickel alloy containing 4 to 15% nickel — NPI.</p>
          <p>NPI cannot do what refined nickel does in alloys or batteries, but for stainless steel production it is a perfectly adequate and dramatically cheaper substitute. China's stainless steel industry adopted it rapidly. Production of NPI in China and then in Indonesia scaled from essentially nothing in 2005 to over 1.5 million tonnes of contained nickel by the early 2020s, fundamentally altering the global nickel supply and demand balance.</p>
          <p>The commercial consequence is that the LME nickel price, which used to be set by the balance of refined nickel supply and demand, is now heavily influenced by NPI production costs in Indonesia. When Indonesian NPI production is cheap and abundant, it caps the LME price from below. When NPI production is constrained or costs rise, the LME price has more room to move.</p>
          <p>For buyers, NPI is relevant mainly if you are a stainless steel producer or a ferronickel buyer. For battery cathode precursor production or refined nickel alloy applications, NPI is not suitable and the relevant market is Class 1 nickel or battery grade nickel sulphate.</p>

          <h2 id="class1-class2">Class 1 and Class 2 Nickel</h2>
          <p>The LME nickel contract is for Class 1 nickel: refined metal with a minimum purity of 99.8%, in specific registered shapes. The most common Class 1 products are full plates (large cathode sheets produced by electrorefining), cut cathodes (smaller pieces cut from plates), pellets (small irregular shaped pieces, convenient for melting), and powder (for specialist alloy and powder metallurgy applications).</p>
          <p>Class 1 nickel settles directly against the LME. It is produced by a small number of producers: Norilsk Nickel in Russia, Vale in Canada and Indonesia, BHP in Australia, Glencore in Canada and Norway, and Sumitomo/Nickel Asia in the Philippines and Japan.</p>
          <p>Class 2 nickel includes NPI, ferronickel and nickel oxide sinter. These products have lower nickel content and impurity levels that make them unsuitable for LME delivery. They trade at discounts to LME based on their nickel content and the cost of further processing if required. The discount to LME for NPI reflects both the lower grade and the additional processing needed to use it in applications beyond stainless steel.</p>
          <p>When you buy "nickel" on the commodity market, you need to be clear which class you mean. A buyer of Class 1 for alloy production has very different requirements from a stainless steel producer buying NPI. The products are not substitutable.</p>

          <h2 id="battery-grade">Battery Grade Nickel</h2>
          <p>The EV revolution has created a new demand category that does not fit neatly into the Class 1 / Class 2 framework: battery grade nickel sulphate. Battery manufacturers using NMC (nickel manganese cobalt) or NCA (nickel cobalt aluminium) cathode chemistries need nickel in the form of nickel sulphate solution, with very specific purity requirements — minimum 22% Ni, and strict limits on cobalt (below 100 ppm for some specifications), iron, copper and other impurities.</p>
          <p>Nickel sulphate can be produced from either Class 1 nickel (dissolving refined nickel in sulphuric acid — clean but expensive) or via HPAL processing of laterite ore (more complex but capable of producing battery grade material directly from ore). The HPAL route requires treating ore with hot concentrated sulphuric acid under high pressure, a process that is technically demanding, capital intensive and produces significant acidic waste that must be carefully managed.</p>
          <p>Indonesia has built the world's largest concentration of HPAL capacity, mostly with Chinese investment and technology. Facilities operated by Harita Group, Vale Indonesia, and PT Halmahera Persada Lygend (a joint venture involving Zhejiang Huayou Cobalt) now produce significant quantities of mixed hydroxide precipitate (MHP) and nickel sulphate at a cost that undercuts Western alternatives. The downside for Western EV manufacturers with supply chain compliance requirements is the Chinese ownership and processing footprint embedded in Indonesian nickel sulphate.</p>
          <p>Finnish producer Norilsk Nickel's Harjavalta refinery, Vale's Clydach refinery in Wales, and BHP's Nickel West operations in Western Australia represent the main Western production of battery grade nickel outside the Indonesian Chinese supply chain. These are preferred sources for EV manufacturers targeting EU Battery Regulation compliance and US IRA content requirements, but capacity is limited relative to projected demand growth.</p>

          <h2 id="indonesia">Why Indonesia Changed Everything</h2>
          <p>Indonesia's transformation from a supplier of laterite ore to the dominant global force in nickel processing is one of the most significant supply chain shifts in any commodity market in recent history. It happened in two steps.</p>
          <p>The first step was Indonesia's 2014 ban on raw nickel ore exports. The Indonesian government forced ore to be processed domestically rather than exported as raw material to Chinese smelters. This drove massive Chinese investment in NPI smelters in Indonesia — bringing the processing to the ore rather than the ore to the processing. Indonesian NPI capacity grew from essentially nothing to over 1 million tonnes of contained nickel by 2022.</p>
          <p>The second step was the development of HPAL capacity in Indonesia, processing laterite ore into MHP and nickel sulphate for battery supply chains. Chinese battery makers, processing companies and car manufacturers invested heavily in Indonesian HPAL to secure battery grade nickel supply at cost. The result is that Indonesia now sits at the centre of the battery nickel supply chain in a way that Western governments and manufacturers increasingly view as a strategic vulnerability.</p>
          <p>For buyers, this means that any nickel sourced from the Indonesian processing complex comes with a Chinese company in the ownership structure, or processed using Chinese technology, or both. Whether that matters depends on your supply chain compliance requirements. For US IRA purposes, Indonesian nickel processed by Chinese owned facilities does not qualify for domestic content tax credits. For EU Battery Regulation purposes, the due diligence requirements mean you need full visibility of the supply chain regardless of origin.</p>

          <h2 id="pricing">How Nickel Is Priced</h2>
          <p>Class 1 nickel (LME Grade A) is priced against the LME. Cash, 3-month and prompt date contracts are traded. Physical transactions typically reference the LME average price over a quotational period (usually the month of delivery or a period around the bill of lading date) plus or minus a premium that reflects product form, location, and market conditions.</p>
          <p>Class 2 products (NPI, ferronickel) trade at negotiated discounts to LME, expressed as a percentage of LME or as a fixed discount per unit of contained nickel. The NPI discount to LME has varied considerably, generally in the range of 15 to 30% of LME cash depending on supply availability and stainless steel demand.</p>
          <p>Battery grade nickel sulphate trades at a premium to Class 1, reflecting the processing costs and purity requirements. The nickel sulphate premium over LME nickel (expressed on a contained nickel basis) fluctuates with battery precursor demand and sulphate production capacity, typically in the range of $500 to $2,000 per tonne of contained nickel.</p>
          <p>For nickel ore, pricing is usually based on a fixed price per wet metric tonne or dry metric tonne, with an agreed nickel content and a payability formula similar to copper concentrate. The reference price for the contained nickel is typically LME, with processing cost deductions negotiated between buyer and seller.</p>

          <h2 id="buying">Buying Nickel Ore and Products</h2>
          <p>For buyers sourcing nickel, the first question is always which product form you need. NPI is only relevant to stainless steel producers. Ferronickel overlaps with NPI but is produced via a different route and is used in slightly different applications. Class 1 nickel cathode is the default for most alloy and plating applications. Nickel sulphate is the battery supply chain product.</p>
          <p>For nickel ore, the main buyers are NPI smelters (primarily in China and Indonesia) and, in limited volumes, HPAL operators. The ore market is effectively bilateral between mine operators in Indonesia and the Philippines and the smelter operators who process it. Spot transactions exist but most ore is sold under long term supply agreements.</p>
          <p>Due diligence requirements for nickel supply chains are tightening. The EU Battery Regulation, in force from 2024, requires battery manufacturers to conduct OECD standard due diligence on all critical raw materials, including nickel, back to the mine level. This means documented chain of custody, environmental and social impact assessment, and evidence that the supply chain is not connected to conflict-affected or high-risk areas as defined by OECD guidance.</p>
          <p>OreTrade lists nickel ore, NPI, ferronickel and battery grade nickel sulphate from verified producers with documented supply chain provenance. Every listing includes assay certification and origin documentation that meets OECD due diligence standards, making it suitable for regulated battery and alloy supply chains.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source Nickel with Full Traceability</h2>
        <p>From nickel ore to battery grade sulphate, OreTrade connects buyers with verified producers. Every cargo comes with documented origin and assay certification.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets/nickel" className="btn-secondary">Nickel Market</Link>
        </div>
      </div>
    </>
  )
}
