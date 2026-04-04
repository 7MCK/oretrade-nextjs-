import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-copy">© 2026 OreTrade.com — From Mine to Market, Ethically</div>
        <ul className="footer-links">
          <li><Link href="/#features">Features</Link></li>
          <li><Link href="/traceability">Traceability</Link></li>
          <li><Link href="/markets">Markets</Link></li>
          <li><Link href="/guides">Guides</Link></li>
          <li><Link href="/#investors">Investors</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  )
}
