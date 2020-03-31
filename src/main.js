import Vue from 'vue';
import App from './components/App/';

import { store } from './vuex/store/store';

import Buefy from 'buefy';
import Bulma from 'bulma';

import 'buefy/dist/buefy.css';
//import config from '../getEnvKeys'

import * as VueGoogleMaps from 'vue2-google-maps';
console.log(process.env.G_KEY);
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.G_KEY,
    libraries: 'places,drawing,visualization',
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
  },
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
  installComponents: true,
});

Vue.use(Buefy);
Vue.use(Bulma);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
