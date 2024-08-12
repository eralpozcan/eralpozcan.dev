<template>
  <div>
    <SiteHeader />
      <slot />
    <SiteFooter />
  </div>
  <SpeedInsights />
</template>

<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<style>

</style>