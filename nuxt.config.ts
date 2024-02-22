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

  // plugins: [
  //   '~/plugins/google-auth.js',
  // ],
  // pinia: {
  //   storesDirs: ['./stores/**', '../core/stores/**'],
  // },
})
