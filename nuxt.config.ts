// https://nuxt.com/docs/api/configuration/nuxt-config
import {icons} from '@iconify-json/heroicons';

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/icon"],

  ssr: false,

  i18n: {
    locales: ["en-US", "ru-RU", "ja-JP"],
    defaultLocale: "ru-RU",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
    strategy: 'no_prefix'
  },

  icon: {
    serverBundle: false,
    collections: [icons]
  }
})