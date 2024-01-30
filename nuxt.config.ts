// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: [
    '@/assets/css/main.css',
  ],
  ssr: true,
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  // pinia: {
  //   storesDirs: ['./stores/**', '../core/stores/**'],
  // },
})
