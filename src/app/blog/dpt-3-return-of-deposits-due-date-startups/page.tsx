import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import ServiceOffer from '../_components/ServiceOffer'
import PostFooterLinks from '../_components/PostFooterLinks'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: "DPT-3 Due Date for Startups: Director Loans & Penalty" },
  description: "Startups with director loans must file DPT-3 by June 30 even with no deposits. See exempt receipts, late fees and when an auditor certificate applies.",
  keywords: ["DPT-3", "DPT-3 due date", "DPT-3 for startups", "director loan DPT-3", "return of deposits", "DPT-3 late fee", "DPT-3 exempted deposits"],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/dpt-3-return-of-deposits-due-date-startups' },
  openGraph: {
    title: "DPT-3 Due Date for Startups: Director Loans & Penalty",
    description: "Startups with director loans must file DPT-3 by June 30 even with no deposits. See exempt receipts, late fees and when an auditor certificate applies.",
    url: 'https://agrawalkhandelwal.com/blog/dpt-3-return-of-deposits-due-date-startups',
    type: 'article',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: "DPT-3 Due Date for Startups: Director Loans & Penalty",
    description: "Startups with director loans must file DPT-3 by June 30 even with no deposits. See exempt receipts, late fees and when an auditor certificate applies.",
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd("DPT-3 for Startups: Why Director Loans Still Need a Return of Deposits", 'dpt-3-return-of-deposits-due-date-startups')

const articleLd = buildArticleLd({
  headline: "DPT-3 for Startups: Why Director Loans Still Need a Return of Deposits",
  description: "Startups with director loans must file DPT-3 by June 30 even with no deposits. See exempt receipts, late fees and when an auditor certificate applies.",
  datePublished: '2026-11-18',
  dateModified: '2026-11-18',
  slug: 'dpt-3-return-of-deposits-due-date-startups',
})

const faqs: [string, string][] = [
  ["Do I need to file DPT-3 if my startup has only director loans?", "Generally yes. DPT-3 also reports certain receipts that are not deposits, and a company with a director or unsecured loan outstanding on March 31 is expected to report it. If nothing is outstanding on March 31, there is typically nothing to report."],
  ["What is the due date for DPT-3?", "June 30 each year, reporting the position as on March 31, unless MCA extends it. The return for FY 2025-26 was due on June 30, 2026."],
  ["When is a loan from a director not treated as a deposit?", "When the director gives a written declaration, at the time of giving the money, that it is not out of funds acquired by borrowing or accepting loans or deposits from others. Without the declaration, the company may have to treat it as a deposit."],
  ["Is an auditor certificate required for DPT-3?", "It is required where the return reports actual deposits. A return reporting only exempted receipts, such as declared director loans, does not need the certificate."],
  ["What happens if DPT-3 is filed late?", "An additional MCA fee applies and increases with the delay, and Rule 21 of the Deposit Rules provides a penalty for failure to file. Confirm current amounts on the MCA fee schedule. This is separate from the much heavier Section 76A penalties for breaching the deposit rules."],
  ["Are bank loans and share application money reported in DPT-3?", "Bank loans and properly held share application money are not deposits. Whether they appear in the exempted receipts part of the form depends on the form instructions, so check them with your CA while preparing the return."],
]

const faqLd = buildFaqLd(faqs)

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Startup Compliance</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>DPT-3 for Startups: Why Director Loans Still Need a Return of Deposits</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 18, 2026</span><span aria-hidden>&bull;</span><Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}><strong>DPT-3</strong> is an annual return reporting deposits and also certain money received that is <strong>not</strong> a deposit, such as loans from directors. A startup with such loans outstanding on March 31 generally has to file it.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Due date: June 30</strong> each year, reporting the position as on March 31. The FY 2025-26 return was due June 30, 2026; the FY 2026-27 return is due June 30, 2027.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Money from a <strong>director or relative of a director</strong> is an exempted receipt only if the director gives a <strong>written declaration</strong> that it is not funded by borrowing or accepting loans or deposits from others.</li>
                  <li style={{ marginBottom: '0.4rem' }}>An <strong>auditor certificate</strong> is needed where the return reports actual deposits. A return that only reports exempted receipts does not need one.</li>
                  <li style={{ marginBottom: 0 }}>Late filing attracts additional MCA fees that grow with delay, plus a Rule 21 penalty. <strong>Accepting a real deposit in breach of the rules</strong> is far more serious (Section 76A).</li>
                </ul>
              </div>
              <ServiceOffer variant="startup" />

              <p>Founders are often surprised to hear from their CA that they must file a &quot;return of deposits&quot; when the company has never taken a deposit from the public. The reason is simple. The form is not only about deposits. It also asks the company to report money received that is exempt from the deposit definition, and a startup funded by director loans has exactly that.</p>

              <h2>Who Has to File DPT-3</h2>
              <p>Every company other than a Government company that has an outstanding loan or receipt of money as on March 31, whether or not it is a deposit, is generally expected to file Form DPT-3. If nothing of this kind is outstanding on March 31, there is typically nothing to report. A startup that took an unsecured loan from a founder to cover its first year&apos;s costs is the standard example.</p>

              <h2>Due Date</h2>
              <p>DPT-3 is annual and due by <strong>June 30</strong>, reporting the position as on the preceding March 31, unless MCA extends the date. If you missed the FY 2025-26 return, file now rather than waiting for the next cycle, because the additional fee keeps growing. Add the date to your <Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup compliance calendar</Link>.</p>

              <h2>Deposit Versus Exempted Receipt</h2>
              <p>The Companies (Acceptance of Deposits) Rules, 2014 define a deposit broadly as any receipt of money by way of deposit or loan, and then list what is excluded. For a small private company, the exclusions that matter most are:</p>
              <ul>
                <li><strong>Amount received from a director or a relative of a director</strong>, provided the director furnishes a written declaration at the time of giving the money that it is not being given out of funds acquired by borrowing or accepting loans or deposits from others.</li>
                <li><strong>Bank and financial institution loans</strong>, which are not deposits.</li>
                <li><strong>Share application money</strong> received within the conditions of the Act, until it is allotted or refunded.</li>
                <li><strong>Advances for supply of goods or services</strong>, if adjusted within the prescribed period.</li>
                <li>For a <strong>private company</strong>, money from members is allowed up to a limit linked to paid-up capital, free reserves and securities premium, subject to the conditions in the Rules. Check the current wording of the Rules before relying on this.</li>
              </ul>
              <p>The catch is the declaration. Without it, a loan from a director is not automatically exempt, and the company has to treat it as a deposit and meet the deposit rules. Get the declaration in writing every time money comes in, and keep it with the company records. Related reading: <Link href="/blog/related-party-loans-and-section-185-186-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>related party loans and Sections 185 and 186</Link>.</p>

              <h2>Auditor Certificate: When It Applies</h2>
              <p>If the return reports <strong>actual deposits</strong>, an auditor certificate is required. If it reports only exempted receipts such as declared director loans, an auditor certificate is not required, though the figures must still tie to the audited books and notes. Directors should be able to produce the declarations for each exempted receipt.</p>

              <h2>Late Fee and Penalty</h2>
              <p>A late DPT-3 attracts an additional fee that rises in steps with the days of delay, so a return a few weeks late costs a small multiple of the normal fee and one many months late costs several times more. Rule 21 of the Deposit Rules also provides a penalty for failing to file, with a daily amount for continuing default. Reported figures vary across professional sources, so confirm the current amounts against the MCA fee schedule before filing.</p>
              <p>Do not confuse a late filing with a deposit breach. Accepting a deposit that the Act does not permit, or failing to repay one on time, falls under Section 76A and carries heavy penalties for the company and officers. A company that has only filed late is in a far better position than one that took money it should not have.</p>

              <h2>Practical Steps for a Startup</h2>
              <ol>
                <li>On March 31, list every loan or receipt outstanding: director loans, founder advances, shareholder loans, customer advances, bank loans.</li>
                <li>For each, record the lender, amount and whether the exempt condition (such as the director declaration) is met.</li>
                <li>Collect missing declarations before filing. Do not backdate them.</li>
                <li>Match the figures to the audited balance sheet and the related-party note.</li>
                <li>File DPT-3 by June 30 and keep the SRN with your records. See also our guide to <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual ROC filings</Link>.</li>
              </ol>
              <p>If you are raising money from friends and family or from angels, take advice before the money arrives. The classification can change whether it is a deposit, equity, or a convertible instrument, as covered in our post on <Link href="/blog/convertible-notes-vs-equity-fema-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>convertible notes versus equity</Link>. Our <Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup advisory</Link> team can structure it correctly.</p>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', marginTop: '2rem' }}>
              <strong>Official sources:</strong> Sections 73, 74 and 76A of the Companies Act, 2013; Companies (Acceptance of Deposits) Rules, 2014, including Rules 16 and 21. See <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Ministry of Corporate Affairs</a>.
            </p>
            <PostFooterLinks slug="dpt-3-return-of-deposits-due-date-startups" />

            <PostCTA segment="startup"
            heading="Not sure which of your loans must be reported in DPT-3?"
            description="We classify your director and shareholder funding, check the declarations and file DPT-3 on time."
            secondaryLabel="Startup Advisory"
            secondaryHref="/startups"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Compliance Calendar, Year 1 to 3</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/related-party-loans-and-section-185-186-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>Related Party Loans and Sections 185, 186</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7, DIR-3 KYC</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}
