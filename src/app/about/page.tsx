import type { Metadata } from 'next'
import Image from 'next/image'
import TrackedLink from '../TrackedLink'
import { BOOKING_LINK } from '@/lib/constants'
import { buildBreadcrumbLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Our Partners',
  description: 'Meet CA Mehul Agrawal and CA Rupesh Khandelwal, Partners at Agrawal Khandelwal & Associates LLP, an ICAI-registered CA firm serving Nashik and Sillod, Maharashtra.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/about' },
  openGraph: {
    title: 'About Our Partners | Agrawal Khandelwal & Associates LLP',
    description: 'Meet CA Mehul Agrawal and CA Rupesh Khandelwal, Partners at Agrawal Khandelwal & Associates LLP, an ICAI-registered CA firm serving Nashik and Sillod, Maharashtra.',
    url: 'https://agrawalkhandelwal.com/about',
  },
}

const bookingLink = BOOKING_LINK

const breadcrumbLd = buildBreadcrumbLd([
  { name: 'Home', item: 'https://agrawalkhandelwal.com' },
  { name: 'About', item: 'https://agrawalkhandelwal.com/about' },
])

const peopleLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal',
      name: 'CA Mehul Agrawal',
      jobTitle: 'Partner',
      description: 'Chartered Accountant specializing in International Taxation, Transfer Pricing, and Corporate Structuring, advising multinational companies on cross-border transactions. UAE Corporate Taxation certified.',
      worksFor: { '@id': 'https://agrawalkhandelwal.com/#organization' },
      url: 'https://agrawalkhandelwal.com/about#mehul-agrawal',
      image: 'https://agrawalkhandelwal.com/mehul.jpg',
      email: 'mehul@agrawalkhandelwal.com',
      telephone: '+91-95275-33506',
      sameAs: ['https://www.linkedin.com/in/mehulagrawal99/'],
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
        telephone: '+91-95275-33506',
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
      description: 'Chartered Accountant specializing in domestic tax planning, statutory and internal audits, and business consulting, with prior experience at Deloitte across the Automobiles, IT, and Pharma sectors.',
      worksFor: { '@id': 'https://agrawalkhandelwal.com/#organization' },
      url: 'https://agrawalkhandelwal.com/about#rupesh-khandelwal',
      image: 'https://agrawalkhandelwal.com/rupesh.jpg',
      email: 'rupesh@agrawalkhandelwal.com',
      telephone: '+91-95955-85953',
      sameAs: ['https://www.linkedin.com/in/rupeshkhandelwal/'],
      alumniOf: { '@type': 'Organization', name: 'Deloitte' },
      knowsAbout: [
        'Domestic Tax Planning', 'Statutory Audit', 'Internal Audit',
        'Tax Compliance', 'Business Consulting',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Chartered Accountant (ICAI)', identifier: '614213' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-95955-85953',
        email: 'rupesh@agrawalkhandelwal.com',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
    },
  ],
}

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleLd) }} />

      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge">
            <span>⭐</span>
            <span>ICAI-Registered Chartered Accountants</span>
          </div>
          <h1>Meet the partners behind<br />Agrawal Khandelwal & Associates LLP.</h1>
          <p>
            Founded in 2023 with offices in Nashik and Sillod, we advise startups, MNCs, and NRI/UAE clients on
            international tax, transfer pricing, audit, and virtual CFO services. ICAI Firm Registration No. W101119.
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Our Team</span>
            <h2 className="section-title">Leading Professionals</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-light)', fontSize: '1.05rem' }}>
              Two partners, two offices, one standard of service across taxation, audit, and financial consulting.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '3rem' }}>
            <div id="mehul-agrawal" className="card" style={{ textAlign: 'center', scrollMarginTop: '120px' }}>
              <div style={{ width: '160px', height: '160px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)', flexShrink: 0 }}>
                <Image src="/mehul.jpg" alt="CA Mehul Agrawal" width={160} height={160} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>CA Mehul Agrawal</h2>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '0.4rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner, Nashik Office</p>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600, marginBottom: '1.25rem', fontSize: '0.8rem' }}>ICAI Membership No. 614225</p>
              <p style={{ fontSize: '0.95rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                Mehul is a Chartered Accountant specializing in International Taxation, Transfer Pricing, and Corporate
                Structuring. He advises multinational companies on cross-border transactions and helps them optimize
                tax strategies while maintaining strict regulatory compliance. He holds a UAE Corporate Taxation
                certification and advises Indian businesses with UAE operations on 9% CT compliance, India-UAE DTAA
                benefits, and Free Zone entity structuring.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'left', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <strong style={{ fontSize: '0.82rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Specializations & Certifications</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.75rem', fontSize: '0.87rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li style={{ color: 'var(--text-light)' }}>✓ International Tax Planning</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ Transfer Pricing Documentation</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ FEMA & RBI Compliance</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ M&A Advisory</li>
                  <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 Concurrent Audits of Bank</li>
                  <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 UAE Corporate Taxation Certified</li>
                </ul>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.75rem', justifyContent: 'center' }}>
                <TrackedLink href="tel:+919527533506" className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '0.7rem 1.1rem' }} method="call" location="about_page_mehul">Call</TrackedLink>
                <TrackedLink href="https://wa.me/919527533506?text=Hi,%20I%27d%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '0.7rem 1.1rem' }} method="whatsapp" location="about_page_mehul">WhatsApp</TrackedLink>
                <TrackedLink href="mailto:mehul@agrawalkhandelwal.com" className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '0.7rem 1.1rem' }} method="email" location="about_page_mehul">Email</TrackedLink>
              </div>
            </div>

            <div id="rupesh-khandelwal" className="card" style={{ textAlign: 'center', scrollMarginTop: '120px' }}>
              <div style={{ width: '160px', height: '160px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)', flexShrink: 0 }}>
                <Image src="/rupesh.jpg" alt="CA Rupesh Khandelwal" width={160} height={160} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>CA Rupesh Khandelwal</h2>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '0.4rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner, Sillod Office</p>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600, marginBottom: '1.25rem', fontSize: '0.8rem' }}>ICAI Membership No. 614213</p>
              <p style={{ fontSize: '0.95rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                Rupesh brings valuable insights from leading firms, including Deloitte, across the Automobiles, IT,
                and Pharma sectors. His expertise spans domestic tax planning, statutory and internal audits, and
                business consulting, with a strong track record representing clients before tax authorities.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'left', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <strong style={{ fontSize: '0.82rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Specializations</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.75rem', fontSize: '0.87rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li style={{ color: 'var(--text-light)' }}>✓ Domestic Tax Planning</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ Statutory & Internal Audits</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ Business Consulting</li>
                  <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 Prior Experience at Deloitte</li>
                </ul>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.75rem', justifyContent: 'center' }}>
                <TrackedLink href="tel:+919595585953" className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '0.7rem 1.1rem' }} method="call" location="about_page_rupesh">Call</TrackedLink>
                <TrackedLink href="https://wa.me/919595585953?text=Hi,%20I%27d%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '0.7rem 1.1rem' }} method="whatsapp" location="about_page_rupesh">WhatsApp</TrackedLink>
                <TrackedLink href="mailto:rupesh@agrawalkhandelwal.com" className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '0.7rem 1.1rem' }} method="email" location="about_page_rupesh">Email</TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Have a question for one of our partners?</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 2rem', color: 'var(--text-light)' }}>
            Book a free 30-minute consultation or reach out directly, we respond within one business day.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <TrackedLink href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" method="booking" location="about_page_cta">Book Free Consultation</TrackedLink>
          </div>
        </div>
      </section>
    </>
  )
}
