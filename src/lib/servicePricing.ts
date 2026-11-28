// Scope of the NRI, US cross-border and startup packages. Nov 28, 2026 (user decision):
// no fees or prices anywhere on the site; fees are quoted after the first call and
// confirmed in writing. Do not add a price, 'from' amount or range back here, in
// ServiceOffer.tsx, page copy or JSON-LD. The paid consult price (src/lib/consult.ts)
// is the one exception and stays visible.

export type ServicePackage = {
  id: string
  name: string
  points: string[]
}

export const NRI_PACKAGES: ServicePackage[] = [
  {
    id: 'nri-lower-tds-certificate',
    name: 'Lower TDS Certificate',
    points: [
      'Estimate of the tax you actually owe on the sale or income, so TDS is cut to match it',
      'Form 128 (earlier Form 13) application on TRACES with the supporting computation',
      'Replies to queries from the tax officer while the application is processed',
    ],
  },
  {
    id: 'nri-property-sale',
    name: 'NRI Property Sale Advisory',
    points: [
      'Capital gains computation before you sign',
      'Form 13 (now Form 128) lower TDS certificate application',
      'Form 145 / Form 146 (earlier 15CA / 15CB) for repatriation',
    ],
  },
  {
    id: 'nri-itr',
    name: 'NRI Income Tax Return',
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
    points: [
      'Form 5472 with pro forma Form 1120 for a foreign-owned single-member LLC',
      'FBAR / FATCA review of your US and Indian accounts',
      'State annual report and tax deadline tracking',
    ],
  },
  {
    id: 'us-c-corp',
    name: 'US C-Corp Annual Package',
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
    points: [
      'Private limited company incorporation: name approval, DSCs, DINs, MOA and AOA, SPICe+ filing, PAN and TAN',
      'Post-incorporation set-up: INC-20A commencement of business, first board meeting, first auditor appointment and statutory registers',
      'First-year ROC annual filings: AOC-4 and MGT-7 / MGT-7A',
    ],
  },
]

export const PACKAGE_NOTE = 'Fees are quoted after a short call, based on your scope, and confirmed in writing before we start.'
