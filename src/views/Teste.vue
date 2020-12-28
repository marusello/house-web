<template>
<l-map style="height: 6000px" :zoom="zoom" :center="center">
<l-tile-layer :url="url"></l-tile-layer>

<l-marker
        :lat-lng="[47.413220, -1.209482]"
        :icon="icon" > </l-marker>
</l-map>

</template>

<script>
import L from 'leaflet';
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import img from '../assets/icone.png';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 13,
      center: [47.413220, -1.219482],
      icon: L.icon({
        iconUrl: img,
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      staticAnchor: [16, 37],
      customText: 'Foobar',
      iconSize: 64
    };
  },
  computed: {
    dynamicSize () {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor () {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  }
}
</script>