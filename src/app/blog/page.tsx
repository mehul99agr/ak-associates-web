import type { Metadata } from 'next'
import BlogGrid from './BlogGrid'
import { posts } from './posts'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Tax & Business Insights Blog',
  description: 'CA insights on International Tax, Transfer Pricing, DTAA, UAE Corporate Tax, startup compliance, and NRI taxation. Agrawal Khandelwal & Associates LLP.',
  keywords: [
    'international tax insights India', 'transfer pricing India blog',
    'UAE corporate tax news', 'startup compliance India',
    'DTAA India guide', 'NRI taxation India',
    'GST compliance updates', 'CA insights India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog' },
  openGraph: {
    title: 'Tax & Business Insights Blog',
    description: 'Expert insights on International Tax, Transfer Pricing, DTAA, UAE Corporate Tax, and startup compliance from our CA team.',
    url: 'https://agrawalkhandelwal.com/blog',
    images: OG_IMAGES,
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://agrawalkhandelwal.com/blog' },
  ],
}

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tax Insights & Advisory; Blog Posts',
  description: 'Expert analysis on International Tax, GST, Transfer Pricing, UAE Corporate Tax, startup compliance, and NRI taxation from Agrawal Khandelwal & Associates LLP.',
  url: 'https://agrawalkhandelwal.com/blog',
  itemListElement: posts.map((post, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://agrawalkhandelwal.com/blog/${post.slug}`,
    name: post.title,
  })),
}

// Regenerate at most hourly so the compliance calendar tracks the current month
export const revalidate = 3600

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

type Deadline = { day: number; title: string; desc: string }

function getComplianceDeadlines(m: number, year: number) {
  const abbr = MONTH_ABBR[m]
  const prevM = (m + 11) % 12
  const prevLabel = `${MONTH_NAMES[prevM]} ${m === 0 ? year - 1 : year}`

  // Filings that recur every month (for the previous month's transactions)
  const recurring: Deadline[] = [
    { day: 7, title: 'TDS/TCS Deposit', desc: `Deposit of TDS/TCS deducted or collected for ${prevLabel}.` },
    { day: 11, title: 'GSTR-1 Filing', desc: `Monthly GSTR-1 for ${prevLabel} (taxpayers not under QRMP).` },
    { day: 15, title: 'PF & ESI Payment', desc: `Provident Fund and ESI contribution for ${prevLabel}.` },
    { day: 20, title: 'GSTR-3B Filing', desc: `Monthly GSTR-3B for ${prevLabel} (monthly filers).` },
  ]

  // Deadlines specific to certain months (month index 0 = January)
  const monthSpecific: Record<number, Deadline[]> = {
    0: [{ day: 31, title: 'TDS Return (Q3)', desc: 'Quarterly TDS return (Form 24Q/26Q) for Oct to Dec.' }],
    2: [{ day: 15, title: 'Advance Tax (4th)', desc: 'Final instalment (100%) of advance tax for the financial year.' }],
    4: [{ day: 31, title: 'TDS Return (Q4)', desc: 'Quarterly TDS return (Form 24Q/26Q) for Jan to Mar.' }],
    5: [{ day: 15, title: 'Advance Tax (1st)', desc: '1st instalment (15%) of advance tax. Form 16 to employees also due.' }],
    6: [
      { day: 15, title: 'TDS Return (Q1)', desc: 'Quarterly TDS return for Apr to Jun.' },
      { day: 31, title: 'ITR Filing', desc: 'Income tax return due for non-audit taxpayers.' },
    ],
    8: [
      { day: 15, title: 'Advance Tax (2nd)', desc: '2nd instalment (45%) of advance tax.' },
      { day: 30, title: 'Tax Audit Report', desc: 'Tax audit report (Form 3CD) filing due.' },
    ],
    9: [{ day: 31, title: 'TDS Return (Q2)', desc: 'Quarterly TDS return for Jul to Sep.' }],
    10: [{ day: 30, title: 'Audit ITR & 3CEB', desc: 'ITR for audit cases and transfer pricing Form 3CEB.' }],
    11: [
      { day: 15, title: 'Advance Tax (3rd)', desc: '3rd instalment (75%) of advance tax.' },
      { day: 31, title: 'GSTR-9 Annual', desc: 'Annual GST return (GSTR-9 / 9C) for the previous financial year.' },
    ],
  }

  const all = [...recurring, ...(monthSpecific[m] ?? [])].sort((a, b) => a.day - b.day)
  return {
    label: `${MONTH_NAMES[m]} ${year}`,
    items: all.map(d => ({ date: `${d.day} ${abbr}`, title: d.title, desc: d.desc })),
  }
}

export default function Blog() {
  // Shift to IST so the month rolls over at midnight India time, not UTC
  const ist = new Date(Date.now() + 5.5 * 3600 * 1000)
  const cal = getComplianceDeadlines(ist.getUTCMonth(), ist.getUTCFullYear())
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
      <div className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="section-badge">Knowledge Center</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Tax Insights & Advisory</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>
              Expert analysis on the latest regulatory shifts, tax optimizations, and strategic financial guidance.
            </p>
          </div>

          {/* Compliance Calendar */}
          <div className="card" style={{ marginBottom: '3.5rem', borderLeft: '4px solid var(--accent)' }}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '1.5rem' }}>Upcoming Compliance Deadlines: {cal.label}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
              {cal.items.map((item, idx) => (
                <div key={idx} style={{ background: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
                  <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '4px' }}>{item.date}</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px', fontSize: '0.95rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <BlogGrid posts={posts} />

          {/* Closing CTA */}
          <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', color: 'var(--white)', textAlign: 'center', marginTop: '5rem', borderRadius: 'var(--radius-lg)', padding: '4rem 2rem' }}>
            <h2 style={{ color: 'var(--white)', marginBottom: '0.75rem' }}>Have a Question on Any of This?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px', margin: '0.75rem auto 2.5rem' }}>
              Book a free consultation with our partners, or message us on WhatsApp for a quick answer.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--accent)', color: 'var(--white)', fontWeight: 700 }}>Book Free Consultation</a>
              <a href="https://wa.me/919527533506?text=Hi,%20I%20have%20a%20tax%20question." target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
