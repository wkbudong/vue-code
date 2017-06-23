import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions/index.js';
import add from './modules/add.js';
import * as getters from './getters/index.js'

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    add
  }
})