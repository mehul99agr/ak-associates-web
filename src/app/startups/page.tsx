import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../Icon'

export const metadata: Metadata = {
  title: 'CA for Startups in Bangalore, Mumbai & Nashik | Startup Advisory',
  description: 'CA firm for startups: company incorporation, DPIIT registration, ESOP structuring, Virtual CFO, and FDI/FEMA compliance in Bangalore, Mumbai, and Nashik.',
  keywords: [
    'CA for startups India', 'startup CA India', 'CA for startups Bangalore',
    'startup advisory Bangalore', 'company incorporation Bangalore',
    'DPIIT registration CA India', 'virtual CFO startups India',
    'ESOP structuring India', 'startup compliance India',
    'FDI compliance startup India', 'startup accountant Bangalore',
    'CA for funded startups India', 'startup CA Mumbai',
    'startup incorporation CA Nashik', 'CA for early stage startups',
    'startup financial advisor India', 'Series A compliance CA India',
    'pitch deck financial model CA India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/startups' },
  openGraph: {
    title: 'CA for Startups in Bangalore, Mumbai & Nashik | Agrawal Khandelwal & Associates LLP',
    description: 'End-to-end CA services for startups: incorporation, DPIIT, ESOP, Virtual CFO, fundraising compliance. Serving early and growth stage startups across India.',
    url: 'https://agrawalkhandelwal.com/startups',
  },
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

const earlyStageServices = [
  {
    icon: 'building',
    title: 'Company Incorporation & Structuring',
    desc: 'Private Limited vs LLP - we advise on the right structure for your funding goals, then execute registration end-to-end: DIN, DSC, MOA/AOA, and Certificate of Incorporation.',
  },
  {
    icon: 'scroll',
    title: 'DPIIT Registration (Startup India)',
    desc: 'DPIIT recognition unlocks an 80-IAC tax holiday for 3 years, angel tax exemption under Section 56(2)(viib), and simplified winding-up. We handle the full application.',
  },
  {
    icon: 'document',
    title: 'GST & Compliance Setup',
    desc: 'GST registration, first returns setup, director KYC, ROC compliance calendar - everything you need to stay clean from day one so VCs see zero red flags in due diligence.',
  },
]

const growthStageServices = [
  {
    icon: 'analytics',
    title: 'Virtual CFO for Funded Startups',
    desc: 'Cash flow management, burn rate tracking, MIS reporting for investors, and board-level financial strategy. We become your fractional CFO without the ₹80L/year salary.',
  },
  {
    icon: 'handshake',
    title: 'ESOP Structuring & Compliance',
    desc: 'Design ESOP pools that attract senior talent. We handle the scheme, trust setup, exercise notices, and employee tax advisory - including perquisite valuation for sweat equity.',
  },
  {
    icon: 'globe',
    title: 'FDI & FEMA Compliance',
    desc: 'Foreign investment in your startup triggers RBI reporting obligations - FCGPR, FCTRS, and LLP-I filings. One miss can invalidate the funding round. We make sure it doesn\'t.',
    link: '/blog/fema-compliance-foreign-investment-startups',
  },
  {
    icon: 'chart',
    title: 'Valuation & Financial Modeling',
    desc: 'DCF and Net Asset Value reports for angel rounds, Series A term sheets, and ESOP repricing. Investor-grade models built to VC standards.',
  },
  {
    icon: 'search',
    title: 'Pre-Fundraise Due Diligence Clean-up',
    desc: 'Most startups have compliance gaps. Before your VC DD, we audit and fix: missing annual returns, pending director KYC, GST mismatches, and FEMA reporting gaps.',
  },
  {
    icon: 'award',
    title: 'Transfer Pricing for MNC Subsidiaries',
    desc: 'If your Indian entity transacts with a foreign parent or group company, TP documentation is mandatory above ₹1 crore. We prepare master file, local file, and Form 3CEB.',
  },
]

const faqs = [
  {
    q: 'What is the best company structure for a startup seeking VC funding in India?',
    a: 'A Private Limited Company (Pvt Ltd) is the standard choice for VC-funded startups in India. VCs require convertible instruments (CCDs, CCPs) which are only available to Pvt Ltd companies. LLPs cannot issue preference shares or ESOPs, which disqualifies them for most institutional rounds. We help you incorporate the right structure from day one.',
  },
  {
    q: 'What does DPIIT recognition actually give a startup?',
    a: 'DPIIT recognition unlocks: (1) Section 80-IAC - 100% tax deduction on profits for 3 consecutive years out of the first 10 years; (2) Angel tax exemption - investors can invest above fair market value without the excess being taxed as income; (3) Self-certification under labour and environmental laws; (4) Fast-track IP applications with up to 80% fee rebate. Most early-stage startups qualify if their total turnover hasn\'t crossed ₹100 crore.',
  },
  {
    q: 'When should a startup hire a Virtual CFO?',
    a: 'The moment you close a seed round or are preparing for one. Investors require clean financials, proper MIS, and compliance history before writing a cheque. A Virtual CFO sets up these systems at a fraction of the cost of a full-time CFO. We typically engage with startups from pre-seed through Series B, handing off to a full-time CFO at that stage.',
  },
  {
    q: 'Is angel tax still applicable after the DPIIT exemption changes?',
    a: 'Section 56(2)(viib) - "angel tax" - applies when a startup raises funds at a valuation above fair market value. DPIIT-recognised startups are fully exempt from this provision, provided the total paid-up share capital and share premium does not exceed ₹25 crore. Without DPIIT recognition, the excess over FMV is taxed as income in the hands of the startup company.',
  },
  {
    q: 'How does ESOP taxation work for startup employees in India?',
    a: 'ESOP taxation has two trigger points: (1) Exercise - the difference between the FMV on exercise date and the exercise price is taxable as a perquisite (salary income) in the employee\'s hands, and the company must deduct TDS; (2) Sale - any gain above the FMV at exercise is capital gains. DPIIT-recognised startups can defer the perquisite tax to the earlier of 5 years from grant, date of sale, or when the employee leaves the company.',
  },
  {
    q: 'Can a foreign startup set up a subsidiary in India and what are the compliance requirements?',
    a: 'Yes. A wholly-owned subsidiary (WOS) of a foreign company is the most common structure for India market entry. Requirements include: (1) MCA incorporation with at least 2 Indian directors; (2) FDI reporting to RBI via FCGPR within 30 days of receiving investment; (3) Annual FEMA filings; (4) Transfer pricing documentation if the Indian entity transacts with the parent; (5) Annual audit and ROC compliance. We handle all of this.',
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
  '@id': 'https://agrawalkhandelwal.com/startups#service',
  name: 'Startup Advisory & CA Services - Agrawal Khandelwal & Associates LLP',
  description: 'End-to-end CA and financial advisory for startups in Bangalore, Mumbai, and Nashik. Incorporation, DPIIT, ESOP, Virtual CFO, fundraising compliance, and FDI/FEMA.',
  url: 'https://agrawalkhandelwal.com/startups',
  provider: { '@id': 'https://agrawalkhandelwal.com/#organization' },
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Nashik' },
    { '@type': 'Country', name: 'India' },
  ],
  serviceType: [
    'Company Incorporation', 'DPIIT Registration', 'ESOP Structuring',
    'Virtual CFO Services', 'FDI Compliance', 'FEMA Compliance',
    'Startup Financial Modeling', 'Pre-Fundraise Due Diligence',
  ],
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'CA for Startups', item: 'https://agrawalkhandelwal.com/startups' },
  ],
}

export default function StartupsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

        {/* Hero */}
        <section className="hero">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="hero-badge">Startup CA Desk - Bangalore · Mumbai · Nashik</span>
            <h1>
              CA for Startups in Bangalore,<br />Mumbai & Nashik
            </h1>
            <p>
              From incorporation and DPIIT registration to ESOP structuring and Series A compliance - we are the CA partner Indian startups trust to stay clean, investor-ready, and compliant at every stage.
            </p>
            <div className="hero-cta">
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Book a Startup Strategy Call
              </a>
              <Link href="/company-incorporation" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.1)' }}>
                Incorporation Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Startups & SMEs Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Startup Advisory</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Cities - BLR, MUM, NSK</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">₹0</span>
                <span className="stat-label">Angel Tax for DPIIT Clients</span>
              </div>
            </div>
          </div>
        </section>

        {/* Proof point */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Proven Results</span>
              <h2 className="section-title">What We've Done for Startups</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem' }}>
              <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Seed-Round Readiness for AI Startup</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Acted as Virtual CFO for Vitt AI from pre-seed: handled DPIIT registration, seed-round financial modeling, and complete ROC/GST compliance - allowing the founders to focus entirely on product development while staying investor-ready.
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Nilay Kulkarni</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Founder, Vitt AI</p>
                </div>
              </div>
              <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Cross-Border Structure for UAE-India Subsidiary</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Structured a tax-efficient India entity for a UAE-based client - including DTAA benefit optimisation, FEMA reporting, and transfer pricing documentation - achieving full regulatory compliance and a 15% reduction in cross-border tax leakage.
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Sunny Stephen</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Consultant, BMG India</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two-stage approach */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="section-badge">Early Stage</span>
              <h2 className="section-title">Getting Your Startup Off the Ground</h2>
              <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--text-light)' }}>
                The first 90 days of a startup's life set its compliance foundation. A single wrong choice here - entity type, cap table structure, ESOP pool timing - can cost you a funding round two years later.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
              {earlyStageServices.map((s, i) => (
                <div key={i} className="card" style={{ borderTop: '4px solid var(--primary)' }}>
                  <div style={{ marginBottom: '1.25rem', color: 'var(--primary)' }}><Icon name={s.icon} size={36} /></div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.875rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="section-badge">Growth Stage</span>
              <h2 className="section-title">Scaling with Institutional Capital</h2>
              <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--text-light)' }}>
                Once you've raised, the compliance burden multiplies. Investor reporting, FDI regulation, ESOP obligations, and transfer pricing - our startup CA team handles all of it.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
              {growthStageServices.map((s, i) => (
                <div key={i} className="card" style={{ borderTop: '4px solid var(--accent)' }}>
                  <div style={{ marginBottom: '1.25rem', color: 'var(--primary)' }}><Icon name={s.icon} size={36} /></div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.875rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{s.desc}</p>
                  {'link' in s && <Link href={(s as any).link} style={{ display: 'inline-block', marginTop: '1rem', fontWeight: 700, color: 'var(--accent)', fontSize: '0.88rem' }}>Read the FEMA compliance guide →</Link>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City targeting */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="section-badge">Where We Work</span>
              <h2 className="section-title">Startup CA Services Across India</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
              {[
                {
                  city: 'Bangalore',
                  desc: 'India\'s startup capital. We serve early-stage, VC-backed, and bootstrapped startups in Bangalore with incorporation, DPIIT, ESOP, and Virtual CFO services. Our team understands the Bangalore startup ecosystem and its investor expectations.',
                  phone: '+91 95275 33506',
                },
                {
                  city: 'Mumbai',
                  desc: 'For Mumbai-based startups raising institutional capital, scaling internationally, or dealing with MNC parent-subsidiary structures, we provide FEMA, transfer pricing, and cross-border CA advisory.',
                  phone: '+91 95275 33506',
                },
                {
                  city: 'Nashik',
                  desc: 'Nashik\'s growing industrial and agri-tech ecosystem has a strong pipeline of first-generation founders. We handle everything from basic GST/compliance setup to DPIIT registration and startup structuring from our Nashik office.',
                  phone: '+91 95275 33506',
                },
              ].map((item, i) => (
                <div key={i} className="card">
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.875rem', color: 'var(--primary)' }}>{item.city}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>{item.desc}</p>
                  <a href={`tel:${item.phone.replace(/\s/g, '')}`} style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem' }}>{item.phone}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the CA */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Your Startup CA</span>
              <h2 className="section-title">Who Handles Your Startup</h2>
            </div>
            <div style={{ maxWidth: '520px', margin: '0 auto' }}>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: '140px', height: '140px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)' }}>
                  <Image src="/mehul.jpg" alt="CA Mehul Agrawal - Startup CA Bangalore Mumbai Nashik" width={140} height={140} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>CA Mehul Agrawal</h3>
                <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner - Startup & International Advisory</p>
                <p style={{ fontSize: '0.93rem', color: 'var(--text-light)', lineHeight: 1.8, textAlign: 'justify' }}>
                  CA Mehul leads Agrawal Khandelwal & Associates LLP's startup practice. He advises early-stage and funded startups on corporate structuring, fundraising compliance, ESOP design, and cross-border tax strategy. His UAE Corporate Taxation certification makes him uniquely positioned for startups with global operations.
                </p>
                <div style={{ marginTop: '1.5rem', textAlign: 'left', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                  <strong style={{ fontSize: '0.82rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Credentials</strong>
                  <ul style={{ listStyle: 'none', marginTop: '0.75rem', fontSize: '0.87rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 UAE Corporate Taxation (Certified)</li>
                    <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 Concurrent Audits of Bank</li>
                    <li style={{ color: 'var(--text-light)' }}>✓ ESOP & FEMA Structuring</li>
                    <li style={{ color: 'var(--text-light)' }}>✓ Transfer Pricing & DTAA</li>
                    <li style={{ color: 'var(--text-light)' }}>✓ Startup Financial Modeling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Startup FAQs</span>
              <h2 className="section-title">Startup CA Questions Answered</h2>
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
        <section className="section bg-surface">
          <div className="container">
            <div style={{ background: 'linear-gradient(135deg, #0A2E5B 0%, #1e40af 100%)', color: '#fff', textAlign: 'center', padding: '4rem 2rem', borderRadius: 'var(--radius-lg)' }}>
              <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>Need a CA for Your Startup?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                Tell us your stage and goal. We'll map out exactly what compliance you need, what you can defer, and what will matter most to your next investor.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  Book a Startup Strategy Call
                </a>
                <Link href="/company-incorporation" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  View Incorporation Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

    </>
  )
}
