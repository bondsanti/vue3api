import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../layouts/Dashboard.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductView from '../views/ProductView.vue';
//import Categoryindex from '../views/Category/Categoryindex.vue';
import categoryRoutes from '../views/Category/category-route';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children:[
      {
        path:"",
        name:"Home",
        component: HomeView,
      },
      {
        path: 'about',
        name: 'about',
       component: AboutView
      },
      {
        path: 'product',
        name: 'product',
       component: ProductView
      },
    ...categoryRoutes,
    ]
  },
  {
    path: '/login',
    name: 'Login',
   component: () =>
   import(/* webpackChunkName: "login */"../views/Login.vue"),
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass:"active",
})

export default router
