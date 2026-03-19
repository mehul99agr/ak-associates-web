import Link from 'next/link'

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  
  const post = {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    date: "March 18, 2026",
    author: "CA Mehul Agrawal",
    content: `
      The landscape of Indian taxation is evolving rapidly. With the Finance Act 2025-26, several key changes have been introduced that impact both individual taxpayers and corporate entities.
      
      At Agrawal Khandelwal & Associates LLP, we specialize in helping our clients navigate these complexities. From optimizing your tax outflows to ensuring absolute compliance with the latest GST norms, our team is dedicated to your financial health.
      
      This article explores the nuances of the new tax regime, the importance of proactive tax planning, and how strategic advisory can help scale your business in a globalized economy.
    `
  }

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '30px', display: 'inline-block' }}>
          &larr; Back to Insights
        </Link>
        
        <article style={{ background: '#fff', padding: '60px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase' }}>Tax Planning</span>
          <h1 style={{ fontSize: '3.5rem', marginTop: '10px', marginBottom: '20px' }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: '20px', color: 'var(--text-light)', marginBottom: '40px', fontSize: '0.9rem' }}>
            <span>📅 {post.date}</span>
            <span>👤 {post.author}</span>
          </div>
          <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-main)', whiteSpace: 'pre-line' }}>
            {post.content}
          </div>
          
          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
            <h3>Need expert advice on this topic?</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '25px' }}>Contact our partners today for a personalized consultation.</p>
            <Link href="/#contact" className="btn btn-primary">Book Consultation</Link>
          </div>
        </article>
      </div>
    </div>
  )
}
