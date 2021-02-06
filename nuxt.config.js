export default {
  ssr: false,
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'application',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  storybook: {
    // Options
    port: 4000,
    addons: [
      '@storybook/addon-controls',
      '@storybook/addon-notes',
      {
        name: '@storybook/preset-scss',
        options: {
          cssLoaderOptions: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
      },
    ],
    stories: ['~/components/**/*.stories.js'],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/style/main.css'],
  loading: {
    color: 'blue',
    height: '5px',
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/vuetify',
  ],

  webfontloader: {
    google: {
      families: ['Poppins:400,700'],
    },
  },
  styleResources: {
    scss: ['~/assets/style/_variables.scss'],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
