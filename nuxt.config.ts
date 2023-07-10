export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@pinia/nuxt"],

  pinia: {
    autoImports: ["defineStore"],
  },

  runtimeConfig: {
    apiKey: process.env.API_KEY,
    aiApiKey: process.env.AI_API_KEY,
    org: process.env.ORG,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
  },
  routeRules: {
    "/infinity": { ssr: false },
    "/": { ssr: false },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Conquer Cinema",
      meta: [
        { name: "description", content: "Усі фільми в одному місці." },
        { name: "keywords", content: "movies, conquer, films" },
        { name: "robots", content: "noindex, nofollow" },
        { name: "language", content: "English" },
        { name: "author", content: "Dmitry Conquer" },
      ],
    },
  },

  css: ["~/assets/scss/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
