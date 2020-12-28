<template>
  <div id="page-map">
    <aside>
      <header>
        <img src="../assets/icone.png" alt="House" />

        <h2>Escolha uma casa no mapa</h2>
        <p>Muitas casas estão esperando para serem alugadas :)</p>
      </header>

      <footer>
        <strong>Bragança Paulista</strong>
        <span>São Paulo</span>
      </footer>
    </aside>

    <LMap
      style="height: 100%; width: 100%"
      :zoom="14"
      :center="[-22.9240243, -46.5644216]"      
    >
      <LTileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <LMarker 
        :lat-lng="[-22.9240243, -46.5644216]"    
        :icon="icon" 
      ></LMarker>

        <LMarker 
        :lat-lng="[-22.9440243, -46.5644216]"    
        :icon="icon" 
      ></LMarker>

        <LMarker 
        :lat-lng="[-22.9340243, -46.5754216]"    
        :icon="icon" 
      ></LMarker>
    </LMap>

    <router-link to="/house/create" class="create-house"> + </router-link>
  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from "vue2-leaflet"; 

import "../styles/views/houses-map.css";
import img from '../assets/icone.png';

export default {
  name: 'HousesMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },

  data() {
    return {    
      icon: L.icon({
        iconUrl: img,
        iconSize: [42, 47],
        iconAnchor: [16, 37],
      }),  
    };
  }, 
};
</script>