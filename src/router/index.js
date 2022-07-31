import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../layouts/Dashboard.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductView from '../views/ProductView.vue';
//import Categoryindex from '../views/Category/Categoryindex.vue';
import categoryRoutes from '../views/Category/category-route';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta:{requireAuth : true},
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
    component: Login,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass:"active",
})

router.beforeEach((to,from,next)=>{

 if(to.matched.some((record)=>record.meta.requireAuth))
 {
  const token = localStorage.getItem("token");
  if(!token){
    next("/login");
  }else{
    next();
  }

 }else{
next();
 }
})

export default router
