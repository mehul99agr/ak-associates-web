'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from './cookieConsentConfig'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_CONSENT_KEY)) setVisible(true)
  }, [])

  const choose = (value: 'granted' | 'denied') => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value)
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="cookie-banner"
    >
      <p className="cookie-banner-text">
        We use cookies for website analytics (Google Analytics) to understand how visitors use this site. No personal data is sold or shared with third parties for marketing. Read our{' '}
        <Link href="/privacy-policy" style={{ color: 'var(--primary)', fontWeight: 600 }}>Privacy Policy</Link>.
      </p>
      <div className="cookie-banner-actions">
        <button onClick={() => choose('denied')} className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.6rem 1.1rem' }}>
          Decline
        </button>
        <button onClick={() => choose('granted')} className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem 1.1rem' }}>
          Accept
        </button>
      </div>
    </div>
  )
}
