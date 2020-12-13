import Vue from 'vue'
import App from './App.vue'
import './styles/global.css';

import VueMdijs from 'vue-mdijs'
import { mdiMagnify } from '@mdi/js'

import router from "./router";

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

VueMdijs.add({ mdiMagnify });
Vue.use(VueMdijs);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
