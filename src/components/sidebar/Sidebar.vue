<template>
  <div class="sidebar">
    <Header :userId="userId" />
    <UserInfo v-if="userId" :userId="userId" />
    <UsersTable />
  </div>
</template>

<script>
import Header from './Header/';
import UserInfo from './UserInfo/';
import UsersTable from './UsersTable/';

export default {
  name: 'Sidebar',
  components: { UsersTable, UserInfo, Header },
  data() {
    return {
      userId: null,
    };
  },
  created() {
    const id = localStorage.getItem('userId');
    if (id) this.userId = id;
  },
};
</script>

<style lang="scss" scoped>
@import './sidebar.scss';
</style>
