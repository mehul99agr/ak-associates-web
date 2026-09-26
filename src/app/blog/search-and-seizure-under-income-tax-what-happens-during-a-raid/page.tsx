import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Search & Seizure Under Income Tax: What Happens During a Raid' },
  description: 'How an income tax search (Section 132) is authorised, what happens during the raid, your rights as a taxpayer, and how seized cash, documents and assets are handled.',
  keywords: [
    'income tax search and seizure', 'section 132 income tax', 'income tax raid procedure',
    'panchnama income tax', 'statement under 132(4)', 'income tax department raid rights',
    'seized assets income tax', 'search warrant income tax India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/search-and-seizure-under-income-tax-what-happens-during-a-raid' },
  openGraph: {
    title: 'Search & Seizure Under Income Tax: What Happens During a Raid',
    description: 'Search warrant authority, taxpayer rights, panchnama, statement recording, and how seized assets are handled during an income tax raid.',
    url: 'https://agrawalkhandelwal.com/blog/search-and-seizure-under-income-tax-what-happens-during-a-raid',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search & Seizure Under Income Tax: What Happens During a Raid',
    description: 'A plain-English walkthrough of what happens during an income tax search, and the rights every taxpayer has during it.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Search & Seizure Under Income Tax: What Happens During a Raid', 'search-and-seizure-under-income-tax-what-happens-during-a-raid')

const articleLd = buildArticleLd({
  headline: 'Search & Seizure Under Income Tax: What Happens During a Raid',
  description: 'How an income tax search under Section 132 is authorised, what happens during the raid, taxpayer rights, statement recording, and seized asset handling.',
  datePublished: '2026-08-22',
  slug: 'search-and-seizure-under-income-tax-what-happens-during-a-raid',
})

const faqs: [string, string][] = [
  [
    'Who can authorise an income tax search?',
    'A search under Section 132 can only be authorised by specified senior officers, typically the Principal Director General, Director General, Principal Director, Director, Principal Chief Commissioner, Chief Commissioner, Principal Commissioner, or Commissioner, and only when they have "reason to believe" (based on information in their possession) that a person is concealing income, assets, or books of account that would not otherwise be produced. A search cannot be conducted on the initiative of the field officers who actually carry it out.',
  ],
  [
    'Can I refuse to let the search team in?',
    'No. Once the authorised officer shows the search warrant and identifies themselves, refusing entry or obstructing the search is itself an offence and the team has legal authority to break open locks, doors, or containers if access is denied. Your leverage lies in insisting on procedure, not in resisting entry: verify the warrant, note the officers\' names and designations, and ensure two independent local witnesses are present throughout.',
  ],
  [
    'What is a panchnama and why does it matter?',
    'A panchnama is the official record prepared by the search team, in the presence of independent witnesses, listing everything found, examined, and seized during the search, along with the time the search began and concluded. It is the primary evidentiary document for everything that happens afterward, so you should read it carefully before signing, note any factual disagreement in writing at the time, and insist on a copy.',
  ],
  [
    'Does the department have to record a statement from me?',
    'A statement under Section 132(4) can be recorded from a person found in possession or control of books, documents, or assets during the search, and only by an officer of at least the rank of Income-tax Officer. You are entitled to review the statement as recorded before signing it, and to a copy of it. If a statement was made under duress or without an opportunity to verify its contents, that should be raised as a contemporaneous objection, ideally noted in the panchnama itself.',
  ],
  [
    'Can the department seize cash and jewellery found during a search?',
    'Yes, cash, bullion, jewellery, and other valuable articles or things found during a search can be seized if they represent undisclosed income or property, subject to conditions and exceptions set out in the search rules (for example, jewellery reasonably explained by household status or declared wealth is generally not seized). Seized assets are listed in the panchnama and can, subject to conditions, be adjusted against an existing or resulting tax liability.',
  ],
  [
    'What happens to my case after the search is over?',
    'Search assessments proceed under a dedicated set of provisions distinct from a regular scrutiny assessment, covering the searched year and a defined block of preceding years. These provisions have been renumbered under the Income Tax Act 2025; the exact new-Act section references were not consistently confirmed across authoritative sources at the time of writing, so this guide does not cite a specific new section number for the post-search assessment framework. Confirm the current citation with your CA once a search has taken place.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function SearchAndSeizureBlog() {
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
              <span className="section-badge">Income Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Search &amp; Seizure Under Income Tax: What Happens During a Raid
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 22, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>An income tax search under <strong>Section 132</strong> can only be authorised by specified senior officers on "reason to believe," and the team must show you the warrant before entering.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Everything found, examined, and seized is recorded in a <strong>panchnama</strong> in front of independent witnesses; read it carefully before signing.</li>
                    <li style={{ marginBottom: '0.4rem' }}>A statement under <strong>Section 132(4)</strong> can be recorded from anyone found in possession of the books, documents, or assets; you can review it before signing and are entitled to a copy.</li>
                    <li style={{ marginBottom: 0 }}>Cash, jewellery, and other valuables can be seized if they represent undisclosed income, subject to specific exceptions and conditions set out in the search rules.</li>
                  </ul>
                </div>

                <p>An income tax search, commonly called a "raid," is one of the most intrusive powers the Income Tax Department has, and also one of the most procedurally regulated. The law gives search officers wide authority to enter premises, examine books and assets, and record statements, but it also builds in specific safeguards for the person being searched. Knowing what is supposed to happen, in order, is the best protection you have if a search team arrives.</p>

                <h2>Who Can Order a Search, and Why</h2>
                <p>A search under <strong>Section 132</strong> of the Income Tax Act can only be authorised by specified senior officers, such as the Principal Director General, Director General, Principal Director, Director, Principal Chief Commissioner, Chief Commissioner, Principal Commissioner, or Commissioner. They must have "reason to believe," based on information already in their possession, that a person is in possession of undisclosed income or property, or has failed or will fail to produce books of account or documents that would be relevant if summoned. This threshold exists specifically so that a search is not a tool used on a whim by the officers who eventually execute it; the decision to search and the execution of the search are deliberately separated.</p>

                <h2>What Happens When the Team Arrives</h2>
                <p>The search party is required to identify themselves and show the search warrant (the authorisation) before beginning. You are entitled to see this document. From that point:</p>
                <ul>
                  <li><strong>Independent witnesses</strong> (panch witnesses, typically local residents unconnected to the department) are called in and remain present through the search.</li>
                  <li>The team can examine and, where necessary, break open locks, cupboards, or containers if access is refused, and can search the person present if there is reason to suspect concealment of relevant material.</li>
                  <li>Books of account, documents, and electronic records relevant to the case can be examined, marked, and, where warranted, seized.</li>
                  <li>Cash, bullion, jewellery, or other valuable articles found can be seized if they are not satisfactorily explained as recorded, declared, or reasonably held given the household's status, subject to the specific exceptions built into the search rules.</li>
                </ul>
                <p>The search can extend over more than one day if it is not completed, and the premises can be sealed in the interim (a "prohibitory order" under the search provisions) rather than left open between sessions.</p>

                <h2>The Panchnama: The Document That Matters Most</h2>
                <p><strong>The panchnama is the official contemporaneous record of the search</strong>, prepared and signed in the presence of the independent witnesses, the person searched, and the search team. It lists what was examined, what was seized, the timing of the search, and any statements made about specific items. Because this document becomes the reference point for every later stage, from assessment to any dispute over what was actually found, it is important to:</p>
                <ul>
                  <li>Read it fully before signing, item by item, rather than signing on trust.</li>
                  <li>Record any factual disagreement in writing at the time, not later; a contemporaneous objection carries far more weight than one raised weeks afterward.</li>
                  <li>Insist on receiving a copy, along with copies of any inventories or seizure lists prepared.</li>
                </ul>

                <h2>Statement Recording Under Section 132(4)</h2>
                <p>During the search, the officer conducting it (who must be at least of the rank of Income-tax Officer) can examine on oath any person found to be in possession or control of the books, documents, or assets being searched, and record a statement. This statement can later be used in assessment or penalty proceedings. You have the right to see the statement as recorded before signing it and to receive a copy. If a statement is made under pressure, without adequate time to verify facts, or without access to the underlying documents being asked about, that concern should be raised immediately and, ideally, noted at the time rather than reconstructed later; courts have repeatedly looked at whether an objection was contemporaneous when weighing whether a statement was truly voluntary.</p>

                <h2>What You Can Do During the Search</h2>
                <ul>
                  <li>Verify the search warrant and note the names and designations of the officers present.</li>
                  <li>Insist that independent witnesses are actually present, not just named on paper.</li>
                  <li>Ask for, and retain, copies of the panchnama, any statement recorded from you, and any inventory or seizure list.</li>
                  <li>Under Section 132(9), you are entitled to take copies of, or extracts from, seized books of account or documents, subject to reasonable conditions, since the originals may be retained for a period as part of the proceedings.</li>
                  <li>Cooperate with the procedural aspects of the search (access, identification, signing accurate records) while reserving your right to dispute the substance of any finding later, through your CA and, where necessary, through the assessment and appeal process.</li>
                </ul>

                <h2>After the Search: Assessment and Seized Asset Adjustment</h2>
                <p>A search triggers a distinct assessment process covering the searched year and a defined block of preceding years, run separately from a routine <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 143(2) scrutiny</Link>. Seized cash and, subject to conditions, other seized assets can be adjusted against an existing tax liability or a liability that arises from the search assessment itself, though the exact adjustment mechanics depend on the facts and the nature of the liability. These post-search assessment provisions have been renumbered under the Income Tax Act 2025; the specific new-Act section references were not consistently confirmed across authoritative sources at the time of writing, so this guide does not cite a number for them, the same discipline this site applies to other still-unconfirmed renumbering.</p>

                <p>A search is a legal process with defined steps, not an open-ended event, and the taxpayer's position at every later stage is shaped heavily by how carefully those steps were documented and objected to in real time. If you are facing a search, or have already been through one and are now dealing with the assessment that follows, involve a CA immediately rather than after the fact; the panchnama, the statements recorded, and the seized documents are the foundation the entire case is built on. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory and representation services</Link> cover search assessment support end to end.</p>
              </div>

              <PostCTA
            heading="Facing an income tax search or a post-search assessment?"
            description="We help individuals and businesses navigate search proceedings, statement review, and the assessment that follows."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20an%20income%20tax%20search%2Fseizure%20matter."
            secondaryExternal
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: Section 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/stay-of-demand-how-to-apply-when-you-dispute-a-tax-assessment" style={{ color: 'var(--primary)', fontWeight: 600 }}>Stay of Demand: How to Apply When You Dispute a Tax Assessment</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/faceless-assessment-scheme-how-it-works" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Assessment Scheme: How It Works</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
