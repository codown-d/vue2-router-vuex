import Vue from 'vue'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
console.log(JSON.parse(sessionStorage.getItem('user')))
const state = JSON.parse(sessionStorage.getItem('user'))||{}

// getters
const getters = {
  count: state => state.count++
}

// actions
const actions = {
    [types.USER_SIGNIN]({commit}, user) {
      commit(types.USER_SIGNIN, user)
    },
    [types.USER_SIGNOUT]({commit}) {
      commit(types.USER_SIGNOUT)
    }
}

// mutations
const mutations = {
  [types.USER_SIGNIN](state, user) {
    console.log(state)
    console.log(user)
    sessionStorage.setItem('user', JSON.stringify(user))
    Object.assign(state, user)
     console.log(state)
  },
  [types.USER_SIGNOUT](state) {
    sessionStorage.removeItem('user')
     Object.keys(state).forEach(k => Vue.delete(state, k))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
