import { Accordion, Accordions } from 'fumadocs-ui/components/accordion'
import { Card, Cards } from 'fumadocs-ui/components/card'
import { Pre } from 'fumadocs-ui/components/codeblock'
import { File, Files, Folder } from 'fumadocs-ui/components/files'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import { Step, Steps } from 'fumadocs-ui/components/steps'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'
import type { MDXComponents } from 'mdx/types'
import { notFound } from 'next/navigation'
import { clx } from 'twistail-utils'
import Link from '#/app/link'
import { source } from '#/lib/source'
// import Redirect from './redirect'

const customMdxComponents: MDXComponents = {
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link className={clx('font-medium underline underline-offset-4', className)} {...props} />
  ),
  Pre: ({ className, ...props }: React.ComponentProps<typeof Pre>) => (
    <Pre className={clx('font-mono', className)} {...props} />
  ),
  img: (props) => <ImageZoom {...props} />,
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params

  // // Check if there's no slug or an empty slug (path is /docs)
  // if (!params.slug || params.slug.length === 0) {
  //   return <Redirect targetUrl="/docs" />
  // }

  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  // Hide title and description for pages that don't need them
  const pageWithoutTitle = ['code-of-conduct']

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      footer={{ enabled: true }}
      editOnGithub={{
        owner: 'riipandi',
        repo: 'twistail',
        sha: 'main',
        path: `website/src/content/docs/${page.file.path}`,
      }}
    >
      {pageWithoutTitle.includes(page.url.replace('/docs/', '')) ? null : (
        <>
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
        </>
      )}
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            ...customMdxComponents,
            Accordion,
            Accordions,
            Card,
            Cards,
            File,
            Files,
            Folder,
            Step,
            Steps,
            Tab,
            Tabs,
          }}
        />
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

  // // If path is /docs, provide metadata for the redirect page
  // if (!params.slug || params.slug.length === 0) {
  //   return {
  //     title: 'Redirecting to Documentation',
  //     description: 'Redirecting to the documentation home page',
  //   }
  // }

  const page = source.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}
