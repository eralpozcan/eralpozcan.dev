import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

export interface BlogPost extends MarkdownParsedContent {
  title: string,
  date: string,
  description: string,
  url?: string,
  image: string,
  alt: string,
  ogImage?: string,
  provider: string,
  tags: string[],
  published?: boolean
}

export type BlogPostPreview = Omit<BlogPost, 'body'>;

