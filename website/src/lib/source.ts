import { blogPosts, docs } from '@/.source'
import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'
import { icons } from 'lucide-react'
import { createElement } from 'react'

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
})

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return
    if (icon in icons) return createElement(icons[icon as keyof typeof icons])
  },
})
