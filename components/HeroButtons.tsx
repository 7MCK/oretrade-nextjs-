'use client'

export default function HeroButtons({ onWaitlist }: { onWaitlist?: () => void }) {
  return (
    <div className="hero-btns">
      <a href="#contact" className="btn-primary">Join the Waitlist</a>
      <a href="#features" className="btn-secondary">Learn More</a>
    </div>
  )
}
