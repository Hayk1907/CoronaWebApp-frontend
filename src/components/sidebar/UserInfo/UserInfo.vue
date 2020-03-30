<template>
  <div class="card user-info">
    <div class="card-content">
      <div class="card-data is-capitalized">
        <div
          class="columns is-multiline is-mobile user-details has-text-justified"
        >
          <p class="is-4 column bd-notification is-primary">
            Name : {{ currentUser.name }}
          </p>
          <p class="is-4 column bd-notification is-primary">
            Surname : {{ currentUser.surname }}
          </p>
        </div>
        <div
          class="columns is-multiline is-mobile user-details has-text-justified"
        >
          <p class="is-5 column">gender : {{ currentUser.gender }}</p>
          <p class="is-5 column">temperature : {{ currentUser.temperature }}</p>
        </div>
      </div>

      <div class="title title-msg content is-4">
        <p>We hope that you will better soon !</p>
      </div>
      <div class="content is-5 date">
        <time>{{ currentUser.date }}</time>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UserInfo',
  computed: {
    ...mapState(['currentUser']),
  },
};
</script>

<style lang="scss" scoped>
@import './userinfo.scss';
</style>
