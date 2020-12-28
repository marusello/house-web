<template>
  <div id="page-create-house">
    <Sidebar />

    <main>
      <form @submit="onSubmit" class="create-house-form">
        <fieldset>
          <legend>Dados</legend>
          <span>Clique no mapa para adicionar a localização</span>
          <div style="height: 280px">
            <l-map
              style="height: 80%; width: 100%"
              :zoom="15"
              :center="[-22.9240243, -46.5644216]"
              v-on:click="handleMapClick"
            >
              <l-tile-layer
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </l-map>
          </div>

          <div class="input-block">
            <label htmlFor="proprietario">Proprietario</label>
            <input type="text" v-model="proprietario" />
          </div>

          <div class="input-block">
            <label htmlFor="descricao"
              >Descrições <span>Máximo de 300 caracteres</span></label
            >
            <textarea type="text" maxlength="300" v-model="descricao" />
          </div>

          <div class="input-block">
            <label htmlFor="whatsapp">Número do Whatsapp</label>
            <input type="text" v-model="whatsapp" />
          </div>

          <div class="input-block">
            <label htmlFor="valor">Valor</label>
            <input type="text" v-model="valor" />
          </div>

          <div class="input-block">
            <label htmlFor="images">Fotos</label>

            <div class="images-container">
              <label htmlFor="image[]" class="new-image">
                <input
                  multiple
                  @change="handleSelectImages"
                  type="file"
                  id="image[]"
                />
                +
              </label>
            </div>
          </div>
        </fieldset>

        <button class="confirm-button" type="submit">Confirmar</button>
      </form>
    </main>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import "../styles/components/sidebar.css";
import "../styles/views/create-house.css";

import { LMap, LTileLayer } from "vue2-leaflet";
import api from '../services/api';

export default {
  data: () => ({
    proprietario: "",
    descricao: "",
    whatsapp: "",
    valor: "",
    position: {
      latitude: 0,
      longitude: 0
    },
    images: []
  }),

  methods: {
    handleMapClick(event) {
     const { lat, lng } = event.latlng;

       this.position.latitude = lat,
       this.position.longitude = lng

    },

    handleSelectImages(event) {
      if (!event.target.files) {
        return;
      }
      const selectedImages = Array.from(event.target.files);
      this.images = selectedImages;

      console.log(this.images);
    },

    async onSubmit(event) {
      event.preventDefault();

      const data = new FormData();

      data.append("proprietario", this.proprietario);
      data.append("descricao", this.descricao);
      data.append("whatsapp", this.whatsapp);
      data.append("valor", this.valor);
      data.append("latitude", String(this.position.latitude));
      data.append("longitude", String(this.position.longitude));

      this.images.forEach(image => {
        data.append('images', image);
      })

      await api.post('houses', data);

      alert('Cadastro realizado co sucesso!');

    },
  },
  components: {
    Sidebar,
    LMap,
    LTileLayer,
  },
};
</script>
