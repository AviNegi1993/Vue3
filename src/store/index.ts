import { GetterTree, MutationTree, ActionTree, createStore } from "vuex"
import auth from './Auth/index';

class State {
  userId: string | null = null;
}

const getters = <GetterTree<State, any>>{
};

const mutations = <MutationTree<State>>{
  setUserId(state, payload) {
    state.userId = payload;
  }
};

const actions = <ActionTree<State, any>>{
  fetchUserId(store) {
  }
};

const store = createStore({
  state: new State(),
  mutations: mutations,
  actions: actions,
  modules: {
    auth
  }
})

export default store;