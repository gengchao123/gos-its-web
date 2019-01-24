import Vue from 'vue'
import Vuex from 'vuex'
import publicModules from './modules/public'
import tablist from './modules/tablist'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    publicModules,
    tablist
  }
})

export default store
