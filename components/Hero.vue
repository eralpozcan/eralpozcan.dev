<template>
<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{{ $t('hello_everyone')}}</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{{ $t('job_title') }}</p>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{{ $t('description') }}</p>
        </div>
        <div class="lg:mt-0 lg:col-span-5 lg:flex">
          <NuxtImg src="/assets/images/profile_pic.webp" quality="80" loading="lazy" height="448" width="448" class="sm:max-w-sm md:max-w-md rounded-lg" alt="Eralp Özcan Profile Picture"/>
        </div>
    </div>
</section>

</template>