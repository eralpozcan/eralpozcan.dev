
module.exports = {
    pluginOptions: {
      prerenderSpa: {
        registry: undefined,
        renderRoutes: [
          '/',
          '/contact',
          '/resume',
          '/portfolio',
          '/404',
          '*',
        ],
        useRenderEvent: true,
        onlyProduction: true,
      },
      sitemap: {
        baseURL: 'https://eralpozcan.com',
        }
    }
  }