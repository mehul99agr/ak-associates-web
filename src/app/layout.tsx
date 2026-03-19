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
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'var(--primary)', padding: '6px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Image src="/logo.png" alt="AK & Associates" width={40} height={40} priority style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                <div style={{ color: '#fff', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.1rem', lineHeight: '1', letterSpacing: '0.5px' }}>AGRAWAL KHANDELWAL</span>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '2px', color: 'var(--accent)' }}>& ASSOCIATES LLP</span>
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
        
        <main>{children}</main>

        <footer className="footer" style={{ borderTop: '4px solid var(--accent)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'start' }}>
              <div style={{ paddingBottom: '20px' }}>
                <div className="logo" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <div style={{ color: '#fff', display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 800, fontSize: '1.2rem', lineHeight: '1' }}>AGRAWAL KHANDELWAL</span>
                    <span style={{ fontSize: '0.7rem', letterSpacing: '2px', color: 'var(--accent)' }}>& ASSOCIATES LLP</span>
                  </div>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '25px', lineHeight: '1.6' }}>
                  Institutional-grade financial frameworks and strategic tax advisory for the modern global economy.
                </p>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <Image src="/ca-logo.png" alt="ICAI" width={35} height={35} />
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Member of ICAI</span>
                </div>
              </div>

              <div>
                <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)' }}>Nashik (H.O.)</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.7' }}>
                  Shop No. 12 & 13, Ram Plaza,<br/>Bhabha Nagar, Mumbai Naka,<br/>Nashik - 422011
                </p>
                <a href="https://maps.app.goo.gl/YourGoogleMapsLinkHere" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '0.85rem', textDecoration: 'underline' }}>
                  View on Google Maps
                </a>
                <div style={{ marginTop: '15px' }}>
                  <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}><strong>Ph:</strong> +91 95275 33506</p>
                  <p style={{ fontSize: '0.9rem' }}><strong>Email:</strong> mehul@agrawalkhandelwal.com</p>
                </div>
              </div>

              <div>
                <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)' }}>Sillod Office</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.7' }}>
                  Near Datta Mandir,<br/>Tilak Nagar,<br/>Sillod - 431112
                </p>
                <div style={{ marginTop: '15px' }}>
                  <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}><strong>Ph:</strong> +91 95955 85953</p>
                  <p style={{ fontSize: '0.9rem' }}><strong>Email:</strong> rupesh@agrawalkhandelwal.com</p>
                </div>
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
