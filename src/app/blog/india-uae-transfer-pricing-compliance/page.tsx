import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'India-UAE Transfer Pricing: Compliance for Cross-Border Transactions',
  description: 'TP obligations for Indian companies transacting with UAE group entities since UAE Corporate Tax: dual compliance, DTAA Article 9 relief, Free Zone considerations, and common transaction scenarios.',
  keywords: [
    'India UAE transfer pricing', 'UAE corporate tax transfer pricing', 'India UAE DTAA transfer pricing',
    'UAE free zone related party transactions', 'India UAE management fee transfer pricing',
    'UAE qualifying free zone person transfer pricing', 'cross border transfer pricing India UAE',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/india-uae-transfer-pricing-compliance' },
  openGraph: {
    title: 'India-UAE Transfer Pricing: Compliance for Cross-Border Transactions',
    description: 'Dual compliance, DTAA Article 9 relief, Free Zone considerations, and common India-UAE transaction scenarios.',
    url: 'https://agrawalkhandelwal.com/blog/india-uae-transfer-pricing-compliance',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India-UAE Transfer Pricing Compliance',
    description: 'Dual compliance, DTAA relief, and common transaction scenarios for India-UAE related parties.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'India-UAE Transfer Pricing: Compliance for Cross-Border Transactions',
  description: 'Transfer pricing considerations for Indian companies transacting with UAE group entities since UAE Corporate Tax introduced its own TP rules.',
  datePublished: '2026-08-16', dateModified: '2026-08-16',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/india-uae-transfer-pricing-compliance',
}

const faqs: [string, string][] = [
  ['Do India-UAE related-party transactions require transfer pricing documentation?', 'Yes. Indian entities must evaluate international transactions with UAE associated enterprises under Indian transfer pricing rules. UAE entities may also have their own Corporate Tax transfer pricing disclosure and documentation obligations, since UAE Corporate Tax rules apply the arm\'s length principle.'],
  ['Does UAE Corporate Tax apply transfer pricing rules to Free Zone companies?', 'Yes. Free Zone entities must still consider UAE transfer pricing and related-party rules. Free Zone tax status does not remove the arm\'s length requirement for transactions with related parties, and it can affect Qualifying Free Zone Person eligibility.'],
  ['Is Form 3CEB required for transactions with a UAE group company?', 'Form 3CEB is required where international transactions exceed Rs 1 crore, including qualifying transactions with UAE associated enterprises. It is due October 31, following the same rules that apply to any other foreign group transaction.'],
  ['Can the India-UAE DTAA provide relief from transfer pricing double taxation?', 'The India-UAE DTAA can be relevant where an Indian transfer pricing adjustment causes the same income to be taxed in both jurisdictions. Article 9 and the competent-authority process may support correlative relief, subject to the treaty and applicable conditions.'],
  ['How should an Indian company support management fees paid to a UAE group entity?', 'Maintain a signed agreement, detailed service descriptions, allocation workings, invoices, and evidence that the Indian company actually received and benefited from the services. A generic group charge without proof of benefit is vulnerable to challenge in both India and the UAE.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function IndiaUAETPBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Transfer Pricing</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>India-UAE Transfer Pricing Compliance for Cross-Border Group Transactions</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 16, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>UAE Corporate Tax (9%, effective June 2023) means UAE group entities now face their <strong>own transfer pricing compliance</strong>.</li>
                  <li style={{ marginBottom: '0.4rem' }}>India and UAE may <strong>both</strong> require documentation for the same controlled transaction - it is not a one-country filing exercise anymore.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The India-UAE DTAA can support correlative relief under Article 9 where an adjustment creates double taxation.</li>
                  <li style={{ marginBottom: 0 }}>Free Zone status does not remove the need to price related-party transactions at arm&apos;s length.</li>
                </ul>
              </div>

              <p>The UAE introduced Corporate Tax at 9%, effective June 2023, with a framework that includes transfer pricing rules aligned broadly with OECD principles. A UAE group entity is no longer operating in a jurisdiction that can be treated as having no transfer pricing implications. For an Indian company dealing with a UAE parent, subsidiary, Free Zone entity, or related service company, every transaction must now be assessed through two lenses: Indian transfer pricing rules and Form 3CEB requirements, and UAE Corporate Tax transfer pricing disclosure and documentation requirements applicable to the UAE entity. The same intercompany invoice may need to be supported in both countries - a pricing position acceptable in India may still create questions in the UAE if the UAE entity&apos;s functions, risks, or profit allocation are not properly documented.</p>

              <h2>The Indian Compliance Position</h2>
              <p>Indian companies must identify and benchmark international transactions with UAE associated enterprises - this can include services, royalties, loans, guarantees, purchases, sales, cost allocations, and management fees. Where international transactions exceed <Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Rs 1 crore, Form 3CEB is required</Link> and due October 31. The Indian entity should maintain contemporaneous documentation explaining the transaction, functional profile, selected method, and arm&apos;s length outcome. For large groups, <Link href="/blog/master-file-local-file-cbcr-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Master File and CbCR</Link> obligations may also need review: Master File Part A triggers at Rs 50 crore international transactions, Part B at Rs 500 crore consolidated group revenue plus Rs 50 crore transactions or Rs 10 crore intangibles, and CbCR only above Rs 5,500 crore consolidated group revenue.</p>

              <h2>The UAE Compliance Position</h2>
              <p>The UAE transfer pricing framework applies the arm&apos;s length principle to transactions and arrangements between related parties and connected persons. Documentation and disclosure obligations depend on the entity, transaction profile, and applicable thresholds. Before finalising pricing, confirm the UAE entity&apos;s requirements with UAE tax advisers, including Corporate Tax registration and filing position, related-party and connected-person disclosures, Local File and Master File requirements where applicable, and the interaction with Free Zone qualifying-income conditions. Do not assume an Indian transfer pricing report is automatically sufficient for UAE purposes - it may be a valuable factual starting point, but local terminology, reporting requirements, and documentation expectations can differ.</p>

              <h2>Common India-UAE Transaction Scenarios</h2>

              <h3>Indian Company Provides Services to a UAE Entity</h3>
              <p>An Indian technology, accounting, engineering, or support company may provide services to a UAE group entity. If the Indian company is a routine service provider, <Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>TNMM on operating cost</Link> may often be considered. The file should establish what services are delivered, who controls the customer relationship, whether the Indian company owns any IP, and which entity bears market and delivery risk. The UAE recipient should also be able to demonstrate that it received and benefited from the services.</p>

              <h3>UAE Entity Licenses IP to Indian Subsidiary</h3>
              <p>A UAE entity may license software, trademarks, technology, or know-how to an Indian subsidiary. Royalty pricing requires more than a percentage copied from another group contract - the analysis should consider IP ownership, development and enhancement functions, territorial rights, expected benefit, exclusivity, term, product profitability, and comparable licence data. CUP may be useful where reliable licensing comparables exist, but they require careful adjustment for the specific terms.</p>

              <h3>Management-Fee Flows</h3>
              <p>Management fees are frequently challenged because a charge must be supported by actual services and business benefit. Generic group-management invoices with broad descriptions create risk in both jurisdictions. Maintain service schedules, emails, deliverables, allocation keys, and evidence that the Indian or UAE entity benefited - shareholder activities and duplicative services should not be charged merely because they are incurred at the group level.</p>

              <h3>Loans and Guarantees</h3>
              <p>Intra-group loans and guarantees should be documented with currency, tenure, repayment terms, credit profile, security, and purpose. Interest or guarantee fees should be benchmarked using appropriate comparable data or a relevant <Link href="/blog/safe-harbour-rules-transfer-pricing-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>safe harbour framework</Link> where eligible.</p>

              <h2>India-UAE DTAA and Article 9</h2>
              <p>The India-UAE Double Taxation Avoidance Agreement is relevant where a transfer pricing adjustment results in the same income being taxed in both countries. Article 9 addresses associated enterprises and provides the treaty basis for corresponding or correlative relief, subject to the treaty and competent-authority process. In practical terms, if India increases the taxable profit of an Indian entity because it considers a UAE-related transaction underpriced, the group should evaluate whether the UAE can provide corresponding relief. Do not wait until litigation is complete to assess MAP - where double taxation is significant, coordinate Indian and UAE advisors early and preserve a consistent narrative across both countries. See our guide on <Link href="/blog/transfer-pricing-audit-assessment-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>handling a TP assessment and MAP</Link> for the fuller process.</p>

              <h2>Free Zone Entities and Transfer Pricing</h2>
              <p>A UAE Free Zone entity may seek Qualifying Free Zone Person status and the related tax benefits available under UAE law. That status does not mean related-party transactions can be priced arbitrarily. Transactions involving a Free Zone entity should be reviewed for whether the activity and income qualify under UAE rules, whether related-party arrangements meet arm&apos;s length requirements, whether the UAE entity has adequate substance and decision-making, and whether the transaction documentation is consistent with actual functions. For example, an Indian company paying a service fee to a UAE Free Zone entity should be able to explain why the UAE entity performs the service, has the personnel or capability to do so, and earns the proposed return.</p>

              <h2>Avoid Inconsistent Characterisation</h2>
              <p>A recurring cross-border risk is inconsistent characterisation. The Indian file may describe the UAE entity as a principal entrepreneur, while UAE records show that strategic personnel and risk control remain in India - that inconsistency can undermine both filings. Agree internally on legal ownership of intangibles, who makes key decisions, who employs the people performing value-creating functions, who bears market and development risk, and how residual profit is allocated. The legal agreements should then match operational conduct, invoices, and accounting treatment.</p>

              <h2>CFO Action Plan for FY 2026-27</h2>
              <ul>
                <li>Map every India-UAE related-party transaction and transaction value</li>
                <li>Confirm Indian Form 3CEB, Master File, and CbCR exposure</li>
                <li>Confirm UAE Corporate Tax and transfer pricing documentation requirements</li>
                <li>Review all intercompany agreements for actual conduct and pricing clauses</li>
                <li>Obtain benefit evidence for services and management fees</li>
                <li>Assess Free Zone status and related-party implications with UAE advisers</li>
                <li>Establish one shared fact pack for Indian and UAE compliance teams</li>
              </ul>
              <p>The objective is not simply to meet two filing requirements - it is to ensure the group can explain, consistently in India and the UAE, where value is created and why each entity earns its return.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Have India-UAE related-party transactions to price?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We coordinate Indian transfer pricing documentation with UAE Corporate Tax compliance, drawing on our UAE Corporate Taxation-certified expertise.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/uae-tax-advisory" className="btn btn-outline">UAE Tax Advisory</Link>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map(([q, a], i) => (
                  <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{q}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Methods Explained</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/uae-corporate-tax-indian-impact" style={{ color: 'var(--primary)', fontWeight: 600 }}>UAE Corporate Tax: Impact on Indian Businesses</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB: Due Date, Process &amp; Penalties</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}
