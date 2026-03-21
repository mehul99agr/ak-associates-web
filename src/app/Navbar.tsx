'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappLink = "https://wa.me/919527533506?text=Hi,%20I'd%20like%20to%20book%20a%20consultation.";

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
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
        <div className="nav-links desktop-only">
          <Link href="/services" className="link">SERVICES</Link>
          <Link href="/startups" className="link" style={{ color: 'var(--accent)' }}>STARTUPS</Link>
          <Link href="/tools" className="link">TOOLS</Link>
          <Link href="/blog" className="link">INSIGHTS</Link>
          <ThemeToggle />
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
            BOOK CONSULTATION
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="mobile-controls">
          <ThemeToggle />
          <button className={`hamburger ${isOpen ? 'is-active' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
          <div className="mobile-menu-links">
            <Link href="/services" onClick={toggleMenu}>SERVICES</Link>
            <Link href="/startups" onClick={toggleMenu} style={{ color: 'var(--accent)' }}>STARTUPS</Link>
            <Link href="/tools" onClick={toggleMenu}>TOOLS</Link>
            <Link href="/blog" onClick={toggleMenu}>INSIGHTS</Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              BOOK CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
