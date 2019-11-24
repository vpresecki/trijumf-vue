import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/trijumf/home',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/trijumf/game',
    name: 'game',
    component: () => import('../views/Game')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
