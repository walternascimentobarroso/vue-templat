import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    userData: "USER!",
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
    storeTodo(state, payload) {
      state.todos.push(payload);
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      this.loading = true;
      const response = await axios.get("http://localhost:3000/todos");
      commit("storeTodos", response.data);
    },

    addTodo({ commit }, payload) {
      axios.post("http://localhost:3000/todos", payload).then((response) => {
        commit("storeTodo", response.data);
      });
    },
  },
  getters: {},
});
