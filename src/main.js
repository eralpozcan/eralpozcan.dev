import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === 'production'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAnalytics, {
  id: 'G-JQP8E551X9',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})
