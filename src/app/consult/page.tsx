import type { Metadata } from 'next'
import Image from 'next/image'
import TrackedLink from '../TrackedLink'
import EnquiryForm from '../EnquiryForm'
import ConsultCheckout from './ConsultCheckout'
import { CONSULT_OFFER, FREE_CALL_OFFER } from '@/lib/consult'
import { OFFICES, OG_IMAGES } from '@/lib/constants'
import { buildBreadcrumbLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: `Start with a free ${FREE_CALL_OFFER.minutes}-minute call with a Chartered Accountant, or book ${CONSULT_OFFER.minutes} minutes of detailed advice for ${CONSULT_OFFER.priceLabel}, adjusted against fees. Google Meet, any time zone.`,
  alternates: { canonical: 'https://agrawalkhandelwal.com/consult' },
  openGraph: {
    title: 'Book a Consultation | Agrawal Khandelwal & Associates LLP',
    description: 'Start with a free 15-minute call with a Chartered Accountant, or book a 30-minute advice session.',
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
                Start with a free {FREE_CALL_OFFER.minutes}-minute intro call to see if we are the right fit, or go straight to a {CONSULT_OFFER.minutes}-minute advice session. Both are on Google Meet, from any time zone.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem', alignItems: 'stretch' }}>
              <div id="free-call" className="card" style={{ transform: 'none', display: 'flex', flexDirection: 'column', scrollMarginTop: '110px' }}>
                <span className="section-badge" style={{ alignSelf: 'flex-start' }}>Free</span>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>{FREE_CALL_OFFER.title}</h2>
                <ul style={{ color: 'var(--text-light)', lineHeight: 1.8, paddingLeft: '1.2rem', marginBottom: '1.25rem' }}>
                  {FREE_CALL_OFFER.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
                <EnquiryForm mode="free-call" location="consult_free_call" readTopicFromUrl />
              </div>

              <ConsultCheckout />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>What happens on the call</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem' }}>
                {[
                  ['Before', 'You get a Google Meet link by email. Send any notices, documents or questions in advance so the time goes on answers, not background.'],
                  ['During', 'A Chartered Accountant walks through your situation, tells you what applies to you, what to file and by when, and what to avoid.'],
                  ['After', 'If you want us to handle the work, you get a written scope and a fixed fee. If not, you leave with clear next steps. No pressure either way.'],
                ].map(([t, d]) => (
                  <div key={t} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{t}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>Who you will speak to</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.25rem', maxWidth: '820px', margin: '0 auto' }}>
                {[
                  { img: '/mehul.jpg', name: 'CA Mehul Agrawal', role: 'Partner, Nashik. Takes all consultation calls. Certified in UAE Corporate Taxation.', href: '/about#mehul-agrawal' },
                  { img: '/rupesh.jpg', name: 'CA Rupesh Khandelwal', role: 'Partner, Sillod. Tax planning, audits and representation before tax authorities. Previously with Deloitte.', href: '/about#rupesh-khandelwal' },
                ].map((p) => (
                  <a key={p.name} href={p.href} style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1rem', textDecoration: 'none' }}>
                    <span style={{ width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                      <Image src={p.img} alt={p.name} width={72} height={72} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </span>
                    <span>
                      <strong style={{ display: 'block', color: 'var(--primary)' }}>{p.name}</strong>
                      <span style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>{p.role}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

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
              <p>The free intro call is not charged. Paid bookings and payments are handled by Zoho Bookings. We do not see or store your card or UPI details.</p>
              <p>If we cancel or cannot honour a booked call, the call fee is refunded in full to the original payment method. If you need to move your slot, use the reschedule link in your booking confirmation at least 24 hours before the call. Calls missed without notice are not refunded.</p>
              <p>If a payment is deducted but you do not receive a booking confirmation, email {OFFICES.nashik.email} with your payment details and we will confirm your slot or refund you.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
