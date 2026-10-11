import type { Metadata } from 'next'
import Link from 'next/link'
import BlogGrid from './BlogGrid'
import { posts } from './posts'
import { OG_IMAGES } from '@/lib/constants'
import { formatDueDateShort, getDueDates, monthLabel, todayIST } from '@/lib/dueDates'

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

export default function Blog() {
  const today = todayIST()
  const month = today.slice(0, 7)
  const lastDay = new Date(Date.UTC(Number(month.slice(0, 4)), Number(month.slice(5, 7)), 0)).getUTCDate()
  const cal = getDueDates(`${month}-01`, `${month}-${lastDay}`)
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
            <h2 style={{ fontSize: '1.35rem', marginBottom: '1.5rem' }}>Compliance Deadlines: {monthLabel(month)}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
              {cal.map((item) => (
                <div key={item.date + item.title} style={{ background: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', opacity: item.date < today ? 0.6 : 1 }}>
                  <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '4px' }}>{formatDueDateShort(item.date)}</div>
                  <div style={{ fontWeight: 700, marginBottom: '4px', fontSize: '0.95rem' }}>
                    {item.post ? (
                      <Link href={`/blog/${item.post}`} style={{ color: 'var(--primary)' }}>{item.title}</Link>
                    ) : (
                      <span style={{ color: 'var(--text-main)' }}>{item.title}</span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--text-light)', lineHeight: 1.5 }}>
                    {item.extendedFrom && <>Extended from {formatDueDateShort(item.extendedFrom)}. </>}
                    {item.appliesTo}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ margin: '1.5rem 0 0', fontSize: '0.92rem' }}>
              <Link href="/tools/compliance-calendar" style={{ color: 'var(--primary)', fontWeight: 700 }}>See every due date through March 2027 →</Link>
            </p>
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
