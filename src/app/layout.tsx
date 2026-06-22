import '../styles/globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import FloatingContact from './FloatingContact'
import GoogleAnalytics from './GoogleAnalytics'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Montserrat, Open_Sans, Cormorant_Garamond } from 'next/font/google'


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

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['500', '600', '700'],
  display: 'swap',
})

const GA_MEASUREMENT_ID = 'G-41NNQG654M'

export const metadata: Metadata = {
  metadataBase: new URL('https://agrawalkhandelwal.com'),
  title: {
    default: 'CA in Nashik & Sillod | Agrawal Khandelwal & Associates LLP',
    template: '%s | Agrawal Khandelwal & Associates LLP',
  },
  description: 'Trusted Chartered Accountants in Nashik and Sillod, Maharashtra. Agrawal Khandelwal & Associates LLP offers GST filing, income tax, company incorporation, audit, international taxation, and virtual CFO services. Call +91 95275 33506.',
  keywords: [
    // Nashik: primary office location
    'CA in Nashik', 'chartered accountant in Nashik', 'best CA in Nashik',
    'CA firm Nashik', 'chartered accountant Nashik', 'top CA Nashik',
    'GST consultant Nashik', 'income tax consultant Nashik',
    'tax consultant Nashik', 'audit firm Nashik',
    'company registration Nashik', 'GST filing Nashik',
    'ITR filing Nashik', 'tax planning Nashik',
    'CA near Nashik', 'accountant Nashik',
    // Sillod
    'CA in Sillod', 'chartered accountant Sillod', 'CA Sillod',
    'GST consultant Sillod', 'income tax consultant Sillod',
    'CA near Sillod', 'accountant Sillod', 'CA Sillod Aurangabad',
    'tax consultant Sillod', 'GST filing Sillod',
    // Maharashtra broader
    'CA in Maharashtra', 'chartered accountant Maharashtra',
    // Bangalore: startup market
    'CA for startups Bangalore', 'chartered accountant Bangalore',
    'startup advisory Bangalore', 'company incorporation Bangalore',
    'DPIIT registration Bangalore', 'virtual CFO Bangalore',
    // Mumbai / MNC
    'international tax consultant Mumbai', 'transfer pricing consultant India',
    'DTAA consultant India', 'FEMA consultant Mumbai',
    // NRI
    'NRI tax consultant India', 'NRI taxation services India',
    // UAE
    'UAE corporate tax consultant India', 'India UAE DTAA',
    // General
    'virtual CFO India', 'outsourced accounting India',
    'international taxation India', 'GST compliance India',
  ],
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nashik, Maharashtra, India',
    'geo.position': '19.1947607;73.7879464',
    'ICBM': '19.1947607, 73.7879464',
  },
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
    title: 'CA in Nashik | International Tax, GST & Audit | Agrawal Khandelwal & Associates LLP',
    description: 'Chartered Accountants in Nashik & Sillod, Maharashtra. GST, income tax, audit, company incorporation, international tax, and virtual CFO services. 100+ clients across India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CA in Nashik | Agrawal Khandelwal & Associates LLP',
    description: 'Chartered Accountants in Nashik & Sillod. GST, income tax, audit, international tax, and startup advisory. Call +91 95275 33506.',
  },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  '@id': 'https://agrawalkhandelwal.com/#organization',
  name: 'Agrawal Khandelwal & Associates LLP',
  description: 'Chartered Accountants in Nashik and Sillod, Maharashtra. Specializing in GST, income tax, company incorporation, audit, international taxation, transfer pricing, UAE corporate tax, startup advisory, and virtual CFO services.',
  url: 'https://agrawalkhandelwal.com',
  logo: 'https://agrawalkhandelwal.com/logo.png',
  telephone: '+91-95275-33506',
  email: 'mehul@agrawalkhandelwal.com',
  foundingDate: '2023',
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
  areaServed: [
    { '@type': 'City', name: 'Nashik' },
    { '@type': 'City', name: 'Sillod' },
    { '@type': 'City', name: 'Chhatrapati Sambhajinagar' },
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'India' },
  ],
  serviceType: [
    'GST Registration', 'GST Return Filing', 'Income Tax Return Filing',
    'Tax Planning', 'Statutory Audit', 'Tax Audit', 'Internal Audit',
    'Company Incorporation', 'LLP Registration', 'DPIIT Registration',
    'International Taxation', 'Transfer Pricing', 'DTAA Advisory',
    'FEMA Compliance', 'UAE Corporate Tax Advisory', 'NRI Taxation',
    'Startup Advisory', 'Virtual CFO Services', 'ESOP Structuring',
    'FDI Compliance', 'Offshore Accounting',
  ],
  knowsAbout: [
    'GST Compliance', 'Income Tax', 'Statutory Audit', 'Company Incorporation',
    'International Taxation', 'Transfer Pricing', 'DTAA', 'FEMA Compliance',
    'UAE Corporate Tax', 'NRI Taxation', 'Startup Advisory', 'Virtual CFO Services',
    'Offshore Accounting',
  ],
  founder: [
    { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
    { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#rupesh-khandelwal', name: 'CA Rupesh Khandelwal' },
  ],
  sameAs: [
    'https://www.linkedin.com/company/agrawal-khandelwal-associates-llp/',
    'https://www.justdial.com/Nashik/Agrawal-Khandelwal-Associates-LLP-Opposite-Radiant-Hospital-Mumbai-Naka-Bhagwant-Nagar-Bhabha-Nagar/0253PX253-X253-240221190351-A8F7_BZDET',
    'https://www.sulekha.com/agrawal-khandelwal-and-associates-llp-mumbai-naka-nashik-contact-address',
    'https://maps.google.com/?cid=17018233718758486792',
  ],
  hasMap: 'https://maps.google.com/?cid=17018233718758486792',
  location: [
    {
      '@type': 'Place',
      name: 'Nashik Office',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No. 12 & 13, Ram Plaza, Mumbai Naka',
        addressLocality: 'Nashik',
        addressRegion: 'Maharashtra',
        postalCode: '422011',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '19.1947607', longitude: '73.7879464' },
      telephone: '+91-95275-33506',
    },
    {
      '@type': 'Place',
      name: 'Sillod Office',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Near Datta Mandir, Tilak Nagar',
        addressLocality: 'Sillod',
        addressRegion: 'Maharashtra',
        postalCode: '431112',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '20.1040', longitude: '75.6496' },
      telephone: '+91-95955-85953',
    },
  ],
}

const bookingLink = "https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7"
const whatsappLink = "https://wa.me/919527533506?text=Hi,%20I'd%20like%20to%20book%20a%20consultation."

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </head>
      <body>
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
        <SpeedInsights />
        <Navbar />
        <main>{children}</main>
        <FloatingContact />

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
                <Link href="/ca-in-nashik">Tax Planning & Compliance</Link>
                <Link href="/transfer-pricing">International Taxation</Link>
                <Link href="/ca-in-nashik">Audit & Assurance</Link>
                <Link href="/startups">Virtual CFO Services</Link>
                <Link href="/startups">Startup Advisory</Link>
              </div>

              <div>
                <h3>Quick Links</h3>
                <Link href="/#about">About Us</Link>
                <Link href="/services">Our Services</Link>
                <Link href="/ca-in-nashik">CA in Nashik</Link>
                <Link href="/ca-in-sillod">CA in Sillod</Link>
                <Link href="/tools">Tax & Finance Tools</Link>
                <Link href="/blog">Client Insights</Link>
                <Link href="/contact">Contact Us</Link>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer">Book Consultation</a>
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
              <p style={{ marginTop: '0.4rem', fontSize: '0.8rem', color: '#475569' }}>Chartered Accountants · ICAI Firm Reg. No. W101119</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
