import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from '../views/Landing.vue';
import HousesMap from '../views/HousesMap.vue';
import Login from '../views/Login.vue';
import CreateHouse from '../views/CreateHouse.vue';
import Teste from '../views/Teste.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/app',
    name: 'HousesMap',
    component: HousesMap,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/house/create',
    name: 'CreateHouse',
    component: CreateHouse,
  },
  {
    path: '/house/teste',
    name: 'teste',
    component: Teste,
  },
]

const router = new VueRouter({
  routes
});

export default router;