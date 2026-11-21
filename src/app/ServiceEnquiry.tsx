import EnquiryForm from './EnquiryForm'
import { FREE_CALL_OFFER, type EnquiryTopic } from '@/lib/consult'

// "Not ready to book?" section placed above the closing CTA of each service page:
// a free written enquiry, with the topic preselected for that page.
export default function ServiceEnquiry({ topic, heading = 'Have a question first? Ask us, free.' }: { topic: EnquiryTopic; heading?: string }) {
  return (
    <section className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>{heading}</h2>
          <p style={{ color: 'var(--text-light)', margin: 0 }}>
            Tell us your situation and we reply by email within one business day. If a call makes more sense, we will offer you a free {FREE_CALL_OFFER.minutes}-minute slot.
          </p>
        </div>
        <div className="card" style={{ padding: '2rem', transform: 'none' }}>
          <EnquiryForm mode="enquiry" topic={topic} location={`service_${topic}`} />
        </div>
      </div>
    </section>
  )
}
