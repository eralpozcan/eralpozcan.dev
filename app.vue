<template>
  <div>
    <SiteHeader />
    <NuxtPage  />
    <SiteFooter />
  </div>
</template>


<script lang="ts" setup>
onMounted(() => {
  const config = useRuntimeConfig()
  if (config.public.calendyStatus === 'true'){
    const calendly = useCalendly()
    calendly.initBadgeWidget({
      url: `${config.public.calendyUrl}`,
      text: "Schedule time with me",
    })
  }
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.calendly-badge-widget {
  bottom: 50px;
}
</style>
