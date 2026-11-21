import TrackedLink from '../TrackedLink'
import { CONSULT_BOOKING_URL, CONSULT_BOOKING_URL_INTL, CONSULT_HOST, CONSULT_OFFER } from '@/lib/consult'

// Booking and payment both happen on Zoho Bookings (see src/lib/consult.ts).
export default function ConsultCheckout() {
  return (
    <div className="card" style={{ transform: 'none', display: 'flex', flexDirection: 'column', border: '2px solid var(--primary)', height: '100%' }}>
      <span className="section-badge" style={{ alignSelf: 'flex-start' }}>Detailed advice</span>
      <h2 style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>{CONSULT_OFFER.title}</h2>
      <p style={{ color: 'var(--text-light)', margin: 0 }}>With {CONSULT_HOST}</p>
      <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', margin: '0.5rem 0 0.25rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
        {CONSULT_OFFER.priceLabel}
      </p>
      <p style={{ fontWeight: 700, color: 'var(--success)', margin: '0 0 0.5rem' }}>{CONSULT_OFFER.headline}</p>
      <p style={{ color: 'var(--text-light)', margin: '0 0 1rem', fontSize: '0.9rem' }}>
        Outside India? The fee is charged in INR ({CONSULT_OFFER.usdApprox}).
      </p>
      <ul style={{ color: 'var(--text-light)', lineHeight: 1.8, paddingLeft: '1.2rem', marginBottom: '1.5rem', flexGrow: 1 }}>
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
        Book and pay {CONSULT_OFFER.priceLabel}
      </TrackedLink>
      {CONSULT_BOOKING_URL_INTL && (
        <TrackedLink
          href={CONSULT_BOOKING_URL_INTL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{ width: '100%', textAlign: 'center', marginTop: '0.75rem' }}
          method="booking"
          location="consult_page_intl"
        >
          Booking from outside India? Pay in US$
        </TrackedLink>
      )}
    </div>
  )
}
