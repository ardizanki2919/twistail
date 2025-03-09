import defaultMdxComponents from 'fumadocs-ui/mdx'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'
import { source } from '#/lib/source'
import Redirect from './redirect'

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params

  // Check if there's no slug or an empty slug (path is /docs)
  if (!params.slug || params.slug.length === 0) {
    return <Redirect targetUrl="/docs/ui" />
  }

  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  // Hide title and description for pages that don't need them
  const pageWithoutTitle = ['code-of-conduct']

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} footer={{ enabled: false }}>
      {pageWithoutTitle.includes(page.url.replace('/docs/ui/', '')) ? null : (
        <>
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
        </>
      )}
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  const sourceParams = source.generateParams()
  return [
    // Add parameter for the base /docs route (without slug)
    { slug: [] }, // Adding parameter for /docs route
    ...sourceParams, // Existing parameters
  ]
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params

  // If path is /docs, provide metadata for the redirect page
  if (!params.slug || params.slug.length === 0) {
    return {
      title: 'Redirecting to Documentation',
      description: 'Redirecting to the documentation home page',
    }
  }

  const page = source.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}
