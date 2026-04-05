import type { Metadata } from 'next'
import Ticker from '../components/Ticker'
import { OreTradeLogoSVG } from '../components/Logo'
import ContactForm from '../components/ContactForm'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.oretrade.com/' },
  title: 'OreTrade — Global Ore Trading Platform | From Mine to Market',
  description: 'OreTrade is the global marketplace for mining ores, base metals, precious metals and critical minerals. Verified counterparties, full traceability, ethical sourcing.',
}

export default function Home() {
  return (
    <>
      <Ticker />

      {/* HERO */}
      <div className="hero-wrap">
        <div className="hero">
          <div>
            <p className="section-label">Global Mining Marketplace</p>
            <h1>From Mine to Market,<br /><span>Ethically.</span></h1>
            <p>OreTrade connects verified mining operations with global buyers. Trade ores, metals and minerals with full traceability, ethical sourcing and transparent pricing.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">Join the Waitlist</a>
              <a href="#features" className="btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="price-panel">
            <h3>Live Market Prices</h3>
            <div className="price-grid">
              {[
                { name: 'Gold', value: '$3,082', change: '▲ +0.8% today', up: true },
                { name: 'Silver', value: '$34.12', change: '▲ +1.2% today', up: true },
                { name: 'Copper', value: '$4.89', change: '▼ -0.3% today', up: false },
                { name: 'Iron Ore', value: '$108.50', change: '▲ +0.5% today', up: true },
                { name: 'Nickel', value: '$15,840', change: '▼ -0.6% today', up: false },
                { name: 'Platinum', value: '$984.00', change: '▲ +0.4% today', up: true },
              ].map(m => (
                <div key={m.name} className="price-item">
                  <div className="price-metal">{m.name}</div>
                  <div className="price-value">{m.value}</div>
                  <div className={`price-change ${m.up ? 'up' : 'down'}`}>{m.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="section-inner">
          <p className="section-label">Platform Features</p>
          <h2 className="section-title">Everything the global metals trade needs</h2>
          <p className="section-sub">Built for serious commodity traders, mining operations and industrial buyers who need reliability at scale.</p>
          <div className="features-grid">
            {[
              { icon: '🌍', title: 'Global Listings', desc: 'Access thousands of verified listings across mining ores, base metals, precious metals and critical minerals from producers worldwide.' },
              { icon: '📊', title: 'Live Analytics', desc: 'Real-time pricing, market depth and trend data. Make informed decisions with access to the same intelligence as institutional traders.' },
              { icon: '✅', title: 'Verified Counterparties', desc: 'Every buyer and seller on OreTrade goes through rigorous KYC and operational verification before their first trade.' },
              { icon: '🔒', title: 'Secure Settlement', desc: 'Escrow-backed transactions, digital documentation and structured payment terms that protect both sides of every deal.' },
              { icon: '🔗', title: 'Origin Tracking', desc: 'Full chain of custody from extraction to delivery. Every tonne traced, certified and auditable on demand.' },
              { icon: '💳', title: 'Flexible Payments', desc: 'Letters of credit, wire transfer, escrow and structured finance options built into the platform for frictionless deal closing.' },
            ].map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories" id="categories">
        <div className="section-inner">
          <p className="section-label">Trade Categories</p>
          <h2 className="section-title">What trades on OreTrade</h2>
          <p className="section-sub">From bulk ore tonnage to refined precious metals , one platform for the full mining supply chain.</p>
          <div className="cat-grid">
            {[
              { icon: '⛏️', title: 'Mining Ores', desc: 'Iron ore, bauxite, chromite, manganese and more', href: '/markets/mining-ores' },
              { icon: '🔩', title: 'Base Metals', desc: 'Copper, aluminium, zinc, lead, nickel', href: '/markets/base-metals' },
              { icon: '✨', title: 'Precious Metals', desc: 'Gold, silver, platinum, palladium', href: '/markets/gold' },
              { icon: '⚡', title: 'Critical Minerals', desc: 'Lithium, cobalt, rare earths, graphite', href: '/markets/critical-minerals' },
            ].map(c => (
              <a key={c.title} href={c.href} className="cat-card" style={{ textDecoration: 'none' }}>
                <div className="cat-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p className="cat-desc">{c.desc}</p>
                <div className="cat-count">LAUNCHING SOON</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="section-inner">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">From Mine to Market in four steps</h2>
          <p className="section-sub">A structured process designed for the realities of international commodity trade.</p>
          <div className="steps">
            {[
              { n: '1', title: 'List or Discover', desc: 'Producers list verified tonnage. Buyers browse listings with full origin and specification data.' },
              { n: '2', title: 'Verify and Connect', desc: 'Both parties complete KYC. OreTrade confirms product certification and operational credentials.' },
              { n: '3', title: 'Negotiate and Agree', desc: 'Price, volume, delivery terms and payment structure agreed on-platform with full documentation.' },
              { n: '4', title: 'Trade and Track', desc: 'Settlement handled securely. Shipment tracked end to end with full chain of custody records.' },
            ].map(s => (
              <div key={s.n} className="step">
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PASSPORT */}
      <section className="passport" id="passport">
        <div className="section-inner">
          <p className="section-label">Digital Product Passport</p>
          <h2 className="section-title">Full traceability, built in</h2>
          <p className="section-sub">Every commodity traded on OreTrade carries a Digital Product Passport , a permanent, auditable record from extraction to delivery.</p>
          <div className="passport-inner">
            <div className="passport-card">
              <h4>Digital Product Passport , Sample Record</h4>
              <div className="passport-field">
                <span className="field-label">Mine of Origin</span>
                <span className="field-value">Katanga Province, DRC <span className="field-verified">✓ Verified</span></span>
              </div>
              <div className="passport-field">
                <span className="field-label">Assay Certification</span>
                <span className="field-value">63.4% Fe SGS Certificate <span className="field-verified">✓ Verified</span></span>
              </div>
              <div className="passport-field">
                <span className="field-label">Conflict Free Status</span>
                <span className="field-value">OECD Due Diligence Compliant <span className="field-verified">✓ Verified</span></span>
              </div>
              <div className="passport-field">
                <span className="field-label">Chain of Custody ID</span>
                <span className="field-value">OT-2026-04811-KAT</span>
              </div>
              <div className="passport-field">
                <span className="field-label">ESG Disclosure</span>
                <span className="field-value">GRI 303, 305, 306 Compliant <span className="field-verified">✓ Filed</span></span>
              </div>
              <div className="passport-field">
                <span className="field-label">Immutable Record</span>
                <span className="field-value">Blockchain Hash: 0x4f8a...c21d</span>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '16px', color: '#a89080', fontFamily: 'Arial, sans-serif', lineHeight: 1.7, marginBottom: '24px' }}>
                As ESG compliance and supply chain due diligence requirements tighten globally, OreTrade&apos;s Digital Product Passport gives buyers instant, verifiable proof of ethical sourcing at the point of trade.
              </p>
              <div className="passport-icons">
                {[
                  { icon: '📍', label: 'Mine of Origin' },
                  { icon: '🧪', label: 'Assay Certification' },
                  { icon: '🕊️', label: 'Conflict Free Verification' },
                  { icon: '🔗', label: 'Chain of Custody' },
                  { icon: '🌱', label: 'ESG Disclosures' },
                  { icon: '🔐', label: 'Immutable Record' },
                ].map(p => (
                  <div key={p.label} className="pp-icon">
                    <div className="icon">{p.icon}</div>
                    <p>{p.label}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '28px' }}>
                <a href="/traceability" className="btn-primary">Learn About Our Passport →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      <section className="investors" id="investors">
        <div className="section-inner">
          <p className="section-label">For Investors</p>
          <h2 className="section-title">The opportunity</h2>
          <p className="section-sub">The global mining and metals market is one of the world&apos;s largest industries. Most of it still trades offline.</p>
          <div className="investors-inner">
            <div>
              <div className="stat-grid">
                {[
                  { num: '$8.4T', label: 'Global mining and metals market size' },
                  { num: '65%', label: 'Still traded through offline channels' },
                  { num: '180+', label: 'Countries with active mining operations' },
                  { num: '2030', label: 'Critical mineral demand tripling by' },
                ].map(s => (
                  <div key={s.num} className="stat-box">
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="thesis-card">
              <h3>Investment Thesis</h3>
              <ul>
                <li>Digital transformation of one of the world&apos;s last offline commodity markets</li>
                <li>Regulatory tailwinds driving mandatory supply chain traceability globally</li>
                <li>Critical mineral demand surge driven by EV, battery and clean energy sectors</li>
                <li>Built by the team behind WasteTrade.com, proven in B2B circular economy markets</li>
                <li>Early mover advantage in a fragmented, high-value and underserved market</li>
              </ul>
              <a href="#contact" className="btn-primary" style={{ textAlign: 'center', display: 'block', marginTop: '24px', textDecoration: 'none' }}>Request Investor Deck</a>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <div className="brand-strip">
        <OreTradeLogoSVG size={80} />
        <h2>OreTrade.com</h2>
        <p>From Mine to Market, Ethically. The global marketplace for responsible metals and minerals trade.</p>
      </div>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-inner">
          <div className="contact-inner">
            <div className="contact-info">
              <h2>Get in touch</h2>
              <p>Whether you&apos;re a mining operator, commodity buyer, logistics partner or potential investor , we want to hear from you.</p>
              <div className="contact-detail"><span>✉️</span><span>hello@oretrade.com</span></div>
              <div className="contact-detail"><span>🌍</span><span>Global operations</span></div>
              <div className="contact-detail"><span>🚀</span><span>Platform launching 2026</span></div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
