import { blogPosts, docs } from '@/.source'
import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
})

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
})
