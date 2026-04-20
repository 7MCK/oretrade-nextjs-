'use client'
import { useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xwvwwepq')

  useEffect(() => {
    if (state.succeeded && typeof window !== 'undefined' && window.gtag) {
      // GA4 / Google Ads conversion event
      window.gtag('event', 'generate_lead', {
        event_category: 'contact_form',
        event_label: 'waitlist_signup',
        value: 1,
      })
      // Google Ads conversion
      window.gtag('event', 'conversion', {
        send_to: 'AW-18063866280',
        event_category: 'contact_form',
        event_label: 'waitlist_signup',
      })
    }
  }, [state.succeeded])

  if (state.succeeded) {
    return (
      <div className="contact-form" style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
        <h3 style={{ fontSize: '22px', color: 'var(--cream)', marginBottom: '8px' }}>Message received</h3>
        <p style={{ color: '#a89080', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>We will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="John" required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Smith" required />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="john@company.com" required />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
        </div>
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
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" placeholder="Tell us about your interest in OreTrade..." />
          <ValidationError field="message" prefix="Message" errors={state.errors} />
        </div>
        <button className="form-submit" type="submit" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
