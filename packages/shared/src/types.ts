export type Metas = Record<string, any>
export type Slug = string

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
  created: string
  updated: string
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
  metas: Metas
}

export type Config = Record<string, any>;
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
}
export interface ConfigSite {
  name: string
  description: string
  keywords: string[]
}
export type ConfigCustom = Config;
