import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: { default: 'OreTrade , Global Ore Trading Platform | From Mine to Market', template: '%s | OreTrade' },
  description: 'OreTrade is the global marketplace for mining ores, base metals, precious metals and critical minerals. Verified counterparties, full traceability, ethical sourcing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18063866280" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18063866280');
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
