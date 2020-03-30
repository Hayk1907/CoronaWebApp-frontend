<template>
  <header>
    <div class="header-content has-text-center">
      <div class="title word-to-everyone">
        <h1>Stay at home and Save world !!!</h1>
      </div>

      <section v-if="!userId">
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
          <Modal></Modal>
        </b-modal>
      </section>
    </div>
    <div v-if="!userId" class="title content is-4 doctor-words">
      <p>Situation update worldwide, as of {{ date }}.</p>
    </div>
  </header>
</template>

<script>
import Modal from '../Modal/';
import moment from 'moment';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      isComponentModalActive: false,
      date: moment().format('LL'),
    };
  },
  props: {
    userId: {
      type: null,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './header.scss';
</style>
