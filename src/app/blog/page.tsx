import Link from 'next/link'

export default function Blog() {
  const posts = [
    { 
      title: "Understanding the New Tax Regime (FY 2025-26)", 
      slug: "understanding-new-tax-regime-2025-26",
      date: "March 18, 2026", 
      category: "Tax Planning",
      summary: "A detailed breakdown of the recent changes in the Finance Act and how it affects middle-income earners in India." 
    },
    { 
      title: "Essential Compliance for Indian Startups", 
      slug: "essential-compliance-indian-startups",
      date: "March 12, 2026", 
      category: "Corporate Law",
      summary: "Navigating the complex landscape of MCA filings, GST returns, and initial FEMA compliance for newly incorporated entities." 
    },
    { 
      title: "Navigating International Taxation & DTAA", 
      slug: "navigating-international-taxation-dtaa",
      date: "March 05, 2026", 
      category: "International Tax",
      summary: "How multinationals can leverage Double Taxation Avoidance Agreements to optimize their global tax footprint." 
    },
    { 
      title: "The Strategic Value of Virtual CFO Services", 
      slug: "strategic-value-virtual-cfo-services",
      date: "February 25, 2026", 
      category: "Advisory",
      summary: "Why scaling SMEs need institutional-grade financial leadership long before they can afford a full-time CFO." 
    }
  ]

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '10px', fontFamily: 'Inter' }}>Knowledge Center</h4>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Tax Insights & Advisory</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Expert analysis on the latest regulatory shifts, tax optimizations, and strategic financial growth.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {posts.map((post, i) => (
            <div key={i} className="service-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '40px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>{post.category}</span>
                  <span style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{post.date}</span>
                </div>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', lineHeight: 1.3 }}>{post.title}</h2>
                <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>{post.summary}</p>
              </div>
              <Link href={`/blog/${post.slug}`} className="service-link" style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                Read Full Insight <span style={{ marginLeft: '5px' }}>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="cta-section" style={{ background: 'var(--primary)', color: '#fff', textAlign: 'center', marginTop: '100px' }}>
          <h2 style={{ color: '#fff' }}>Don't Miss a Single Update.</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '40px' }}>Join 500+ professionals receiving our monthly regulatory digest.</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <input type="email" placeholder="Your Email Address" style={{ padding: '14px', borderRadius: '4px', border: 'none', flex: 1 }} />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
