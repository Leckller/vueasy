import Components from '@/views/components-view/index.vue'
import Home from '@/views/Home.vue'
import NotFoundView from '@/views/not-found/NotFoundView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/components/:category/:component',
    name: 'Component',
    component: Components,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
