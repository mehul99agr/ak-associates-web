import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'SAFE Notes in India: Are They Legally Recognised?',
  description: 'Why a US-style SAFE (Simple Agreement for Future Equity) is not a recognised instrument under Indian company law or FEMA, and how founders adapt it into a compliant convertible note or CCPS instead.',
  keywords: [
    'SAFE note India legal', 'are SAFE notes valid in India', 'iSAFE India', 'SAFE vs convertible note India',
    'simple agreement for future equity India', 'SAFE note FEMA', 'SAFE note Companies Act',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/safe-notes-in-india-are-they-legally-recognised' },
  openGraph: {
    title: 'SAFE Notes in India: Are They Legally Recognised?',
    description: 'Why a US-style SAFE is not a recognised instrument under Indian company law or FEMA, and how to structure a compliant alternative.',
    url: 'https://agrawalkhandelwal.com/blog/safe-notes-in-india-are-they-legally-recognised',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAFE Notes in India: Are They Legally Recognised?',
    description: 'A US SAFE has no status under the Companies Act or FEMA. Here is what actually works for Indian startups.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('SAFE Notes in India: Are They Legally Recognised?', 'safe-notes-in-india-are-they-legally-recognised')

const articleLd = buildArticleLd({
  headline: 'SAFE Notes in India: Are They Legally Recognised?',
  description: 'Whether a US-originated SAFE (Simple Agreement for Future Equity) has legal standing under the Companies Act, 2013 and FEMA, and how founders structure a compliant equivalent using convertible notes or CCPS.',
  datePublished: '2026-08-27',
  slug: 'safe-notes-in-india-are-they-legally-recognised',
})

const faqs: [string, string][] = [
  [
    'Is a SAFE note legal in India?',
    'A SAFE is not illegal to sign, but it is not a recognised capital instrument under the Companies Act, 2013 or FEMA\'s Non-Debt Instruments Rules. Neither statute lists a "Simple Agreement for Future Equity" as a security or capital instrument a company can issue. Money received under an unadapted SAFE risks being treated as an unauthorised deposit under the Companies Act, and for a foreign investor, as an inflow outside any recognised FDI instrument category under FEMA.',
  ],
  [
    'What is an iSAFE and how is it different from a US SAFE?',
    'An iSAFE (India SAFE) is the commercial adaptation Indian startups and investors use to replicate SAFE-like economics legally. Instead of a bare contractual promise, it is structured as Compulsorily Convertible Preference Shares (CCPS), a form of security the Companies Act does recognise, with SAFE-style terms (valuation cap, discount, most-favoured-nation clause) built into the CCPS terms. The name borrows the SAFE brand, but the legal wrapper is Indian company law, not a US-style agreement.',
  ],
  [
    'Can a foreign investor put money into an Indian startup using a plain SAFE?',
    'Not directly and not safely. A foreign investor\'s money into an Indian company must come in against a recognised capital instrument under FEMA\'s Non-Debt Instruments Rules, such as equity shares, compulsorily convertible preference shares, or a convertible note issued under the specific startup carve-out. A SAFE, by itself, is not one of these. In practice, foreign SAFE-style investment into an Indian startup is almost always restructured as CCPS or a compliant convertible note before or at the time funds are received.',
  ],
  [
    'What happens if a startup signs a SAFE anyway and takes the money?',
    'Two separate risks arise. Under company law, receiving money against an instrument that is not a recognised security can expose the company to being treated as having accepted an unauthorised deposit, which carries penalties under the Companies Act. Under FEMA, if the investor is a non-resident, the inflow has no recognised reporting category (no FC-GPR filing fits a bare SAFE), which creates an unreported or non-compliant foreign investment position that has to be regularised later, often at cost and with interest or compounding exposure.',
  ],
  [
    'Does a convertible note solve the same problem as a SAFE?',
    'Largely yes, for eligible startups. A convertible note is expressly recognised under the Companies Act and the FEMA startup carve-out, subject to conditions: the company must be DPIIT-recognised, there is a minimum investment amount per investor in a single tranche, and the note must convert or be repaid within a prescribed period. It replicates the deferred-valuation purpose of a SAFE inside a legally defined Indian instrument. See our dedicated guide on convertible notes vs equity for the full conditions.',
  ],
  [
    'Should a founder ever just use a standard US SAFE template for an India round?',
    'No. A SAFE template drafted for Delaware law assumes a legal and regulatory environment; a capital instrument taxonomy, a securities regime, and an exchange control framework, that does not exist in the same form in India. Using it unmodified for an Indian company creates real legal and FEMA risk rather than saving time. The right approach is to start from what the round is trying to achieve commercially (deferred valuation, fast close) and then pick the Indian instrument, iSAFE-style CCPS or a compliant convertible note, that achieves it lawfully.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function SafeNotesIndiaBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Startup Advisory</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>SAFE Notes in India: Are They Legally Recognised?</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 27, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>

            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>A US-style <strong>SAFE is not a recognised capital instrument</strong> under the Companies Act, 2013 or FEMA&apos;s Non-Debt Instruments Rules.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Unlike convertible notes, which have an explicit legal carve-out, a SAFE has no defined status; money received against one risks unauthorised-deposit and FEMA reporting problems.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The Indian market workaround is the <strong>iSAFE</strong>, which replicates SAFE economics but is legally structured as <strong>Compulsorily Convertible Preference Shares (CCPS)</strong>.</li>
                  <li style={{ marginBottom: 0 }}>A properly conditioned <strong>convertible note</strong> is the other compliant route for eligible DPIIT-recognised startups.</li>
                </ul>
              </div>

              <p>The SAFE, Simple Agreement for Future Equity, was created by Y Combinator in the US as a fast, lawyer-light way to raise a seed round without agreeing on a valuation upfront. It has become close to a default instrument in the US startup ecosystem, and it is common for founders raising from US-based accelerators, angels, or funds to be handed a SAFE template and asked to sign it for an Indian entity. The problem is that a SAFE is a creature of US contract and securities practice; it was never designed to slot into Indian company law, and it does not.</p>

              <h2>Why a SAFE Has No Legal Status in India</h2>
              <p>Under the Companies Act, 2013, a company can only issue defined types of securities: equity shares, preference shares (including compulsorily convertible preference shares), debentures, and a small number of other recognised instruments. A SAFE is none of these. It is a contractual promise, "if a future priced round or exit happens, the investor gets shares or cash," without itself being a share, a debenture, or any other security the Act contemplates.</p>
              <p>That gap matters in two separate ways. First, under company law, if a company receives money from an investor that is not backed by an actual allotment of a recognised security within the applicable timeframe, that money can be characterised as an unauthorised deposit, with its own penalty regime. Second, and specifically for foreign investors, FEMA&apos;s Non-Debt Instruments Rules define a closed list of capital instruments a non-resident can invest in: equity shares, CCPS, compulsorily convertible debentures, and (for DPIIT-recognised startups specifically) convertible notes meeting defined conditions. A SAFE does not appear on that list either, which means there is no compliant FC-GPR filing category to report a straight SAFE investment under.</p>
              <p>None of this means a SAFE is criminally prohibited to sign as a piece of paper; parties can contract for almost anything. The issue is that the SAFE, taken literally, does not produce a legally effective allotment of anything, and the money behind it does not sit comfortably within either the company-law deposit rules or the FEMA reporting framework. That is a real structuring problem, not a technicality.</p>

              <h2>The iSAFE: India&apos;s Adapted Version</h2>
              <p>The market response has been the <strong>iSAFE</strong>, an India-adapted SAFE that keeps the commercial features investors and founders like (deferred valuation, a valuation cap, a discount on the next round, sometimes a most-favoured-nation clause) but wraps them inside <strong>Compulsorily Convertible Preference Shares</strong>, an instrument the Companies Act does recognise and FEMA does permit for foreign investment. In an iSAFE structure, the investor is actually allotted CCPS at the time of investment, with conversion mechanics, rather than merely holding a contractual promise of future shares. That allotment is what gives the structure legal standing: there is a real security on the cap table from day one, not just a future entitlement.</p>
              <p>The naming can be confusing because "iSAFE" sounds like a product distinct from CCPS, when legally it is a CCPS instrument with SAFE-style commercial terms layered on top. Founders and investors negotiating an "iSAFE" should expect (and their counsel should draft) a CCPS subscription agreement and amended articles of association, not a one-page SAFE contract.</p>

              <h2>The Other Compliant Route: A Properly Conditioned Convertible Note</h2>
              <p>India&apos;s Companies Act and the FEMA startup carve-out also separately recognise <strong>convertible notes</strong> as a defined instrument, but only under specific conditions: the issuing company must be a DPIIT-recognised startup, there is a minimum investment amount per investor in a single tranche, and the note must convert into equity or be repaid within a prescribed period from issuance. Where a startup qualifies, a convertible note structured to these conditions is a second legitimate way to achieve the deferred-valuation goal a SAFE is trying to achieve, without the classification problem. We cover the mechanics, thresholds, and FEMA reporting for this route in full in our <Link href="/blog/convertible-notes-vs-equity-fema-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>convertible notes vs equity guide</Link>.</p>
              <p>The choice between an iSAFE-style CCPS and a compliant convertible note usually comes down to eligibility and investor preference: a convertible note only works if the company is DPIIT-recognised and the investment meets the minimum-ticket condition, while CCPS has no such eligibility gate and is the more universally available route. Institutional and larger cheque investors also frequently prefer CCPS for the governance and protective provisions it can carry, which a note structured to stay simple usually does not.</p>

              <h2>What Founders Get Wrong</h2>
              <p>The most common mistake is treating "SAFE" as shorthand for "quick and legally simple," and assuming an instrument that works cleanly in the US will translate directly. In practice, an unadapted SAFE handed to an Indian company creates more legal uncertainty than a properly drafted CCPS or convertible note would, precisely because there is no settled answer for how a court or regulator treats money received against an instrument the statute does not recognise. A second common mistake is signing the SAFE first and planning to "convert it into CCPS later, once things are clearer"; by then the money has often already moved, and retrofitting a compliant instrument after the fact is materially harder than structuring the CCPS or note correctly at the point the round closes.</p>
              <p>The safest practical sequence for a founder handed a SAFE template by a US-based investor is: flag the classification issue immediately, propose the iSAFE (CCPS) equivalent or a compliant convertible note as the instrument to actually be signed, and have Indian counsel draft the CCPS or note terms to mirror the commercial economics the investor wanted from the SAFE (valuation cap, discount, conversion trigger). Most sophisticated foreign investors who have funded Indian startups before are already familiar with this substitution and will not push back on it; the ones who are unfamiliar with it are exactly the ones who need to be told before money moves, not after.</p>

              <h2>Quick Comparison</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Feature</th><th style={thStyle}>US SAFE (unadapted)</th><th style={thStyle}>iSAFE (CCPS-wrapped)</th><th style={thStyle}>Convertible Note</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Recognised under Companies Act</td><td style={tdStyle}>No</td><td style={tdStyle}>Yes, as CCPS</td><td style={tdStyle}>Yes, with conditions</td></tr>
                    <tr><td style={tdAltStyle}>Recognised under FEMA for foreign investors</td><td style={tdAltStyle}>No</td><td style={tdAltStyle}>Yes</td><td style={tdAltStyle}>Yes, startup carve-out only</td></tr>
                    <tr><td style={tdStyle}>Eligibility gate</td><td style={tdStyle}>None (which is the problem)</td><td style={tdStyle}>None beyond standard company law</td><td style={tdStyle}>DPIIT-recognised startup only</td></tr>
                    <tr><td style={tdAltStyle}>Security actually allotted at investment</td><td style={tdAltStyle}>No, contractual promise only</td><td style={tdAltStyle}>Yes, CCPS allotted</td><td style={tdAltStyle}>No, note converts later</td></tr>
                    <tr><td style={tdStyle}>Recommended for Indian companies</td><td style={tdStyle}>No</td><td style={tdStyle}>Yes</td><td style={tdStyle}>Yes, if eligible</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Been handed a SAFE template by a foreign investor?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help founders restructure SAFE-style terms into a compliant iSAFE (CCPS) or convertible note before money changes hands, and handle the FEMA reporting once it does.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/startups" className="btn btn-outline">Startup Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/convertible-notes-vs-equity-fema-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Convertible Notes vs Equity: FEMA Rules</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Valuation Methods in India</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>Due Diligence Checklist for Fundraising</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}
