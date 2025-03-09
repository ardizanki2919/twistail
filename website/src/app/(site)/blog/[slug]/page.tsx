import { InlineTOC } from 'fumadocs-ui/components/inline-toc'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { notFound } from 'next/navigation'
import { cn } from 'twistail-utils'
import Link from '#/app/link'
import { blog } from '#/lib/source'
import { formatDate } from '#/lib/utils'
import CustomTOC from './custom-toc'

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

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }))
}

export default async function Page(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const page = blog.getPage([params.slug])

  if (!page) notFound()
  const Mdx = page.data.body

  // Get the previous and next post
  const allPosts = blog.getPages().sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  })

  const currentPostIndex = allPosts.findIndex((post) => post.slugs[0] === params.slug)
  const prevPost = currentPostIndex < allPosts.length - 1 ? allPosts[currentPostIndex + 1] : null
  const nextPost = currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null

  return (
    <article>
      {/* Header Section */}
      <header className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {/* Back Button */}
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 font-medium text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="max-w-4xl">
            {/* Title */}
            <h1 className="font-bold text-3xl text-gray-900 leading-14 tracking-tight sm:text-4xl md:text-5xl dark:text-white">
              {page.data.title}
            </h1>

            {/* Meta information */}
            <div className="mt-6 flex items-center space-x-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={new Date(page.data.date).toISOString()}>
                  {formatDate(page.data.date)}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{page.data.author}</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-lg leading-8 dark:text-gray-300">
              {page.data.description}
            </p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="mx-auto max-w-screen-xl px-4 py-12 md:px-6 lg:py-16">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Main content */}
          <div className="mx-auto w-full max-w-4xl">
            {/* TOC for mobile */}
            <div className="mb-8 rounded-lg bg-gray-50 p-4 lg:hidden dark:bg-gray-800">
              <h3 className="mb-2 font-medium text-base text-gray-900 dark:text-white">
                On this page
              </h3>
              <InlineTOC items={page.data.toc} />
            </div>

            {/* Article content */}
            <div
              className={cn(
                'prose prose-teal dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-teal-600 dark:prose-a:text-teal-400',
                'prose-h1:first-of-type:hidden' // Hide the first h1 element since the title is already displayed in the header
              )}
            >
              <Mdx components={defaultMdxComponents} />
            </div>

            {/* Post navigation */}
            <nav className="mt-10 border-gray-200 border-t pt-8 dark:border-gray-700">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {prevPost ? (
                  <Link
                    href={prevPost.url}
                    className="group relative rounded-lg border border-gray-200 p-4 transition-all hover:shadow-md dark:border-gray-700 dark:hover:border-gray-600"
                  >
                    <span className="block font-medium text-sm text-teal-600 dark:text-teal-400">
                      Previous Post
                    </span>
                    <span className="mt-2 block font-semibold text-base text-gray-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                      {prevPost.data.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    href={nextPost.url}
                    className="group relative rounded-lg border border-gray-200 p-4 transition-all hover:shadow-md sm:text-right dark:border-gray-700 dark:hover:border-gray-600"
                  >
                    <span className="block font-medium text-sm text-teal-600 dark:text-teal-400">
                      Next Post
                    </span>
                    <span className="mt-2 block font-semibold text-base text-gray-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                      {nextPost.data.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </nav>
          </div>

          {/* TOC sidebar for desktop */}
          <CustomTOC items={page.data.toc} />
        </div>
      </div>
    </article>
  )
}
