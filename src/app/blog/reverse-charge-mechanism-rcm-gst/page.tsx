import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Reverse Charge Mechanism (RCM) Under GST: When It Applies',
  description: 'When GST reverse charge shifts the tax liability to the recipient: goods transport agency freight, legal services from advocates, director services, security services, and how to self-invoice and claim ITC.',
  keywords: [
    'reverse charge mechanism GST', 'RCM under GST', 'RCM list of services', 'GTA reverse charge',
    'legal services RCM advocate', 'director services RCM', 'self invoice RCM GST', 'RCM ITC claim',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/reverse-charge-mechanism-rcm-gst' },
  openGraph: {
    title: 'Reverse Charge Mechanism (RCM) Under GST: When It Applies',
    description: 'The full picture of RCM under GST: notified categories, self-invoicing, payment in cash, and claiming ITC on RCM tax paid.',
    url: 'https://agrawalkhandelwal.com/blog/reverse-charge-mechanism-rcm-gst',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reverse Charge Mechanism (RCM) Under GST: When It Applies',
    description: 'When the recipient, not the supplier, must pay GST directly to the government under RCM.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Reverse Charge Mechanism (RCM) Under GST: When It Applies', 'reverse-charge-mechanism-rcm-gst')

const articleLd = buildArticleLd({
  headline: 'Reverse Charge Mechanism (RCM) Under GST: When It Applies',
  description: 'How reverse charge under GST works, the notified categories of goods and services, self-invoicing requirements, and claiming ITC on RCM tax paid.',
  datePublished: '2026-07-16',
  slug: 'reverse-charge-mechanism-rcm-gst',
})

const faqs: [string, string][] = [
  [
    'What is reverse charge mechanism (RCM) under GST?',
    'Under RCM, the liability to pay GST shifts from the supplier to the recipient of the goods or services. Instead of the supplier collecting GST from the buyer and depositing it, the buyer pays the tax directly to the government, typically by self-invoicing and remitting cash through GSTR-3B.',
  ],
  [
    'Which services are commonly covered under RCM?',
    'Frequently applicable categories include goods transport agency (GTA) freight where the GTA has not opted to pay forward charge, legal services received from an individual advocate or firm of advocates, services of a director to their company, sponsorship services, security services supplied by an unregistered or non-corporate entity to a registered business, and renting of certain motor vehicles. The notified list is periodically updated, so it is worth checking current applicability for any new category of vendor before assuming forward charge applies.',
  ],
  [
    'Does RCM apply to purchases from unregistered suppliers?',
    'RCM on purchases from unregistered persons under Section 9(4) is no longer a blanket rule; it currently applies only to specific notified categories, such as certain purchases by promoters of real estate projects and a small set of other notified goods. It is not a general rule that every purchase from an unregistered vendor triggers RCM, and businesses should not assume so without checking the current notification.',
  ],
  [
    'Can ITC be claimed on GST paid under RCM?',
    'Yes, generally. If the goods or services are used for business purposes and are not otherwise blocked under Section 17(5), the recipient can claim ITC on the GST paid under RCM in the same return period, provided it is correctly self-invoiced and reported in GSTR-3B. The credit does not depend on the supplier reporting anything on their side, since the recipient is the one depositing the tax.',
  ],
  [
    'Do I need to raise a self-invoice for RCM purchases?',
    'Yes, if the supplier is unregistered. When GST is payable under RCM and the supplier is not registered, the recipient must issue a self-invoice on the date of receipt of goods or services, since an unregistered supplier cannot issue a valid GST tax invoice. If the supplier is registered but the specific supply is still notified under RCM (such as GTA services), the supplier\'s invoice should clearly indicate that GST is payable by the recipient under reverse charge.',
  ],
  [
    'Is RCM tax paid in cash or can it be adjusted against available ITC?',
    'RCM liability must be discharged in cash; it cannot be set off against existing input tax credit balance. Once paid in cash and self-invoiced, the tax amount can then be claimed as ITC (subject to eligibility), effectively making it credit-neutral for most businesses, but the initial payment itself is a genuine cash outflow, not a book adjustment.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function RCMBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
              &larr; Back to Insights
            </Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">GST</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Reverse Charge Mechanism (RCM) Under GST: When It Applies
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 16, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Under RCM, the <strong>recipient</strong>, not the supplier, pays GST directly to the government for specific notified categories of goods and services.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Common triggers: GTA freight, legal services from advocates, director&apos;s services to their company, sponsorship, and security services from non-corporate suppliers.</li>
                    <li style={{ marginBottom: '0.4rem' }}>RCM liability must be paid in <strong>cash</strong>, never adjusted against existing ITC balance.</li>
                    <li style={{ marginBottom: 0 }}>ITC on RCM tax paid is generally available (subject to Section 17(5)), making it broadly credit-neutral once correctly self-invoiced and reported.</li>
                  </ul>
                </div>

                <p>Most GST transactions follow forward charge: the supplier charges GST on the invoice, collects it from the buyer, and deposits it with the government. Reverse charge flips that sequence for a specific, notified list of transactions, and it catches businesses off guard most often when the vendor is unregistered or falls into a category they didn&apos;t realise was notified. Getting RCM wrong (either missing it or applying it where it doesn&apos;t belong) is one of the more common GST compliance gaps we see during audits.</p>

                <h2>How Reverse Charge Works</h2>
                <p><strong>Under RCM, the recipient of goods or services, not the supplier, is liable to pay GST directly to the government.</strong> This applies under two broad legal provisions: Section 9(3), which covers specific notified categories of goods and services regardless of the supplier&apos;s registration status, and Section 9(4), which covers certain purchases from unregistered suppliers in specifically notified situations (it is not a blanket rule covering every unregistered-vendor purchase).</p>
                <p>The recipient calculates the GST payable, deposits it in cash through GSTR-3B, and where the supplier is unregistered, raises a self-invoice since the supplier cannot issue a valid GST invoice themselves.</p>

                <h2>Common Categories Notified Under RCM</h2>
                <p>The notified list is periodically updated, but the categories that come up most often in practice for services businesses and startups include:</p>
                <ul>
                  <li><strong>Goods Transport Agency (GTA) services:</strong> Freight paid to a GTA that has not opted to pay tax under forward charge. This is one of the most frequently missed RCM triggers, since freight invoices often look like any other vendor bill.</li>
                  <li><strong>Legal services:</strong> Services received from an individual advocate, senior advocate, or a firm of advocates, supplied to a business entity.</li>
                  <li><strong>Director&apos;s services:</strong> Services rendered by a director to the company, other than services rendered as an employee, are taxed under RCM in the hands of the company.</li>
                  <li><strong>Sponsorship services:</strong> Services provided by way of sponsorship to a body corporate or partnership firm.</li>
                  <li><strong>Security services:</strong> Where supplied by any person other than a body corporate to a registered person (subject to specified exceptions).</li>
                  <li><strong>Renting of motor vehicles:</strong> Where supplied by a non-body-corporate supplier to a body corporate, subject to notified conditions.</li>
                  <li><strong>Certain goods, such as specified metal scrap categories and a small set of agricultural and other notified goods,</strong> where RCM applies on purchase from an unregistered supplier under Section 9(4) in specifically notified circumstances.</li>
                </ul>
                <p>This list is not exhaustive and is updated through periodic notifications, so any business regularly engaging advocates, GTAs, or non-corporate service vendors should confirm current applicability rather than relying on a list from a prior year.</p>

                <h2>Self-Invoicing and Payment</h2>
                <ol>
                  <li><strong>Identify the RCM transaction.</strong> Check every new vendor category, especially advocates, GTAs, and director payments, against the current notified list.</li>
                  <li><strong>Self-invoice where the supplier is unregistered.</strong> Since an unregistered person cannot issue a GST-compliant tax invoice, the recipient raises a self-invoice on the date of receipt of goods or services.</li>
                  <li><strong>Calculate GST at the applicable rate</strong> for that category of goods or services, exactly as it would apply under forward charge.</li>
                  <li><strong>Pay the tax in cash</strong> through GSTR-3B; RCM liability cannot be set off against existing ITC balance, even if you have surplus credit sitting in your electronic credit ledger.</li>
                  <li><strong>Claim ITC in the same return,</strong> if the expense is otherwise eligible and not blocked under Section 17(5).</li>
                </ol>

                <h2>Why RCM Is Often Missed</h2>
                <p>Two patterns account for most RCM misses we encounter. First, businesses onboard a new advocate, security agency, or freight vendor and treat the invoice like any other business expense without checking whether reverse charge applies to that vendor category. Second, businesses assume RCM under Section 9(4) applies broadly to any unregistered-vendor purchase, when in practice the unregistered-supplier trigger is now narrow and limited to specifically notified goods, not a general catch-all.</p>
                <p>Because ITC on RCM tax paid is generally available once correctly reported, the real cost of missing RCM is rarely the tax itself; it is the interest and penalty exposure from having failed to self-invoice and pay tax in cash in the correct period, discovered later during a GSTR-9/9C reconciliation or a departmental audit. If you are preparing your <Link href="/blog/gstr-9-gstr-9c-annual-return-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual GST return</Link>, reviewing the year&apos;s RCM-eligible expense categories is a good checkpoint before filing.</p>
              </div>

              <PostCTA
            heading="Not sure which of your vendor payments fall under RCM?"
            description="We review vendor categories for RCM applicability, set up self-invoicing workflows, and handle GST notices arising from missed reverse charge liability."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/input-tax-credit-itc-gst-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Input Tax Credit Under GST: Eligibility, Reversal &amp; Blocked Credits</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gstr-9-gstr-9c-annual-return-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GSTR-9 &amp; GSTR-9C: Annual Return and Reconciliation Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration for Startups: When Required &amp; First Return Guide</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
