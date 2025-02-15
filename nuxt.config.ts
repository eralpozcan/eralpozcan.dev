// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-10-09',

  app: {
    pageTransition: { name: 'page', mode: 'out-in'},
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'author', content: 'Eralp Özcan' },
        { hid: 'robots', name: 'robots', content: 'index, follow'},
        { name: 'application-name', content: 'Eralp Özcan' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png'},
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
  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxtjs/color-mode',
    'nuxt-vitalizer',
    'nuxt-calendly',
    'nuxt-security',
    '@nuxtjs/web-vitals',
  ],

  runtimeConfig: {
    public: {
      calendyStatus: process.env.NUXT_CALENDLY_ENABLED,
      calendyUrl: process.env.NUXT_CALENDLY_URL,
      contactFormApi: process.env.NUXT_CONTACT_FORM_API,
      sentry: {
        dsn: process.env.NUXT_SENTRY_DSN,
      },
    },
    githubToken: process.env.NUXT_GITHUB_TOKEN,
  },

  routeRules: {
    '/': { prerender: true },
    '/blog/**': {
      security: {
        headers: {
          contentSecurityPolicy: false,
        },
      },
    }
  },
  
  calendly: {
    isEnabled: true,
    loadWidgetCSS: true,
    loadWidgetCloseIconSvg: false,
  },

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
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      cookieSecure: true,
    },
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'tr',
        iso: 'tr-TR',
        name: 'Türkçe'
      }
    ],
    vueI18n: './locales/i18n.config.ts' 
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  scripts: {
    registry: {
      clarity: {
        id: `${process.env.NUXT_PUBLIC_CLARITY_ID}`
      },
      googleAnalytics: {
        id: `${process.env.NUXT_GOOGLE_ANALYTICS_ID}`
      },
      googleTagManager: {
        id: `${process.env.NUXT_PUBLIC_GTM_ID}`
      },
    }
  },
  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Eralp Özcan',
      url: 'https://eralpozcan.dev',
      logo: 'https://eralpozcan.dev/og-image.png'
    }
  },
  security: {
    nonce: false,
    headers: {
      contentSecurityPolicy: false,
      crossOriginOpenerPolicy: false,
      crossOriginResourcePolicy: false,
      originAgentCluster: false,
      referrerPolicy: 'strict-origin-when-cross-origin',
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true
      },
      xFrameOptions: 'DENY'
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000,
      maxUploadFileRequestInBytes: 8000000,
    },
    rateLimiter: {
      tokensPerInterval: 150,
      interval: 300000,
      headers: false,
      driver: {
        name: 'lruCache'
      },
      throwError: true
    },
    xssValidator: false,
    corsHandler: {
      origin: '*',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      preflight: {
        statusCode: 204
      }
    }
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: 'Eralp Özcan',
    description: 'Eralp Özcan is a Full Stack Developer who is passionate about various web technologies. I am currently working at TatilDukkani as a frontend developer.',
    defaultLocale: 'en',
  },
  vitalizer: {
    disablePrefetchLinks: true,
  },
  webVitals: {
    provider: 'ga',
    ga: {
      id: `${process.env.NUXT_GOOGLE_ANALYTICS_ID}`,
    },
  },
})