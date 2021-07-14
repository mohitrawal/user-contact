import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/create-user',
      name: 'CreateUser',
      component: () => import('../views/createUser.vue')
    }
  ]
});
export default router