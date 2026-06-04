import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '../Icon'

export const metadata: Metadata = {
  title: 'International Tax, Transfer Pricing & CA Services | India & UAE',
  description: 'Expert CA services in India: International Taxation, Transfer Pricing documentation, DTAA advisory, FEMA compliance, UAE Corporate Tax, NRI taxation, Statutory Audit, GST, and Business Incorporation. Serving MNCs in Mumbai and startups in Bangalore.',
  keywords: [
    'international tax consultant India', 'transfer pricing consultant India',
    'DTAA advisory India', 'FEMA compliance India',
    'UAE corporate tax India', 'NRI taxation consultant',
    'statutory audit India', 'GST advisory India',
    'CA services Mumbai', 'CA services Bangalore',
    'offshore accounting India', 'outsourced bookkeeping India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/services' },
  openGraph: {
    title: 'International Tax, Transfer Pricing & CA Services | India & UAE',
    description: 'Expert CA services: International Taxation, Transfer Pricing, DTAA, FEMA, UAE Corporate Tax, NRI Taxation, Audit, and Business Incorporation.',
    url: 'https://agrawalkhandelwal.com/services',
  },
}

const categories = [
  {
    title: 'Taxation & Regulatory',
    icon: 'scale',
    items: [
      { name: 'International Taxation', detail: 'Expertise in Transfer Pricing, DTAA, and NRI taxation.', link: '/transfer-pricing' },
      { name: 'Tax Planning & Compliance', detail: 'ITR, GST return filing, and optimization strategies.' },
      { name: 'GST Advisory', detail: 'Implementation, compliance, and departmental representation.' },
      { name: 'Tax Litigation', detail: 'Expert representation for scrutiny and tax assessments.' },
    ],
  },
  {
    title: 'Audit & Assurance',
    icon: 'scroll',
    items: [
      { name: 'Statutory Audit', detail: 'Comprehensive audits under the Companies Act.' },
      { name: 'Internal & Management Audit', detail: 'Strengthening internal controls and operational efficiency.' },
      { name: 'Tax Audit', detail: 'Mandatory audits under the Income Tax Act.' },
      { name: 'Due Diligence', detail: 'Detailed financial vetting for M&A and investments.' },
    ],
  },
  {
    title: 'Strategic Advisory',
    icon: 'rocket',
    items: [
      { name: 'Virtual CFO Services', detail: 'Strategic leadership for startups and growing SMEs.', link: '/startups' },
      { name: 'Business Incorporation', detail: 'Company & LLP formation with optimal structuring.', link: '/company-incorporation' },
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
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="section-badge">Our Capabilities</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Comprehensive Professional Services</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>
              We provide institutional-grade financial frameworks tailored for the unique challenges of the modern global economy.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem' }}>
            {categories.map((cat, i) => (
              <div key={i} className="card" style={{ padding: '2.5rem' }}>
                <div style={{ marginBottom: '1.25rem', color: 'var(--primary)' }}><Icon name={cat.icon} size={44} /></div>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '2rem' }}>{cat.title}</h2>
                <ul style={{ listStyle: 'none' }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: j < cat.items.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <h3 style={{ fontSize: '1rem', marginBottom: '6px', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontWeight: 700 }}>{item.name}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.detail}</p>
                      {'link' in item && <Link href={(item as any).link} style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', textDecoration: 'none' }}>View details →</Link>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4.5rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)' }}>Specialised Practice Areas</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {[
                { label: 'Transfer Pricing', href: '/transfer-pricing' },
                { label: 'UAE Tax Advisory', href: '/uae-tax-advisory' },
                { label: 'NRI Tax Advisory', href: '/nri-tax-advisory' },
                { label: 'Offshore Accounting', href: '/offshore-accounting' },
                { label: 'Company Incorporation', href: '/company-incorporation' },
                { label: 'Startup Advisory', href: '/startups' },
              ].map(s => (
                <Link key={s.href} href={s.href} style={{ padding: '10px 22px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '50px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary)' }}>{s.label} →</Link>
              ))}
            </div>
          </div>

          <div style={{ margin: '80px auto 0', maxWidth: '800px', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Need a Specialized Strategy?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-light)', fontSize: '1rem' }}>
              Every enterprise has unique requirements. We provide bespoke financial consulting to fit your growth trajectory.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
              <a href="tel:+919527533506" className="btn btn-outline">Call Our Experts</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
