'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TrackedLink from './TrackedLink'

const serviceLinks = [
  { href: '/services', label: 'All Services' },
  { href: '/company-incorporation', label: 'Company Incorporation' },
  { href: '/startups', label: 'Startups', accent: true },
  { href: '/nri-tax-advisory', label: 'NRI Tax Advisory', accent: true },
  { href: '/transfer-pricing', label: 'Transfer Pricing' },
  { href: '/uae-tax-advisory', label: 'UAE Tax Advisory' },
  { href: '/offshore-accounting', label: 'Offshore Accounting' },
  // Local landing pages
  { href: '/ca-in-nashik', label: 'CA in Nashik' },
  { href: '/ca-in-sillod', label: 'CA in Sillod' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => {
    setIsOpen(false)
    setMobileServicesOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" onClick={closeMenu} aria-label="Home" style={{ zIndex: 1001 }}>
          <div className="logo-wrapper">
            <Image
              src="/logo.png"
              alt="Agrawal Khandelwal & Associates LLP"
              width={70}
              height={70}
              className="logo-img"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links desktop-only" aria-label="Main navigation">

          {/* Services dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setDropdownOpen(prev => !prev)}
              className="link"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 0',
              }}
            >
              SERVICES
              <svg
                width="10" height="6" viewBox="0 0 10 6" fill="none"
                style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 14px)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                minWidth: '220px',
                zIndex: 1000,
                overflow: 'hidden',
                padding: '6px 0',
              }}>
                {serviceLinks.map(({ href, label, accent }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      letterSpacing: '0.4px',
                      color: accent ? 'var(--accent)' : 'var(--text-main)',
                      textDecoration: 'none',
                      transition: 'background 0.15s',
                      borderBottom: href === '/services' ? '1px solid var(--border)' : 'none',
                      borderTop: href === '/ca-in-nashik' ? '1px solid var(--border)' : 'none',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-surface)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="link">ABOUT</Link>
          <Link href="/tools" className="link">TOOLS</Link>
          <Link href="/blog" className="link">INSIGHTS</Link>
          <Link href="/contact" className="link">CONTACT</Link>
          <TrackedLink
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.2rem', fontSize: '0.78rem' }}
            method="booking"
            location="navbar_desktop"
          >
            BOOK CONSULTATION
          </TrackedLink>
        </nav>

        {/* Mobile controls */}
        <div className="mobile-controls">
          <button
            className={`hamburger ${isOpen ? 'is-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile overlay */}
        <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`} role="dialog" aria-modal="true">
          <div className="mobile-menu-links">

            {/* Mobile services accordion */}
            <button
              onClick={() => setMobileServicesOpen(prev => !prev)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: 0,
                font: 'inherit',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
                color: 'var(--text-main)',
              }}
            >
              SERVICES
              <svg
                width="12" height="7" viewBox="0 0 10 6" fill="none"
                style={{ transition: 'transform 0.2s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                {serviceLinks.map(({ href, label, accent }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    style={{
                      color: accent ? 'var(--accent)' : 'var(--text-light)',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      padding: '6px 0',
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" onClick={closeMenu}>ABOUT</Link>
            <Link href="/tools" onClick={closeMenu}>TOOLS</Link>
            <Link href="/blog" onClick={closeMenu}>INSIGHTS</Link>
            <Link href="/contact" onClick={closeMenu}>CONTACT</Link>
            <TrackedLink
              href={bookingLink}
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
              method="booking"
              location="navbar_mobile"
            >
              BOOK CONSULTATION
            </TrackedLink>
          </div>
        </div>
      </div>
    </header>
  )
}
