<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src="/assets/images/profile_pic.webp" width="612" height="612" loading="lazy" class="sm:max-w-sm md:max-w-md rounded-lg" alt="Eralp Özcan Profile Picture" />
      <div class="">
        <h1 class="lg:text-4xl md:text-lg sm:text-base font-bold">{{ $t('hello_everyone')}}</h1>
        <p class="text-base bg-base-900 p-2 italic">{{ $t('job_title') }} <NuxtLink to="https://protein.tech/" target="_blank">@ProteinTech</NuxtLink></p>
        <p class="text-base bg-base-900 p-2 italic">{{ $t('description') }}</p>
        <p class="text-base bg-base-900 p-2 italic">{{ $t('about_me') }}</p>
        <button class="btn btn-primary"><a href="/assets/EralpOzcanWebCV.pdf" download="">{{ $t('cv_download')}}</a></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Eralp Özcan',
  description: 'Eralp Özcan',
  ogType: 'website',
  ogSiteName: 'Eralp Özcan',
  ogTitle: 'Eralp Özcan',
  ogDescription: 'Eralp Özcan Personal Website',
  ogUrl: 'https://eralpozcan.dev/about-me',
  ogImage: 'https://eralpozcan.dev/og-image.png',
  ogLocale: 'en_US',
  ogLocaleAlternate: 'tr_TR',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Eralp Özcan',
  twitterDescription: 'Eralp Özcan Personal Website',
  twitterImage: 'https://eralpozcan.dev/og-image.png',
  twitterSite: '@eralpozcan',
})
</script>