<script setup lang="ts">
import { useRoute } from 'vue-router'

const props = defineProps<{ collapsed: boolean }>()
const emit = defineEmits<{ (e: 'update:collapsed', value: boolean): void }>()

const route = useRoute()

function isActive(path: string) {
  return route.path === path
}

function toggleSidebar() {
  emit('update:collapsed', !props.collapsed)
}
</script>


<template>
  <aside
      class="bg-neutral-900/95 border-r border-neutral-700 p-4 flex flex-col h-full fixed inset-y-0 transition-all duration-300"
      :class="props.collapsed ? 'w-20' : 'w-72'"
  >
    <!-- Top bar -->
    <div class="flex items-center justify-between mb-8">
      <NuxtLink v-if="!props.collapsed" to="/" class="text-xl font-extrabold tracking-tight text-neutral-100">
        bhety.tech
      </NuxtLink>
      <button
          @click="toggleSidebar"
          class="p-2 rounded-lg hover:bg-neutral-800 text-neutral-300"
          aria-label="Toggle sidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 text-sm">
      <ul class="space-y-2">
        <li>
          <NuxtLink
              to="/"
              class="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-800"
              :class="isActive('/') ? 'bg-neutral-800' : ''"
          >
            <svg class="h-5 w-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z"/>
            </svg>
            <span v-if="!props.collapsed">Home</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
              to="/about"
              class="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-800"
              :class="isActive('/about') ? 'bg-neutral-800' : ''"
          >
            <svg class="h-5 w-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="7" r="4" /><path stroke-linecap="round" stroke-linejoin="round" d="M20 21a8 8 0 1 0-16 0"/>
            </svg>
            <span v-if="!props.collapsed">About</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
              to="/projects"
              class="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-800"
              :class="isActive('/projects') ? 'bg-neutral-800' : ''"
          >
            <svg class="h-5 w-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h5l2 2h11v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>
            </svg>
            <span v-if="!props.collapsed">Projects</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
              to="/tools"
              class="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-800"
              :class="isActive('/tools') ? 'bg-neutral-800' : ''"
          >
            <svg class="h-5 w-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 7a4 4 0 1 0-4 4l-6 6a2 2 0 1 0 3 3l6-6a4 4 0 0 0 4-7Z"/>
            </svg>
            <span v-if="!props.collapsed">Tools</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
              to="/contact"
              class="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:bg-neutral-800"
              :class="isActive('/contact') ? 'bg-neutral-800' : ''"
          >
            <svg class="h-5 w-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 7l9 6 9-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"/>
            </svg>
            <span v-if="!props.collapsed">Contact</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>


    <!-- Footer -->
    <p v-if="!props.collapsed" class="mt-6 text-xs leading-relaxed text-neutral-400">
      © 2025 All rights reserved<br />Bhety Penetzdorfer
    </p>
  </aside>
</template>
