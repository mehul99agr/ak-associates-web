import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Icon from './Icon'
import TrackedLink from './TrackedLink'
import { BOOKING_LINK, EMAIL_LINK } from '@/lib/constants'
import { formatDueDate, getUpcomingKeyDates } from '@/lib/dueDates'

export const metadata: Metadata = {
  title: { absolute: 'NRI Tax & Transfer Pricing CA | Agrawal Khandelwal & Associates LLP' },
  description: 'Chartered Accountants for NRIs and cross-border businesses: NRI tax and FEMA, transfer pricing, DTAA, UAE and US entity compliance, and company incorporation.',
  alternates: { canonical: 'https://agrawalkhandelwal.com' },
}

// Regenerate hourly so the upcoming-deadlines strip drops dates as they pass
export const revalidate = 3600

const bookingLink = BOOKING_LINK

const services = [
  {
    title: 'NRI Tax & FEMA Advisory',
    desc: 'India tax returns, property sales, DTAA relief and repatriation for Non-Resident Indians in the US, UK, Gulf, Canada, Singapore and Australia.',
    icon: 'globe',
    features: ['NRI Income Tax Returns', 'Property Sale TDS & Lower TDS Certificate', 'NRE / NRO & Repatriation (Form 145/146)', 'DTAA & Foreign Tax Credit'],
    link: '/nri-tax-advisory',
  },
  {
    title: 'Transfer Pricing',
    desc: 'Benchmarking, documentation and Form 3CEB for Indian companies with foreign group entities, plus TP audit and APA support.',
    icon: 'analytics',
    features: ['Form 3CEB & Local File', 'Benchmarking Studies', 'Master File & CbCR', 'TP Assessments & APA'],
    link: '/transfer-pricing',
  },
  {
    title: 'International Tax & UAE',
    desc: 'Cross-border structuring, DTAA positions, POEM and UAE Corporate Tax for Indian businesses with operations abroad.',
    icon: 'landmark',
    features: ['DTAA & Cross-border Structuring', 'UAE Corporate Tax (9%)', 'POEM & Residency', 'ODI / FDI under FEMA'],
    link: '/uae-tax-advisory',
  },
  {
    title: 'US Incorporation & Compliance',
    desc: 'LLC vs C-Corp structuring, EIN/ITIN, FBAR/FATCA disclosure, and IRS foreign-ownership filings for founders running a US entity from India.',
    icon: 'document',
    features: ['LLC vs C-Corp Structuring', 'FBAR & FATCA Filing', 'Form 5471/5472/8858', 'US Sales Tax Nexus'],
    link: '/us-cross-border',
  },
  {
    title: 'Incorporation & Company Compliance',
    desc: 'Private limited company, LLP and OPC registration, foreign subsidiaries in India, and the ROC filings that follow.',
    icon: 'building',
    features: ['Pvt Ltd, LLP & OPC Registration', 'Foreign Subsidiary (FDI) Set-up', 'Annual ROC Filings', 'Statutory Audit'],
    link: '/company-incorporation',
  },
  {
    title: 'Startups & Foreign Investment',
    desc: 'Funding, ESOPs, valuation and FEMA filings for startups raising money from investors in India and abroad.',
    icon: 'chart',
    features: ['FDI Reporting (FC-GPR)', 'ESOP Structuring', 'Valuation Reports', 'Virtual CFO'],
    link: '/startups',
  },
]

const faqs = [
  {
    q: 'What does Agrawal Khandelwal & Associates LLP specialise in?',
    a: 'NRI taxation and FEMA, transfer pricing, and international tax: DTAA, UAE Corporate Tax and US entity compliance for Indian founders. We also incorporate companies and LLPs and handle their ROC compliance. We do not take on GST or routine domestic income tax work.',
  },
  {
    q: 'Do you provide NRI taxation services?',
    a: 'Yes. We file India tax returns for Non-Resident Indians, handle property sales (capital gains, lower TDS certificate, Form 145/146 for repatriation), claim DTAA relief and TDS refunds, and advise on NRE/NRO accounts and FEMA. Everything is done remotely, with evening slots for US, UK and Gulf time zones.',
  },
  {
    q: 'Can you help with Transfer Pricing for Indian subsidiaries of foreign groups?',
    a: 'Yes. We prepare benchmarking studies, the Local File and Form 3CEB, Master File and CbCR filings where they apply, and support the company through transfer pricing assessments.',
  },
  {
    q: 'Do you advise on UAE Corporate Tax for Indian businesses?',
    a: 'Yes. CA Mehul Agrawal holds a UAE Corporate Taxation certification. We advise Indian businesses with UAE operations on the 9% CT compliance, India-UAE DTAA benefits, Transfer Pricing, and Free Zone entity structuring.',
  },
  {
    q: 'Do you help Indian founders with a US LLC or C-Corp?',
    a: 'Yes. Our team prepares the US filings (Form 1120, Form 5472, Delaware franchise tax, FBAR) and our US partner reviews and files them, while we keep the Indian side (ODI under FEMA, transfer pricing, your ITR) in step.',
  },
  {
    q: 'Where are your offices?',
    a: 'Nashik (Shop No. 12&13, Ram Plaza, Bhabha Nagar, Mumbai Naka, Nashik 422011) and Sillod (Near Datta Mandir, Tilak Nagar, Sillod 431112), Maharashtra. Most of our NRI and international clients work with us remotely; we serve clients across India and in the UAE and the US.',
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

const peopleLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal',
      name: 'CA Mehul Agrawal',
      jobTitle: 'Partner',
      description: 'Chartered Accountant specializing in International Taxation, Transfer Pricing, and Corporate Structuring, advising NRIs and multinational companies on cross-border transactions. UAE Corporate Taxation certified.',
      worksFor: { '@id': 'https://agrawalkhandelwal.com/#organization' },
      url: 'https://agrawalkhandelwal.com/about#mehul-agrawal',
      image: 'https://agrawalkhandelwal.com/mehul.jpg',
      email: 'mehul@agrawalkhandelwal.com',
      sameAs: ['https://www.linkedin.com/in/mehulagrawal99/', 'https://x.com/CAMehulAg'],
      knowsAbout: [
        'International Taxation', 'Transfer Pricing', 'UAE Corporate Tax',
        'DTAA', 'FEMA Compliance', 'Cross-border Structuring', 'M&A Advisory',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Chartered Accountant (ICAI)', identifier: '614225' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'UAE Corporate Taxation Certification' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Concurrent Bank Audit Certification' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'mehul@agrawalkhandelwal.com',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://agrawalkhandelwal.com/#rupesh-khandelwal',
      name: 'CA Rupesh Khandelwal',
      jobTitle: 'Partner',
      description: 'Chartered Accountant leading statutory and internal audits and company compliance, with prior experience at Deloitte across the Automobiles, IT, and Pharma sectors.',
      worksFor: { '@id': 'https://agrawalkhandelwal.com/#organization' },
      url: 'https://agrawalkhandelwal.com/about#rupesh-khandelwal',
      image: 'https://agrawalkhandelwal.com/rupesh.jpg',
      email: 'rupesh@agrawalkhandelwal.com',
      sameAs: ['https://www.linkedin.com/in/rupeshkhandelwal/'],
      alumniOf: { '@type': 'Organization', name: 'Deloitte' },
      knowsAbout: [
        'Statutory Audit', 'Internal Audit', 'Company Law Compliance',
        'Business Consulting',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Chartered Accountant (ICAI)', identifier: '614213' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'rupesh@agrawalkhandelwal.com',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleLd) }}
      />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge">
            <span>⭐</span>
            <span>Trusted by 100+ Businesses Across India</span>
          </div>
          <h1>Chartered Accountants for NRIs and <br />Cross-Border Businesses</h1>
          <p>
            <strong>Agrawal Khandelwal &amp; Associates LLP</strong> advises NRIs, Indian founders and international groups on India tax, FEMA, transfer pricing and cross-border structures. Choose the option that fits you.
          </p>
          <div className="hero-paths">
            <Link href="/nri-tax-advisory" className="hero-path">
              <strong>I am an NRI</strong>
              <span>Property sale TDS, NRE/NRO accounts, FEMA and tax filing in India</span>
            </Link>
            <Link href="/startups" className="hero-path">
              <strong>I am a Founder</strong>
              <span>Incorporation, compliance, ESOPs, fundraising and Virtual CFO</span>
            </Link>
            <Link href="/transfer-pricing" className="hero-path">
              <strong>I run a Cross-Border Business</strong>
              <span>Transfer pricing, foreign subsidiaries, UAE and US entities</span>
            </Link>
          </div>
          <div className="hero-cta">
            <TrackedLink href={bookingLink} className="btn btn-primary" method="booking" location="homepage_hero">
              Book a Consultation
            </TrackedLink>
            <TrackedLink href={EMAIL_LINK} className="btn btn-secondary" method="email" location="homepage_hero">
              Email Us
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Clients Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Office Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="section bg-surface" id="about">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-badge">Meet Our Team</span>
            <h2 className="section-title">Leading Professionals</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-light)', fontSize: '1.05rem' }}>
              International tax and NRI advisory is led by CA Mehul Agrawal; audit and company compliance by CA Rupesh Khandelwal.
            </p>
            <Link href="/about" style={{ display: 'inline-block', marginTop: '1rem', fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem' }}>
              Full bios & credentials →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '3rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '140px', height: '140px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)', flexShrink: 0 }}>
                <Image src="/mehul.jpg" alt="CA Mehul Agrawal" width={140} height={140} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>CA Mehul Agrawal</h3>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner & International Tax Expert</p>
              <p style={{ fontSize: '0.93rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                Mehul is a distinguished Chartered Accountant specializing in International Taxation, Transfer Pricing, and Corporate Structuring. He advises multinational companies on cross-border transactions and NRIs on India tax, FEMA and repatriation, keeping their positions consistent across countries.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'left', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <strong style={{ fontSize: '0.82rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Specializations & Certifications</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.75rem', fontSize: '0.87rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li style={{ color: 'var(--text-light)' }}>✓ International Tax Planning</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ FEMA & RBI Compliance</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ M&A Advisory</li>
                  <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 Concurrent Audits of Bank</li>
                  <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 UAE Corporate Taxation</li>
                </ul>
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '140px', height: '140px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)', flexShrink: 0 }}>
                <Image src="/rupesh.jpg" alt="CA Rupesh Khandelwal" width={140} height={140} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>CA Rupesh Khandelwal</h3>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner, Audit & Company Compliance</p>
              <p style={{ fontSize: '0.93rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                Rupesh brings valuable insights from leading firms, including Deloitte. His expertise spans Automobiles, IT, and Pharma. He leads the firm's statutory and internal audits and the company law compliance that follows incorporation.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'left', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <strong style={{ fontSize: '0.82rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Specializations & Experience</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.75rem', fontSize: '0.87rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li style={{ color: 'var(--text-light)' }}>✓ Statutory & Internal Audits</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ ROC & Company Law Compliance</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ Business Consulting</li>
                  <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 Ex-Deloitte</li>
                                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section" id="services">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-badge">Our Expertise</span>
            <h2 className="section-title">What We Focus On</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              A focused practice: NRIs, transfer pricing and cross-border work, plus the incorporation and company compliance that goes with it.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {services.map((s, i) => {
              const inner = (
                <>
                  <div style={{ marginBottom: '1.25rem', color: 'var(--primary)' }}><Icon name={s.icon} size={40} /></div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.875rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {s.features.map((f, j) => (
                      <li key={j} style={{ color: 'var(--text-light)' }}>✓ {f}</li>
                    ))}
                  </ul>
                  {s.link && <div style={{ marginTop: '1.25rem', fontWeight: 700, color: 'var(--accent)', fontSize: '0.88rem' }}>Learn more →</div>}
                </>
              )
              return s.link
                ? <Link key={i} href={s.link} className="card" style={{ display: 'block', textDecoration: 'none' }}>{inner}</Link>
                : <div key={i} className="card">{inner}</div>
            })}
          </div>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section className="section bg-surface" id="testimonials">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-badge">Proven Results</span>
            <h2 className="section-title">Success Stories & Impact</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>Client Testimonial</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem' }}>
                &ldquo;His proficiency as Chartered Accountant in financial management, analysis, and tax compliance is truly commendable, reflecting a high level of professionalism. His strong work ethic, collaborative approach, adept stakeholder management, and commitment to staying abreast of evolving laws and industry trends make him an asset to any team.&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 700 }}>Sunny Stephen</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Consultant, BMG India</p>
                </div>
              </div>
            </div>

            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>Startup Financial Strategy</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem' }}>
                Acted as Virtual CFO for a high-growth AI startup, managing their DPIIT registration, seed-round financial modeling, and ensuring complete ROC and FEMA compliance, allowing the founders to focus strictly on product development.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 700 }}>Nilay Kulkarni</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Founder, Vitt AI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <h2 className="section-title">Our Global Reach</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '580px', margin: '0.75rem auto 2.5rem' }}>
              Based in <Link href="/ca-in-nashik" style={{ color: 'var(--accent)', fontWeight: 700 }}>Nashik</Link> and Sillod, Maharashtra, advising NRIs and cross-border businesses across India and abroad.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
              {['Nashik', 'Sillod', 'Mumbai', 'Bangalore', 'Delhi', 'UAE'].map((location, idx) => (
                <span key={idx} style={{
                  padding: '10px 22px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'var(--primary)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  📍 {location}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED GUIDES ===== */}
      <section className="section" id="featured-guides">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-badge">From the Knowledge Center</span>
            <h2 className="section-title">Featured Guides</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              Practical guides on the questions we get asked most, across NRI taxation, US entity compliance, incorporation, and cross-border structuring.
            </p>
          </div>
          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '0.5rem 1rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Upcoming Compliance Deadlines</h3>
              <Link href="/tools/compliance-calendar" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem' }}>Full due date calendar →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
              {getUpcomingKeyDates(3).map((d) => (
                <Link key={d.date + d.title} href={`/blog/${d.post}`} style={{ display: 'block' }}>
                  <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.98rem' }}>{formatDueDate(d.date)}</div>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.92rem' }}>{d.title}</div>
                </Link>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
            {[
              {
                tag: 'FEMA & Compliance',
                title: 'FEMA Compliance for Startups Raising Foreign Investment',
                href: '/blog/fema-compliance-foreign-investment-startups',
              },
              {
                tag: 'US Cross-Border',
                title: 'US LLC vs C-Corp: Which Structure Fits Your Startup',
                href: '/blog/us-llc-vs-c-corp-indian-founders',
              },
              {
                tag: 'NRI Taxation',
                title: 'TDS on NRI Property Sale: Rates, Form 27Q & Refund Guide',
                href: '/blog/tds-on-nri-property-sale-india',
              },
              {
                tag: 'Company Incorporation',
                title: 'DSC & DIN Application Guide for Directors',
                href: '/blog/dsc-din-application-director-guide',
              },
              {
                tag: 'Transfer Pricing',
                title: 'Form 3CEB and the Transfer Pricing Audit Report',
                href: '/blog/form-3ceb-transfer-pricing-audit-report',
              },
              {
                tag: 'Company Incorporation',
                title: 'Company Name Reservation via SPICe+ / RUN',
                href: '/blog/company-name-reservation-run-form-india',
              },
            ].map((g, i) => (
              <Link key={i} href={g.href} className="card" style={{ display: 'block', textDecoration: 'none' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{g.tag}</span>
                <h3 style={{ fontSize: '1.05rem', margin: '0.75rem 0 1rem', lineHeight: 1.4 }}>{g.title}</h3>
                <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.88rem' }}>Read guide →</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/blog" className="btn btn-outline">Browse All Insights</Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" id="faq">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-badge">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p style={{ maxWidth: '620px', margin: '0 auto', color: 'var(--text-light)' }}>
              Quick answers on the services, locations, and specializations clients ask about most.
            </p>
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

      {/* ===== CONTACT ===== */}
      <section className="section" id="contact">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title">Talk to Us About Your Cross-Border Matter</h2>
            <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--text-light)' }}>
              Book a consultation about your NRI, transfer pricing or international matter. We serve clients in Nashik, Sillod, Mumbai and Bangalore, and outside India in the UAE and the US.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1.25rem', color: 'var(--primary)' }}><Icon name="mapPin" size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.875rem' }}>Nashik Office</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Shop No. 12&13, Ram Plaza, Bhabha Nagar, Mumbai Naka, Nashik – 422011</p>
              <a href="mailto:mehul@agrawalkhandelwal.com" style={{ display: 'block', marginTop: '1rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', wordBreak: 'break-all' }}>mehul@agrawalkhandelwal.com</a>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1.25rem', color: 'var(--primary)' }}><Icon name="building" size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.875rem' }}>Sillod Office</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Near Datta Mandir, Tilak Nagar, Sillod – 431112</p>
              <Link href="/ca-in-sillod" style={{ display: 'block', marginTop: '0.6rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>CA firm in Sillod &rarr;</Link>
              <a href="mailto:rupesh@agrawalkhandelwal.com" style={{ display: 'block', marginTop: '1rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', wordBreak: 'break-all' }}>rupesh@agrawalkhandelwal.com</a>
            </div>

            {/* Booking CTA */}
            <div className="card" style={{ textAlign: 'center', background: 'var(--primary)', borderColor: 'var(--primary)' }}>
              <div style={{ marginBottom: '1.25rem', color: 'var(--white)' }}><Icon name="calendar" size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.875rem', color: 'var(--white)' }}>Book a Consultation</h3>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9rem' }}>Start with a free 15-minute intro call, or book 30 minutes of detailed advice. The advice fee is adjusted against our fee if you engage us.</p>
              <a href={bookingLink} className="btn btn-secondary" style={{ marginTop: '1.5rem', width: '100%' }}>
                Book a Call
              </a>
            </div>
          </div>

          <div style={{ marginTop: '4rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--primary)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.034561772485!2d73.7898192!3d19.9877793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb72f06cdfe9%3A0xd08936960d1177d0!2sAgrawal%20Khandelwal%20%26%20Associates%20LLP!5e0!3m2!1sen!2sin!4v1717777777777"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              title="Agrawal Khandelwal & Associates LLP – Nashik office location"
            />
          </div>
        </div>
      </section>
    </>
  )
}
