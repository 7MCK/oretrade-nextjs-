export function OreTradeLogoSVG({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 38 Q24 8 42 38" stroke="#7B3A10" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M11 38 Q24 14 37 38" stroke="#C97A22" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <rect x="22" y="26" width="4" height="10" rx="1" fill="#7B3A10"/>
      <circle cx="24" cy="24" r="3" fill="#C97A22"/>
      <line x1="24" y1="21" x2="24" y2="14" stroke="#7B3A10" strokeWidth="1.5"/>
      <line x1="24" y1="14" x2="20" y2="18" stroke="#7B3A10" strokeWidth="1.5"/>
      <line x1="24" y1="14" x2="28" y2="18" stroke="#7B3A10" strokeWidth="1.5"/>
    </svg>
  )
}
