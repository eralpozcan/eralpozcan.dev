<template>
  <footer class="p-6 bg-white sm:p-6 dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl">
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <a href="/" class="hover:underline">{{$t('nav.title')}}</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <NuxtLink 
            :to="social.url" 
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white" 
            v-for="social in socials" 
            :key="social.name" 
            :aria-label="social.name">
            <Icon :name="social.iconName" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/eralpozcan',
    iconName: 'flowbite:github-solid',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/eralpozcan/',
    iconName: 'flowbite:linkedin-solid',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@eralpozcan',
    iconName: 'fa-brands:medium',
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/eralpozcan',
    iconName: 'fa-brands:dev',
  },
];
</script>
