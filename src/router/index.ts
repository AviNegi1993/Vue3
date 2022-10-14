import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HelloWorld.vue';
import LoginView from '@/components/Auth/Login.vue';

const routes = [
    { path: '/', component: LoginView },
    { path: '/home', component: HomeView }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  export default router;