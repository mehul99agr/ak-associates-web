import Link from 'next/link'
import { posts } from '../posts'

type Source = { href: string; label: string }
type Service = { href: string; label: string }

const INCOME_TAX: Source = { href: 'https://www.incometax.gov.in', label: 'Income Tax Department e-filing portal' }
const GST_PORTAL: Source = { href: 'https://www.gst.gov.in', label: 'GST common portal' }
const CBIC: Source = { href: 'https://cbic-gst.gov.in', label: 'CBIC GST notifications' }
const MCA: Source = { href: 'https://www.mca.gov.in', label: 'Ministry of Corporate Affairs' }
const RBI: Source = { href: 'https://www.rbi.org.in', label: 'Reserve Bank of India' }
const STARTUP_INDIA: Source = { href: 'https://www.startupindia.gov.in', label: 'Startup India' }
const UDYAM: Source = { href: 'https://udyamregistration.gov.in', label: 'Udyam Registration portal' }
const EPFO: Source = { href: 'https://www.epfindia.gov.in', label: 'EPFO' }
const ESIC: Source = { href: 'https://www.esic.gov.in', label: 'ESIC' }

// Blog categories that are too small to fill a related list on their own are
// folded into a wider topic group.
const GROUPS: { categories: string[]; service: Service; sources: Source[] }[] = [
  {
    categories: ['Income Tax', 'Tax Planning', 'Tax Reform', 'Tax Compliance'],
    service: { href: '/services', label: 'income tax and compliance services' },
    sources: [INCOME_TAX],
  },
  {
    categories: ['Tax Audit'],
    service: { href: '/services', label: 'audit and tax advisory services' },
    sources: [INCOME_TAX],
  },
  {
    categories: ['GST'],
    service: { href: '/services', label: 'GST registration and filing services' },
    sources: [GST_PORTAL, CBIC],
  },
  {
    categories: ['NRI Taxation'],
    service: { href: '/nri-tax-advisory', label: 'NRI tax advisory' },
    sources: [INCOME_TAX, RBI],
  },
  {
    categories: ['International Tax', 'FEMA & Compliance', 'US Cross-Border'],
    service: { href: '/uae-tax-advisory', label: 'UAE and cross-border tax advisory' },
    sources: [INCOME_TAX, RBI],
  },
  {
    categories: ['Transfer Pricing'],
    service: { href: '/transfer-pricing', label: 'transfer pricing services' },
    sources: [INCOME_TAX],
  },
  {
    categories: ['Startup Advisory', 'Startup Compliance', 'Advisory'],
    service: { href: '/startups', label: 'startup advisory' },
    sources: [STARTUP_INDIA, MCA],
  },
  {
    categories: ['Company Incorporation', 'Corporate Law', 'Corporate Tax & Compliance'],
    service: { href: '/company-incorporation', label: 'company incorporation and compliance services' },
    sources: [MCA, INCOME_TAX],
  },
  {
    categories: ['MSME & Registrations'],
    service: { href: '/services', label: 'registration and compliance services' },
    sources: [UDYAM, MCA],
  },
  {
    categories: ['Payroll & Labour Compliance'],
    service: { href: '/services', label: 'payroll and compliance services' },
    sources: [EPFO, ESIC],
  },
  {
    categories: ['Trusts & NGOs'],
    service: { href: '/services', label: 'trust and NGO compliance services' },
    sources: [INCOME_TAX],
  },
]

const RELATED_COUNT = 3

const linkStyle = { color: 'var(--primary)', fontWeight: 600 } as const

/**
 * Closing block for a blog post: related guides from the same topic group, the
 * matching service and office pages, and the official portals to verify against.
 *
 * Related guides are the next few posts in the group, wrapping around, so every
 * post in a group is linked from the same number of other posts.
 */
export default function PostFooterLinks({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug)
  const group = post && GROUPS.find((g) => g.categories.includes(post.category))
  if (!post || !group) return null

  const peers = posts.filter((p) => group.categories.includes(p.category))
  const at = peers.findIndex((p) => p.slug === slug)
  const related = Array.from({ length: Math.min(RELATED_COUNT, peers.length - 1) }, (_, i) => peers[(at + i + 1) % peers.length])

  return (
    <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
      {related.length > 0 && (
        <>
          <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>More Guides on This Topic</h3>
          <ul style={{ margin: '0 0 1.25rem', paddingLeft: '1.25rem' }}>
            {related.map((p) => (
              <li key={p.slug} style={{ marginBottom: '0.5rem' }}>
                <Link href={`/blog/${p.slug}`} style={linkStyle}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
      <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', marginBottom: '0.75rem' }}>
        Need this handled for you? See our <Link href={group.service.href} style={linkStyle}>{group.service.label}</Link>, or
        meet our <Link href="/ca-in-nashik" style={linkStyle}>chartered accountants in Nashik</Link> and
        our <Link href="/ca-in-sillod" style={linkStyle}>CA office in Sillod</Link>.
      </p>
      <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', margin: 0 }}>
        Rules and due dates change. Confirm the current position on the official source:{' '}
        {group.sources.map((s, i) => (
          <span key={s.href}>
            {i > 0 && ', '}
            <a href={s.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>{s.label}</a>
          </span>
        ))}
        .
      </p>
    </div>
  )
}
