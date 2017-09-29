import Vue from 'vue';
import VueRouter from "vue-router";

import Talk from '../page/talk/index.vue';
import IndexPage from '../page/indexPage/index.vue';

import Toasted from "vue-toasted";

Vue.use(VueRouter);
Vue.use(Toasted, {
  position: "top-cente",
  duration: 1000,
});
const routes = [{
  path: '/',
  component: IndexPage
}, {
  path: '/talk',
  component: Talk
}];

export default function configureRouter() {
  let router = new VueRouter({
    routes,
    mode: 'history'
  });
  return router;
};
