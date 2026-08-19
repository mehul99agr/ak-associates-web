import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company Name Reservation Guide (India)',
  description: 'How to reserve a company name with the MCA: SPICe+ Part A vs the RUN service, MCA naming guidelines, common rejection reasons, and why a trademark search matters before you file.',
  keywords: [
    'company name reservation India', 'SPICe+ Part A', 'RUN form MCA',
    'MCA name approval guidelines', 'company name rejection reasons',
    'trademark search before incorporation',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/company-name-reservation-run-form-india' },
  openGraph: {
    title: 'Company Name Reservation Guide (India)',
    description: 'SPICe+ Part A vs RUN, MCA naming guidelines, and the most common reasons company names get rejected.',
    url: 'https://agrawalkhandelwal.com/blog/company-name-reservation-run-form-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Name Reservation in India Guide',
    description: 'SPICe+ Part A vs RUN, naming guidelines, and common rejection reasons.',
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://agrawalkhandelwal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Company Name Reservation Guide (India)', item: 'https://agrawalkhandelwal.com/blog/company-name-reservation-run-form-india' },
  ],
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Company Name Reservation Guide (India)',
  description: 'How to reserve a company name with the MCA, the difference between SPICe+ Part A and RUN, naming guidelines, and common rejection reasons.',
  datePublished: '2026-07-06', dateModified: '2026-07-06',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/company-name-reservation-run-form-india',
}

const faqs: [string, string][] = [
  ['What is the difference between RUN and SPICe+ Part A?', 'Both are MCA services for reserving a company name. SPICe+ Part A is the integrated route used when name reservation and incorporation are being done together, while the standalone RUN service is used mainly for other name-related changes, such as renaming an existing company. Most first-time founders reserve their name through SPICe+ Part A as the first step of incorporation.'],
  ['How many name options can be submitted in one application?', 'MCA name reservation applications typically allow a limited number of proposed name options to be submitted together, ranked by preference, so the applicant should prepare more than one viable option in case the first choice is unavailable or non-compliant.'],
  ['How long is a reserved company name valid?', 'Once approved, a reserved name is valid for a limited window during which the incorporation filing must be completed. If incorporation is not completed within that window, the reservation lapses and the process must be repeated.'],
  ['Why do company names get rejected by the MCA?', 'Common reasons include the name being too similar to an existing registered company, LLP, or trademark, use of restricted words without the required approval, and names that are misleading about the company\'s scale or the nature of its business.'],
  ['Should I do a trademark search before applying for a company name?', 'Yes. MCA approval that a name is available for company registration does not guarantee it does not infringe an existing trademark. A separate trademark search reduces the risk of a rebrand later after significant investment in the name.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function CompanyNameReservationBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Company Incorporation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Company Name Reservation in India: SPICe+ Part A and RUN Explained</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 6, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Most founders reserve a name through SPICe+ Part A as step one of incorporation.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Prepare multiple ranked name options in case your first choice is rejected.</li>
                  <li style={{ marginBottom: '0.4rem' }}>A reserved name is only valid for a limited window before incorporation must be completed.</li>
                  <li style={{ marginBottom: 0 }}>MCA name approval does not equal trademark clearance, do both checks separately.</li>
                </ul>
              </div>

              <p>Before a company can be incorporated, its proposed name has to clear the MCA\'s naming rules and be reserved. This sounds like a formality, but a rejected or delayed name reservation is one of the most common reasons incorporation timelines slip. Understanding the process and the naming guidelines upfront avoids losing time to avoidable resubmissions.</p>

              <h2>SPICe+ Part A vs RUN</h2>
              <p>The MCA offers two ways to secure a company name. <strong>SPICe+ Part A</strong> is the name reservation step built directly into the integrated incorporation form, and it is what almost every founder incorporating a new company should use, since it feeds straight into Part B where the rest of the incorporation is completed. The standalone <strong>RUN (Reserve Unique Name)</strong> service exists mainly for scenarios outside fresh incorporation, such as changing the name of an already-registered company. Founders sometimes use RUN out of habit or old advice; for a brand-new company, SPICe+ Part A is the more direct and commonly used route.</p>

              <h2>MCA Naming Guidelines</h2>
              <p>A proposed name generally needs to satisfy rules including:</p>
              <ul>
                <li><strong>Uniqueness</strong>: not identical or deceptively similar to an existing company, LLP, or trademark on record</li>
                <li><strong>No restricted or prohibited words</strong> without the required government approval, for example words implying government affiliation or certain regulated terms</li>
                <li><strong>No misleading indications</strong> of scale, industry, or connection that the company does not actually have</li>
                <li><strong>Correct suffix</strong> matching the entity type, such as &quot;Private Limited&quot; for a private company</li>
                <li><strong>Object-consistent naming</strong> where the name should reasonably reflect the proposed business activity in the application</li>
              </ul>

              <h2>How to Prepare a Strong Application</h2>
              <p>Applicants can typically submit more than one proposed name in order of preference, and doing so meaningfully improves the odds of approval on the first attempt. A well-prepared application usually includes:</p>
              <ul>
                <li>Two to three distinct, genuinely different name options rather than minor variations of one idea</li>
                <li>A quick search on the MCA\'s existing company/LLP name database before submission</li>
                <li>A check that the name does not closely resemble a well-known registered trademark in the same or an adjacent industry</li>
                <li>Confirmation that the chosen suffix matches the entity type being incorporated</li>
              </ul>

              <h2>Common Rejection Reasons</h2>
              <p>Names most often get rejected or sent back for resubmission because they are too close to an existing company, LLP, or trademark; because they use a restricted word like &quot;Bank,&quot; &quot;Insurance,&quot; or terms implying government or international bodies without the necessary approval; or because the resemblance check flags a conflict the applicant did not anticipate. Each rejection resets the clock and, depending on the service used, may require a fresh application.</p>

              <h2>Why an MCA Name Approval Is Not a Trademark Clearance</h2>
              <p>This is the mistake with the highest downstream cost. MCA approving a name for company registration purposes only confirms it is available under company law naming rules, it does not confirm the name is free of trademark conflicts. A founder can legally register a company under a name that later triggers a trademark dispute from an unrelated party in the same industry, forcing a costly rebrand after the business has built recognition around that name. Run a proper trademark search, and ideally file a trademark application, alongside or shortly after incorporation rather than assuming MCA approval covers this ground.</p>

              <h2>Timing the Reservation Against Your Incorporation Plan</h2>
              <p>A reserved name is valid only for a limited window, so reserve the name only once you are genuinely ready to move through the rest of incorporation, DSC and DIN for directors, MOA/AOA drafting, and document collection, rather than reserving early and letting the window lapse while other pieces are still being arranged.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Ready to reserve your company name and incorporate?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle name reservation, SPICe+ filing, and the full incorporation process end to end.</p>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/company-incorporation-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/llp-vs-private-limited-comparison-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP vs Private Limited Company</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}
