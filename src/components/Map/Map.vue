<template>
  <div class="map">Map</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  // methods: {
  //   async getStreetAddressFrom() {
  //     try {
  //       const data = await UserService.getLocation(this.lat, this.long);
  //       if (data.error_message) {
  //         console.log(data.error_message);
  //       } else {
  //         this.address = data.results[0].formatted_address;
  //         console.log(this.address);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   },
  // },
  computed: {
    ...mapState(['currentLocation']),
  },
};
</script>

<style lang="scss" scoped>
@import './map.scss';
</style>
