// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  modules: ["@nuxt/ui"],
});
