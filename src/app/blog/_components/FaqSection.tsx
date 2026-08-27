import type { FaqPair } from '@/lib/schema'

export default function FaqSection({ faqs, heading = 'Frequently Asked Questions' }: { faqs: FaqPair[]; heading?: string }) {
  return (
    <div style={{ marginTop: '3rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{heading}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map(([q, a], i) => (
          <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{q}</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
