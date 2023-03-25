import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './element-ui'
import '@/assets/css/global.less'
Vue.config.productionTip = false
const app = new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
console.log(app)
