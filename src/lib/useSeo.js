import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { images } from './images'

export const SITE_NAME = 'Future Genius English School & Gade Madam Education Point'
const DEFAULT_OG_IMAGE = images.heroChildren

function getSiteUrl() {
  return typeof window !== 'undefined' ? window.location.origin : ''
}

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function removeMeta(name, attr = 'name') {
  const el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (el) el.remove()
}

function setLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!data) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Sitewide SEO helper — sets a unique title/description, canonical URL,
 * Open Graph + Twitter card metadata, robots directive and JSON-LD
 * structured data (WebPage + BreadcrumbList + any page-specific schema)
 * for the current route.
 *
 * @param {Object} opts
 * @param {string} opts.title - Unique, page-specific title (site name is appended automatically).
 * @param {string} opts.description - Unique meta description (~140–160 characters).
 * @param {string} [opts.image] - Absolute image URL for og:image / twitter:image.
 * @param {string} [opts.ogType] - Open Graph type, defaults to "website".
 * @param {string} [opts.pageType] - schema.org @type for the WebPage node, defaults to "WebPage".
 * @param {string} [opts.robots] - Robots directive, defaults to "index, follow".
 * @param {Array<Object>} [opts.schema] - Extra JSON-LD nodes (e.g. EducationalOrganization) to merge in.
 * @param {boolean} [opts.breadcrumb] - Whether to emit a BreadcrumbList (Home > Title). Defaults to true.
 */
export default function useSeo({
  title,
  rawTitle,
  description,
  image,
  ogType = 'website',
  pageType = 'WebPage',
  robots = 'index, follow',
  schema = [],
  breadcrumb = true,
} = {}) {
  const { pathname } = useLocation()

  useEffect(() => {
    const siteUrl = getSiteUrl()
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`
    // rawTitle is used as-is (e.g. for the homepage, where the brand name
    // should lead); otherwise every other page gets "Title | Site Name".
    const fullTitle = rawTitle || (title ? `${title} | ${SITE_NAME}` : SITE_NAME)
    const ogImage = image || DEFAULT_OG_IMAGE

    document.title = fullTitle
    document.documentElement.lang = 'en'

    if (description) setMeta('description', description)
    setMeta('robots', robots)

    // Open Graph
    setMeta('og:site_name', SITE_NAME, 'property')
    setMeta('og:title', fullTitle, 'property')
    if (description) setMeta('og:description', description, 'property')
    setMeta('og:type', ogType, 'property')
    setMeta('og:url', canonicalUrl, 'property')
    setMeta('og:image', ogImage, 'property')
    setMeta('og:locale', 'en_IN', 'property')

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    if (description) setMeta('twitter:description', description)
    setMeta('twitter:image', ogImage)

    // Canonical URL
    setLink('canonical', canonicalUrl)

    // JSON-LD structured data: WebPage (+ isPartOf WebSite), optional
    // BreadcrumbList, plus any page-specific nodes (EducationalOrganization, etc.)
    const graph = [
      {
        '@type': pageType,
        name: fullTitle,
        description: description || undefined,
        url: canonicalUrl,
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: siteUrl,
        },
      },
      ...(schema || []),
    ]

    if (breadcrumb && pathname !== '/') {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: title || fullTitle, item: canonicalUrl },
        ],
      })
    }

    setJsonLd('ld-json-page', { '@context': 'https://schema.org', '@graph': graph })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- schema is serialized below to avoid re-running on every render from a new array reference
  }, [title, rawTitle, description, image, ogType, pageType, robots, pathname, breadcrumb, JSON.stringify(schema)])
}

// Exposed for pages that need to build absolute URLs for schema nodes.
export function useSiteUrl() {
  return getSiteUrl()
}

export { setMeta, removeMeta }
