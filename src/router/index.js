import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function lazyLoad(view){
  return import(`../views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => lazyLoad("LoginView")
  },
  {
    path: '/',
    name: 'home',
    component: () => lazyLoad("HomeView")
  },
  {
    path: '/about',
    name: 'about',
    component: () => lazyLoad("AboutView")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
