import Link from 'next/link'
import { BOOKING_LINK } from '@/lib/constants'

// Short service offer shown near the top of NRI and US cross-border posts, so a
// reader who has the problem the post describes sees what we do and the fee
// without scrolling to the end. Fees come from the same numbers as
// src/lib/servicePricing.ts; keep the two in step.

type Variant = 'nri-seller' | 'nri-buyer' | 'nri-itr' | 'us-entity'

const OFFERS: Record<Variant, { label: string; text: string; cta: string; more: { label: string; href: string } }> = {
  'nri-seller': {
    label: 'Selling property in India as an NRI?',
    text: 'We work out your capital gains, apply for the lower TDS certificate before the sale, and handle the Form 145/146 paperwork to send the money abroad. Fixed fee of ₹25,000 to ₹50,000 per property.',
    cta: 'Book an NRI property call',
    more: { label: 'See NRI packages', href: '/nri-tax-advisory#nri-property-sale' },
  },
  'nri-buyer': {
    label: 'Buying property from an NRI?',
    text: 'We calculate the TDS, deposit it and file the return for you: Schedule E of Form 141 for individual and HUF buyers, or TAN and Form 27Q for companies, firms and LLPs. If you are the NRI seller, our property sale package is ₹25,000 to ₹50,000.',
    cta: 'Get the TDS handled',
    more: { label: 'NRI services', href: '/nri-tax-advisory' },
  },
  'nri-itr': {
    label: 'Need your Indian tax return filed from abroad?',
    text: 'We check your residential status, claim DTAA relief and TDS refunds, and file the return remotely. NRI returns start at ₹10,000.',
    cta: 'Book an NRI tax call',
    more: { label: 'See NRI packages', href: '/nri-tax-advisory#nri-itr' },
  },
  'us-entity': {
    label: 'Running a US LLC or C-Corp from India?',
    text: 'Our team prepares your US filings and our US partner reviews and files them, while we keep your Indian side (ITR, FEMA, transfer pricing) in step. US LLC from $850 a year, C-Corp from $1,250 a year.',
    cta: 'Book a US compliance call',
    more: { label: 'See US packages', href: '/us-cross-border#packages' },
  },
}

export default function ServiceOffer({ variant }: { variant: Variant }) {
  const o = OFFERS[variant]
  return (
    <aside style={{ padding: '1.25rem 1.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--primary)', marginBottom: '2rem' }}>
      <p style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '1rem' }}>{o.label}</p>
      <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--text-light)' }}>{o.text}</p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link href={`${BOOKING_LINK}?partner=mehul`} className="btn btn-primary">{o.cta}</Link>
        <Link href={o.more.href} className="btn btn-outline">{o.more.label}</Link>
      </div>
    </aside>
  )
}
