<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t('nav.blog'),
  description: t('description') ,
  ogType: 'website',
  ogSiteName: t('nav.title') + ' - ' + t('nav.blog'),
  ogTitle: t('nav.title') + ' - ' + t('nav.blog'),
  ogDescription: t('description'),
  ogUrl: 'https://eralpozcan.dev/blog',
  ogImage: 'https://eralpozcan.dev/og-image.png',
  ogLocale: 'en_US',
  ogLocaleAlternate: 'tr_TR',
  twitterCard: 'summary_large_image',
  twitterTitle: t('nav.title') + ' - ' + t('nav.blog'),
  twitterDescription: t('description'),
  twitterImage: 'https://eralpozcan.dev/og-image.png',
  twitterSite: '@eralpozcan',
})

const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find()
)

const isDynamicGrid = computed(() =>{
  if ((posts.value?.length ?? 0) <= 2) return 'grid md:grid-cols-3'
  return `grid md:grid-cols-${posts.value?.length ?? 0}`
})
</script>

<template>
  <div class="min-h-screen bg-white border-gray-200 dark:bg-gray-900">
    <h1 class="text-3xl mx-8 my-8 text-gray dark:text-white">{{$t('blogs.title')}}</h1>
    <section class="mx-4 gap-4" :class="isDynamicGrid" >
      <PostItem :post="post" v-for="post in posts" :key="post._id"/>
    </section>
  </div>
</template>