<template>
  <div class="sidebar">
    <Header :userId="userId" />
    <UserInfo v-if="userId" />
    <UsersTable />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Header from './Header/';
import UserInfo from './UserInfo/';
import UsersTable from './UsersTable/';

export default {
  name: 'Sidebar',
  components: { UsersTable, UserInfo, Header },
  computed: {
    ...mapState(['userId']),
  },
  methods: {
    ...mapActions(['getUserById', 'getNearUsesr']),
  },
  created() {
    this.getUserById();
    this.getNearUsesr();
  },
};
</script>

<style lang="scss" scoped>
@import './sidebar.scss';
</style>
