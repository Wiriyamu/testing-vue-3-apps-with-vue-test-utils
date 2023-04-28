import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  mutations: {
    increment() {
      this.state.count++;
    }
  },
  actions: {
  },
  modules: {
  }
})
