import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../Icon'
import { BOOKING_LINK, OFFICES, OG_IMAGES } from '@/lib/constants'
import { buildBreadcrumbLd, buildFaqLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'CA in Sillod for NRIs & Companies',
  description: 'Chartered Accountants in Sillod near Chhatrapati Sambhajinagar (Aurangabad): NRI tax and property sales, company and LLP incorporation, ROC compliance and statutory audit.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/ca-in-sillod' },
  openGraph: {
    title: 'CA in Sillod for NRIs & Companies | Agrawal Khandelwal & Associates LLP',
    description: 'NRI tax and property sales, company incorporation, ROC compliance and statutory audit. Tilak Nagar, Sillod 431112.',
    url: 'https://agrawalkhandelwal.com/ca-in-sillod',
    images: OG_IMAGES,
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Sillod, Maharashtra, India',
    'geo.position': '20.3055;75.6518',
    'ICBM': '20.3055, 75.6518',
  },
}

const bookingLink = `${BOOKING_LINK}?partner=rupesh`

const services = [
  {
    icon: 'globe',
    title: 'NRI Tax & Property Sales',
    desc: 'For NRIs with land, a house or income in Sillod and the Aurangabad district: ITR filing, capital gains, lower TDS certificates and Form 145/146 for repatriation.',
  },
  {
    icon: 'building',
    title: 'Company & LLP Incorporation',
    desc: 'Private limited company, LLP and OPC registration for new ventures in Sillod and Chhatrapati Sambhajinagar.',
  },
  {
    icon: 'shield',
    title: 'Statutory & Internal Audit',
    desc: 'Statutory audits under the Companies Act and internal audits, led by CA Rupesh Khandelwal (ex-Deloitte).',
  },
  {
    icon: 'scroll',
    title: 'ROC Compliance',
    desc: 'AOC-4, MGT-7, DIR-3 KYC, INC-20A and board compliance for private limited companies and LLPs.',
  },
]

const faqs = [
  {
    q: 'Where is your CA office in Sillod?',
    a: 'Our Sillod office is located Near Datta Mandir, Tilak Nagar, Sillod 431112, Maharashtra. We are open Monday to Saturday, 11 AM to 7:30 PM. You can call, WhatsApp, email or book a call online.',
  },
  {
    q: 'What services does the Sillod office provide?',
    a: 'NRI taxation and property sales, company and LLP incorporation, ROC compliance and statutory and internal audit. We do not take on GST or routine domestic income tax filing.',
  },
  {
    q: 'Can you help an NRI sell land or a house in Sillod?',
    a: 'Yes. We work out the capital gains before the sale, apply for a lower TDS certificate (Form 128, earlier Form 13) so the buyer deducts TDS on the actual tax, file the NRI return and prepare Form 145/146 so the money can be sent abroad. The NRI side is handled by CA Mehul Agrawal, remotely if needed.',
  },
  {
    q: 'Do you serve clients in Chhatrapati Sambhajinagar (Aurangabad) from the Sillod office?',
    a: 'Yes. We serve clients across the Chhatrapati Sambhajinagar (Aurangabad) district, including Kannad, Phulambri and Jalna, for NRI matters, incorporation, ROC compliance and audit.',
  },
  {
    q: 'What is the phone number of your CA office in Sillod?',
    a: 'Call or WhatsApp CA Rupesh Khandelwal at +91 95955 85953, or email rupesh@agrawalkhandelwal.com. For NRI and international tax queries, contact CA Mehul Agrawal at +91 95275 33506.',
  },
]

const sillodLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': ['AccountingService', 'LocalBusiness', 'ProfessionalService'],
  '@id': 'https://agrawalkhandelwal.com/#sillod-office',
  name: 'Agrawal Khandelwal & Associates LLP; Sillod',
  alternateName: ['Agrawal Khandelwal & Associates LLP Sillod', 'CA in Sillod', 'Agrawal Khandelwal & Associates LLP CA Sillod'],
  description: 'Chartered Accountant firm in Sillod providing NRI tax and property sale advisory, company and LLP incorporation, ROC compliance and statutory audit to clients in Sillod, Aurangabad district.',
  url: 'https://agrawalkhandelwal.com/ca-in-sillod',
  email: OFFICES.sillod.email,
  telephone: OFFICES.sillod.phone,
  foundingDate: '2023',
  founder: [
    { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
    { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#rupesh-khandelwal', name: 'CA Rupesh Khandelwal' },
  ],
  image: 'https://agrawalkhandelwal.com/logo.png',
  logo: 'https://agrawalkhandelwal.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: OFFICES.sillod.streetAddress,
    addressLocality: OFFICES.sillod.locality,
    addressRegion: OFFICES.sillod.region,
    postalCode: OFFICES.sillod.postalCode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: OFFICES.sillod.latitude,
    longitude: OFFICES.sillod.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '11:00',
      closes: '19:30',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Sillod' },
    { '@type': 'AdministrativeArea', name: 'Sillod Tehsil' },
    { '@type': 'City', name: 'Chhatrapati Sambhajinagar' },
    { '@type': 'AdministrativeArea', name: 'Chhatrapati Sambhajinagar District' },
    { '@type': 'City', name: 'Jalna' },
    { '@type': 'State', name: 'Maharashtra' },
  ],
  serviceType: [
    'NRI Taxation', 'Company Incorporation', 'LLP Registration',
    'Statutory Audit', 'Internal Audit', 'ROC Compliance',
  ],
  knowsAbout: [
    'NRI Taxation', 'Lower TDS Certificate', 'Company Incorporation',
    'LLP Registration', 'Statutory Audit', 'ROC Compliance',
  ],
  makesOffer: {
    '@type': 'OfferCatalog',
    name: 'Services in Sillod',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NRI Tax and Property Sale Advisory' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Company and LLP Incorporation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Statutory and Internal Audit' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ROC Compliance' } },
    ],
  },
  sameAs: ['https://www.linkedin.com/company/agrawal-khandelwal-associates-llp/'],
  parentOrganization: { '@id': 'https://agrawalkhandelwal.com/#organization' },
}

const sillodFaqLd = buildFaqLd(faqs)

const breadcrumbLd = buildBreadcrumbLd([
  { name: 'Home', item: 'https://agrawalkhandelwal.com' },
  { name: 'CA in Sillod', item: 'https://agrawalkhandelwal.com/ca-in-sillod' },
])

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
            <span>Sillod Office; Tilak Nagar, Sillod 431112</span>
          </div>
          <h1>Chartered Accountant <br />in Sillod</h1>
          <p>
            Agrawal Khandelwal & Associates LLP serves Sillod and the Chhatrapati Sambhajinagar (Aurangabad) district: NRI tax and property sales, company and LLP incorporation, ROC compliance and statutory audit.
          </p>
          <div className="hero-cta">
            <a href={bookingLink} className="btn btn-primary">
              Book a Consultation
            </a>
            <a href={`tel:${OFFICES.sillod.phone}`} className="btn btn-secondary">
              Call {OFFICES.sillod.phoneDisplay}
            </a>
            <a href={OFFICES.sillod.whatsapp} target="_blank" rel="noopener" className="btn btn-secondary">
              WhatsApp
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
              <span className="stat-number">3+</span>
              <span className="stat-label">Years of Practice</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Office Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Our Sillod Office</span>
            <h2 className="section-title">Services Available at Our Sillod Office</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              For NRIs with roots in the district, and for companies and LLPs in Sillod and Chhatrapati Sambhajinagar.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {services.map((s, i) => (
              <div key={i} className="card">
                <div style={{ marginBottom: '1.25rem', color: 'var(--primary)' }}><Icon name={s.icon} size={36} /></div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.875rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DEEP-DIVE */}
      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-badge">Core Services</span>
            <h2 className="section-title">Our Main Practice Areas in Sillod</h2>
          </div>
          <div className="blog-content" style={{ fontSize: '1.02rem', lineHeight: 1.85, color: 'var(--text-main)' }}>
            <h3>NRI Property Sales in Sillod and the Aurangabad District</h3>
            <p>Many families in Sillod and the district have members working abroad, with agricultural land, a plot or a house still in their name. When an NRI sells that property, the buyer has to deduct TDS on the sale, and the money can only go abroad after Form 145/146 and the bank&apos;s checks. We work out the capital gains before the sale, apply for a lower TDS certificate, file the NRI&apos;s return and handle the repatriation paperwork. Agricultural land has its own FEMA rules for NRIs; see our <Link href="/blog/nri-agricultural-land-india-fema-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide</Link>.</p>

            <h3>Company Incorporation and ROC Compliance</h3>
            <p>We register private limited companies, LLPs and one person companies for new ventures in Sillod and Chhatrapati Sambhajinagar, from name reservation and DSC/DIN to the Certificate of Incorporation, and then keep them compliant: INC-20A, the first board meeting, auditor appointment and the annual AOC-4 and MGT-7 filings.</p>

            <h3>Statutory and Internal Audit</h3>
            <p>CA Rupesh Khandelwal, who previously worked with Deloitte across the Automobiles, IT and Pharma sectors, leads statutory audits under the Companies Act and internal audits for companies in the district.</p>
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
                <Image src="/rupesh.jpg" alt="CA Rupesh Khandelwal; Chartered Accountant in Sillod" width={140} height={140} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>CA Rupesh Khandelwal</h3>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner; Sillod Office</p>
              <p style={{ fontSize: '0.93rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                CA Rupesh Khandelwal heads our Sillod office. With experience from leading firms including Deloitte, he leads the firm&apos;s statutory and internal audits and company compliance for clients in Sillod and the Chhatrapati Sambhajinagar district.
              </p>
              <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                <Link href="/about#rupesh-khandelwal" style={{ color: 'var(--primary)', fontWeight: 600 }}>Full bio &amp; credentials for CA Rupesh Khandelwal &rarr;</Link>
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'left', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <strong style={{ fontSize: '0.82rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Specialisations</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.75rem', fontSize: '0.87rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <li style={{ color: 'var(--text-light)' }}>✓ Statutory & Internal Audits</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ Business Consulting</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ ROC & Company Law Compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED READING */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-badge">Guides</span>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Related Reading from Our Sillod Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
            <Link href="/blog/company-name-reservation-run-form-india" className="card" style={{ display: 'block', color: 'var(--text-main)', textDecoration: 'none' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Company Name Reservation (SPICe+ / RUN)</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.88rem', margin: 0 }}>How to reserve your company name before incorporation.</p>
            </Link>
            <Link href="/blog/dsc-din-application-director-guide" className="card" style={{ display: 'block', color: 'var(--text-main)', textDecoration: 'none' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>DSC &amp; DIN Application Guide for Directors</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.88rem', margin: 0 }}>The two prerequisites every director needs before incorporation.</p>
            </Link>
            <Link href="/blog/nri-agricultural-land-india-fema-rules" className="card" style={{ display: 'block', color: 'var(--text-main)', textDecoration: 'none' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>NRIs and Agricultural Land</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.88rem', margin: 0 }}>What FEMA allows an NRI to hold, inherit and sell.</p>
            </Link>
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
                Monday – Saturday: 11:00 AM – 7:30 PM
              </p>
              <a href={`tel:${OFFICES.sillod.phone}`} style={{ display: 'block', color: 'var(--primary)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
                {OFFICES.sillod.phoneDisplay}
              </a>
              <a href="mailto:rupesh@agrawalkhandelwal.com" style={{ display: 'block', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                rupesh@agrawalkhandelwal.com
              </a>
            </div>
            <div className="card" style={{ background: 'var(--primary)', borderColor: 'var(--primary)' }}>
              <div style={{ marginBottom: '1.25rem', color: 'var(--white)' }}><Icon name="calendar" size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.875rem', color: 'var(--white)' }}>Book a Consultation</h3>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Discuss your NRI, incorporation or audit matter. Start with a free 15-minute intro call, or book 30 minutes of detailed advice. Calls are taken by CA Mehul Agrawal, and CA Rupesh Khandelwal handles your work at the Sillod office. The advice fee is adjusted against our fee if you engage us.
              </p>
              <a href={bookingLink} className="btn btn-secondary" style={{ width: '100%' }}>
                Book a Call
              </a>
              <a href="mailto:rupesh@agrawalkhandelwal.com" className="btn btn-secondary" style={{ width: '100%', marginTop: '0.75rem' }}>
                Email Us
              </a>
            </div>
          </div>

          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--primary)', marginTop: '3rem' }}>
            <iframe
              src="https://www.google.com/maps?q=20.3055,75.6518&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              title="Agrawal Khandelwal & Associates LLP; CA office at Tilak Nagar, Sillod"
            />
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Need advanced services like international taxation or startup advisory?
            </p>
            <p style={{ color: 'var(--text-main)', fontWeight: 600 }}>
              Our Nashik office handles those; <a href={`mailto:${OFFICES.nashik.email}`} style={{ color: 'var(--primary)' }}>{OFFICES.nashik.email}</a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="card">
                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{q}</h3>
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
            Agrawal Khandelwal & Associates LLP in Sillod: NRI tax and property sales, company incorporation, ROC compliance and audit.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={bookingLink} className="btn btn-primary">Book a Consultation</a>
            <Link href="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
