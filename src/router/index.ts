import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Products from '../views/ProductsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
