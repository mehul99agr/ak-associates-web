import TrackedLink from './TrackedLink'
import { BOOKING_LINK, OFFICES } from '@/lib/constants'

const EMAIL = `mailto:${OFFICES.nashik.email}`
const CALL = `tel:${OFFICES.nashik.phone}`
const WHATSAPP = OFFICES.nashik.whatsapp
const BOOKING = BOOKING_LINK

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-10 6L2 7"/>
    </svg>
  )
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
function IconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

export default function FloatingContact() {
  return (
    <>
      {/* Desktop: floating booking button */}
      <TrackedLink className="book-fab" href={BOOKING} aria-label="Book a call: free 15-minute intro or 30-minute advice" title="Book a call: free 15-minute intro or 30-minute advice" method="booking" location="floating_fab">
        <IconCalendar />
      </TrackedLink>

      {/* Mobile: sticky bottom action bar */}
      <nav className="mobile-actionbar" aria-label="Quick contact">
        <TrackedLink href={CALL} aria-label="Call us" method="call" location="mobile_actionbar"><IconPhone /><span>Call</span></TrackedLink>
        <TrackedLink href={WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp us" method="whatsapp" location="mobile_actionbar"><IconChat /><span>WhatsApp</span></TrackedLink>
        <TrackedLink href={EMAIL} aria-label="Email us" method="email" location="mobile_actionbar"><IconMail /><span>Email</span></TrackedLink>
        <TrackedLink href={BOOKING} className="primary" aria-label="Book a consultation" method="booking" location="mobile_actionbar"><IconCalendar /><span>Book</span></TrackedLink>
      </nav>
    </>
  )
}
