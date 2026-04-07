import { NextResponse } from 'next/server'

// Yahoo Finance symbols for each commodity
const SYMBOLS: Record<string, { symbol: string; name: string; unit: string; market: string }> = {
  gold:      { symbol: 'GC=F',  name: 'Gold',            unit: 'per troy oz',  market: 'COMEX' },
  silver:    { symbol: 'SI=F',  name: 'Silver',          unit: 'per troy oz',  market: 'COMEX' },
  platinum:  { symbol: 'PL=F',  name: 'Platinum',        unit: 'per troy oz',  market: 'NYMEX' },
  palladium: { symbol: 'PA=F',  name: 'Palladium',       unit: 'per troy oz',  market: 'NYMEX' },
  copper:    { symbol: 'HG=F',  name: 'Copper',          unit: 'per lb',       market: 'COMEX' },
  aluminium: { symbol: 'ALI=F', name: 'Aluminium',       unit: 'per tonne',    market: 'CME' },
  ironore:   { symbol: 'TIO=F', name: 'Iron Ore 62% Fe', unit: 'per tonne',    market: 'TSI/CME' },
}

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

async function fetchYahoo(symbol: string): Promise<{ price: number; prevClose: number } | null> {
  try {
    const url = `https://query2.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=5d`
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      next: { revalidate: 60 }, // cache for 60s at the CDN level
    })
    if (!res.ok) return null
    const json = await res.json()
    const meta = json?.chart?.result?.[0]?.meta
    if (!meta) return null
    const price = meta.regularMarketPrice as number
    const prevClose = (meta.chartPreviousClose ?? meta.previousClose ?? 0) as number
    return { price, prevClose }
  } catch {
    return null
  }
}

export async function GET() {
  const now = new Date().toISOString()

  const results = await Promise.all(
    Object.entries(SYMBOLS).map(async ([id, cfg]) => {
      const data = await fetchYahoo(cfg.symbol)
      if (!data) return null
      const change = data.price - data.prevClose
      const changePct = data.prevClose > 0 ? (change / data.prevClose) * 100 : 0
      return {
        id,
        name: cfg.name,
        price: data.price,
        prevClose: data.prevClose,
        change,
        changePct,
        unit: cfg.unit,
        market: cfg.market,
        currency: 'USD',
        updatedAt: now,
      } as PriceEntry
    }),
  )

  const prices = results.filter(Boolean) as PriceEntry[]

  return NextResponse.json(
    { prices, updatedAt: now },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    },
  )
}
