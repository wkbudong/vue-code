
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: 1,
  checkoutStatus: 2
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  
}

// mutations
const mutations = {
  [types.ADD] (state, { num }) {
    state.added += num;
    state.checkoutStatus *= state.added
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}