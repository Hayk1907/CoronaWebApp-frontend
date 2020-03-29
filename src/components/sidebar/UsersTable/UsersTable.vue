<template>
  <b-table class="users-table" :data="users" :columns="columns"></b-table>
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
          label: 'Temperature',
          width: '40',
        },
      ],
    };
  },
  computed: {
    ...mapState(['users', 'socket']),
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
