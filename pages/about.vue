<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:grid-cols-2 lg:gap-8 xl:gap-0 lg:py-16">
      <div class="place-self-center">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{{ i18n.t('hello_everyone') }}</h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{{ i18n.t('job_title') }}</p>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{{ i18n.t('description') }}</p>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{{ i18n.t('about_me') }}</p>
        <a
          href="/assets/EralpOzcanWebCV.pdf"
          download
          @click="trackCVDownload"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-800"
        >
          {{ i18n.t('cv_download') }}
        </a>
      </div>
      <div class="lg:mt-0 lg:flex justify-center items-center">
        <NuxtImg 
          src="/assets/images/profile_pic.webp" 
          quality="80" 
          loading="lazy" 
          :placeholder="15" 
          height="448" 
          width="448" 
          class="rounded-lg object-cover" 
          alt="Eralp Özcan Profile Picture"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
const i18n = useI18n()
// SEO Meta Tags
useSeoMeta({
  title: i18n.t('nav.about_us'),
  description: i18n.t('description'),
  ogType: 'website',
  ogSiteName: `${i18n.t('nav.title')} - ${i18n.t('nav.about_us')}`,
  ogTitle: `${i18n.t('nav.title')} - ${i18n.t('nav.about_us')}`,
  ogDescription: i18n.t('description'),
  ogUrl: 'https://eralpozcan.dev/about',
  ogImage: 'https://eralpozcan.dev/og-image.png',
  ogLocale: 'en_US',
  ogLocaleAlternate: 'tr_TR',
  twitterCard: 'summary_large_image',
  twitterTitle: `${i18n.t('nav.title')} - ${i18n.t('nav.about_us')}`,
  twitterDescription: i18n.t('description'),
  twitterImage: 'https://eralpozcan.dev/og-image.png',
  twitterSite: '@eralpozcan',
})

const trackCVDownload = () => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'cv_download',
      eventCategory: 'CV',
      eventAction: 'download',
      eventLabel: 'CV Download Button Click'
    })
  }
}

</script>