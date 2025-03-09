import { InlineTOC } from 'fumadocs-ui/components/inline-toc'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import { notFound } from 'next/navigation'
import { blog } from '#/lib/source'

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const page = blog.getPage([params.slug])

  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}

export default async function Page(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const page = blog.getPage([params.slug])

  if (!page) notFound()
  const Mdx = page.data.body

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6">
      <div className="container mx-auto max-w-screen-xl py-12">
        <div className="mb-16 space-y-4">
          <h1 className="font-bold text-4xl text-gray-900 tracking-tight md:text-5xl dark:text-white">
            {page.data.title}
          </h1>
          <p className="mb-4 text-fd-muted-foreground">{page.data.description}</p>
        </div>

        <div className="space-y-12">
          <article className="container flex flex-col px-4 py-8">
            <div className="prose min-w-0">
              <InlineTOC items={page.data.toc} />
              <Mdx components={defaultMdxComponents} />
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p className="mb-1 text-fd-muted-foreground">Written by</p>
                <p className="font-medium">{page.data.author}</p>
              </div>
              <div>
                <p className="mb-1 text-fd-muted-foreground text-sm">At</p>
                <p className="font-medium">{new Date(page.data.date).toDateString()}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }))
}
