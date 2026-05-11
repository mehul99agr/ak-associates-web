import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GSTIN Search & Verify | Free GST Number Lookup India',
  description: 'Instantly search and verify any GSTIN. Check GST registration status, business name, and filing details for any taxpayer in India.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools/gst-search' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
