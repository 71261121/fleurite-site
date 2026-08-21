import type { MetadataRoute } from 'next'

const BASE = 'https://www.fleurite.me'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: BASE, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/products`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/refunds`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
