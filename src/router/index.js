import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/watchlist',
      name: 'Watchlist',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Watchlist.vue')
    },
    {
      path: '/movie/:id',
      name: 'movie',
      props: true,
      component: () => import('../views/MovieDetail.vue')
    }
  ]
})

export default router
