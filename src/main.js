import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDragResize from 'vue-drag-resize'

Vue.config.productionTip = false

Vue.component('vue-drag-resize', VueDragResize)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
