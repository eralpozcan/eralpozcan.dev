<script setup lang="ts">
const props = defineProps({
  error: {
		type: Object,
		default: () => ({}),
	},
})
const handleError = () => clearError({ redirect: '/' })
</script>


<template>
    <SiteHeader/>
		<section class="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
			<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div class="max-w-md text-center">
					<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
						<span class="sr-only">{{ $t('error.title') }}</span> {{ props.error?.statusCode }}
					</h2>
					<p class="text-2xl font-semibold md:text-3xl">{{ $t('error.message') }}</p>
					<p class="mt-4 mb-8 dark:text-gray-400">{{ $t('error.message2') }}</p>
					<button class="btn btn-ghost normal-case text-base" @click="handleError"> {{ $t('error.button') }} </button>
				</div>
			</div>
		</section>
    <SiteFooter/>
</template>