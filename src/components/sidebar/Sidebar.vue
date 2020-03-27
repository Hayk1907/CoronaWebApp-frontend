<template>
  <div class="sidebar">
    <UserInfo />
    <UsersTable />
  </div>
</template>

<script>
import UserInfo from './UserInfo/';
import UsersTable from './UsersTable/';

export default {
  name: 'Sidebar',
  components: { UsersTable, UserInfo },
};
</script>

<style lang="scss" scoped>
@import './sidebar.sass';
</style>
