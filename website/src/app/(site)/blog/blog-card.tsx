import Image from 'next/image'
import Link from '#/app/link'
import { formatDate } from '#/lib/utils'
import type { BlogPostPage } from './types'

interface BlogCardProps {
  post: BlogPostPage
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={post.url}
      className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-neutral-800"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {post.data.coverImage && (
          <Image
            src={post.data.coverImage}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt={post.data.title}
            unoptimized
          />
        )}
        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="font-medium text-teal-300 text-xs">{formatDate(post.data.date)}</p>
        </div>
      </div>
      <div className="p-5">
        <h2 className="mb-2 font-semibold text-neutral-900 text-xl tracking-tight transition-colors duration-300 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
          {post.data.title}
        </h2>
        <p className="mb-4 text-neutral-600 text-sm dark:text-neutral-300">
          {post.data.description}
        </p>
        <div className="flex items-center text-neutral-500 text-sm dark:text-neutral-400">
          <span>Oleh {post.data.author}</span>
        </div>
      </div>
    </Link>
  )
}
