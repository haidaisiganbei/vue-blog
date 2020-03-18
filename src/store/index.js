import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: window.sessionStorage.getItem("token"),
  },
  mutations: {
    setToken(state, token){
      sessionStorage.setItem("token", token);
      state.token = token;
    },
    removeToken(){
      sessionStorage.removeItem("token", token);
      state.token = token;
    }


  },
  actions: {
  },
  modules: {
  }
})
