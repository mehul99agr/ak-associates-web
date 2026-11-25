// Published fees for the NRI, US cross-border and startup packages. Prices were
// given by the partners (Oct 26, 2026; lower TDS certificate, US 'around' wording and
// the startup package added Nov 25, 2026). Change them here and in
// src/app/blog/_components/ServiceOffer.tsx, which repeats them in sentences.

export type ServicePackage = {
  id: string
  name: string
  price: string
  unit: string
  points: string[]
  /** Shown under the price, e.g. what is extra. */
  note?: string
}

export const NRI_PACKAGES: ServicePackage[] = [
  {
    id: 'nri-lower-tds-certificate',
    name: 'Lower TDS Certificate',
    price: '₹14,999',
    unit: 'per certificate',
    note: 'Plus out-of-pocket expenses and GST, if applicable',
    points: [
      'Estimate of the tax you actually owe on the sale or income, so TDS is cut to match it',
      'Form 128 (earlier Form 13) application on TRACES with the supporting computation',
      'Replies to queries from the tax officer while the application is processed',
    ],
  },
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
    price: 'Around $850',
    unit: 'per year',
    note: 'Final fee depends on which filings apply to your LLC',
    points: [
      'Form 5472 with pro forma Form 1120 for a foreign-owned single-member LLC',
      'FBAR / FATCA review of your US and Indian accounts',
      'State annual report and tax deadline tracking',
    ],
  },
  {
    id: 'us-c-corp',
    name: 'US C-Corp Annual Package',
    price: 'Around $1,250',
    unit: 'per year',
    note: 'Final fee depends on which filings apply to your company',
    points: [
      'Federal corporate return (Form 1120) with Form 5472',
      'Delaware annual report and franchise tax calculation',
      'FBAR / FATCA review of your US and Indian accounts',
    ],
  },
]

export const STARTUP_PACKAGES: ServicePackage[] = [
  {
    id: 'startup-launch',
    name: 'Incorporation + First-Year Compliance',
    price: '₹99,000',
    unit: 'incorporation and year one',
    note: 'Plus out-of-pocket expenses and GST, if applicable',
    points: [
      'Private limited company incorporation: name approval, DSCs, DINs, MOA and AOA, SPICe+ filing, PAN and TAN',
      'Post-incorporation set-up: INC-20A commencement of business, first board meeting, first auditor appointment and statutory registers',
      'First-year ROC annual filings: AOC-4 and MGT-7 / MGT-7A',
    ],
  },
]

export const PACKAGE_NOTE = 'Professional fees. Out-of-pocket expenses (government, state and portal fees) and GST, where applicable, are extra. Scope is confirmed in writing before we start.'
