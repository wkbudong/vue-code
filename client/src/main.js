
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

import { default as configureRouter } from './util/creat-router.js';

Vue.use(VueRouter);

let router = configureRouter();

const Root = new Vue({
  router,
  store
}).$mount('#app');
