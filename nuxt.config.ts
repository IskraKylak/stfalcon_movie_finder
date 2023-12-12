// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    'vue3-carousel-nuxt',
    '@pinia/nuxt',
    "@nuxtjs/tailwindcss",
    '@element-plus/nuxt'
  ],
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY || '',
    apiBaseUrl: process.env.NUXT_API_BASE_URL || '',
  },
})