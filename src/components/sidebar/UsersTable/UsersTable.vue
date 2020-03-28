<template>
  <b-table :data="users" :columns="columns"></b-table>
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
    ...mapState(['users']),
  },
};
</script>
