import Image from 'next/image'
import Link from '#/app/link'
import { formatDate } from '#/lib/utils'
import type { BlogPostPage } from './types'

interface FeaturedPostProps {
  post: BlogPostPage
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="mb-16">
      <Link
        href={post.url}
        className="group relative block overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          {post.data.coverImage && (
            <Image
              src={post.data.coverImage}
              className="h-full w-full object-cover"
              alt={post.data.title}
              unoptimized
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <p className="mb-2 font-medium text-sm text-teal-400">{formatDate(post.data.date)}</p>
            <h2 className="mb-3 font-bold text-2xl transition-all duration-300 group-hover:text-teal-300 md:text-3xl">
              {post.data.title}
            </h2>
            <p className="mb-4 max-w-2xl text-gray-200">{post.data.description}</p>
            <div className="flex items-center">
              <span className="font-medium text-sm">Oleh {post.data.author}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
