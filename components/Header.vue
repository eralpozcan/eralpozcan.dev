<template>
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ $t('nav.title')}}</span>
    </NuxtLink>
    <div class="flex flex-wrap items-center justify-end order-2">
      <NavDropdown />
      <NavThemeSelector />
    </div>
    <NavItem :navRoutes="navRoutes" />
  </div>
</nav>
</template>

<script setup>
const navRoutes = ref([
  { name: 'Home', nameLocaleKey: 'nav.home' , path: '/' },
  { name: 'About',nameLocaleKey: 'nav.about_us' , path: '/about' },
  { name: 'Blog', nameLocaleKey: 'nav.blog', path: '/blog' },
  { name: 'Projects', nameLocaleKey: 'nav.projects', path: '/projects' },
  { name: 'Contact',nameLocaleKey: 'nav.contact_us', path: '/contact' },
]);

</script>

<style>

</style>