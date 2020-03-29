<template>
  <form action class="modal-form">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Add in list</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Name">
          <b-input
            type="text"
            v-model="name"
            placeholder="Your Name"
            required
          ></b-input>
        </b-field>

        <b-field label="Surname">
          <b-input
            type="text"
            v-model="surname"
            placeholder="Your Surname"
            required
          ></b-input>
        </b-field>

        <b-field label="Temperature">
          <b-input
            type="number"
            v-model="temperature"
            placeholder="Your Temperature"
            required
          ></b-input>
        </b-field>

        <b-field label="Gender">
          <div class="control">
            <label class="radio">
              <input type="radio" v-model="gender" v-bind:value="male" />
              male
            </label>
            <label class="radio" required>
              <input type="radio" v-model="gender" v-bind:value="female" />
              female
            </label>
          </div>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">
          Close
        </button>
        <button class="button is-primary" type="button" @click="createUser">
          Add
        </button>
      </footer>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      surname: '',
      temperature: '',
      gender: '',
      male: 'male',
      female: 'female',
    };
  },
  computed: {
    ...mapState(['currentLocation']),
  },
  methods: {
    ...mapActions(['addCurrentUser']),
    createUser() {
      if (
        this.name === '' ||
        this.surname === '' ||
        this.temperature === '' ||
        this.gender === ''
      ) {
        console.log('something went wrong');

        this.$parent.close();
        return;
      }
      if (!this.currentLocation.lat && !this.currentLocation.long) {
        console.log('something went wrong');

        this.$parent.close();
        return;
      }
      const user = {
        name: this.name,
        surname: this.surname,
        temperature: this.temperature,
        gender: this.gender,
      };
      this.addCurrentUser(user);
      this.$parent.close();
    },
  },
};
// https://github.com/zmts/beauty-vuejs-boilerplate
// https://github.com/gothinkster/vue-realworld-example-app
// https://vuejsdevelopers.com/2018/04/23/vue-boilerplate-template-scaffold/
</script>

<style lang="scss" scoped>
@import './modal.scss'
</style>
