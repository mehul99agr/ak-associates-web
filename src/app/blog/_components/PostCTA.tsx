import Link from 'next/link'
import { BOOKING_LINK } from '@/lib/constants'

// segment: the closing box on NRI, US and startup posts always books the free call
// with the right form topic and links to that segment's packages, whatever the post
// passed for its buttons (decided Nov 25, 2026; see CLAUDE.md "Growth goal").
export type Segment = 'nri' | 'us' | 'us-structure' | 'startup'
const SEGMENTS: Record<Segment, { topic: string; label: string; href: string }> = {
  nri: { topic: 'nri-tax', label: 'See NRI packages', href: '/nri-tax-advisory#packages' },
  us: { topic: 'us-cross-border', label: 'See US packages', href: '/us-cross-border#packages' },
  'us-structure': { topic: 'us-cross-border', label: 'US cross-border services', href: '/us-cross-border' },
  startup: { topic: 'startups', label: 'See startup package', href: '/startups#packages' },
}

export default function PostCTA({
  heading,
  description,
  primaryLabel = 'Book a Consultation',
  primaryHref = BOOKING_LINK,
  primaryExternal = true,
  secondaryLabel,
  secondaryHref,
  secondaryExternal = false,
  marginTop = '3.5rem',
  background = 'var(--bg-main)',
  segment,
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
  segment?: Segment
}) {
  if (segment) {
    const s = SEGMENTS[segment]
    primaryLabel = 'Book a Free 15-min Call'
    primaryHref = `${BOOKING_LINK}?topic=${s.topic}`
    secondaryLabel = s.label
    secondaryHref = s.href
    secondaryExternal = false
  }
  return (
    <div style={{ marginTop, padding: '2.5rem', background, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
      <h3 style={{ marginBottom: '0.75rem' }}>{heading}</h3>
      <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{description}</p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        {primaryExternal && !primaryHref.startsWith('/') ? (
          <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{primaryLabel}</a>
        ) : (
          <Link href={primaryHref} className="btn btn-primary">{primaryLabel}</Link>
        )}
        {secondaryLabel && secondaryHref && (
          (secondaryExternal && !secondaryHref.startsWith('/')) || secondaryHref.startsWith('mailto:') ? (
            <a href={secondaryHref} {...(secondaryHref.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })} className="btn btn-outline">{secondaryLabel}</a>
          ) : (
            <Link href={secondaryHref} className="btn btn-outline">{secondaryLabel}</Link>
          )
        )}
      </div>
    </div>
  )
}
