import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const base = 'https://www.oretrade.com'

// Priority / changeFrequency rules by route, most specific first.
// Falls back to sensible defaults if nothing matches.
type RouteMeta = { changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }

const overrides: Record<string, RouteMeta> = {
  '/': { changeFrequency: 'weekly', priority: 1.0 },
  '/markets': { changeFrequency: 'weekly', priority: 0.9 },
  '/markets/rare-earths': { changeFrequency: 'weekly', priority: 0.9 },
  '/markets/rare-earths/dysprosium': { changeFrequency: 'weekly', priority: 0.95 },
  '/markets/rare-earths/terbium': { changeFrequency: 'weekly', priority: 0.95 },
  '/markets/rare-earths/neodymium': { changeFrequency: 'weekly', priority: 0.9 },
  '/markets/rare-earths/ndpr': { changeFrequency: 'weekly', priority: 0.85 },
  '/markets/rare-earths/samarium': { changeFrequency: 'weekly', priority: 0.85 },
  '/markets/rare-earths/yttrium': { changeFrequency: 'weekly', priority: 0.85 },
  '/markets/rare-earths/prices': { changeFrequency: 'daily', priority: 0.8 },
  '/markets/prices': { changeFrequency: 'daily', priority: 0.8 },
  '/markets/iron-ore': { changeFrequency: 'weekly', priority: 0.85 },
  '/markets/copper': { changeFrequency: 'weekly', priority: 0.85 },
  '/markets/gold': { changeFrequency: 'weekly', priority: 0.8 },
  '/markets/nickel': { changeFrequency: 'weekly', priority: 0.8 },
  '/markets/base-metals': { changeFrequency: 'weekly', priority: 0.75 },
  '/markets/critical-minerals': { changeFrequency: 'weekly', priority: 0.8 },
  '/markets/mining-ores': { changeFrequency: 'weekly', priority: 0.75 },
  '/traceability': { changeFrequency: 'monthly', priority: 0.85 },
  '/guides': { changeFrequency: 'monthly', priority: 0.8 },
  '/guides/iron-ore': { changeFrequency: 'monthly', priority: 0.8 },
  '/guides/copper': { changeFrequency: 'monthly', priority: 0.8 },
  '/guides/copper-concentrate': { changeFrequency: 'monthly', priority: 0.8 },
  '/guides/cobalt': { changeFrequency: 'monthly', priority: 0.78 },
  '/guides/nickel': { changeFrequency: 'monthly', priority: 0.78 },
  '/guides/gold': { changeFrequency: 'monthly', priority: 0.75 },
  '/guides/lithium': { changeFrequency: 'monthly', priority: 0.75 },
  '/blog': { changeFrequency: 'weekly', priority: 0.8 },
  '/blog/china-rare-earth-export-controls': { changeFrequency: 'weekly', priority: 0.9 },
  '/blog/rare-earth-shortage-2026': { changeFrequency: 'weekly', priority: 0.85 },
  '/blog/critical-minerals-race': { changeFrequency: 'weekly', priority: 0.9 },
  '/blog/eu-critical-raw-materials-act': { changeFrequency: 'weekly', priority: 0.88 },
  '/blog/iron-ore-price-2026': { changeFrequency: 'weekly', priority: 0.88 },
  '/blog/us-tariffs-metals-2025': { changeFrequency: 'weekly', priority: 0.85 },
  '/about': { changeFrequency: 'monthly', priority: 0.75 },
}

const defaultBlogMeta: RouteMeta = { changeFrequency: 'weekly', priority: 0.85 }
const defaultGuideMeta: RouteMeta = { changeFrequency: 'monthly', priority: 0.75 }
const defaultMarketMeta: RouteMeta = { changeFrequency: 'weekly', priority: 0.75 }
const defaultMeta: RouteMeta = { changeFrequency: 'monthly', priority: 0.6 }

function metaFor(route: string): RouteMeta {
  if (overrides[route]) return overrides[route]
  if (route.startsWith('/blog/')) return defaultBlogMeta
  if (route.startsWith('/guides/')) return defaultGuideMeta
  if (route.startsWith('/markets/')) return defaultMarketMeta
  return defaultMeta
}

// Walk app/ recursively, collecting every route that has a page.tsx,
// excluding dynamic segments (folders containing [ ]) and the api/ tree.
function collectRoutes(dir: string, appRoot: string, routes: string[]): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (entry.name.startsWith('[') || entry.name === 'api') continue
    if (entry.name.startsWith('_')) continue

    const fullPath = path.join(dir, entry.name)
    const pagePath = path.join(fullPath, 'page.tsx')

    if (fs.existsSync(pagePath)) {
      const relative = path.relative(appRoot, fullPath).split(path.sep).join('/')
      routes.push(`/${relative}`)
    }

    collectRoutes(fullPath, appRoot, routes)
  }
}

function getAllRoutes(): string[] {
  const appRoot = path.join(process.cwd(), 'app')
  const routes: string[] = []

  // Root page.tsx (the homepage)
  if (fs.existsSync(path.join(appRoot, 'page.tsx'))) {
    routes.push('/')
  }

  collectRoutes(appRoot, appRoot, routes)

  return routes.sort()
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = getAllRoutes()

  return routes.map((route) => {
    const meta = metaFor(route)
    const url = route === '/' ? `${base}/` : `${base}${route}/`
    return {
      url,
      lastModified: now,
      changeFrequency: meta.changeFrequency,
      priority: meta.priority,
    }
  })
}
