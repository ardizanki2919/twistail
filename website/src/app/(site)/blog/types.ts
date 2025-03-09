export interface BlogPostFrontmatter {
  title: string
  description: string
  author: string
  date: string | Date
  coverImage?: string
}

export interface BlogPostPage {
  url: string
  data: BlogPostFrontmatter
}
