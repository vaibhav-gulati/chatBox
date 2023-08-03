import { createStore } from 'vuex';
import { conversation, currentUser } from '../assets/data';

export default createStore({
  state: {
    conversation: [],
    currentUser: {},
  },
  mutations: {
    setConversation(state, data) {
      state.conversation = data;
    },
    setCurrentUser(state, data) {
      state.currentUser = data;
    },
    addReply(state, reply) {
      state.conversation.push(reply);
    },
  },
  actions: {
    async fetchConversation({ commit }) {
      try {
        const data = JSON.parse(conversation);
        commit('setConversation', data);
        return data;
      } catch (error) {
        throw new Error('Failed to fetch conversation data.');
      }
    },
    async fetchCurrentUser({ commit }) {
      try {
        const data = JSON.parse(currentUser);
        commit('setCurrentUser', data);
        return data;
      } catch (error) {
        throw new Error('Failed to fetch current user data.');
      }
    },
    async sendReply({ commit }, message) {
      try {
        const reply = {
          id: new Date().getTime(),
          from: JSON.parse(currentUser),
          message,
          date: new Date().toISOString(),
        };
        commit('addReply', reply);
        return reply;
      } catch (error) {
        throw new Error('Failed to send reply.');
      }
    },
  },
});
