import { MetadataRoute } from 'next'

const BASE_URL = 'https://agrawalkhandelwal.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/startups`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/tax-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools/capital-gains`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools/gst-search`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools/sip-planner`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools/incorporation-wizard`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog/new-income-tax-act-rules-2025`, lastModified: new Date('2026-03-20'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/blog/uae-corporate-tax-indian-impact`, lastModified: new Date('2026-03-08'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/blog/essential-compliance-indian-startups`, lastModified: new Date('2026-03-12'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/blog/navigating-international-taxation-dtaa`, lastModified: new Date('2026-03-05'), changeFrequency: 'yearly', priority: 0.7 },
  ]
}
