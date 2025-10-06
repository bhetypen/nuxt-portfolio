<script setup lang="ts">
import type { Project } from '~/data/project'

const props = defineProps<{ project: Project }>()
</script>

<template>
  <NuxtLink
      :to="`/projects/${props.project.slug}`"
      class="group block rounded-xl border border-neutral-800 bg-neutral-900/70 p-6 hover:border-purple-500 transition-colors"
  >
    <!-- Logo -->
    <img
        :src="props.project.logo"
        alt="logo"
        class="h-10 mb-4"
    />

    <!-- Title -->
    <div class="flex items-center gap-2 mb-2">
      <h3 class="text-lg font-semibold text-white">{{ props.project.title }}</h3>
      <span
          v-if="props.project.repoPrivate"
          class="text-[10px] px-2 py-0.5 rounded border border-neutral-600 text-neutral-400"
      >
        Private repo
      </span>
    </div>

    <!-- Description -->
    <p class="text-sm text-neutral-400 mb-4">
      {{ props.project.description }}
    </p>

    <!-- Tech stack -->
    <div class="flex flex-wrap gap-2">
      <span
          v-for="tech in props.project.tech"
          :key="tech"
          class="px-2 py-0.5 text-xs rounded bg-neutral-800 text-neutral-300"
      >
        {{ tech }}
      </span>
    </div>
  </NuxtLink>
</template>
