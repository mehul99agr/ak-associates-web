import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'POSH Act Compliance: Internal Committee Requirements for Companies' },
  description: 'When a company must form an Internal Committee under the POSH Act 2013, who must sit on it, the annual report requirement, and penalties for non-compliance including licence cancellation.',
  keywords: [
    'POSH Act compliance', 'Internal Committee POSH', 'POSH Act Internal Committee requirements',
    'Sexual Harassment Workplace Act', 'POSH annual report', 'POSH Act penalty section 26',
    'Internal Committee composition POSH', 'POSH Act 10 employees',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/posh-act-compliance-internal-committee-requirements-for-companies' },
  openGraph: {
    title: 'POSH Act Compliance: Internal Committee Requirements for Companies',
    description: 'The 10-employee threshold, Internal Committee composition, and penalties under the POSH Act, 2013.',
    url: 'https://agrawalkhandelwal.com/blog/posh-act-compliance-internal-committee-requirements-for-companies',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POSH Act Compliance: Internal Committee Requirements',
    description: 'Who must set up an Internal Committee under the POSH Act, how it must be composed, and what happens if you don\'t.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('POSH Act Compliance: Internal Committee Requirements for Companies', 'posh-act-compliance-internal-committee-requirements-for-companies')

const articleLd = buildArticleLd({
  headline: 'POSH Act Compliance: Internal Committee Requirements for Companies',
  description: 'When a company must form an Internal Committee under the POSH Act, 2013, who must sit on it, the annual report requirement, and penalties for non-compliance including licence cancellation under Section 26.',
  datePublished: '2026-09-15',
  slug: 'posh-act-compliance-internal-committee-requirements-for-companies',
})

const faqs: [string, string][] = [
  [
    'At what employee count does a company need to form an Internal Committee?',
    'Section 4 of the POSH Act requires every employer with 10 or more employees at a workplace (office, branch, or unit) to constitute an Internal Committee (IC) for that workplace. The count includes employees of all kinds engaged at that location, not just permanent staff, so contract workers, interns, and consultants working from the premises are generally factored into the headcount for this threshold.',
  ],
  [
    'Does each branch need its own Internal Committee, or is one enough for the whole company?',
    'The obligation applies workplace-wise. Where an organisation has multiple offices or branches, each administrative unit or office that independently crosses the 10-employee threshold is generally expected to have its own Internal Committee, or be covered by a committee constituted for that specific unit, rather than relying on a single IC based only at the registered/head office with no local presence for the other locations.',
  ],
  [
    'Who must be on the Internal Committee, and why does it need an external member?',
    'The IC must be headed by a senior woman employee, include at least two other employee members committed to the cause of women or with relevant experience, and mandatorily include one external member from an NGO or association working on women\'s rights or sexual harassment issues, or a person familiar with such issues. The external member exists specifically to reduce internal bias and power imbalance in how complaints are handled, since complaints often involve senior colleagues of the complainant.',
  ],
  [
    'What is the POSH annual report, and who has to file it?',
    'Every Internal Committee is required to prepare an annual report detailing the number of complaints received, resolved, and pending, and submit it to the employer, who in turn reports relevant details to the District Officer. Additionally, companies are required to disclose the number of POSH complaints received and their status in the Board\'s Report under the Companies Act, making POSH compliance visible in statutory corporate filings, not just an internal HR record.',
  ],
  [
    'What happens if a company doesn\'t constitute an Internal Committee?',
    'Non-compliance attracts a monetary penalty of up to Rs 50,000 for a first offence under Section 26 of the Act. A repeat offence, or continued non-compliance after an earlier penalty, can attract double the penalty and, more significantly, cancellation or non-renewal of any registration, licence, or business permission required by the employer to carry on its business or activity, in addition to any other penalty under the applicable law for that particular offence.',
  ],
  [
    'Does the 10-employee threshold apply only to private companies?',
    'No. The POSH Act applies broadly to any workplace, whether in the organised or unorganised sector, private or public, and covers establishments, enterprises, institutions, and organisations of any kind, including government bodies. The 10-employee threshold for mandatory Internal Committee constitution applies regardless of the entity\'s legal form, as long as it functions as a workplace employing people.',
  ],
]

const faqLd = buildFaqLd(faqs)

export default function PoshActBlog() {
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
              <span className="section-badge">Payroll & Labour Compliance</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                POSH Act Compliance: Internal Committee Requirements for Companies
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 15, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Any workplace with <strong>10 or more employees</strong> must constitute an Internal Committee (IC) under Section 4 of the POSH Act, 2013.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The IC needs a senior woman presiding officer, at least two other employee members, and a <strong>mandatory external member</strong> from an NGO or with relevant expertise.</li>
                    <li style={{ marginBottom: '0.4rem' }}>An annual report and a POSH disclosure in the company&apos;s <strong>Board&apos;s Report</strong> are both required, not optional add-ons.</li>
                    <li style={{ marginBottom: 0 }}>Non-compliance starts at a fine up to <strong>Rs 50,000</strong> and can escalate to double the penalty and <strong>cancellation of business licences</strong> under Section 26.</li>
                  </ul>
                </div>

                <p>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, commonly called the POSH Act, is one of the few labour compliance obligations that many growing companies either skip entirely or treat as a policy-document formality rather than the operational requirement it actually is. Unlike most statutory filings, the core obligation here isn't a return or a form; it's a functioning committee, with a specific composition, that has to actually be capable of receiving and handling a complaint if one arises.</p>

                <h2>The 10-Employee Threshold</h2>
                <p><strong>Section 4 of the POSH Act requires every employer to constitute an Internal Committee (IC) at each office or branch where 10 or more employees are employed.</strong> The threshold is deliberately low, catching most small and mid-sized businesses that might otherwise assume compliance obligations like this only apply once a company is much larger. The headcount used to test the threshold is generally understood to include all persons employed at that workplace, whether on a regular, temporary, ad hoc, or daily wage basis, and including contract workers, interns, and apprentices; it isn't limited to employees on the direct payroll.</p>
                <p>Because the requirement is workplace-specific, an organisation with multiple locations needs to assess each office or branch separately. A head office with 40 employees and a branch office with 12 employees both independently cross the threshold and each generally needs its own IC, or coverage arranged specifically for that unit; a single IC nominally based at the head office, with no functional presence or reachability at the branch, does not satisfy the requirement in spirit.</p>

                <h2>How the Internal Committee Must Be Composed</h2>
                <p>The Act is specific about who can sit on the IC, and this composition matters because it's what makes the committee credible to someone bringing a complaint:</p>
                <ul>
                  <li><strong>Presiding Officer:</strong> A woman employed at a senior level at the workplace. If no senior-level woman is available at that location, the Act permits nomination from another office or unit of the same employer.</li>
                  <li><strong>At least two employee members:</strong> Committed to the cause of women, or who have had experience in social work, or have legal knowledge relevant to the role.</li>
                  <li><strong>One external member:</strong> From a non-governmental organisation or association committed to the cause of women, or a person familiar with issues relating to sexual harassment. This member is mandatory, not optional, and exists specifically to bring an outside, less power-imbalanced perspective into the process.</li>
                </ul>
                <p>At least half the total members of the IC must be women. A committee that is entirely internal, without the external member, does not meet the statutory composition and is a common gap found in POSH audits, especially at smaller companies that draft a policy but never formally onboard an external NGO representative.</p>

                <h2>What the IC Actually Has to Do</h2>
                <p>Beyond simply existing on paper, a properly constituted IC is expected to: receive and register complaints of sexual harassment, conduct a time-bound inquiry into each complaint (broadly within 90 days of receipt, with the inquiry report to be acted on by the employer within a further defined period), recommend interim measures like transfer or leave for the complainant during the inquiry if requested, and maintain confidentiality of the proceedings, identities, and details involved. Employers are also separately obligated to conduct periodic awareness programmes/training for employees and IC members, and to display the consequences of engaging in sexual harassment along with IC contact details prominently at the workplace.</p>

                <h2>The Annual Report and Board's Report Disclosure</h2>
                <p>Each IC must prepare an annual report covering the number of complaints received, the number resolved or disposed of, and the number pending beyond the prescribed timeline, and submit relevant details through the employer to the District Officer as required under the Act and rules. Separately, and distinctly, companies incorporated under the Companies Act are required to disclose in their <strong>Board's Report</strong> the number of complaints received and disposed of during the year under the POSH Act. This dual reporting (statutory annual report plus corporate Board's Report disclosure) means POSH compliance data flows into a company's formal corporate filings, not just an internal HR file, and auditors and company secretaries increasingly check for this disclosure as a standard item during annual filings.</p>

                <h2>Penalties for Non-Compliance</h2>
                <p>Section 26 of the Act sets out the consequences of failing to constitute an IC, failing to act on its recommendations, or otherwise contravening the Act's provisions:</p>
                <ul>
                  <li><strong>First offence:</strong> A fine of up to Rs 50,000.</li>
                  <li><strong>Repeat offence:</strong> Double the penalty prescribed for the earlier offence, and, importantly, cancellation or non-renewal or withdrawal of any registration or licence required for carrying on the business or activity, in addition to any punishment that may apply under any other law for that same offence.</li>
                </ul>
                <p>The licence-cancellation exposure is what makes repeat non-compliance materially more serious than the headline fine suggests; it can affect a company's ability to operate, not just its compliance record.</p>

                <h2>Practical Steps to Get Compliant</h2>
                <p>For a company crossing or already past the 10-employee mark: formally constitute the IC with the required composition (including the external member), adopt and circulate a written POSH policy, display the policy and IC details at each workplace location, run at least an annual awareness session, and build the annual reporting requirement (both the IC's own annual report and the Board's Report disclosure) into the same compliance calendar used for other statutory obligations like <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual ROC filings</Link>, so it doesn't get missed as a one-off item nobody owns.</p>
              </div>

              <PostCTA
            heading="Setting up or reviewing your POSH compliance?"
            description="We help companies constitute a compliant Internal Committee, build the required policy and disclosures, and keep POSH reporting current alongside your other statutory filings."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/minimum-wages-act-compliance-for-employers" style={{ color: 'var(--primary)', fontWeight: 600 }}>Minimum Wages Act Compliance for Employers</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/payroll-compliance-checklist-for-growing-startups-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Payroll Compliance Checklist for Growing Startups in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax &amp; Compliance Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
