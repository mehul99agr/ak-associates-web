import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Overseas Direct Investment (ODI): Rules & Compliance Guide',
  description: 'How Overseas Direct Investment (ODI) works under the FEMA Overseas Investment framework: who can invest, ODI vs OPI, automatic vs approval route, FIRMS reporting, APR, and the one-year holding rule.',
  keywords: [
    'Overseas Direct Investment India', 'ODI rules FEMA', 'Overseas Investment Rules 2022',
    'ODI vs OPI', 'FIRMS portal ODI reporting', 'Annual Performance Report ODI',
    'RBI overseas investment compliance', 'Indian party overseas subsidiary',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/odi-overseas-direct-investment-guide-india' },
  openGraph: {
    title: 'Overseas Direct Investment (ODI): Rules & Compliance Guide',
    description: 'Who can make an ODI, the automatic vs approval route, and the reporting obligations under FEMA\'s Overseas Investment framework.',
    url: 'https://agrawalkhandelwal.com/blog/odi-overseas-direct-investment-guide-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overseas Direct Investment (ODI) Guide',
    description: 'Who can make an ODI, the automatic vs approval route, and reporting obligations under FEMA.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Overseas Direct Investment (ODI): Rules & Compliance Guide', 'odi-overseas-direct-investment-guide-india')

const articleLd = buildArticleLd({
  headline: 'Overseas Direct Investment (ODI): Rules & Compliance Guide',
  description: 'Who can make an Overseas Direct Investment under FEMA, ODI vs OPI, the automatic and approval routes, and the FIRMS/APR reporting obligations.',
  datePublished: '2026-09-04',
  slug: 'odi-overseas-direct-investment-guide-india',
})

const faqs: FaqPair[] = [
  ['What is Overseas Direct Investment (ODI)?', 'ODI is an investment by a person resident in India (typically an Indian company, LLP, or resident individual) into a foreign entity that gives them a strategic stake, generally through equity that carries control or significant influence, such as a joint venture (JV) or wholly owned subsidiary (WOS) abroad. It is governed by the Foreign Exchange Management (Overseas Investment) Rules, Regulations, and Directions, 2022, collectively the OI Framework.'],
  ['Can an NRI make an Overseas Direct Investment from India under the ODI framework?', 'The ODI framework is built for "persons resident in India" investing outward; it is not the route NRIs use to invest abroad, since an NRI is, by definition, not resident in India under FEMA. An NRI investing in a foreign business generally does so using funds and structures outside India\'s outward-investment framework, governed instead by the rules of the country where the investment is made. Where an NRI is investing back into an Indian structure that itself makes an ODI, the compliance sits with the Indian resident entity, not the NRI individually.'],
  ['What is the difference between ODI and OPI?', 'ODI (Overseas Direct Investment) involves acquiring equity that gives control or significant influence (broadly, a JV/WOS relationship) while OPI (Overseas Portfolio Investment) covers investment in foreign listed securities or other instruments without such control, for example buying shares of a foreign listed company. The compliance and reporting requirements differ between the two, and the classification is based on the substance of the investment, not just its label.'],
  ['What is the automatic route for ODI, and when is RBI approval needed?', 'Most ODI transactions by eligible Indian investors are permitted under the automatic route, meaning no prior RBI approval is needed as long as the investment fits within the prescribed structure, sector, and financial commitment limits linked to the investor\'s net worth. Certain categories; such as investment in specific restricted sectors, investment routed through step-down structures beyond permitted layers, or transactions outside the automatic route\'s conditions; require prior RBI approval instead. The applicable limits and conditions should be checked against the current OI Directions before a transaction is finalised, since financial commitment ceilings are periodically revised.'],
  ['How is an ODI reported to RBI?', 'The investment is reported through the Foreign Investment Reporting and Management System (FIRMS) portal, routed via the investor\'s Authorised Dealer (AD) bank, broadly through Form FC for the relevant transaction. After the initial investment, the recurring obligation is the Annual Performance Report (APR), covering the overseas entity\'s financial position for each year the investment remains outstanding.'],
  ['Is there a minimum holding period before an ODI can be divested?', 'Yes. Under the current Overseas Investment framework, an Indian investor is generally required to hold the ODI for a period of one year from the date of making the investment before divesting it, subject to the specific conditions in the OI Directions applicable to the transaction.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function OdiGuideBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">FEMA &amp; Compliance</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Overseas Direct Investment (ODI): Rules &amp; Compliance Guide</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 4, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <p style={{ marginBottom: '0.6rem', fontWeight: 600 }}>ODI is outward investment by Indian residents into a foreign JV or WOS, governed by the FEMA Overseas Investment framework.</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Only persons resident in India (companies, LLPs, eligible resident individuals) can make an ODI; it is not the route NRIs use to invest abroad.</li>
                  <li style={{ marginBottom: '0.4rem' }}>ODI (control/strategic stake) is distinct from OPI (portfolio holding without control).</li>
                  <li style={{ marginBottom: '0.4rem' }}>Most ODI is permitted under the automatic route, subject to sector and financial-commitment limits; some transactions need prior RBI approval.</li>
                  <li style={{ marginBottom: 0 }}>Reported via the FIRMS portal through your AD bank, with an ongoing Annual Performance Report every year the investment stays outstanding, and a one-year minimum holding period before divestment.</li>
                </ul>
              </div>

              <p>When an Indian company, LLP, or eligible resident individual sets up or invests in a business abroad, that outward investment does not sit outside FEMA the way a purely foreign-to-foreign transaction would; it is a regulated activity with its own reporting framework, distinct from the inbound FDI rules that apply when foreign money comes into India. This is <strong>Overseas Direct Investment (ODI)</strong>, and understanding who can make it, which route applies, and what needs to be reported afterward is the difference between a smooth outward structure and a compounding notice down the line.</p>

              <h2>What Is ODI, and Who Can Make It</h2>
              <p>ODI is governed by the <strong>Foreign Exchange Management (Overseas Investment) Rules, Regulations, and Directions, 2022</strong>: collectively the OI Framework; which replaced the earlier Master Directions on Direct Investment by Residents in JV/WOS abroad. Eligible investors are <strong>persons resident in India</strong>: Indian companies, LLPs, and resident individuals investing under the framework&apos;s permitted categories. An <strong>NRI is not the intended user of this route</strong>: since an NRI is not, by definition, a person resident in India, their investment abroad is governed by the rules of the destination jurisdiction, not India&apos;s outward ODI framework. Where an NRI holds a stake in an Indian entity that itself makes an ODI, the compliance obligation belongs to that Indian resident entity, not the NRI individually.</p>

              <h2>ODI vs OPI: Two Different Categories</h2>
              <p>The OI Framework separates outward investment into two categories based on substance, not just structure:</p>
              <ul>
                <li><strong>ODI (Overseas Direct Investment)</strong>: equity that carries control or significant influence, typically a joint venture or wholly owned subsidiary relationship abroad.</li>
                <li><strong>OPI (Overseas Portfolio Investment)</strong>: investment in foreign listed securities or other permitted instruments without control, such as buying shares of a listed foreign company.</li>
              </ul>
              <p>The two carry different compliance and reporting paths, so classifying the investment correctly at the outset matters before any filing is made.</p>

              <h2>Automatic Route vs Approval Route</h2>
              <p>Most ODI transactions by eligible investors are permitted under the <strong>automatic route</strong>, meaning no prior RBI approval is needed, provided the investment stays within the prescribed structure, sector, and financial commitment limits tied to the investor&apos;s net worth. Certain categories fall outside this; investment in specific restricted sectors, structures with step-down subsidiaries beyond the permitted layering, or transactions that do not meet the automatic route&apos;s conditions; and these need <strong>prior RBI approval</strong> instead. Because financial commitment ceilings and permitted structures are revised periodically, the applicable limit should always be checked against the current OI Directions before finalising a transaction, rather than relied on from memory.</p>

              <h2>Reporting: FIRMS Portal and the Annual Performance Report</h2>
              <p>The initial ODI transaction is reported through the <strong>Foreign Investment Reporting and Management System (FIRMS)</strong> portal, routed via the investor&apos;s <strong>Authorised Dealer (AD) bank</strong>, broadly through Form FC for the relevant transaction type. After that, the recurring obligation is the <strong>Annual Performance Report (APR)</strong>, due each year the investment remains outstanding, covering the overseas entity&apos;s financial position. Missed or delayed APR filing is handled through RBI&apos;s compounding process rather than a fixed late fee; see our <Link href="/blog/startup-compliance-automation-odi-apr-gst" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide on organising ODI and APR compliance</Link> for how growing businesses track this in practice.</p>

              <h2>The One-Year Holding Requirement</h2>
              <p>Under the current framework, an Indian investor is generally required to hold the ODI for a minimum of <strong>one year</strong> from the date of investment before divesting it, subject to the specific conditions applicable to that transaction under the OI Directions. This is a structural check meant to discourage short-term, speculative outward positioning being routed through the ODI mechanism.</p>

              <h2>Where ODI Fits Alongside FDI and FEMA Compliance</h2>
              <p>ODI, FDI, and the broader FEMA reporting regime are three related but distinct compliance tracks; ODI governs money moving out of India into a foreign structure, FDI governs foreign money moving into an Indian entity, and general FEMA compliance covers the reporting and documentation around both. A group with cross-border operations often needs to track all three simultaneously. See our <Link href="/blog/fdi-in-india-routes-compliance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>FDI in India guide</Link> for the inbound side, and our <Link href="/blog/fema-compliance-foreign-investment-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>FEMA compliance guide for startups raising foreign investment</Link> for the related reporting obligations that typically sit alongside an outward ODI structure.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Setting up or reporting an overseas investment?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help Indian companies, LLPs, and resident individuals structure, report, and stay current on ODI and FEMA compliance.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/startups" className="btn btn-outline">Startup Advisory Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/fdi-in-india-routes-compliance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>FDI in India: Routes &amp; Compliance Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-compliance-automation-odi-apr-gst" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Compliance Automation: ODI, APR &amp; GST</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/fema-compliance-foreign-investment-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>FEMA Compliance for Startups Raising Foreign Investment</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}
