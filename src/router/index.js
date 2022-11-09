// import { createRouter } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/mainPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/uk',
    name: 'home',
    component: main
  },
  {
    path: '/uk',
    name: 'uk',
    component: main,
  },
  {
    path: '/ru',
    name: 'ru',
    component: main,
  },
  {
    path: '/en',
    name: 'en',
    component: main,
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/uk',
    name: '404',
    component: main,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
