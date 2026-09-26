import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'CSR Fund Utilisation: Compliance for Receiving Trusts' },
  description: 'What a trust or NGO must do to legally receive and account for corporate CSR funding: CSR-1 registration, utilisation certificates, and reporting obligations to the funding company.',
  keywords: [
    'CSR-1 registration NGO', 'CSR fund utilisation certificate', 'trust receiving CSR funds', 'CSR implementing agency compliance',
    'CSR-1 form MCA', 'NGO CSR compliance India', 'CSR reporting to company', 'CSR utilisation report format',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/csr-fund-utilisation-compliance-for-receiving-trusts' },
  openGraph: {
    title: 'CSR Fund Utilisation: Compliance for Receiving Trusts',
    description: 'CSR-1 registration, utilisation certificates, and the reporting obligations a trust takes on the moment it accepts corporate CSR money.',
    url: 'https://agrawalkhandelwal.com/blog/csr-fund-utilisation-compliance-for-receiving-trusts',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSR Fund Utilisation: Compliance for Receiving Trusts',
    description: 'CSR-1 registration, utilisation certificates, and the reporting obligations a trust takes on the moment it accepts corporate CSR money.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('CSR Fund Utilisation: Compliance for Receiving Trusts', 'csr-fund-utilisation-compliance-for-receiving-trusts')

const articleLd = buildArticleLd({
  headline: 'CSR Fund Utilisation: Compliance for Receiving Trusts',
  description: 'CSR-1 registration, utilisation certificates, and reporting obligations for a trust or NGO receiving corporate CSR funding under Section 135 of the Companies Act.',
  datePublished: '2026-09-12',
  slug: 'csr-fund-utilisation-compliance-for-receiving-trusts',
})

const faqs: [string, string][] = [
  [
    'Can any registered trust receive CSR funds from a company?',
    'No. Since the 2021 amendment to the CSR rules, a trust, society, or Section 8 company can only receive CSR funds as an implementing agency if it has registered with the Ministry of Corporate Affairs on Form CSR-1 and obtained a CSR Registration Number. Without this registration, a company cannot count money given to that entity as valid CSR spend, regardless of how genuine the underlying project is.',
  ],
  [
    'What are the eligibility conditions for CSR-1 registration?',
    'The implementing entity generally needs an established track record, commonly understood as at least three years of relevant activity, along with valid registration under Section 12A and Section 80G of the Income Tax Act. An exception exists for entities a company has itself established specifically to carry out CSR activities. The form must be digitally verified by a practising professional (CA, CS, or CMA) before submission to the Registrar.',
  ],
  [
    'What is a utilisation certificate and why does the trust need to issue one?',
    'A utilisation certificate is the trust\'s formal confirmation to the funding company, and ultimately to the company\'s board and statutory auditor, that CSR money received was actually spent on the stated project and not diverted, parked idle, or spent on unrelated activity. The company\'s own CSR disclosure and board report depend on this confirmation, so the receiving trust is effectively part of the company\'s compliance chain, not just a recipient of a grant.',
  ],
  [
    'What happens if a trust is unable to spend the CSR funds within the same financial year?',
    'Unspent CSR amounts for an ongoing project are required to be transferred by the company to a designated "Unspent CSR Account" and utilised within three financial years of transfer; amounts remaining unspent for a project not classified as ongoing must be transferred to a fund specified in Schedule VII, such as the PM CARES Fund, within six months of the financial year-end. The receiving trust needs to communicate delays or scope changes to the company promptly, since the company carries the compliance and reporting burden for unspent amounts, not the trust in isolation.',
  ],
  [
    'Does receiving CSR funds change the trust\'s own income tax exemption position?',
    'CSR receipts are treated as income of the trust for the purpose of computing its own exemption under Sections 11-12, so the trust must ensure this income is applied towards its charitable objects in the same way as any other donation, and reflected correctly in its books, audit report (Form 10B/10BB), and ITR-7. It does not automatically disqualify the exemption, but poor bookkeeping around CSR receipts is a common source of mismatches at assessment.',
  ],
  [
    'Is there a standard format for the utilisation certificate and reporting to the company?',
    'There is no single government-prescribed format binding on every trust; the format and frequency (often quarterly or milestone-based) are usually set out in the grant agreement or MoU between the company and the implementing trust. What matters substantively is that the certificate ties spend to the approved project, is signed by an authorised trustee, and is supported by the trust\'s own books, since the company\'s statutory auditor may seek this evidence during the company\'s own audit.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function CsrFundUtilisationComplianceBlog() {
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
              <span className="section-badge">Trusts &amp; NGOs</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                CSR Fund Utilisation: Compliance for Receiving Trusts
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 12, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>A trust cannot legally receive company CSR money unless it has registered on <strong>Form CSR-1</strong> with the MCA and holds a CSR Registration Number.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Eligibility generally needs an established track record plus valid <strong>12A and 80G</strong> registration.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The trust must issue <strong>utilisation certificates</strong> confirming funds were spent on the approved project, since the company&apos;s own CSR disclosure depends on this.</li>
                    <li style={{ marginBottom: 0 }}>CSR receipts count as the trust&apos;s income for its own exemption computation and must be reflected correctly in its books and audit report.</li>
                  </ul>
                </div>

                <p>Most guidance on Corporate Social Responsibility under Section 135 of the Companies Act, 2013, is written for the company writing the cheque. Far less is written for the trust receiving it, even though the receiving trust carries real, distinct compliance obligations of its own, obligations that start before a single rupee changes hands and continue through reporting after the money is spent. Get this wrong and the consequence is not abstract: the company cannot count the grant as valid CSR spend, which usually means the funding relationship ends and the trust\'s credibility with other corporate donors takes a hit.</p>

                <h2>Step One: CSR-1 Registration Is a Precondition, Not a Formality</h2>
                <p>Since the CSR rules were tightened in 2021, a company can only route CSR spend through an implementing agency, whether the company\'s own foundation or an external trust, society, or Section 8 company, if that entity has registered with the Ministry of Corporate Affairs on <strong>Form CSR-1</strong> and been issued a unique CSR Registration Number. This is filed by the trust itself (not the funding company) and must be digitally verified by a practising Chartered Accountant, Company Secretary, or Cost Accountant before it goes to the Registrar. There is no government filing fee for the form.</p>
                <p>Eligibility for CSR-1 registration generally requires the trust to have an established track record of relevant activity, commonly understood as at least three years, and to hold valid registration under <strong>Section 12A</strong> and <strong>Section 80G</strong> of the Income Tax Act. A newly formed entity that a company sets up specifically to run its own CSR programme is an exception to the track-record requirement. In practice, a trust approaching corporate donors without CSR-1 registration is simply not fundable for CSR purposes, no matter how strong the project proposal, so this should be treated as a prerequisite step, not something to sort out after a company has already committed funds.</p>

                <h2>Step Two: Understand What the Company Needs From You</h2>
                <p>The company funding the project carries its own statutory reporting burden: CSR spend disclosure in the board\'s report, and specific treatment of any unspent amount. Unspent CSR money tied to an ongoing project must be transferred by the company into a designated Unspent CSR Account and utilised within three financial years of transfer; unspent money for a non-ongoing project must go to a Schedule VII fund (such as the PM CARES Fund) within six months of the financial year-end. None of this is the trust\'s direct legal obligation, but it shapes what the company will demand from the trust: timely utilisation, timely reporting, and early warning if a project is falling behind schedule, because a stalled project on the trust\'s end becomes an unspent-fund compliance problem on the company\'s end.</p>

                <h2>Utilisation Certificates: The Core Ongoing Obligation</h2>
                <p>The practical, recurring compliance item for a receiving trust is the <strong>utilisation certificate</strong>, a formal statement confirming that funds received were spent on the approved project and not diverted or left idle. There is no single MCA-prescribed format binding every grant; the format, frequency (commonly quarterly or tied to project milestones), and level of detail are usually specified in the grant agreement or MoU signed between the company and the trust at the outset. What matters is substance over form: the certificate should tie actual expenditure to the approved project heads, be signed by an authorised trustee, and be backed by the trust\'s own books and vouchers, because the company\'s statutory auditor can and does ask for this supporting evidence during the company\'s own CSR audit.</p>
                <p>Trusts that treat the utilisation certificate as a light-touch cover letter, rather than a document that needs to reconcile to actual project accounting, are the ones that run into trouble when a company\'s auditor asks follow-up questions. Maintaining project-wise ledgers from day one, rather than reconstructing spend after the fact, is the difference between a routine certificate and a scramble.</p>

                <h2>The Trust\'s Own Tax Position on CSR Receipts</h2>
                <p>CSR funds received by the trust are not a special, off-books category; they are ordinary income of the trust for the purpose of computing its own exemption under Sections 11-12, and must be applied towards the trust\'s charitable objects in the same way as any other donation to preserve that exemption. This has a direct knock-on effect on the trust\'s own recurring filings: CSR receipts need to be correctly reflected in its books, in the audit report (Form 10B or 10BB), and in its ITR-7, the deadlines for which are covered in our companion guide on the <Link href="/blog/annual-compliance-calendar-for-ngos-and-trusts-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual compliance calendar for NGOs and trusts</Link>. A trust juggling multiple corporate CSR relationships alongside its regular donor base should keep CSR income separately tagged in its accounting from the start, both for the utilisation certificate and for its own tax filings.</p>

                <h2>A Practical Checklist Before Accepting CSR Funds</h2>
                <ul>
                  <li>Confirm CSR-1 registration is current and the CSR Registration Number is on file.</li>
                  <li>Confirm 12A and 80G registration are both current, not lapsed or pending renewal.</li>
                  <li>Get the utilisation certificate format and reporting frequency agreed in writing before the first tranche is released.</li>
                  <li>Set up project-wise accounting from the first rupee received, not retroactively.</li>
                  <li>Flag delays or scope changes to the funding company early, given the company\'s own unspent-fund transfer deadlines.</li>
                  <li>Reflect CSR income correctly in the trust\'s own books, audit report, and ITR-7.</li>
                </ul>
                <p>Handled well, CSR funding is one of the more durable and repeatable sources of grant income available to an Indian trust. Handled loosely, a single missed utilisation certificate or a lapsed 12A registration can end a relationship a trust spent years building.</p>
              </div>

              <PostCTA
            heading="Setting up your trust to receive CSR funding?"
            description="We handle CSR-1 registration, 12A/80G compliance, and project-wise accounting for trusts working with corporate CSR partners."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-compliance-calendar-for-ngos-and-trusts-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual Compliance Calendar for NGOs and Trusts in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/political-party-donations-and-section-80ggc-deduction" style={{ color: 'var(--primary)', fontWeight: 600 }}>Political Party Donations &amp; Section 80GGC Deduction</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Compliance Calendar: Year 1-3</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Compliance Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
