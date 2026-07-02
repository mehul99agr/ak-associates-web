import { MetadataRoute } from 'next'

const BASE_URL = 'https://agrawalkhandelwal.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/ca-in-nashik`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.98 },
    { url: `${BASE_URL}/ca-in-sillod`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/transfer-pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.92 },
    { url: `${BASE_URL}/uae-tax-advisory`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.92 },
    { url: `${BASE_URL}/offshore-accounting`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.88 },
    { url: `${BASE_URL}/company-incorporation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE_URL}/startups`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/nri-tax-advisory`, lastModified: new Date('2026-05-08'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.75 },
    { url: `${BASE_URL}/tax-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools/capital-gains`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools/sip-planner`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools/incorporation-wizard`, lastModified: new Date('2026-05-08'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog/tds-on-nri-property-sale-india`, lastModified: new Date('2026-07-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog/fema-compliance-foreign-investment-startups`, lastModified: new Date('2026-06-08'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog/dubai-company-registration-guide`, lastModified: new Date('2026-05-19'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog/company-incorporation-india-guide`, lastModified: new Date('2026-05-13'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog/uae-entity-setup-when-it-makes-sense`, lastModified: new Date('2026-05-08'), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/blog/new-income-tax-act-rules-2025`, lastModified: new Date('2026-03-20'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/blog/uae-corporate-tax-indian-impact`, lastModified: new Date('2026-03-08'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/blog/essential-compliance-indian-startups`, lastModified: new Date('2026-03-12'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/blog/navigating-international-taxation-dtaa`, lastModified: new Date('2026-03-05'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/blog/understanding-new-tax-regime-2025-26`, lastModified: new Date('2026-03-18'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/blog/strategic-value-virtual-cfo-services`, lastModified: new Date('2026-02-25'), changeFrequency: 'yearly', priority: 0.7 },
  ]
}
