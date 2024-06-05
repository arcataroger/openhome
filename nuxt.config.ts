// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
const dir = '/';

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: dir,
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap',
          crossorigin: '',
        },
      ],
    },
  },
  modules: ['@vueuse/nuxt'],
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/setup.css',
    '~/assets/css/main.css',
  ],
  alias: {
    assets: '/<rootDir>/assets',
  },
  devtools: { enabled: false },
  /*   gtag: {
    id: 'G-751YVZCCDP',
  }, */
  /*   runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
    },
  }, */
});
