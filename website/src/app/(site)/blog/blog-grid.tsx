import { BlogCard } from './blog-card'
import type { BlogPostPage } from './types'

interface BlogGridProps {
  posts: BlogPostPage[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.url} post={post} />
      ))}
    </div>
  )
}
