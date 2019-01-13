import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import store from './store'
import './register'

import './common/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
