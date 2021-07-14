import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      contactInformation: [],
   },
   mutations: {
      ADD_CONTACT_INFORMATION(state, payload) {
         state.contactInformation.push(payload)
      }
   },
   actions: {
      ADD_NEW_CONTACT({ commit }, data) {
         commit("ADD_CONTACT_INFORMATION", data)
      }
   },
   getters: {
      GET_CONTACT_LIST(state) {
         return state.contactInformation
      }
   }
  });