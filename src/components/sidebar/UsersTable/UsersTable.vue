<template>
  <b-table class="users-table" :data="users" :columns="columns"></b-table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      data: [],
      columns: [
        {
          field: 'name',
          label: 'First Name',
          class: 'users-table',
        },
        {
          field: 'surname',
          label: 'Last Name',
          class: 'users-table',
        },
        {
          field: 'date',
          label: 'Date',
          centered: true,
          class: 'users-table',
        },
        {
          field: 'gender',
          label: 'Gender',
          class: 'users-table',
        },
        {
          field: 'temperature',
          label: 'Temperature',
          width: '40',
          class: 'users-table',
        },
      ],
    };
  },
  computed: {
    ...mapState(['users']),
  },
};
</script>

<style lang="scss">
@import './users-table.scss';
</style>
