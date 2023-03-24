import Vue from 'vue'
import App from './App.vue'
import './element-ui'
import '@/assets/css/global.less'
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
}).$mount('#app')