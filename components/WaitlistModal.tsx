'use client'
import { useState, useEffect } from 'react'

export default function WaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) setTimeout(() => setSubmitted(false), 300)
  }, [open])

  if (!open) return null

  return (
    <div className={`modal-overlay open`} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        {!submitted ? (
          <div>
            <div className="coming-soon-badge">Coming Soon</div>
            <h2>Join the waitlist</h2>
            <p>OreTrade is launching in 2026. Be first to access the global marketplace for ethical metals and minerals trade.</p>
            <div className="form-group"><label>Full Name</label><input type="text" placeholder="John Smith" /></div>
            <div className="form-group"><label>Email</label><input type="email" placeholder="john@company.com" /></div>
            <div className="form-group">
              <label>Role</label>
              <select>
                <option value="">Select your role</option>
                <option>Mining Operator / Producer</option>
                <option>Commodity Buyer / Trader</option>
                <option>Investor</option>
                <option>Logistics / Freight Partner</option>
                <option>Other</option>
              </select>
            </div>
            <button className="form-submit" onClick={() => setSubmitted(true)}>Join Waitlist</button>
          </div>
        ) : (
          <div className="modal-confirm">
            <div className="check">🎉</div>
            <h3>You&apos;re on the list</h3>
            <p>We&apos;ll be in touch when OreTrade launches. Thank you for your interest.</p>
          </div>
        )}
      </div>
    </div>
  )
}
