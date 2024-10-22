<script setup lang="ts">
onMounted(() => {
  const config = useRuntimeConfig()
  const delayTime = 3000;
  setTimeout(() => {
    if (config.public.calendyStatus === 'true') {
      const calendly = useCalendly();
      calendly.initBadgeWidget({
        url: `${config.public.calendyUrl}`,
        text: "Schedule time with me",
      });
    }
  }, delayTime);
});
</script>

<template>
  <div class="h-screen bg-white border-gray-200 dark:bg-gray-900">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.calendly-badge-widget {
  bottom: 80px;
}
</style>