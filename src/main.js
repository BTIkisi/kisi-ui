import Vue from 'vue';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import App from './App';
import router from './router';
import store from './store';
import FastClick from 'fastclick';
import kisi from './plugins/kisi';
import vuetify from './plugins/vuetify';

Axios.defaults.baseURL = '/api';

Vue.use(VueAxios, Axios);
Vue.use(kisi);

const app = new Vue({
  render: h => h(App),
  router,
  vuetify,
  store,
}).$mount('#app');

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    async function() {
      FastClick.attach(document.body);
    },
    false
  );
}
