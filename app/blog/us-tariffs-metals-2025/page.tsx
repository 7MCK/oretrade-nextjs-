import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'US Tariffs and the Metals Market — What Happened and What Comes Next',
  description: 'How US tariff policy in 2025 reshaped global metals trade flows, drove up copper and aluminium prices, and accelerated the search for supply chain alternatives.',
  author: { '@type': 'Organization', name: 'OreTrade', url: 'https://www.oretrade.com' },
  publisher: { '@type': 'Organization', name: 'OreTrade', logo: { '@type': 'ImageObject', url: 'https://www.oretrade.com/logo.png' } },
  datePublished: '2026-04-07',
  dateModified: '2026-04-07',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.oretrade.com/blog/us-tariffs-metals-2025/' },
  about: [
    { '@type': 'Thing', name: 'Tariff', sameAs: 'https://en.wikipedia.org/wiki/Tariff' },
    { '@type': 'Thing', name: 'Metal commodities' },
  ],
  keywords: ['US tariffs metals 2025', 'copper tariff impact', 'aluminium tariff', 'Section 232 steel', 'metals trade war', 'commodity supply chain tariffs', 'critical minerals tariff'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do US tariffs affect copper prices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'US tariffs on copper imports create a price premium in the domestic US market relative to global benchmarks. When tariffs are announced or anticipated, traders rush to import copper ahead of the deadline, creating a short-term spike in US copper premiums over LME prices. The COMEX to LME spread widened significantly in 2025 as the market priced in expected tariffs on copper imports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which metals are affected by Section 232 tariffs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Section 232 tariffs, imposed on national security grounds under US trade law, originally targeted steel (25%) and aluminium (10%) starting in 2018. The 2025 trade policy expansion extended tariff coverage more broadly, affecting a wider range of metals and ore imports depending on origin country. Critical minerals were largely exempted to protect domestic supply chains for defence and clean energy.",
      },
    },
    {
      '@type': 'Question',
      name: 'How did China respond to US tariffs on metals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "China's responses to US tariff escalation have included reciprocal tariffs on US goods, export licensing controls on rare earth elements critical to US defence and technology manufacturing (Announcement 18, April 2025), and restrictions on the export of processing technology for critical minerals. The rare earth export controls are widely interpreted as a deliberate counter-leverage in the broader trade conflict.",
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
    { '@type': 'ListItem', position: 3, name: 'US Tariffs and the Metals Market', item: 'https://www.oretrade.com/blog/us-tariffs-metals-2025/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/blog/us-tariffs-metals-2025/' },
  title: 'US Tariffs and the Metals Market 2025 — Impact on Copper, Aluminium and Critical Minerals | OreTrade',
  description: 'How US tariff policy in 2025 reshaped global metals trade flows, created arbitrage opportunities in copper and aluminium, and accelerated the push for supply chain independence.',
}

export default function USTariffsBlogPost() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">Market Analysis · April 2026</p>
          <h1>US Tariffs and the Metals Market<br /><span>What Happened and What Comes Next</span></h1>
          <p>The tariff wave that began in 2025 did not hit every metal equally. Some markets were barely affected. Others were turned upside down. Here is a clear-eyed look at what the data shows, which commodities are most exposed, and what it all means for buyers building supply chains today.</p>
        </div>
      </div>

      <section className="content-section dark2">
        <div className="content-inner">
          <div className="toc">
            <h4>Contents</h4>
            <ol>
              <li><a href="#section-232">The Section 232 foundation</a></li>
              <li><a href="#copper">What happened to copper</a></li>
              <li><a href="#aluminium">Aluminium and the reshuffling of trade flows</a></li>
              <li><a href="#critical-minerals">Critical minerals carveout</a></li>
              <li><a href="#china-response">How China responded</a></li>
              <li><a href="#supply-chain">What this means for supply chain strategy</a></li>
            </ol>
          </div>

          <h2 id="section-232">The Section 232 Foundation</h2>
          <p>US tariff policy on metals did not start in 2025. The foundation was laid in 2018, when the first Trump administration imposed 25% tariffs on steel imports and 10% on aluminium under Section 232 of the Trade Expansion Act of 1962, a rarely used provision that allows the president to restrict imports on national security grounds. Most of America's trading partners were eventually granted exemptions, but the framework remained in place.</p>
          <p>When tariff policy re-escalated in 2025, it built on that foundation rather than starting from scratch. The 2025 measures extended tariff coverage, eliminated some existing exemptions that had been negotiated under the Biden administration, and broadened the product scope to include a wider range of processed metals and downstream goods. The result was a significant increase in average import costs for metals entering the US market.</p>
          <p>For commodity markets, the practical effect of any tariff is to create a price wedge between the domestic market and the global benchmark. If copper trades at $5.50 per pound on COMEX but costs an additional 25% to import, the domestic price rises above the global level. This is exactly what happened across several metals markets in 2025.</p>

          <h2 id="copper">What Happened to Copper</h2>
          <p>Copper was arguably the most dramatic story. Before any formal copper tariff was in place, the mere anticipation of tariffs caused a major dislocation in the market. Traders began shipping copper to the US ahead of expected deadlines, creating an extraordinary premium of COMEX over LME prices. At the peak, the COMEX to LME spread reached levels not seen in decades, as inventory flowed from warehouses in Asia and Europe towards US ports.</p>
          <p>This created a genuine arbitrage opportunity for anyone who could move physical metal fast enough, and chaos for manufacturers who found domestic copper suddenly priced significantly above what competitors in Europe or Asia were paying. American manufacturers who could not switch sourcing easily absorbed the cost. Those who could looked for non-US alternatives quickly.</p>
          <p>The longer term effect is more structural. Tariffs on imported copper concentrate and refined copper push US smelters and fabricators towards domestic sources. But the US produces relatively little primary copper. Mountain Pass in California produces neodymium but not copper. Copper production is concentrated in Arizona (Freeport McMoRan, BHP), which has meaningful but ultimately limited capacity relative to total US demand. Filling the gap requires either import exemptions for key allies or accepting higher long term costs.</p>
          <p>For international copper producers and traders, the US market became simultaneously more attractive (because tariff driven premiums created margin opportunity) and more operationally complex (because customs compliance, bond requirements and tariff classification became more demanding). The net effect was trade flow diversion rather than trade destruction. Copper that previously went to the US went to Asia. US demand was met from alternative sources or domestic production. Global copper supply and demand stayed roughly in balance. The price stayed high.</p>

          <h2 id="aluminium">Aluminium and the Reshuffling of Trade Flows</h2>
          <p>Aluminium has a longer history with US tariffs and a more complicated global supply chain. The 10% Section 232 tariff from 2018 never fully went away, and the 2025 expansion raised it significantly for non-exempted origins. The effect was to shift sourcing patterns in ways that are still playing out.</p>
          <p>Canada has historically been the largest source of US aluminium imports, given the shared border, integrated power grids, and long standing commercial relationships between US manufacturers and Canadian smelters. The tariff treatment of Canadian aluminium has fluctuated more than any other country, becoming a proxy battle in broader trade negotiations. When Canadian exemptions are in place, US aluminium consumers are relatively insulated. When they are not, costs rise quickly.</p>
          <p>The bigger structural story is that aluminium production is fundamentally an electricity business. The smelting process is so energy intensive that the location of smelters is determined primarily by the cost of power. The US has relatively high industrial electricity costs compared to the Middle East, China or Canada's hydropower regions. Tariff protection makes domestic production more economically viable, but it does not change the underlying cost structure. US aluminium production capacity has grown modestly, but not enough to replace import dependency.</p>
          <p>For downstream manufacturers, the message from 2025 is that supply chain geography now matters as much as price. A supplier located in a country with a good tariff relationship with the US is worth more than one that is 5% cheaper but subject to import duties that could change at any point.</p>

          <h2 id="critical-minerals">Critical Minerals and the Carveout</h2>
          <p>One of the more significant features of 2025 US tariff policy was what it did not do. Critical minerals including rare earth elements, lithium, cobalt, nickel and graphite were largely exempted from the broadest tariff increases, or given specific carveouts. The reason is obvious: the US defence and clean energy industries depend on these materials, and the last thing Washington wants is to impose tariffs that raise the cost of the very materials needed to build fighter jets, EV batteries and wind turbines at home.</p>
          <p>This created an interesting asymmetry. Industrial metals like copper and aluminium got hit hard. Critical minerals, including those dominated by Chinese production, were largely protected. This tells you something important about US strategic priorities: winning the energy transition and maintaining defence capability matters more than protecting domestic copper smelters.</p>
          <p>The exemptions are not unconditional. They typically require supply to come from allies or from domestic production, with an explicit objective of reducing the share sourced from China. The carveout for critical minerals is a bridge, not a permanent free pass. As domestic and allied production capacity comes online over the next decade, expect the carveouts to narrow and the pressure on China-sourced critical minerals to increase.</p>

          <h2 id="china-response">How China Responded</h2>
          <p>China's response to US tariff escalation was calibrated and strategic. Broad retaliatory tariffs on US goods were part of it, but the more consequential move was the rare earth export controls announced in April 2025 (Announcement 18). By placing dysprosium, terbium, samarium and yttrium under export licensing requirements, China used its near monopoly in these materials to signal that escalation in trade policy has costs in both directions.</p>
          <p>The message was clear: the US and its allies depend on Chinese rare earths for defence systems, EV motors and clean energy hardware. Disrupting that supply is within China's power. The controls did not cut off supply entirely, but they created enough uncertainty and price shock to make the point effectively.</p>
          <p>From a commodity market perspective, the rare earth response was more damaging to Western manufacturers than any Chinese tariff on finished goods would have been. Dysprosium doubled in price. Terbium reached $840 per kilogram. Supply chains that had been built on the assumption of stable, cheap Chinese supply were suddenly exposed.</p>

          <h2 id="supply-chain">What This Means for Supply Chain Strategy</h2>
          <p>The 2025 tariff wave made a single thing very clear to anyone managing a metals or minerals supply chain: geographic diversification is no longer optional. The era of buying from whoever is cheapest regardless of origin is ending. Origin country matters because it determines tariff costs, export control exposure, political risk, and increasingly, regulatory compliance status.</p>
          <p>For buyers of industrial metals, the practical response involves qualifying suppliers in tariff-friendly jurisdictions, building relationships with domestic or allied country producers even when their prices are higher, and investing in documentation systems that can prove origin to customs authorities and procurement compliance teams.</p>
          <p>For buyers of critical minerals and rare earths, the response is more urgent. The window between the current shortage and the point at which Western supply chains come online is potentially a decade wide. In the meantime, the only way to reduce China exposure is to identify and qualify the verified non-Chinese sources that exist today. They are fewer in number, more expensive, and harder to document than their Chinese equivalents. They are also, right now, the only alternative.</p>
          <p>OreTrade is built for exactly this environment. Every listing on the platform comes with verified origin documentation, assay certification, and supply chain traceability from mine to delivery. In a world where origin matters more than it ever has, that is not just a compliance feature. It is a commercial necessity.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Build a Supply Chain That Can Handle What Comes Next</h2>
        <p>OreTrade connects buyers with verified, documented producers of ores and metals worldwide. Join the waitlist for early access.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary">Join the Waitlist</a>
          <Link href="/markets" className="btn-secondary">Explore Markets</Link>
        </div>
      </div>
    </>
  )
}
