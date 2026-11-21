import type { Metadata } from 'next'
import Link from 'next/link'
import BookingConversion from './BookingConversion'
import { OFFICES } from '@/lib/constants'

// Set this URL as the "redirect after booking" page in Zoho Bookings so every paid
// booking is counted in GA4 (see BookingConversion). Not in the sitemap; noindex.
export const metadata: Metadata = {
  title: 'Booking Confirmed',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://agrawalkhandelwal.com/consult/booked' },
}

export default function Booked() {
  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
      <BookingConversion />
      <div className="section">
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <span className="section-badge">Booking confirmed</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Thank you. Your call is booked.</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            Your confirmation email has the Google Meet link and our WhatsApp number for sending documents. Send anything relevant before the call so we can use the time on answers.
          </p>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
            Did not get the email within an hour? Write to {OFFICES.nashik.email}.
          </p>
          <Link href="/blog" className="btn btn-outline">Read our guides while you wait</Link>
        </div>
      </div>
    </div>
  )
}
