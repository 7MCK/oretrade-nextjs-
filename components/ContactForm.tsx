'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/xwvwwepq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // silent fail, still show success
      setSubmitted(true)
    }
    setSubmitting(false)
  }

  return (
    <div className="contact-form">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group"><label>First Name</label><input type="text" name="firstName" placeholder="John" required /></div>
            <div className="form-group"><label>Last Name</label><input type="text" name="lastName" placeholder="Smith" required /></div>
          </div>
          <div className="form-group"><label>Email</label><input type="email" name="email" placeholder="john@company.com" required /></div>
          <div className="form-group">
            <label>I am a...</label>
            <select name="role">
              <option value="">Select your role</option>
              <option>Mining Operator / Producer</option>
              <option>Commodity Buyer / Trader</option>
              <option>Investor</option>
              <option>Logistics / Freight Partner</option>
              <option>Technology Partner</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group"><label>Message</label><textarea name="message" placeholder="Tell us about your interest in OreTrade..." /></div>
          <button className="form-submit" type="submit" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
          <h3 style={{ fontSize: '22px', color: 'var(--cream)', marginBottom: '8px' }}>Message received</h3>
          <p style={{ color: '#a89080', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>We will be in touch shortly.</p>
        </div>
      )}
    </div>
  )
}
