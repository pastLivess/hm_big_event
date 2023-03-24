import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue'),
    },
    {
      path: '/register',
      component: () => import('@/views/register/Register.vue'),
    },
  ],
})

export default router
