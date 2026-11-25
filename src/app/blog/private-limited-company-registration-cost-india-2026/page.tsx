import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import ServiceOffer from '../_components/ServiceOffer'
import PostFooterLinks from '../_components/PostFooterLinks'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: 'Private Limited Company Registration Cost India 2026' },
  description: 'Line-by-line cost of registering a private limited company in 2026: SPICe+ fee, stamp duty, DSC, name approval, and what Rs 999 offers leave out.',
  keywords: ["private limited company registration cost", "company registration fees India 2026", "SPICe+ fee", "stamp duty MoA AoA Maharashtra", "Rs 999 company registration", "DSC cost company registration"],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/private-limited-company-registration-cost-india-2026' },
  openGraph: {
    title: 'Private Limited Company Registration Cost India 2026',
    description: 'Line-by-line cost of registering a private limited company in 2026: SPICe+ fee, stamp duty, DSC, name approval, and what Rs 999 offers leave out.',
    url: 'https://agrawalkhandelwal.com/blog/private-limited-company-registration-cost-india-2026',
    type: 'article',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Limited Company Registration Cost India 2026',
    description: 'Line-by-line cost of registering a private limited company in 2026: SPICe+ fee, stamp duty, DSC, name approval, and what Rs 999 offers leave out.',
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Private Limited Company Registration Cost in India (2026)', 'private-limited-company-registration-cost-india-2026')

const articleLd = buildArticleLd({
  headline: 'Private Limited Company Registration Cost in India (2026)',
  description: 'Line-by-line cost of registering a private limited company in 2026: SPICe+ fee, stamp duty, DSC, name approval, and what Rs 999 offers leave out.',
  datePublished: '2026-11-18',
  dateModified: '2026-11-18',
  slug: 'private-limited-company-registration-cost-india-2026',
})

const faqs: [string, string][] = [
  ['How much does it cost to register a private limited company in 2026?', 'The MCA filing fee is nil where authorised capital is up to Rs 15 lakh. The remaining cost is name reservation, DSC for each director, state stamp duty on the Memorandum and Articles, and the professional fee for drafting and filing. The total depends mainly on the professional fee, the number of directors and the state.'],
  ['Is there a government fee for SPICe+ incorporation?', 'There is no MCA filing fee for SPICe+ where authorised capital is up to Rs 15 lakh. Above that, a slab-based fee applies. Check the current MCA fee table for your authorised capital.'],
  ['How much is stamp duty on a private limited company in Maharashtra?', 'It is a state levy on the Memorandum and Articles that depends on authorised capital, and published guides give different formulas. Ask your CA for the exact amount for your capital, or check the state stamp duty schedule, instead of relying on a blog figure.'],
  ['Why do some firms advertise company registration for Rs 999?', 'Such offers usually cover only the basic filing. Stamp duty, DSCs, name reservation attempts, a customised Memorandum and Articles, bank account support and post-incorporation compliance are often excluded or charged later. Ask for a written list of inclusions and exclusions.'],
  ['How long does private limited company registration take?', 'Published guides estimate roughly 10 to 20 working days when documents are ready and the name clears first time. ROC queries, name rejection or incomplete documents can add days.'],
  ['Can I register a company myself without a professional?', 'Yes. The risk is not the fee but rework from a rejected name, mismatched address or identity proofs, or a template Memorandum and Articles that does not fit your shareholding. A foreign shareholder or an investor-ready structure makes professional help more valuable.'],
]

const faqLd = buildFaqLd(faqs)
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: 'var(--white)', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function PrivateLimitedRegistrationCostBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Company Incorporation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Private Limited Company Registration Cost in India (2026)</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 18, 2026</span><span aria-hidden>&bull;</span><Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}><strong>MCA fee:</strong> SPICe+ filing carries <strong>no government fee up to Rs 15 lakh authorised capital</strong>; a slab-based fee applies above that.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The other statutory items are small and per-person or per-state: name reservation, <strong>DSC for each director</strong>, and <strong>state stamp duty</strong> on the Memorandum and Articles. PAN and TAN come through SPICe+ without a separate fee.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The professional fee pays for name and document accuracy and ROC follow-up, not for the government fee.</li>
                  <li style={{ marginBottom: '0.4rem' }}>A "Rs 999" offer usually leaves out stamp duty, DSCs, a customised MoA and AoA, bank account support and everything after incorporation. Ask for the total in writing.</li>
                  <li style={{ marginBottom: 0 }}>A typical end to end timeline in published guides is about <strong>10 to 20 working days</strong>, longer if the ROC raises queries.</li>
                </ul>
              </div>
              <ServiceOffer variant="startup" />
              <p>&quot;Private limited company registration in 2026&quot; is advertised at anything from Rs 999 to well over Rs 20,000. The gap is rarely the government. Most of the real cost is a handful of small statutory items, the DSCs, and the professional work of getting the documents right. This guide separates the two so you can read any quote line by line. For the full process, see our <Link href="/blog/company-incorporation-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>private limited incorporation guide</Link>.</p>
              <h2>The government and statutory costs, line by line</h2>
              <p>These are the items that exist regardless of who files for you. Amounts below are what published fee guides report. Confirm them against the current MCA fee schedule and your state&apos;s stamp duty rules before you budget, because several change with authorised capital and state.</p>
              <div style={{ overflowX: 'auto' }}>
<table style={tableStyle}>
<thead><tr><th style={thStyle}>Item</th><th style={thStyle}>What it is</th><th style={thStyle}>Typical cost</th></tr></thead>
<tbody>
<tr><td style={tdStyle}>SPICe+ filing fee (MCA)</td><td style={tdStyle}>Government fee for incorporation through SPICe+ Part B</td><td style={tdStyle}>Nil where authorised capital is up to Rs 15 lakh (Rule 38 of the Companies (Incorporation) Rules, 2014). A slab-based fee applies above Rs 15 lakh.</td></tr>
<tr><td style={tdAltStyle}>Name reservation</td><td style={tdAltStyle}>Name approval through SPICe+ Part A or RUN</td><td style={tdAltStyle}>Published guides put it at about Rs 1,000 per application, and a rejected name means paying again. See our <Link href="/blog/company-name-reservation-run-form-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>name reservation guide</Link>.</td></tr>
<tr><td style={tdStyle}>Digital Signature Certificate (DSC)</td><td style={tdStyle}>Class 3 DSC for each subscriber and director who signs</td><td style={tdStyle}>Charged per person by the DSC provider, usually in the low thousands of rupees each, often with 1-year or 2-year validity. See the <Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DSC and DIN guide</Link>.</td></tr>
<tr><td style={tdAltStyle}>DIN</td><td style={tdAltStyle}>Director Identification Number for the first directors</td><td style={tdAltStyle}>No separate government fee when applied through SPICe+</td></tr>
<tr><td style={tdStyle}>PAN and TAN</td><td style={tdStyle}>Allotted through the SPICe+ integration</td><td style={tdStyle}>No separate government fee</td></tr>
<tr><td style={tdAltStyle}>Stamp duty on MoA and AoA</td><td style={tdAltStyle}>State duty on the Memorandum and Articles</td><td style={tdAltStyle}>Depends on the state and on authorised capital. Small for a small capital, but sources quote very different formulas for Maharashtra, so get the exact figure for your capital from the state schedule or your CA.</td></tr>
</tbody>
</table>
</div>
              <h2>Stamp duty: why one number does not fit everyone</h2>
              <p>Stamp duty on the Memorandum and Articles is levied by the state where the registered office sits, not by the MCA. In Maharashtra it is linked to the authorised capital and the articles, and it rises as authorised capital rises. The practical advice is to keep authorised capital realistic at the start (you can increase it later with an additional filing and stamp duty on the increase) and to ask for the exact stamp duty as a separate line in any quote. We have deliberately not quoted a single Maharashtra figure because published guides disagree and the state revises its schedule from time to time.</p>
              <h2>What the professional fee actually covers</h2>
              <p>Government fees for a small company are modest. The professional fee pays for work that decides whether your incorporation is clean or comes back for rework: choosing a name that will clear (class of business, similarity checks, trademark conflicts); drafting a Memorandum and Articles that match your actual shareholding and director roles instead of a generic template; checking director eligibility and identity and address proofs; preparing and filing SPICe+ Part A and Part B and the linked forms; handling ROC queries if the application is sent back; and delivering the incorporation certificate, PAN and TAN in a usable form.</p>
              <p>You can do this yourself. The common failure is a ROC query on a mismatched name, address proof or capital structure that adds days. If your structure is anything other than two resident Indian directors with plain equity (for example a foreign shareholder, a corporate shareholder, or a startup with an investor in mind), professional help is cheaper than the delay.</p>
              <h2>What a "Rs 999 incorporation" usually leaves out</h2>
              <p>A very low headline price is usually not false, it is partial. Before you pay, ask whether each of the following is included, in writing.</p>
              <ul>
                <li>Government fee, stamp duty and DSC (often &quot;at actuals&quot;, added later)</li>
                <li>Name reservation attempts beyond the first</li>
                <li>A customised Memorandum and Articles, or only a standard template</li>
                <li>Directors&apos; DIN and the second and later DSCs</li>
                <li>Commencement of business declaration and the first auditor appointment</li>
                <li>Opening the bank account and follow-up with the bank</li>
                <li>GST registration, if you need one</li>
                <li>Ongoing compliance after incorporation (annual ROC filing, income tax return, books)</li>
              </ul>
              <h2>Timeline</h2>
              <p>Where documents are ready and the name clears first time, one published estimate puts a realistic end to end timeline at roughly 10 to 20 working days from DSC procurement to the incorporation certificate, and longer if the ROC raises queries. Treat that as a guide, not a promise: the ROC&apos;s processing time and any query cycle are outside anyone&apos;s control.</p>
              <h2>Costs that come after the certificate</h2>
              <p>The incorporation fee is the smallest part of year one. Budget for accounting, the statutory auditor, annual ROC filings (AOC-4, MGT-7, DIR-3 KYC), the income tax return, and GST if applicable. Our <Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>post-incorporation checklist</Link> covers the first 30 days, and the <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual ROC filing guide</Link> covers the recurring filings.</p>
              <h2>How to compare two quotes</h2>
              <p>Ask each provider for one table that lists professional fee, government fee, stamp duty, DSC count and validity, name reservation attempts included, and what is excluded. Add them up. The cheapest headline is often not the cheapest total. For a structured start with the right entity type and documents, see our <Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>company incorporation service</Link>.</p>

            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', marginTop: '2rem' }}>
              <strong>Official sources:</strong> Rule 38 of the Companies (Incorporation) Rules, 2014 (SPICe+ fee), the Companies Act, 2013, and the Maharashtra Stamp Act schedule for stamp duty on the Memorandum and Articles. See <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Ministry of Corporate Affairs</a>.
            </p>
            <PostFooterLinks slug="private-limited-company-registration-cost-india-2026" />

            <PostCTA
            heading="Want one written quote with nothing left out?"
            description="We handle name approval, documents, SPICe+ filing and the first-month compliance for Indian companies, with inclusions and exclusions stated up front."
            secondaryLabel="Incorporation Services"
            secondaryHref="/company-incorporation"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/company-incorporation-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Private Limited Company Incorporation Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/company-name-reservation-run-form-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Name Reservation (SPICe+ Part A / RUN)</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DSC and DIN Application Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>Post-Incorporation Checklist: First 30 Days</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/llp-vs-private-limited-comparison-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP vs Private Limited Company</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}
