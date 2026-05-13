import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'CA in Sillod | Chartered Accountant Sillod | AK & Associates LLP',
  description: 'Trusted CA in Sillod, Aurangabad district. AK & Associates LLP provides GST filing, income tax returns, audit, company incorporation, and tax planning at Tilak Nagar, Sillod. Call +91 95955 85953.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/ca-in-sillod' },
  openGraph: {
    title: 'CA in Sillod | Chartered Accountant Sillod | AK & Associates LLP',
    description: 'Chartered Accountants in Sillod. GST, income tax, audit, company incorporation, and tax advisory. Located at Tilak Nagar, Sillod – 431112. Call now.',
    url: 'https://agrawalkhandelwal.com/ca-in-sillod',
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Sillod, Maharashtra, India',
    'geo.position': '20.1040;75.6496',
    'ICBM': '20.1040, 75.6496',
  },
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

const services = [
  {
    icon: '📄',
    title: 'GST Registration & Filing',
    desc: 'GST registration, GSTR-1, GSTR-3B, annual return filing, and GST audit for businesses and traders in Sillod and surrounding areas.',
  },
  {
    icon: '🧾',
    title: 'Income Tax Return (ITR) Filing',
    desc: 'ITR filing for individuals, salaried employees, business owners, and HUFs in Sillod. Accurate filing with maximum deductions.',
  },
  {
    icon: '🏢',
    title: 'Company & LLP Incorporation',
    desc: 'Company registration, LLP formation, and shop act registration for new businesses starting in Sillod, Maharashtra.',
  },
  {
    icon: '🛡️',
    title: 'Audit & Assurance',
    desc: 'Statutory audits, tax audits under Section 44AB, internal audits, and stock audits for businesses in Sillod.',
  },
  {
    icon: '📊',
    title: 'Tax Planning & Advisory',
    desc: 'Strategic tax planning for individuals and businesses in Sillod to minimise tax liability within the framework of the Income Tax Act.',
  },
  {
    icon: '📝',
    title: 'Accounting & Bookkeeping',
    desc: 'Monthly accounting, tally bookkeeping, balance sheet preparation, and financial statement preparation for Sillod businesses.',
  },
]

const faqs = [
  {
    q: 'Where is your CA office in Sillod?',
    a: 'Our Sillod office is located Near Datta Mandir, Tilak Nagar, Sillod – 431112, Maharashtra. We are open Monday to Saturday, 10 AM to 6 PM. You can also reach us on WhatsApp or phone for appointments.',
  },
  {
    q: 'What CA services are available in Sillod?',
    a: 'Our Sillod office provides GST registration and filing, income tax return filing, company/LLP incorporation, statutory and tax audits, accounting and bookkeeping, and general tax advisory services for businesses and individuals in Sillod.',
  },
  {
    q: 'Can you file my ITR from Sillod?',
    a: 'Yes. CA Rupesh Khandelwal handles income tax return filing for salaried individuals, business owners, professionals, and HUFs in Sillod and the surrounding Chhatrapati Sambhajinagar (Aurangabad) district.',
  },
  {
    q: 'How do I register my business in Sillod?',
    a: 'We handle complete business registration from Sillod — including shop act license, GST registration, company or LLP incorporation, and MSME (Udyam) registration. Contact us at +91 95955 85953 to get started.',
  },
  {
    q: 'Is AK & Associates available for clients in Aurangabad district from Sillod?',
    a: 'Yes. Our Sillod office serves clients across the Chhatrapati Sambhajinagar (Aurangabad) district including Sillod tehsil, Kannad, Phulambri, and surrounding areas. For complex matters like international tax, our Nashik partners can assist as well.',
  },
  {
    q: 'What is the phone number of your CA office in Sillod?',
    a: 'You can reach our Sillod office at +91 95955 85953 (CA Rupesh Khandelwal) or email rupesh@agrawalkhandelwal.com. For international tax queries, contact our Nashik office at +91 95275 33506.',
  },
]

const sillodLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': ['AccountingService', 'LocalBusiness', 'ProfessionalService'],
  '@id': 'https://agrawalkhandelwal.com/#location-sillod',
  name: 'Agrawal Khandelwal & Associates LLP — Sillod',
  alternateName: ['AK Associates Sillod', 'CA in Sillod', 'AK & Associates CA Sillod'],
  description: 'Chartered Accountant firm in Sillod providing GST filing, income tax returns, company incorporation, audit, and tax advisory services to businesses and individuals in Sillod, Aurangabad district.',
  url: 'https://agrawalkhandelwal.com/ca-in-sillod',
  telephone: '+91-95955-85953',
  email: 'rupesh@agrawalkhandelwal.com',
  priceRange: '₹₹',
  image: 'https://agrawalkhandelwal.com/logo.png',
  logo: 'https://agrawalkhandelwal.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Datta Mandir, Tilak Nagar',
    addressLocality: 'Sillod',
    addressRegion: 'Maharashtra',
    postalCode: '431112',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '20.1040',
    longitude: '75.6496',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Sillod' },
    { '@type': 'AdministrativeArea', name: 'Sillod Tehsil' },
    { '@type': 'AdministrativeArea', name: 'Chhatrapati Sambhajinagar District' },
    { '@type': 'State', name: 'Maharashtra' },
  ],
  serviceType: [
    'GST Registration', 'GST Return Filing', 'Income Tax Return Filing',
    'Tax Planning', 'Statutory Audit', 'Tax Audit', 'Internal Audit',
    'Company Incorporation', 'LLP Registration', 'Accounting',
    'Bookkeeping', 'Financial Statement Preparation',
  ],
  sameAs: ['https://www.linkedin.com/company/agrawal-khandelwal-associates-llp/'],
  parentOrganization: { '@id': 'https://agrawalkhandelwal.com/#organization' },
}

const sillodFaqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'CA in Sillod', item: 'https://agrawalkhandelwal.com/ca-in-sillod' },
  ],
}

export default function CAInSillod() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sillodLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sillodFaqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge">
            <span>📍</span>
            <span>Sillod Office — Tilak Nagar, Sillod 431112</span>
          </div>
          <h1>Chartered Accountant<br />in Sillod</h1>
          <p>
            AK & Associates LLP brings professional CA services to Sillod and the Chhatrapati Sambhajinagar (Aurangabad) district. We provide GST filing, income tax returns, company registration, audit, and tax advisory — handled by CA Rupesh Khandelwal from our Sillod office.
          </p>
          <div className="hero-cta">
            <a href="tel:+919595585953" className="btn btn-primary">
              Call +91 95955 85953
            </a>
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Clients Across Maharashtra</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years of Practice</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Office Locations</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Expert Consultants</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">CA Services in Sillod</span>
            <h2 className="section-title">Services Available at Our Sillod Office</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              Professional CA services for businesses, traders, and individuals in Sillod and across Chhatrapati Sambhajinagar district.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {services.map((s, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.875rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Your Sillod CA</span>
            <h2 className="section-title">Meet the Partner at Our Sillod Office</h2>
          </div>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '140px', height: '140px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)', flexShrink: 0 }}>
                <Image src="/rupesh.jpg" alt="CA Rupesh Khandelwal — Chartered Accountant in Sillod" width={140} height={140} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>CA Rupesh Khandelwal</h3>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner — Sillod Office</p>
              <p style={{ fontSize: '0.93rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                CA Rupesh Khandelwal heads our Sillod office. With experience from leading firms including Deloitte, he brings expertise in domestic taxation, audits, and business consulting to Sillod-based businesses across industries including automobiles, IT, and pharma.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'left', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <strong style={{ fontSize: '0.82rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Specialisations</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.75rem', fontSize: '0.87rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li style={{ color: 'var(--text-light)' }}>✓ Domestic Tax Planning</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ Statutory & Internal Audits</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ Business Consulting</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ GST Compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE & CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Visit Us</span>
            <h2 className="section-title">Our Sillod Office</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Sillod Office Details</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-main)' }}>Address:</strong><br />
                Near Datta Mandir, Tilak Nagar,<br />
                Sillod – 431112,<br />
                Maharashtra, India
              </p>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-main)' }}>Hours:</strong><br />
                Monday – Saturday: 10:00 AM – 6:00 PM
              </p>
              <a href="tel:+919595585953" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>
                📞 +91 95955 85953
              </a>
              <a href="mailto:rupesh@agrawalkhandelwal.com" style={{ display: 'block', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                ✉ rupesh@agrawalkhandelwal.com
              </a>
            </div>
            <div className="card" style={{ background: '#0A2E5B', borderColor: '#0A2E5B' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>📅</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.875rem', color: '#fff' }}>Book a Free Consultation</h3>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Speak with CA Rupesh Khandelwal about your GST, tax, or audit needs in Sillod. First consultation is free.
              </p>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%' }}>
                📅 Schedule on Google Calendar
              </a>
              <a href="https://wa.me/919595585953?text=Hi,%20I%20need%20CA%20services%20in%20Sillod." target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', marginTop: '0.75rem' }}>
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Need advanced services like international taxation or startup advisory?
            </p>
            <p style={{ color: 'var(--text-main)', fontWeight: 600 }}>
              Our Nashik office handles those — <a href="tel:+919527533506" style={{ color: 'var(--primary)' }}>+91 95275 33506</a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions — CA in Sillod</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="card">
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{q}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', lineHeight: 1.8 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Looking for a CA in Sillod?</h2>
          <p style={{ maxWidth: '580px', margin: '0 auto 2.5rem', color: 'var(--text-light)', fontSize: '1.05rem' }}>
            AK & Associates LLP — your trusted Chartered Accountant in Sillod. GST, income tax, audit, and business registration made simple.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919595585953" className="btn btn-primary">Call Now: +91 95955 85953</a>
            <Link href="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
