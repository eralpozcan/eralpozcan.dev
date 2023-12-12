<script setup>
const links = [
  { name: 'GitHub', href: 'https://github.com/Eralpozcan', icon: 'entypo-social:github-with-circle' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/Eralpozcan', icon: 'entypo-social:linkedin-with-circle' },
  { name: 'Spotify', href: 'https://open.spotify.com/user/eralpozcan', icon: 'entypo-social:spotify' },
  { name: 'Medium', href: 'https://medium.com/@eralpozcan', icon: 'entypo-social:medium-with-circle' },
  { name: 'Dev.to', href: 'https://dev.to/Eralpozcan', icon: 'ic:twotone-logo-dev'}
]
</script>


<template>
  <div>
    <footer class="footer footer-center lg:flex lg:justify-between p-5 bg-base-200 text-base-content rounded">
      <div class="footer-start">
        <p>Copyright © 2023</p>
      </div>
      <div class="flex flex-row">
        <p class="link link-hover"><NuxtLink to="/about-me">{{ $t('about_us') }}</NuxtLink></p>
        <p class="link link-hover"><NuxtLink to="/projects">{{ $t('projects') }}</NuxtLink></p>
        <p class="link link-hover"><NuxtLink to="/blog">{{ $t('blog') }}</NuxtLink></p>
        <p class="link link-hover"><NuxtLink to="/contact">{{ $t('contact_us') }}</NuxtLink></p>
      </div>
      <div class="flex flex-row flex-nowrap">
        <a v-for="link in links" :key="link.name" :href="link.href" target="_blank" rel="noopener noreferrer" hreflang="en" type="link" :name="link.name" :aria-label="link.name">
          <Icon :name="link.icon" size="1.5rem" class="bg-base-200" :alt="link.name"/>
        </a>
      </div>
    </footer>
  </div>
</template>
