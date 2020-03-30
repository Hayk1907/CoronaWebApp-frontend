<template>
  <div id="app">
    <div class="main">
      <Sidebar class="sidebar" ref="element" />
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
    ...mapActions(['setLoc', 'getNearUsesr']),
  },
  created() {
    const loadingComponent = this.$buefy.loading.open({
      container: null,
    });
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        this.setLoc([lat, long]);
        this.getNearUsesr();
        loadingComponent.close();
      },
      function(error) {
        console.log('The Locator was denied. :(', error);
        loadingComponent.close();
      }
    );
  },
};
</script>

<style lang="scss">
@import './app.scss';
</style>
