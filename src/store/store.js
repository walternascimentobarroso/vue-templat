import { createStore } from "vuex";

export default createStore({
  state: {
    userData: "USER!",
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
  },
  actions: {},
  getters: {},
});
