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
      :zoom=14
      :center="[-22.9240243, -46.5644216]"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <LTileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </LMap>

    <router-link to="/house/create" class="create-house"> + </router-link>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";

import "../styles/views/houses-map.css";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
  },
};
</script>