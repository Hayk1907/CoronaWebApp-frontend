<template>
  <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          first_name: 'Jesse',
          last_name: 'Simmons',
          date: '2016-10-15 13:43:27',
          gender: 'Male',
          temerature: '38 C',
        },
        {
          first_name: 'John',
          last_name: 'Jacobs',
          date: '2016-12-15 06:00:53',
          gender: 'Male',
          temerature: '36,45 C',
        },
        {
          first_name: 'Tina',
          last_name: 'Gilbert',
          date: '2016-04-26 06:26:28',
          gender: 'Female',
          temerature: '38 C',
        },
        {
          first_name: 'Clarence',
          last_name: 'Flores',
          date: '2016-04-10 10:28:46',
          gender: 'Male',
          temerature: '40 C',
        },
        {
          first_name: 'Anne',
          last_name: 'Lee',
          date: '2016-12-06 14:38:38',
          gender: 'Female',
          temerature: '37 C',
        },
      ],
      columns: [
        {
          field: 'first_name',
          label: 'First Name',
        },
        {
          field: 'last_name',
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
          field: 'temerature',
          label: 'Temerature',
          width: '40',
        },
      ],
    };
  },
};
</script>
