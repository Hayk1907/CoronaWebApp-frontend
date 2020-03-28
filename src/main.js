import Vue from 'vue';
import App from './components/App/';

import { store } from './vuex/store/store';

import { ValidationProvider, validate } from 'vee-validate';

import Buefy from 'buefy';
import Bulma from 'bulma';

Vue.use(Buefy);
Vue.use(Bulma);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('validate', validate);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
