// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  experimental: {
    payloadExtraction: false,
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      title: 'Eralp Özcan',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'author', content: 'Eralp Ozcan' },
        { name: 'language', content: 'English' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { hid: 'robots', name: 'robots', content: 'index, follow'},
        { name: 'application-name', content: 'Eralp Ozcan' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    },
  },
  runtimeConfig: {
    public: {
      calendyStatus: process.env.NUXT_CALENDLY_ENABLED,
      calendyUrl: process.env.NUXT_CALENDLY_URL,
      contactFormApi: process.env.NUXT_CONTACT_FORM_API
    },
    githubToken: process.env.NUXT_GITHUB_TOKEN,
  },
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
    'nuxt-calendly',
    'nuxt-gtag'
  ],
  colorMode: {
    preference: 'system', // default theme
    fallback: 'light', // fallback theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts','js','css','java','json','bash','vue']
    },
    documentDriven: true,
    experimental: {
      clientDB: true,
      stripQueryParameters: true,
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: 'Eralp Ozcan',
    description: 'Eralp Ozcan is a Full Stack Developer who is passionate about various web technologies. He is currently working at Protein.Tech as a frontend developer.',
    indexable: process.env.NODE_ENV === 'production',
    defaultLocale: 'en',
  },
  sitemap: {
    enabled: true,
    cacheTtl: 1000 * 60 * 60 * 24, // 1 day
    xsl: false
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://api.github.com/graphql',
        httpLinkOptions: {
          headers: {
            authorization: `Bearer ${process.env.NUXT_GITHUB_TOKEN}`,
          },
        },
      }
    },
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GA_ID,
    loadingStrategy: 'async',
  },
  calendly: {
    isEnabled: true,
    loadWidgetCSS: true,
    loadWidgetCloseIconSvg: false,
  },
})
