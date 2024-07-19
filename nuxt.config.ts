// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  pages: true,
  css: ["@/assets/css/main.scss"],
  modules: ["nuxt-mdi", "@nuxt/ui"],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/assets/css/mixins.scss';",
        },
      },
    },
  },
});
