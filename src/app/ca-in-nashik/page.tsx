import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../Icon'
import { BOOKING_LINK, OFFICES, OG_IMAGES } from '@/lib/constants'
import { buildBreadcrumbLd, buildFaqLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'NRI & International Tax CA in Nashik',
  description: 'Chartered Accountants in Nashik (Mumbai Naka) for NRIs and cross-border businesses: NRI tax and property sales, transfer pricing, DTAA, FEMA, UAE and US entities, and company incorporation.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/ca-in-nashik' },
  openGraph: {
    title: 'NRI & International Tax CA in Nashik | Agrawal Khandelwal & Associates LLP',
    description: 'NRI tax, transfer pricing, DTAA, FEMA and company incorporation from our office at Ram Plaza, Bhabha Nagar, Mumbai Naka, Nashik.',
    url: 'https://agrawalkhandelwal.com/ca-in-nashik',
    images: OG_IMAGES,
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nashik, Maharashtra, India',
    'geo.position': '19.9877793;73.7898192',
    'ICBM': '19.9877793, 73.7898192',
  },
}

const bookingLink = `${BOOKING_LINK}?partner=mehul`

const services = [
  {
    icon: 'globe',
    title: 'NRI Tax & Property Sales',
    desc: 'For NRIs with property, family or income in Nashik: ITR filing, capital gains on a property sale, lower TDS certificates and Form 145/146 to move the money abroad.',
  },
  {
    icon: 'analytics',
    title: 'Transfer Pricing',
    desc: 'Benchmarking, Local File and Form 3CEB for Nashik companies that buy from, sell to or borrow from related parties abroad.',
  },
  {
    icon: 'scale',
    title: 'International Tax & DTAA',
    desc: 'Treaty positions, foreign tax credit, POEM and cross-border structuring for Nashik exporters, manufacturers and service companies with overseas customers or entities.',
  },
  {
    icon: 'landmark',
    title: 'FEMA, ODI & FDI',
    desc: 'Overseas subsidiaries (ODI), foreign investment into Nashik companies (FDI, FC-GPR) and RBI reporting.',
  },
  {
    icon: 'building',
    title: 'Company & LLP Incorporation',
    desc: 'Private limited company, LLP and OPC registration, including Indian subsidiaries of foreign companies, and the ROC filings that follow.',
  },
  {
    icon: 'briefcase',
    title: 'UAE & US Entities',
    desc: 'UAE Corporate Tax and Free Zone structuring, and US LLC / C-Corp compliance for Nashik founders selling abroad.',
  },
]

const faqs = [
  {
    q: 'Is there a CA in Nashik who specialises in NRI taxation?',
    a: 'Yes. Our Nashik office, led by CA Mehul Agrawal, works mainly with NRIs and cross-border businesses: NRI income tax returns, property sales (capital gains, lower TDS certificate, Form 145/146 repatriation), DTAA relief and NRE/NRO questions. Most NRI clients work with us remotely, with evening slots for US, UK and Gulf time zones.',
  },
  {
    q: 'Can you help an NRI sell property in Nashik?',
    a: 'Yes. We work out the capital gains before you sign, apply for a lower TDS certificate (Form 128, earlier Form 13) so the buyer deducts TDS on the actual tax rather than the full rate, file your return, and prepare Form 145/146 (earlier 15CA/15CB) so the proceeds can be sent abroad.',
  },
  {
    q: 'Do you handle transfer pricing for Nashik companies?',
    a: 'Yes. If a Nashik company has transactions with an associated enterprise abroad (sales, purchases, loans, royalties or services), it needs a Form 3CEB report by October 31 and, above Rs 1 crore of international transactions, transfer pricing documentation. We prepare the benchmarking study, documentation and Form 3CEB.',
  },
  {
    q: 'Where is your CA office in Nashik?',
    a: 'Our Nashik office is at Shop No. 12&13, Ram Plaza, Bhabha Nagar, Mumbai Naka, Nashik 422011, Maharashtra. We are open Monday to Saturday, 11 AM to 7:30 PM.',
  },
  {
    q: 'Can you help with company registration in Nashik?',
    a: 'Yes. We handle company and LLP incorporation in Nashik end to end, from name reservation and DSC/DIN to MOA/AOA drafting and the Certificate of Incorporation, and set up the ROC compliance that follows. We also register Indian subsidiaries of foreign companies.',
  },
  {
    q: 'Do you handle GST or income tax filing for local businesses in Nashik?',
    a: 'No. Our practice focuses on NRI taxation, transfer pricing, international tax and company incorporation and compliance. For GST and routine domestic income tax filing we suggest a local practitioner, and we work alongside them on the international side.',
  },
]

const nashikLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': ['AccountingService', 'LocalBusiness', 'ProfessionalService'],
  '@id': 'https://agrawalkhandelwal.com/#nashik-office',
  name: 'Agrawal Khandelwal & Associates LLP',
  alternateName: ['Agrawal Khandelwal & Associates LLP Nashik', 'Agrawal Khandelwal & Associates LLP CA Nashik'],
  description: 'Chartered Accountant firm in Nashik at Mumbai Naka for NRIs and cross-border businesses: NRI taxation and property sales, transfer pricing and Form 3CEB, DTAA, FEMA, UAE corporate tax, and company and LLP incorporation.',
  url: 'https://agrawalkhandelwal.com/ca-in-nashik',
  email: OFFICES.nashik.email,
  telephone: OFFICES.nashik.phone,
  foundingDate: '2023',
  founder: [
    { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
    { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#rupesh-khandelwal', name: 'CA Rupesh Khandelwal' },
  ],
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Bank Transfer, Cheque',
  image: 'https://agrawalkhandelwal.com/logo.png',
  logo: 'https://agrawalkhandelwal.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: OFFICES.nashik.streetAddress,
    addressLocality: OFFICES.nashik.locality,
    addressRegion: OFFICES.nashik.region,
    postalCode: OFFICES.nashik.postalCode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: OFFICES.nashik.latitude,
    longitude: OFFICES.nashik.longitude,
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
    { '@type': 'City', name: 'Nashik' },
    { '@type': 'AdministrativeArea', name: 'Nashik District' },
    { '@type': 'State', name: 'Maharashtra' },
  ],
  serviceType: [
    'NRI Taxation', 'Transfer Pricing', 'International Taxation', 'DTAA Advisory',
    'FEMA Compliance', 'UAE Corporate Tax Advisory', 'Company Incorporation', 'LLP Registration',
  ],
  knowsAbout: [
    'NRI Taxation', 'Lower TDS Certificate', 'Transfer Pricing', 'Form 3CEB',
    'DTAA Advisory', 'FEMA Compliance', 'UAE Corporate Tax', 'Company Incorporation',
  ],
  makesOffer: {
    '@type': 'OfferCatalog',
    name: 'NRI & International Tax Services in Nashik',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NRI Tax and Property Sale Advisory' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transfer Pricing and Form 3CEB' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Taxation and FEMA Advisory' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Company and LLP Incorporation' } },
    ],
  },
  hasMap: 'https://maps.google.com/?cid=15026601649790613456',
  sameAs: ['https://www.linkedin.com/company/agrawal-khandelwal-associates-llp/'],
  parentOrganization: { '@id': 'https://agrawalkhandelwal.com/#organization' },
}

const nashikFaqLd = buildFaqLd(faqs)

const breadcrumbLd = buildBreadcrumbLd([
  { name: 'Home', item: 'https://agrawalkhandelwal.com' },
  { name: 'CA in Nashik', item: 'https://agrawalkhandelwal.com/ca-in-nashik' },
])

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
            <span>Nashik Office; Mumbai Naka, Nashik 422011</span>
          </div>
          <h1>NRI &amp; International Tax CA <br />in Nashik</h1>
          <p>
            Agrawal Khandelwal & Associates LLP advises NRIs and cross-border businesses from Nashik: NRI tax and property sales, transfer pricing, DTAA, FEMA, and company incorporation. Located at Mumbai Naka, Nashik; open Monday to Saturday.
          </p>
          <div className="hero-cta">
            <a href={bookingLink} className="btn btn-primary">
              Book a Consultation
            </a>
            <a href={`tel:${OFFICES.nashik.phone}`} className="btn btn-secondary">
              Call {OFFICES.nashik.phoneDisplay}
            </a>
            <a href={OFFICES.nashik.whatsapp} target="_blank" rel="noopener" className="btn btn-secondary">
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
              <span className="stat-label">Clients Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years in Nashik</span>
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
            <span className="section-badge">Our Practice in Nashik</span>
            <h2 className="section-title">What We Offer in Nashik</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              A focused practice for NRIs and businesses with cross-border transactions, plus the incorporation and company compliance that goes with it.
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
            <h2 className="section-title">Our Main Practice Areas in Nashik</h2>
          </div>
          <div className="blog-content" style={{ fontSize: '1.02rem', lineHeight: 1.85, color: 'var(--text-main)' }}>
            <h3>NRI Tax Advisory in Nashik</h3>
            <p>Many Nashik families have a son or daughter working in the US, the UK, the Gulf, Canada or Australia, with a flat or land still in Nashik. Selling that property, earning rent on it or receiving money from it brings Indian tax and FEMA rules into play. We file the NRI&apos;s Indian return, work out capital gains before the sale, apply for a lower TDS certificate so the buyer does not deduct tax on the full sale value, claim DTAA relief and TDS refunds, and prepare Form 145/146 so the money can be repatriated. See our <Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI tax advisory</Link> page.</p>

            <h3>Transfer Pricing for Nashik Companies</h3>
            <p>Nashik&apos;s manufacturers, auto-component suppliers, wineries and IT companies increasingly deal with group companies abroad. Any international transaction with an associated enterprise needs a Form 3CEB report, due October 31, and transactions above Rs 1 crore need contemporaneous documentation. We prepare the benchmarking study, the Local File and Form 3CEB, and support the company through transfer pricing assessments. See our <Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>transfer pricing</Link> page.</p>

            <h3>Company Incorporation in Nashik</h3>
            <p>We register private limited companies, LLPs and one person companies end to end: name reservation through SPICe+ Part A, digital signature certificates and DIN for directors, MOA and AOA drafting, and the SPICe+ Part B filing that issues the Certificate of Incorporation with PAN and TAN. We also set up Indian subsidiaries of foreign companies, with the FDI reporting that goes with them, and handle post-incorporation compliance: INC-20A, the first board meeting and annual ROC filings (AOC-4, MGT-7).</p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">How We Work</span>
            <h2 className="section-title">Why NRIs and Cross-Border Businesses Work With Us</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {[
              { icon: 'check', title: 'ICAI-Registered Partners', desc: 'Every partner is a qualified Chartered Accountant registered with the Institute of Chartered Accountants of India. CA Mehul Agrawal also holds a UAE Corporate Taxation certification.' },
              { icon: 'users', title: 'Direct Partner Access', desc: 'You speak with the partner handling your file, not a rotating junior team.' },
              { icon: 'globe', title: 'Built for Cross-Border Work', desc: 'Transfer pricing, DTAA, FEMA, NRI property sales, UAE and US entities are our core work, not an add-on.' },
              { icon: 'phone', title: 'Works Across Time Zones', desc: 'Evening IST call slots for clients in the US, UK and Gulf. Documents by email or WhatsApp, calls over Google Meet.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <div style={{ marginBottom: '1rem', color: 'var(--primary)' }}><Icon name={item.icon} size={32} /></div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Your Nashik CA</span>
            <h2 className="section-title">Meet the Partner at Our Nashik Office</h2>
          </div>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '140px', height: '140px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)', flexShrink: 0 }}>
                <Image src="/mehul.jpg" alt="CA Mehul Agrawal; Chartered Accountant in Nashik" width={140} height={140} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>CA Mehul Agrawal</h3>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner; Nashik Office</p>
              <p style={{ fontSize: '0.93rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                Based in Nashik, CA Mehul Agrawal specialises in international taxation, transfer pricing, and corporate structuring. He advises NRIs, Nashik-based companies and founders on cross-border tax and FEMA compliance.
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

      {/* RELATED READING */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-badge">Guides</span>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Related Reading from Our Nashik Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
            <Link href="/blog/form-3ceb-transfer-pricing-audit-report" className="card" style={{ display: 'block', color: 'var(--text-main)', textDecoration: 'none' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Form 3CEB &amp; Transfer Pricing Audit Report</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.88rem', margin: 0 }}>Applicability, due dates, and what the audit covers.</p>
            </Link>
            <Link href="/blog/tds-on-nri-property-sale-india" className="card" style={{ display: 'block', color: 'var(--text-main)', textDecoration: 'none' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>TDS on NRI Property Sale</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.88rem', margin: 0 }}>Rates, the lower TDS certificate and getting a refund.</p>
            </Link>
            <Link href="/blog/nri-repatriation-property-sale-proceeds" className="card" style={{ display: 'block', color: 'var(--text-main)', textDecoration: 'none' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Repatriating Property Sale Proceeds</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.88rem', margin: 0 }}>The USD 1 million limit, Form 145/146 and bank documents.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* OFFICE & CONTACT */}
      <section className="section" id="contact">
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
                Shop No. 12&13, Ram Plaza, Bhabha Nagar,<br />
                Mumbai Naka, Nashik – 422011,<br />
                Maharashtra, India
              </p>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-main)' }}>Hours:</strong><br />
                Monday – Saturday: 11:00 AM – 7:30 PM
              </p>
              <a href={`tel:${OFFICES.nashik.phone}`} style={{ display: 'block', color: 'var(--primary)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
                {OFFICES.nashik.phoneDisplay}
              </a>
              <a href="mailto:mehul@agrawalkhandelwal.com" style={{ display: 'block', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                mehul@agrawalkhandelwal.com
              </a>
            </div>
            <div className="card" style={{ background: 'var(--primary)', borderColor: 'var(--primary)' }}>
              <div style={{ marginBottom: '1.25rem', color: 'var(--white)' }}><Icon name="calendar" size={32} /></div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.875rem', color: 'var(--white)' }}>Book a Consultation</h3>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Talk directly with CA Mehul Agrawal about your NRI, transfer pricing or cross-border matter. Start with a free 15-minute intro call, or book 30 minutes of detailed advice. The advice fee is adjusted against our fee if you engage us.
              </p>
              <a href={bookingLink} className="btn btn-secondary" style={{ width: '100%' }}>
                Book a Call
              </a>
              <a href="mailto:mehul@agrawalkhandelwal.com" className="btn btn-secondary" style={{ width: '100%', marginTop: '0.75rem' }}>
                Email Us
              </a>
            </div>
          </div>

          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--primary)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.034561772485!2d73.7898192!3d19.9877793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb72f06cdfe9%3A0xd08936960d1177d0!2sAgrawal%20Khandelwal%20%26%20Associates%20LLP!5e0!3m2!1sen!2sin!4v1717777777777"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              title="Agrawal Khandelwal & Associates LLP; CA office at Mumbai Naka, Nashik"
            />
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
          <h2 className="section-title">NRI or Cross-Border Question in Nashik?</h2>
          <p style={{ maxWidth: '580px', margin: '0 auto 2.5rem', color: 'var(--text-light)', fontSize: '1.05rem' }}>
            Contact Agrawal Khandelwal & Associates LLP for NRI tax, transfer pricing, international tax and company incorporation.
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
