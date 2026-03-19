import Link from 'next/link'

export default function Services() {
  const categories = [
    {
      title: "Taxation & Regulatory",
      icon: "⚖️",
      items: [
        { name: "International Taxation", detail: "Expertise in Transfer Pricing, DTAA, and NRI taxation." },
        { name: "Tax Planning & Compliance", detail: "ITR, GST return filing, and optimization strategies." },
        { name: "GST Advisory", detail: "Implementation, compliance, and departmental representation." },
        { name: "Tax Litigation", detail: "Expert representation for scrutiny and tax assessments." }
      ]
    },
    {
      title: "Audit & Assurance",
      icon: "📜",
      items: [
        { name: "Statutory Audit", detail: "Comprehensive audits under the Companies Act." },
        { name: "Internal & Management Audit", detail: "Strengthening internal controls and operational efficiency." },
        { name: "Tax Audit", detail: "Mandatory audits under the Income Tax Act." },
        { name: "Due Diligence", detail: "Detailed financial vetting for M&A and investments." }
      ]
    },
    {
      title: "Strategic Advisory",
      icon: "🚀",
      items: [
        { name: "Virtual CFO Services", detail: "Strategic leadership for startups and growing SMEs." },
        { name: "Business Incorporation", detail: "Company & LLP formation with optimal structuring." },
        { name: "FEMA & RBI Compliance", detail: "Advising on inbound and outbound foreign investments." },
        { name: "Financial Modeling", detail: "Precision valuation and performance forecasting." }
      ]
    }
  ]

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '10px', fontFamily: 'Inter' }}>Our Capabilities</h4>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Comprehensive Professional Services</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            We provide institutional-grade financial frameworks tailored for the unique challenges of the modern global economy.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
          {categories.map((cat, i) => (
            <div key={i} className="service-card" style={{ padding: '50px 40px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '24px' }}>{cat.icon}</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>{cat.title}</h2>
              <ul style={{ listStyle: 'none' }}>
                {cat.items.map((item, j) => (
                  <li key={j} style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--primary)', fontFamily: 'Inter' }}>{item.name}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cta-section" style={{ margin: '100px auto', maxWidth: '1000px' }}>
          <h2>Need a Specialized Strategy?</h2>
          <p style={{ marginBottom: '40px' }}>Every enterprise has unique requirements. We provide bespoke financial consulting to fit your growth trajectory.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link href="/#contact" className="btn btn-primary">Book Free Consultation</Link>
            <a href="tel:+919527533506" className="btn btn-outline">Call Our Experts</a>
          </div>
        </div>
      </div>
    </div>
  )
}
