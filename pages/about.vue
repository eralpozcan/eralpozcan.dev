<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:grid-cols-2 lg:gap-8 xl:gap-0 lg:py-16">
      <div class="place-self-center">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{{ $t('hello_everyone') }}</h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{{ $t('job_title') }}</p>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{{ $t('description') }}</p>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{{ $t('about_me') }}</p>
        <button 
          type="button" 
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          @click="downloadCV"
        >
          <a href="/assets/EralpOzcanWebCV.pdf" download class="no-underline">{{ $t('cv_download') }}</a>
        </button>
      </div>
      <div class="lg:mt-0 lg:flex justify-center items-center">
        <NuxtImg provider="imagekit" src="/profile_pic.webp" quality="80" loading="lazy" :placeholder="15" height="448" width="448" class="rounded-lg object-cover" alt="Eralp Özcan Profile Picture"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { proxy } = useScriptGoogleAnalytics()
const { t } = useI18n()


const downloadCV = () => {
  // @ts-ignore
  proxy.gtag('event', 'cv_download', {
    event_category: 'cv',
    event_label: 'cv_download',
    value: 1
  })
}

useSeoMeta({
  title: t('nav.about_us'),
  description: t('description') ,
  ogType: 'website',
  ogSiteName: t('nav.title'),
  ogTitle: t('nav.title') + ' - ' + t('nav.about_us'),
  ogDescription: t('description'),
  ogUrl: 'https://eralpozcan.dev/about-me',
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