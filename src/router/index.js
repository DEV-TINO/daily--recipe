import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import EditView from '../views/EditView.vue'
import ResultList from '../views/ResultList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/resultlist',
      name: 'resultlist',
      component: ResultList

    },
  ]
})

export default router
