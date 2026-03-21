'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappLink = "https://wa.me/919527533506?text=Hi,%20I'd%20like%20to%20book%20a%20consultation.";

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
          <div className="logo-container">
            <Image 
              src="/logo.png" 
              alt="Agrawal Khandelwal & Associates LLP" 
              fill 
              style={{ objectFit: 'contain', objectPosition: 'left' }} 
              priority 
            />
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="nav-links desktop-only">
          <Link href="/services" className="link">SERVICES</Link>
          <Link href="/startups" className="link" style={{ color: 'var(--accent)' }}>STARTUPS</Link>
          <Link href="/tools" className="link">TOOLS</Link>
          <Link href="/blog" className="link">INSIGHTS</Link>
          <ThemeToggle />
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.7rem 1.2rem', fontSize: '0.85rem' }}>
            BOOK CONSULTATION
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="mobile-controls">
          <ThemeToggle />
          <button 
            className={`hamburger ${isOpen ? 'is-active' : ''}`} 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Overlay */}
        <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
          <div className="mobile-menu-links">
            <Link href="/services" onClick={closeMenu}>SERVICES</Link>
            <Link href="/startups" onClick={closeMenu} style={{ color: 'var(--accent)' }}>STARTUPS</Link>
            <Link href="/tools" onClick={closeMenu}>TOOLS</Link>
            <Link href="/blog" onClick={closeMenu}>INSIGHTS</Link>
            <a href={whatsappLink} onClick={closeMenu} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              BOOK CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
