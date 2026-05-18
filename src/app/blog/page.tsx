import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tax Insights & Advisory | International Tax, Startup & UAE Compliance',
  description: 'Expert CA insights on International Taxation, Transfer Pricing, DTAA, UAE Corporate Tax, startup compliance, GST, and NRI taxation. In-depth regulatory analysis from Agrawal Khandelwal & Associates LLP.',
  keywords: [
    'international tax insights India', 'transfer pricing India blog',
    'UAE corporate tax news', 'startup compliance India',
    'DTAA India guide', 'NRI taxation India',
    'GST compliance updates', 'CA insights India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog' },
  openGraph: {
    title: 'Tax Insights & Advisory | International Tax, Startup & UAE Compliance',
    description: 'Expert insights on International Tax, Transfer Pricing, DTAA, UAE Corporate Tax, and startup compliance from our CA team.',
    url: 'https://agrawalkhandelwal.com/blog',
  },
}

const posts = [
  {
    title: 'Dubai Company Registration: Complete Guide for Indian Entrepreneurs (2026)',
    slug: 'dubai-company-registration-guide',
    date: 'May 19, 2026',
    category: 'International Tax',
    summary: 'Mainland vs Free Zone vs Offshore, real costs in INR, FEMA and ODI compliance, UAE Corporate Tax, and documents required — everything before you register a Dubai company.',
  },
  {
    title: 'How to Incorporate a Company in India: Private Limited vs LLP vs OPC (2026 Guide)',
    slug: 'company-incorporation-india-guide',
    date: 'May 08, 2026',
    category: 'Corporate Law',
    summary: 'Complete guide to company registration in India, which structure to choose, the step-by-step process, what it costs, documents required, and mistakes to avoid.',
  },
  {
    title: 'UAE Entity Setup: When It Makes Sense (And When It Doesn\'t)',
    slug: 'uae-entity-setup-when-it-makes-sense',
    date: 'May 08, 2026',
    category: 'International Tax',
    summary: 'Formation costs ₹3–6L, ongoing compliance, and FEMA exposure: here\'s the honest breakdown of when a Dubai company actually works for Indian businesses, and when it\'s expensive FOMO.',
  },
  {
    title: 'Deciphering the New Income Tax Act & Rules 2025',
    slug: 'new-income-tax-act-rules-2025',
    date: 'March 20, 2026',
    category: 'Tax Reform',
    summary: 'An in-depth look at the proposed structural changes in the Income Tax Act, focusing on simplification and the new computational rules.',
  },
  {
    title: 'Understanding the New Tax Regime (FY 2025-26)',
    slug: 'understanding-new-tax-regime-2025-26',
    date: 'March 18, 2026',
    category: 'Tax Planning',
    summary: 'A detailed breakdown of the recent changes in the Finance Act and how it affects middle-income earners in India.',
  },
  {
    title: 'Essential Compliance for Indian Startups',
    slug: 'essential-compliance-indian-startups',
    date: 'March 12, 2026',
    category: 'Corporate Law',
    summary: 'Navigating the complex landscape of MCA filings, GST returns, and initial FEMA compliance for newly incorporated entities.',
  },
  {
    title: 'UAE Corporate Tax: Impact on Indian Businesses',
    slug: 'uae-corporate-tax-indian-impact',
    date: 'March 08, 2026',
    category: 'International Tax',
    summary: 'With the implementation of Corporate Tax in UAE, how should Indian businesses with Gulf operations restructure their holdings?',
  },
  {
    title: 'Navigating International Taxation & DTAA',
    slug: 'navigating-international-taxation-dtaa',
    date: 'March 05, 2026',
    category: 'International Tax',
    summary: 'How multinationals can leverage Double Taxation Avoidance Agreements to optimize their global tax footprint.',
  },
  {
    title: 'The Strategic Value of Virtual CFO Services',
    slug: 'strategic-value-virtual-cfo-services',
    date: 'February 25, 2026',
    category: 'Advisory',
    summary: 'Why scaling SMEs need institutional-grade financial leadership long before they can afford a full-time CFO.',
  },
]

export default function Blog() {
  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '130px' }}>
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
            <h2 style={{ fontSize: '1.35rem', marginBottom: '1.5rem' }}>Upcoming Compliance Deadlines: May 2026</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
              {[
                { date: '7 May', title: 'TDS/TCS Deposit', desc: 'Deposit of Tax deducted/collected for April 2026.' },
                { date: '11 May', title: 'GSTR-1 Filing', desc: 'Due date for filing GSTR-1 for April 2026.' },
                { date: '15 May', title: 'Advance Tax', desc: '1st instalment of advance tax for FY 2026-27.' },
                { date: '20 May', title: 'GSTR-3B Filing', desc: 'Due date for filing GSTR-3B for April 2026.' },
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
                  <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '4px' }}>{item.date}</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px', fontSize: '0.95rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
            {posts.map((post, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{post.category}</span>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.82rem' }}>{post.date}</span>
                  </div>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '0.875rem', lineHeight: 1.4 }}>{post.title}</h2>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{post.summary}</p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', marginTop: '1.5rem', color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  Read Full Insight <span>→</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div style={{ background: 'linear-gradient(135deg, #0A2E5B 0%, #1e40af 100%)', color: '#fff', textAlign: 'center', marginTop: '5rem', borderRadius: 'var(--radius-lg)', padding: '4rem 2rem' }}>
            <h2 style={{ color: '#fff', marginBottom: '0.75rem' }}>Don&apos;t Miss a Single Update.</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0.75rem auto 2.5rem' }}>
              Join 500+ professionals receiving our monthly regulatory digest.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="Your Email Address"
                style={{ padding: '0.875rem 1rem', borderRadius: 'var(--radius-sm)', flex: 1, minWidth: '200px', fontSize: '0.95rem' }}
              />
              <button className="btn" style={{ background: 'var(--accent)', color: '#fff', fontWeight: 700, flexShrink: 0 }}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
