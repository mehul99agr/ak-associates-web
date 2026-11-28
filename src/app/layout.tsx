import '../styles/globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import FloatingContact from './FloatingContact'
import GoogleAnalytics from './GoogleAnalytics'
import ContactClickTracker from './ContactClickTracker'
import WebMcpTools from './WebMcpTools'
import CookieConsent from './CookieConsent'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import { Montserrat, Open_Sans, Cormorant_Garamond } from 'next/font/google'
import { BASE_URL, FIRM_NAME, BOOKING_LINK as SHARED_BOOKING_LINK, OFFICES, MEHUL_PERSON_ID, RUPESH_PERSON_ID, ORGANIZATION_ID } from '@/lib/constants'


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
  display: 'optional',
})

const GA_MEASUREMENT_ID = 'G-41NNQG654M'

export const metadata: Metadata = {
  metadataBase: new URL('https://agrawalkhandelwal.com'),
  title: {
    default: 'NRI Tax & Transfer Pricing CA | Agrawal Khandelwal & Associates LLP',
    template: '%s | Agrawal Khandelwal & Associates LLP',
  },
  description: 'Chartered Accountants for NRIs and cross-border businesses: NRI tax and FEMA, transfer pricing, DTAA, UAE and US entity compliance, and company incorporation. Offices in Nashik and Sillod.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  keywords: [
    // Core practice (Website 2.0, Nov 28, 2026)
    'NRI tax consultant India', 'NRI taxation services India', 'CA for NRI',
    'NRI property sale TDS', 'lower TDS certificate NRI', 'NRI ITR filing',
    'transfer pricing consultant India', 'transfer pricing documentation India', 'Form 3CEB',
    'international taxation India', 'DTAA consultant India', 'FEMA consultant India',
    'UAE corporate tax consultant India', 'India UAE DTAA',
    'US LLC compliance India', 'Form 5472 India founder',
    'company incorporation India', 'foreign subsidiary registration India',
    'CA for startups India', 'FDI compliance startups',
    // Offices
    'CA in Nashik', 'chartered accountant in Nashik', 'NRI CA Nashik',
    'CA in Sillod', 'chartered accountant Sillod',
  ],
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nashik, Maharashtra, India',
    'geo.position': '19.9877793;73.7898192',
    'ICBM': '19.9877793, 73.7898192',
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
    title: 'NRI Tax, Transfer Pricing & International Tax | Agrawal Khandelwal & Associates LLP',
    description: 'Chartered Accountants for NRIs and cross-border businesses: NRI tax and FEMA, transfer pricing, DTAA, UAE and US entity compliance, and company incorporation. Offices in Nashik and Sillod.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Tax & Transfer Pricing CA | Agrawal Khandelwal & Associates LLP',
    description: 'NRI tax, transfer pricing, international tax and incorporation for NRIs and cross-border businesses.',
  },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  '@id': ORGANIZATION_ID,
  name: FIRM_NAME,
  description: 'Chartered Accountants in Nashik and Sillod, Maharashtra, specialising in NRI taxation and FEMA, transfer pricing, international taxation and DTAA, UAE corporate tax, US entity compliance for Indian founders, and company incorporation.',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/office.jpg`,
  email: OFFICES.nashik.email,
  telephone: OFFICES.nashik.phone,
  foundingDate: '2023',
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
    { '@type': 'City', name: 'Sillod' },
    { '@type': 'City', name: 'Chhatrapati Sambhajinagar' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'United States' },
  ],
  serviceType: [
    'NRI Taxation', 'Transfer Pricing', 'International Taxation',
    'Statutory Audit', 'Company Incorporation', 'LLP Registration', 'DPIIT Registration',
    'DTAA Advisory', 'FEMA Compliance', 'UAE Corporate Tax Advisory',
    'Startup Advisory', 'Virtual CFO Services', 'ESOP Structuring',
    'FDI Compliance', 'Offshore Accounting', 'US Incorporation & Compliance',
    'FBAR & FATCA Filing', 'US Sales Tax Nexus Advisory',
  ],
  knowsAbout: [
    'NRI Taxation', 'Transfer Pricing', 'International Taxation', 'DTAA', 'FEMA Compliance',
    'UAE Corporate Tax', 'Company Incorporation', 'Statutory Audit', 'Startup Advisory', 'Virtual CFO Services',
    'Offshore Accounting', 'US Incorporation & Compliance', 'FBAR & FATCA Filing',
  ],
  founder: [
    { '@type': 'Person', '@id': MEHUL_PERSON_ID, name: 'CA Mehul Agrawal' },
    { '@type': 'Person', '@id': RUPESH_PERSON_ID, name: 'CA Rupesh Khandelwal' },
  ],
  sameAs: [
    'https://www.linkedin.com/company/agrawal-khandelwal-associates-llp/',
    'https://www.justdial.com/Nashik/Agrawal-Khandelwal-Associates-LLP-Opposite-Radiant-Hospital-Mumbai-Naka-Bhagwant-Nagar-Bhabha-Nagar/0253PX253-X253-240221190351-A8F7_BZDET',
    'https://www.sulekha.com/agrawal-khandelwal-and-associates-llp-mumbai-naka-nashik-contact-address',
    'https://maps.google.com/?cid=15026601649790613456',
    // Public profiles verified to link back to the site (Sep 14, 2026 audit).
    'https://www.crunchbase.com/organization/agrawal-khandelwal-associates',
    'https://theorg.com/org/agrawal-khandelwal-associates-llp',
    'https://www.nashik100.com/business/Agrawal-Khandelwal---Associates-LLP/47207',
  ],
  hasMap: 'https://maps.google.com/?cid=15026601649790613456',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Chartered Accountant Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NRI Tax Advisory', url: 'https://agrawalkhandelwal.com/nri-tax-advisory' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transfer Pricing', url: 'https://agrawalkhandelwal.com/transfer-pricing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Company Incorporation in India', url: 'https://agrawalkhandelwal.com/company-incorporation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Taxation & DTAA', url: 'https://agrawalkhandelwal.com/services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'US Incorporation & Compliance', url: 'https://agrawalkhandelwal.com/us-cross-border' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UAE Corporate Tax Advisory', url: 'https://agrawalkhandelwal.com/uae-tax-advisory' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Offshore Accounting & Outsourced Bookkeeping', url: 'https://agrawalkhandelwal.com/offshore-accounting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Virtual CFO & Startup Advisory', url: 'https://agrawalkhandelwal.com/startups' } },
    ],
  },
  location: [
    {
      '@type': 'Place',
      '@id': OFFICES.nashik.id,
      name: OFFICES.nashik.name,
      image: `${BASE_URL}/office.jpg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: OFFICES.nashik.streetAddress,
        addressLocality: OFFICES.nashik.locality,
        addressRegion: OFFICES.nashik.region,
        postalCode: OFFICES.nashik.postalCode,
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: OFFICES.nashik.latitude, longitude: OFFICES.nashik.longitude },
    },
    {
      '@type': 'Place',
      '@id': OFFICES.sillod.id,
      name: OFFICES.sillod.name,
      image: `${BASE_URL}/office.jpg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: OFFICES.sillod.streetAddress,
        addressLocality: OFFICES.sillod.locality,
        addressRegion: OFFICES.sillod.region,
        postalCode: OFFICES.sillod.postalCode,
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: OFFICES.sillod.latitude, longitude: OFFICES.sillod.longitude },
    },
  ],
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: FIRM_NAME,
  url: BASE_URL,
  inLanguage: 'en-IN',
  publisher: { '@id': ORGANIZATION_ID },
}

const bookingLink = SHARED_BOOKING_LINK

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body>
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
        <ContactClickTracker />
        <WebMcpTools />
        <SpeedInsights />
        <Analytics />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <FloatingContact />
        <CookieConsent />

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">

              <div>
                <div className="footer-logo">
                  <Image
                    src="/logo.png"
                    alt="Agrawal Khandelwal & Associates LLP"
                    fill
                    sizes="52px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'var(--footer-text)', marginBottom: '1.5rem' }}>
                  Professional Chartered Accountant services specializing in Tax Planning, International Taxation, Audit, and Financial Consulting for businesses across India and UAE.
                </p>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '14px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ background: 'var(--white)', padding: '4px', borderRadius: '4px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                      <Image src="/ca-logo.png" alt="ICAI" width={24} height={24} />
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--footer-text-light)', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Certifications</span>
                  </div>
                  <ul style={{ fontSize: '0.82rem', color: 'var(--footer-text)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li>✓ Concurrent Audits of Bank</li>
                    <li>✓ UAE Corporate Taxation</li>
                  </ul>
                </div>
                <a
                  href="https://www.linkedin.com/company/agrawal-khandelwal-associates-llp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '1rem', fontSize: '0.82rem', color: 'var(--footer-text)', textDecoration: 'none', fontWeight: 600 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--footer-text)" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>

              <div>
                <h3>Services</h3>
                <Link href="/nri-tax-advisory">NRI Tax Advisory</Link>
                <Link href="/transfer-pricing">Transfer Pricing</Link>
                <Link href="/us-cross-border">US Cross-Border</Link>
                <Link href="/uae-tax-advisory">UAE Tax Advisory</Link>
                <Link href="/company-incorporation">Company Incorporation</Link>
                <Link href="/offshore-accounting">Offshore Accounting</Link>
                <Link href="/startups">Startup Advisory</Link>
              </div>

              <div>
                <h3>Quick Links</h3>
                <Link href="/about">About Us</Link>
                <Link href="/services">Our Services</Link>
                <Link href="/ca-in-nashik">CA in Nashik</Link>
                <Link href="/ca-in-sillod">CA in Sillod</Link>
                <Link href="/tools">NRI & Company Tools</Link>
                <Link href="/tools/compliance-calendar">Due Date Calendar</Link>
                <Link href="/blog">Client Insights</Link>
                <Link href="/contact">Contact Us</Link>
                <a href={bookingLink}>Book Consultation</a>
              </div>

              <div>
                <h3>Contact Us</h3>
                <div style={{ marginBottom: '1.25rem' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--footer-text-light)', fontWeight: 600, marginBottom: '6px' }}>{OFFICES.nashik.name}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--footer-text)', marginBottom: '5px', lineHeight: 1.5 }}>{OFFICES.nashik.addressLine}</p>
                  <a href={`tel:${OFFICES.nashik.phone}`} style={{ display: 'block', marginBottom: '4px' }}>{OFFICES.nashik.phoneDisplay}</a>
                  <a href={`mailto:${OFFICES.nashik.email}`}>{OFFICES.nashik.email}</a>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--footer-text-light)', fontWeight: 600, marginBottom: '6px' }}>{OFFICES.sillod.name}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--footer-text)', marginBottom: '5px', lineHeight: 1.5 }}>{OFFICES.sillod.addressLine}</p>
                  <a href={`tel:${OFFICES.sillod.phone}`} style={{ display: 'block', marginBottom: '4px' }}>{OFFICES.sillod.phoneDisplay}</a>
                  <a href={`mailto:${OFFICES.sillod.email}`}>{OFFICES.sillod.email}</a>
                </div>
              </div>

            </div>

            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Agrawal Khandelwal &amp; Associates LLP. All rights reserved.</p>
              <p style={{ marginTop: '0.4rem', fontSize: '0.8rem', color: 'var(--footer-text-dim)' }}>Chartered Accountants · ICAI Firm Reg. No. W101119 · LLPIN ACO-7072</p>
              <p style={{ marginTop: '0.4rem', fontSize: '0.78rem', color: 'var(--footer-text-dim)' }}>
                <Link href="/privacy-policy" style={{ color: 'var(--footer-text-dim)' }}>Privacy Policy</Link>
                <span> · </span>
                <Link href="/terms-of-use" style={{ color: 'var(--footer-text-dim)' }}>Terms of Use</Link>
                <span> · </span>
                <Link href="/disclaimer" style={{ color: 'var(--footer-text-dim)' }}>Disclaimer</Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
