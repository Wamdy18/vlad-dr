import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SelectPage from '@/pages/SelectPage.vue'
import KazikPage from '@/pages/KazikPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/select',
      name: 'select',
      component: SelectPage,
    },
    {
      path: '/kazik',
      name: 'kazik',
      component: KazikPage,
    },
  ],
})

export default router
