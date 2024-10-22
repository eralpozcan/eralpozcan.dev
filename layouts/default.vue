<template>
  <div>
    <Header />
      <slot />
    <Footer />
  </div>
  <SpeedInsights />
</template>

<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<style>

</style>