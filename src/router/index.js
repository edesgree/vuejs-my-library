import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from '../views/MovieDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/watchlist',
      name: 'Watchlist',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WatchlistView.vue')
    },
    {
      path: '/movie/:id',
      name: 'movie',
      props: true,
      component: MovieDetail
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../components/DummyText.vue')
    }
  ]
})

export default router
