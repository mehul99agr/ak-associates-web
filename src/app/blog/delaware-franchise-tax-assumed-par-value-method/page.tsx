import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import ServiceOffer from '../_components/ServiceOffer'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: "Delaware Franchise Tax: Assumed Par Value Method Explained" },
  description: "Delaware franchise tax bill looks huge? Use the Assumed Par Value Capital method: formula, worked example, March 1 deadline, penalties and the LLC difference.",
  keywords: ["Delaware franchise tax assumed par value capital method", "Delaware franchise tax calculator", "Delaware C-Corp annual report March 1", "Delaware franchise tax authorized shares method", "Delaware franchise tax Indian founder"],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/delaware-franchise-tax-assumed-par-value-method' },
  openGraph: {
    title: "Delaware Franchise Tax: Assumed Par Value Method Explained",
    description: "Why the default Delaware franchise tax bill looks huge and how the Assumed Par Value Capital method reduces it.",
    url: 'https://agrawalkhandelwal.com/blog/delaware-franchise-tax-assumed-par-value-method',
    type: 'article',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Delaware franchise tax: Assumed Par Value method",
    description: "How to avoid the default authorised-shares franchise tax bill for a Delaware C-Corp.",
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd("Delaware Franchise Tax: Assumed Par Value Method Explained", 'delaware-franchise-tax-assumed-par-value-method')

const articleLd = buildArticleLd({
  headline: "Delaware Franchise Tax: Assumed Par Value Method Explained",
  description: "Step-by-step Assumed Par Value Capital method for Delaware franchise tax, with a hypothetical worked example, deadlines and penalties, for Indian founders with a US C-Corp.",
  datePublished: '2026-11-18',
  dateModified: '2026-11-18',
  slug: 'delaware-franchise-tax-assumed-par-value-method',
})

const faqs: [string, string][] = [
  ["Why is my Delaware franchise tax bill so high?", "The notice usually shows the Authorized Shares Method, which charges by the number of shares your charter authorises. A startup with millions of authorised shares can see a five-figure amount. Delaware lets you use the Assumed Par Value Capital method instead and pay whichever is lower."],
  ["What is the minimum and maximum Delaware franchise tax?", "Per the Delaware Division of Corporations, the total tax is never below USD 175 or above USD 200,000 (USD 250,000 for Large Corporate Filers). The Assumed Par Value Capital method has its own USD 400 minimum."],
  ["How is assumed par value capital calculated?", "Divide total gross assets by total issued shares to get the assumed par. Authorised shares with a lower par are valued at the assumed par; shares with a higher par are valued at their par. The tax is USD 400 per million, or part of a million, of the resulting capital."],
  ["When is the Delaware annual report and franchise tax due, and what is the late penalty?", "March 1 for the prior calendar year, filed online. A late filing attracts a USD 200 penalty plus 1.5% interest per month on the tax and the penalty. The annual report fee is USD 50 for non-exempt domestic corporations."],
  ["Does a Delaware LLC pay franchise tax the same way?", "No. A Delaware LLC pays a flat annual tax due June 1, USD 300 in recent years, with no share-based calculation. Confirm the current amount with the Division of Corporations before paying."],
]

const faqLd = buildFaqLd(faqs)

export default function DelawareFranchiseTaxAssumedParValueBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">US Cross-Border</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Delaware Franchise Tax: How to Cut a USD 85,000 Bill to USD 400 With the Assumed Par Value Method</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 18, 2026</span><span aria-hidden>&bull;</span><span>Updated November 18, 2026</span><span aria-hidden>&bull;</span><Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Delaware&apos;s default Authorized Shares calculation charges by authorised shares and can produce a bill in the tens of thousands.</li>
                  <li style={{ marginBottom: '0.4rem' }}>You may use the Assumed Par Value Capital method and pay the lower of the two; the tax is USD 400 per million of assumed par value capital, minimum USD 400.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Total tax is never below USD 175 or above USD 200,000 (USD 250,000 for Large Corporate Filers).</li>
                  <li style={{ marginBottom: '0.4rem' }}>Annual report and tax are due March 1; late filing costs USD 200 plus 1.5% interest per month. Annual report fee is USD 50 for non-exempt corporations.</li>
                  <li style={{ marginBottom: 0 }}>Delaware LLCs pay a flat annual tax on June 1 instead, with no share-based calculation.</li>
                </ul>
              </div>
              <ServiceOffer variant="us-entity" />

              <p>The first Delaware franchise tax notice is where many Indian founders panic. A company with 10 million authorised shares and a few thousand dollars in the bank can see a bill running into five figures, and the notice shows it as the amount due. That figure is only the default calculation. Delaware lets you use a second method, and for almost every startup it is dramatically cheaper. The numbers below are illustrative and hypothetical, so run your own through the formula or ask us to.</p>

              <h2>Why the Default Bill Looks Terrifying</h2>
              <p>Delaware&apos;s Authorized Shares Method charges by the number of shares your charter authorises, not by how much the company is worth. Per the Delaware Division of Corporations, the tax is USD 175 for 5,000 shares or fewer, USD 250 for 5,001 to 10,000 shares, plus USD 85 for each additional 10,000 shares or portion of it, capped at USD 200,000. Startups usually authorise millions of shares so there is room for founders, ESOPs and investors. The tax grows with that number even when the company has no revenue.</p>

              <h2>The Assumed Par Value Capital Method</h2>
              <p>The alternative method looks at your balance sheet instead. Delaware states that you use whichever method gives the lesser tax, and the total is never below USD 175 or above USD 200,000 (USD 250,000 for corporations identified as Large Corporate Filers). The Assumed Par Value Capital (APV) method works like this:</p>
              <ol>
                <li><strong>Assumed par</strong> = total gross assets divided by total issued shares, carried to six decimal places. Gross assets come from total assets on Form 1120, Schedule L.</li>
                <li>Each authorised share whose par value is <strong>below</strong> the assumed par is valued at the assumed par. Shares whose par is higher are valued at their own par.</li>
                <li>The sum of those values is the assumed par value capital.</li>
                <li>The tax is USD 400 per million (or portion of a million) of assumed par value capital. Capital above USD 1,000,000 is rounded up to the next million. Below USD 1,000,000 it is prorated, but the USD 400 minimum applies.</li>
              </ol>

              <h2>Worked Example (Hypothetical Numbers)</h2>
              <p>Assume a Delaware C-Corp owned by an Indian founder with 10,000,000 authorised shares at a par value of USD 0.00001, 5,000,000 shares issued, and total gross assets of USD 500,000 on Schedule L.</p>
              <ul>
                <li><strong>Authorized Shares Method:</strong> USD 250 for the first 10,000 shares, plus USD 85 for each of the remaining 999 blocks of 10,000 shares = USD 250 + USD 84,915 = <strong>USD 85,165</strong>. This is the scary number on the notice.</li>
                <li><strong>APV method:</strong> assumed par = 500,000 / 5,000,000 = USD 0.100000. Par of USD 0.00001 is below that, so all 10,000,000 authorised shares are valued at USD 0.10, giving assumed par value capital of USD 1,000,000. Tax = 1 million x USD 400 = <strong>USD 400</strong>.</li>
              </ul>
              <p>Delaware&apos;s own rule is that you pay the lesser, so this company owes USD 400, plus the annual report fee (USD 50 for non-exempt domestic corporations per the Division). The difference is the whole reason the method exists. If the company raises money and gross assets jump, the assumed par rises and the APV tax rises with it, so the calculation has to be redone every year.</p>

              <h2>What You Have to Do</h2>
              <ul>
                <li>File the annual report and pay the tax online by <strong>March 1</strong> for the previous calendar year. Delaware&apos;s late charge is USD 200 plus 1.5% interest per month on the tax and the penalty.</li>
                <li>Enter the issued share count and gross assets in the online filing and choose the APV method. Do not pay the Authorized Shares figure on a notice without checking the lower alternative.</li>
                <li>Use total assets from the year-end balance sheet (the figure that goes on Schedule L) and keep that working paper on file. A mismatch with your US return invites questions.</li>
                <li>Corporations expecting franchise tax of USD 5,000 or more pay in installments through the year, which does not usually apply to a startup on the APV method.</li>
              </ul>

              <h2>LLCs Are Different</h2>
              <p>This calculation is for corporations. A Delaware LLC pays a flat annual tax instead, due <strong>June 1</strong>. The amount has been USD 300 in recent years and a late payment carries a USD 200 penalty plus interest; confirm the current figure with the Division of Corporations when you pay. Missing it also costs the LLC its good standing. For the full LLC calendar, see our <Link href="/blog/us-llc-annual-compliance-calendar-non-resident">US LLC annual compliance calendar</Link>.</p>

              <h2>Where It Fits With the Rest of Your US Compliance</h2>
              <p>A Delaware C-Corp also files its own federal return and, if it has an Indian subsidiary, Form 5471. If you are still choosing between an LLC and a C-Corp, read <Link href="/blog/us-llc-vs-c-corp-indian-founders">US LLC vs C-Corp for Indian founders</Link>. The franchise tax is cheap to get right and expensive to ignore, so build it into your annual calendar from the first year. Our <Link href="/us-cross-border">US cross-border advisory</Link> practice prepares the calculation and the filing details with a US partner who reviews and files.</p>
            </div>

            <PostFooterLinks slug="delaware-franchise-tax-assumed-par-value-method" />

            <PostCTA
              heading="Got a Delaware franchise tax notice you do not understand?"
              description="We run the Assumed Par Value calculation and help you file the annual report before March 1."
              secondaryLabel="US Cross-Border Advisory"
              secondaryHref="/us-cross-border"
            />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-vs-c-corp-indian-founders" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC vs C-Corp for Indian Founders</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-annual-compliance-calendar-non-resident" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC Annual Compliance Calendar</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/delaware-wyoming-incorporation-ein-itin-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Delaware/Wyoming Incorporation, EIN and ITIN Guide</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/us-cross-border" style={{ color: 'var(--primary)', fontWeight: 600 }}>US Cross-Border Advisory</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}
