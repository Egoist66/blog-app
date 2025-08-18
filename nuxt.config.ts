// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],

  vue: {
    propsDestructure: true
  },
  experimental: {
    asyncContext: true,
    lazyHydration: true
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss'
  ],
 
  typescript: {
    typeCheck: import.meta.dev
  }
})