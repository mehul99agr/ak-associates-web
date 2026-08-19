import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Income Tax Calculator India FY 2025-26 | Old vs New Regime',
  description: 'Free income tax calculator for FY 2025-26. Compare old vs new tax regime, calculate tax liability, cess, and rebate under the latest Income Tax Act.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tax-calculator' },
  openGraph: {
    title: 'Income Tax Calculator India FY 2025-26 | Old vs New Regime',
    description: 'Free income tax calculator for FY 2025-26. Compare old vs new tax regime, calculate tax liability, cess, and rebate under the latest Income Tax Act.',
    url: 'https://agrawalkhandelwal.com/tax-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Income Tax Calculator India FY 2025-26 | Old vs New Regime',
    description: 'Free income tax calculator for FY 2025-26. Compare old vs new tax regime, calculate tax liability, cess, and rebate under the latest Income Tax Act.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
