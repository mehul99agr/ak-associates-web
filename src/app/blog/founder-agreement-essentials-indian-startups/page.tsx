import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Founder Agreement Essentials (Startups)',
  description: 'What a co-founder agreement should cover: equity split rationale, founder reverse vesting, IP assignment, non-compete enforceability under Indian law, and exit/deadlock mechanisms.',
  keywords: [
    'founder agreement India', 'co-founder agreement India', 'founder vesting India',
    'reverse vesting startup', 'IP assignment founder agreement', 'non-compete enforceability India',
    'drag along tag along rights India', 'startup founder equity split',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/founder-agreement-essentials-indian-startups' },
  openGraph: {
    title: 'Founder Agreement Essentials (Startups)',
    description: 'Equity split, founder reverse vesting, IP assignment, non-compete enforceability, and exit mechanisms.',
    url: 'https://agrawalkhandelwal.com/blog/founder-agreement-essentials-indian-startups',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founder Agreement Essentials for Startups',
    description: 'Equity split, reverse vesting, IP assignment, and non-compete enforceability under Indian law.',
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://agrawalkhandelwal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Founder Agreement Essentials (Startups)', item: 'https://agrawalkhandelwal.com/blog/founder-agreement-essentials-indian-startups' },
  ],
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Founder Agreement Essentials (Startups)',
  description: 'What a founder agreement should cover before or shortly after incorporating: equity split, reverse vesting, IP assignment, non-compete enforceability, and exit mechanisms.',
  datePublished: '2026-07-31', dateModified: '2026-07-31',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/founder-agreement-essentials-indian-startups',
}

const faqs: [string, string][] = [
  ['Do Indian startup founders need a co-founder agreement if they are friends or family?', 'Yes. Trust does not answer questions about equity, IP ownership, departure, decision rights, or future fundraising. A written agreement preserves the relationship by making expectations clear early, before a dispute forces the conversation.'],
  ['Should founders vest their own shares in India?', 'Usually, yes. Reverse vesting protects the company if a founder leaves early while still retaining a large ownership stake that can discourage investors and make replacement hiring harder.'],
  ['Can a founder agreement stop a former founder from joining a competitor?', 'A non-compete during employment is generally enforceable, but post-termination non-competes have limited enforceability under Section 27 of the Indian Contract Act, 1872. Rely on confidentiality, IP assignment, and data protections as well, not the non-compete alone.'],
  ['Who owns code built before incorporation of a startup?', 'Ownership depends on the underlying facts and contracts. The company should obtain written IP assignments from founders, contractors, and agencies so future investors can see a clean ownership chain during due diligence.'],
  ['What are drag-along and tag-along rights in a founder agreement?', 'Tag-along rights let minority shareholders participate in a sale by majority holders on the same terms. Drag-along rights can require minority holders to join an approved company sale under agreed conditions, so a single holdout cannot block an exit.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function FounderAgreementBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Startup Advisory</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Founder Agreement Essentials for Indian Startups: Equity, IP, and Exit Rules</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 31, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Sign the founder agreement <strong>before incorporation or immediately after</strong>, while expectations are still aligned.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Equal equity without founder vesting can leave a departed founder holding an unfair, undeserved stake.</li>
                  <li style={{ marginBottom: '0.4rem' }}>All founder-created product, code, brand, and know-how should be <strong>assigned to the company</strong>, not held personally.</li>
                  <li style={{ marginBottom: 0 }}>Post-termination non-competes have limited enforceability in India - use practical protections beyond boilerplate.</li>
                </ul>
              </div>

              <p>A founder agreement is often deferred because the founders trust each other and want to focus on product or fundraising. That is exactly when it should be completed. The agreement records the commercial bargain before resentment, unequal effort, or an investor deadline changes the conversation. It is also a governance and tax-planning document because it affects ownership, transfers, employment terms, intellectual property, and future diligence. It should work with the company&apos;s articles of association, shareholders&apos; agreement, and employment arrangements - if documents conflict, investors will ask which one governs.</p>

              <h2>Equity Split: Start With Future Contribution</h2>
              <p>Founders frequently split shares equally because everyone contributed an idea, introduced an investor, or worked on the first prototype. The more useful question is who will carry the business over the next several years. Consider: time commitment and opportunity cost, functional responsibility, capital contributed, existing intellectual property, ability to continue after fundraising, replacement difficulty, and agreed future milestones. An unequal split is not inherently unfair, and an equal split is not inherently sensible - the goal is a structure the team can defend after the first difficult year. Avoid granting a founder a large permanent stake solely for an idea contribution if they are not expected to remain operationally involved.</p>

              <h2>Founder Reverse Vesting</h2>
              <p>Employees usually receive options that vest over time. Founders often already hold shares at incorporation, so the practical equivalent is <strong>reverse vesting</strong>. Under reverse vesting, founders hold shares but agree that some or all may be repurchased or transferred if they leave before completing the agreed service period. A common commercial period is <Link href="/blog/esop-structuring-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>four years, often with a one-year cliff</Link>, but the agreement must fit the company&apos;s actual circumstances.</p>
              <p>This protects the company if a co-founder leaves shortly after incorporation. Without it, the departing founder may continue holding a substantial stake despite no ongoing contribution, making future hiring and fundraising harder. The agreement should specify what counts as a voluntary exit, what is termination for cause, good-leaver and bad-leaver treatment, purchase price or valuation mechanism, and tax consequences and required approvals.</p>

              <h2>Intellectual Property Must Belong to the Company</h2>
              <p>Early-stage IP is often created before incorporation, from personal laptops, freelance arrangements, or informal collaboration. Investors will examine ownership closely. The founder agreement should require each founder to assign to the company all relevant IP created in connection with the business - code, designs, product specifications, trademarks, domains, content, inventions, processes, data models, and documentation.</p>
              <p>The company should also obtain IP assignment agreements from contractors, freelancers, agencies, and consultants - paying for work does not always establish the ownership chain required for investor diligence. A practical audit should identify who created the first product version, which GitHub, cloud, and domain accounts are used, whether any former employer claims could arise, whether open-source licences are being followed, and whether all contractors signed written assignment terms.</p>

              <h2>Roles, Authority, and Decision-Making</h2>
              <p>A founder agreement should state each founder&apos;s role, reporting responsibility, and decision authority. This is not bureaucracy - it avoids the common problem where two founders assume they control the same commercial decision. Separate ordinary operating decisions from reserved matters, which may include issuing shares, borrowing, changing compensation, entering major contracts, selling material IP, changing the business model, or appointing senior executives. The agreement should also cover time commitment - a founder who retains a full-time job, consultancy, or competing side business creates both execution and conflict risks.</p>

              <h2>Non-Compete, Confidentiality, and Indian Law</h2>
              <p>Non-compete drafting requires realism. Non-compete obligations <strong>during</strong> employment are generally enforceable, but <strong>post-termination</strong> non-competes have limited enforceability under <strong>Section 27 of the Indian Contract Act, 1872</strong>. Do not rely on a broad post-exit restraint to protect the business. Use enforceable and practical safeguards instead: strong confidentiality obligations, IP assignment, return and deletion of company data, non-solicitation provisions drafted with legal advice, access controls and documented trade secrets, and transfer restrictions on shares.</p>
              <p>This is a real legal nuance, not a drafting technicality. An unenforceable clause gives founders false comfort and may be challenged exactly when it matters most - when a departing co-founder joins or starts a competing business.</p>

              <h2>Exit, Deadlock, and Transfer Rules</h2>
              <p>The agreement should anticipate disagreement without assuming it will happen. A deadlock process may require internal escalation, mediation, a defined buy-sell mechanism, or another agreed resolution path. Transfer rights are central to future liquidity and investor protection:</p>
              <ul>
                <li><strong>Right of first refusal</strong> gives existing holders a chance to buy shares proposed for sale</li>
                <li><strong>Tag-along rights</strong> let minority holders join a sale by majority holders on the same terms</li>
                <li><strong>Drag-along rights</strong> can require minority holders to participate in an approved sale, subject to negotiated conditions</li>
              </ul>
              <p>These rights must be reflected in the articles of association where required - a side agreement inconsistent with the articles can create enforceability issues.</p>

              <h2>Sign It Early</h2>
              <p>The best time to sign is before incorporation or immediately afterward, before material IP, employee grants, and outside capital complicate the position. If the startup already exists, do not wait for the next dispute - reconcile the cap table, document IP ownership, and put founder vesting in place before beginning a serious fundraise. Investors will look for exactly these documents during <Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>due diligence</Link>.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need a founder agreement drafted or reviewed?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help founders structure equity splits, reverse vesting, and IP assignment before a dispute or fundraise makes it urgent.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/startups" className="btn btn-outline">Startup Advisory</Link>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/esop-structuring-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP Structuring for Indian Startups</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>Due Diligence Checklist for Fundraising</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/company-incorporation-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>How to Incorporate a Company in India</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}
