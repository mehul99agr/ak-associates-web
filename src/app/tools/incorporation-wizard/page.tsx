import type { Metadata } from 'next'
import IncorporationWizard from './IncorporationWizard'

export const metadata: Metadata = {
  title: 'Company Type Finder: Private Limited vs LLP vs OPC India | AK & Associates',
  description: 'Not sure which company structure to register in India? Answer 4 questions and get a CA-backed recommendation: Private Limited, LLP, or OPC: tailored to your funding plans, team size, and compliance appetite.',
  keywords: [
    'company incorporation India', 'private limited vs LLP India',
    'which company to register India', 'LLP vs private limited company India',
    'OPC registration India', 'company structure India startup',
    'how to incorporate company India', 'best company type India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools/incorporation-wizard' },
  openGraph: {
    title: 'Company Type Finder: Private Limited vs LLP vs OPC India',
    description: 'Answer 4 quick questions and find out whether you should register a Private Limited Company, LLP, or OPC in India.',
    url: 'https://agrawalkhandelwal.com/tools/incorporation-wizard',
  },
}

export default function IncorporationWizardPage() {
  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <h4 className="section-badge">Business Advisory</h4>
          <h1 className="section-title">Should I Incorporate? Which Structure?</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Answer 4 simple questions to find out the best legal structure for your new business in India.
          </p>
        </div>
        <IncorporationWizard />
      </div>
    </div>
  )
}
