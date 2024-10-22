<template>
  <ClientOnly>
    <button class="items-center text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2" 
    @click="ThemeChanger()" aria-label="Theme Change Icon">
      <Icon :name="themeSelectName" size="1.4rem" :class="iconClass" class="fill-current transition-transform duration-300 ease-in-out transform"/>
    </button>
  </ClientOnly>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const isAnimating = ref(false);

const ThemeChanger = () => {
  isAnimating.value = true;
  setTimeout(() => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    isAnimating.value = false;
  }, 300);
}

const themeSelectName = computed(() => {
  return colorMode.value === 'dark' ? 'flowbite:sun-outline' : 'flowbite:moon-outline';
});

const iconClass = computed(() => {
  return isAnimating.value ? 'rotate-180 scale-110' : '';
});
</script>