import Link from 'next/link'
import { BOOKING_LINK } from '@/lib/constants'
import { formatDueDate, getDueDates, todayIST } from '@/lib/dueDates'

// "Next deadline" box under the TL;DR of every post that a due date in
// src/lib/dueDates.ts points to. The date comes from that file, so an extension
// is one edit there. Posts that render this must set `export const revalidate`
// so the countdown does not freeze at build time.

export default function DeadlineNotice({ slug }: { slug: string }) {
  const today = todayIST()
  // Only show a deadline that is close enough to act on.
  const horizon = new Date(Date.parse(today) + 120 * 86400000).toISOString().slice(0, 10)
  const next = getDueDates(today, horizon).find((d) => d.post === slug)
  if (!next) return null

  const days = Math.round((Date.parse(next.date) - Date.parse(today)) / 86400000)
  const when = days === 0 ? 'today' : days === 1 ? 'tomorrow' : `in ${days} days`

  return (
    <aside style={{ padding: '1.25rem 1.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--warning)', marginBottom: '2rem' }}>
      <p style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '1rem' }}>
        Next deadline: {formatDueDate(next.date)} ({when})
      </p>
      <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--text-light)' }}>
        {next.title}. {next.appliesTo}.
        {next.extendedFrom && <> Extended from {formatDueDate(next.extendedFrom)}.</>}
        {' '}We can prepare and file it for you before the date.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link href={BOOKING_LINK} className="btn btn-primary">Get it filed on time</Link>
        <Link href="/tools/compliance-calendar" className="btn btn-outline">All due dates</Link>
      </div>
    </aside>
  )
}
