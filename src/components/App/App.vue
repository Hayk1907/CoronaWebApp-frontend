<template>
  <div id="app">
    <div class="main">
      <Sidebar />
      <Map />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Map from '../Map/Map.vue';
import Sidebar from '../sidebar/Sidebar.vue';

export default {
  name: 'App',
  components: { Sidebar, Map },
  // mounted() {
  //   // At this point, the child GmapMap has been mounted, but
  //   // its map has not been initialized.
  //   // Therefore we need to write mapRef.$mapPromise.then(() => ...)

  //   // this.$refs.mapRef.$mapPromise.then(map => {
  //   //   map.panTo({ lat: 1.38, lng: 103.8 });
  //   // });
  // },
  // created() {
  // },
  methods: {
    ...mapActions(['setLoc']),
  },
  created() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        this.setLoc(lat, long);
      },
      function(error) {
        console.log('The Locator was denied. :(', error);
      }
    );
  },
};
</script>

<style lang="scss" scoped>
@import './app.scss';
</style>
