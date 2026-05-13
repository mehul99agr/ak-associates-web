import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Offshore Accounting Services India | Outsourced Bookkeeping India | AK & Associates LLP',
  description: 'Offshore accounting and outsourced bookkeeping from India for foreign companies, CA firms, and NRI-owned businesses. Full-cycle accounting, MIS reporting, payroll, GST, and statutory compliance. ICAI-registered CA firm.',
  keywords: [
    'offshore accounting India', 'outsourced accounting India',
    'bookkeeping outsourcing India', 'offshore bookkeeping India',
    'accounting outsourcing India for UK', 'accounting outsourcing India for US',
    'accounting outsourcing India for UAE', 'outsourced CFO India',
    'virtual accounting India', 'remote bookkeeping India',
    'Indian CA firm outsourcing', 'CA firm white label accounting India',
    'offshore accounting Nashik', 'outsourced payroll India',
    'MIS reporting India', 'management accounts India',
    'outsourced accounting for NRI', 'Indian subsidiary accounting outsourcing',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/offshore-accounting' },
  openGraph: {
    title: 'Offshore Accounting Services India | Outsourced Bookkeeping | AK & Associates LLP',
    description: 'ICAI-registered CA firm offering offshore accounting for foreign companies, CA firms, and NRI businesses. Full-cycle bookkeeping, GST, payroll, and MIS from India.',
    url: 'https://agrawalkhandelwal.com/offshore-accounting',
  },
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

const audiences = [
  {
    icon: '🌐',
    title: 'Foreign Companies with Indian Operations',
    desc: 'US, UK, or UAE parent companies with an Indian subsidiary or branch. We manage the Indian entity\'s full accounting stack - from Tally/QuickBooks bookkeeping to GST returns, TDS compliance, payroll, and statutory audit - so your Indian team stays compliant without distracting your HQ finance team.',
    tags: ['Indian Subsidiary Accounting', 'GAAP to Ind AS Conversion', 'Consolidated Reporting', 'Statutory Audit Readiness'],
  },
  {
    icon: '🤝',
    title: 'CA Firms & Accounting Practices (White-Label)',
    desc: 'UK, US, Australian, or UAE accounting practices looking to outsource client bookkeeping to a trusted Indian CA firm. We work as your back-office - maintaining confidentiality, using your preferred software (Xero, QuickBooks, MYOB, Sage), and delivering work under your brand.',
    tags: ['Xero · QuickBooks · MYOB', 'White-Label Delivery', 'Confidential NDA', 'UK/US Accounting Standards'],
  },
  {
    icon: '🏠',
    title: 'NRI-Owned Indian Businesses',
    desc: 'NRIs managing Indian businesses remotely - from manufacturing, trading, or real estate to family-owned enterprises. We act as your on-ground financial eyes: handling day-to-day accounting, vendor payments, GST, TDS, payroll, and monthly MIS so you always have visibility without being in India.',
    tags: ['Remote Accounting', 'GST & TDS Compliance', 'Monthly MIS Reports', 'NRI FEMA Compliance'],
  },
]

const services = [
  {
    icon: '📚',
    title: 'Full-Cycle Bookkeeping',
    desc: 'Daily transaction recording, bank reconciliation, accounts payable/receivable management, and monthly trial balance - using Tally, QuickBooks, Xero, or client-preferred software.',
  },
  {
    icon: '📊',
    title: 'MIS & Management Reporting',
    desc: 'Monthly management accounts - P&L, balance sheet, cash flow statement, and custom KPI dashboards - delivered to an investor, board, or overseas parent in the format they require.',
  },
  {
    icon: '👥',
    title: 'Payroll Processing',
    desc: 'Monthly payroll computation, salary slips, PF/ESI/PT compliance, Form 16 generation, TDS on salaries (Section 192), and payroll reconciliation for Indian employees.',
  },
  {
    icon: '📋',
    title: 'GST & TDS Compliance',
    desc: 'Monthly GSTR-1 and GSTR-3B filing, input tax credit reconciliation, TDS deduction and quarterly TDS returns (26Q, 27Q), and advance tax computations.',
  },
  {
    icon: '🏛️',
    title: 'Statutory Compliance',
    desc: 'Annual financial statements (Schedule III format), ROC annual returns, Director KYC, MSME compliance, and coordination with statutory auditors for the year-end audit.',
  },
  {
    icon: '🔄',
    title: 'GAAP Conversion & Reporting',
    desc: 'Conversion of Indian financial statements to US GAAP, IFRS, or UK GAAP for consolidation by foreign parent companies. Preparation of intercompany reconciliation and elimination schedules.',
  },
]

const faqs = [
  {
    q: 'What accounting software do you use for offshore clients?',
    a: 'We work on any platform the client requires: Tally ERP 9 / Tally Prime (standard for Indian compliance), QuickBooks Online, Xero, MYOB, Sage, FreshBooks, and Zoho Books. For CA firm white-label work, we are experienced in working directly within client firm environments with full data confidentiality.',
  },
  {
    q: 'How do you handle data security for offshore accounting?',
    a: 'We operate under strict data confidentiality protocols: NDA-backed engagements, access limited to assigned staff only, no data storage on personal devices, and secure file transfer via encrypted channels. For CA firm clients, we work within their own systems rather than copying data out. Our team does not have client login details shared beyond the assigned accountant.',
  },
  {
    q: 'What is the turnaround time for monthly management accounts?',
    a: 'For clients with clean source data (bank statements, invoices, and expense records received by the 3rd of the month), we deliver management accounts by the 10th of the following month. For statutory audit-readiness reports, the timeline is agreed in the engagement letter based on transaction volume.',
  },
  {
    q: 'Can you manage accounting for a UK company\'s India subsidiary?',
    a: 'Yes. This is one of our most common engagements. We handle the Indian subsidiary\'s complete accounting and compliance - Tally bookkeeping, GST, TDS, payroll, ROC annual returns - and also prepare a UK GAAP-aligned monthly report and intercompany recharge schedules for the UK parent\'s consolidation. We liaise directly with the UK parent\'s finance team or accountant.',
  },
  {
    q: 'Do you provide outsourced CFO services as part of offshore accounting?',
    a: 'Yes. Beyond bookkeeping, we offer a Virtual CFO layer: financial planning and analysis (FP&A), budget vs actual variance analysis, investor MIS, cash flow forecasting, and strategic financial advice. This is particularly valuable for foreign parent companies that need someone in India who can think like a CFO, not just process transactions.',
  },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Offshore Accounting & Outsourced Bookkeeping - AK & Associates LLP',
  description: 'Offshore accounting services from India for foreign companies, CA firms, and NRI businesses. Full-cycle bookkeeping, MIS, payroll, GST, and statutory compliance.',
  url: 'https://agrawalkhandelwal.com/offshore-accounting',
  provider: { '@id': 'https://agrawalkhandelwal.com/#organization' },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Australia' },
  ],
  serviceType: [
    'Offshore Accounting', 'Outsourced Bookkeeping', 'MIS Reporting',
    'Payroll Processing', 'GST Compliance', 'Statutory Audit Readiness',
    'GAAP Conversion', 'Virtual CFO Services',
  ],
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Offshore Accounting', item: 'https://agrawalkhandelwal.com/offshore-accounting' },
  ],
}

export default function OffshoreAccounting() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

        {/* Hero */}
        <section className="hero">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="hero-badge">Offshore Accounting · India</span>
            <h1>
              Offshore Accounting &<br />Bookkeeping Services from India
            </h1>
            <p>
              ICAI-registered CA firm providing full-cycle outsourced accounting for foreign companies, overseas CA practices, and NRI-owned businesses - from India, at India costs.
            </p>
            <div className="hero-cta">
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Discuss Your Requirements
              </a>
              <a href="mailto:mehul@agrawalkhandelwal.com" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.1)' }}>
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Why India */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Why Outsource to India</span>
              <h2 className="section-title">The Case for Offshore Accounting from India</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { label: 'Cost Saving', value: '60–70%', note: 'vs. equivalent UK / US / UAE accounting costs', color: '#10b981' },
                { label: 'Time Zone', value: 'IST +5:30', note: 'Overlap with UK morning + full UAE business day', color: 'var(--accent)' },
                { label: 'CA Qualified', value: 'ICAI', note: 'India\'s equivalent of ICAEW / AICPA - highest standard', color: 'var(--primary)' },
                { label: 'Languages', value: 'English', note: 'All work delivered in English, documentation included', color: '#f59e0b' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ textAlign: 'center', borderTop: `4px solid ${item.color}` }}>
                  <div style={{ fontWeight: 800, color: item.color, fontSize: '1.6rem', marginBottom: '0.25rem' }}>{item.value}</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{item.label}</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.83rem', lineHeight: 1.5 }}>{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience sections */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="section-badge">Who We Serve</span>
              <h2 className="section-title">Offshore Accounting for Every Type of Client</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {audiences.map((a, i) => (
                <div key={i} className="card" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'start' }}>
                  <div style={{ fontSize: '3rem', lineHeight: 1 }}>{a.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{a.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', lineHeight: 1.8, marginBottom: '1rem' }}>{a.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {a.tags.map((tag, j) => (
                        <span key={j} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '4px 12px', fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600 }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="section-badge">What's Included</span>
              <h2 className="section-title">Offshore Accounting Services</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
              {services.map((s, i) => (
                <div key={i} className="card">
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Process</span>
              <h2 className="section-title">How We Onboard New Offshore Clients</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.5rem', maxWidth: '960px', margin: '0 auto' }}>
              {[
                { step: '01', title: 'Discovery Call', desc: 'We understand your requirements, software, volume, and deadlines in a 30-minute call.' },
                { step: '02', title: 'Scope & Pricing', desc: 'Fixed-fee engagement letter signed. NDA executed. Data access set up.' },
                { step: '03', title: 'Parallel Run', desc: 'First month runs alongside your current process so you can verify our work.' },
                { step: '04', title: 'Full Handover', desc: 'We take over full responsibility from month 2 with a dedicated point of contact.' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.75rem', fontFamily: 'var(--font-montserrat)' }}>{item.step}</div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-surface">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Questions</span>
              <h2 className="section-title">Offshore Accounting FAQs</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqs.map(({ q, a }, i) => (
                <div key={i} className="card">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--primary)' }}>{q}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div style={{ background: 'linear-gradient(135deg, #0A2E5B 0%, #1e40af 100%)', textAlign: 'center', padding: '4rem 2rem', borderRadius: 'var(--radius-lg)' }}>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Outsource Your Accounting to India?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                Send us your current accounting setup and transaction volume. We'll propose a scope, timeline, and fixed fee within 24 hours.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  Book a Discovery Call
                </a>
                <Link href="/services" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

    </>
  )
}
