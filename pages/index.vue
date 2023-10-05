<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src="/assets/images/profile_pic.webp" width="612" height="612" loading="lazy" class="max-w-sm rounded-lg" alt="Eralp Özcan Profile Picture" />
      <div class="">
        <h1 class="lg:text-4xl md:text-lg sm:text-base font-bold">{{ $t('hello_everyone')}}</h1>
        <p class="text-base bg-base-900 p-2 italic">{{ $t('job_title') }}<NuxtLink to="https://protein.tech/" target="_blank">@ProteinTech</NuxtLink></p>
        <p class="text-base bg-base-900 p-2 italic">{{ $t('description') }}</p>
        <button class="btn btn-primary"><a href="/assets/EralpOzcanWebCV.pdf" download="">{{ $t('cv_download')}}</a></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Eralp Ozcan',
  description: 'Eralp Ozcan',
  ogType: 'website',
  ogSiteName: 'Eralp Ozcan',
  ogTitle: 'Eralp Ozcan',
  ogDescription: 'Eralp Ozcan Personal Website',
  ogUrl: 'https://eralpozcan.dev',
  ogImage: 'https://eralpozcan.dev/og-image.png',
  ogLocale: 'en_US',
  ogLocaleAlternate: 'tr_TR',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Eralp Ozcan',
  twitterDescription: 'Eralp Ozcan Personal Website',
  twitterImage: 'https://eralpozcan.dev/og-image.png',
  twitterSite: '@eralpozcan',
})

</script>