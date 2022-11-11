import { createStore, Module, GetterTree, MutationTree, ActionTree } from 'vuex';

interface State {
  authenticated: string | null,
  error: boolean
}

const states: State = {
  authenticated: localStorage.getItem('token'),
  error: false
}

const mutations = <MutationTree<State>>{
  removeAuth(state) {
    state.authenticated = null;
    localStorage.removeItem('token');
  },
  setAuth(state, payload) {
    state.authenticated = payload.token;
    localStorage.setItem('token', payload.token);
    localStorage.setItem('expires_at', payload.expires_at);
  }
};

const getters = <GetterTree<State, any>>{
  isAuthenticated(state) {
    return state.authenticated
  }
}

export default {
  state: states,
  getters: getters,
  mutations: mutations,
  namespaced: true
}