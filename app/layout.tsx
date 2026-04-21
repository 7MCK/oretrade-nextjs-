import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: { default: 'OreTrade — Global Ore Trading Platform | From Mine to Market', template: '%s | OreTrade' },
  description: 'OreTrade is the global marketplace for mining ores, base metals, precious metals and critical minerals. Verified counterparties, full traceability, ethical sourcing.',
  metadataBase: new URL('https://www.oretrade.com'),
  openGraph: {
    siteName: 'OreTrade',
    type: 'website',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OreTrade',
  alternateName: 'OreTrade Ltd',
  description: "The world's first traceable ore and metals marketplace. OreTrade connects miners, traders and refiners globally with verified counterparties, live pricing and a Digital Product Passport for every cargo.",
  url: 'https://www.oretrade.com',
  logo: 'https://www.oretrade.com/logo.png',
  foundingDate: '2026',
  areaServed: ['GB', 'EU', 'AU', 'CA', 'ZA', 'US', 'JP', 'KR'],
  knowsAbout: [
    'Rare earth elements',
    'Ore trading',
    'Commodity marketplace',
    'Digital Product Passport traceability',
    'Iron ore',
    'Copper trading',
    'Dysprosium',
    'Terbium',
    'Neodymium',
    'Samarium',
    'Yttrium',
    'China export controls rare earth',
    'Critical minerals supply chain',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@oretrade.com',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.linkedin.com/company/oretrade',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Bing Webmaster Verification */}
        <meta name="msvalidate.01" content="AA472FDD82CB5EFEF13F2D1F5A2B846E" />
        {/* Organization Schema — AI entity anchor */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Ads + GA4 */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FJ89WR34BY" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FJ89WR34BY');
          gtag('config', 'AW-18063866280');
          // AI Search referral channel grouping
          gtag('set', 'traffic_type', 'external');
          gtag('config', 'AW-18063866280', {
            custom_map: { dimension1: 'ai_referral_source' }
          });
          // Track AI search referrers as a separate channel
          (function() {
            var ref = document.referrer || '';
            var aiSources = [
              { match: 'chatgpt.com', label: 'ChatGPT' },
              { match: 'chat.openai.com', label: 'ChatGPT' },
              { match: 'perplexity.ai', label: 'Perplexity' },
              { match: 'claude.ai', label: 'Claude' },
              { match: 'gemini.google.com', label: 'Gemini' },
              { match: 'bard.google.com', label: 'Gemini' },
              { match: 'copilot.microsoft.com', label: 'Copilot' },
              { match: 'bing.com', label: 'Bing/Copilot' },
            ];
            for (var i = 0; i < aiSources.length; i++) {
              if (ref.indexOf(aiSources[i].match) !== -1) {
                gtag('event', 'ai_referral', {
                  ai_referral_source: aiSources[i].label,
                  page_location: window.location.href,
                });
                break;
              }
            }
          })();
        `}</Script>
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
