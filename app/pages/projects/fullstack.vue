<script setup lang="ts">
import { projects } from '~/data/project'
import WorkGridCard from '~/components/ProjectGridCardFullstack.vue'
import BackToProjectButton from "../../components/BackToProjectButton.vue";

const list = projects.filter(p => p.category === 'fullstack')
</script>

<template>
  <section class="flex items-start justify-start min-h-[10vh] px-6 w-full mt-6">
    <BackToProjectButton />
  </section>
  <section class="min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-12 max-w-6xl mx-auto text-center">
    <!-- Header -->
    <header class="text-center mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-white dark:text-white">/projects/fullstack.</h1>
      <p class="mt-2 text-white dark:text-neutral-400">
        Selected fullstack Project I’ve taken on in the past or currently working in.
      </p>
    </header>

    <!-- Grid -->
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
