
import * as types from '../mutation-types'
import ajax from '../../util/ajax'
import axios from '../../util/axios'
import $ from 'jquery'
const state = {
  banner: {},
  rank: {},
  other:{}
}


const actions = {
  async getIndexBanner({commit}){
    try {
      let {status, statusText, data} = await axios('/res/loc', {pf: 7, id:1695}, 'get')
      commit(types.GET_INDEX_BANNER, {
        banner: data
      })
    } catch(error) {
      console.log(error)
    }
  },
  async getIndexRank({commit}) {
    try {
      let {status, statusText, data} = await axios('/ranking/index', {day : 3}, 'get')
      commit(types.GET_INDEX_RANK, {
        rank: data
      })
    } catch(error) {
      console.log(error)
    }
  },
  async getIndexOther({commit}) {
    try {
      let {status, statusText, data} = await axios('/dynamic/index', {}, 'get')
      commit(types.GET_INDEX_OTHER, {
        other: data
      })
    } catch(error) {
      console.log(error)
    }
  }
}


// mutations
const mutations = {
  [types.GET_INDEX_BANNER] (state, { banner }) {
    state.banner = banner;
  },
  [types.GET_INDEX_RANK] (state, { rank }) {
    state.rank = rank;
  },
  [types.GET_INDEX_OTHER] (state, { other }) {
    state.other = other;
  }
}

export default {
  state,
  actions,
  mutations
}