import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts = [
  {
    title: 'Essential Compliance for Indian Startups',
    slug: 'essential-compliance-indian-startups',
    date: 'March 12, 2026',
    category: 'Corporate Law',
    content: `Navigating the regulatory landscape in India can be daunting for new founders. From the moment of incorporation, a startup enters a cycle of mandatory filings.

Key compliances include:
1. MCA Filings: Annual returns and financial statements (AOC-4, MGT-7).
2. GST Returns: Monthly or quarterly filings depending on turnover.
3. Income Tax: Quarterly advance tax payments and annual ITR.
4. TDS: Monthly deposits and quarterly returns for payments made to vendors and employees.
5. FEMA: If you have foreign investment, reporting via FC-GPR is non-negotiable.

Staying ahead of these timelines is critical to avoid heavy penalties and maintain eligibility for DPIIT benefits.`,
  },
  {
    title: 'Navigating International Taxation & DTAA',
    slug: 'navigating-international-taxation-dtaa',
    date: 'March 05, 2026',
    category: 'International Tax',
    content: `Double Taxation Avoidance Agreements (DTAA) are the pillars of international trade. For an Indian business expanding abroad, understanding whether to pay tax in India or the source country is vital for cash flow management.

We focus on:
- Lowering withholding tax rates.
- Tax Residency Certificates (TRC) applications.
- Permanent Establishment (PE) risk assessment.
- Repatriation of profits without tax leakages.

Our team ensures that you pay what is due, but never twice.`,
  },
]

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)

  if (!post) notFound()

  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '130px' }}>
      <div className="section">
        <div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
            ← Back to Insights
          </Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">{post.category}</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>{post.title}</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>{post.date}</span>
              <span aria-hidden>•</span>
              <span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)', whiteSpace: 'pre-line' }}>
              {post.content}
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need help with this?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Contact our partners today for a personalized consultation via WhatsApp.</p>
              <a href="https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Consultation</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
