<script setup lang="ts">
import { useRoute } from 'vue-router'
import { projects } from '~/data/project'

const route = useRoute()
const project = projects.find(p => p.slug === route.params.slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-16">
    <!-- Title -->
    <h1 class="text-3xl font-bold text-white mb-4">{{ project.title }}</h1>
    <p class="text-neutral-400 mb-8">{{ project.long || project.description }}</p>

    <!-- Links -->
    <div class="flex gap-4 mb-8">
      <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          class="px-4 py-2 rounded border border-purple-500 text-purple-400 hover:bg-purple-500/10"
      >
        Live Demo
      </a>
      <a
          v-if="project.repoUrl"
          :href="project.repoUrl"
          target="_blank"
          class="px-4 py-2 rounded border border-neutral-600 text-neutral-300 hover:bg-neutral-800"
      >
        View Code
      </a>
      <span
          v-if="project.repoPrivate"
          class="px-4 py-2 rounded border border-neutral-700 text-neutral-500"
      >
        Private Repo (on request)
      </span>
    </div>

    <!-- Gallery -->
    <div v-if="project.images?.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <img
          v-for="(img, i) in project.images"
          :key="i"
          :src="img"
          :alt="`${project.title} screenshot ${i+1}`"
          class="rounded-lg border border-neutral-800"
      />
    </div>

    <!-- Back to all projects -->
    <div class="mt-12">
      <NuxtLink
          to="/projects"
          class="px-4 py-2 rounded border border-neutral-700 text-neutral-300 hover:bg-neutral-800"
      >
        ← Back to Projects
      </NuxtLink>
    </div>
  </div>
</template>
