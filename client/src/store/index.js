import Vue from 'vue';
import Vuex from 'vuex';
import { teams } from './modules/teams';
import { card } from './modules/card';
import { timer } from './modules/timer.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    teams,
    card,
    timer
  }
});
