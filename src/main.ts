import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

import { BootstrapVue } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faChevronRight,
  faUserCircle,
  faUser,
  faTachometerAlt,
  faDatabase,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import router from './router';

import App from './App.vue';

library.add(
  faChevronRight,
  faUserCircle,
  faUser,
  faTachometerAlt,
  faDatabase,
  faFile,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
