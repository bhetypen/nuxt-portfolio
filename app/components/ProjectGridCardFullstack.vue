<script setup lang="ts">
const props = defineProps<{
  slug: string
  title: string
  logo?: string
  url?: string
}>()
</script>

<template>
  <NuxtLink
      :to="`/projects/${props.slug}`"
      class="block rounded-[3px] overflow-hidden border border-neutral-200/70 dark:border-neutral-800
         bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl
         transform hover:scale-105 transition duration-300 w-full"
  >
    <!-- Logo / Image area -->
    <div class="h-56 flex justify-center items-start pt-6 bg-neutral-50 dark:bg-neutral-800 mb-8">
      <img
          v-if="props.logo"
          :src="props.logo"
          :alt="props.title"
          class="max-h-60 object-contain"
      />
      <span
          v-else
          class="text-lg font-medium text-neutral-500 dark:text-neutral-400"
      >
        {{ props.title }}
      </span>
    </div>

    <!-- Divider -->
    <div class="h-px bg-neutral-200/70 dark:bg-neutral-800" />

    <!-- Title + URL -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-neutral-900 dark:text-white mb-2">
        {{ props.title }}
      </h3>
      <span
          v-if="props.url"
          class="block text-sm text-purple-600 hover:underline truncate"
      >
        {{ props.url.replace(/^https?:\/\//, '') }}
      </span>
    </div>
  </NuxtLink>
</template>
