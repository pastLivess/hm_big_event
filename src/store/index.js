import Vue from 'vue'
import Vuex from 'vuex'
import createdPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
  },
  actions: {
    updateToken(store, token) {
      store.commit('UPDATE_TOKEN', token)
    },
  },
  mutations: {
    UPDATE_TOKEN(state, token) {
      state.token = token
    },
  },
  plugins: [createdPersistedState()],
})

export default store
