<script lang="ts" setup>
const props = defineProps({
  project: Object
})

interface Language {
  name: string;
  color: string;
}

const usedTechLanguages = computed(() => {
  return props.project?.languages.nodes.slice(0, 3).map((lang: Language) => {
    return {
      name: lang.name,
      color: lang.color
    }
  })
})
</script>

<template>
  <div class="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <NuxtImg class="rounded-t-md" format="webp" :src="props.project?.openGraphImageUrl" :alt="`${props.project?.name} image`" loading="lazy" width="400" height="190"/>
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ props.project?.name }}
      </h5>
      <p class="mb-3 font-normal text-gray-800 dark:text-gray-300 max-h-32 text-ellipsis overflow-hidden">
        {{ props.project?.description }}
      </p>
      <div class="absolute bottom-2 left-2">
        <span class="text-sm mt-1 font-medium px-2 py-2 ml-1 rounded" v-for="tech in usedTechLanguages" :key="tech.name" :style="{color: tech.color}"> 
          {{ tech.name }}
        </span>
      </div>
      <div class="absolute bottom-2 right-4">
        <NuxtLink v-if="props?.project?.homepageUrl" :to="props.project.homepageUrl" target="_blank" rel="noopener">
          <Icon name="flowbite:link-solid" size="1.5rem" class="w-6 h-6 text-gray-800 dark:text-gray-300" :alt="props.project.name"/>
        </NuxtLink>
        <NuxtLink v-if="props?.project?.url" :to="props?.project?.url" target="_blank" rel="noopener">
          <Icon name="fa-brands:github" size="1.5rem" class="w-6 h-6 text-gray-800 dark:text-gray-300" :alt="props.project.name"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>