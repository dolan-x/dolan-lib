export interface Metas { [key: string]: any }
export type Slug = string;

export interface Author {
  slug: Slug
  name: string
  avatar: string
  bio: string
}

export interface Post {
  slug: Slug
  title: string
  content: string
  excerpt: string
  created: number
  updated: number
  status: string
  sticky: boolean
  hidden: boolean
  authors: Slug[]
  tags: Slug[]
  categories: Slug[]
  metas: Metas
}

export interface Tag {
  slug: Slug
  name: string
  description: string
  color: string
}

export interface Category {
  slug: Slug
  name: string
  description: string
}

export interface Page {
  slug: Slug
  title: string
  content: string
  hidden: boolean
  metas: Metas
}

export interface ConfigFunctions {
  sitemap: {
    postsBaseUrl: string
    tagsBaseUrl: string
    categoriesBaseUrl: string
  }
}
export interface ConfigAuthors {
  maxPageSize: number
}
export interface ConfigCategories {
  maxPageSize: number
}
export interface ConfigTags {
  maxPageSize: number
}
export interface ConfigPosts {
  maxPageSize: number
  defaultContent: string
}
export interface ConfigPages {
  maxPageSize: number
  defaultContent: string
}
export interface ConfigSite {
  name: string
  description: string
  keywords: string[]
}

export interface ConfigCustom { [key: string]: any }

export interface ConfigAll {
  functions: ConfigFunctions
  authors: ConfigAuthors
  categories: ConfigCategories
  tags: ConfigTags
  posts: ConfigPosts
  pages: ConfigPages
  site: ConfigSite
  custom: ConfigCustom
}
