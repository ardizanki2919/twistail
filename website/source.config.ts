import { remarkHeading, remarkImage, remarkStructure } from 'fumadocs-core/mdx-plugins'
import { rehypeToc, remarkGfm } from 'fumadocs-core/mdx-plugins'
import { fileGenerator, remarkDocGen, remarkInstall } from 'fumadocs-docgen'
import { defineConfig, defineDocs } from 'fumadocs-mdx/config'
import { defineCollections, frontmatterSchema, getDefaultMDXOptions } from 'fumadocs-mdx/config'
import rehypeExternalLinks from 'rehype-external-links'
import { z } from 'zod'

export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'src/content/blog',
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
    published: z.boolean().default(false),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
  }),
  mdxOptions: getDefaultMDXOptions({
    // extended mdx options
  }),
})

export const docs = defineDocs({
  dir: 'src/content/docs',
})

export default defineConfig({
  lastModifiedTime: 'git',
  mdxOptions: {
    remarkPlugins: [
      [remarkInstall, { persist: { id: 'persist-install' } }],
      [remarkDocGen, { generators: [fileGenerator()] }],
      [remarkHeading, { generateToc: true }],
      [remarkImage, { useImport: false }],
      [remarkStructure, { types: ['paragraph', 'blockquote', 'tableCell'] }],
      remarkGfm,
    ],
    rehypePlugins: [rehypeExternalLinks, rehypeToc],
  },
})
