import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '../Icon'

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What CA services does Agrawal Khandelwal & Associates LLP offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer three practice groups: Taxation & Regulatory (international taxation, transfer pricing, DTAA, GST advisory, tax litigation), Audit & Assurance (statutory audit, internal audit, tax audit, due diligence), and Strategic Advisory (virtual CFO services, business incorporation, FEMA/RBI compliance, financial modeling). Clients typically start with one service and expand into others as their compliance and growth needs evolve.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Agrawal Khandelwal different from a typical local CA firm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most local CA firms in Nashik and Sillod focus on compliance filing — ITR, GST returns, statutory audit. We do that too, but our practice is built around cross-border and growth-stage work: transfer pricing documentation, UAE corporate tax structuring, FEMA reporting for funded startups, and NRI taxation. That is a narrower specialization than a general practice firm, which is why founders and NRIs bring us cross-border questions their existing CA cannot answer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a separate CA for international tax versus regular compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily, but it helps if the same firm handles both, since international tax positions (transfer pricing, DTAA claims, FEMA filings) interact directly with your regular ITR and GST filings. We run both under one engagement so nothing falls through the gap between a generalist CA and a specialist consultant.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'International Tax, Transfer Pricing & CA Services | India & UAE',
  description: 'CA services across India: International Tax, Transfer Pricing, DTAA, FEMA, UAE Corporate Tax, NRI taxation, Statutory Audit, GST, and Company Incorporation.',
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
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
      <div className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="section-badge">Our Capabilities</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Comprehensive Professional Services</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>
              We provide institutional-grade financial frameworks tailored for the unique challenges of the modern global economy.
            </p>
          </div>

          <div className="blog-content" style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
            <h2>What Does a Chartered Accountant Firm for International Tax and Compliance Do?</h2>
            <p>Agrawal Khandelwal &amp; Associates LLP is a Chartered Accountant firm built around three practice groups: <strong>Taxation &amp; Regulatory</strong> (international taxation, transfer pricing, DTAA, GST), <strong>Audit &amp; Assurance</strong> (statutory, internal, and tax audit, due diligence), and <strong>Strategic Advisory</strong> (virtual CFO services, business incorporation, FEMA and RBI compliance). Founded in 2023 and led by CA Mehul Agrawal (Nashik) and CA Rupesh Khandelwal (Sillod), we serve founders, NRIs, and SMEs with cross-border exposure — clients whose questions a compliance-only local CA typically cannot answer.</p>

            <h2>How to Choose the Right Service for Your Situation</h2>
            <p>Most engagements start in one of three places. If you are <strong>raising foreign investment or setting up abroad</strong> (UAE, or FDI into an Indian entity), start with <Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing</Link> or <Link href="/uae-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>UAE Tax Advisory</Link>. If you are an <strong>NRI</strong> dealing with property sale, repatriation, or Indian income, start with <Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory</Link>. If you are a <strong>founder incorporating or scaling a startup</strong>, start with <Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation</Link> or <Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory</Link>. Every engagement includes the underlying compliance work — ITR, GST, statutory audit — so nothing sits outside a single point of accountability.</p>
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

          <div style={{ marginTop: '4.5rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqLd.mainEntity.map((faq, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{faq.name}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{faq.acceptedAnswer.text}</p>
                </div>
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
    </>
  )
}
