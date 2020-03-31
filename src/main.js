import Vue from 'vue';
import App from './components/App/';

import { store } from './vuex/store/store';

import Buefy from 'buefy';
import Bulma from 'bulma';

import 'buefy/dist/buefy.css';

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_G_KEY,
    libraries: 'places,drawing,visualization',
  },
  installComponents: true,
});

Vue.use(Buefy);
Vue.use(Bulma);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
