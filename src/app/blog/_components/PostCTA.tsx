import Link from 'next/link'
import { BOOKING_LINK } from '@/lib/constants'

export default function PostCTA({
  heading,
  description,
  primaryLabel = 'Book Free Consultation',
  primaryHref = BOOKING_LINK,
  primaryExternal = true,
  secondaryLabel,
  secondaryHref,
  secondaryExternal = false,
  marginTop = '3.5rem',
  background = 'var(--bg-main)',
}: {
  heading: string
  description: string
  primaryLabel?: string
  primaryHref?: string
  primaryExternal?: boolean
  secondaryLabel?: string
  secondaryHref?: string
  secondaryExternal?: boolean
  marginTop?: string
  background?: string
}) {
  return (
    <div style={{ marginTop, padding: '2.5rem', background, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
      <h3 style={{ marginBottom: '0.75rem' }}>{heading}</h3>
      <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{description}</p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        {primaryExternal ? (
          <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{primaryLabel}</a>
        ) : (
          <Link href={primaryHref} className="btn btn-primary">{primaryLabel}</Link>
        )}
        {secondaryLabel && secondaryHref && (
          secondaryExternal ? (
            <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline">{secondaryLabel}</a>
          ) : (
            <Link href={secondaryHref} className="btn btn-outline">{secondaryLabel}</Link>
          )
        )}
      </div>
    </div>
  )
}
