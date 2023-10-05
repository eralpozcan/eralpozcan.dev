<script setup>
const colorMode = useColorMode();
function ThemeChanger() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <nav class="navbar bg-base-200">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <!-- <li><NuxtLink to="/about-me">{{ $t('about_us') }}</NuxtLink></li> -->
          <li><NuxtLink to="/projects">{{ $t('projects') }}</NuxtLink></li>
          <li><NuxtLink to="/blog">{{ $t('blog') }}</NuxtLink></li>
          <li><NuxtLink to="/contact">{{ $t('contact_us') }}</NuxtLink></li>
        </ul>
      </div>
      <p class="btn btn-ghost normal-case text-xl"><NuxtLink to="/">Eralp Özcan</NuxtLink></p>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <!-- <li class="mx-px"><NuxtLink to="/about-me">{{ $t('about_us') }}</NuxtLink></li> -->
        <li class="mx-px"><NuxtLink to="/projects">{{ $t('projects') }}</NuxtLink></li>
        <li class="mx-px"><NuxtLink to="/blog">{{ $t('blog') }}</NuxtLink></li>
        <li class="mx-px"><NuxtLink to="/contact">{{ $t('contact_us') }}</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <LanguageSwitcher />
      <Button class="btn btn-ghost normal-case text-base" @click="ThemeChanger()" aria-label="Theme Change Icon">
        <Icon v-if="colorMode.preference === 'dark' || colorMode.value === 'dark'" name="heroicons-solid:sun" size="1.4rem"
          class="fill-current"/>
        <Icon v-else-if="colorMode.preference === 'light' || colorMode.value === 'light'" name="heroicons-solid:moon" size="1.4rem" class="fill-current"/>
      </Button>
    </div>
  </nav>
</template>