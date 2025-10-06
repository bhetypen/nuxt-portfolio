<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const x = ref(0)
const y = ref(0)

function handleMouseMove(e: MouseEvent) {
  x.value = e.clientX
  y.value = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <!-- A glowing orange circle following the cursor -->
  <div
      class="pointer-events-none fixed top-0 left-0 w-20 h-20 rounded-full blur-3xl bg-orange-400/70 z-[9999] transition-transform duration-100"
      :style="{ transform: `translate(${x - 80}px, ${y - 80}px)` }"
  />
</template>
