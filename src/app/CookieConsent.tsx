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
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border)',
        padding: '1rem 1.25rem',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.16)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-light)', maxWidth: '640px', lineHeight: 1.6 }}>
        We use cookies for website analytics (Google Analytics) to understand how visitors use this site. No personal data is sold or shared with third parties for marketing. Read our{' '}
        <Link href="/privacy-policy" style={{ color: 'var(--primary)', fontWeight: 600 }}>Privacy Policy</Link>.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
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
