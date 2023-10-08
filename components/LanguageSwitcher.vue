<script setup lang="ts">
const { locale } = useI18n()
const isDropdownOpen = ref<boolean>(false);
const target = ref<HTMLElement | null>(null);

onClickOutside(target, () => {
  isDropdownOpen.value = false;
});

const toggleDropdown = (): void => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectLanguage = (language: string): void => {
  locale.value = language;
  isDropdownOpen.value = false;
};

</script>

<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost rounded-btn" @click="toggleDropdown" ><Icon name="bi:translate"></Icon></label>
    <ul v-if="isDropdownOpen" ref="target" tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
      <li><a @click="selectLanguage('en')">{{ $t('english_lang') }}</a></li> 
      <li><a @click="selectLanguage('tr')">{{ $t('turkish_lang') }}</a></li>
    </ul>
  </div>
</template>
