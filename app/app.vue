<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import FlashLightOverlay from "./components/FlashLightOverlay.vue";


const collapsed = ref(false)
</script>

<template>
  <div class="flex min-h-screen bg-neutral-800 text-neutral-100">
    <!-- Sidebar -->
    <Sidebar v-model:collapsed="collapsed" />

    <!-- Main content adjusts with sidebar -->
    <main
        class="flex-1 transition-all duration-300"
        :class="collapsed ? 'ml-20' : 'ml-72'"
    >
      <NuxtPage />
      <FlashLightOverlay />

    </main>
  </div>
</template>
