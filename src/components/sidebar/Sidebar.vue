<template>
  <div class="sidebar">
    <Modal />
    <UserInfo />
    <UsersTable />
  </div>
</template>

<script>
import Modal from './Modal/';
import UserInfo from './UserInfo/';
import UsersTable from './UsersTable/';

export default {
  name: 'Sidebar',
  components: { UsersTable, UserInfo, Modal },
};
</script>

<style lang="scss" scoped>
@import './sidebar.scss';
</style>
