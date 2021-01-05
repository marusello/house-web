<template>
  <div id="page-map">
    <aside>
      <header>          
          <router-link class="voltar" to="/">
            <v-icon><span class="material-icons"> keyboard_backspace </span></v-icon>
          </router-link>    

        <img src="../assets/icone.png" alt="House" />

        <h2>Escolha uma casa no mapa</h2>
        <p>
          Muitas casas estão esperando para serem alugadas, clique nas casas e
          escolha uma :)
        </p>
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
        v-for="house of houses"
        :key="house.id"
        :lat-lng="[house.latitude, house.longitude]"
        :icon="icon"
      >
        <LPopup
          :closeButton="false"
          :minWidth="240"
          :maxWidth="240"
          class="map-popup"
        >
          {{ house.proprietario }}
          <router-link to="/house/teste">
            <v-icon>
              <span class="material-icons"> arrow_forward </span>
            </v-icon>
          </router-link>
        </LPopup>
      </LMarker>
    </LMap>

    <router-link to="/house/create" class="create-house">
      <v-icon><span class="material-icons"> add </span></v-icon>
    </router-link>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

import "../styles/views/houses-map.css";
import Houses from "../services/houses";
import mapIcon from "../utils/mapIcon";

export default {
  name: "HousesMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },

  data() {
    return {
      houses: [],
      icon: mapIcon,
    };
  },
  mounted() {
    Houses.listar()
      .then((response) => {
        this.houses = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>