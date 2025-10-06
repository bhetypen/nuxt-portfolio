// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  devtools: { enabled: true },

  // SPA + static output
  ssr: false,
  nitro: { preset: 'static' },

  // important for Hostinger (serving at /)
  app: {
    baseURL: '/',        // if you’re NOT under a subfolder
  },

  modules: ['shadcn-nuxt', '@nuxtjs/google-fonts'],
})
