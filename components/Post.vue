<script setup>
const props = defineProps(['posts'])
</script>

<template>
  <div v-for="post in props.posts" :key="post.slug"
    class="bg-base-200 rounded-lg shadow-md overflow-hidden hover:opacity-75">
    <NuxtLink :to="post._path">
      <img :src="`assets/images/blog/${post.cover}`" alt="Blog Post Cover Image" class="w-full h-48 object-cover">
    </NuxtLink>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
      <p class="text-gray-700 mb-4">{{ post.description }}</p>
      <div class="flex items-center">
        <NuxtLink v-if="post.links.medium" :to="post.links.medium">
          <Icon name="ic:twotone-logo-dev" size="1.5rem" class="bg-base-200" :alt="post.title"/>
        </NuxtLink>
        <NuxtLink v-if="post.links.devto" :to="post.links.devto">
          <Icon name="ic:twotone-logo-dev" size="1.5rem" class="bg-base-200" :alt="post.title"/>
        </NuxtLink>
      </div>
      <NuxtLink :to="post._path"
        class="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded float-right mb-8">Read More
      </NuxtLink>
    </div>
  </div>
</template>