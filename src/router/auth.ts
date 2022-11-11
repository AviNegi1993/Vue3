import LoginView from '@/components/Auth/Login.vue';

const authRoutes = [
    {
        path: '/',
        component: LoginView,
        name: 'login',
        meta: {
            requiresGuest: true
        }
    }
];

export default authRoutes