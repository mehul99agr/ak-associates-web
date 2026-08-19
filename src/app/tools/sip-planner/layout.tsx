import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free SIP & Retirement Planner',
  description: 'Plan your SIP investments and retirement corpus. Calculate how much your monthly SIP will grow over time with compounding returns.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools/sip-planner' },
  openGraph: {
    title: 'Free SIP & Retirement Planner',
    description: 'Plan your SIP investments and retirement corpus. Calculate how much your monthly SIP will grow over time with compounding returns.',
    url: 'https://agrawalkhandelwal.com/tools/sip-planner',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SIP & Retirement Planner',
    description: 'Plan your SIP investments and retirement corpus. Calculate how much your monthly SIP will grow over time with compounding returns.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
