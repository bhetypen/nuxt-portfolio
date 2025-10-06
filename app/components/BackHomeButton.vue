<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <NuxtLink
      v-if="route.path !== '/'"
  to="/"
  class="inline-flex items-center mb-2 gap-2 px-4 py-2 rounded-[3px] bg-neutral-800 text-neutral-200 hover:bg-neutral-700 border border-neutral-600 transition-colors"
  >
  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  Back to Home
  </NuxtLink>
</template>
