import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capital Gains Tax Calculator India | LTCG & STCG 2025',
  description: 'Calculate long-term and short-term capital gains tax on equity, mutual funds, and property. Updated for FY 2025-26 with latest LTCG and STCG rates.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools/capital-gains' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
