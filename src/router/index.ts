import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HelloWorld.vue';
import AuthRoutes from '@/router/auth';

const homeRoutes = [
  {
    path: '/home',
    component: HomeView,
    name: 'home',
    meta: {
      auth: true
    }
  }
]

const routes = [
  ...homeRoutes,
  ...AuthRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.auth);
  const requiresGuest = to.matched.some((x) => x.meta.requiresGuest);

  let routerAuthCheck = false;

  if (localStorage.getItem('token') && localStorage.getItem('expires_at')) {
    const expiresAt: any = localStorage.getItem('expires_at') ? localStorage.getItem('expires_at') : 0;
    routerAuthCheck = new Date().getTime() < expiresAt;
  }

  // let nextRoute : Object = {};

  if (requiresAuth) {
    if (!routerAuthCheck) {
      next({ name: "login" })
    }
  }

  if (requiresGuest && routerAuthCheck) {  
      next({ name: "home" }); 
  }
  next();
})

export default router;