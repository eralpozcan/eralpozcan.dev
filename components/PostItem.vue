<template>
  <div class="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Icon :name="getTranslatedIcon" class="w-6 h-6 mt-4 ml-4 text-gray-700 dark:text-gray-400" />
    <div class="absolute top-4 right-4">
      <template v-for="(links, index) in props.post.links" :key="index">
          <NuxtLink v-if="links.medium" :to="links.medium">
            <Icon name="fa-brands:medium" size="1.5rem" class="w-6 h-6 text-gray-700 dark:text-gray-400" :alt="post.title"/>
          </NuxtLink>
          <NuxtLink v-if="links.devto" :to="links.devto">
            <Icon name="fa-brands:dev" size="1.5rem" class="w-6 h-6 text-gray-700 dark:text-gray-400" :alt="post.title"/>
          </NuxtLink>
      </template>
    </div>
    <div class="flex justify-center">
      <NuxtImg class="rounded-t-lg" height="135" width="340" :src="`assets/images/blog/${props.post.cover}`" alt="" />
    </div>
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ props.post.title }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-36 overflow-hidden">
        {{ props.post.card_description ? props.post.card_description : props.post.description }}
      </p>
      <NuxtLink :to="props.post?._path" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ $t('blogs.read_more') }}
        <Icon name="fa-solid:arrow-right" class="w-4 h-4 ms-2" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object
})

const getTranslatedIcon = computed(() => {
  const language = props.post.language.toLowerCase()
  return `circle-flags:${language}`
})

</script>
