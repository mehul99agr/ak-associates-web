import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Company Incorporation in India: Private Limited, LLP & OPC',
  description: 'Register a Private Limited Company, LLP, or OPC in India with expert CA guidance. SPICe+ filing, MOA drafting, and compliance setup. Transparent pricing.',
  keywords: [
    'company incorporation India', 'company registration India',
    'private limited company registration India', 'LLP registration India',
    'incorporate company India', 'register company India',
    'company incorporation service India', 'CA for company registration India',
    'SPICe+ filing India', 'MCA company registration',
    'company incorporation Nashik', 'business registration India 2026',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/company-incorporation' },
  openGraph: {
    title: 'Company Incorporation in India | Agrawal Khandelwal & Associates LLP',
    description: 'Expert CA-led company registration in India. Private Limited, LLP, or OPC: we handle everything from name reservation to Certificate of Incorporation.',
    url: 'https://agrawalkhandelwal.com/company-incorporation',
    type: 'website',
  },
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Company Incorporation in India',
  description: 'End-to-end company registration service in India: Private Limited Company, LLP, and OPC. Includes name reservation, SPICe+ filing, MOA & AOA drafting, and post-incorporation compliance setup.',
  provider: {
    '@type': 'AccountingService',
    name: 'Agrawal Khandelwal & Associates LLP',
    url: 'https://agrawalkhandelwal.com',
    telephone: '+91-95275-33506',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 12 & 13, Ram Plaza, Mumbai Naka',
      addressLocality: 'Nashik',
      addressRegion: 'Maharashtra',
      postalCode: '422011',
      addressCountry: 'IN',
    },
  },
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'Company Registration',
  offers: {
    '@type': 'Offer',
    price: '15000',
    priceCurrency: 'INR',
    description: 'All-in company incorporation starting from ₹15,000 (government fees + professional fees)',
  },
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does company incorporation take in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '15–20 working days end-to-end: 1–2 days for DSC, 2–5 days for name reservation via RUN form, and 7–15 days for MCA to process the SPICe+ filing and issue the Certificate of Incorporation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of incorporating a company in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All-in cost ranges from ₹15,000 to ₹40,000 for a Private Limited Company, covering government filing fees (₹8,000–₹15,000), DSC per director (₹1,000–₹2,000), and CA professional fees. LLP and OPC are slightly lower at ₹12,000–₹30,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which company structure should I choose: Private Limited or LLP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose a Private Limited Company if you plan to raise funding, issue ESOPs, or build a scalable business. Choose an LLP if you are in professional services (consulting, design, law), are bootstrapping, and want lower annual compliance costs. Our CA team advises you on the right choice during onboarding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I incorporate a company in India from another city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The entire process is online. We work with founders across India and NRIs abroad. You only need to courier or upload scanned documents. No physical visit required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in your incorporation service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our service covers: structure advisory (Pvt Ltd vs LLP vs OPC), DSC procurement, DIN application, name reservation (RUN), SPICe+ filing, MOA & AOA drafting, government fee payment, Certificate of Incorporation, and a post-incorporation compliance checklist. Optional add-ons: Shareholders\' Agreement, trademark registration, bank account assistance.',
      },
    },
  ],
}

const howToLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Register a Company in India',
  description: 'Step-by-step process to incorporate a Private Limited Company, LLP, or OPC in India with CA assistance.',
  totalTime: 'P20D',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'INR', minValue: '15000', maxValue: '40000' },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Free Advisory Call',
      text: 'Discuss your business, funding plans, and team with our CA to determine the right structure (Private Limited, LLP, or OPC) with clear reasoning.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Document Collection',
      text: 'We send a precise checklist. You share scanned documents digitally: no physical visit needed. Required documents include PAN, Aadhaar, address proof, and passport photos.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Filing & Follow-up',
      text: 'We handle DSC procurement, name reservation via RUN, SPICe+ filing, and MOA/AOA drafting. We track MCA status and keep you updated throughout.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Certificate & Handover',
      text: 'You receive the Certificate of Incorporation, CIN, PAN, TAN, and a post-incorporation compliance calendar covering all annual filing deadlines.',
    },
  ],
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Company Incorporation', item: 'https://agrawalkhandelwal.com/company-incorporation' },
  ],
}

const steps = [
  { n: '01', title: 'Free Advisory Call', desc: 'We understand your business, funding plans, and team, then recommend the right structure with clear reasoning.' },
  { n: '02', title: 'Document Collection', desc: 'We send you a precise checklist. You share scanned documents digitally: no physical visit needed.' },
  { n: '03', title: 'Filing & Follow-up', desc: 'We handle DSC procurement, name reservation, SPICe+ filing, and MOA/AOA drafting. We track MCA status and keep you updated.' },
  { n: '04', title: 'Certificate & Handover', desc: 'You receive the Certificate of Incorporation, CIN, PAN, TAN, and a post-incorporation compliance calendar.' },
]

const structures = [
  {
    name: 'Private Limited Company',
    best: 'Startups seeking funding',
    pros: ['Raise Angel/VC funding', 'Issue ESOPs to team', 'Clear acquisition/IPO path', 'High investor credibility'],
    cons: ['Mandatory annual audit', 'Higher compliance cost'],
    cost: '₹15,000–₹40,000',
    time: '15–20 working days',
  },
  {
    name: 'LLP',
    best: 'Professional services & agencies',
    pros: ['Lower compliance burden', 'No mandatory audit under ₹40L', 'Flexible profit-sharing', 'Lower registration cost'],
    cons: ['Cannot raise equity funding', 'No ESOPs'],
    cost: '₹12,000–₹30,000',
    time: '15–20 working days',
  },
  {
    name: 'One Person Company (OPC)',
    best: 'Solo founders',
    pros: ['Full control', 'Limited liability', 'Company credibility', 'Easy to convert to Pvt Ltd later'],
    cons: ['Cannot raise equity funding', 'Must have a nominee director'],
    cost: '₹10,000–₹25,000',
    time: '15–20 working days',
  },
]

export default function CompanyIncorporationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

        {/* Hero */}
        <section className="hero">
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '860px' }}>
            <span className="hero-badge">Company Registration India</span>
            <h1>Register Your Company in India</h1>
            <p>
              CA-led company registration: Private Limited, LLP, or OPC. We handle every step from name reservation to Certificate of Incorporation. Fixed pricing. 7–15 day turnaround.
            </p>
            <div className="hero-cta">
              <a href="https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7" target="_blank" rel="noopener noreferrer"
                className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 800 }}>
                Book Free Advisory Call
              </a>
              <Link href="/tools/incorporation-wizard" className="btn btn-secondary">
                Find My Structure →
              </Link>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)', padding: '1.25rem 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(2rem, 6vw, 5rem)', flexWrap: 'wrap', textAlign: 'center' }}>
            {[
              { n: '10+', label: 'Yrs Partner Exp.' },
              { n: '200+', label: 'Companies Incorporated' },
              { n: '15 Days', label: 'Avg. Turnaround' },
              { n: '100%', label: 'Online Process' },
            ].map((t) => (
              <div key={t.n}>
                <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary)' }}>{t.n}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', fontWeight: 600 }}>{t.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Structure comparison */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">Which Structure Is Right for You?</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>We advise you on the best fit, but here&apos;s the quick overview.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              {structures.map((s) => (
                <div key={s.name} className="card">
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.06em' }}>Best for</span>
                    <p style={{ fontWeight: 700, color: 'var(--text-light)', fontSize: '0.9rem', margin: '2px 0 0.75rem' }}>{s.best}</p>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1rem' }}>{s.name}</h3>
                  <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    {s.pros.map((p) => (
                      <li key={p} style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '4px' }}>✓ {p}</li>
                    ))}
                    {s.cons.map((c) => (
                      <li key={c} style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '4px' }}>✗ {c}</li>
                    ))}
                  </ul>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <div><span style={{ color: 'var(--text-light)', display: 'block', fontSize: '0.75rem' }}>All-in cost</span><strong style={{ color: 'var(--primary)' }}>{s.cost}</strong></div>
                    <div style={{ textAlign: 'right' }}><span style={{ color: 'var(--text-light)', display: 'block', fontSize: '0.75rem' }}>Turnaround</span><strong style={{ color: 'var(--primary)' }}>{s.time}</strong></div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/tools/incorporation-wizard" className="btn btn-outline">
                Not sure? Take the 4-question quiz →
              </Link>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>What&apos;s Included</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '0.75rem' }}>
              {[
                'Structure advisory: Pvt Ltd vs LLP vs OPC',
                'DSC (Digital Signature Certificate) for all directors',
                'Name availability check & RUN filing',
                'SPICe+ form preparation & filing',
                'MOA & AOA drafting (CA-reviewed)',
                'PAN, TAN & GSTIN application',
                'Government fee payment tracking',
                'Certificate of Incorporation handover',
                'Post-incorporation compliance calendar',
                'INC-20A (commencement declaration) guidance',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: '#10b981', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginTop: '1.5rem', textAlign: 'center' }}>
              Optional add-ons: Shareholders&apos; Agreement drafting · Trademark registration · Bank account assistance
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="section bg-surface">
          <div className="container" style={{ maxWidth: '860px' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>How It Works</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '2rem' }}>
              {steps.map((s) => (
                <div key={s.n} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: '8px', padding: '0.5rem 0.75rem', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>{s.n}</div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '0.4rem' }}>{s.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', marginTop: '2rem', textAlign: 'center' }}>
              Once incorporated, most funded and growth-stage companies also need ongoing financial leadership. See{' '}
              <Link href="/blog/strategic-value-virtual-cfo-services" style={{ color: 'var(--accent)', fontWeight: 700 }}>
                why SMEs need a Virtual CFO
              </Link>{' '}
              before they can justify a full-time hire.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '780px' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqLd.mainEntity.map((q) => (
                <div key={q.name} style={{ background: 'var(--bg-surface)', borderRadius: '10px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{q.name}</h3>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Reading */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-badge">Guides</span>
              <h2 className="section-title">Incorporation &amp; Compliance Guides</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { title: 'How to Incorporate a Company in India: Pvt Ltd vs LLP vs OPC (2026)', link: '/blog/company-incorporation-india-guide' },
                { title: 'DPIIT Registration: Eligibility, Process & 80-IAC Tax Benefit', link: '/blog/dpiit-registration-startups-india-80iac' },
                { title: 'Company Type Finder: Answer 4 Questions, Get a Recommendation', link: '/tools/incorporation-wizard' },
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
        <section style={{ background: 'var(--primary)', padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '660px' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
              Ready to Incorporate?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Book a free 20-minute call. We&apos;ll confirm the right structure, walk you through the documents, and give you a fixed-price quote: no surprises.
            </p>
            <a href="https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7" target="_blank" rel="noopener noreferrer"
              className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 800 }}>
              Book Free Advisory Call
            </a>
          </div>
        </section>

    </>
  )
}
