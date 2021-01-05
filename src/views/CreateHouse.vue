<template>
  <div id="page-create-house">
    <Sidebar />

    <main>
      <form @submit.prevent="save" class="create-house-form">
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

              <LMarker
                v-if="this.position.latitude !== 0"
                :lat-lng="[this.position.latitude, this.position.longitude]"
                :icon="icon"
              ></LMarker>
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
              <img
                v-for="image in previewImages"
                v-bind:key="image"
                :src="image"
                :alt="image"
              />

              <label htmlFor="image[]" class="new-image">
                <input
                  @change="handleSelectImages"
                  type="file"
                  id="image[]"
                  multiple
                />
                +
              </label>
            </div>
          </div>
        </fieldset>

        <button class="confirm-button">Confirmar</button>
      </form>
    </main>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import "../styles/components/sidebar.css";
import "../styles/views/create-house.css";

import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

import Houses from "../services/houses";
import mapIcon from "../utils/mapIcon";

export default {
  data: () => ({
    proprietario: "",
    descricao: "",
    whatsapp: "",
    valor: "",
    position: {
      latitude: 0,
      longitude: 0,
    },
    images: [],
    previewImages: [],
    icon: mapIcon,
  }),

  methods: {
    handleMapClick(event) {
      const { lat, lng } = event.latlng;

      (this.position.latitude = lat), (this.position.longitude = lng);
    },

    handleSelectImages(event) {
      if (!event.target.files) {
        return;
      }
      const selectedImages = Array.from(event.target.files);
      this.images = selectedImages;

      const selectedImagesPreview = selectedImages.map((image) => {
        return URL.createObjectURL(image);
      });

      this.previewImages = selectedImagesPreview;
    },

    save() {
      const data = new FormData();

      data.append("proprietario", this.proprietario);
      data.append("descricao", this.descricao);
      data.append("whatsapp", this.whatsapp);
      data.append("valor", this.valor);
      data.append("latitude", String(this.position.latitude));
      data.append("longitude", String(this.position.longitude));

      this.images.forEach((image) => {
        data.append("images", image);
      });

      Houses.salvar(data)
        .then(() => {
          alert("Cadastro realizado co sucesso!");
          this.$router.push('/app')
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    Sidebar,
    LMap,
    LTileLayer,
    LMarker,
  },
};
</script>
