import type { Metadata } from 'next'
import Link from '#/app/link'
import { blog } from '#/lib/source'

export const metadata: Metadata = { title: 'Blog' }

export default function Page() {
  const posts = blog.getPages()

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6">
      <div className="container mx-auto max-w-screen-xl py-12">
        <div className="mb-16 space-y-4">
          <h1 className="font-bold text-4xl text-gray-900 tracking-tight md:text-5xl dark:text-white">
            Imprint
          </h1>
          <p className="max-w-2xl text-gray-600 text-lg dark:text-gray-300">
            Legal information and company details for Twistail digital product studio
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.url}
                href={post.url}
                className="block overflow-hidden rounded-lg bg-fd-secondary p-6 shadow-md"
              >
                <h2 className="mb-2 font-semibold text-xl">{post.data.title}</h2>
                <p className="mb-4">{post.data.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
