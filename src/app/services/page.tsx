import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional CA Services | Tax, Audit & Advisory',
  description: 'Comprehensive Chartered Accountant services: International Taxation, Tax Planning, GST Advisory, Statutory Audit, Virtual CFO, Business Incorporation, and FEMA Compliance. Serving businesses across India.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/services' },
  openGraph: {
    title: 'Professional CA Services | Agrawal Khandelwal & Associates LLP',
    description: 'End-to-end financial solutions: Tax Planning, International Taxation, Audit & Assurance, Virtual CFO, and Business Incorporation.',
    url: 'https://agrawalkhandelwal.com/services',
  },
}

const categories = [
  {
    title: 'Taxation & Regulatory',
    icon: '⚖️',
    items: [
      { name: 'International Taxation', detail: 'Expertise in Transfer Pricing, DTAA, and NRI taxation.' },
      { name: 'Tax Planning & Compliance', detail: 'ITR, GST return filing, and optimization strategies.' },
      { name: 'GST Advisory', detail: 'Implementation, compliance, and departmental representation.' },
      { name: 'Tax Litigation', detail: 'Expert representation for scrutiny and tax assessments.' },
    ],
  },
  {
    title: 'Audit & Assurance',
    icon: '📜',
    items: [
      { name: 'Statutory Audit', detail: 'Comprehensive audits under the Companies Act.' },
      { name: 'Internal & Management Audit', detail: 'Strengthening internal controls and operational efficiency.' },
      { name: 'Tax Audit', detail: 'Mandatory audits under the Income Tax Act.' },
      { name: 'Due Diligence', detail: 'Detailed financial vetting for M&A and investments.' },
    ],
  },
  {
    title: 'Strategic Advisory',
    icon: '🚀',
    items: [
      { name: 'Virtual CFO Services', detail: 'Strategic leadership for startups and growing SMEs.' },
      { name: 'Business Incorporation', detail: 'Company & LLP formation with optimal structuring.' },
      { name: 'FEMA & RBI Compliance', detail: 'Advising on inbound and outbound foreign investments.' },
      { name: 'Financial Modeling', detail: 'Precision valuation and performance forecasting.' },
    ],
  },
]

export default function Services() {
  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '130px' }}>
      <div className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <span className="section-badge">Our Capabilities</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Comprehensive Professional Services</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>
              We provide institutional-grade financial frameworks tailored for the unique challenges of the modern global economy.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem' }}>
            {categories.map((cat, i) => (
              <div key={i} className="card" style={{ padding: '2.5rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{cat.icon}</div>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '2rem' }}>{cat.title}</h2>
                <ul style={{ listStyle: 'none' }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: j < cat.items.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <h3 style={{ fontSize: '1rem', marginBottom: '6px', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontWeight: 700 }}>{item.name}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ margin: '80px auto 0', maxWidth: '800px', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Need a Specialized Strategy?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-light)', fontSize: '1rem' }}>
              Every enterprise has unique requirements. We provide bespoke financial consulting to fit your growth trajectory.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contact" className="btn btn-primary">Book Free Consultation</Link>
              <a href="tel:+919527533506" className="btn btn-outline">Call Our Experts</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
