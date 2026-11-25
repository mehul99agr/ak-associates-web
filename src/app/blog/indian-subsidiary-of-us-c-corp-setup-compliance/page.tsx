import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import ServiceOffer from '../_components/ServiceOffer'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: 'Indian Subsidiary of a US C-Corp: Setup and Compliance' },
  description: 'How a US C-Corp sets up an Indian private limited subsidiary: FDI route, nominee, resident director, FC-GPR, transfer pricing, tax and PE risk.',
  keywords: ['Indian subsidiary of US company', 'US C-Corp Indian subsidiary', 'FC-GPR', 'resident director 182 days', 'transfer pricing Form 3CEB subsidiary'],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/indian-subsidiary-of-us-c-corp-setup-compliance' },
  openGraph: {
    title: 'Indian Subsidiary of a US C-Corp: Setup and Compliance',
    description: 'How a US C-Corp sets up an Indian private limited subsidiary: FDI route, nominee, resident director, FC-GPR, transfer pricing, tax and PE risk.',
    url: 'https://agrawalkhandelwal.com/blog/indian-subsidiary-of-us-c-corp-setup-compliance',
    type: 'article',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian Subsidiary of a US C-Corp: Setup and Compliance',
    description: 'How a US C-Corp sets up an Indian private limited subsidiary: FDI route, nominee, resident director, FC-GPR, transfer pricing, tax and PE risk.',
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Indian Subsidiary of a US C-Corp: Setup and Compliance', 'indian-subsidiary-of-us-c-corp-setup-compliance')

const articleLd = buildArticleLd({
  headline: 'Indian Subsidiary of a US C-Corp: Setup and Compliance',
  description: 'How a US C-Corp sets up an Indian private limited subsidiary: FDI route, nominee, resident director, FC-GPR, transfer pricing, tax and PE risk.',
  datePublished: '2026-11-18',
  dateModified: '2026-11-18',
  slug: 'indian-subsidiary-of-us-c-corp-setup-compliance',
})

const faqs: [string, string][] = [
  ['Can a US company own 100% of an Indian private limited company?', 'Yes in most sectors under the automatic route. A private limited company needs two members, so a nominee holds one share on behalf of the parent. Some sectors are restricted or need approval, so check the sector first.'],
  ['Does the Indian subsidiary need a resident director?', 'Yes. Section 149(3) of the Companies Act, 2013 requires at least one director who has stayed in India for at least 182 days in the previous financial year.'],
  ['When is FC-GPR due?', 'Within 30 days of allotment of shares to the foreign investor, filed on the RBI FIRMS portal. A late filing is regularised through the RBI late submission fee.'],
  ['Is Form 3CEB required for services to the US parent?', 'If the value of international transactions with the parent crosses the prescribed threshold, yes. The Indian company files the accountant\'s report on Form 3CEB and keeps documentation showing the price is at arm\'s length. Check the current threshold and due date at filing time.'],
  ['What tax rate does the Indian subsidiary pay?', 'It is taxed as a domestic company: the regular 25% or 30% depending on turnover, or the concessional regime at a 22% base rate that gives up certain deductions. Surcharge and cess apply on top. Confirm the current section and rate under the Income Tax Act, 2025 when you choose.'],
  ['Does an Indian subsidiary create a permanent establishment for the US parent?', 'Not automatically. Risk arises if the Indian team habitually concludes contracts for the parent, if the parent is managed from India, or if the subsidiary acts as a dependent agent. Contract signing and decision-making should be kept and documented in the US.'],
]

const faqLd = buildFaqLd(faqs)

export default function IndianSubsidiaryUsCCorpBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Setting Up an Indian Subsidiary for a US C-Corp: Steps and Compliance</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 18, 2026</span><span aria-hidden>&bull;</span><Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Most service and software businesses can be 100% owned by a US parent under the automatic route. Restricted sectors and land-border investors need approval.</li>
                  <li style={{ marginBottom: '0.4rem' }}>A private company needs two members, so a nominee holds one share for the parent.</li>
                  <li style={{ marginBottom: '0.4rem' }}>One director must have stayed in India 182 days in the previous financial year (s.149(3)).</li>
                  <li style={{ marginBottom: '0.4rem' }}>Report the foreign investment on FC-GPR within 30 days of allotment.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Services to the US parent need arm&apos;s-length pricing and, above the threshold, Form 3CEB.</li>
                  <li style={{ marginBottom: 0 }}>Keep contracts and key decisions in the US to limit permanent establishment risk.</li>
                </ul>
              </div>
              <ServiceOffer variant="us-entity" />

              <p>A US C-Corp that wants an engineering, support or sales team in India usually does it through a wholly owned Indian private limited company. The set-up is straightforward. The compliance that follows is where US parents get caught, especially on FEMA reporting and transfer pricing.</p>

              <h2>FDI Route and Eligibility</h2>
              <p>Most service and software businesses fall under the automatic route, which needs no prior government or RBI approval. A few sectors are restricted or need approval, and investors from countries sharing a land border with India need government approval under Press Note 3. Check your sector against the current FDI policy before incorporating. Our <Link href="/blog/foreign-subsidiary-registration-india-fdi" style={{ color: 'var(--primary)', fontWeight: 600 }}>foreign subsidiary registration guide</Link> and <Link href="/blog/fdi-in-india-routes-compliance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>FDI routes guide</Link> cover this in detail.</p>

              <h2>Two Shareholders and the Nominee</h2>
              <p>A private limited company needs at least two members. A US parent therefore holds almost all the shares and a nominee, often a director or a related individual, holds one share on its behalf, with a declaration that the nominee holds for the parent. Record the nominee holding properly. Do not leave it informal, since the registers and filings need the right beneficial ownership details.</p>

              <h2>Resident Director</h2>
              <p>Section 149(3) of the Companies Act, 2013 requires at least one director who has stayed in India for at least 182 days in the previous financial year. It is counted over the financial year, not a calendar year. In practice parents either appoint a trusted India-based manager or use a professional director. Pick someone who understands the duties, since a director carries statutory liability.</p>

              <h2>Incorporation Sequence</h2>
              <ul>
                <li>Digital signature certificates and director identification numbers for the proposed directors (see <Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DSC and DIN</Link>).</li>
                <li>Name reservation and SPICe+ incorporation, with the parent&apos;s documents apostilled or notarised as required.</li>
                <li>PAN and TAN, and GST registration if the Indian company will invoice.</li>
                <li>Open the company bank account and remit the share capital from the US parent.</li>
                <li>Allot shares to the parent and the nominee.</li>
              </ul>
              <p>Foreign documents from the US must be properly authenticated for Indian filings, so start that early.</p>

              <h2>FC-GPR Within 30 Days of Allotment</h2>
              <p>Foreign investment received for shares must be reported to RBI on Form FC-GPR through the FIRMS portal within 30 days of allotment, with a valuation certificate and supporting documents. Funds should come in through normal banking channels, and shares generally need to be allotted within the permitted window after the money arrives. A late filing is regularised through the RBI late submission fee, so build the date into your closing checklist. The company also files the annual FLA return once it has foreign investment.</p>

              <h2>Transfer Pricing on Services to the US Parent</h2>
              <p>When the Indian company provides services to its US parent, that is an international transaction with an associated enterprise, and it must be priced at arm&apos;s length. Where the value of such transactions crosses the prescribed threshold, the Indian company files an accountant&apos;s report on Form 3CEB and keeps transfer pricing documentation. Our <Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB guide</Link> covers due dates and penalties. A cost-plus model is the usual starting point for captive service companies, and the mark-up must be supportable by a benchmarking study, not chosen casually.</p>

              <h2>Indian Corporate Tax Options</h2>
              <p>An Indian private limited company owned by a foreign parent is still a domestic company for tax purposes. It can pay tax at the regular rate (25% or 30% depending on turnover, plus surcharge and cess) or opt for the lower concessional regime, which has a 22% base rate and gives up certain exemptions and incentives, bringing the effective rate to roughly 25% after surcharge and cess. The concessional regime is a one-way election, and section numbers have changed under the Income Tax Act, 2025, so confirm the current section and rate when you decide. Dividends paid to the US parent attract Indian withholding tax, which the India-US treaty can reduce. See <Link href="/blog/india-us-dtaa-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>the India-US DTAA guide</Link>.</p>

              <h2>Permanent Establishment Risk</h2>
              <p>A subsidiary is not automatically a permanent establishment of its parent. It becomes a risk when the Indian team habitually concludes contracts for the parent, the parent&apos;s executives run the business from India, or the subsidiary acts as a dependent agent. The India-US treaty also has a services permanent establishment test based on the presence of personnel. Keep contracts signed in the US, document who takes decisions and where, and avoid treating the Indian entity as a branch. Also watch where the US company is actually managed, since place of effective management can make a foreign company Indian-resident if control sits in India.</p>

              <h2>Annual Compliance Checklist</h2>
              <ul>
                <li>Statutory audit, AOC-4 and MGT-7 filings (see <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual ROC filing</Link>).</li>
                <li>Income tax return, advance tax, and TDS compliance.</li>
                <li>GST returns if registered.</li>
                <li>FLA return and any FEMA reporting for fresh investment.</li>
                <li>Form 3CEB and transfer pricing documentation.</li>
              </ul>
              <p>If you are still deciding whether the parent should be a Delaware company at all, read <Link href="/blog/india-to-us-flip-structure-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>our flip structure guide</Link>. For the wider picture, see <Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>our startup advisory</Link> and <Link href="/us-cross-border" style={{ color: 'var(--primary)', fontWeight: 600 }}>US cross-border services</Link>.</p>

            </div>

            <PostFooterLinks slug="indian-subsidiary-of-us-c-corp-setup-compliance" />

            <PostCTA segment="us"
            heading="Setting up an Indian subsidiary?"
            description="We handle incorporation, FEMA reporting and transfer pricing for US-owned Indian subsidiaries."
            secondaryLabel="US Cross-Border Services"
            secondaryHref="/us-cross-border"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/foreign-subsidiary-registration-india-fdi" style={{ color: 'var(--primary)', fontWeight: 600 }}>Foreign Subsidiary Registration in India (FDI Route)</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB: Transfer Pricing Audit Report</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/india-us-dtaa-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>India-US DTAA Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/india-to-us-flip-structure-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>India to US Flip Structure</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/us-cross-border" style={{ color: 'var(--primary)', fontWeight: 600 }}>US Cross-Border Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}
