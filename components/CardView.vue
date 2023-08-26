<template>
  <div class="card w-96 h-96 bg-base-100 shadow-xl mx-8 my-4">
    <figure><img :src="data.openGraphImageUrl" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ data.name}}
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>{{ data.description }}</p>
      <div class="card-actions justify-center" >
        <div class="badge badge-outline" v-for="usedLanguages in data.languages.nodes"> {{ usedLanguages.name }}</div> 
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  data: Object
})

</script>

<style scoped>

</style>