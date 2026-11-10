import TrackedLink from './TrackedLink'
import { BOOKING_LINK, OFFICES } from '@/lib/constants'

const EMAIL = `mailto:${OFFICES.nashik.email}`
const BOOKING = BOOKING_LINK

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-10 6L2 7"/>
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
      <TrackedLink className="book-fab" href={BOOKING} aria-label="Book a 30-minute call" title="Book a 30-minute call" method="booking" location="floating_fab">
        <IconCalendar />
      </TrackedLink>

      {/* Mobile: sticky bottom action bar */}
      <nav className="mobile-actionbar" aria-label="Quick contact">
        <TrackedLink href={EMAIL} aria-label="Email us" method="email" location="mobile_actionbar"><IconMail /><span>Email</span></TrackedLink>
        <TrackedLink href={BOOKING} className="primary" aria-label="Book a consultation" method="booking" location="mobile_actionbar"><IconCalendar /><span>Book</span></TrackedLink>
      </nav>
    </>
  )
}
