import Vue from 'vue'
import App from './App.vue'
import './styles/global.css';

import VueMdijs from 'vue-mdijs'
import { mdiMagnify } from '@mdi/js'

import router from "./router";
import api from './services/api.js';

import 'leaflet/dist/leaflet.css';

VueMdijs.add({ mdiMagnify });
Vue.use(VueMdijs);

Vue.config.productionTip = false;
Vue.prototype.$http = api;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
