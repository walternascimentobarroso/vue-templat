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
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      if (index >= 0) {
        state.todos.splice(index, 1, payload);
      } else {
        state.todos.push(payload);
      }
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index >= 0) {
        state.todos.splice(index, 1);
      }
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      this.loading = true;
      const response = await axios.get("http://localhost:3000/todos");
      commit("storeTodos", response.data);
    },

    async addTodo({ commit }, payload) {
      const response = await axios.post("http://localhost:3000/todos", payload);
      commit("storeTodo", response.data);
    },

    async updateTodo({ commit }, { id, payload }) {
      const response = await axios.put(
        `http://localhost:3000/todos/${id}`,
        payload
      );
      commit("storeTodo", response.data);
    },

    async deleteTodo({ commit }, id) {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      commit("deleteTodo", id);
    },
  },
  getters: {},
});
