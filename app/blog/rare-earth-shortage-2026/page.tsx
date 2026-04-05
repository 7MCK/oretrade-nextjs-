import type { Metadata } from 'next'
import Link from 'next/link'

import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rare Earth Shortage 2026 — Where to Find Supply Outside China',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/blog/rare-earth-shortage-2026/' },
  about: { '@type': 'Thing', name: 'Rare earth elements', sameAs: 'https://en.wikipedia.org/wiki/Rare-earth_element' },
  keywords: ['rare earth shortage 2026', 'rare earth supply outside China', 'dysprosium shortage', 'terbium shortage', 'rare earth alternative supply'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is there a rare earth shortage in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'China\'s Announcement 18 (April 2025) placed dysprosium, terbium, samarium and yttrium under export licensing controls, sharply restricting supply to Western manufacturers. China produces over 85-90% of global rare earth supply for most elements. The combination of export controls and rapidly growing EV and wind energy demand has created a severe supply crunch.' },
    },
    {
      '@type': 'Question',
      name: 'Which rare earths are hardest to source outside China in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dysprosium and terbium are the most critically constrained — both are under Chinese export controls with very limited non-China production capacity. Samarium and yttrium are also affected. NdPr has more ex-China supply via Lynas Rare Earths in Australia/Malaysia, but still faces tightness as EV demand grows.' },
    },
    {
      '@type': 'Question',
      name: 'Where can manufacturers find rare earth supply outside China?',
      acceptedAnswer: { '@type': 'Answer', text: 'Key non-China sources include Lynas Rare Earths (Australia/Malaysia), MP Materials (California), Energy Fuels (Utah), Arafura Resources (Australia), Vital Metals (Canada), and LKAB (Sweden). OreTrade connects buyers with verified suppliers from these origins with full Digital Product Passport documentation on every cargo.' },
    }
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.oretrade.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Rare Earth Shortage 2026', item: 'https://www.oretrade.com/blog/rare-earth-shortage-2026/' }
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/blog/rare-earth-shortage-2026/' },
  title: 'Rare Earth Shortage 2026 — Where to Find Supply Outside China | OreTrade',
  description: 'Rare earth shortages in 2026 are driving urgent demand for non-Chinese supply of dysprosium, terbium and other critical elements. Here is where verified alternative supply exists.',
}

export default function RareEarthShortagePage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">Market Analysis</p>
          <h1>Rare Earth Shortage 2026<br /><span>Where to Find Supply Outside China</span></h1>
          <p>China&apos;s export controls on dysprosium, terbium, samarium and yttrium have created the most severe rare earth supply shortage in a decade. Here is the state of the market and where verified alternative supply exists.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <h2>The Scale of the 2026 Rare Earth Shortage</h2>
          <p>The rare earth market entered 2026 in a state of acute supply stress. China&apos;s Announcement 18 export controls, introduced in April 2025, have reduced the availability of dysprosium, terbium, samarium and yttrium to Western buyers to a fraction of pre-control levels. The result is a supply shortage that is affecting EV manufacturers, wind turbine producers, defence contractors and electronics companies across the US, EU, Japan and South Korea.</p>
          <p>Dysprosium oxide prices have more than doubled since the controls were announced. Terbium, already among the most expensive rare earths at around $600 per kilogram before the controls, now trades at approximately $840 per kilogram with limited availability at any price. Samarium and yttrium, previously considered lower-value materials, have seen sharp price increases as buyers absorb the shock of restricted Chinese supply.</p>
          <p>For manufacturers of permanent magnets — the critical component in EV motors, wind turbine generators, industrial motors and defence systems — the shortage is not theoretical. Production schedules are being disrupted, qualification of alternative suppliers is being accelerated under emergency timelines, and some manufacturers have reported being unable to source sufficient quantities of heavy rare earths at any commercially viable price.</p>

          <h2>Why This Shortage Is Different</h2>
          <p>Rare earth supply disruptions have occurred before — most notably in 2010 when China reduced export quotas and prices surged dramatically. But the 2025 to 2026 shortage has several characteristics that make it structurally different from previous episodes:</p>
          <p><strong>It targets the hardest-to-replace elements.</strong> The four controlled elements — dysprosium, terbium, samarium and yttrium — are not the most abundant rare earths. They are the ones with the most demanding performance requirements and the fewest substitution options. You cannot simply replace dysprosium with neodymium in a high-temperature magnet application.</p>
          <p><strong>Demand is growing structurally.</strong> Previous rare earth price spikes occurred against a backdrop of relatively stable demand. The current shortage coincides with exponentially growing demand for electric vehicles and wind energy — the primary end markets for heavy rare earths. Even without supply restrictions, demand would be outpacing new supply development.</p>
          <p><strong>Alternative supply takes years to develop.</strong> A new rare earth mine takes 10 to 15 years from discovery to production. Processing facilities for heavy rare earth separation require complex hydrometallurgical technology and significant capital. The West is building this capacity — but not fast enough to fill the gap in the near term.</p>
          <p><strong>The controls reflect strategic intent.</strong> Unlike the 2010 episode, which China eventually scaled back under WTO pressure, the 2025 controls appear to reflect a deliberate long-term strategic posture. China has made clear that its rare earth dominance is a geopolitical asset it intends to use.</p>

          <h2>Where Verified Supply Exists Outside China</h2>
          <p>The situation is challenging but not hopeless. Verified sources of heavy rare earths outside China do exist, and the pipeline of new projects is growing rapidly driven by government investment and geopolitical urgency.</p>
          <p><strong>Australia — the most developed source.</strong> Lynas Rare Earths at Mount Weld produces and separates neodymium, praseodymium, lanthanum and cerium at commercial scale. Its heavy rare earth capabilities are growing — a new facility in Western Australia is under development for dysprosium and terbium separation. Lynas is the only commercially significant producer of separated rare earth products outside China and has long-term supply agreements with Japanese and US customers.</p>
          <p><strong>United States — emerging domestic production.</strong> MP Materials at Mountain Pass in California produces mixed rare earth carbonate and is expanding into NdPr separation and magnet alloy production. The company has a $400 million investment from the US Department of Defense to accelerate this buildout. Energy Fuels at White Mesa in Utah processes mixed rare earth carbonate and is expanding into heavy rare earth separation. Neither facility currently produces dysprosium or terbium at commercial scale, but both have that capability in their development roadmaps.</p>
          <p><strong>Canada — multiple projects in development.</strong> Vital Metals at Nechalacho in the Northwest Territories produces rare earth carbonate containing both light and heavy rare earths. The project is at early production stage with expansion planned. Saskatchewan Research Council operates a rare earth processing facility that can handle feedstock from multiple Canadian sources.</p>
          <p><strong>Sweden and Europe — longer-term.</strong> LKAB has confirmed significant rare earth deposits at its Kiruna iron ore operations, including heavy rare earths, estimated at over 1 million tonnes of rare earth oxides. This is the largest known rare earth deposit in Europe. First production is not expected before the early 2030s given permitting timelines, but the long-term European supply outlook is improving.</p>
          <p><strong>Africa and other sources.</strong> Tanzania, Madagascar, Malawi and Brazil all have rare earth projects at various stages of development. These sources are less developed than the Australian and North American pipeline but represent important diversification options for buyers building long-term supply chains.</p>

          <h2>What OreTrade Is Doing</h2>
          <p>OreTrade is building the marketplace and documentation infrastructure for verified rare earth procurement outside China. The platform connects qualified buyers directly with documented producers — with a Digital Product Passport on every cargo that provides mine of origin, assay certification, conflict-free verification and chain of custody documentation.</p>
          <p>For procurement teams facing the reality of the 2026 shortage, OreTrade offers a structured path to qualifying and transacting with alternative suppliers — with the documentation trail that EU Battery Regulation compliance, US defence procurement requirements and corporate ESG reporting increasingly demand.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Find Rare Earth Supply Outside China</h2>
        <p>Join the OreTrade waitlist for early access to verified rare earth listings from producers worldwide.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets/rare-earths" className="btn-secondary">View Rare Earth Markets</Link>
        </div>
      </div>
    </>
  )
}
