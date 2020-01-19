import Vue from 'vue'
import Vuex from 'vuex'
import VuePersistence from 'vuex-persist'
import { state, State } from './state'
import { mutations } from './mutations'
import { getters } from './getters'
Vue.use(Vuex)

const vuexLocal = new VuePersistence<State>({
    storage: window.localStorage
})

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin]
})
