import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would typically come from a database or CMS
const posts = [
  {
    title: "Essential Compliance for Indian Startups",
    slug: "essential-compliance-indian-startups",
    date: "March 12, 2026",
    category: "Corporate Law",
    content: `Navigating the regulatory landscape in India can be daunting for new founders. From the moment of incorporation, a startup enters a cycle of mandatory filings.

    Key compliances include:
    1. MCA Filings: Annual returns and financial statements (AOC-4, MGT-7).
    2. GST Returns: Monthly or quarterly filings depending on turnover.
    3. Income Tax: Quarterly advance tax payments and annual ITR.
    4. TDS: Monthly deposits and quarterly returns for payments made to vendors and employees.
    5. FEMA: If you have foreign investment, reporting via FC-GPR is non-negotiable.

    Staying ahead of these timelines is critical to avoid heavy penalties and maintain eligibility for DPIIT benefits.`
  },
  {
    title: "Navigating International Taxation & DTAA",
    slug: "navigating-international-taxation-dtaa",
    date: "March 05, 2026",
    category: "International Tax",
    content: `Double Taxation Avoidance Agreements (DTAA) are the pillars of international trade. For an Indian business expanding abroad, understanding whether to pay tax in India or the source country is vital for cash flow management.

    We focus on:
    - Lowering withholding tax rates.
    - Tax Residency Certificates (TRC) applications.
    - Permanent Establishment (PE) risk assessment.
    - Repatriation of profits without tax leakages.

    Our team ensures that you pay what is due, but never twice.`
  }
]

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '30px', display: 'inline-block', fontWeight: 700 }}>
          &larr; Back to Insights
        </Link>
        <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="section-badge">{post.category}</span>
          <h1 style={{ fontSize: '3rem', marginTop: '10px', marginBottom: '20px', color: 'var(--primary)' }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: '20px', color: 'var(--text-light)', marginBottom: '40px', fontSize: '0.9rem', fontWeight: 600 }}>
            <span>{post.date}</span>
            <span>ΓÇó</span>
            <span>Agrawal Khandelwal & Associates LLP</span>
          </div>
          <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-main)', whiteSpace: 'pre-line' }}>
            {post.content}
          </div>
          
          <div style={{ marginTop: '60px', padding: '40px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '15px', color: 'var(--primary)' }}>Need help with this?</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '25px' }}>Contact our partners today for a personalized consultation via WhatsApp.</p>
            <a href="https://wa.me/919527533506" className="btn btn-primary">Book Consultation</a>
          </div>
        </article>
      </div>
    </div>
  )
}
