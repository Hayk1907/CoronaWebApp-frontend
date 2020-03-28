<template>
  <div class="map" ref="address">Map : {{ address }}</div>
</template>

<script>
import UserService from '../../services/base.service';

export default {
  data() {
    return {
      lat: 0,
      long: 0,
      address: null,
    };
  },
  methods: {
    async getStreetAddressFrom() {
      try {
        const data = await UserService.getLocation(this.lat, this.long);
        if (data.error_message) {
          console.log(data.error_message);
        } else {
          this.address = data.results[0].formatted_address;
          console.log(this.address);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  created() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      },
      function(error) {
        console.log('The Locator was denied. :(', error);
      }
    );
    this.getStreetAddressFrom();
  },
};
</script>

<style lang="scss" scoped>
@import './map.scss';
</style>
