<template>
  <div class="map">
    <GmapMap
      :center="{
        lat: Number(currentLocation.lat),
        lng: Number(currentLocation.long),
      }"
      :zoom="15"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
    >
      <GmapMarker
        v-for="(user, index) in users"
        :key="index"
        :position="{
          lat: Number(user.lat),
          lng: Number(user.long),
        }"
        :clickable="true"
        :draggable="false"
        @click="
          center = {
            lat: Number(user.lat),
            lng: Number(user.long),
          }
        "
      >
        <GmapInfoWindow>
          Name : {{ user.name }} , Surname : {{ user.surname }} <br />>
          Temperature : {{ user.temperature }}
        </GmapInfoWindow>
      </GmapMarker>
    </GmapMap>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['currentLocation', 'users']),
  },
};
</script>

<style lang="scss" scoped>
@import './map.scss';
</style>
