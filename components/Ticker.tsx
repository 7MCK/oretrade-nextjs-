'use client'

import { useEffect, useState } from 'react'

type PriceEntry = {
  id: string
  name: string
  price: number
  changePct: number
  unit: string
}

// Fallback static prices shown before live data loads
const FALLBACK = [
  { id: 'gold',      name: 'Gold',            price: 3082.40, changePct:  0.8,  unit: 'per troy oz' },
  { id: 'silver',    name: 'Silver',          price: 34.12,   changePct:  1.2,  unit: 'per troy oz' },
  { id: 'copper',    name: 'Copper',          price: 4.89,    changePct: -0.3,  unit: 'per lb' },
  { id: 'ironore',   name: 'Iron Ore 62% Fe', price: 108.50,  changePct:  0.5,  unit: 'per tonne' },
  { id: 'nickel',    name: 'Nickel',          price: 15840,   changePct: -0.6,  unit: 'per tonne' },
  { id: 'platinum',  name: 'Platinum',        price: 984.00,  changePct:  0.4,  unit: 'per troy oz' },
  { id: 'aluminium', name: 'Aluminium',       price: 2640,    changePct: -0.2,  unit: 'per tonne' },
  { id: 'palladium', name: 'Palladium',       price: 1050,    changePct:  0.3,  unit: 'per troy oz' },
]

function fmtTicker(price: number, unit: string): string {
  if (unit === 'per lb') return `$${price.toFixed(3)}/lb`
  if (price < 100) return `$${price.toFixed(2)}`
  return `$${price.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
}

export default function Ticker() {
  const [items, setItems] = useState<PriceEntry[]>(FALLBACK)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/prices')
        if (!res.ok) return
        const json = await res.json()
        if (json?.prices?.length) setItems(json.prices)
      } catch {
        // keep fallback
      }
    }
    load()
    const interval = setInterval(load, 60_000)
    return () => clearInterval(interval)
  }, [])

  const doubled = [...items, ...items]

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {doubled.map((p, i) => {
          const up = p.changePct >= 0
          return (
            <span key={i} className="tick-item">
              {p.name}{' '}
              <strong>{fmtTicker(p.price, p.unit)}</strong>{' '}
              <span className={up ? 'tick-up' : 'tick-down'}>
                {up ? '▲' : '▼'} {Math.abs(p.changePct).toFixed(2)}%
              </span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
