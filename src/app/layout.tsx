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
    default: 'CA for Startups & International Tax | Bangalore, Mumbai | AK & Associates LLP',
    template: '%s | AK & Associates LLP',
  },
  description: 'Trusted Chartered Accountants in Bangalore, Mumbai & Nashik. Experts in International Taxation, Transfer Pricing, DTAA, FEMA, UAE Corporate Tax, Startup Advisory, Virtual CFO, and Offshore Accounting. 100+ clients across India & UAE.',
  keywords: [
    // Bangalore — primary market
    'CA for startups Bangalore', 'chartered accountant Bangalore',
    'startup advisory Bangalore', 'company incorporation Bangalore',
    'DPIIT registration Bangalore', 'virtual CFO Bangalore',
    'startup accountant Bangalore', 'CA firm Bangalore',
    // Mumbai / MNC
    'international tax consultant Mumbai', 'transfer pricing consultant India',
    'MNC tax advisory India', 'DTAA consultant India',
    'FEMA consultant Mumbai', 'chartered accountant Mumbai',
    // NRI
    'NRI tax consultant India', 'NRI taxation services India',
    'NRI income tax filing India', 'DTAA NRI India',
    // UAE
    'UAE corporate tax consultant India', 'India UAE DTAA',
    'UAE CT consultant', 'offshore accounting India',
    // General
    'CA firm Nashik', 'chartered accountant Nashik',
    'virtual CFO India', 'outsourced accounting India',
    'international taxation India', 'GST compliance India',
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
    title: 'CA for Startups & International Tax | Bangalore, Mumbai | AK & Associates LLP',
    description: 'Trusted CA firm serving startups in Bangalore, MNCs in Mumbai, and NRI/UAE clients globally. Experts in International Tax, Transfer Pricing, DTAA, FEMA, and UAE Corporate Tax.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CA for Startups & International Tax | AK & Associates LLP',
    description: 'Trusted CA firm for startups in Bangalore, MNCs in Mumbai, NRIs & UAE clients. International Tax, Transfer Pricing, DTAA, FEMA, Virtual CFO.',
  },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  '@id': 'https://agrawalkhandelwal.com/#organization',
  name: 'Agrawal Khandelwal & Associates LLP',
  description: 'Chartered Accountants specializing in International Taxation, Transfer Pricing, DTAA, FEMA, UAE Corporate Tax, Startup Advisory, Virtual CFO, and Offshore Accounting. Serving startups in Bangalore, MNCs in Mumbai, and NRI/UAE clients globally.',
  url: 'https://agrawalkhandelwal.com',
  logo: 'https://agrawalkhandelwal.com/logo.png',
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
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Nashik' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'India' },
  ],
  serviceType: [
    'International Taxation', 'Transfer Pricing', 'DTAA Advisory',
    'FEMA Compliance', 'UAE Corporate Tax Advisory', 'NRI Taxation',
    'Startup Advisory', 'Company Incorporation', 'DPIIT Registration',
    'Virtual CFO Services', 'ESOP Structuring', 'FDI Compliance',
    'Statutory Audit', 'Tax Audit', 'Internal Audit',
    'GST Compliance', 'Tax Planning', 'Offshore Accounting',
  ],
  sameAs: [
    'https://www.linkedin.com/company/agrawal-khandelwal-associates-llp/',
  ],
  hasMap: 'https://maps.google.com/?q=Ram+Plaza+Mumbai+Naka+Nashik',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you provide CA services for startups in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We specialize in end-to-end startup advisory in Bangalore — from company incorporation and DPIIT registration to ESOP structuring, Virtual CFO services, and investor-ready financial reporting for fundraising rounds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with Transfer Pricing and International Taxation for MNCs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We provide Transfer Pricing documentation, DTAA advisory, FEMA compliance, and cross-border structuring for multinational corporations operating in India and abroad.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you advise on UAE Corporate Tax for Indian businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CA Mehul Agrawal holds a UAE Corporate Taxation certification. We advise Indian businesses with UAE operations on the 9% CT compliance, India-UAE DTAA benefits, Transfer Pricing, and Free Zone entity structuring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide NRI taxation services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We assist Non-Resident Indians with income tax filing, DTAA benefits, FEMA compliance for property and investments, and repatriation of funds from India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer offshore accounting and outsourced bookkeeping services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide offshore accounting and outsourced bookkeeping services for businesses in India, UAE, and international clients looking to manage their Indian entity finances remotely.',
      },
    },
  ],
}

const bookingLink = "https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7"
const whatsappLink = "https://wa.me/919527533506?text=Hi,%20I'd%20like%20to%20book%20a%20consultation."

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
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
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
