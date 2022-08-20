import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uphone:window.sessionStorage.getItem('uphone')
  },
  getters: {
  },
  mutations: {
    updateUphone(state,phone){
      state.uphone=phone
      window.sessionStorage.setItem('uphone',phone)
    },
    loginout(state){
      state.uphone=''
      sessionStorage.clear()
    }

  },
  actions: {
  },
  modules: {
  }
})
