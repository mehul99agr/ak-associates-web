import type { Metadata } from 'next'
import { OG_IMAGES } from '@/lib/constants'
import BreadcrumbLd from '@/app/_components/BreadcrumbLd'

export const metadata: Metadata = {
  title: 'Capital Gains Tax Calculator (India)',
  description: 'Calculate long-term and short-term capital gains tax on equity, mutual funds, and property. Updated for FY 2025-26 with latest LTCG and STCG rates.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools/capital-gains' },
  openGraph: {
    title: 'Capital Gains Tax Calculator (India)',
    description: 'Calculate long-term and short-term capital gains tax on equity, mutual funds, and property. Updated for FY 2025-26 with latest LTCG and STCG rates.',
    url: 'https://agrawalkhandelwal.com/tools/capital-gains',
    type: 'website',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capital Gains Tax Calculator (India)',
    description: 'Calculate long-term and short-term capital gains tax on equity, mutual funds, and property. Updated for FY 2025-26 with latest LTCG and STCG rates.',
    images: OG_IMAGES,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbLd items={[{ name: 'Tools', path: '/tools' }, { name: 'Capital Gains Calculator', path: '/tools/capital-gains' }]} />
      {children}
    </>
  )
}
