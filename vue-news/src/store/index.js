import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex); // vuex는 플러그인 형태로 제공되기 때문에 이렇게 사용해 준다..?

export const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions 
});