<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script lang="ts" setup>
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
})
</script>
<style>
.calendly-badge-widget {
  bottom: 50px;
}
</style>
