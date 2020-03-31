<template>
  <div>
    <p
      v-if="!currentLocation.lat && !currentLocation.long"
      class="is-primary is-4 info-users"
    >
      We don`t know your location that we show you Infected near 1km
    </p>
    <p
      v-if="users.length === 0 && currentLocation.lat && currentLocation.long"
      class="is-primary is-4 info-users"
    >
      Ther ar no Pacients neare 1km
    </p>
    <b-table
      v-if="users.length !== 0"
      class="users-table"
      :data="users"
      :columns="columns"
    ></b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      data: [],
      columns: [
        {
          field: 'name',
          label: 'First Name',
        },
        {
          field: 'surname',
          label: 'Last Name',
        },
        {
          field: 'date',
          label: 'Date',
          centered: true,
        },
        {
          field: 'gender',
          label: 'Gender',
        },
        {
          field: 'temperature',
          label: 'Temperature C',
          width: '40',
        },
      ],
    };
  },
  computed: {
    ...mapState(['users', 'socket', 'currentLocation']),
  },
  methods: {
    ...mapActions(['addUser']),
  },
  mounted() {
    this.socket.on('NEW_PACIENT', user => {
      this.addUser(user);
    });
  },
};
</script>

<style lang="scss">
@import './users-table.scss';
</style>
