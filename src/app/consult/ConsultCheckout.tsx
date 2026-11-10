import TrackedLink from '../TrackedLink'
import { CONSULT_BOOKING_URL, CONSULT_HOST, CONSULT_OFFER } from '@/lib/consult'

// Booking and payment both happen on Zoho Bookings (see src/lib/consult.ts).
export default function ConsultCheckout() {
  return (
    <div className="card" style={{ maxWidth: '560px', margin: '0 auto', display: 'flex', flexDirection: 'column', border: '2px solid var(--primary)' }}>
      <h2 style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>{CONSULT_OFFER.title}</h2>
      <p style={{ color: 'var(--text-light)', margin: 0 }}>With {CONSULT_HOST}</p>
      <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', margin: '0.5rem 0', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
        ₹{CONSULT_OFFER.price}
      </p>
      <ul style={{ color: 'var(--text-light)', lineHeight: 1.8, paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
        {CONSULT_OFFER.points.map((pt) => <li key={pt}>{pt}</li>)}
      </ul>
      <TrackedLink
        href={CONSULT_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{ width: '100%', textAlign: 'center' }}
        method="booking"
        location="consult_page"
      >
        Book and pay ₹{CONSULT_OFFER.price}
      </TrackedLink>
    </div>
  )
}
