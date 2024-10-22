<template>
  <div class="flex items-center  space-x-1 md:space-x-0 rtl:space-x-reverse">
      <button type="button" data-dropdown-toggle="language-dropdown-menu" aria-label="change language" class="inline-flex items-center font-medium justify-center px-2 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        <Icon name="flowbite:language-outline" size="1.2rem" class="fill-current"/>
      </button>
      <!-- Dropdown -->
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
        <ul class="py-2 font-medium" role="none">
          <li v-for="locale in languages" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
            <div class="inline-flex items-center" @click="selectLanguage(locale.code)">
              <Icon :name="`circle-flags:`+ locale.code" size="1.2rem" class="fill-current"/>
              <span class="mx-1"> {{ locale.name }}</span>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script setup>
import { ref } from '#imports';
import { onMounted } from '#imports'
import { useFlowbite } from '~~/composables/useFlowbite';

// initialize components based on data attribute selectors
onMounted(() => {
    useFlowbite(() => {
      initDropdowns();
    })
})
const { locale } = useI18n()
const selectedLanguage = ref('en');
const languages = ref([
  { name: 'English', code: 'en' },
  { name: 'Türkçe', code: 'tr' },
]);

const selectLanguage = (language) => {
  selectedLanguage.value = language;
  locale.value = language;
};
</script>
