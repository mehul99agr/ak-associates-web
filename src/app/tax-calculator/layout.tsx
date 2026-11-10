import type { Metadata } from 'next'
import { OG_IMAGES } from '@/lib/constants'
import { buildFaqLd, type FaqPair } from '@/lib/schema'
import FaqSection from '../blog/_components/FaqSection'

export const metadata: Metadata = {
  title: 'Income Tax Calculator India',
  description: 'Free income tax calculator for FY 2026-27 and FY 2025-26. Compare old vs new regime, tax, cess and the Rs 12 lakh rebate.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tax-calculator' },
  openGraph: {
    title: 'Income Tax Calculator India',
    description: 'Free income tax calculator for FY 2026-27 and FY 2025-26. Compare old vs new regime, tax, cess and the Rs 12 lakh rebate.',
    url: 'https://agrawalkhandelwal.com/tax-calculator',
    type: 'website',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Income Tax Calculator India',
    description: 'Free income tax calculator for FY 2026-27 and FY 2025-26. Compare old vs new regime, tax, cess and the Rs 12 lakh rebate.',
    images: OG_IMAGES,
  },
}

const faqs: FaqPair[] = [
  ['Which tax regime is better for FY 2026-27?', 'For most salaried people the new regime is cheaper: taxable income up to Rs 12 lakh is tax-free after the rebate, and salary up to Rs 12.75 lakh after the Rs 75,000 standard deduction. The old regime usually wins only if your deductions (80C, 80D, home loan interest, HRA) exceed roughly Rs 3.75-4 lakh.'],
  ['Did Budget 2026 change the income tax slabs?', 'No. FY 2026-27 uses the same new regime slabs, Rs 12 lakh rebate and Rs 75,000 standard deduction as FY 2025-26, so the calculator applies the same rates to both years.'],
  ['What does this estimator not cover?', 'It estimates tax on salary-type income at slab rates. It does not compute surcharge, marginal relief just above Rs 12 lakh, or special-rate income such as capital gains, which the rebate does not cover. For those, ask a CA to compute your exact liability.'],
  ['Can I switch between the old and new regime every year?', 'Salaried individuals with no business income can choose each year when filing the return. Taxpayers with business or professional income have more limited switching options.'],
]

function ToolFaqs() {
  return (
    <div style={{ background: 'var(--bg-surface)', paddingBottom: '4rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqLd(faqs)) }} />
      <div className="container" style={{ maxWidth: '860px' }}>
        <FaqSection faqs={faqs} />
      </div>
    </div>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToolFaqs />
    </>
  )
}
