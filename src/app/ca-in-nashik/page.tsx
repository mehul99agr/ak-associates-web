import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'CA in Nashik | Best Chartered Accountant in Nashik | AK & Associates LLP',
  description: 'Looking for a trusted CA in Nashik? AK & Associates LLP offers GST filing, income tax returns, company incorporation, audit, and tax planning at Mumbai Naka, Nashik. Call +91 95275 33506.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/ca-in-nashik' },
  openGraph: {
    title: 'Best CA in Nashik | Chartered Accountant Nashik | AK & Associates LLP',
    description: 'Top-rated Chartered Accountants in Nashik. GST, ITR, audit, company incorporation, international tax. Located at Mumbai Naka, Nashik. Call now.',
    url: 'https://agrawalkhandelwal.com/ca-in-nashik',
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nashik, Maharashtra, India',
    'geo.position': '19.1947607;73.7879464',
    'ICBM': '19.1947607, 73.7879464',
  },
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

const services = [
  {
    icon: '📄',
    title: 'GST Registration & Filing',
    desc: 'Complete GST registration, monthly/quarterly return filing (GSTR-1, GSTR-3B), annual returns, GST audit, and response to notices for Nashik businesses.',
  },
  {
    icon: '🧾',
    title: 'Income Tax Return (ITR) Filing',
    desc: 'Accurate ITR filing for individuals, HUFs, firms, and companies in Nashik. Tax planning to minimise liability and maximise refunds.',
  },
  {
    icon: '🏢',
    title: 'Company & LLP Incorporation',
    desc: 'End-to-end company registration, LLP formation, and startup compliance for new businesses in Nashik, Maharashtra.',
  },
  {
    icon: '🛡️',
    title: 'Statutory & Tax Audit',
    desc: 'Statutory audits, tax audits under Section 44AB, internal audits, and concurrent bank audits for Nashik businesses of all sizes.',
  },
  {
    icon: '🌍',
    title: 'International Taxation',
    desc: 'Transfer pricing, DTAA advisory, FEMA compliance, and UAE corporate tax for businesses in Nashik with cross-border operations.',
  },
  {
    icon: '📈',
    title: 'Virtual CFO & Advisory',
    desc: 'Outsourced CFO services, financial planning, budgeting, and MIS reporting for growing companies based in Nashik.',
  },
]

const faqs = [
  {
    q: 'Where is your CA office in Nashik?',
    a: 'Our Nashik office is at Shop No. 12 & 13, Ram Plaza, Mumbai Naka, Nashik – 422011, Maharashtra. We are open Monday to Saturday, 10 AM to 6 PM.',
  },
  {
    q: 'What are your CA fees for GST filing in Nashik?',
    a: 'Our GST filing fees depend on the volume of transactions and frequency of returns. We offer transparent, fixed-fee packages for monthly GSTR-1 and GSTR-3B filing. Contact us for a free quote tailored to your business.',
  },
  {
    q: 'Can you help with company registration in Nashik?',
    a: 'Yes. We handle complete company and LLP incorporation in Nashik — from name reservation and DSC/DIN to MOA/AOA drafting, Certificate of Incorporation, GST registration, and bank account opening assistance.',
  },
  {
    q: 'Do you file income tax returns for salaried employees in Nashik?',
    a: 'Yes. We file ITR for salaried individuals, business owners, professionals, and HUFs in Nashik. We also advise on tax-saving investments under Section 80C, 80D, and other deductions.',
  },
  {
    q: 'Do you handle international taxation for Nashik-based businesses?',
    a: 'Yes. We are specialists in international taxation including transfer pricing, DTAA (Double Taxation Avoidance Agreement), FEMA compliance, and UAE corporate tax for Nashik companies with global operations.',
  },
  {
    q: 'What documents are required for GST registration in Nashik?',
    a: 'For GST registration in Nashik you need: PAN card, Aadhaar card, passport-size photo, proof of business address (electricity bill/rent agreement), bank account statement, and business registration documents (if applicable). We guide you through the entire process.',
  },
]

const nashikLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': ['AccountingService', 'LocalBusiness', 'ProfessionalService'],
  '@id': 'https://agrawalkhandelwal.com/#location-nashik',
  name: 'Agrawal Khandelwal & Associates LLP',
  alternateName: ['AK & Associates Nashik', 'AK Associates CA Nashik'],
  description: 'Best Chartered Accountant firm in Nashik offering GST filing, income tax returns, company incorporation, audit, tax planning, and international taxation services. Located at Mumbai Naka, Nashik.',
  url: 'https://agrawalkhandelwal.com/ca-in-nashik',
  telephone: '+91-95275-33506',
  email: 'mehul@agrawalkhandelwal.com',
  priceRange: '₹₹',
  image: 'https://agrawalkhandelwal.com/logo.png',
  logo: 'https://agrawalkhandelwal.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No. 12 & 13, Ram Plaza, Mumbai Naka',
    addressLocality: 'Nashik',
    addressRegion: 'Maharashtra',
    postalCode: '422011',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '19.1947607',
    longitude: '73.7879464',
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
    { '@type': 'City', name: 'Nashik' },
    { '@type': 'AdministrativeArea', name: 'Nashik District' },
    { '@type': 'State', name: 'Maharashtra' },
  ],
  serviceType: [
    'GST Registration', 'GST Return Filing', 'Income Tax Return Filing',
    'Tax Planning', 'Statutory Audit', 'Tax Audit', 'Internal Audit',
    'Company Incorporation', 'LLP Registration', 'International Taxation',
    'Transfer Pricing', 'DTAA Advisory', 'Virtual CFO Services',
  ],
  hasMap: 'https://maps.google.com/?q=Ram+Plaza+Mumbai+Naka+Nashik',
  sameAs: ['https://www.linkedin.com/company/agrawal-khandelwal-associates-llp/'],
  parentOrganization: { '@id': 'https://agrawalkhandelwal.com/#organization' },
}

const nashikFaqLd = {
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
    { '@type': 'ListItem', position: 2, name: 'CA in Nashik', item: 'https://agrawalkhandelwal.com/ca-in-nashik' },
  ],
}

export default function CAInNashik() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nashikLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nashikFaqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge">
            <span>📍</span>
            <span>Nashik Office — Mumbai Naka, Nashik 422011</span>
          </div>
          <h1>Trusted Chartered Accountant<br />in Nashik</h1>
          <p>
            AK & Associates LLP is a leading CA firm in Nashik serving 100+ businesses with GST filing, income tax returns, company incorporation, audit, and international taxation. Located at Mumbai Naka, Nashik — open Monday to Saturday.
          </p>
          <div className="hero-cta">
            <a href="tel:+919527533506" className="btn btn-primary">
              Call +91 95275 33506
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
              <span className="stat-label">Nashik & Maharashtra Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years in Nashik</span>
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
            <span className="section-badge">CA Services in Nashik</span>
            <h2 className="section-title">What We Offer in Nashik</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              From GST and income tax compliance to company registration and international tax planning, we are your one-stop CA firm in Nashik.
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

      {/* WHY US */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">Why AK & Associates is the Best CA Firm in Nashik</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            {[
              { icon: '🏆', title: 'Certified Specialists', desc: 'CA Mehul Agrawal holds certifications in Concurrent Bank Audit and UAE Corporate Taxation — rare expertise available in Nashik.' },
              { icon: '🌍', title: 'International Tax Capability', desc: 'One of the very few CA firms in Nashik with hands-on experience in transfer pricing, DTAA, FEMA, and UAE corporate tax.' },
              { icon: '⚡', title: 'Fast Turnaround', desc: 'Dedicated team ensuring timely GST returns, ITR filing, and compliance so you never miss a deadline.' },
              { icon: '📞', title: 'Responsive Support', desc: 'Direct access to partners — no juniors handling your queries. We pick up the phone and respond to WhatsApp.' },
              { icon: '💼', title: 'End-to-End Service', desc: 'From startup incorporation to ongoing GST/tax compliance, audit, and virtual CFO — all under one roof in Nashik.' },
              { icon: '🔒', title: 'Trusted & Confidential', desc: 'Your financial data is handled with strict confidentiality. We are registered with ICAI and operate with complete professional ethics.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Your Nashik CA</span>
            <h2 className="section-title">Meet the Partner at Our Nashik Office</h2>
          </div>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '140px', height: '140px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)', flexShrink: 0 }}>
                <Image src="/mehul.jpg" alt="CA Mehul Agrawal — Chartered Accountant in Nashik" width={140} height={140} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>CA Mehul Agrawal</h3>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner — Nashik Office</p>
              <p style={{ fontSize: '0.93rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                Based in Nashik, CA Mehul Agrawal specialises in international taxation, transfer pricing, and corporate structuring. He advises Nashik-based businesses, startups, and NRI clients on tax optimisation and cross-border compliance.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'left', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <strong style={{ fontSize: '0.82rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Certifications</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.75rem', fontSize: '0.87rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 Concurrent Audits of Bank</li>
                  <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 UAE Corporate Taxation</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ International Tax Planning</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ FEMA & RBI Compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE & CONTACT */}
      <section className="section bg-surface" id="contact">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Visit Us</span>
            <h2 className="section-title">Our Nashik Office</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Nashik Office Details</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-main)' }}>Address:</strong><br />
                Shop No. 12 & 13, Ram Plaza,<br />
                Mumbai Naka, Nashik – 422011,<br />
                Maharashtra, India
              </p>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-main)' }}>Hours:</strong><br />
                Monday – Saturday: 10:00 AM – 6:00 PM
              </p>
              <a href="tel:+919527533506" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>
                📞 +91 95275 33506
              </a>
              <a href="mailto:mehul@agrawalkhandelwal.com" style={{ display: 'block', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                ✉ mehul@agrawalkhandelwal.com
              </a>
            </div>
            <div className="card" style={{ background: '#0A2E5B', borderColor: '#0A2E5B' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>📅</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.875rem', color: '#fff' }}>Book a Free Consultation</h3>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Talk directly with CA Mehul Agrawal about your GST, tax, audit, or business advisory needs in Nashik. No obligation — first session is free.
              </p>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%' }}>
                📅 Schedule on Google Calendar
              </a>
              <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20CA%20services%20in%20Nashik." target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', marginTop: '0.75rem' }}>
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--primary)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.034561772485!2d73.7879464!3d19.1947607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb199f0a712f%3A0x2bb8a26b71bd9b72!2sRam%20Plaza%2C%20Mumbai%20Naka%2C%20Nashik%2C%20Maharashtra%20422011!5e0!3m2!1sen!2sin!4v1717777777777"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              title="AK & Associates LLP — CA office at Mumbai Naka, Nashik"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions — CA in Nashik</h2>
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
      <section className="section bg-surface">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Need a CA in Nashik?</h2>
          <p style={{ maxWidth: '580px', margin: '0 auto 2.5rem', color: 'var(--text-light)', fontSize: '1.05rem' }}>
            Contact AK & Associates LLP — your trusted Chartered Accountant in Nashik. We handle GST, income tax, audits, company registration, and more.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919527533506" className="btn btn-primary">Call Now: +91 95275 33506</a>
            <Link href="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
