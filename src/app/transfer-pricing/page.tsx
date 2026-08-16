import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../Icon'

export const metadata: Metadata = {
  title: 'Transfer Pricing India',
  description: 'Transfer pricing consultants in India. TP documentation (Master File, Local File, Form 3CEB), benchmarking studies, APA assistance, and audit representation.',
  keywords: [
    'transfer pricing consultant India', 'transfer pricing CA India',
    'TP documentation India', 'transfer pricing advisory India',
    'master file local file India', 'Form 3CEB India',
    'transfer pricing audit India', 'transfer pricing benchmarking India',
    'APA India transfer pricing', 'OECD transfer pricing India',
    'transfer pricing Nashik', 'transfer pricing Mumbai',
    'transfer pricing Bangalore', 'international tax transfer pricing India',
    'transfer pricing MNC India', 'transfer pricing compliance India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/transfer-pricing' },
  openGraph: {
    title: 'Transfer Pricing Consultant India | TP Documentation & Advisory | Agrawal Khandelwal & Associates LLP',
    description: 'Transfer pricing documentation, benchmarking, APA advisory, and tax authority representation for MNCs and Indian multinationals. CA with Big 4 (Deloitte) pedigree.',
    url: 'https://agrawalkhandelwal.com/transfer-pricing',
  },
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

const services = [
  {
    icon: 'document',
    title: 'Master File & Local File',
    desc: 'Preparation of the OECD-aligned Master File (Form 3CEAA) and Local File (Form 3CEAB) for Indian entities with international related-party transactions exceeding prescribed thresholds.',
  },
  {
    icon: 'scroll',
    title: 'Form 3CEB - Accountant\'s Report',
    desc: 'Mandatory CA certification of international transactions under Section 92E. We prepare and certify Form 3CEB covering all specified domestic and international transactions.',
  },
  {
    icon: 'analytics',
    title: 'Benchmarking & Arm\'s Length Analysis',
    desc: 'Selection of the most appropriate transfer pricing method (TNMM, CUP, RPM, CPM, PSM), database searches (Prowess, Capitaline, Bureau van Dijk), and preparation of a defensible benchmarking study.',
  },
  {
    icon: 'handshake',
    title: 'Advance Pricing Agreement (APA)',
    desc: 'Advisory and preparation support for unilateral, bilateral, and multilateral APA applications - including pre-filing meetings, rollback negotiations, and annual compliance reports.',
  },
  {
    icon: 'scale',
    title: 'TP Audit Representation',
    desc: 'Representation before Transfer Pricing Officers (TPO) and Dispute Resolution Panel (DRP) in case of scrutiny assessment under Section 92CA. Drafting of responses to notices and appeal assistance up to ITAT.',
  },
  {
    icon: 'globe',
    title: 'Country-by-Country Reporting (CbCR)',
    desc: 'CbCR preparation and filing for MNCs with consolidated group revenue exceeding ₹5,500 crore (approximately €750 million). Covers Form 3CEAD and master entity notification requirements.',
  },
]

const thresholds = [
  {
    type: 'International Transactions',
    threshold: '₹1 crore+',
    requirement: 'Form 3CEB (Section 92E) mandatory',
    color: 'var(--accent)',
  },
  {
    type: 'Local File required',
    threshold: '₹100 crore+',
    requirement: 'Form 3CEAB - Local File',
    color: '#f59e0b',
  },
  {
    type: 'Master File required',
    threshold: '₹1,000 crore+ group revenue',
    requirement: 'Form 3CEAA - Master File',
    color: '#ef4444',
  },
  {
    type: 'CbCR (Country-by-Country)',
    threshold: '₹5,500 crore+ group revenue',
    requirement: 'Form 3CEAD - CbCR filing',
    color: 'var(--primary)',
  },
]

const faqs = [
  {
    q: 'Who needs to comply with transfer pricing in India?',
    a: 'Any Indian company that has related-party international transactions must comply with transfer pricing under Section 92 of the Income Tax Act. This includes: MNC subsidiaries in India transacting with their foreign parent or group entities, Indian companies with foreign subsidiaries, and joint ventures with foreign partners. Even a single transaction - a royalty payment, management fee, inter-company loan, or software service - above ₹1 crore triggers the Form 3CEB requirement.',
  },
  {
    q: 'What is the penalty for non-compliance with transfer pricing in India?',
    a: 'The penalties are severe: (1) Failure to maintain TP documentation - penalty of 2% of the value of international transactions; (2) Concealment of income through TP manipulation - penalty of 100–300% of the tax sought to be evaded; (3) Late or incorrect filing of Form 3CEB - ₹1 lakh per default. Beyond penalties, a TP audit can result in a significant upward adjustment to your taxable income, with interest running from the original assessment date.',
  },
  {
    q: 'What transfer pricing method is best for an Indian subsidiary providing IT services to a US parent?',
    a: 'For IT service subsidiaries (captives), the Transactional Net Margin Method (TNMM) using operating margin as the profit level indicator is the most commonly accepted method in India. A benchmarking study comparing the subsidiary\'s operating margin against comparable independent IT service companies (typically sourced from Prowess or Capitaline) determines the arm\'s length range. The IQR (interquartile range) of comparable companies defines the acceptable margin band.',
  },
  {
    q: 'Can a transfer pricing adjustment be avoided with an Advance Pricing Agreement?',
    a: 'Yes. An APA (Advance Pricing Agreement) with the CBDT provides certainty on the arm\'s length price for a specified period (typically 5 years), with the option to roll back up to 4 previous years. Once an APA is in place, the covered transactions cannot be subjected to TP audit for that period. APA is ideal for companies with recurring high-value related-party transactions and provides the strongest protection against arbitrary adjustments.',
  },
  {
    q: 'What is the difference between Form 3CEB, Master File, and Local File?',
    a: 'These are three distinct compliance requirements under India\'s transfer pricing regulations: Form 3CEB is a CA-certified report listing all international and specified domestic transactions - mandatory for any company with related-party transactions above ₹1 crore. The Local File (Form 3CEAB) provides detailed analysis of the Indian entity\'s transactions with its foreign related parties - triggered when international transactions exceed ₹100 crore. The Master File (Form 3CEAA) provides a high-level overview of the entire multinational group\'s business, structure, and TP policies - required when the group\'s consolidated revenue exceeds ₹1,000 crore.',
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
  name: 'Transfer Pricing Advisory - Agrawal Khandelwal & Associates LLP',
  description: 'Transfer pricing documentation, benchmarking, APA advisory, and audit representation for MNCs and Indian multinationals.',
  url: 'https://agrawalkhandelwal.com/transfer-pricing',
  provider: { '@id': 'https://agrawalkhandelwal.com/#organization' },
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: ['Transfer Pricing Documentation', 'Benchmarking Study', 'Form 3CEB', 'APA Advisory', 'CbCR Filing', 'TP Audit Representation'],
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Transfer Pricing', item: 'https://agrawalkhandelwal.com/transfer-pricing' },
  ],
}

export default function TransferPricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

        {/* Hero */}
        <section className="hero">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="hero-badge">International Tax · Transfer Pricing</span>
            <h1>Transfer Pricing Consultants in India</h1>
            <p>
              OECD-aligned TP documentation, benchmarking studies, APA advisory, and audit representation for MNCs and Indian companies with cross-border related-party transactions.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
              Led by CA Rupesh Khandelwal (ex-Deloitte) and CA Mehul Agrawal - combining Big 4 methodology with CA firm responsiveness.
            </p>
            <div className="hero-cta">
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Discuss Your TP Requirements
              </a>
            </div>
          </div>
        </section>

        {/* What is Transfer Pricing */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>What is Transfer Pricing?</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.02rem', lineHeight: 1.9, marginBottom: '1.75rem' }}>
              Transfer pricing refers to the prices charged on transactions between related entities in a multinational group — royalties, management fees, inter-company loans, or service charges between a parent company and its subsidiary. Indian law under Section 92 of the Income Tax Act requires these prices to reflect the <strong style={{ color: 'var(--text-main)' }}>arm&apos;s length standard</strong>: what unrelated parties would charge for the same transaction under comparable conditions. These prices must be documented annually and certified by a Chartered Accountant in <strong style={{ color: 'var(--text-main)' }}>Form 3CEB</strong> before the due date — failure to do so triggers penalties of 2% of the transaction value.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
              {[
                { term: 'Arm\'s Length Price (ALP)', def: 'The price that independent, unrelated parties would agree on for the same transaction under comparable conditions.' },
                { term: 'Related Party', def: 'Two entities where one controls the other directly or indirectly, or both are controlled by a common parent company.' },
                { term: 'Specified Domestic Transaction', def: 'High-value transactions between related Indian entities (₹20 crore+) also subject to Indian transfer pricing rules.' },
                { term: 'Form 3CEB', def: 'Mandatory CA-certified report listing all international related-party transactions above ₹1 crore — the base threshold for Indian TP compliance.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1rem 1.25rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.88rem' }}>{item.term}</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.def}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who needs TP */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Compliance Thresholds</span>
              <h2 className="section-title">Does Your Company Need Transfer Pricing Compliance?</h2>
              <p style={{ color: 'var(--text-light)', maxWidth: '650px', margin: '0 auto' }}>
                India's TP compliance structure is tiered by transaction value. Most MNC subsidiaries and Indian companies with foreign group entities will trigger at least the basic Form 3CEB requirement.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
              {thresholds.map((t, i) => (
                <div key={i} className="card" style={{ borderTop: `4px solid ${t.color}` }}>
                  <div style={{ fontWeight: 800, color: t.color, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t.threshold}</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{t.type}</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.5 }}>{t.requirement}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="section-badge">What We Do</span>
              <h2 className="section-title">Transfer Pricing Services</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
              {services.map((s, i) => (
                <div key={i} className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
                  <div style={{ marginBottom: '1rem', color: 'var(--primary)' }}><Icon name={s.icon} size={32} /></div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Why We're Different</span>
              <h2 className="section-title">Big 4 Methodology. CA Firm Accessibility.</h2>
              <p style={{ color: 'var(--text-light)', maxWidth: '680px', margin: '0 auto' }}>
                Most mid-size companies can't afford Big 4 TP fees. We bring the same OECD-standard methodology - honed by our Deloitte-trained partner - at a fraction of the cost.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)' }}>
                  <Image src="/rupesh.jpg" alt="CA Rupesh Khandelwal - Transfer Pricing Expert India" width={120} height={120} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>CA Rupesh Khandelwal</h3>
                <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Partner - Ex-Deloitte</p>
                <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  Rupesh brings deep Big 4 experience in domestic and international taxation. His background at Deloitte includes TP documentation, audit representation, and cross-industry advisory for pharma, IT, and auto clients.
                </p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)' }}>
                  <Image src="/mehul.jpg" alt="CA Mehul Agrawal - International Tax Specialist India" width={120} height={120} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>CA Mehul Agrawal</h3>
                <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Partner - International Tax</p>
                <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                  Mehul specialises in cross-border structuring, DTAA advisory, and FEMA compliance. He coordinates the TP work with broader international tax strategy - ensuring the transfer pricing policy aligns with India-UAE, India-US, and other treaty positions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured In */}
        <section className="section" style={{ paddingTop: '0', paddingBottom: '0' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem 1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--text-light)', whiteSpace: 'nowrap' }}>Featured In</span>
              <div style={{ width: '1px', height: '2rem', background: 'var(--border)', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: '200px' }}>
                <a
                  href="https://taxguru.in/income-tax/transfer-pricing-documentation-checklist-fy-2025-26-key-compliance-requirements.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  Transfer Pricing Documentation Checklist for FY 2025-26: Key Compliance Requirements
                </a>
                <div style={{ color: 'var(--text-light)', fontSize: '0.8rem', marginTop: '0.2rem' }}>TaxGuru &middot; by CA Mehul Agrawal, Partner</div>
              </div>
              <a
                href="https://taxguru.in/income-tax/transfer-pricing-documentation-checklist-fy-2025-26-key-compliance-requirements.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 700, whiteSpace: 'nowrap', textDecoration: 'none' }}
              >
                Read Article &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">TP Questions</span>
              <h2 className="section-title">Transfer Pricing FAQs for India</h2>
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

        {/* Related Reading */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-badge">Further Reading</span>
              <h2 className="section-title">Transfer Pricing Guides</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { title: 'TP Documentation Checklist for Indian Subsidiaries (2026)', link: '/blog/transfer-pricing-documentation-checklist-india' },
                { title: 'Form 3CEB: Due Date, Filing Process & Penalties', link: '/blog/form-3ceb-transfer-pricing-audit-report' },
                { title: 'Master File vs Local File vs CbCR', link: '/blog/master-file-local-file-cbcr-india' },
                { title: 'UAE Corporate Tax: Impact on Indian Businesses', link: '/blog/uae-corporate-tax-indian-impact' },
                { title: 'POEM: When a Foreign Company Becomes Indian Tax Resident', link: '/blog/poem-place-of-effective-management-india' },
              ].map((item, i) => (
                <Link key={i} href={item.link} className="card" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                  <p style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.5, flex: 1, margin: 0 }}>{item.title}</p>
                  <div style={{ marginTop: '1rem', fontWeight: 700, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}>Read Guide &rarr;</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div style={{ background: 'linear-gradient(135deg, #0A2E5B 0%, #1e40af 100%)', textAlign: 'center', padding: '4rem 2rem', borderRadius: 'var(--radius-lg)' }}>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Need Transfer Pricing Documentation?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                Don't wait for a notice. TP documentation must be in place before the due date - and should be updated every year. Contact us to get started.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  Book a TP Consultation
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
