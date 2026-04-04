'use client'

const PRICES = [
  { name: 'Gold (XAU)', value: '$3,082.40', change: '▲ +0.8%', up: true },
  { name: 'Silver (XAG)', value: '$34.12', change: '▲ +1.2%', up: true },
  { name: 'Copper (HG)', value: '$4.89/lb', change: '▼ -0.3%', up: false },
  { name: 'Iron Ore (62% Fe)', value: '$108.50/t', change: '▲ +0.5%', up: true },
  { name: 'Nickel', value: '$15,840/t', change: '▼ -0.6%', up: false },
  { name: 'Platinum', value: '$984.00', change: '▲ +0.4%', up: true },
  { name: 'Lithium Carbonate', value: '$12,400/t', change: '▼ -1.1%', up: false },
  { name: 'Cobalt', value: '$26,500/t', change: '▲ +0.2%', up: true },
]

export default function Ticker() {
  const items = [...PRICES, ...PRICES]
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items.map((p, i) => (
          <span key={i} className="tick-item">
            {p.name} <strong>{p.value}</strong>{' '}
            <span className={p.up ? 'tick-up' : 'tick-down'}>{p.change}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
