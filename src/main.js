import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import BaseTemplate from './layouts/BaseTemplate'
import './scss/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(BaseTemplate),
  router,
  store,
  vuetify,
}).$mount('#app')
