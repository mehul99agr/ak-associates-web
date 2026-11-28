import Link from 'next/link'
import { BOOKING_LINK } from '@/lib/constants'

// Short service offer shown near the top of NRI and US cross-border posts, so a
// reader who has the problem the post describes sees what we do without
// scrolling to the end. No fees or prices here (user decision Nov 28, 2026).

type Variant = 'nri-seller' | 'nri-buyer' | 'nri-itr' | 'nri-ldc' | 'nri-banking' | 'us-entity' | 'us-structure' | 'startup' | 'startup-funding'

const OFFERS: Record<Variant, { label: string; text: string; cta: string; topic: string; more: { label: string; href: string } }> = {
  'nri-seller': {
    label: 'Selling property in India as an NRI?',
    text: 'We work out your capital gains, apply for the lower TDS certificate before the sale, and handle the Form 145/146 paperwork to send the money abroad.',
    cta: 'Book an NRI property call',
    topic: 'nri-tax',
    more: { label: 'See NRI packages', href: '/nri-tax-advisory#nri-property-sale' },
  },
  'nri-buyer': {
    label: 'Buying property from an NRI?',
    text: 'We calculate the TDS, deposit it and file the return for you: Schedule E of Form 141 for individual and HUF buyers, or TAN and Form 27Q for companies, firms and LLPs. If you are the NRI seller, we also handle the capital gains and repatriation side.',
    cta: 'Get the TDS handled',
    topic: 'nri-tax',
    more: { label: 'NRI services', href: '/nri-tax-advisory' },
  },
  'nri-itr': {
    label: 'Need your Indian tax return filed from abroad?',
    text: 'We check your residential status, claim DTAA relief and TDS refunds, and file the return remotely.',
    cta: 'Book an NRI tax call',
    topic: 'nri-tax',
    more: { label: 'See NRI packages', href: '/nri-tax-advisory#nri-itr' },
  },
  'nri-ldc': {
    label: 'Want less TDS deducted as an NRI?',
    text: 'We work out the tax you actually owe and apply for a lower TDS certificate (Form 128, earlier Form 13), so the buyer or payer deducts only that.',
    cta: 'Get a lower TDS certificate',
    topic: 'nri-tax',
    more: { label: 'See NRI packages', href: '/nri-tax-advisory#nri-lower-tds-certificate' },
  },
  'nri-banking': {
    label: 'Sorting out your NRO, NRE or PIS accounts?',
    text: 'We tell you which account each kind of money belongs in, cut the TDS on NRO interest with DTAA relief, and handle the Form 145/146 paperwork when you move money abroad. Start with a free 15-minute call.',
    cta: 'Book a free NRI call',
    topic: 'nri-banking',
    more: { label: 'See NRI packages', href: '/nri-tax-advisory#packages' },
  },
  'startup-funding': {
    label: 'Raising money, issuing ESOPs or taking foreign investment?',
    text: 'We handle the valuation, the FEMA filings for foreign investors, ESOP set-up and the compliance clean-up that investors check in due diligence. Start with a free 15-minute call.',
    cta: 'Book a free startup call',
    topic: 'startups',
    more: { label: 'Startup services', href: '/startups' },
  },
  startup: {
    label: 'Starting a company in India?',
    text: 'We incorporate your private limited company and run its first year of ROC compliance (INC-20A, first board meeting, auditor appointment, AOC-4 and MGT-7).',
    cta: 'Book a free startup call',
    topic: 'startups',
    more: { label: 'See the startup package', href: '/startups#packages' },
  },
  'us-structure': {
    label: 'Choosing a structure across India, the US or the UAE?',
    text: 'We work out the FEMA route, the tax on each flow and the filings for every entity before any money or shares move, then run the yearly compliance in each country. Start with a free 15-minute call.',
    cta: 'Book a free structuring call',
    topic: 'us-cross-border',
    more: { label: 'US cross-border services', href: '/us-cross-border' },
  },
  'us-entity': {
    label: 'Running a US LLC or C-Corp from India?',
    text: 'Our team prepares your US filings and our US partner reviews and files them, while we keep your Indian side (ITR, FEMA, transfer pricing) in step.',
    cta: 'Book a US compliance call',
    topic: 'us-cross-border',
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
        <Link href={`${BOOKING_LINK}?topic=${o.topic}`} className="btn btn-primary">{o.cta}</Link>
        <Link href={o.more.href} className="btn btn-outline">{o.more.label}</Link>
      </div>
    </aside>
  )
}
