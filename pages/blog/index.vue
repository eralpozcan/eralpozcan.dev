<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find()
)
</script>

<template>
  <div>
    <h1 class="text-3xl my-8">Blog Posts</h1>
    <section class="grid md:grid-cols-3 mt-8 gap-10">
      <Post :posts="posts" />
    </section>
  </div>
</template>