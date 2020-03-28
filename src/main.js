import Vue from 'vue';
import App from './components/App/';

import { ValidationProvider } from 'vee-validate';

import Buefy from 'buefy';
import Bulma from 'bulma';

Vue.use(Buefy);
Vue.use(Bulma);

Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
