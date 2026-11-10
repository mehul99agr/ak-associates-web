import type { Metadata } from 'next'
import TrackedLink from '../TrackedLink'
import { BOOKING_LINK, OFFICES, OG_IMAGES } from '@/lib/constants'
import { buildBreadcrumbLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us | CA in Nashik & Sillod',
  description: 'Contact Agrawal Khandelwal & Associates LLP, CAs in Nashik & Sillod. Email us, book a consultation call, or visit either office.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/contact' },
  openGraph: {
    title: 'Contact Agrawal Khandelwal & Associates LLP | CA in Nashik & Sillod',
    description: 'Reach our Chartered Accountancy offices in Nashik and Sillod. Email us, book a consultation call, or visit either office.',
    url: 'https://agrawalkhandelwal.com/contact',
    images: OG_IMAGES,
  },
}

const bookingLink = BOOKING_LINK

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AccountingService',
      '@id': 'https://agrawalkhandelwal.com/#nashik-office',
      name: 'Agrawal Khandelwal & Associates LLP',
      url: 'https://agrawalkhandelwal.com/ca-in-nashik',
      email: OFFICES.nashik.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: OFFICES.nashik.streetAddress,
        addressLocality: OFFICES.nashik.locality,
        addressRegion: OFFICES.nashik.region,
        postalCode: OFFICES.nashik.postalCode,
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: OFFICES.nashik.latitude, longitude: OFFICES.nashik.longitude },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '18:00',
      }],
      priceRange: '₹₹',
      hasMap: 'https://maps.google.com/?cid=17018233718758486792',
      parentOrganization: { '@id': 'https://agrawalkhandelwal.com/#organization' },
    },
    {
      '@type': 'AccountingService',
      '@id': 'https://agrawalkhandelwal.com/#sillod-office',
      name: 'Agrawal Khandelwal & Associates LLP; Sillod',
      url: 'https://agrawalkhandelwal.com/ca-in-sillod',
      email: OFFICES.sillod.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: OFFICES.sillod.streetAddress,
        addressLocality: OFFICES.sillod.locality,
        addressRegion: OFFICES.sillod.region,
        postalCode: OFFICES.sillod.postalCode,
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: OFFICES.sillod.latitude, longitude: OFFICES.sillod.longitude },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '18:00',
      }],
      priceRange: '₹₹',
      parentOrganization: { '@id': 'https://agrawalkhandelwal.com/#organization' },
    },
  ],
}

const breadcrumbLd = buildBreadcrumbLd([
  { name: 'Home', item: 'https://agrawalkhandelwal.com' },
  { name: 'Contact', item: 'https://agrawalkhandelwal.com/contact' },
])

const offices = [
  {
    label: 'Nashik Office',
    partner: 'CA Mehul Agrawal',
    key: 'mehul',
    address: 'Shop No. 12 & 13, Ram Plaza, Mumbai Naka, Nashik – 422011, Maharashtra',
    email: 'mehul@agrawalkhandelwal.com',
  },
  {
    label: 'Sillod Office',
    partner: 'CA Rupesh Khandelwal',
    key: 'rupesh',
    address: 'Near Datta Mandir, Tilak Nagar, Sillod – 431112, Maharashtra',
    email: 'rupesh@agrawalkhandelwal.com',
  },
]

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }}>
              <span className="section-badge">Get In Touch</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Talk to a Chartered Accountant</h1>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>
                Email us free of charge and we reply within one business day. For a call with a partner, book a slot online; the booking fee is adjusted against our fee if you engage us.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <TrackedLink href={bookingLink} className="btn btn-primary" method="booking" location="contact_page_hero">Book a Consultation</TrackedLink>
                <TrackedLink href={`mailto:${OFFICES.nashik.email}`} className="btn btn-outline" method="email" location="contact_page_hero">Email Us</TrackedLink>
              </div>
            </div>

            {/* Offices */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem' }}>
              {offices.map((o) => (
                <div key={o.label} className="card">
                  <h2 style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>{o.label}</h2>
                  <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1.25rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>{o.partner}</p>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.25rem' }}>{o.address}</p>
                  <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>
                    <strong style={{ color: 'var(--text-main)' }}>Hours:</strong> Monday to Saturday, 10:00 AM to 6:00 PM
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
                    <TrackedLink href={`/consult?partner=${o.key}`} className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '0.7rem 1.1rem' }} method="booking" location={`contact_page_${o.label.toLowerCase().replace(' ', '_')}`}>Book a Call</TrackedLink>
                    <TrackedLink href={`mailto:${o.email}`} className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '0.7rem 1.1rem' }} method="email" location={`contact_page_${o.label.toLowerCase().replace(' ', '_')}`}>Email</TrackedLink>
                  </div>
                  <p style={{ marginTop: '1.25rem', fontSize: '0.85rem' }}>
                    <TrackedLink href={`mailto:${o.email}`} style={{ color: 'var(--primary)', fontWeight: 600 }} method="email" location={`contact_page_${o.label.toLowerCase().replace(' ', '_')}`}>{o.email}</TrackedLink>
                  </p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div style={{ marginTop: '3rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--primary)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.034561772485!2d73.7879464!3d19.1947607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb199f0a712f%3A0x2bb8a26b71bd9b72!2sRam%20Plaza%2C%20Mumbai%20Naka%2C%20Nashik%2C%20Maharashtra%20422011!5e0!3m2!1sen!2sin!4v1717777777777"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                title="Agrawal Khandelwal & Associates LLP; Nashik office location"
              />
            </div>

            <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Agrawal Khandelwal &amp; Associates LLP · Chartered Accountants · ICAI Firm Reg. No. W101119
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
