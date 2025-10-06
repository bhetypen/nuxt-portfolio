<script setup lang="ts">
import { projects } from '~/data/project'
import WorkGridCard from '~/components/ProjectGridCardFullstack.vue'
import BackToProjectButton from "../../components/BackToProjectButton.vue";

// Make sure the category string matches EXACTLY: 'frontend'
const list = projects.filter(p => p.category === 'frontend')
</script>

<template>
  <section class="flex items-start justify-start min-h-[10vh] px-6 w-full mt-6">
    <BackToProjectButton />
  </section>
  <section class="px-6 md:px-12 py-12 max-w-6xl mx-auto">
    <header class="text-center mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-neutral-200 dark:text-white">/projects/frontend.</h1>
      <p class="mt-2 text-neutral-100 dark:text-neutral-400">
        Selected frontend projects I’ve built.
      </p>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <WorkGridCard
          v-for="p in list"
          :key="p.slug"
          :slug="p.slug"
          :title="p.title"
          :logo="p.logo"
          :url="p.url"
      />
    </div>
  </section>
</template>
