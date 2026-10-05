import type { Metadata } from 'next'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'NRI Property TDS Calculator',
  description: 'Free NRI property sale TDS calculator: enter sale value and holding period to get TDS, surcharge, cess and net proceeds under Section 393(2) for FY 2026-27.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools/nri-property-tds' },
  openGraph: {
    title: 'NRI Property TDS Calculator',
    description: 'Free calculator: enter sale value and holding period to estimate TDS, surcharge, cess, and net proceeds for an NRI property sale under Section 393(2) (earlier Section 195).',
    url: 'https://agrawalkhandelwal.com/tools/nri-property-tds',
    type: 'website',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary',
    title: 'NRI Property TDS Calculator',
    description: 'Free calculator: estimate TDS, surcharge, cess, and net proceeds for an NRI property sale under Section 393(2) (earlier Section 195).',
    images: OG_IMAGES,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
