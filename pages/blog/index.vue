<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find()
)
</script>

<template>
  <div class="min-h-screen">
    <h1 class="text-3xl mx-8 my-8">{{$t('blogs.title')}}</h1>
    <section class="grid md:grid-cols-3 mx-8 gap-10">
      <Post :posts="posts" />
    </section>
  </div>
</template>