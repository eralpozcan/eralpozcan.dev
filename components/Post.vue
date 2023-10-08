<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div v-for="post in props.posts" :key="post.slug"
    class="bg-base-200 rounded-lg shadow-md overflow-hidden hover:opacity-75">
    <span v-if="post.language" class="bg-base-200 shadow-md overflow-hidden hover:opacity-75  float-right">{{ post.language }}</span>
    <NuxtLink :to="post._path">
      <img :src="`assets/images/blog/${post.cover}`" alt="Blog Post Cover Image" class="w-full h-48 object-cover">
    </NuxtLink>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
      <p class="text-gray-700 mb-4">{{ post.description }}</p>
      <div class="flex items-center"> 
        <template v-for="(links, index) in post.links" :key="index">
          <NuxtLink v-if="links.medium" :to="links.medium">
            <Icon name="fa-brands:medium" size="1.5rem" class="bg-base-200" :alt="post.title"/>
          </NuxtLink>
          <NuxtLink v-if="links.devto" :to="links.devto">
            <Icon name="fa-brands:dev" size="1.5rem" class="bg-base-200" :alt="post.title"/>
          </NuxtLink>
        </template>
      </div>
      <div>
        <NuxtLink :to="post._path"
        class="btn btn-ghost normal-case text-base py-2 px-2 mb-5 rounded float-right"> {{ $t('read_more')  }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>