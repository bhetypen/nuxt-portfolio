<script setup>
import HeroMasonry from "../components/HeroMasonry.vue";
import AboutMe from "./about.vue";
import Projects from "../pages/projects/index.vue";
import Tools from "../pages/tools.vue";
import Contact from "../pages/contact.vue";

const heroItems = {
  project: {
    title: 'Project',
    img: 'https://bhetypen.github.io/webportfolio/images/project.jpg',
    to: '/projects' // or '#projects'
  },
  tools: {
    title: 'Tools',
    img: 'https://bhetypen.github.io/webportfolio/images/tools1.jpg',
    to: '/tools' // or '#tools'
  },
  about: {
    title: 'About Me',
    img: 'https://bhetypen.github.io/webportfolio/images/aboutme2.png',
    to: '/about' // or '#aboutme'
  },
  home: {
    title: 'Home',
    img: 'https://bhetypen.github.io/webportfolio/images/home.jpg',
    to: '/' // or '#landing'
  },
  contact: {
    title: 'Contact Us',
    img: 'https://bhetypen.github.io/webportfolio/images/contact.jpg',
    to: '/contact' // or '#contact'
  }
}
</script>

<template>
  <HeroMasonry :items="heroItems" />
  <AboutMe/>
  <Projects />
  <Tools />
  <Contact />
</template>
