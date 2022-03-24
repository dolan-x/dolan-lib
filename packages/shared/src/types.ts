export interface Author {
  slug: string
  name: string
  avatar: string
  bio: string
}

export interface Post {
  slug: string
  title: string
  content: string
  excerpt: string
  created: string
  updated: string
  status: string
  sticky: boolean
  hidden: boolean
  authors: number[]
  tags: number[]
  categories: number[]
  metas: Record<string, unknown>
}

export interface Tag {
  slug: string
  name: string
  description: string
}

export interface Category {
  slug: string
  name: string
  description: string
}

export interface Page {
  slug: string
  title: string
  content: string
  metas: Record<string, unknown>
}

export type Config = Record<string, unknown>;
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
export interface ConfigUserInjections {
  css: string
  js: string
}
export type ConfigCustom = Config;
