<template>
  <div id="page-create-house">
    <Sidebar />

    <main>
      <form onSubmit="" class="create-house-form">
        <fieldset>
          <legend>Dados</legend>
          <span>Clique no mapa para adicionar a localização</span>
          <div style="height: 280px">
            <l-map
              style="height: 80%; width: 100%"
              :zoom="15"
              :center="[-22.9240243, -46.5644216]"              
            >
              <l-tile-layer
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </l-map>
          </div>

          <div class="input-block">
            <label htmlFor="proprietario">Proprietario</label>
            <input type="text" v-model="proprietarioField" />
          </div>

          <div class="input-block">
            <label htmlFor="descricao"
              >Descrições <span>Máximo de 300 caracteres</span></label
            >
            <textarea type="text" maxlength="300" v-model="descricaoField" />
          </div>

          <div class="input-block">
            <label htmlFor="whatsapp">Número do Whatsapp</label>
            <input type="text" v-model="whatsappField" />
          </div>

          <div class="input-block">
            <label htmlFor="valor">Valor</label>
            <input type="text" v-model="valorField" />
          </div>

          <div class="input-block">
            <label htmlFor="images">Fotos</label>

            <div class="images-container">
              <label htmlFor="image[]" class="new-image"> + </label>
            </div>
          </div>
        </fieldset>
       
        <router-link to="/house/teste" class="create-house">
           <button 
            class="confirm-button" 
            type="submit" 
           >Confirmar</button>
        </router-link>
      </form>
    </main>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import "../styles/components/sidebar.css";
import "../styles/views/create-house.css";

import { LMap, LTileLayer } from "vue2-leaflet";



export default {
  data() {
    return {
      proprietarioField: '',
    };
  },
  components: {
    Sidebar,
    LMap,
    LTileLayer,
  },  
};
</script>
