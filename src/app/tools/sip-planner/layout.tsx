import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SIP & Retirement Planner | Free Investment Calculator India',
  description: 'Plan your SIP investments and retirement corpus. Calculate how much your monthly SIP will grow over time with compounding returns.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools/sip-planner' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
