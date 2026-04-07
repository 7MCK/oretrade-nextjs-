'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type ReePrice = {
  id: string
  symbol: string
  name: string
  grade: string
  priceUsd: number
  unit: string
  ytdChange: string
  ytdUp: boolean | null
  exportControlled: boolean
  note: string
  href: string
  updatedAt: string
}

type Props = {
  /** Show only these element IDs */
  filter?: string[]
  /** Compact layout */
  compact?: boolean
  /** Hide "view market" links */
  noLinks?: boolean
}

export default function ReePriceWidget({ filter, compact, noLinks }: Props) {
  const [prices, setPrices] = useState<ReePrice[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/ree-prices')
      .then((r) => r.json())
      .then((d) => { setPrices(d.prices); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const items = filter ? prices?.filter((p) => filter.includes(p.id)) : prices

  if (loading) {
    return (
      <div className="price-widget-loading">
        <div className="price-widget-spinner" />
        <span>Loading rare earth prices...</span>
      </div>
    )
  }

  if (!items?.length) return null

  return (
    <div className={`price-widget ree-price-widget ${compact ? 'price-widget-compact' : ''}`}>
      <div className="price-widget-header">
        <span className="price-widget-label">OTC REFERENCE PRICES · USD</span>
        <span className="price-widget-refresh" style={{ color: '#5a4030' }}>Updated Apr 2026 · Fastmarkets / Metal Pages</span>
      </div>
      <div className={`price-widget-grid ${compact ? 'price-widget-grid-2' : ''}`}>
        {items.map((p) => (
          <div key={p.id} className="price-widget-item ree-price-item">
            <div className="ree-symbol">{p.symbol}</div>
            <div className="pwi-name">{p.name}</div>
            <div className="pwi-price">
              {p.priceUsd >= 10
                ? `$${p.priceUsd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                : `$${p.priceUsd.toFixed(2)}`}
              <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#7a6050' }}> {p.unit}</span>
            </div>
            <div className={`pwi-change ${p.ytdUp === true ? 'pwi-up' : p.ytdUp === false ? 'pwi-down' : 'pwi-stable'}`}>
              {p.ytdUp === true ? '▲' : p.ytdUp === false ? '▼' : '—'} {p.ytdChange} YTD
            </div>
            {p.exportControlled && (
              <div className="ree-controlled-badge">⚠ Export Controlled</div>
            )}
            <div className="pwi-meta">{p.grade}</div>
            {!noLinks && (
              <Link href={p.href} className="ree-market-link">View market →</Link>
            )}
          </div>
        ))}
      </div>
      <p className="price-widget-disclaimer">
        Indicative OTC reference prices only — rare earths are not exchange-traded. Actual prices vary by purity, volume, origin, and contract terms. Not financial advice. Sources: Fastmarkets, Metal Pages, industrial market data.
      </p>
    </div>
  )
}
