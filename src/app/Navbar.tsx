'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const bookingLink = "https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7"

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

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
          <Link href="/services" className="link">SERVICES</Link>
          <Link href="/startups" className="link" style={{ color: 'var(--accent)' }}>STARTUPS</Link>
          <Link href="/tools" className="link">TOOLS</Link>
          <Link href="/blog" className="link">INSIGHTS</Link>
          <ThemeToggle />
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.2rem', fontSize: '0.78rem' }}
          >
            BOOK CONSULTATION
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="mobile-controls">
          <ThemeToggle />
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
            <Link href="/services" onClick={closeMenu}>SERVICES</Link>
            <Link href="/startups" onClick={closeMenu} style={{ color: 'var(--accent)' }}>STARTUPS</Link>
            <Link href="/tools" onClick={closeMenu}>TOOLS</Link>
            <Link href="/blog" onClick={closeMenu}>INSIGHTS</Link>
            <a
              href={bookingLink}
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
            >
              BOOK CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
