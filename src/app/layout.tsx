import '../styles/globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Agrawal Khandelwal & Associates LLP | Chartered Accountants',
  description: 'Simplify your finances, Empower your decisions. Trusted tax and financial advisory for startups, SMEs, and multinationals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container nav">
            <Link href="/">
              <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '4px' }}>
                  <Image src="/logo.png" alt="AK & Associates" width={180} height={45} priority style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                </div>
              </div>
            </Link>
            <div className="nav-links">
              <Link href="/services" className="link">Services</Link>
              <Link href="/tax-calculator" className="link">Tax Tools</Link>
              <Link href="/blog" className="link">Insights</Link>
              <Link href="/#contact" className="btn btn-primary">Book Consultation</Link>
            </div>
          </div>
        </header>
        
        <main style={{ minHeight: '80vh' }}>{children}</main>

        <footer className="footer">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '60px' }}>
              <div>
                <div className="logo" style={{ marginBottom: '24px', filter: 'brightness(0) invert(1)' }}>
                  <Image src="/logo.png" alt="A K & Associates" width={180} height={45} style={{ objectFit: 'contain' }} />
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '25px', maxWidth: '300px' }}>
                  Institutional-grade financial frameworks and strategic tax advisory for the modern global economy.
                </p>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <Image src="/ca-logo.png" alt="ICAI" width={40} height={40} />
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Member of the Institute of Chartered Accountants of India</span>
                </div>
              </div>

              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '25px', borderBottom: '2px solid var(--accent)', display: 'inline-block', paddingBottom: '5px' }}>Nashik (H.O.)</h4>
                <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>Shop No. 12 & 13, Ram Plaza,<br/>Bhabha Nagar, Mumbai Naka,<br/>Nashik - 422011</p>
                <a href="https://maps.app.goo.gl/YourGoogleMapsLinkHere" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '15px' }}>
                  📍 View on Google Maps
                </a>
                <p style={{ marginBottom: '8px' }}>
                  <strong>Phone:</strong> <a href="tel:+919527533506" style={{ color: '#fff' }}>+91 95275 33506</a>
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:mehul@agrawalkhandelwal.com" style={{ color: '#fff' }}>mehul@agrawalkhandelwal.com</a>
                </p>
              </div>

              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '25px', borderBottom: '2px solid var(--accent)', display: 'inline-block', paddingBottom: '5px' }}>Sillod Office</h4>
                <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>Near Datta Mandir,<br/>Tilak Nagar,<br/>Sillod - 431112</p>
                <p style={{ marginBottom: '8px' }}>
                  <strong>Phone:</strong> <a href="tel:+919595585953" style={{ color: '#fff' }}>+91 95955 85953</a>
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:rupesh@agrawalkhandelwal.com" style={{ color: '#fff' }}>rupesh@agrawalkhandelwal.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="container" style={{ marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
            <p>&copy; {new Date().getFullYear()} Agrawal Khandelwal & Associates LLP. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
