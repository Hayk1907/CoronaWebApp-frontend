<template>
  <div class="card user-info">
    <div class="card-content">
      <div class="card-data is-capitalized">
        <div class="columns is-multiline is-mobile media has-text-justified">
          <p class="is-4 column bd-notification is-primary">
            Name : {{ name }}
          </p>
          <p class="is-4 column bd-notification is-primary">
            Suranme : {{ surname }}
          </p>
        </div>
        <div class="columns is-multiline is-mobile media has-text-justified">
          <p class="is-5 column">gender : {{ gender }}</p>
          <p class="is-5 column">temperature : {{ temperature }}</p>
        </div>
      </div>

      <div class="title content is-4">
        We hope that you will better soon !
        <br />
      </div>
      <div class="content is-5">
        <time datetime="2016-1-1">{{ date }}</time>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../../../services/base.service';
import moment from 'moment';

export default {
  name: 'UserInfo',
  data() {
    return {
      name: '',
      surname: '',
      temperature: '',
      gender: '',
      date: '',
    };
  },
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  created() {
    UserService.getUserById(this.userId)
      .then(user => {
        this.name = user.name;
        this.surname = user.surname;
        this.gender = user.gender;
        this.temperature = user.temperature;
        this.date = moment(user.data).format('LL');
      })
      .catch(e => console.log(e));
  },
};
</script>

<style lang="scss" scoped>
@import './userinfo.scss';
</style>
