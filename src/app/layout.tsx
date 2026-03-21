import '../styles/globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

export const metadata: Metadata = {
  title: 'Agrawal Khandelwal & Associates LLP | Top Chartered Accountants in India',
  description: 'Leading Chartered Accountants in Nashik & Sillod. Expert CA services: Tax Planning, Audit, International Taxation, Virtual CFO, and Business Incorporation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const whatsappLink = "https://wa.me/919527533506?text=Hi,%20I'd%20like%20to%20book%20a%20consultation.";

  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container nav" style={{ height: '100px' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <div style={{ position: 'relative', height: '70px', width: '350px' }}>
                <Image 
                  src="/logo.png" 
                  alt="Agrawal Khandelwal & Associates LLP" 
                  fill 
                  style={{ objectFit: 'contain', objectPosition: 'left' }} 
                  priority 
                />
              </div>
            </Link>
            
            <div className="nav-links" style={{ gap: '2.5rem', display: 'flex', alignItems: 'center' }}>
              <Link href="/services" className="link" style={{ fontSize: '0.9rem', fontWeight: 700 }}>SERVICES</Link>
              <Link href="/startups" className="link" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent)' }}>STARTUPS</Link>
              <Link href="/tools" className="link" style={{ fontSize: '0.9rem', fontWeight: 700 }}>TOOLS</Link>
              <Link href="/blog" className="link" style={{ fontSize: '0.9rem', fontWeight: 700 }}>INSIGHTS</Link>
              <ThemeToggle />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ 
                padding: '0.7rem 1.5rem', 
                fontSize: '0.85rem', 
                borderRadius: '4px',
                letterSpacing: '0.5px',
                fontWeight: 800
              }}>
                BOOK CONSULTATION
              </a>
            </div>
          </div>
        </header>
        
        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
              <div>
                <div style={{ position: 'relative', height: '50px', width: '250px', marginBottom: '1.5rem' }}>
                  <Image 
                    src="/logo.png" 
                    alt="Agrawal Khandelwal & Associates LLP" 
                    fill 
                    style={{ objectFit: 'contain', objectPosition: 'left', filter: 'brightness(0) invert(1)' }} 
                  />
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'var(--footer-text)', marginBottom: '1.5rem' }}>
                  Professional Chartered Accountant services specializing in Tax Planning, International Taxation, Audit, and Financial Consulting for businesses across India.
                </p>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ background: '#fff', padding: '5px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                      <Image src="/ca-logo.png" alt="ICAI" width={30} height={30} />
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--white)', fontWeight: 700 }}>Certifications</span>
                  </div>
                  <ul style={{ fontSize: '0.8rem', color: 'var(--footer-text)', listStyle: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                <h3>Contact Info</h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--white)' }}><strong>Nashik Office:</strong></p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '5px' }}>Shop No. 12 & 13, Ram Plaza, Mumbai Naka, Nashik - 422011</p>
                  <a href="tel:+919527533506" style={{ fontSize: '0.85rem', display: 'block', margin: '0' }}>+91 95275 33506</a>
                  <a href="mailto:mehul@agrawalkhandelwal.com" style={{ fontSize: '0.85rem', display: 'block' }}>mehul@agrawalkhandelwal.com</a>
                </div>
                <div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--white)' }}><strong>Sillod Office:</strong></p>
                  <p style={{ fontSize: '0.85rem', marginBottom: '5px' }}>Near Datta Mandir, Tilak Nagar, Sillod - 431112</p>
                  <a href="tel:+919595585953" style={{ fontSize: '0.85rem', display: 'block', margin: '0' }}>+91 95955 85953</a>
                  <a href="mailto:rupesh@agrawalkhandelwal.com" style={{ fontSize: '0.85rem', display: 'block' }}>rupesh@agrawalkhandelwal.com</a>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              <p>&copy; {new Date().getFullYear()} Agrawal Khandelwal & Associates LLP. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
