'use client'

import { useEffect, useState, useCallback } from 'react'

type PriceEntry = {
  id: string
  name: string
  price: number
  prevClose: number
  change: number
  changePct: number
  unit: string
  market: string
  currency: string
  updatedAt: string
}

type PricesData = {
  prices: PriceEntry[]
  updatedAt: string
}

type Props = {
  /** Show only these commodity IDs (e.g. ['gold','silver']) — shows all if omitted */
  filter?: string[]
  /** Compact 2-column grid vs full layout */
  compact?: boolean
}

function fmt(price: number, unit: string): string {
  if (unit === 'per lb') {
    return `$${price.toFixed(3)}`
  }
  if (price < 100) return `$${price.toFixed(2)}`
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export default function PriceWidget({ filter, compact }: Props) {
  const [data, setData] = useState<PricesData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null)

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch('/api/prices', { cache: 'no-store' })
      if (!res.ok) throw new Error('fetch failed')
      const json: PricesData = await res.json()
      setData(json)
      setLastRefresh(new Date())
      setError(false)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPrices()
    const interval = setInterval(fetchPrices, 60_000)
    return () => clearInterval(interval)
  }, [fetchPrices])

  const items = filter
    ? data?.prices.filter((p) => filter.includes(p.id))
    : data?.prices

  if (loading) {
    return (
      <div className="price-widget-loading">
        <div className="price-widget-spinner" />
        <span>Loading live prices...</span>
      </div>
    )
  }

  if (error || !items?.length) {
    return (
      <div className="price-widget-error">
        ⚠ Live pricing temporarily unavailable. Please refresh or check back shortly.
      </div>
    )
  }

  return (
    <div className={`price-widget ${compact ? 'price-widget-compact' : ''}`}>
      <div className="price-widget-header">
        <span className="price-widget-label">LIVE PRICES · USD</span>
        {lastRefresh && (
          <span className="price-widget-refresh">
            Updated {lastRefresh.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
            <button onClick={fetchPrices} className="price-widget-btn" title="Refresh prices">↻</button>
          </span>
        )}
      </div>
      <div className={`price-widget-grid ${compact ? 'price-widget-grid-2' : ''}`}>
        {items.map((p) => {
          const up = p.changePct >= 0
          return (
            <div key={p.id} className="price-widget-item">
              <div className="pwi-name">{p.name}</div>
              <div className="pwi-price">{fmt(p.price, p.unit)}</div>
              <div className={`pwi-change ${up ? 'pwi-up' : 'pwi-down'}`}>
                {up ? '▲' : '▼'} {Math.abs(p.changePct).toFixed(2)}%
                <span className="pwi-change-abs"> ({up ? '+' : ''}{p.change.toFixed(2)})</span>
              </div>
              <div className="pwi-meta">{p.unit} · {p.market}</div>
            </div>
          )
        })}
      </div>
      <p className="price-widget-disclaimer">
        Prices sourced from futures markets. 15–20 min delay. For reference only — not financial advice.
      </p>
    </div>
  )
}
