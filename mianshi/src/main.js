import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Router from './router/index'

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
