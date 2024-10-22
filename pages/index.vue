<template>
  <Hero />
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('nav.title'),
  description: t('description') ,
  ogType: 'website',
  ogSiteName: t('nav.title'),
  ogTitle: t('nav.title'),
  ogDescription: t('description'),
  ogUrl: 'https://eralpozcan.dev',
  ogImage: 'https://eralpozcan.dev/og-image.png',
  ogLocale: 'en_US',
  ogLocaleAlternate: 'tr_TR',
  twitterCard: 'summary_large_image',
  twitterTitle: t('nav.title'),
  twitterDescription: t('description'),
  twitterImage: 'https://eralpozcan.dev/og-image.png',
  twitterSite: '@eralpozcan',
})
</script>