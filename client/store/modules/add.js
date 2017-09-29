
import * as types from '../mutation-types'
import ajax from '../../util/ajax'
import axios from '../../util/axios'
import $ from 'jquery'
const state = {
  added: 1,
  checkoutStatus: 2,
  data:""
}


const actions = {
  add({commit}, num){
    commit(types.ADD, {
      num
    })
  },
  async getData({commit}){
    try {
      let data = await axios('/event/list', {loc: 108288, start: 0, count: 3}, 'get')
      console.log(data);
      commit(types.GETDATA, {
        data
      })
    } catch(error) {
      console.log(error)
    }
  },
  async getMusic({commit}) {
    try {
      //let data = await ajax('https://api.douban.com/v2/music/search', {tag: 'pop', start: 0, count: 6}, 'get')
      //console.log(data);
      let data = await axios('/music/search', {tag: 'pop', start: 0, count: 6}, 'get')
      commit(types.GETMUSIC, {
        data
      })
    } catch(error) {
      console.log(error)
    }
  }
}


// mutations
const mutations = {
  [types.ADD] (state, { num }) {
    state.added += num;
    state.checkoutStatus *= state.added
  },
  [types.GETDATA] (state, { data }) {
    state.data = data;
    console.log(state.data);
  },
  [types.GETMUSIC] (state, { data }) {
    state.data = data;
    console.log(state.data);
  },
}

export default {
  state,
  actions,
  mutations
}