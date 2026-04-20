import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.oretrade.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/markets`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/markets/rare-earths`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/markets/rare-earths/dysprosium`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/markets/rare-earths/terbium`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/markets/rare-earths/neodymium`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/markets/rare-earths/ndpr`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/markets/rare-earths/samarium`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/markets/rare-earths/yttrium`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/markets/iron-ore`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/markets/copper`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/markets/gold`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/markets/nickel`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/markets/base-metals`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${base}/markets/critical-minerals`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/markets/mining-ores`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${base}/traceability`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/iron-ore`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/copper`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/gold`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/guides/lithium`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog/china-rare-earth-export-controls`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog/rare-earth-shortage-2026`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ]
}
