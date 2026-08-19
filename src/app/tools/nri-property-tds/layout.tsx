import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRI Property TDS Calculator',
  description: 'Free calculator for TDS on NRI property sale in India: enter sale value and holding period to get the TDS amount, surcharge, cess, and net proceeds under Section 195 for FY 2026-27.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools/nri-property-tds' },
  openGraph: {
    title: 'NRI Property TDS Calculator',
    description: 'Free calculator: enter sale value and holding period to estimate TDS, surcharge, cess, and net proceeds for an NRI property sale under Section 195.',
    url: 'https://agrawalkhandelwal.com/tools/nri-property-tds',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'NRI Property TDS Calculator',
    description: 'Free calculator: estimate TDS, surcharge, cess, and net proceeds for an NRI property sale under Section 195.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
