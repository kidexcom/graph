import { createStore } from 'vuex'

export default createStore({
  state: {
    storage: 0,
    transfer: 0
  },
  getters: {
  },
  mutations: {
    updateValueStorage (state, value) {
      state.storage = value
    },
    updateValueTransfer (state, value) {
      state.transfer = value
    }
  },
  actions: {
  },
  modules: {
  }
})
