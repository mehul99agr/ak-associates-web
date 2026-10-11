import type { Metadata } from 'next'
import Link from 'next/link'
import FaqSection from '../../blog/_components/FaqSection'
import { BOOKING_LINK, OG_IMAGES, WHATSAPP_LINK } from '@/lib/constants'
import { buildBreadcrumbLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { formatDueDate, formatDueDateShort, getDueDates, monthLabel, todayIST } from '@/lib/dueDates'

const URL = 'https://agrawalkhandelwal.com/tools/compliance-calendar'

// Months covered by the page. Extend RANGE_END when the next half-year is verified.
const RANGE_START = '2026-10-01'
const RANGE_END = '2027-03-31'

export const metadata: Metadata = {
  title: 'Compliance Due Date Calendar FY 2026-27',
  description: 'Income tax, GST, TDS and ROC due dates from October 2026 to March 2027, with extended dates marked: tax audit, audit-case ITR, Form 3CEB, GSTR-9, advance tax.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Compliance Due Date Calendar FY 2026-27',
    description: 'Month-by-month income tax, GST, TDS and ROC due dates for October 2026 to March 2027, with extensions marked.',
    url: URL,
    type: 'website',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary',
    title: 'Compliance Due Date Calendar FY 2026-27',
    description: 'Month-by-month income tax, GST, TDS and ROC due dates for October 2026 to March 2027, with extensions marked.',
    images: OG_IMAGES,
  },
}

// Regenerate hourly so passed dates are marked without a redeploy
export const revalidate = 3600

const faqs: FaqPair[] = [
  [
    'What is the tax audit report due date for AY 2026-27?',
    'October 21, 2026. The CBDT, by a press release dated September 28, 2026, extended the due date for the tax audit report for Assessment Year 2026-27 (Financial Year 2025-26) from September 30, 2026 to October 21, 2026.',
  ],
  [
    'What is the ITR due date for audit cases for AY 2026-27?',
    'November 21, 2026, extended from October 31, 2026 by the same CBDT press release. Taxpayers who must file a transfer pricing report in Form 3CEB are not covered by the extension: their Form 3CEB is due on October 31, 2026 and their return on November 30, 2026.',
  ],
  [
    'What is the due date for GSTR-9 and GSTR-9C for FY 2025-26?',
    'December 31, 2026 for both, unless extended by notification. The last date to claim input tax credit for FY 2025-26 comes earlier: November 30, 2026, or the date the annual return is filed if that is sooner.',
  ],
  [
    'When are the remaining advance tax instalments for FY 2026-27 due?',
    'December 15, 2026 for the third instalment (75% of the estimated tax for the year, cumulatively) and March 15, 2027 for the fourth (100%).',
  ],
]

const breadcrumbLd = buildBreadcrumbLd([
  { name: 'Home', item: 'https://agrawalkhandelwal.com' },
  { name: 'Tools', item: 'https://agrawalkhandelwal.com/tools' },
  { name: 'Compliance Calendar', item: URL },
])
const faqLd = buildFaqLd(faqs)

const chipStyle = {
  display: 'inline-block',
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.4px',
  textTransform: 'uppercase',
  padding: '2px 8px',
  borderRadius: '999px',
  border: '1px solid var(--border)',
  color: 'var(--text-muted)',
  background: 'var(--bg-surface)',
} as const

export default function ComplianceCalendarPage() {
  const today = todayIST()
  const dates = getDueDates(RANGE_START, RANGE_END)
  const months = Array.from(new Set(dates.map((d) => d.date.slice(0, 7))))
  const next = dates.filter((d) => d.date >= today && d.post).slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container" style={{ maxWidth: '960px' }}>
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem' }}>
              <span className="section-badge">Client Resources</span>
              <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Compliance Due Date Calendar: FY 2026-27</h1>
              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>
                Income tax, GST, TDS, ROC and payroll due dates from October 2026 to March 2027. Extended dates are marked
                with the original date, and each deadline links to our guide on it.
              </p>
            </div>

            {next.length > 0 && (
              <div className="card" style={{ marginBottom: '3rem', borderLeft: '4px solid var(--accent)' }}>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Next Key Deadlines</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
                  {next.map((d) => (
                    <Link key={d.date + d.title} href={`/blog/${d.post}`} style={{ background: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', display: 'block' }}>
                      <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '4px' }}>{formatDueDate(d.date)}</div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>{d.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {months.map((ym) => (
              <section key={ym} style={{ marginBottom: '2.5rem' }} aria-labelledby={`m-${ym}`}>
                <h2 id={`m-${ym}`} style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{monthLabel(ym)}</h2>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
                  {dates.filter((d) => d.date.startsWith(ym)).map((d, i) => {
                    const passed = d.date < today
                    return (
                      <li key={d.date + d.title} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.25rem', padding: '1rem 1.25rem', borderTop: i > 0 ? '1px solid var(--border)' : undefined, opacity: passed ? 0.6 : 1 }}>
                        <div style={{ flex: '0 0 4.5rem', color: passed ? 'var(--text-muted)' : 'var(--accent)', fontWeight: 800, fontSize: '1.05rem' }}>
                          <time dateTime={d.date}>{formatDueDateShort(d.date)}</time>
                        </div>
                        <div style={{ flex: '1 1 16rem', minWidth: 0 }}>
                          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '4px' }}>
                            {d.post ? (
                              <Link href={`/blog/${d.post}`} style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.98rem' }}>{d.title}</Link>
                            ) : (
                              <span style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.98rem' }}>{d.title}</span>
                            )}
                            <span style={chipStyle}>{d.category}</span>
                            {d.extendedFrom && (
                              <span style={{ ...chipStyle, color: 'var(--accent)', borderColor: 'var(--accent)', background: 'var(--bg-card)' }}>
                                Extended from {formatDueDateShort(d.extendedFrom)}
                              </span>
                            )}
                            {passed && <span style={chipStyle}>Passed</span>}
                          </div>
                          <div style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{d.appliesTo}</div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </section>
            ))}

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
              <h2 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>How to Read This Calendar</h2>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li>Monthly GSTR-1 and GSTR-3B dates are for monthly filers. Taxpayers under the QRMP scheme file quarterly on different dates.</li>
                <li>Form AOC-4 and Form MGT-7 run from the date of the AGM. The dates shown assume an AGM held on September 30, 2026.</li>
                <li>When a due date falls on a public holiday, the next working day generally applies.</li>
                <li>
                  Due dates are extended at short notice. Confirm the current position on the{' '}
                  <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax e-filing portal</a>, the{' '}
                  <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST portal</a> and the{' '}
                  <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>MCA portal</a> before filing.
                </li>
              </ul>
            </div>

            <FaqSection faqs={faqs} heading="Due Date Questions for FY 2026-27" />

            <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', color: 'var(--white)', textAlign: 'center', marginTop: '4rem', borderRadius: 'var(--radius-lg)', padding: '3.5rem 2rem' }}>
              <h2 style={{ color: 'var(--white)', marginBottom: '0.75rem' }}>Want These Filed on Time for You?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px', margin: '0.75rem auto 2rem' }}>
                Our <Link href="/ca-in-nashik" style={{ color: 'var(--white)', textDecoration: 'underline' }}>Nashik</Link> and{' '}
                <Link href="/ca-in-sillod" style={{ color: 'var(--white)', textDecoration: 'underline' }}>Sillod</Link> offices handle
                GST, TDS, tax audit and ROC filings through the year. The first consultation is free.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--accent)', color: 'var(--white)', fontWeight: 700 }}>Book Free Consultation</a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Chat on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
