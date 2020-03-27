<template>
  <section>
    <b-button
      type="is-info"
      rounded
      class="button is-primary is-medium"
      @click="isComponentModalActive = true"
      >Add Me</b-button
    >

    <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <ModalForm></ModalForm>
    </b-modal>
  </section>
</template>

<script>
import ModalForm from '../ModalForm/';

export default {
  components: {
    ModalForm,
  },
  data() {
    return {
      isComponentModalActive: false,
    };
  },
};
// https://github.com/zmts/beauty-vuejs-boilerplate
// https://github.com/gothinkster/vue-realworld-example-app
// https://vuejsdevelopers.com/2018/04/23/vue-boilerplate-template-scaffold/
</script>
