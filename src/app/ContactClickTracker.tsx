'use client'
import { useEffect } from 'react'

type Method = 'call' | 'whatsapp' | 'email' | 'booking'

function methodFor(href: string): Method | null {
  if (href.startsWith('tel:')) return 'call'
  if (href.startsWith('mailto:')) return 'email'
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return 'whatsapp'
  if (href.startsWith('https://calendar.app.google/')) return 'booking'
  return null
}

// Site-wide fallback: fires the same contact_click event as TrackedLink for any
// call / WhatsApp / email / booking link that is not already a TrackedLink
// (e.g. the plain <a> CTAs inside blog posts).
export default function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a')
      if (!a || a.hasAttribute('data-tracked')) return
      const method = methodFor(a.getAttribute('href') || '')
      if (!method) return
      window.gtag?.('event', 'contact_click', { method, location: `page:${window.location.pathname}` })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
