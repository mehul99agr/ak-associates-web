import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Statement of Financial Transactions (SFT): High-Value Transaction Reporting' },
  description: 'What Form 61A / the Statement of Financial Transaction reports, who must file it, the high-value transaction thresholds banks and registrars track, and why it shows up in your AIS.',
  keywords: [
    'statement of financial transaction', 'SFT reporting', 'form 61A', 'high value transaction income tax',
    'SFT thresholds', 'section 285BA', 'reporting entities SFT', 'high value transactions bank AIS',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/statement-of-financial-transactions-sft-high-value-transaction-reporti' },
  openGraph: {
    title: 'Statement of Financial Transactions (SFT): High-Value Transaction Reporting',
    description: 'Who files Form 61A / SFT, the high-value transaction thresholds, and how it feeds your AIS and Income Tax Department risk profile.',
    url: 'https://agrawalkhandelwal.com/blog/statement-of-financial-transactions-sft-high-value-transaction-reporti',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Statement of Financial Transactions (SFT): High-Value Transaction Reporting',
    description: 'Who files Form 61A / SFT, the high-value transaction thresholds, and how it feeds your AIS.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Statement of Financial Transactions (SFT): High-Value Transaction Reporting', 'statement-of-financial-transactions-sft-high-value-transaction-reporti')

const articleLd = buildArticleLd({
  headline: 'Statement of Financial Transactions (SFT): High-Value Transaction Reporting',
  description: 'What the Statement of Financial Transaction (Form 61A) reports, who must file it, the high-value transaction thresholds, and how it surfaces in AIS.',
  datePublished: '2026-08-23',
  slug: 'statement-of-financial-transactions-sft-high-value-transaction-reporti',
})

const faqs: [string, string][] = [
  [
    'What is the Statement of Financial Transaction (SFT)?',
    'The SFT, filed in Form 61A, is a mandatory disclosure that specified reporting entities (banks, mutual funds, registrars, companies, and others) must make to the Income Tax Department about certain high-value financial transactions carried out by their customers during a financial year. It is the entity that files it, not the individual taxpayer, though the taxpayer is the one whose transaction is reported.',
  ],
  [
    'Will I get a notice just because a transaction appears in SFT?',
    'Not automatically. Appearing in SFT means the transaction is now visible to the department and typically flows into your Annual Information Statement (AIS). A notice or query only follows if the reported transaction does not reconcile with the income or investments you have disclosed in your ITR, for example if a large property purchase does not match your declared income sources for that year.',
  ],
  [
    'Do I need to file Form 61A myself as an individual taxpayer?',
    'Almost never. Form 61A is filed by the "reporting entity", banks, post offices, mutual fund houses, companies issuing shares or buybacks, property registrars, and similar institutions, not by the individual whose transaction is being reported. The only individuals who might file it are those covered as a reporting person under specific rules, which is uncommon for salaried or typical business taxpayers.',
  ],
  [
    'What happens if a reporting entity fails to file the SFT on time?',
    'The reporting entity, not the customer, faces the consequences: a penalty per day of default for late filing, and a separate, larger penalty if the entity furnishes inaccurate information or fails to file after being asked to. These obligations sit with the bank, company, or registrar, and do not fall on the taxpayer whose transaction was involved.',
  ],
  [
    'Is Form 61A the same thing after the Income Tax Act 2025?',
    'The high-value transaction reporting obligation continues under the Income Tax Act 2025 in substance, and Form 61A itself has been renumbered as part of the new-Act forms framework. Because the exact new form number was not consistently confirmed across authoritative sources at the time of writing, this guide refers to it by its familiar name, Form 61A / SFT, throughout; confirm the current form reference with your CA when the department publishes the final forms schedule.',
  ],
  [
    'How do I check what high-value transactions have been reported against my PAN?',
    'Log in to the income tax e-filing portal and open your Annual Information Statement (AIS), which consolidates SFT data reported against your PAN alongside TDS/TCS and other third-party information. Review every entry before filing your return, and use the AIS feedback option to flag anything incorrect, duplicated, or not belonging to you.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function SftHighValueTransactionBlog() {
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
              <span className="section-badge">Income Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Statement of Financial Transactions (SFT): High-Value Transaction Reporting
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 23, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>The <strong>Statement of Financial Transaction (SFT)</strong>, filed in <strong>Form 61A</strong>, is how banks, mutual funds, registrars, and companies report your high-value transactions to the Income Tax Department under Section 285BA.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Common thresholds include cash deposits of <strong>Rs 10 lakh or more</strong> in savings accounts, current account transactions above <strong>Rs 50 lakh</strong>, mutual fund/share purchases of <strong>Rs 10 lakh or more</strong>, and immovable property transactions of <strong>Rs 30 lakh or more</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>You do not file Form 61A yourself in almost all cases; the reporting entity does. But every transaction reported against your PAN shows up in your <strong>Annual Information Statement (AIS)</strong>.</li>
                    <li style={{ marginBottom: 0 }}>Mismatches between SFT-reported transactions and your ITR are a common trigger for scrutiny notices, so reconciling AIS before filing matters more than most taxpayers realise.</li>
                  </ul>
                </div>

                <p>Every large transaction you make through a bank, a mutual fund, a property registrar, or a company is more visible to the Income Tax Department than most people assume, not through some new surveillance tool but through a decades-old reporting mechanism called the Statement of Financial Transaction, filed as <strong>Form 61A</strong>. Understanding what gets reported, by whom, and at what threshold is useful both for compliance planning and for making sense of the entries you see in your Annual Information Statement (AIS) every year.</p>

                <h2>What the SFT Actually Is</h2>
                <p>Under <strong>Section 285BA</strong> of the Income Tax Act, certain "specified persons", banks, post offices, registrars of companies, sub-registrars handling property transactions, mutual fund houses, companies issuing shares, and similar institutions, are legally required to report specified high-value financial transactions carried out by their customers to the Income Tax Department. This obligation exists independently of whether the customer has done anything wrong; it is a structural data-collection mechanism, not an accusation.</p>
                <p>The reporting entity files Form 61A (annually, or half-yearly for transactions in listed securities and mutual fund units) with the tax authorities. The individual or business whose transaction is reported has no filing obligation themselves in the overwhelming majority of cases; the burden sits entirely with the institution.</p>

                <h2>The High-Value Transaction Thresholds</h2>
                <p>The specific transactions and thresholds that trigger SFT reporting include, among others:</p>
                <ul>
                  <li><strong>Cash deposits</strong> aggregating Rs 10 lakh or more in one or more savings bank accounts in a financial year.</li>
                  <li><strong>Cash deposits or withdrawals</strong> aggregating Rs 50 lakh or more in one or more current accounts in a financial year.</li>
                  <li><strong>Term deposits</strong> (other than renewals) aggregating Rs 10 lakh or more in a financial year.</li>
                  <li><strong>Purchase of shares, mutual fund units, debentures, or bonds</strong> aggregating Rs 10 lakh or more in a financial year.</li>
                  <li><strong>Purchase or sale of immovable property</strong> valued at Rs 30 lakh or more.</li>
                  <li><strong>Credit card payments</strong> aggregating Rs 1 lakh or more in cash, or Rs 10 lakh or more by any other mode, in a financial year.</li>
                  <li><strong>Foreign currency transactions</strong> aggregating Rs 2 lakh or more (such as through a foreign currency card or forex purchase).</li>
                </ul>
                <p>These figures reflect the thresholds most commonly cited across current guidance; thresholds and the list of reportable transaction categories are set out in the rules under Section 285BA and are periodically updated, so it is worth confirming the current figures with your CA rather than assuming they are permanently fixed, particularly around the transition to the Income Tax Act 2025.</p>

                <h2>Where SFT Data Ends Up: Your AIS</h2>
                <p>The reason SFT reporting matters directly to individual taxpayers, even though they never file the form themselves, is that every transaction reported against a PAN feeds into that person's <strong>Annual Information Statement</strong> on the income tax e-filing portal. If you sold a property for Rs 40 lakh, deposited Rs 12 lakh in cash across the year, or bought mutual fund units worth Rs 15 lakh, all of that shows up as line items in your AIS well before you sit down to file your return. For a closer look at how AIS compares with the older Form 26AS and how the two should be reconciled before filing, see our companion guide on <Link href="/blog/annual-information-statement-ais-vs-form-26as-what-is-the-difference" style={{ color: 'var(--primary)', fontWeight: 600 }}>AIS vs Form 26AS</Link>.</p>
                <p>This is precisely why SFT-driven mismatches are one of the more common triggers for a <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 143(1) intimation or a scrutiny notice</Link>: if a high-value property purchase or a large cash deposit does not line up with the income and sources you have disclosed in your ITR, the system flags the gap automatically, long before a human officer looks at the file.</p>

                <h2>What Happens If the Reporting Entity Gets It Wrong (or Doesn't File)</h2>
                <p>The consequences of a missed or inaccurate SFT filing fall on the reporting entity, not the taxpayer. A bank, registrar, or company that fails to furnish the statement by the due date faces a penalty computed per day of continuing default, and a separate, generally larger penalty applies if the entity furnishes inaccurate information in the statement. None of this changes the taxpayer's own obligation to accurately disclose the underlying transaction in their return; a reporting entity's error does not excuse an individual from reporting the correct income or transaction themselves.</p>

                <h2>What This Means for You as a Taxpayer</h2>
                <ul>
                  <li>Assume any transaction crossing the thresholds above is visible to the department; there is no practical way to keep it off the radar, nor should there be a reason to try.</li>
                  <li>Check your AIS every year before filing, not after receiving a notice. Entries that do not belong to you, or that appear duplicated, can be disputed through the AIS feedback mechanism.</li>
                  <li>Make sure large transactions (property sales, big mutual fund redemptions, sizeable cash movements) are properly reflected in the corresponding year's ITR, with a consistent, explainable source of funds.</li>
                  <li>If you are a business or institution that qualifies as a reporting entity yourself, treat the Form 61A filing deadline as seriously as any other statutory compliance date; the per-day penalty for default adds up quickly.</li>
                </ul>
                <p>SFT reporting is not something to be alarmed by, it is simply the data layer that increasingly underpins how the Income Tax Department cross-checks returns. Treating your AIS as a pre-filing checklist rather than a post-notice surprise is the single most effective way to stay ahead of it. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory services</Link> include AIS reconciliation and return preparation that accounts for exactly this kind of third-party reporting.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Not sure what your AIS actually reports?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We reconcile AIS and Form 26AS against your books before filing, so nothing surprises you after the fact.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20want%20to%20understand%20a%20transaction%20reported%20in%20my%20AIS." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-information-statement-ais-vs-form-26as-what-is-the-difference" style={{ color: 'var(--primary)', fontWeight: 600 }}>AIS vs Form 26AS: What Is the Difference</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-scrutiny-assessment-how-to-respond" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Scrutiny Assessment: How to Respond</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
