import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foreign Subsidiary Registration in India: FDI Route & Compliance Guide',
  description: 'How a foreign parent company registers an Indian subsidiary: Automatic vs Government FDI route, resident director requirement, SPICe+ for foreign shareholders, and FC-GPR/FLA compliance.',
  keywords: [
    'foreign subsidiary registration India', 'FDI automatic route India',
    'wholly owned subsidiary India foreign company', 'FC-GPR filing',
    'resident director requirement India', 'foreign company incorporation India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/foreign-subsidiary-registration-india-fdi' },
  openGraph: {
    title: 'Foreign Subsidiary Registration in India: FDI Route & Compliance Guide',
    description: 'The FDI route, director requirements, incorporation steps and post-investment compliance for a foreign parent setting up an Indian subsidiary.',
    url: 'https://agrawalkhandelwal.com/blog/foreign-subsidiary-registration-india-fdi',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foreign Subsidiary Registration in India Guide',
    description: 'FDI route, director requirements, and post-investment compliance for foreign parents setting up in India.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Foreign Subsidiary Registration in India: FDI Route & Compliance Guide',
  description: 'How a foreign parent company registers a wholly owned Indian subsidiary, including FDI route, director requirements, and post-investment reporting.',
  datePublished: '2026-06-23', dateModified: '2026-06-23',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/foreign-subsidiary-registration-india-fdi',
}

const faqs: [string, string][] = [
  ['Can a foreign company own 100% of an Indian private limited company?', 'Yes, in most sectors that fall under the Automatic Route, a foreign company can hold up to 100% of an Indian private limited company without prior government approval, subject to sectoral conditions and reporting requirements.'],
  ['Does an Indian subsidiary of a foreign company need a resident director?', 'Yes. Every Indian company, including a wholly owned subsidiary of a foreign parent, must have at least one director who is a resident of India, meaning they stayed in India for the minimum period prescribed under the Companies Act in the previous calendar year.'],
  ['What is FC-GPR and when is it filed?', 'Form FC-GPR is filed with the RBI through the FIRMS portal to report the issue of shares by an Indian company to a foreign investor against FDI, generally within the timeline prescribed under FEMA regulations after allotment.'],
  ['Which FDI route applies to a new Indian subsidiary?', 'Most sectors fall under the Automatic Route, requiring no prior government approval. Certain sectors are restricted, conditional, or require Government Route approval. Always confirm which route applies to the specific business activity before incorporating.'],
  ['What is the Annual FLA return?', 'The Foreign Liabilities and Assets (FLA) return is an annual RBI filing required from any Indian entity that has received FDI or made overseas investment, reporting the outstanding foreign liabilities and assets as of March 31 each year.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function ForeignSubsidiaryBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Company Incorporation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Foreign Subsidiary Registration in India: FDI Route and Compliance Guide</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published June 23, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Most sectors allow up to 100% FDI under the Automatic Route, no prior government approval.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Every Indian subsidiary needs at least one India-resident director.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Share allotment to the foreign parent must be reported to the RBI via Form FC-GPR.</li>
                  <li style={{ marginBottom: 0 }}>An annual FLA return is required once foreign investment is on the books.</li>
                </ul>
              </div>

              <p>Setting up an Indian subsidiary of a foreign company involves two overlapping tracks that run in parallel: standard company incorporation under the Companies Act, and foreign exchange compliance under FEMA. Getting the FEMA side wrong is the more common and more expensive mistake, since it affects how the parent company\'s investment is legally recognized in India.</p>

              <h2>Choosing the FDI Route</h2>
              <p>Foreign investment into an Indian company falls under one of two routes. Under the <strong>Automatic Route</strong>, the foreign investor can invest without seeking prior approval from the Indian government, which covers most sectors including IT services, consulting, trading, and manufacturing. Under the <strong>Government Route</strong>, certain sectors require prior approval before the investment can be made, and a few sectors remain fully restricted or conditional. Before incorporating, confirm which route applies to the specific business activity the subsidiary will carry out, since the correct classification determines the entire compliance path.</p>

              <h2>The Resident Director Requirement</h2>
              <p>A foreign parent cannot staff an Indian subsidiary\'s Board with only non-resident directors. The Companies Act requires every Indian company to have at least one director who has stayed in India for the minimum period prescribed under the Act in the previous calendar year. Many first-time foreign investors miss this and need to appoint a local resident director, sometimes a professional nominee, purely to satisfy this requirement while the substantive management sits with the foreign parent\'s team.</p>

              <h2>Incorporation Steps for a Wholly Owned Subsidiary</h2>
              <ul>
                <li><strong>Choose the entity type</strong>, almost always a private limited company for a wholly owned subsidiary, since it allows up to 100% foreign shareholding with straightforward governance</li>
                <li><strong>Obtain DSC and DIN</strong> for all proposed directors, including foreign directors, following the process described in our <Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DSC and DIN guide</Link></li>
                <li><strong>Reserve the company name</strong> and file SPICe+ with the foreign parent company as the subscriber, using notarized and apostilled or consularized subscriber documents where the parent is incorporated outside India</li>
                <li><strong>Appoint at least one resident director</strong> alongside any foreign directors on the Board</li>
                <li><strong>Open a bank account</strong> and bring in the initial capital from the foreign parent through banking channels, since the source of funds must be traceable for FEMA reporting</li>
                <li><strong>Allot shares to the foreign parent</strong> and file Form FC-GPR with the RBI to report the inbound investment</li>
              </ul>

              <h2>Post-Investment FEMA Compliance</h2>
              <p>Incorporation is only the starting point. Once foreign capital has entered the company, ongoing FEMA reporting becomes a recurring obligation:</p>
              <ul>
                <li><strong>Form FC-GPR</strong> reports each allotment of shares to a foreign investor, filed through the RBI\'s FIRMS portal within the prescribed timeline after allotment</li>
                <li><strong>Annual FLA return</strong> reports the company\'s outstanding foreign liabilities and assets as of March 31 each year, due by the RBI\'s annual deadline, and applies even if there has been no fresh investment during the year</li>
                <li><strong>Downstream investment reporting</strong> applies if the Indian subsidiary itself invests further into another Indian entity</li>
                <li><strong>Sectoral conditions</strong>, such as minimum capitalization or performance conditions in specific sectors, must be tracked separately from the general FDI reporting</li>
              </ul>

              <h2>Common Mistakes Foreign Parents Make</h2>
              <p>The most frequent issues we see are treating the resident director as optional, bringing in initial capital through informal channels instead of proper banking routes that support FEMA reporting, missing the FC-GPR filing deadline after share allotment, and assuming annual compliance ends with the income tax return while ignoring the FLA return and other RBI filings. Each of these can be avoided with a checklist set up at incorporation rather than discovered during a later compliance review.</p>

              <h2>Plan the Structure Before You Incorporate</h2>
              <p>A foreign parent should decide the shareholding structure, the route (Automatic or Government), and who will serve as the resident director before filing SPICe+, not after. Getting these decisions right at incorporation avoids restructuring later, which is far more expensive than a small amount of upfront planning.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Setting up an Indian subsidiary for your foreign company?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle incorporation, resident director arrangements, and FC-GPR/FLA compliance for foreign parents entering India.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/company-incorporation" className="btn btn-outline">Incorporation Services</Link>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DSC and DIN Application Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/company-name-reservation-run-form-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Name Reservation Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing Guide</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}
