<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      action
      method="post"
      class="modal-form"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Add in list</p>
        </header>
        <section class="modal-card-body">
          <ValidationProvider
            name="name"
            ref="name"
            rules="required"
            v-slot="{ errors }"
          >
            <b-field label="Name">
              <b-input
                type="text"
                name="name"
                v-model="name"
                placeholder="Your Name"
              ></b-input>
            </b-field>
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            name="surname"
            ref="surname"
            rules="required"
            v-slot="{ errors }"
          >
            <b-field label="Surname">
              <b-input
                type="text"
                v-model="surname"
                name="surname"
                placeholder="Your Surname"
              ></b-input>
            </b-field>
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            name="temperature"
            ref="temperature"
            :rules="{
              required: true,
              regex: /^(3[5-9]|4[0-2]){1}((\.){0,1})([1-9]){0,1}$/,
            }"
            v-slot="{ errors }"
          >
            <b-field label="Temperature">
              <b-input
                type="text"
                name="temperature"
                v-model="temperature"
                placeholder="Your Temperature"
              ></b-input>
            </b-field>
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            name="gender"
            ref="gender"
            rules="required"
            v-slot="{ errors }"
          >
            <b-field label="Gender">
              <div class="control">
                <label class="radio">
                  <input
                    type="radio"
                    v-model="gender"
                    v-bind:value="male"
                    name="gender"
                  />
                  male
                </label>
                <label class="radio">
                  <input
                    type="radio"
                    v-model="gender"
                    v-bind:value="female"
                    name="gender"
                  />
                  female
                </label>
              </div>
            </b-field>
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">
            Close
          </button>
          <button class="button is-primary" type="submit">Submit</button>
        </footer>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule],
  });
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
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
    ...mapActions(['addCurrentUser', 'setLoc']),
    onSubmit() {
      if (!this.currentLocation.lat && !this.currentLocation.long) {
        this.$buefy.toast.open({
          duration: 5000,
          message: `We don\`t know your lacation turn on and try again`,
          position: 'is-bottom',
          type: 'is-danger',
        });
        this.$parent.close();
        return;
      }
      const user = {
        name: this.name,
        surname: this.surname,
        temperature: `${this.temperature} C`,
        gender: this.gender,
      };
      this.addCurrentUser(user);
      this.$parent.close();
    },
  },
  created() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        this.setLoc([lat, long]);
      },
      function(error) {
        console.log('The Locator was denied. :(', error);
      }
    );
  },
};
</script>

<style lang="scss" scoped>
@import './modal.scss';
</style>
