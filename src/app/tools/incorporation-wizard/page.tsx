import type { Metadata } from 'next'
import IncorporationWizard from './IncorporationWizard'
import { OG_IMAGES } from '@/lib/constants'

import { buildFaqLd, type FaqPair } from '@/lib/schema'
import FaqSection from '../../blog/_components/FaqSection'

export const metadata: Metadata = {
  title: 'Company Type Finder Tool (India)',
  description: 'Not sure which company structure to register in India? Answer 4 questions and get a CA-backed recommendation: Private Limited, LLP, or OPC.',
  keywords: [
    'company incorporation India', 'private limited vs LLP India',
    'which company to register India', 'LLP vs private limited company India',
    'OPC registration India', 'company structure India startup',
    'how to incorporate company India', 'best company type India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools/incorporation-wizard' },
  openGraph: {
    title: 'Company Type Finder Tool (India)',
    description: 'Answer 4 quick questions and find out whether you should register a Private Limited Company, LLP, or OPC in India.',
    url: 'https://agrawalkhandelwal.com/tools/incorporation-wizard',
    images: OG_IMAGES,
  },
}

const faqs: FaqPair[] = [
  ['Should I register a private limited company or an LLP?', 'Choose a private limited company if you plan to raise investment or issue ESOPs, since investors need shares. An LLP suits bootstrapped professional or consulting businesses because it has lighter compliance.'],
  ['Is there a minimum capital to start a company in India?', 'No. There is no minimum paid-up capital for a private limited company or LLP. MCA filing fees are nil up to Rs 15 lakh authorised capital; state stamp duty still applies.'],
  ['Can I start as a sole proprietor and convert later?', 'Yes. Many businesses start as a proprietorship and incorporate when they need funding, limited liability or larger contracts. Converting later involves transferring assets, contracts and registrations to the new entity.'],
  ['Can an NRI or foreign national own an Indian company?', 'Yes. NRIs and foreign nationals can be shareholders and directors, subject to FDI rules, but at least one director must have stayed in India for 182 days or more in the financial year.'],
]

function ToolFaqs() {
  return (
    <div style={{ background: 'var(--bg-surface)', paddingBottom: '4rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqLd(faqs)) }} />
      <div className="container" style={{ maxWidth: '860px' }}>
        <FaqSection faqs={faqs} />
      </div>
    </div>
  )
}

export default function IncorporationWizardPage() {
  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '100px' }}>
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
      <ToolFaqs />
    </div>
  )
}
