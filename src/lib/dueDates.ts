// Website 2.0 (Nov 28, 2026): GST, payroll and tax-audit dates removed; NRI, TDS on
// non-resident payments, transfer pricing and ROC dates remain.
// Compliance due dates shown on /tools/compliance-calendar, the blog index and
// the homepage. Single source of truth: when a date is extended, add or edit a
// SPECIFIC entry here and every surface follows.
//
// Only add a date that has been checked against the notification, press release
// or portal. `post` is the slug of our guide for that deadline, if one exists.

export type DueDateCategory = 'Income Tax' | 'TDS' | 'ROC'

export type DueDate = {
  /** ISO date, YYYY-MM-DD */
  date: string
  title: string
  appliesTo: string
  category: DueDateCategory
  /** ISO date this deadline was extended from, if it was extended */
  extendedFrom?: string
  /** Blog slug of the matching guide */
  post?: string
}

type Monthly = Omit<DueDate, 'date' | 'appliesTo'> & { day: number; appliesTo: (period: string) => string }
type Annual = Omit<DueDate, 'date'> & { id: string; month: number; day: number }
type Specific = DueDate & { id?: string }

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// Filed or paid every month for the previous month.
const MONTHLY: Monthly[] = [
  { day: 7, title: 'TDS deposit (incl. payments to NRIs)', category: 'TDS', appliesTo: (p) => `Tax deducted in ${p}, including TDS on property bought from an NRI` },
]

// Statutory dates that repeat every year (month is 1-12). A SPECIFIC entry with
// the same id replaces the occurrence it was extended from.
const ANNUAL: Annual[] = [
  { id: 'tds-q3', month: 1, day: 31, title: 'TDS return, Q3 (Oct to Dec)', category: 'TDS', appliesTo: 'All deductors: quarterly TDS statements', post: 'form-27q-tds-return-filing-guide' },
  { id: 'advance-tax-4', month: 3, day: 15, title: 'Advance tax, 4th instalment (100%)', category: 'Income Tax', appliesTo: 'Taxpayers with tax payable of Rs 10,000 or more; also the single instalment for presumptive taxpayers' },
  { id: 'tds-q4', month: 5, day: 31, title: 'TDS return, Q4 (Jan to Mar)', category: 'TDS', appliesTo: 'All deductors: quarterly TDS statements', post: 'form-27q-tds-return-filing-guide' },
  { id: 'advance-tax-1', month: 6, day: 15, title: 'Advance tax, 1st instalment (15%)', category: 'Income Tax', appliesTo: 'Taxpayers with tax payable of Rs 10,000 or more' },
  { id: 'itr-non-audit', month: 7, day: 31, title: 'Income tax return', category: 'Income Tax', appliesTo: 'Non-audit taxpayers' },
  { id: 'tds-q1', month: 7, day: 31, title: 'TDS return, Q1 (Apr to Jun)', category: 'TDS', appliesTo: 'All deductors: quarterly TDS statements', post: 'form-27q-tds-return-filing-guide' },
  { id: 'advance-tax-2', month: 9, day: 15, title: 'Advance tax, 2nd instalment (45%)', category: 'Income Tax', appliesTo: 'Taxpayers with tax payable of Rs 10,000 or more' },
  { id: 'aoc-4', month: 10, day: 30, title: 'Form AOC-4 (financial statements)', category: 'ROC', appliesTo: 'Companies that held their AGM on September 30 (30 days from the AGM)', post: 'annual-roc-filing-aoc4-mgt7-dir3-kyc' },
  { id: 'itr-audit', month: 10, day: 31, title: 'Income tax return, audit cases', category: 'Income Tax', appliesTo: 'Taxpayers whose accounts are audited' },
  { id: 'form-3ceb', month: 10, day: 31, title: 'Form 3CEB (transfer pricing report)', category: 'Income Tax', appliesTo: 'Taxpayers with international or specified domestic transactions', post: 'form-3ceb-transfer-pricing-audit-report' },
  { id: 'tds-q2', month: 10, day: 31, title: 'TDS return, Q2 (Jul to Sep)', category: 'TDS', appliesTo: 'All deductors: quarterly TDS statements', post: 'form-27q-tds-return-filing-guide' },
  { id: 'mgt-7', month: 11, day: 29, title: 'Form MGT-7 / MGT-7A (annual return)', category: 'ROC', appliesTo: 'Companies that held their AGM on September 30 (60 days from the AGM)', post: 'annual-roc-filing-aoc4-mgt7-dir3-kyc' },
  { id: 'itr-tp', month: 11, day: 30, title: 'Income tax return, transfer pricing cases', category: 'Income Tax', appliesTo: 'Taxpayers required to file Form 3CEB', post: 'form-3ceb-transfer-pricing-audit-report' },
  { id: 'advance-tax-3', month: 12, day: 15, title: 'Advance tax, 3rd instalment (75%)', category: 'Income Tax', appliesTo: 'Taxpayers with tax payable of Rs 10,000 or more' },
  { id: 'belated-itr', month: 12, day: 31, title: 'Belated income tax return', category: 'Income Tax', appliesTo: 'Taxpayers who missed the original due date' },
]

// Year-specific dates: extensions and one-off schemes.
const SPECIFIC: Specific[] = [
  // CBDT press release of September 28, 2026 (AY 2026-27)
  { id: 'itr-audit', date: '2026-11-21', extendedFrom: '2026-10-31', title: 'Income tax return, audit cases (AY 2026-27)', category: 'Income Tax', appliesTo: 'Taxpayers whose accounts are audited, other than transfer pricing cases' },
  // MCA General Circular 05/2026 of October 24, 2026 (FY 2025-26): additional fees
  // waived up to these dates. The AGM deadline itself is not extended.
  { id: 'aoc-4', date: '2026-12-31', extendedFrom: '2026-10-30', title: 'Form AOC-4 without additional fees (FY 2025-26)', category: 'ROC', appliesTo: 'Companies filing FY 2025-26 financial statements (MCA General Circular 05/2026)', post: 'annual-roc-filing-aoc4-mgt7-dir3-kyc' },
  { id: 'mgt-7', date: '2027-01-31', extendedFrom: '2026-11-29', title: 'Form MGT-7 / MGT-7A without additional fees (FY 2025-26)', category: 'ROC', appliesTo: 'Companies filing the FY 2025-26 annual return (MCA General Circular 05/2026)', post: 'annual-roc-filing-aoc4-mgt7-dir3-kyc' },
  // Finance Act 2026: revised return window extended to 12 months, fee after 9 months.
  { date: '2027-03-31', title: 'Revised income tax return (AY 2026-27)', category: 'Income Tax', appliesTo: 'Taxpayers correcting a return already filed; a fee applies to revisions after December 31, 2026' },
  { date: '2026-12-31', title: 'FAST-DS 2026 declaration window closes', category: 'Income Tax', appliesTo: 'Resident small taxpayers with undisclosed foreign assets', post: 'fast-ds-2026-foreign-assets-disclosure-scheme' },
]

const iso = (y: number, m: number, d: number) => `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`

/** All due dates from `from` to `to` (ISO dates, inclusive), earliest first. */
export function getDueDates(from: string, to: string): DueDate[] {
  const out: DueDate[] = []
  const replaced = new Set(SPECIFIC.filter((s) => s.id).flatMap((s) => [`${s.id}:${s.extendedFrom}`, `${s.id}:${s.date}`]))
  const startYear = Number(from.slice(0, 4))
  const endYear = Number(to.slice(0, 4))

  for (let y = startYear; y <= endYear; y++) {
    for (let m = 1; m <= 12; m++) {
      const prev = `${MONTH_NAMES[(m + 10) % 12]} ${m === 1 ? y - 1 : y}`
      for (const r of MONTHLY) {
        out.push({ date: iso(y, m, r.day), title: r.title, category: r.category, appliesTo: r.appliesTo(prev) })
      }
    }
    for (const { id, month, day, ...rest } of ANNUAL) {
      const date = iso(y, month, day)
      if (!replaced.has(`${id}:${date}`)) out.push({ date, ...rest })
    }
  }
  for (const { id: _id, ...rest } of SPECIFIC) out.push(rest)

  return out.filter((d) => d.date >= from && d.date <= to).sort((a, b) => a.date.localeCompare(b.date))
}

/** Today's date in India (ISO), so lists roll over at midnight IST rather than UTC. */
export function todayIST(): string {
  return new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().slice(0, 10)
}

/** "2026-10-21" -> "October 21, 2026" */
export function formatDueDate(date: string): string {
  const [y, m, d] = date.split('-').map(Number)
  return `${MONTH_NAMES[m - 1]} ${d}, ${y}`
}

/** "2026-10-21" -> "21 Oct" */
export function formatDueDateShort(date: string): string {
  const [, m, d] = date.split('-').map(Number)
  return `${d} ${MONTH_NAMES[m - 1].slice(0, 3)}`
}

export function monthLabel(yearMonth: string): string {
  const [y, m] = yearMonth.split('-').map(Number)
  return `${MONTH_NAMES[m - 1]} ${y}`
}

/**
 * The next `count` deadlines that have a guide on the site, skipping the
 * routine monthly filings.
 */
export function getUpcomingKeyDates(count: number): DueDate[] {
  const today = todayIST()
  const horizon = `${Number(today.slice(0, 4)) + 1}${today.slice(4)}`
  return getDueDates(today, horizon).filter((d) => d.post).slice(0, count)
}
