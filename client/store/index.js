import Vue from 'vue';
import Vuex from 'vuex';
import add from './modules/add.js';
import indexPage from './modules/indexPage.js';
import * as getters from './getters/index.js'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);
let store = {
  getters,
  modules: {
    add,
    indexPage
  },
}
if(__DEBUG__) {
  store = Object.assign({}, store, {
    plugins: [createLogger()]
  })
}
export default new Vuex.Store(store);