<script setup lang="ts">
const config = useRuntimeConfig()

useSeoMeta({
  title: 'Eralp Ozcan Contact',
  description: 'Contact Me',
  ogType: 'website',
  ogSiteName: 'Eralp Ozcan',
  ogTitle: 'Eralp Ozcan',
  ogDescription: 'Contact Me',
  ogUrl: 'https://eralpozcan.dev/contact',
  ogImage: 'https://eralpozcan.dev/og-image.png',
  ogLocale: 'en_US',
  ogLocaleAlternate: 'tr_TR',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Eralp Ozcan',
  twitterDescription: 'Contact Me',
  twitterImage: 'https://eralpozcan.dev/og-image.png',
  twitterSite: '@eralpozcan',
})



</script>

<template>
  <div class="relative flex flex-col justify-center h-screen overflow-hidden">
    <div class="w-full p-6 m-auto rounded-md shadow-md lg:max-w-xl">
      <h1 class="text-3x1 font-semibold text-center">{{$t('contact.title')}}</h1>
      <form class="space-y-4" :action="config.public.contactFormApi" accept-charset="UTF-8" enctype="multipart/form-data" method="POST">
        <label class="label">
          <span class="text-base label-text">{{$t('contact.name')}}</span>
        </label>
        <input type="text" name="name" :placeholder="$t('contact.name')" class="w-full input input-bordered input-primary" />
        <label class="label">
          <span class="text-base label-text">{{$t('contact.email')}}</span>
        </label>
        <input type="email" name="email" :placeholder="$t('contact.email')" class="w-full input input-bordered input-primary" />
        <label class="label">
          <span class="text-base label-text">{{$t('contact.message')}}</span>
        </label>
        <textarea name="message" class="w-full textarea textarea-bordered textarea-primary" :placeholder="$t('contact.message')"></textarea>
        <button type="submit" class="btn btn-block btn-primary">{{$t('contact.send')}}</button>
      </form>
    </div>
  </div>
</template>

