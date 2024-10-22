<template>
  <!-- Burger Menu for Mobile -->
  <!-- TODO-->
  <!-- Navbar for Desktop and Mobile -->
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li v-for="nav in navRoutes" :key="nav.name">
        <NuxtLink
          :to="nav.path"
          :class="[
            'block py-2 px-3 rounded',
            nav.path === router.fullPath
              ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
              : 'text-gray-900 md:text-gray-700 hover:bg-gray-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:bg-transparent'
          ]"
        >
          {{ $t(nav.nameLocaleKey) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from '#imports'
import { useFlowbite } from '~~/composables/useFlowbite';

onMounted(() => {
  useFlowbite(() => {
    //@ts-ignore
    initFlowbite();
  })
})
interface NavRoute {
  name: string;
  nameLocaleKey: string;
  path: string;
}
const router = useRoute();
defineProps<{
  navRoutes: NavRoute[];
}>();
</script>
