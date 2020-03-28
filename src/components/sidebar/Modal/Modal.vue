<template>
  <form action>
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
            type="text"
            v-model="temperature"
            placeholder="Your Temperature"
            required
          ></b-input>
        </b-field>

        <b-field label="Gender">
          <b-input
            type="text"
            v-model="gender"
            placeholder="Your Gender"
            required
          ></b-input>
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
import UserService from '../../../services/base.service';

export default {
  data() {
    return {
      name: '',
      surname: '',
      temperature: '',
      gender: '',
    };
  },
  methods: {
    createUser() {
      const user = {
        name: this.name,
        surname: this.surname,
        temperature: this.temperature,
        gender: this.gender,
      };

      UserService.createUser(user)
        .then(res => localStorage.setItem('userId', res.headers.user))
        .catch(e => console.log(e, 2));
    },
  },
};
// https://github.com/zmts/beauty-vuejs-boilerplate
// https://github.com/gothinkster/vue-realworld-example-app
// https://vuejsdevelopers.com/2018/04/23/vue-boilerplate-template-scaffold/
</script>
