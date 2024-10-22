<script lang="ts" setup>
const { t } = useI18n()
useSeoMeta({
  title: t('nav.projects'),
  description: t('description') ,
  ogType: 'website',
  ogSiteName: t('nav.title'),
  ogTitle: t('nav.title') + ' - ' + t('nav.projects'),
  ogDescription: t('description'),
  ogUrl: 'https://eralpozcan.dev/projects',
  ogImage: 'https://eralpozcan.dev/og-image.png',
  ogLocale: 'en_US',
  ogLocaleAlternate: 'tr_TR',
  twitterCard: 'summary_large_image',
  twitterTitle: t('nav.title'),
  twitterDescription: t('description'),
  twitterImage: 'https://eralpozcan.dev/og-image.png',
  twitterSite: '@eralpozcan',
})

const { data } = await useFetch('/api/repositories', {})
const projects = ref(data?.value?.repositories)
</script>

<template>
  <div class="h-full bg-white border-gray-200 dark:bg-gray-900">
    <h1 class="text-3xl mx-8 my-8 text-gray dark:text-white">{{$t('projects.title')}}</h1>
    <section class="mx-4 gap-4 grid md:grid-cols-4">
      <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
    </section>
  </div>
</template>

