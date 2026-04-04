'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="contact-form">
      {!submitted ? (
        <div>
          <div className="form-row">
            <div className="form-group"><label>First Name</label><input type="text" placeholder="John" /></div>
            <div className="form-group"><label>Last Name</label><input type="text" placeholder="Smith" /></div>
          </div>
          <div className="form-group"><label>Email</label><input type="email" placeholder="john@company.com" /></div>
          <div className="form-group">
            <label>I am a...</label>
            <select>
              <option value="">Select your role</option>
              <option>Mining Operator / Producer</option>
              <option>Commodity Buyer / Trader</option>
              <option>Investor</option>
              <option>Logistics / Freight Partner</option>
              <option>Technology Partner</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group"><label>Message</label><textarea placeholder="Tell us about your interest in OreTrade..." /></div>
          <button className="form-submit" onClick={() => setSubmitted(true)}>Send Message</button>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
          <h3 style={{ fontSize: '22px', color: 'var(--cream)', marginBottom: '8px' }}>Message received</h3>
          <p style={{ color: '#a89080', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>We&apos;ll be in touch shortly.</p>
        </div>
      )}
    </div>
  )
}
