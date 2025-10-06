<script setup lang="ts">
import GalleryCard from "./GalleryCard.vue";
import type { RouteLocationRaw } from 'vue-router'

type HeroItem = { title: string; img: string; to: string | RouteLocationRaw }
type HeroItems = {
  project: HeroItem
  tools: HeroItem
  about: HeroItem
  home: HeroItem
  contact: HeroItem
}

const props = defineProps<{ items: HeroItems }>()
</script>

<template>
  <section id="landing" class="px-6 pt-6">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- LEFT: Project, Tools -->
      <div class="grid gap-6">
        <GalleryCard :title="items.project.title" :img="items.project.img" :to="items.project.to" />
        <GalleryCard :title="items.tools.title"   :img="items.tools.img"   :to="items.tools.to" />
      </div>

      <!-- MIDDLE: About (fill viewport height) -->
      <div>
        <GalleryCard
            :title="items.about.title"
            :img="items.about.img"
            :to="items.about.to"
            tall
            class="min-h-screen"
        />
      </div>

      <!-- RIGHT: Home, Contact -->
      <div class="grid gap-6">
        <GalleryCard :title="items.home.title"    :img="items.home.img"    :to="items.home.to" />
        <GalleryCard :title="items.contact.title" :img="items.contact.img" :to="items.contact.to" />
      </div>
    </div>
  </section>
</template>
