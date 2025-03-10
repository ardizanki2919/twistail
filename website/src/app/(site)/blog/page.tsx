import type { Metadata } from 'next'
import { blog } from '#/lib/source'
import { BlogGrid } from './blog-grid'
import { FeaturedPost } from './featured-post'
import type { BlogPostPage } from './types'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The latest articles, guidelines, and perspectives from the Twistail team.',
}

export default function Page() {
  // Sort the blog posts based on the date (the latest first)
  const posts = blog.getPages().sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  }) as BlogPostPage[]

  // Separate featured posts (first post) from other posts
  const featuredPost = posts.length > 0 ? posts[0] : null
  const remainingPosts = posts.slice(1)

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-16 space-y-4 text-center">
        <h1 className="font-bold text-4xl text-neutral-900 tracking-tight md:text-5xl dark:text-white">
          Twistail Blog
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
          News, guidelines, and perspectives from the Twistail team.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && <FeaturedPost post={featuredPost} />}

      {/* Remaining Posts Grid */}
      <BlogGrid posts={remainingPosts} />
    </div>
  )
}
