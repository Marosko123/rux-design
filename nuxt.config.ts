// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  pages: true,
  css: ["@/assets/css/main.scss"],
  modules: ["nuxt-mdi", "@nuxt/ui"],
  typescript: {
    typeCheck: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/assets/css/variables.scss';",
        },
      },
    },
  },
});