import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProjects: [
      {
        id: '65789',
        title: 'test'
      },
      {
        id: '12345',
        title: 'test2'
      },
      {
        id: '45678',
        title: 'test3'
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
