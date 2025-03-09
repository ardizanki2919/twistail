import { defineConfig, defineDocs } from 'fumadocs-mdx/config'
import { defineCollections, frontmatterSchema } from 'fumadocs-mdx/config'
import { z } from 'zod'

export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'src/content/blog',
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
  }),
})

export const docs = defineDocs({
  dir: 'src/content/docs',
})

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
})
