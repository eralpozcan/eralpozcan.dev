
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
   
        headless: false, // <- this could also be inside the customRendererConfig
        customRendererConfig:
        {
          args: ["--auto-open-devtools-for-tabs"]
        }
      },
      sitemap: {
        baseURL: 'https://eralpozcan.com',
        }
    }
  }