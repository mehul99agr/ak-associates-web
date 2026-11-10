// Published starting fees for the NRI and US cross-border packages. Prices were
// given by the partners (Oct 26, 2026); change them here only, the service pages
// and the blog offer boxes all read this file.

export type ServicePackage = {
  id: string
  name: string
  price: string
  unit: string
  points: string[]
}

export const NRI_PACKAGES: ServicePackage[] = [
  {
    id: 'nri-property-sale',
    name: 'NRI Property Sale Advisory',
    price: '₹25,000 - ₹50,000',
    unit: 'per property',
    points: [
      'Capital gains computation before you sign',
      'Form 13 (now Form 128) lower TDS certificate application',
      'Form 145 / Form 146 (earlier 15CA / 15CB) for repatriation',
      'Fee within the range depends on the property and the paperwork involved',
    ],
  },
  {
    id: 'nri-itr',
    name: 'NRI Income Tax Return',
    price: 'From ₹10,000',
    unit: 'per return',
    points: [
      'Residential status check and the right ITR form',
      'DTAA relief and TDS refund claims',
      'Filed remotely; we work across US, UK, Gulf and other time zones',
    ],
  },
]

export const US_PACKAGES: ServicePackage[] = [
  {
    id: 'us-llc',
    name: 'US LLC Annual Package',
    price: '$850',
    unit: 'per year',
    points: [
      'Form 5472 with pro forma Form 1120 for a foreign-owned single-member LLC',
      'FBAR / FATCA review of your US and Indian accounts',
      'State annual report and tax deadline tracking',
    ],
  },
  {
    id: 'us-c-corp',
    name: 'US C-Corp Annual Package',
    price: '$1,250',
    unit: 'per year',
    points: [
      'Federal corporate return (Form 1120) with Form 5472',
      'Delaware annual report and franchise tax calculation',
      'FBAR / FATCA review of your US and Indian accounts',
    ],
  },
]

export const PACKAGE_NOTE = 'Starting fees. Government and state fees, and any taxes payable, are extra. Scope is confirmed in writing before we start.'
