<script setup lang="ts">
import { Motion } from '@vueuse/motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  FileCode, LayoutTemplate, Code2,
  ServerCog, Braces,
  BookOpenCheck,
  Database, HardDrive,
  Cloud, Cloudy, Globe,
  GitBranch, Github, Gitlab,
  Palette, PencilRuler,
  Package, Hammer, Terminal,
  PanelsTopLeft
} from 'lucide-vue-next'

type Item = { label: string; icon?: any }
type Section = { title: string; items: Item[] }

const sections: Section[] = [
  { title: 'Frontend', items: [
      { label: 'HTML', icon: FileCode },
      { label: 'CSS', icon: LayoutTemplate },
      { label: 'JavaScript (ES6)', icon: Code2 },
      { label: 'React', icon: Code2 },
      { label: 'Vue.js', icon: Code2 },
    ]},
  { title: 'Backend', items: [
      { label: 'Node.js', icon: ServerCog },
      { label: 'Express', icon: Braces },
    ]},
  { title: 'Programming Languages', items: [
      { label: 'Java (advanced: +JDBC)', icon: BookOpenCheck },
      { label: 'Python (basics)', icon: BookOpenCheck },
      { label: 'C# (basics)', icon: BookOpenCheck },
    ]},
  { title: 'Databases', items: [
      { label: 'MongoDB', icon: Database },
      { label: 'PostgreSQL', icon: Database },
      { label: 'Oracle', icon: HardDrive },
    ]},
  { title: 'Deployment & Hosting', items: [
      { label: 'AWS (Lambda, API Gateway)', icon: Cloud },
      { label: 'Vercel', icon: Globe },
      { label: 'Netlify', icon: Cloudy },
      { label: 'Hostinger', icon: Globe },
    ]},
  { title: 'Version Control', items: [
      { label: 'Git', icon: GitBranch },
      { label: 'GitHub', icon: Github },
      { label: 'GitLab', icon: Gitlab },
      { label: 'Gitea', icon: GitBranch },
    ]},
  { title: 'Design & Prototyping', items: [
      { label: 'Figma', icon: Palette },
      { label: 'Canva', icon: PencilRuler },
    ]},
  { title: 'Build Tools', items: [
      { label: 'NPM', icon: Package },
      { label: 'Maven', icon: Hammer },
      { label: 'CLI / Scripts', icon: Terminal },
    ]},
  { title: 'GUI Frameworks', items: [
      { label: 'JavaFX', icon: PanelsTopLeft },
    ]},
]
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 md:px-8">
    <header class="mb-6">
      <h2 class="text-xl font-semibold text-neutral-900 dark:text-white">
        Technologies & Tools
      </h2>
    </header>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Motion
          v-for="(section, i) in sections"
          :key="section.title"
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }"
      >
        <Card
            class="group rounded-2xl border border-neutral-200 dark:border-neutral-800
                 bg-white dark:bg-neutral-900 shadow-sm
                 transition-all duration-300
                 hover:-translate-y-1 hover:shadow-xl
                 focus-within:ring-2 focus-within:ring-purple-500/40"
        >
          <CardHeader class="pb-2">
            <CardTitle class="text-lg">{{ section.title }}</CardTitle>
          </CardHeader>

          <CardContent
              class="flex flex-wrap gap-2 transition-transform duration-300 group-hover:scale-[1.01]"
          >
            <Badge
                v-for="it in section.items"
                :key="it.label"
                variant="secondary"
                class="gap-2 px-3 py-1 rounded-md border
                     bg-neutral-100 text-neutral-800 border-neutral-200
                     dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700
                     transition-colors duration-200 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/70"
            >
              <component v-if="it.icon" :is="it.icon" class="h-4 w-4 opacity-80" />
              <span class="text-sm">{{ it.label }}</span>
            </Badge>
          </CardContent>
        </Card>
      </Motion>
    </div>
  </section>
</template>
