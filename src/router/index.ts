import { createRouter, createWebHistory } from 'vue-router';
import { createAuthGuard } from '@auth0/auth0-vue';
import Home from '@/views/Home.vue';
import Profile from '@/views/Profile.vue';
import This from '@/views/This.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/this', name: 'This', component: This, beforeEnter: createAuthGuard()},
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: createAuthGuard(), // Protect the Profile route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
