<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find()
)

useSeoMeta({
  title: 'Eralp Özcan - Blog',
  description: "I'm a Full Stack Developer, and I specialize in Vue and Node.js. I share my experiences and what I've learned by effectively using technological tools on this blog. You can find up-to-date content on web development, Vue.js, and Node.js topics here.",
  ogType: 'website',
  ogSiteName: 'Eralp Özcan - Blog',
  ogTitle: 'Eralp Özcan - Blog',
  ogDescription: "I'm a Full Stack Developer, and I specialize in Vue and Node.js. I share my experiences and what I've learned by effectively using technological tools on this blog. You can find up-to-date content on web development, Vue.js, and Node.js topics here.",
  ogUrl: 'https://eralpozcan.dev/blog',
  ogImage: 'https://eralpozcan.dev/og-image.png',
  ogLocale: 'en_US',
  ogLocaleAlternate: 'tr_TR',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Eralp Özcan - Blog',
  twitterDescription: "I'm a Full Stack Developer, and I specialize in Vue and Node.js. I share my experiences and what I've learned by effectively using technological tools on this blog. You can find up-to-date content on web development, Vue.js, and Node.js topics here.",
  twitterImage: 'https://eralpozcan.dev/og-image.png',
  twitterSite: '@eralpozcan',
})

</script>

<template>
  <div class="min-h-screen">
    <h1 class="text-3xl mx-8 my-8">{{$t('blogs.title')}}</h1>
    <section class="grid md:grid-cols-3 mx-8 gap-10">
      <Post :posts="posts" />
    </section>
  </div>
</template>