import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import EditView from '../views/EditView.vue'
import ResultList from '../views/ResultList.vue'
import RecipeDetail from '../views/RecipeDetailView.vue'
import LoginView from '../views/LoginView.vue'
import IntroView from '../views/IntroView.vue'
import { useAuthStore } from '@/stores/authStore.js'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: IntroView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {requiresAuth: true},
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/detail/:id',
    component: RecipeDetail,
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditView,
    meta: {requiresAuth: true},
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/search/:query',
    name: 'result',
    component: ResultList,
    props: (route) => ({ mode: '검색결과', query: route.params.query})
  },
  {
    path: '/search/:query/detail/:id',
    component: RecipeDetail
  },
  {
    path: '/bookmarked',
    name: 'bookmarked',
    component: ResultList,
    props: { mode: '저장한 레시피' },
    meta: {requiresAuth: true},
  },
  {
    path: '/bookmarked/detail/:id',
    component: RecipeDetail,
    meta: {requiresAuth: true},
  },
  {
    path: '/posted',
    name: 'posted',
    component: ResultList,
    props: { mode: '등록한 레시피' },
    meta: {requiresAuth: true},
  },
  {
    path: '/posted/detail/:id',
    component: RecipeDetail,
    meta: {requiresAuth: true},
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  authStore.checkAuth();  // 로그인 상태 확인
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next(); // 그렇지 않으면 그대로 진행
  }
});

export default router;
