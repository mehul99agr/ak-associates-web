import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Clubbing of Income: Spouse & Minor Tax Rules' },
  description: 'When income from assets you transfer to your spouse or minor child is taxed to you instead of them under Section 64, and the exceptions that let you avoid it.',
  keywords: [
    'clubbing of income India', 'Section 64 income tax', 'clubbing of minor income',
    'spouse income tax clubbing', 'income tax on gift to spouse', 'minor child income tax India',
    'clubbing provisions exceptions', 'PPF clubbing minor',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/clubbing-of-income-spouse-minor-tax-rules' },
  openGraph: {
    title: 'Clubbing of Income: Spouse & Minor Tax Rules',
    description: 'When income from assets transferred to a spouse or minor child gets taxed to you instead, under Section 64, and how to plan around it legally.',
    url: 'https://agrawalkhandelwal.com/blog/clubbing-of-income-spouse-minor-tax-rules',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clubbing of Income: Spouse & Minor Tax Rules',
    description: 'When income from assets transferred to a spouse or minor child gets taxed to you instead, under Section 64, and how to plan around it legally.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Clubbing of Income: Spouse & Minor Tax Rules', 'clubbing-of-income-spouse-minor-tax-rules')

const articleLd = buildArticleLd({
  headline: 'Clubbing of Income: When Spouse or Minor Income Is Taxed to You',
  description: 'How Section 64 clubbing provisions work for income transferred to a spouse or minor child, the common exceptions, and how to structure gifts and investments to avoid unintended clubbing.',
  datePublished: '2026-09-25',
  slug: 'clubbing-of-income-spouse-minor-tax-rules',
})

const faqs: FaqPair[] = [
  [
    'What is clubbing of income under Section 64?',
    'Clubbing of income is a set of anti-avoidance rules under Section 64 of the Income Tax Act that tax certain income in the hands of the person who transferred the underlying asset, rather than the person who legally owns it. It mainly targets income shifted to a spouse or minor child to reduce the family\'s overall tax, and applies regardless of whether the transfer was intended for tax saving or not.',
  ],
  [
    'Does gifting money to my spouse avoid tax on the income it earns?',
    'No. If you gift money or an asset to your spouse without adequate consideration and they invest it, the income earned on that investment (interest, dividend, rent, or capital gains) is clubbed with and taxed in your hands, not your spouse\'s, under Section 64(1)(iv). The gift itself is not taxed, but the ongoing income from it keeps being attributed back to you for as long as the asset is held.',
  ],
  [
    'Is all income of a minor child clubbed with the parent?',
    'Most is, but not all. Income earned by a minor from investments or assets gifted by a parent is clubbed with the parent who has the higher total income for that year, under Section 64(1A). The main exceptions are income the minor earns through their own skill, talent, or manual work (for example, child actors or athletes), and income of a minor child with a recognised disability under Section 80U, neither of which gets clubbed.',
  ],
  [
    'Can I invest in my spouse\'s or child\'s PPF account without clubbing?',
    'Yes, practically. PPF interest is fully exempt from tax under Section 10(11), so even though the clubbing provision technically applies to the underlying asset, there is no taxable income to club. This makes PPF one of the few investments where routing funds through a spouse or minor account creates no clubbing exposure at all.',
  ],
  [
    'What is the Rs 1,500 exemption for minor child income?',
    'Under Section 10(32), a parent whose income includes a clubbed minor child\'s income can claim an exemption of up to Rs 1,500 per child per year (or the actual clubbed income, if lower). This is a small, flat relief and applies per child, not per source of income, so it rarely offsets a meaningful investment return.',
  ],
  [
    'Do "cross transfers" between spouses also get clubbed?',
    'Yes. Courts have held that if two people cross-transfer assets to each other\'s spouse or minor child specifically to bypass clubbing (for example, A gifts to B\'s spouse while B gifts an equivalent amount to A\'s spouse), the arrangement is treated for tax purposes as if each person had transferred directly to their own spouse. The clubbing rules cannot be sidestepped through this kind of reciprocal arrangement.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function ClubbingOfIncomeBlog() {
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
                Clubbing of Income: When Spouse or Minor Income Is Taxed to You
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>September 25, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Gift money to a spouse or minor child and the income it earns is usually still taxed to <strong>you</strong>, under Section 64, not to them.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Minor child income is clubbed with the parent who has the <strong>higher total income</strong>, with a small Rs 1,500/child exemption.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Key exceptions: a minor&apos;s own skill/talent income, income of a disabled minor, and tax-exempt investments like PPF.</li>
                    <li style={{ marginBottom: 0 }}>Cross-transfers between spouses to dodge clubbing are treated as if made directly, and get clubbed anyway.</li>
                  </ul>
                </div>

                <p>A common piece of well-meaning tax advice, &quot;put the investment in your spouse&apos;s name, they&apos;re in a lower bracket&quot;, runs straight into one of the oldest anti-avoidance provisions in Indian tax law: clubbing of income under Section 64. Understanding where it applies, and where it genuinely does not, prevents both under-reporting income at scrutiny and over-cautiously avoiding legitimate family financial planning.</p>

                <h2>What Clubbing of Income Means</h2>
                <p><strong>Clubbing of income taxes certain income in the hands of the person who transferred the underlying asset, not the person who legally holds it.</strong> It exists because, without it, high-income taxpayers could shift investments to a spouse or child in a lower tax bracket and cut the family&apos;s total tax bill without giving up any real control over the money. Section 64 identifies specific relationships and transaction types where this shifting is disregarded for tax purposes.</p>

                <h2>Income From Assets Transferred to Your Spouse</h2>
                <p>Under Section 64(1)(iv), if you transfer an asset (cash, shares, property, anything) to your spouse without adequate consideration, and not as part of a genuine settlement in connection with an agreement to live apart, the income that asset generates continues to be taxed in your hands for as long as you both remain married and the asset is held. This covers interest on a gifted fixed deposit, dividends on gifted shares, rental income on a gifted property, and capital gains on eventual sale of a gifted asset.</p>
                <p>Separately, Section 64(1)(ii) clubs a spouse&apos;s salary, commission, fees, or remuneration from a business or company in which you (the other spouse) hold a substantial interest, unless the spouse has genuine technical or professional qualifications relevant to the role they are paid for. This provision is aimed squarely at nominal directorships or token salaries paid to a spouse purely to split income.</p>

                <h2>Income of a Minor Child</h2>
                <p>Section 64(1A) clubs all income of a minor child with the parent who has the higher total income in that financial year, and once clubbed with one parent, it continues with that same parent in later years unless the tax officer is satisfied it should shift, on the strength of the other parent&apos;s income overtaking them. Two exceptions matter in practice:</p>
                <ul>
                  <li><strong>Income from the minor&apos;s own skill or manual work:</strong> If a minor earns income through their own talent, skill, or specialised knowledge (a child actor&apos;s fee, a young athlete&apos;s prize money), that income is taxed in the minor&apos;s own hands, not clubbed with a parent.</li>
                  <li><strong>Income of a disabled minor:</strong> If the minor child has a disability of the kind specified under Section 80U, none of their income is clubbed with either parent.</li>
                </ul>
                <p>A minor&apos;s clubbed income also carries a narrow relief: under Section 10(32), the parent can claim an exemption of up to Rs 1,500 per child per year against the clubbed amount. It is a modest number that has not moved in decades and rarely offsets a meaningful investment return, so it should be treated as a minor administrative benefit, not a planning lever.</p>

                <h2>Transfers to a Son&apos;s Wife</h2>
                <p>Section 64(1)(vi) extends the same logic to a daughter-in-law: if you transfer an asset to your son&apos;s wife without adequate consideration, income from that asset is clubbed with your income, not hers. This provision is frequently missed in family tax planning because attention naturally goes to spouse and minor-child transfers, but transfers to a daughter-in-law carry the identical exposure.</p>

                <h2>The Cross-Transfer Trap</h2>
                <p>Some taxpayers have tried to defeat clubbing through reciprocal arrangements: instead of gifting directly to your own spouse, you gift to a friend or relative&apos;s spouse, while they gift an equivalent amount to yours. Indian courts closed this loophole decades ago, treating such cross-transfers as economically equivalent to a direct transfer and clubbing the income exactly as if no intermediary had been used. Any arrangement designed primarily to route around Section 64 rather than serve a genuine independent purpose invites the same scrutiny.</p>

                <h2>What Is Not Clubbed</h2>
                <p>Three situations commonly get treated as clubbing risks when they are not:</p>
                <ul>
                  <li><strong>Income from income:</strong> once clubbed income is reinvested by the spouse or child and generates a further round of returns, that second-generation income is generally not clubbed again; only the first-level income from the originally transferred asset is caught.</li>
                  <li><strong>Adequate consideration:</strong> if the transfer was for genuine, adequate consideration (a real sale at fair value, not a token payment), Section 64 does not apply at all, since there was no gratuitous transfer to begin with.</li>
                  <li><strong>Exempt-income investments:</strong> PPF interest is fully exempt under Section 10(11), so routing funds into a spouse&apos;s or minor&apos;s PPF account creates no taxable income to club in the first place, even though the clubbing provision technically still applies to the asset.</li>
                </ul>

                <h2>Practical Planning Within the Rules</h2>
                <p>Clubbing is not a reason to avoid all family financial planning; it is a reason to plan with the rule in mind. Genuine gifts where the recipient independently controls and manages the asset for their own goals (a spouse&apos;s pre-marriage assets, income the spouse independently earns from employment or a qualified professional role, a major child&apos;s own investments) are unaffected. Where a family does want to move wealth toward a spouse or minor, tax-exempt instruments like PPF, or accepting that the income will be taxed to the transferor and planning cash flow accordingly, are the two clean paths; trying to disguise a gift as a loan or a sham consideration to dodge Section 64 tends to create bigger problems at assessment than it solves.</p>

                <p>If you are structuring family investments, an HUF is often the more tax-efficient vehicle than direct transfers to a spouse or minor, since income earned by HUF assets is taxed to the HUF as its own separate entity rather than clubbed back to an individual; see our companion guide on <Link href="/blog/huf-taxation-india-formation-benefits-filing" style={{ color: 'var(--primary)', fontWeight: 600 }}>HUF taxation, formation, and benefits</Link> for how that works.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Planning investments across family members?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help families structure gifts, HUF assets, and spouse/minor investments so income lands where you expect it to, without a clubbing surprise at assessment.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20have%20a%20question%20about%20clubbing%20of%20income%20rules." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/huf-taxation-india-formation-benefits-filing" style={{ color: 'var(--primary)', fontWeight: 600 }}>HUF Taxation in India: Formation, Benefits &amp; Filing</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/capital-gains-tax-shares-mutual-funds-equity-debt" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains Tax on Shares &amp; Mutual Funds</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>All Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
