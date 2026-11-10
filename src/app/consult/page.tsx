import type { Metadata } from 'next'
import TrackedLink from '../TrackedLink'
import ConsultCheckout from './ConsultCheckout'
import { CONSULT_OFFER } from '@/lib/consult'
import { OFFICES, OG_IMAGES } from '@/lib/constants'
import { buildBreadcrumbLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: `Book a ${CONSULT_OFFER.minutes}-minute call with a partner for ₹${CONSULT_OFFER.price} (adjusted against fees); you also get their WhatsApp number. Email is always free.`,
  alternates: { canonical: 'https://agrawalkhandelwal.com/consult' },
  openGraph: {
    title: 'Book a Consultation | Agrawal Khandelwal & Associates LLP',
    description: 'Book a 30-minute consultation call with a partner. Email is always free.',
    url: 'https://agrawalkhandelwal.com/consult',
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBreadcrumbLd([
  { name: 'Home', item: 'https://agrawalkhandelwal.com' },
  { name: 'Book a Consultation', item: 'https://agrawalkhandelwal.com/consult' },
])

export default function Consult() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem' }}>
              <span className="section-badge">Book a Consultation</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Talk to a Chartered Accountant</h1>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>
                A small fee keeps our calendar for people who are ready to work on their matter. The call fee is adjusted against our professional fee if you engage us. Email is always free.
              </p>
            </div>

            <ConsultCheckout />

            <div className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Prefer email? It&apos;s free.</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.25rem' }}>Write to us with your question and documents. We reply within one business day.</p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <TrackedLink href={`mailto:${OFFICES.nashik.email}`} className="btn btn-outline" method="email" location="consult_page">{OFFICES.nashik.email}</TrackedLink>
                <TrackedLink href={`mailto:${OFFICES.sillod.email}`} className="btn btn-outline" method="email" location="consult_page">{OFFICES.sillod.email}</TrackedLink>
              </div>
            </div>

            <div style={{ maxWidth: '760px', margin: '3rem auto 0', color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              <h2 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }} id="refunds">Payments, refunds and cancellations</h2>
              <p>Payments are processed by Razorpay. We do not see or store your card or UPI details.</p>
              <p>If we cancel or cannot honour a booked call, the call fee is refunded in full to the original payment method. If you need to move your slot, reply to the calendar invite at least 24 hours before the call. Calls missed without notice are not refunded.</p>
              <p>If a payment is deducted but the calendar link and WhatsApp number do not appear, email {OFFICES.nashik.email} with your payment ID and we will send them or refund you.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
