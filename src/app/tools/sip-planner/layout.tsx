import type { Metadata } from 'next'
import { OG_IMAGES } from '@/lib/constants'
import BreadcrumbLd from '@/app/_components/BreadcrumbLd'

export const metadata: Metadata = {
  title: 'Free SIP & Retirement Planner',
  description: 'Plan your SIP investments and retirement corpus. Calculate how much your monthly SIP will grow over time with compounding returns.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools/sip-planner' },
  openGraph: {
    title: 'Free SIP & Retirement Planner',
    description: 'Plan your SIP investments and retirement corpus. Calculate how much your monthly SIP will grow over time with compounding returns.',
    url: 'https://agrawalkhandelwal.com/tools/sip-planner',
    type: 'website',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SIP & Retirement Planner',
    description: 'Plan your SIP investments and retirement corpus. Calculate how much your monthly SIP will grow over time with compounding returns.',
    images: OG_IMAGES,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbLd items={[{ name: 'Tools', path: '/tools' }, { name: 'SIP & Retirement Planner', path: '/tools/sip-planner' }]} />
      {children}
    </>
  )
}
