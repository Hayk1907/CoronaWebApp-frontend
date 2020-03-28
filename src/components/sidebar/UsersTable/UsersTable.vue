<template>
  <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
import UserService from '../../../services/base.service';

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
  created() {
    UserService.getAllNearUsesr()
      .then(users => {
        this.data = users;
      })
      .catch(e => console.log(e));
  },
};
</script>
