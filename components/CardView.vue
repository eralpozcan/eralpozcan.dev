<template>
  <div class="card lg:w-72 lg:h-72 xl:w-96 2xl:w-96 xl:h-96 2xl:h-96 bg-base-100 shadow-xl mx-8 my-4">
    <figure><nuxt-img :src="data.openGraphImageUrl" :alt="data.name + 'preview image'" loading="lazy" width="400" height="190" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ data.name}}
        <div v-if="compareDateWithCurrent(data.updatedAt)" class="badge badge-secondary" aria-label="New">NEW</div>
      </h2>
      <p>{{ data.description }}</p>
      <div class="card-actions justify-center" >
        <div class="badge badge-outline" :style="{color:usedLanguages.color}" v-for="usedLanguages in data.languages.nodes" :key="usedLanguages.name"> 
          {{ usedLanguages.name }}</div> 
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})

function compareDateWithCurrent(dateString) {
  return Date.now() - new Date(dateString) <= 7 * 24 * 60 * 60 * 1000;
}

// Feature Planing
// function IconBadge(iconName) {
//   return `devicon:${iconName.toLowerCase()}`
// }
</script>