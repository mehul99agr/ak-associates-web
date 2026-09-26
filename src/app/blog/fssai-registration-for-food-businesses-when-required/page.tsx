import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'FSSAI Registration for Food Businesses: When Required' },
  description: 'FSSAI Basic Registration, State License, and Central License explained: current turnover thresholds, which food businesses need which tier, and how to apply.',
  keywords: [
    'FSSAI registration', 'FSSAI basic registration', 'FSSAI state license', 'FSSAI central license',
    'food business registration India', 'FSSAI turnover limit', 'FSSAI license for restaurant',
    'FSSAI license required for whom',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/fssai-registration-for-food-businesses-when-required' },
  openGraph: {
    title: 'FSSAI Registration for Food Businesses: When Required',
    description: 'Basic Registration vs State License vs Central License, current turnover thresholds, and which tier applies to your food business.',
    url: 'https://agrawalkhandelwal.com/blog/fssai-registration-for-food-businesses-when-required',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FSSAI Registration for Food Businesses: When Required',
    description: 'Basic Registration vs State License vs Central License, current turnover thresholds, and which tier applies to your food business.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('FSSAI Registration for Food Businesses: When Required', 'fssai-registration-for-food-businesses-when-required')

const articleLd = buildArticleLd({
  headline: 'FSSAI Registration for Food Businesses: When Required',
  description: 'FSSAI Basic Registration, State License, and Central License thresholds, which food businesses need which tier, and how to apply.',
  datePublished: '2026-09-08',
  slug: 'fssai-registration-for-food-businesses-when-required',
})

const faqs: [string, string][] = [
  [
    'Does every food business need an FSSAI license?',
    'Yes, in one of three forms. Every entity that manufactures, processes, packages, stores, distributes, sells, or imports food, including a small home kitchen, tiffin service, cloud kitchen, or street food cart, must hold either an FSSAI Basic Registration or a State/Central License depending on annual turnover and the scale of operation. Operating without one is an offence under the Food Safety and Standards Act, 2006.',
  ],
  [
    'What is the current turnover threshold for FSSAI Basic Registration?',
    'Following the Food Safety and Standards (Licensing and Registration of Food Businesses) Amendment Regulations, 2026, effective April 1, 2026, Basic Registration covers food businesses with annual turnover up to Rs 1.5 crore, a sharp increase from the earlier Rs 12 lakh ceiling. Businesses should confirm against the current turnover on FSSAI\'s own portal at the time of applying, since thresholds are periodically revised.',
  ],
  [
    'When do I need a State License instead of Basic Registration?',
    'A State License applies once annual turnover crosses the Basic Registration ceiling and up to Rs 50 crore, under the 2026 revision, or where the nature of the business itself requires it regardless of turnover, such as certain manufacturing, storage, or catering operations that FSSAI classifies above the basic-registration category by scale rather than turnover alone.',
  ],
  [
    'When is a Central License required?',
    'A Central License is required once annual turnover exceeds Rs 50 crore under the 2026 revised thresholds, and separately for specific categories regardless of turnover, including importers, businesses operating in more than one state, and units supplying to central government agencies, railways, airports, or large establishments where FSSAI mandates central-level licensing by category.',
  ],
  [
    'How long does FSSAI registration or licensing take and how long is it valid?',
    'Basic Registration is typically processed faster than a full license since document requirements are lighter. Both Basic Registration and State/Central Licenses are issued for a validity period the applicant chooses at the time of filing, commonly ranging from 1 to 5 years, and must be renewed before expiry to avoid a lapse in compliance.',
  ],
  [
    'What happens if a food business operates without the correct FSSAI tier?',
    'Operating without any FSSAI registration or license, or operating at a turnover that has outgrown Basic Registration without upgrading to a State License, exposes the business to penalties under the Food Safety and Standards Act, in addition to the operational risk of being unable to prove regulatory compliance to landlords, aggregators, or institutional buyers who now routinely ask for the FSSAI number upfront.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function FssaiRegistrationBlog() {
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
              <span className="section-badge">MSME &amp; Registrations</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                FSSAI Registration for Food Businesses: When Required
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>September 17, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Every food business needs FSSAI clearance in one of three tiers: <strong>Basic Registration</strong>, <strong>State License</strong>, or <strong>Central License</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>From April 1, 2026, the Basic Registration ceiling rose sharply to <strong>Rs 1.5 crore</strong> turnover, State License covers up to <strong>Rs 50 crore</strong>, and Central License applies above that.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Certain categories, importers, multi-state operators, and large institutional suppliers, need a Central License regardless of turnover.</li>
                    <li style={{ marginBottom: 0 }}>Always verify the live threshold on FSSAI&apos;s portal before applying; these limits have been revised more than once and can change again.</li>
                  </ul>
                </div>

                <p>Any business that touches food, whether it manufactures, processes, packages, stores, distributes, sells, catering-supplies, or imports it, needs clearance from the Food Safety and Standards Authority of India (FSSAI) before it can legally operate. The confusion almost every food entrepreneur runs into is not whether they need FSSAI at all, but which of the three tiers applies: Basic Registration, a State License, or a Central License. Getting the tier wrong, usually by staying on Basic Registration after outgrowing it, is one of the more common compliance gaps we see in food businesses scaling past their first year.</p>

                <h2>The Three FSSAI Tiers</h2>
                <p>FSSAI structures its regime around annual turnover, with a few category-based exceptions layered on top. <strong>Following the Food Safety and Standards (Licensing and Registration of Food Businesses) Amendment Regulations, 2026, effective April 1, 2026, the thresholds were revised upward significantly</strong> from the levels that had applied for years before:</p>
                <ul>
                  <li><strong>Basic Registration</strong> - annual turnover up to Rs 1.5 crore (raised from Rs 12 lakh). Covers small food businesses: home-based kitchens, small retailers, petty food manufacturers, tea stalls, and similar small-scale operators.</li>
                  <li><strong>State License</strong> - annual turnover from the Basic Registration ceiling up to Rs 50 crore. Covers mid-sized manufacturers, restaurants, hotels, and storage/distribution operations that have scaled beyond a basic registration, or that fall into a category FSSAI classifies at this level regardless of turnover.</li>
                  <li><strong>Central License</strong> - annual turnover above Rs 50 crore (raised from Rs 20 crore), and mandatorily for specific categories such as importers, businesses operating across more than one state, and suppliers to central government institutions, railways, or airports.</li>
                </ul>
                <p>The turnover figures above reflect the 2026 revision; because FSSAI periodically resets these thresholds, always cross-check the live limit on the FSSAI portal or with your CA at the time of applying rather than assuming a figure from an older reference stays current indefinitely.</p>

                <h2>Which Tier Applies to Your Business</h2>
                <p>Turnover is the primary driver, but it is not the only one. A small cloud kitchen doing under Rs 1.5 crore in annual sales sits comfortably in Basic Registration. A mid-sized restaurant chain or a packaged-food manufacturer supplying multiple retailers in one state typically needs a State License once turnover crosses the Basic Registration ceiling, even if the business feels "small" in absolute terms. A business that imports any food ingredient or finished product, however small its overall turnover, needs a Central License for the import activity specifically, because import licensing is category-driven rather than turnover-driven.</p>
                <p>Multi-state operations are the other common trigger for Central License regardless of turnover: a business manufacturing in one state and distributing branded packaged food to buyers in several states typically needs central-level licensing rather than separate state licenses in each location, though the exact classification depends on how the operation is structured, so this is worth confirming case by case rather than assuming.</p>

                <h2>Applying for FSSAI Registration or License</h2>
                <p>The process runs through the FSSAI online portal (FoSCoS). Broadly:</p>
                <ol>
                  <li>Identify the correct tier based on turnover and category as above.</li>
                  <li>Prepare identity and address proof, a business constitution document (partnership deed, LLP agreement, or certificate of incorporation as applicable), a layout plan or photographs of the premises for State/Central License applications, and a list of food products or categories handled.</li>
                  <li>File the application online, choosing a validity period, commonly between 1 and 5 years, and pay the applicable government fee.</li>
                  <li>For a State or Central License, be prepared for a premises inspection before the license is granted; Basic Registration is generally lighter on documentation and inspection.</li>
                  <li>Display the registration or license number prominently at the premises and on packaging as required, and track the renewal date well ahead of expiry since a lapsed license is treated the same as operating without one.</li>
                </ol>
                <p>Food businesses in Nashik and Sillod that are also setting up their broader compliance stack, GST registration, trade license, and shop establishment registration alongside FSSAI, may find it useful to plan all of these together rather than sequentially; see our guide on <Link href="/blog/trade-license-requirements-for-businesses-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>trade license requirements</Link> for the municipal-level clearance that typically runs in parallel with FSSAI for a physical food outlet.</p>

                <h2>Upgrading Between Tiers</h2>
                <p>FSSAI registration and licensing are not one-time events tied to when the business started; they track current turnover. A food business that begins on Basic Registration and later crosses the applicable ceiling must apply for a State License before continuing to operate at the higher turnover level, not retroactively after the fact. Businesses scaling fast, particularly cloud kitchens and packaged-food brands going from a single outlet to multi-city distribution, should build an FSSAI tier review into their annual compliance check rather than treating it as a set-and-forget registration, alongside other annual filings covered in our <Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST registration guide for startups</Link>.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Setting up or scaling a food business?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help food businesses identify the right FSSAI tier, prepare the application, and keep registrations current as turnover grows.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20FSSAI%20registration%20for%20my%20food%20business." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/trade-license-requirements-for-businesses-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Trade License Requirements for Businesses in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration for Startups: When Required &amp; First Return Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>Post-Incorporation Checklist: First 30 Days</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
