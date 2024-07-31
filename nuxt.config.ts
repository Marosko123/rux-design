// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  pages: true,
  css: ["@/assets/styles/main.scss"],
  modules: ["nuxt-mdi"],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@/assets/styles/_variables.scss';
            @import '@/assets/styles/_mixins.scss'; 
            @import '@/assets/styles/_fonts.scss';
            `,
        },
      },
    },
  },
});
