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
            :name="name"
            placeholder="Your Name"
            required
          ></b-input>
        </b-field>

        <b-field label="Surname">
          <b-input
            type="text"
            :surname="surname"
            placeholder="Your Surname"
            required
          ></b-input>
        </b-field>

        <b-field label="Temperature">
          <b-input
            type="text"
            :temperature="temperature"
            placeholder="Your Temperature"
            required
          ></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">
          Close
        </button>
        <button class="button is-primary">Add</button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      temeratu: '',
    };
  },
};
</script>
