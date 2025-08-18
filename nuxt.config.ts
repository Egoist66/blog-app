// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  runtimeConfig: {
    public: {
      apiUrl: import.meta.env.NUXT_PUBLIC_API_POSTS_URL, // Доступно и на клиенте
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },

    viewTransition: true,
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/Qtim.svg",
        },
      ],
      script: [{ src: "" }],
      title: "QTIM",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  vue: {
    propsDestructure: true,
  },
  experimental: {
    asyncContext: true,
    lazyHydration: true,
  },

  imports: {
    dirs: [
      "composables",
      "composables/*/index.{ts,js,mjs,mts}",
      "composables/**",
    ],
  },

  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],

  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },

  typescript: {
    typeCheck: import.meta.dev,
  },
});
