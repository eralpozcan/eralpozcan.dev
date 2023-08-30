<script setup>
const props = defineProps(['posts'])
</script>

<template>
  <div v-for="post in props.posts" :key="post.slug"
    class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75">
      <p> {{ "BlogCard" }}</p>
  </div>
</template>