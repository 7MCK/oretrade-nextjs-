import type { Metadata } from 'next'
import Link from 'next/link'

import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Copper — Complete Buyer and Seller Guide 2026',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/guides/copper/' },
  about: { '@type': 'Thing', name: 'Copper', sameAs: 'https://en.wikipedia.org/wiki/Copper' },
  keywords: ['copper concentrate buyer guide', 'copper price per tonne', 'buy copper concentrate', 'copper TCRC', 'copper trading platform'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is copper concentrate?',
      acceptedAnswer: { '@type': 'Answer', text: 'Copper concentrate is the primary product of copper mining — a powder containing 20-30% copper along with iron sulfides and by-products including gold and silver. It is produced by crushing and flotation of copper ore and is the feedstock for copper smelters. The alternative is copper cathode (99.99% pure Cu), produced after smelting and electrolytic refining.' },
    },
    {
      '@type': 'Question',
      name: 'What is the current copper price?',
      acceptedAnswer: { '@type': 'Answer', text: 'Copper (Grade A cathode, LME) has traded in the range of $8,000-$11,000 per metric tonne in recent years. Prices are driven by Chinese manufacturing demand, EV and renewable energy growth, and supply disruptions from major producing countries. OreTrade provides reference pricing for copper concentrate and cathode.' },
    },
    {
      '@type': 'Question',
      name: 'What is TCRC in copper trading?',
      acceptedAnswer: { '@type': 'Answer', text: 'TCRC stands for Treatment Charge / Refining Charge — the fee smelters charge to process copper concentrate into refined copper. TC is quoted in $/dry metric tonne of concentrate; RC in cents per pound of payable copper. TCRC rates are negotiated annually between miners and smelters and are a key margin driver for both parties.' },
    },
    {
      '@type': 'Question',
      name: 'Who are the major copper producing countries?',
      acceptedAnswer: { '@type': 'Answer', text: 'Chile is the largest copper producer at approximately 25% of global mine output, followed by Peru (10%), China (8%), the DRC (8%), and the USA (6%). Major mining companies include Codelco, BHP, Glencore, Freeport-McMoRan, Anglo American, and First Quantum Minerals.' },
    }
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.oretrade.com/guides/' },
    { '@type': 'ListItem', position: 3, name: 'Copper Guide', item: 'https://www.oretrade.com/guides/copper/' }
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/guides/copper/' },
  title: 'Copper Concentrate Grades Explained | Mining, Processing & Trading , OreTrade',
  description: 'What is copper concentrate? How are grades calculated? What is TCRC? A complete guide to copper concentrate for miners, traders and industrial buyers.',
}

export default function CopperGuide() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">OreTrade Guide</p>
          <h1>Copper Concentrate<br /><span>Grades Explained</span></h1>
          <p>From ore in the ground to cathode on the exchange , a complete guide to copper concentrate grades, assay certificates, treatment and refining charges, and how to trade copper internationally.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <div className="toc">
            <h4>Contents</h4>
            <ol>
              <li><a href="#copper-mining">How copper is mined</a></li>
              <li><a href="#concentrate">What is copper concentrate?</a></li>
              <li><a href="#grades">Concentrate grades and assay</a></li>
              <li><a href="#processing">From concentrate to cathode</a></li>
              <li><a href="#tcrc">Treatment and Refining Charges (TCRC)</a></li>
              <li><a href="#origins">Major producing regions</a></li>
              <li><a href="#trading">How copper concentrate is traded</a></li>
            </ol>
          </div>

          <h2 id="copper-mining">How Copper is Mined</h2>
          <p>Copper is mined from two main geological environments: porphyry copper deposits and volcanogenic massive sulphide (VMS) deposits. Porphyry deposits , large, low grade bodies typically containing 0.3 to 1.5% copper , account for the majority of global copper production and include the world&apos;s largest mines: Escondida (Chile), Morenci (USA), Grasberg (Indonesia), and Kamoa-Kakula (DRC).</p>
          <p>Most copper ore is extracted through open pit mining, though some deep deposits require underground mining. The ore is blasted, crushed, and transported to a processing plant , typically located at or near the mine , where the copper minerals are separated from the waste rock.</p>
          <p>Copper ore itself is of very low grade , typically containing less than 1% copper. To make it economical to ship and smelt, it must be concentrated at the mine site. This is done through a process called froth flotation, which produces copper concentrate.</p>

          <h2 id="concentrate">What is Copper Concentrate?</h2>
          <p>Copper concentrate is the product of the flotation process , a fine powder containing 20 to 40% copper along with significant quantities of iron sulphides, and often valuable by-products including gold, silver, molybdenum, and sometimes other base metals. It is typically dark grey or black, with the texture of damp cement powder.</p>
          <p>Concentrate is the primary traded form of copper at the mine level. The world&apos;s major copper mines sell their concentrate to copper smelters , large industrial facilities that extract the metal through pyrometallurgical processing. These smelters are concentrated in China (which processes over half of global copper concentrate), Japan, South Korea, and Europe.</p>

          <h2 id="grades">Concentrate Grades and Assay Certificates</h2>
          <p>The grade of copper concentrate , the percentage of copper it contains , is the primary determinant of its commercial value, but it is far from the only factor. A complete assay certificate for copper concentrate will report:</p>
          <p><strong>Payable metals</strong>: Copper (Cu%), gold (Au g/t), silver (Ag g/t), and sometimes molybdenum (Mo%) and other credits. Payability is the percentage of each metal that the smelter pays the miner for , typically 96.5% of Cu, 90% of Au, and 90% of Ag.</p>
          <p><strong>Penalty elements</strong>: Arsenic (As), bismuth (Bi), antimony (Sb), fluorine (F), mercury (Hg), and chlorine (Cl) can all attract penalties if they exceed threshold levels, as they create environmental and processing problems for smelters. High arsenic concentrate has become a significant market issue as global grades decline.</p>
          <p><strong>Moisture content</strong>: Concentrate is traded on a dry metric tonne (DMT) basis. Moisture typically runs 8 to 12%.</p>
          <p>Assay certificates are issued by independent, accredited testing laboratories , SGS, Intertek, Bureau Veritas, and Alex Stewart International are the most widely recognised in the copper trade. The assay is conducted at the loading port (umpire sampling) and sometimes again at discharge, with disputes resolved by a pre-agreed umpire laboratory.</p>

          <h2 id="processing">From Concentrate to Cathode</h2>
          <p>Copper concentrate undergoes two main stages of processing to reach the final, tradeable form of copper cathode (Grade A, 99.99% Cu):</p>
          <p><strong>Smelting</strong> converts concentrate into blister copper , an impure form containing 98 to 99% copper , through a high temperature pyrometallurgical process. The concentrate is dried, then smelted in flash furnaces or bath smelters at over 1,200°C. Sulphur dioxide gas is captured and converted to sulphuric acid as a by-product. The resulting blister copper is cast into anodes.</p>
          <p><strong>Electrolytic refining</strong> dissolves the blister copper anodes in sulphuric acid solution and redeposits pure copper onto cathode blanks. The resulting copper cathodes (Grade A, 99.99% Cu) are the exchange deliverable form traded on the LME and COMEX, and the feedstock for all copper wire, pipe, sheet, and alloy production.</p>

          <h2 id="tcrc">Treatment and Refining Charges (TCRC)</h2>
          <p>Treatment Charges (TC) and Refining Charges (RC) are the fees that smelters deduct from the value of the copper concentrate they receive. They represent the smelter&apos;s compensation for processing the concentrate into metal.</p>
          <p><strong>TC</strong> is expressed in US dollars per dry metric tonne of concentrate (e.g., $80/DMT). <strong>RC</strong> is expressed in US cents per pound of payable copper (e.g., 8.0 c/lb). Together, TCRC of $80/8.0 means the smelter retains $80 per tonne of concentrate plus 8 cents per pound of the contained copper they refine.</p>
          <p>TCRC levels are negotiated each year in benchmark discussions between the world&apos;s largest copper miners (Freeport, BHP, Antofagasta, Glencore) and major smelters (CSPT in China, Sumitomo, Pan Pacific Copper). When copper mine supply is tight, TCRC falls (miners have more bargaining power); when smelter capacity exceeds concentrate supply, TCRC rises.</p>

          <h2 id="origins">Major Producing Regions</h2>
          <p><strong>Chile</strong> produces around 5.7 million tonnes of copper per year , roughly 27% of global output. The Atacama Desert and Andes cordillera host some of the world&apos;s most productive porphyry deposits: Escondida (BHP/Rio Tinto), Collahuasi (Glencore/Anglo), Los Pelambres (Antofagasta), and Chuquicamata and Codelco&apos;s other state owned operations.</p>
          <p><strong>The DRC</strong> has emerged as a major copper province, producing around 2.5 million tonnes per year from the Central African Copperbelt. Kamoa-Kakula (Ivanhoe Mines) has some of the highest grade copper ore in the world. The DRC is also the dominant cobalt producer, meaning copper concentrate from the region often carries cobalt credits.</p>
          <p><strong>Peru</strong> produces around 2.7 million tonnes per year, with major operations including Cerro Verde (Freeport-McMoRan), Las Bambas (MMG), Antamina (BHP/Glencore/Teck), and Quellaveco (Anglo American). Peru has significant remaining exploration upside.</p>

          <h2 id="trading">How Copper Concentrate is Traded</h2>
          <p>Copper concentrate is typically sold under long term offtake contracts between miners and smelters , often covering multiple years of production. Spot market transactions also occur, particularly for smaller producers, surplus tonnage, and traders.</p>
          <p>Transactions are typically priced as: Payable copper (% × Cu grade × LME price) + gold and silver credits − TC − RC − penalties. Payment is typically made against shipping documents on a CFR or CIF basis, with provisional payment at bill of lading and final payment after discharge assay is confirmed.</p>
          <p>OreTrade&apos;s platform brings transparency to this process , with full TCRC disclosure on every concentrate listing, accredited assay documentation, and structured payment terms that protect both producer and buyer throughout the transaction.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Ready to Trade Copper?</h2>
        <p>Join the OreTrade waitlist for early access to the verified copper marketplace.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets/copper" className="btn-secondary">View Copper Market</Link>
        </div>
      </div>
    </>
  )
}
