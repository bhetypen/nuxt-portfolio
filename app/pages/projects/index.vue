<script setup lang="ts">
import { Button } from '@/components/ui/button'
import BackHomeButton from "../../components/BackHomeButton.vue";
</script>

<template>
  <section class="flex items-start justify-start min-h-[10vh] px-6 w-full mt-2">
    <BackHomeButton />
  </section>
  <header class="text-center mb-10">
    <h1 class="text-3xl md:text-4xl font-bold text-white dark:text-white">/projects.</h1>
    <p class="mt-2 text-white dark:text-neutral-400">
      Selected Project I’ve taken on in the past or currently working in.
    </p>
  </header>
  <section class="flex items-center justify-center min-h-[80vh] px-6 w-full">

    <!-- Two-column layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 w-full h-[70vh] max-w-6xl rounded-2xl overflow-hidden shadow-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">

      <!-- Fullstack -->
      <div class="flex flex-col justify-center p-10 w-full">
        <div>
          <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Fullstack Projects
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 mb-8">
            Complete applications with backend & frontend — authentication, APIs,
            cloud deployments, and scalable architecture.
          </p>
        </div>
        <Button
            as-child
            class="bg-white rounded-[3px] text-black border border-black hover:bg-black hover:text-white transition-colors w-fit"
        >
          <NuxtLink to="/projects/fullstack">See my fullstack work →</NuxtLink>
        </Button>
      </div>

      <!-- Frontend -->
      <div class="flex flex-col justify-center p-10 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800">
        <div>
          <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Frontend Projects
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 mb-8">
            Focused on UI/UX, interactive designs, and responsive layouts —
            lightweight and ready to explore.
          </p>
        </div>
        <Button
            as-child
            class="bg-white rounded-[3px] text-black border border-black hover:bg-black hover:text-white transition-colors w-fit"
        >
          <NuxtLink to="/projects/frontend">See My Frontend Projects →</NuxtLink>
        </Button>
      </div>

    </div>
  </section>
</template>
