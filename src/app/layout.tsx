import '../styles/globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import GoogleAnalytics from './GoogleAnalytics'
import { Montserrat, Open_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '600', '700'],
  display: 'swap',
})

// ⚠️ Replace with your GA4 Measurement ID from analytics.google.com
// Steps: analytics.google.com → Admin → Create Property → Get Measurement ID (G-XXXXXXXXXX)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export const metadata: Metadata = {
  metadataBase: new URL('https://agrawalkhandelwal.com'),
  title: {
    default: 'Agrawal Khandelwal & Associates LLP | Chartered Accountants in Nashik',
    template: '%s | AK & Associates LLP',
  },
  description: 'Leading Chartered Accountants in Nashik & Sillod. Expert services in Tax Planning, International Taxation, GST Compliance, Audit & Assurance, and Virtual CFO. 100+ satisfied clients across India and UAE.',
  keywords: [
    'Chartered Accountants Nashik', 'CA firm Nashik', 'tax planning Nashik',
    'international taxation India', 'GST compliance', 'virtual CFO India',
    'tax audit Nashik', 'business incorporation', 'transfer pricing India',
    'CA services Maharashtra', 'FEMA RBI compliance', 'startup advisory India',
  ],
  authors: [{ name: 'Agrawal Khandelwal & Associates LLP' }],
  creator: 'Agrawal Khandelwal & Associates LLP',
  publisher: 'Agrawal Khandelwal & Associates LLP',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://agrawalkhandelwal.com',
    siteName: 'Agrawal Khandelwal & Associates LLP',
    title: 'Agrawal Khandelwal & Associates LLP | Chartered Accountants in Nashik',
    description: 'Leading CA firm in Nashik specializing in Tax Planning, International Taxation, Audit, and Virtual CFO services. Trusted by 100+ businesses across India & UAE.',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Agrawal Khandelwal & Associates LLP – Chartered Accountants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agrawal Khandelwal & Associates LLP | Chartered Accountants',
    description: 'Leading CA firm in Nashik. Expert Tax Planning, Audit, International Taxation, and Virtual CFO services.',
    images: ['/banner.png'],
  },
  alternates: {
    canonical: 'https://agrawalkhandelwal.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Agrawal Khandelwal & Associates LLP',
  description: 'Chartered Accountants offering Tax Planning, International Taxation, Audit & Assurance, and Virtual CFO services.',
  url: 'https://agrawalkhandelwal.com',
  logo: 'https://agrawalkhandelwal.com/logo.png',
  image: 'https://agrawalkhandelwal.com/banner.png',
  telephone: '+91-95275-33506',
  email: 'mehul@agrawalkhandelwal.com',
  foundingDate: '2019',
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
  priceRange: '₹₹',
  areaServed: ['Nashik', 'Sillod', 'Mumbai', 'Bangalore', 'Delhi', 'UAE'],
  serviceType: [
    'Tax Planning', 'International Taxation', 'Audit & Assurance',
    'Virtual CFO Services', 'Business Incorporation', 'GST Compliance',
    'Transfer Pricing', 'FEMA Compliance',
  ],
  hasMap: 'https://maps.google.com/?q=Ram+Plaza+Mumbai+Naka+Nashik',
}

const whatsappLink = "https://wa.me/919527533506?text=Hi,%20I'd%20like%20to%20book%20a%20consultation."

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
        <Navbar />
        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">

              <div>
                <div className="footer-logo">
                  <Image
                    src="/logo.png"
                    alt="Agrawal Khandelwal & Associates LLP"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: '#94a3b8', marginBottom: '1.5rem' }}>
                  Professional Chartered Accountant services specializing in Tax Planning, International Taxation, Audit, and Financial Consulting for businesses across India and UAE.
                </p>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '14px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ background: '#fff', padding: '4px', borderRadius: '4px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                      <Image src="/ca-logo.png" alt="ICAI" width={24} height={24} />
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#f1f5f9', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Certifications</span>
                  </div>
                  <ul style={{ fontSize: '0.82rem', color: '#94a3b8', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li>✓ Concurrent Audits of Bank</li>
                    <li>✓ UAE Corporate Taxation</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3>Services</h3>
                <Link href="/services">Tax Planning & Compliance</Link>
                <Link href="/services">International Taxation</Link>
                <Link href="/services">Audit & Assurance</Link>
                <Link href="/services">Virtual CFO Services</Link>
                <Link href="/startups">Startup Advisory</Link>
              </div>

              <div>
                <h3>Quick Links</h3>
                <Link href="/#about">About Us</Link>
                <Link href="/services">Our Services</Link>
                <Link href="/tools">Tax & Finance Tools</Link>
                <Link href="/blog">Client Insights</Link>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Book Consultation</a>
              </div>

              <div>
                <h3>Contact Us</h3>
                <div style={{ marginBottom: '1.25rem' }}>
                  <p style={{ fontSize: '0.85rem', color: '#f1f5f9', fontWeight: 600, marginBottom: '6px' }}>Nashik Office</p>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '5px', lineHeight: 1.5 }}>Shop No. 12 & 13, Ram Plaza, Mumbai Naka, Nashik – 422011</p>
                  <a href="tel:+919527533506" style={{ display: 'inline', marginRight: '8px' }}>+91 95275 33506</a>
                  <a href="mailto:mehul@agrawalkhandelwal.com">mehul@agrawalkhandelwal.com</a>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: '#f1f5f9', fontWeight: 600, marginBottom: '6px' }}>Sillod Office</p>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '5px', lineHeight: 1.5 }}>Near Datta Mandir, Tilak Nagar, Sillod – 431112</p>
                  <a href="tel:+919595585953" style={{ display: 'inline', marginRight: '8px' }}>+91 95955 85953</a>
                  <a href="mailto:rupesh@agrawalkhandelwal.com">rupesh@agrawalkhandelwal.com</a>
                </div>
              </div>

            </div>

            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Agrawal Khandelwal &amp; Associates LLP. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
