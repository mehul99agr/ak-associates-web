import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRI Property TDS Calculator | FY 2026-27 Rates',
  description: 'Free calculator for TDS on NRI property sale in India: enter sale value and holding period to get the TDS amount, surcharge, cess, and net proceeds under Section 195 for FY 2026-27.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools/nri-property-tds' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
