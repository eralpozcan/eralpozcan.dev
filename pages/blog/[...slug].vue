<script setup>
definePageMeta({
  colorMode: 'light',
})
const { t } = useI18n()
const getRouteInfo = useRoute()
const { data: posts } = await useAsyncData('posts', () =>
  queryContent(getRouteInfo.fullPath).find()
)
const seoData = posts.value[0]

useSeoMeta({
  title: t('nav.title') + seoData.title,
  description: seoData.description,
  ogType: 'website',
  ogSiteName: t('nav.title'),
  ogTitle: t('nav.title') + seoData.title,
  ogDescription: seoData.description,
  ogUrl: `https://eralpozcan.dev${seoData._path}`,
  ogImage: 'https://eralpozcan.dev/og-image.png',
  ogLocale: 'en_US',
  ogLocaleAlternate: 'tr_TR',
  twitterCard: 'summary_large_image',
  twitterTitle: seoData.title + ' | ' + t('nav.title'),
  twitterDescription: seoData.description,
  twitterImage: 'https://eralpozcan.dev/og-image.png',
  twitterSite: '@eralpozcan',
})


</script>

<template>
  <main>
    <ContentDoc class="prose my-10 mx-auto max-w-7xl" />
  </main>
</template>


