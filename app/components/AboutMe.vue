<script setup lang="ts">
import { ref, computed } from "vue"

type Edu = {
  period: string
  title: string
  org: string
  details: string
}

const education: Edu[] = [
  {
    period: "Sep 2024 – Jul 2026",
    title: "Application Development – Coding (Apprenticeship Exam Prep)",
    org: "WIFI Upper Austria",
    details: "Goal: Final apprenticeship exam in July 2026."
  },
  {
    period: "June 2025 - October 2025",
    title: "Zuitt Philippines Tech Career Program",
    org: "Zuitt",
    details:
        "Intensive fullstack bootcamp with practical projects (JavaScript, Node.js, React, Databases). Focus on teamwork and agile methodologies."
  },
  {
    period: "June 2024 - September 2024",
    title: "Uplift Code Camp (Remote)",
    org: "Uplift",
    details:
        "Specialization in modern frontend technologies (React, Responsive Design, UI/UX)."
  },
  {
    period: "Jan 2024",
    title: "Responsive Web Design",
    org: "freeCodeCamp (Online)",
    details:
        "Certificate focused on HTML, CSS, Flexbox, Grid, and Accessibility."
  },

  {
    period: "September 2024 - April 2025 ",
    title: "Software Developer Training",
    org: "BFI Coders Bay Linz",
    details:
        "Comprehensive training in Java, SQL, web development, and software engineering. Final project based on a real-world scenario."
  },
  {
    period: "September 2021 - June 2023",
    title: "Mechanical Engineering Technology",
    org: "BFI Metallzentrum Attnang",
    details:
        "Basics of metalworking, manufacturing, and technical drawing (PLC, SolidWorks, AutoCAD)."
  },
  {
    period: "July 2000 - July 2003",
    title: "Instrumentation & Control Engineering Technology",
    org: "Technological University of the Philippines",
    details:
        "Recognized by ENIC NARIC Austria as technical college level, specialization in control engineering."
  }
]

// Carousel state
const currentIndex = ref(0)
const visibleCount = 4

const visibleCards = computed(() =>
    education.slice(currentIndex.value, currentIndex.value + visibleCount)
)

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function nextSlide() {
  if (currentIndex.value < education.length - visibleCount) {
    currentIndex.value++
  }
}
</script>

<template>
  <!-- Header -->
  <header class="text-center mb-6">
    <h1 class="text-3xl md:text-4xl font-bold text-white">/about</h1>
  </header>
  <section
      id="about"
      class="text-center bg-neutral-900/95 border border-neutral-800 rounded-2xl p-6 md:p-10 text-neutral-100 shadow-lg space-y-10"
  >


    <!-- Intro -->
    <div>
      <span class="text-xs md:text-sm uppercase tracking-wide text-neutral-400">Full Stack Web Developer</span>
      <h2 class="mt-1 text-2xl md:text-3xl font-bold text-neutral-200">Bhety Penetzdorfer</h2>
    </div>

    <p class="text-neutral-300 leading-relaxed">
      Hi, I’m a passionate junior software developer with hands-on experience in Frontend and
      Fullstack projects. <br>My main focus is on JavaScript, React, Vue.js, Node.js, and Java (JDBC,
      ORM, GUI frameworks).
    </p>

    <!-- Skills -->
    <div class="space-y-4">
      <p class="text-neutral-200">I’ve gained practical knowledge in:</p>
      <ul class="space-y-3 text-neutral-300">
        <li>Designing & deploying web apps (Vercel, Hostinger, AWS, Netlify)</li>
        <li>Building REST APIs with authentication & role management</li>
        <li>Working with databases (MongoDB, PostgreSQL, Oracle)</li>
        <li>Creating responsive UI/UX with Figma and vanilla CSS</li>
      </ul>
    </div>

    <!-- Passion -->
    <p class="text-neutral-300 leading-relaxed">
      I enjoy developing intuitive and scalable applications, and I continuously improve my skills <br>by
      exploring new technologies such as Python, C#, and cloud-based deployments.
    </p>

    <!-- Career shift -->
    <p class="text-neutral-300 leading-relaxed">
      After a career shift supported by intensive training and self-driven learning, I bring
      a resilient and solution-oriented mindset. <br>I’m eager to contribute to teams that value
      growth, collaboration, and impactful software development.
    </p>

    <!-- Education Carousel -->
    <div class="pt-6">
      <h3 class="text-2xl md:text-3xl font-bold text-neutral-200 mb-6 text-center">
        Education
      </h3>

      <div class="relative">
        <!-- Cards -->
        <div class="flex justify-center gap-6">
          <div
              v-for="(e, i) in visibleCards"
              :key="i"
              class="w-72 flex-shrink-0 bg-gradient-to-b from-neutral-900/90 to-neutral-900/70 border border-neutral-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="p-5 space-y-3">
              <span
                  class="inline-block rounded-full border border-neutral-700 bg-neutral-800/70 px-3 py-1 text-xs text-neutral-300"
              >
                {{ e.period }}
              </span>
              <div>
                <h4 class="text-lg font-semibold text-neutral-100">
                  {{ e.title }}
                </h4>
                <p class="text-sm text-neutral-400">{{ e.org }}</p>
              </div>
              <p class="text-sm leading-relaxed text-neutral-300">
                {{ e.details }}
              </p>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <button
            @click="prevSlide"
            class="absolute top-1/2 -translate-y-1/2 left-0 bg-neutral-800/80 hover:bg-neutral-700 text-white rounded-full p-2 disabled:opacity-30"
            :disabled="currentIndex === 0"
        >
          ‹
        </button>
        <button
            @click="nextSlide"
            class="absolute top-1/2 -translate-y-1/2 right-0 bg-neutral-800/80 hover:bg-neutral-700 text-white rounded-full p-2 disabled:opacity-30"
            :disabled="currentIndex >= education.length - visibleCount"
        >
          ›
        </button>
      </div>

      <!-- Dots -->
      <div class="flex justify-center gap-6 items-stretch">
        <div class="flex justify-center mt-6 gap-2">
        <span
            v-for="(e, i) in education.length - visibleCount + 1"
            :key="i"
            @click="currentIndex = i"
            class="h-2 w-2 rounded-full cursor-pointer"
            :class="i === currentIndex ? 'bg-white' : 'bg-neutral-600'"
        ></span>
        </div>
      </div>
    </div>
  </section>
</template>
