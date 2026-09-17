import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: { absolute: 'Section 87A Rebate: Zero Tax Up to This Income Limit' },
  description: 'How the Section 87A tax rebate works under the old and new regimes, the marginal relief provision near the threshold, and which income (like certain capital gains) is excluded from the rebate.',
  keywords: [
    'section 87a rebate', 'income tax rebate 87a', 'zero tax income limit India',
    'section 87a new regime old regime', 'marginal relief 87a', 'section 87a capital gains',
    'rebate under section 156 income tax act 2025', 'tax rebate FY 2026-27',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/section-87a-rebate-zero-tax-limit' },
  openGraph: {
    title: 'Section 87A Rebate: Zero Tax Up to This Income Limit',
    description: 'Rebate mechanics under the old and new regimes, marginal relief, and what is excluded from the rebate.',
    url: 'https://agrawalkhandelwal.com/blog/section-87a-rebate-zero-tax-limit',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 87A Rebate: Zero Tax Up to This Income Limit',
    description: 'Old regime vs new regime thresholds, marginal relief, and the capital gains carve-out.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Section 87A Rebate: Zero Tax Up to This Income Limit', 'section-87a-rebate-zero-tax-limit')

const articleLd = buildArticleLd({
  headline: 'Section 87A Rebate: Zero Tax Up to This Income Limit',
  description: 'How the Section 87A tax rebate works under the old and new regimes, marginal relief near the threshold, and which income is excluded from the rebate.',
  datePublished: '2026-08-10',
  slug: 'section-87a-rebate-zero-tax-limit',
})

const faqs: [string, string][] = [
  [
    'What is the Section 87A rebate limit under the new tax regime?',
    'Under the new tax regime, resident individuals with total income up to the notified threshold (Rs 12 lakh for the applicable year) can claim a rebate that brings their tax liability to nil, subject to the exclusions discussed below for certain special-rate income such as specified capital gains.',
  ],
  [
    'What is the Section 87A rebate limit under the old regime?',
    'Under the old regime, the rebate is smaller and applies at a much lower income threshold (Rs 5 lakh, with a maximum rebate of Rs 12,500), reflecting the old regime\'s different slab structure. Taxpayers comparing regimes should factor this gap in, not just the headline slab rates.',
  ],
  [
    'What is marginal relief under Section 87A?',
    'Marginal relief prevents a taxpayer whose income is just above the rebate threshold from paying tax that is disproportionately larger than the amount by which their income exceeds the threshold. Instead of losing the entire rebate the moment income crosses the limit by even a small amount, the tax payable is capped so it never exceeds the excess income itself, easing the transition zone just above the cut-off.',
  ],
  [
    'Does the 87A rebate apply to capital gains?',
    'Not fully. Specified capital gains taxed at special rates, including short-term capital gains under Section 111A and long-term capital gains under Section 112/112A, are excluded from the scope of the Section 87A rebate regardless of the taxpayer\'s total income level. Other capital gains not covered by these special-rate provisions may still qualify for the rebate depending on how total income is computed; always get this checked against your specific gains before assuming zero tax.',
  ],
  [
    'Is Section 87A now Section 156 under the Income Tax Act 2025?',
    'Yes. Section 87A of the old Income Tax Act, 1961 corresponds to Section 156 under the Income Tax Act, 2025. The rebate mechanics described in this guide apply under the renumbered provision; we use the familiar old-Act number in the title since that is still the term most taxpayers search for.',
  ],
  [
    'Can non-resident taxpayers claim the Section 87A rebate?',
    'No. The Section 87A (now Section 156) rebate is available only to resident individuals; non-resident taxpayers, including NRIs, are not eligible for this rebate regardless of their total income level.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function Section87ARebateBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Income Tax</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Section 87A Rebate: Zero Tax Up to This Income Limit</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>October 4, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Under the <strong>new regime</strong>, resident individuals with total income up to Rs 12 lakh can pay zero tax via the Section 87A rebate.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Under the <strong>old regime</strong>, the rebate is smaller and kicks in at a much lower Rs 5 lakh threshold, capped at Rs 12,500.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Marginal relief</strong> softens the cliff just above the threshold so tax payable never exceeds the excess income.</li>
                  <li style={{ marginBottom: 0 }}>Specified capital gains under Sections 111A and 112/112A are <strong>excluded</strong> from the rebate regardless of total income.</li>
                </ul>
              </div>

              <p>Section 87A is the provision that lets a large number of resident individual taxpayers pay literally zero income tax, not because their income is exempt, but because a rebate wipes out the computed tax liability entirely up to a defined threshold. It is one of the most searched tax provisions every filing season, and also one of the most misunderstood, especially where capital gains are involved. This guide, now renumbered <strong>Section 156 under the Income Tax Act 2025</strong>, breaks down exactly how the rebate works under both regimes.</p>

              <h2>Rebate Thresholds: Old Regime vs New Regime</h2>
              <p>The rebate amount and the income threshold at which it applies are different under the two regimes, and taxpayers comparing which regime suits them should factor this in alongside slab rates.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Regime</th><th style={thStyle}>Income Threshold</th><th style={thStyle}>Maximum Rebate</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>New Regime</td><td style={tdStyle}>Total income up to Rs 12 lakh</td><td style={tdStyle}>Rebate that brings tax to nil (subject to exclusions below)</td></tr>
                    <tr><td style={tdAltStyle}>Old Regime</td><td style={tdAltStyle}>Total income up to Rs 5 lakh</td><td style={tdAltStyle}>Up to Rs 12,500</td></tr>
                  </tbody>
                </table>
              </div>
              <p>The gap between the two thresholds is significant, and it is one reason the new regime has become the default choice for a much larger share of individual taxpayers whose income sits in this range. See our <Link href="/blog/income-tax-slabs-fy-2026-27-old-vs-new-regime" style={{ color: 'var(--primary)', fontWeight: 600 }}>slab comparison guide</Link> for the full rate schedule under each regime before deciding which one to opt for.</p>

              <h2>Marginal Relief: Softening the Cliff at the Threshold</h2>
              <p>Without a safeguard, a taxpayer earning even a few thousand rupees above the rebate threshold would suddenly lose the entire rebate and owe tax on the full income, an outcome disproportionate to how little they crossed the limit by. <strong>Marginal relief</strong> exists precisely to prevent this: the tax payable for a taxpayer just above the threshold is capped so that it never exceeds the amount by which their income exceeds the threshold itself.</p>
              <p>In practical terms, this creates a gradual phase-out zone above the headline threshold rather than a hard cliff. A taxpayer whose income is a little above Rs 12 lakh under the new regime, for instance, does not immediately owe tax computed on the full slab structure; the marginal relief calculation is applied first, and only once income rises further does the ordinary slab-based tax overtake the marginal-relief-capped amount. This zone extends for a defined band above the threshold before ordinary slab computation takes over fully; always have your CA run the marginal relief computation directly rather than assuming the headline threshold is a hard cut-off.</p>

              <h2>What Is Excluded From the Rebate: The Capital Gains Carve-Out</h2>
              <p>This is the exclusion that catches the most taxpayers by surprise. <strong>Specified capital gains taxed at special rates are excluded from the scope of the Section 87A rebate regardless of total income</strong>, most notably short-term capital gains taxed under Section 111A (broadly, STCG on listed equity shares and equity-oriented funds subject to STT) and long-term capital gains taxed under Section 112/112A (broadly, LTCG on listed securities and certain other assets).</p>
              <p>What this means in practice: a taxpayer whose total income, including such special-rate capital gains, is within the Rs 12 lakh new-regime threshold cannot assume their entire tax liability drops to zero. The rebate does not reach the portion of tax computed on these specified capital gains; that tax remains payable even if the taxpayer's overall income would otherwise qualify for a full rebate. Other capital gains not covered by these specific special-rate provisions may still be eligible for rebate treatment depending on how the return is computed, so this needs a case-by-case check rather than a blanket assumption either way.</p>
              <p>This carve-out is a common trap for taxpayers who sold shares or equity mutual fund units during the year and assume their modest salary-plus-capital-gains income falls safely under the rebate threshold. It often does not, for the capital gains portion specifically.</p>

              <h2>Who Cannot Claim the Rebate at All</h2>
              <p>Beyond the capital gains carve-out, the rebate is available only to <strong>resident individual</strong> taxpayers. Non-resident individuals, including NRIs, cannot claim the Section 87A rebate under either regime, regardless of how low their Indian-source total income is. Hindu Undivided Families (HUFs), firms, companies, and other non-individual assessees are also outside the scope of this rebate; it is specifically an individual-taxpayer relief provision.</p>

              <h2>A Note on Section Numbering</h2>
              <p>Section 87A of the Income Tax Act, 1961 is now <strong>Section 156 under the Income Tax Act, 2025</strong>. This is a confirmed mapping, not a qualitative estimate. The rebate mechanics, thresholds, and the capital gains exclusion described above continue to apply under the renumbered section; this guide uses the familiar old-Act number in the title and throughout because that remains the term taxpayers and most professional literature still search for and cite day-to-day.</p>

              <p>The Section 87A (now Section 156) rebate is genuinely useful relief for a large share of Indian taxpayers, but "zero tax up to Rs 12 lakh" is a headline that needs the marginal relief mechanics and the capital gains exclusion layered on top before you can rely on it for your own return. If your income mix includes equity capital gains, a rental property, or a switch between regimes this year, get the actual computation checked rather than assuming the threshold alone determines your liability. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory services</Link> include full ITR computation and regime comparison for individual taxpayers.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Not sure if you qualify for zero tax this year?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We compute your actual liability under both regimes, apply marginal relief correctly, and flag any capital gains that fall outside the rebate.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <a href="https://wa.me/919527533506?text=Hi,%20I%20want%20to%20check%20my%20Section%2087A%20rebate%20eligibility." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-slabs-fy-2026-27-old-vs-new-regime" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Slabs FY 2026-27: Old vs New Regime</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}
