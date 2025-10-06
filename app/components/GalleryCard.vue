<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  title: string
  img: string
  to: string | RouteLocationRaw
  tall?: boolean
}>()

const shortH = 'min-h-[39vh]'   // ~half of 80vh
const tallH  = 'min-h-[80vh]'   // 80% of viewport
const isHash = computed(() => typeof props.to === 'string' && (props.to as string).startsWith('#'))
</script>

<template>
  <div
      class="relative rounded-2xl overflow-hidden bg-neutral-700 group"
      :class="props.tall ? tallH : shortH"
  >
    <!-- Image with hover zoom -->
    <img
        :src="props.img"
        :alt="props.title"
        class="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
        decoding="async"
    />

    <!-- Overlay darkens on hover -->
    <div
        class="absolute inset-0 bg-black/20 transition-colors duration-500 ease-out group-hover:bg-black/50"
    />

    <!-- Centered content -->
    <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h3 class="text-2xl font-semibold drop-shadow mb-3">{{ props.title }}</h3>

      <NuxtLink
          v-if="!isHash"
          :to="props.to"
          class="px-4 py-2 rounded-[3px] border border-white/70 bg-white/10 hover:bg-white/20 backdrop-blur"
      >
        View More
      </NuxtLink>
      <a
          v-else
          :href="props.to as string"
          class="px-4 rounded-[3px] py-2 rounded-lg border border-white/70 bg-white/10 hover:bg-white/20 backdrop-blur"
      >
        View More
      </a>
    </div>
  </div>
</template>
