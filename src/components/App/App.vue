<template>
  <div id="app">
    <div class="main">
      <Sidebar />
      <Map />
    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
@import './app.scss';
</style>
