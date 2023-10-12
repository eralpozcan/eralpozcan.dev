<script setup lang="ts">
import type { BlogPost } from '~/types'
const { path } = useRoute()

const { data: article } = await useAsyncData(path.replace(/\/$/, ''),
  () => queryContent<BlogPost>('blog')
    .where({ _path: path })
    .findOne(),
)

const title: string = article.value?.title ?? ''
const description: string = article.value?.description ?? ''
const ogImage: string = article.value?.ogImage ?? ''

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:site_name', content: 'Eralp Özcan - Blog'},
    { property: 'og:url', content: 'https://eralpozcan.dev'},
    { property: 'og:title', content: title},
    { property: 'og:description', content: description},
    { property: 'og:image', content: ogImage},
    { property: 'twitter:card', content: 'summary_large_image'},
    { property: 'twitter:site', content: '@eralpozcan'},
    { property: 'twitter:creator', content: '@eralpozcan'},
    { property: 'twitter:title', content: title},
    { property: 'twitter:description', content: description},
    { property: 'twitter:image', content: ogImage},
    { property: 'twitter:url', content: 'https://eralpozcan.dev'},
  ],
  link: [
    { rel: 'canonical', href: `https://eralpozcan.dev/blog/`},
    { rel: 'icon', href: '/favicon.ico'},
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
    { rel: 'manifest', href: '/site.webmanifest'},
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000'},
  ],
})

</script>

<template>
  <div>
    <ContentRenderer :value="article" class="prose my-10 mx-auto max-w-7xl" />
  </div>
</template>