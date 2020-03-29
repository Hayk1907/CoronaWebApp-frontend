<template>
  <div id="app">
    <div class="main">
      <Sidebar class="sidebar" />
      <Map class="map" />
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
  methods: {
    ...mapActions(['setLoc']),
  },
  created() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        this.setLoc([lat, long]);
      },
      function(error) {
        console.log('The Locator was denied. :(', error);
      }
    );
  },
};
</script>

<style lang="scss">
@import './app.scss';
</style>
