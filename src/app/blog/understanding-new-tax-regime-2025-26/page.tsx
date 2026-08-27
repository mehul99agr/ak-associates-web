import Link from 'next/link'
import type { Metadata } from 'next'
import { BASE_URL, BOOKING_LINK, WHATSAPP_ARTICLE_LINK } from '@/lib/constants'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import PostCTA from '../_components/PostCTA'

const SLUG = 'understanding-new-tax-regime-2025-26'
const TITLE = 'Understanding the New Tax Regime'
const DATE = 'March 18, 2026'
const ISO_DATE = '2026-03-18'
const CATEGORY = 'Tax Planning'
const META_DESCRIPTION = 'The FY 2025-26 new tax regime explained: zero tax up to Rs 12 lakh under the Section 87A rebate, the revised slabs, the Rs 75,000 standard deduction, and who should still pick the old regime.'

export const metadata: Metadata = {
  title: TITLE,
  description: META_DESCRIPTION,
  keywords: ['new tax regime 2025-26', 'income tax slabs FY 2025-26', 'section 87A rebate 12 lakh', 'old vs new tax regime', 'standard deduction 75000', 'income tax India 2025', 'tax planning India'],
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: META_DESCRIPTION,
    url: `${BASE_URL}/blog/${SLUG}`,
    type: 'article',
  },
}

const content = `<p>These slabs sit within the broader structural overhaul brought in by the <a href="/blog/new-income-tax-act-rules-2025">new Income Tax Act 2025</a>, which renumbers and simplifies the underlying law even where the FY 2025-26 rates below stay the same.</p>

<p>From FY 2025-26 (assessment year 2026-27), the new tax regime is not just the default option, it is genuinely the better choice for most salaried taxpayers. The headline change is significant: with the enhanced Section 87A rebate, anyone with a taxable income up to Rs 12 lakh now pays zero income tax. For a salaried person, after the Rs 75,000 standard deduction, that effectively means no tax on a salary of up to Rs 12.75 lakh.</p>

<p>Here is a clear breakdown of how the new regime works this year, and how to decide whether it is right for you.</p>

<h2>The FY 2025-26 New Regime Slabs</h2>

<p>The new regime applies the following slabs to your taxable income (after the standard deduction):</p>

<ul>
<li>Up to Rs 4,00,000 — Nil</li>
<li>Rs 4,00,001 to Rs 8,00,000 — 5%</li>
<li>Rs 8,00,001 to Rs 12,00,000 — 10%</li>
<li>Rs 12,00,001 to Rs 16,00,000 — 15%</li>
<li>Rs 16,00,001 to Rs 20,00,000 — 20%</li>
<li>Rs 20,00,001 to Rs 24,00,000 — 25%</li>
<li>Above Rs 24,00,000 — 30%</li>
</ul>

<p>A 4% Health and Education Cess applies on top of the tax computed.</p>

<h2>The Section 87A Rebate: Zero Tax up to Rs 12 Lakh</h2>

<p>This is the change that matters most. Under Section 87A, if your taxable income is up to Rs 12 lakh, the rebate wipes out your entire tax liability, you pay nothing. Combined with the Rs 75,000 standard deduction available to salaried individuals and pensioners, a person earning up to Rs 12.75 lakh in salary can have a nil tax outgo.</p>

<p>One important nuance: the rebate applies to income taxed at slab rates. It does not extend to special-rate income such as long-term capital gains on equity (taxed at 12.5%). So if part of your income is capital gains, the rebate covers only your normal income, not the gains.</p>

<h2>The Standard Deduction</h2>

<p>Salaried taxpayers and pensioners get a flat Rs 75,000 standard deduction under the new regime, up from Rs 50,000 in the old regime. It is automatic, you do not need to invest or produce proof to claim it.</p>

<h2>Old Regime vs New Regime: Who Should Still Choose Old?</h2>

<p>The new regime offers lower slab rates but almost no deductions. The old regime has higher rates but lets you claim a wide range of deductions, Section 80C (up to Rs 1.5 lakh), 80D (health insurance), home loan interest under Section 24(b) (up to Rs 2 lakh), HRA, and more.</p>

<p>The old regime can still win if you have large, genuine deductions. As a rough guide, the old regime tends to make sense when your combined deductions exceed roughly Rs 3.75 to Rs 4 lakh, typically someone paying significant home loan interest plus full 80C plus HRA plus health insurance. For most other taxpayers, especially those who do not have a home loan or who do not max out 80C, the new regime now produces a lower tax bill with zero paperwork.</p>

<h2>How to Decide</h2>

<ol>
<li><strong>Add up your real deductions</strong> — 80C, 80D, home loan interest, HRA, NPS, and so on. Be honest about what you actually claim, not what you could theoretically claim.</li>
<li><strong>Compute tax under both regimes</strong> — Run your numbers through both. Our <a href="/tax-calculator">Income Tax Estimator</a> computes the new regime liability instantly.</li>
<li><strong>Pick the lower outgo</strong> — Salaried taxpayers can switch between regimes each year, so you are not locked in. Business and professional income has more restrictive switching rules.</li>
</ol>

<h2>Practical Takeaway</h2>

<p>For the majority of salaried Indians, the FY 2025-26 new regime is now the simpler and cheaper option, the Rs 12 lakh rebate threshold is a genuine relief for the middle class. The taxpayers who should pause and run the comparison are those with substantial home loan interest and fully utilised 80C, 80D, and HRA, where the old regime may still edge ahead.</p>

<p>If your situation is borderline, or if you have capital gains, multiple income sources, or business income, the regime choice interacts with how you structure your finances. That is exactly the kind of planning where a short conversation with a CA pays for itself, getting the regime choice and the timing right can save more than any single deduction.</p>`

const faqs: FaqPair[] = [
  ['What are the FY 2025-26 New Tax Regime slabs?', 'Nil up to Rs 4,00,000; 5% from Rs 4,00,001-8,00,000; 10% from Rs 8,00,001-12,00,000; 15% from Rs 12,00,001-16,00,000; 20% from Rs 16,00,001-20,00,000; 25% from Rs 20,00,001-24,00,000; and 30% above Rs 24,00,000, plus 4% Health and Education Cess.'],
  ['Who pays zero tax under the new regime?', 'Anyone with taxable income up to Rs 12 lakh pays zero tax due to the Section 87A rebate. For salaried individuals, the Rs 75,000 standard deduction effectively pushes this to Rs 12.75 lakh in gross salary before any tax is owed.'],
  ['Does the Section 87A rebate cover capital gains?', 'No. The rebate applies only to income taxed at slab rates. It does not extend to special-rate income such as long-term capital gains on equity, which is taxed separately at 12.5% regardless of your total taxable income.'],
  ['When should I still choose the old tax regime?', 'The old regime can still win if your combined deductions (Section 80C, 80D, home loan interest, HRA) exceed roughly Rs 3.75-4 lakh, typically someone with significant home loan interest plus fully utilised 80C, HRA, and health insurance.'],
]

const breadcrumbLd = buildBlogBreadcrumbLd(TITLE, SLUG)
const articleLd = buildArticleLd({ headline: TITLE, description: META_DESCRIPTION, datePublished: ISO_DATE, slug: SLUG })
const faqLd = buildFaqLd(faqs)

export default function UnderstandingNewTaxRegimeBlog() {
  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="section">
        <div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
            ← Back to Insights
          </Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">{CATEGORY}</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>{TITLE}</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>{DATE}</span>
              <span aria-hidden>•</span>
              <Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link>
              <span aria-hidden>•</span>
              <span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div
              style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Reviewed By</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>
                <Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link>, Chartered Accountant (ICAI), UAE Corporate Taxation certified. Last reviewed {DATE}.
              </p>
              <h3 style={{ fontSize: '1rem', marginTop: '1.25rem', marginBottom: '0.5rem' }}>Sources & References</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: 0 }}>Income Tax Department, Government of India — <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>incometax.gov.in</a></li>
              </ul>
            </div>

            <PostCTA
              heading="Need help with this?"
              description="Book a free consultation with our partners, or message us on WhatsApp for a quick answer."
              primaryLabel="Book Consultation"
              primaryHref={BOOKING_LINK}
              secondaryLabel="Ask on WhatsApp"
              secondaryHref={WHATSAPP_ARTICLE_LINK}
              secondaryExternal
              marginTop="1.5rem"
              background="var(--bg-surface)"
            />
          </article>
        </div>
      </div>
    </div>
  )
}
