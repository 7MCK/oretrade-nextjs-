import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'China Rare Earth Export Controls 2025 to 2026 — What Buyers Need to Know',
  description: "China's Announcement 18 placed dysprosium, terbium, samarium and yttrium under export controls in April 2025. Analysis of price impact, affected elements, and alternative supply sources.",
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-04',
  dateModified: '2026-04-05',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/blog/china-rare-earth-export-controls/' },
  about: { '@type': 'Thing', name: 'Rare earth element export controls', sameAs: 'https://en.wikipedia.org/wiki/Rare-earth_element' },
  keywords: ['China rare earth export controls', 'Announcement 18', 'dysprosium export ban', 'terbium export controls', 'rare earth supply chain', 'non-China rare earth supply'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is China Announcement 18?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "China's Announcement 18, issued by the Ministry of Commerce on 4 April 2025, placed seven rare earth elements and their compounds under export licensing controls. It requires Chinese exporters to obtain individual government licences for each shipment of dysprosium, terbium, samarium, yttrium and related materials — effectively giving China direct control over supply flows to Western manufacturers.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which rare earths are affected by China export controls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'China export controls under Announcement 18 affect dysprosium (Dy), terbium (Tb), samarium (Sm), and yttrium (Y) — all elements where China holds over 80% of global supply. All four are critical for NdFeB permanent magnets used in EV motors, wind turbines and defence systems. No short-term substitutes exist.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much have rare earth prices risen due to China export controls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Since Announcement 18 in April 2025, dysprosium oxide prices have more than doubled from approximately $90/kg to $189/kg by April 2026. Terbium has risen from around $600/kg to approximately $840/kg. Samarium and yttrium have also seen significant premiums in ex-China markets, where supply is limited.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can manufacturers source rare earths outside China?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key ex-China rare earth sources include Lynas Rare Earths and Arafura Resources in Australia, Vital Metals in Canada, LKAB in Sweden, and Energy Fuels and MP Materials in the United States. OreTrade connects buyers with verified non-Chinese producers with full documentation, mine of origin certificates, and OECD-compliant due diligence on every cargo.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'OreTrade', item: 'https://www.oretrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.oretrade.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'China Rare Earth Export Controls', item: 'https://www.oretrade.com/blog/china-rare-earth-export-controls/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/blog/china-rare-earth-export-controls/' },
  title: 'China Rare Earth Export Controls 2025 to 2026 — What Buyers Need to Know | OreTrade',
  description: "China's Announcement 18 placed dysprosium, terbium, samarium and yttrium under export controls in April 2025. Here is what happened, why it matters, and where buyers can find alternative supply.",
}

export default function ChinaExportControlsPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">Market Analysis</p>
          <h1>China Rare Earth Export Controls<br /><span>2025 to 2026: What Buyers Need to Know</span></h1>
          <p>China&apos;s Announcement 18 placed four critical rare earth elements under export controls in April 2025. Dysprosium prices have risen over 100% since. Here is what happened, what it means for your supply chain, and where to find verified alternative supply.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <div className="toc">
            <h4>Contents</h4>
            <ol>
              <li><a href="#announcement-18">What is Announcement 18?</a></li>
              <li><a href="#which-elements">Which elements are affected?</a></li>
              <li><a href="#price-impact">Price impact in 2026</a></li>
              <li><a href="#why-now">Why China acted now</a></li>
              <li><a href="#supply-alternatives">Alternative supply sources</a></li>
              <li><a href="#what-buyers-should-do">What buyers should do now</a></li>
            </ol>
          </div>

          <h2 id="announcement-18">What is Announcement 18?</h2>
          <p>On 4 April 2025, China&apos;s Ministry of Commerce issued Announcement 18 — placing seven rare earth elements and their compounds under export licensing controls. The announcement required exporters to apply for individual export licences for each shipment, effectively giving the Chinese government direct control over the flow of these critical materials to the rest of the world.</p>
          <p>This was not China&apos;s first use of rare earth exports as a geopolitical lever. In 2010, China restricted rare earth exports to Japan during a territorial dispute, causing prices to spike 2,000% in some cases before the controls were partially relaxed following WTO proceedings. The 2025 Announcement 18 is more targeted and more sustained than any previous action.</p>
          <p>In practice, the licensing requirement has resulted in a significant reduction in Chinese rare earth exports for the controlled elements. While China has not issued a blanket export ban, licences have been granted selectively and in limited quantities, effectively throttling supply to Western manufacturers.</p>

          <h2 id="which-elements">Which Elements Are Affected?</h2>
          <p>Announcement 18 specifically targeted elements with critical applications in defence, clean energy and advanced electronics where China holds near-monopoly supply positions:</p>

          <table className="specs-table" style={{ marginTop: '20px' }}>
            <thead>
              <tr><th>Element</th><th>Symbol</th><th>Key Uses</th><th>China Market Share</th></tr>
            </thead>
            <tbody>
              <tr><td>Dysprosium</td><td>Dy</td><td>NdFeB magnet heat resistance (EV, wind, defence)</td><td>Over 90%</td></tr>
              <tr><td>Terbium</td><td>Tb</td><td>High-temperature NdFeB magnets, green phosphors</td><td>Over 90%</td></tr>
              <tr><td>Samarium</td><td>Sm</td><td>SmCo magnets for aerospace and extreme temperatures</td><td>Over 85%</td></tr>
              <tr><td>Yttrium</td><td>Y</td><td>LED phosphors, jet engine coatings, laser materials</td><td>Over 80%</td></tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}>All four are used in permanent magnets, defence systems, or advanced electronics where there is no short-term substitution option. The controlled elements are not interchangeable with cheaper, more abundant rare earths — the performance requirements of the applications they serve demand these specific materials.</p>

          <h2 id="price-impact">Price Impact in 2026</h2>
          <p>The price impact of Announcement 18 has been severe and sustained. Dysprosium oxide (ex-China) has risen from approximately $90 per kilogram in early 2025 to over $189 per kilogram by early 2026 — a increase of more than 100% in under twelve months. Terbium, already the most expensive of the heavy rare earths at around $600 per kilogram pre-controls, has risen to approximately $840 per kilogram.</p>
          <p>Samarium and yttrium, previously considered lower-value rare earths, have also seen significant price increases as buyers scramble to secure forward supply. The price volatility has been compounded by thin liquidity in ex-China markets — relatively few verified non-Chinese suppliers exist for these elements at commercial scale, meaning even modest additional demand moves prices sharply.</p>
          <p>For manufacturers of EV motors, wind turbines, defence systems and advanced electronics, the cost impact is significant. A permanent magnet for a high-performance EV motor might contain 0.3 to 0.5 kg of dysprosium oxide. At $189/kg, that represents approximately $57 to $95 per motor in dysprosium cost alone — compared to $27 to $45 before the controls. Multiplied across millions of vehicles, the cumulative impact is substantial.</p>

          <h2 id="why-now">Why Did China Act in April 2025?</h2>
          <p>Announcement 18 did not emerge in isolation. It followed escalating US trade restrictions targeting Chinese semiconductor, battery and EV industries — including expanded export controls on advanced chips, manufacturing equipment, and battery technology. The rare earth controls are widely interpreted as a targeted response: China leveraging its near-monopoly position in critical materials as a counter in an ongoing technology and trade war.</p>
          <p>The specific timing coincided with the anniversary of earlier US chip export restrictions and followed a period of intensified diplomatic tension. The choice of dysprosium, terbium, samarium and yttrium was deliberate — these are the elements most critical to Western defence procurement and clean energy manufacturing, where dependency on Chinese supply is hardest to replace quickly.</p>
          <p>Analysts broadly expect China to maintain or extend the controls as long as US technology restrictions remain in place. Some scenario analyses suggest additional rare earth elements could be added to the controlled list in future announcements.</p>

          <h2 id="supply-alternatives">Alternative Supply Sources</h2>
          <p>The good news for buyers is that rare earth deposits containing dysprosium, terbium, samarium and yttrium do exist outside China — though developing them at scale takes years and significant capital investment.</p>
          <p><strong>Australia</strong> is the most advanced non-Chinese source, primarily through Lynas Rare Earths — the only large-scale rare earth producer and processor outside China. Lynas operates the Mount Weld mine in Western Australia (one of the highest-grade rare earth deposits in the world) and a processing plant in Malaysia. Lynas also has a heavy rare earth separation facility under development in Australia and a cracking and leaching facility in Texas under a US DoD contract.</p>
          <p><strong>Sweden</strong> is emerging as a significant European source. LKAB, the state-owned mining company, has confirmed rare earth deposits at its iron ore operations in Kiruna — estimated to contain around 1 million tonnes of rare earth oxides including heavy rare earths. LKAB is targeting first production in the 2030s.</p>
          <p><strong>Canada</strong> has multiple rare earth projects at various stages of development, including Vital Metals (Nechalacho, Northwest Territories) and Energy Fuels (processing mixed rare earth carbonate at its White Mesa facility in Utah from Canadian feedstock).</p>
          <p><strong>The United States</strong> produces neodymium and praseodymium at Mountain Pass (MP Materials) but has limited heavy rare earth production. The DoD is funding multiple projects to address the gap, including investments in processing facilities and extraction technology for ionic clay deposits in the US Southeast, which contain significant heavy rare earth concentrations.</p>

          <h2 id="what-buyers-should-do">What Buyers Should Do Now</h2>
          <p>For procurement teams managing rare earth supply chains, the practical response to Announcement 18 requires action across several fronts:</p>
          <p><strong>Audit your exposure.</strong> Map which of your products contain dysprosium, terbium, samarium or yttrium — directly or in components purchased from suppliers. Quantify your annual consumption and current inventory position.</p>
          <p><strong>Qualify alternative suppliers now.</strong> The qualification process for new rare earth suppliers takes months. Starting now rather than when stocks run low is essential. Look beyond China to Australian, Canadian and emerging European sources.</p>
          <p><strong>Document your supply chain.</strong> Regulators in the EU and US are increasingly requiring documented proof of rare earth provenance, particularly for defence-related applications and battery supply chains under the EU Battery Regulation. Suppliers who cannot provide a clear chain of custody from mine to delivered product are increasingly difficult to use for compliant procurement.</p>
          <p><strong>Consider strategic stocking.</strong> Given price volatility and supply uncertainty, holding additional inventory of controlled rare earths has become a standard risk management practice for major manufacturers. The US government&apos;s own Project Vault initiative (announced February 2026) is building a $12 billion strategic stockpile of critical minerals including rare earths.</p>
          <p>OreTrade is building the infrastructure for verified, traceable rare earth procurement outside China — connecting qualified buyers with documented producers through a platform designed for the documentation and compliance requirements of modern supply chain management.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Find Verified Rare Earth Supply Outside China</h2>
        <p>OreTrade connects buyers with documented, traceable rare earth producers worldwide.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets/rare-earths" className="btn-secondary">View Rare Earth Markets</Link>
        </div>
      </div>
    </>
  )
}
