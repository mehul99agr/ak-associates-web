import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Startup Bank Account Opening: Documents & Common Rejections',
  description: 'The documents a newly incorporated Indian startup needs to open a current account, and the most common reasons banks reject or delay account opening, from address mismatches to shell-company flags.',
  keywords: [
    'startup current account opening india', 'company bank account documents',
    'current account rejection reasons', 'bank account for private limited company',
    'startup bank kyc documents', 'registered office proof bank account',
    'private limited company current account', 'new company bank account opening india',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/startup-bank-account-opening-documents-and-common-rejections' },
  openGraph: {
    title: 'Startup Bank Account Opening: Documents & Common Rejections',
    description: 'The KYC and incorporation documents banks need, plus the most common reasons a startup\'s current account gets rejected or delayed.',
    url: 'https://agrawalkhandelwal.com/blog/startup-bank-account-opening-documents-and-common-rejections',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Bank Account Opening: Documents & Common Rejections',
    description: 'What to have ready before you walk into the bank, and why current account applications actually get rejected.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Startup Bank Account Opening: Documents & Common Rejections', 'startup-bank-account-opening-documents-and-common-rejections')

const articleLd = buildArticleLd({
  headline: 'Startup Bank Account Opening: Documents & Common Rejections',
  description: 'Standard KYC and incorporation documents needed to open a current account for a newly incorporated Indian startup, common reasons banks reject or delay applications, and tips to speed up the process.',
  datePublished: '2026-09-13',
  slug: 'startup-bank-account-opening-documents-and-common-rejections',
})

const faqs: [string, string][] = [
  [
    'What documents does a newly incorporated startup need to open a current account?',
    'Typically the Certificate of Incorporation, MOA and AOA, PAN card of the company, a board resolution authorising account opening and naming the authorised signatories, KYC documents (PAN, Aadhaar, photograph, and often a video KYC) for all directors and authorised signatories, and proof of the registered office address such as a utility bill, rent agreement, or no-objection certificate from the property owner. Some banks also ask for the company\'s GST registration certificate if available, though this is not always mandatory at account opening stage.',
  ],
  [
    'Why do banks reject or delay startup current account applications so often?',
    'The most frequent reasons are a mismatch between the registered office address on file with the ROC/MCA and the address proof submitted to the bank, an incomplete or incorrectly worded board resolution, KYC discrepancies for one or more directors (address mismatch, expired documents, or a name variation across documents), and internal risk-flagging for certain business categories that banks treat as higher-risk for money laundering or shell-company concerns, such as crypto-adjacent businesses, certain trading or investment-advisory activities, or companies with an unusually short operating history and a large expected transaction volume.',
  ],
  [
    'How long does it typically take to open a current account after incorporation?',
    'With a complete, consistent document set and no red flags, most banks can open a current account within one to two weeks of application. Video KYC and in-person verification steps, if flagged as needed, can add time. Applications with any of the common issues described above (address mismatches, incomplete resolutions, director KYC gaps) routinely stretch to three to six weeks or longer while the bank raises queries and waits for corrected documents.',
  ],
  [
    'Can a startup use its GST-registered address if it differs from the address on the Certificate of Incorporation?',
    'The address the bank verifies against is the registered office address recorded with the Registrar of Companies (as per the Certificate of Incorporation and any subsequent INC-22 address change filing), not a separate operating or GST-registered address if they differ. If the startup operates from a different location than its ROC-registered office, it is worth ensuring the ROC records are updated first, since banks routinely cross-check the address submitted against MCA records and reject applications where the two do not match.',
  ],
  [
    'Does the type of business affect how easily a startup can open a bank account?',
    'Yes. Certain categories, cryptocurrency and virtual digital asset businesses, forex or investment advisory services, NBFC-adjacent lending or payment activities, and businesses with international clients transacting in unusual patterns, attract additional scrutiny under a bank\'s internal risk and anti-money-laundering policies. This does not mean such a startup cannot open an account, but founders in these categories should expect additional documentation requests, possibly a senior banker sign-off, and a longer timeline than a straightforward services or product business would face.',
  ],
  [
    'Should a startup open its account with a traditional bank or a fintech-focused neobank/digital account provider?',
    'Both are workable options, and the right choice depends on the founders\' priorities. Traditional banks generally offer broader lending and forex service relationships useful once the company scales, while several fintech-focused digital account platforms (operating in partnership with a licensed bank) are built specifically for faster startup onboarding with lower minimum balance requirements. Either way, the underlying KYC and incorporation document requirements described here remain largely the same, since both are ultimately bound by RBI KYC norms.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function StartupBankAccountBlog() {
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
              <span className="section-badge">Startup Advisory</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Startup Bank Account Opening: Documents &amp; Common Rejections
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 13, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>You need the <strong>COI, MOA/AOA, company PAN, board resolution, director KYC,</strong> and <strong>registered office proof</strong> to open a current account.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The most common rejection cause is an <strong>address mismatch</strong> between ROC records and the proof submitted to the bank.</li>
                    <li style={{ marginBottom: '0.4rem' }}>An incomplete board resolution or director KYC gaps are the next two most frequent issues.</li>
                    <li style={{ marginBottom: 0 }}>Certain business categories face extra scrutiny; expect a longer timeline if that applies to you.</li>
                  </ul>
                </div>

                <p>A freshly incorporated company technically exists the moment the Certificate of Incorporation is issued, but it can&apos;t actually transact, pay a vendor, receive an investor&apos;s wire transfer, or run payroll, until it has a functioning current account. Founders are often surprised by how much friction shows up at this stage, given that incorporation itself is now largely a same-window online process. Most of that friction is avoidable with the right documents ready upfront and an understanding of what actually trips up an application.</p>

                <h2>Standard Documents Required</h2>
                <p>Requirements vary slightly by bank, but the core document set for a private limited company or LLP opening its first current account is fairly consistent:</p>
                <ul>
                  <li><strong>Certificate of Incorporation (COI)</strong> issued by the Registrar of Companies.</li>
                  <li><strong>Memorandum of Association (MOA) and Articles of Association (AOA)</strong>, or the LLP Agreement for an LLP.</li>
                  <li><strong>PAN card of the company</strong> (now typically generated automatically at incorporation via the SPICe+ process).</li>
                  <li><strong>Board resolution</strong> authorising the opening of the account and specifying the authorised signatories and their operating powers.</li>
                  <li><strong>KYC documents for all directors and authorised signatories</strong>: PAN, Aadhaar, a recent photograph, and increasingly a video KYC verification call conducted by the bank.</li>
                  <li><strong>Proof of registered office address</strong>: a recent utility bill, rent or lease agreement, or a no-objection certificate from the property owner if the office is not owned by the company.</li>
                  <li><strong>GST registration certificate</strong>, where available, though most banks will open an account before GST registration is complete if the other documents are in order.</li>
                </ul>
                <p>Founders who have their <Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>post-incorporation checklist</Link> items lined up in sequence generally find this document set is already largely assembled by the time they approach a bank, since much of it overlaps with other early compliance steps.</p>

                <h2>Why Applications Get Rejected or Delayed</h2>
                <h3>1. Registered Office Address Mismatch</h3>
                <p>This is, by a wide margin, the most common reason an application stalls. Banks cross-check the address on the proof document submitted (utility bill, rent agreement) against the registered office address recorded with the Registrar of Companies. If the company has moved offices, is operating from a co-working space with a different name on the utility bill, or the founders submit a personal residence bill instead of the actual registered office proof, the mismatch triggers a query or outright rejection. The registered office address must be updated with the ROC via Form INC-22 first if it has genuinely changed; the bank will not accept a workaround where the ROC record and the physical proof point to two different places.</p>

                <h3>2. Incomplete or Incorrectly Worded Board Resolution</h3>
                <p>Banks generally expect a board resolution in a fairly specific format: it needs to clearly authorise account opening with the named bank, specify exactly which directors or officers are authorised signatories, and define their operating limits (sole signatory vs joint signatory, transaction value thresholds, etc.). A resolution that is vague on any of these points, or that was passed before the bank&apos;s exact format requirements were shared, commonly gets sent back for correction, adding a full board-approval cycle to the timeline. It is worth asking the bank for its preferred resolution template before the board meeting, rather than drafting one independently and having it rejected afterward.</p>

                <h3>3. Director KYC Issues</h3>
                <p>A common but avoidable delay: one director&apos;s Aadhaar address doesn&apos;t match their PAN records, a document has expired, or there is a name spelling variation across PAN, Aadhaar, and the incorporation documents (a common issue for directors whose name is recorded differently across older and newer identity documents). Any of these can hold up the entire account opening even if every other director&apos;s documents are clean, since banks generally require all authorised signatories&apos; KYC to clear before activating the account.</p>

                <h3>4. Shell-Company and Risk-Category Flags</h3>
                <p>Banks apply internal risk-scoring as part of their anti-money-laundering and KYC obligations, and certain patterns draw extra scrutiny regardless of how complete the paperwork is: a company with an unusually short operating history combined with an expected large transaction volume, businesses in categories like virtual digital assets/crypto, forex trading, investment advisory, or lending-adjacent activity, and companies with a complex ownership structure involving foreign shareholders or multiple layers of holding entities. None of this means the account will be refused, but founders in these categories should expect additional document requests, sometimes a senior relationship manager review, and a realistically longer timeline than a standard services business would face.</p>

                <h2>Practical Tips to Speed Up the Process</h2>
                <ul>
                  <li><strong>Confirm the registered office address is current with the ROC</strong> before applying, and use a matching utility bill or rent agreement as address proof.</li>
                  <li><strong>Ask the bank for its exact board resolution format</strong> before the board meeting that approves account opening, rather than drafting one blind.</li>
                  <li><strong>Cross-check every signatory&apos;s PAN, Aadhaar, and incorporation-document spelling</strong> for consistency before submission.</li>
                  <li><strong>Disclose the actual nature of the business clearly upfront</strong> rather than a generic description, especially if the business falls into a higher-scrutiny category; a vague description that later doesn&apos;t match actual transaction patterns is more likely to trigger a freeze later than a clear disclosure is to slow down opening now.</li>
                  <li><strong>Keep a digital folder of every document</strong> (COI, MOA/AOA, PAN, KYC, address proof) ready in one place, since most banks now run largely digital onboarding and a missing scan is a common cause of avoidable back-and-forth.</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Setting up a new company and need the account opened smoothly?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare the full document set, review board resolutions against bank formats, and help resolve address or KYC mismatches before they turn into rejections.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>Post-Incorporation Checklist: First 30 Days</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DSC &amp; DIN Application: A Director&apos;s Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Compliance Calendar: Year 1-3</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Company Incorporation Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
