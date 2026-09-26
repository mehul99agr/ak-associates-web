import { BOOKING_LINK, WHATSAPP_LINK } from '@/lib/constants'

export default function ResultCTA({ heading, description }: { heading: string; description: string }) {
  return (
    <div style={{ marginTop: '24px', padding: '24px', background: 'var(--primary)', borderRadius: '12px', textAlign: 'center' }}>
      <p style={{ margin: '0 0 6px', color: '#fff', fontWeight: 800, fontSize: '1.05rem' }}>{heading}</p>
      <p style={{ margin: '0 0 16px', color: '#fff', fontSize: '0.9rem', opacity: 0.9 }}>{description}</p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--accent)', color: '#fff', fontWeight: 700 }}>Book Free Consultation</a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Ask on WhatsApp</a>
      </div>
    </div>
  )
}
