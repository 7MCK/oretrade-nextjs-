import { NextResponse } from 'next/server'
import { REE_PRICES } from '../../../lib/ree-prices-data'

export async function GET() {
  return NextResponse.json(
    {
      prices: REE_PRICES,
      updatedAt: '2026-04',
      note: 'Indicative OTC reference prices. Not exchange-traded. Sources: Fastmarkets, Metal Pages, industrial market data.',
    },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    },
  )
}
